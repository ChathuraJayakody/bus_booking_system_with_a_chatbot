const supabase = require("../config/database");
const crypto = require("crypto");

/**
 * Generate unique booking reference
 */
const generateReference = () => {
    return "BK-" + crypto.randomBytes(4).toString("hex").toUpperCase();
};

/**
 * POST /api/bookings
 */
exports.createBooking = async (req, res) => {
    const { schedule_id, number_of_seats } = req.body;
    const userId = req.user?.id; // ✅ get user ID from auth middleware

    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    try {
        // 1. Fetch schedule safely
        const { data: schedule, error: scheduleError } = await supabase
            .from("bus_schedules")
            .select("available_seats")
            .eq("id", schedule_id)
            .maybeSingle();

        if (scheduleError) throw new Error(scheduleError.message);
        if (!schedule) throw new Error("Schedule not found");

        if (schedule.available_seats < number_of_seats) {
            throw new Error("Not enough available seats");
        }

        // 2. Generate booking reference
        const reference = generateReference();

        // 3. Insert booking
        const { data: bookingData, error: bookingError } = await supabase
            .from("bookings")
            .insert([
                {
                    user_id: userId,
                    schedule_id,
                    booking_reference: reference,
                    number_of_seats,
                    booking_status: "confirmed",
                    payment_status: "pending",
                },
            ])
            .select();

        if (bookingError) throw new Error(bookingError.message);
        const booking = bookingData[0];

        // 4. Update available seats
        const { error: updateError } = await supabase
            .from("bus_schedules")
            .update({ available_seats: schedule.available_seats - number_of_seats })
            .eq("id", schedule_id);

        if (updateError) throw new Error(updateError.message);

        res.status(201).json({
            message: "Booking created successfully",
            booking,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * GET /api/bookings
 */
exports.getUserBookings = async (req, res) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { status, payment_status } = req.query;

    try {
        let query = supabase.from("bookings").select("*").eq("user_id", userId);

        if (status) query = query.eq("booking_status", status);
        if (payment_status) query = query.eq("payment_status", payment_status);

        const { data, error } = await query;
        if (error) throw new Error(error.message);

        res.json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * GET /api/bookings/:id
 */
exports.getBookingById = async (req, res) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { id } = req.params;

    try {
        const { data, error } = await supabase
            .from("bookings")
            .select("*")
            .eq("id", id)
            .eq("user_id", userId)
            .maybeSingle(); // ✅ safer than single

        if (error) throw new Error(error.message);
        if (!data) return res.status(404).json({ error: "Booking not found" });

        res.json(data);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

/**
 * PUT /api/bookings/:id
 */
exports.updateBookingStatus = async (req, res) => {
    const { id } = req.params;
    const { booking_status, payment_status } = req.body;

    try {
        const { data, error } = await supabase
            .from("bookings")
            .update({ booking_status, payment_status })
            .eq("id", id)
            .select()
            .maybeSingle();

        if (error) throw new Error(error.message);
        if (!data) return res.status(404).json({ error: "Booking not found" });

        res.json(data);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

/**
 * DELETE /api/bookings/:id
 */
exports.cancelBooking = async (req, res) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { id } = req.params;

    try {
        // 1. Fetch booking
        const { data: booking, error: bookingError } = await supabase
            .from("bookings")
            .select("*")
            .eq("id", id)
            .eq("user_id", userId)
            .maybeSingle();

        if (bookingError) throw new Error(bookingError.message);
        if (!booking) return res.status(404).json({ error: "Booking not found" });
        if (booking.booking_status === "cancelled") throw new Error("Booking already cancelled");

        // 2. Fetch schedule to restore seats
        const { data: schedule, error: scheduleError } = await supabase
            .from("bus_schedules")
            .select("available_seats")
            .eq("id", booking.schedule_id)
            .maybeSingle();

        if (scheduleError) throw new Error(scheduleError.message);
        if (!schedule) throw new Error("Schedule not found");

        // 3. Update available seats
        const { error: updateError } = await supabase
            .from("bus_schedules")
            .update({ available_seats: schedule.available_seats + booking.number_of_seats })
            .eq("id", booking.schedule_id);

        if (updateError) throw new Error(updateError.message);

        // 4. Cancel booking
        const { data, error } = await supabase
            .from("bookings")
            .update({ booking_status: "cancelled", payment_status: "refunded" })
            .eq("id", id)
            .select()
            .maybeSingle();

        if (error) throw new Error(error.message);

        res.json({ message: "Booking cancelled successfully", booking: data });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * GET /api/bookings/reference/:reference
 */
exports.getBookingByReference = async (req, res) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { reference } = req.params;

    try {
        const { data, error } = await supabase
            .from("bookings")
            .select("*")
            .eq("booking_reference", reference)
            .eq("user_id", userId)
            .maybeSingle();

        if (error) throw new Error(error.message);
        if (!data) return res.status(404).json({ error: "Booking not found" });

        res.json(data);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
