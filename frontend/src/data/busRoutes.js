export const busRoutes = [
  {
    id: 1,
    from: "Colombo Fort",
    to: "Negombo",
    route: "240",
    duration: "1.5 hours",
    price: 150,
    frequency: "Every 15 mins",
    operatingHours: "5:00 AM - 10:00 PM",
    busType: "Air-conditioned"
  },
  {
    id: 2,
    from: "Colombo Fort",
    to: "Gampaha",
    route: "280",
    duration: "1 hour",
    price: 100,
    frequency: "Every 10 mins",
    operatingHours: "5:30 AM - 11:00 PM",
    busType: "Normal"
  },
  {
    id: 3,
    from: "Pettah",
    to: "Kaduwela",
    route: "245",
    duration: "45 mins",
    price: 80,
    frequency: "Every 20 mins",
    operatingHours: "6:00 AM - 9:00 PM",
    busType: "Normal"
  },
  {
    id: 4,
    from: "Colombo Fort",
    to: "Kalutara",
    route: "155",
    duration: "2 hours",
    price: 180,
    frequency: "Every 30 mins",
    operatingHours: "5:00 AM - 10:00 PM",
    busType: "Semi-luxury"
  },
  {
    id: 5,
    from: "Pettah",
    to: "Maharagama",
    route: "138",
    duration: "40 mins",
    price: 70,
    frequency: "Every 15 mins",
    operatingHours: "5:30 AM - 11:00 PM",
    busType: "Normal"
  },
  {
    id: 6,
    from: "Colombo Fort",
    to: "Moratuwa",
    route: "154",
    duration: "1 hour",
    price: 90,
    frequency: "Every 20 mins",
    operatingHours: "5:00 AM - 10:30 PM",
    busType: "Normal"
  },
  {
    id: 7,
    from: "Colombo",
    to: "Homagama",
    route: "177",
    duration: "1.5 hours",
    price: 120,
    frequency: "Every 25 mins",
    operatingHours: "6:00 AM - 9:00 PM",
    busType: "Normal"
  },
  {
    id: 8,
    from: "Colombo Fort",
    to: "Kadawatha",
    route: "255",
    duration: "45 mins",
    price: 85,
    frequency: "Every 15 mins",
    operatingHours: "5:30 AM - 10:00 PM",
    busType: "Normal"
  }
];

export const locations = [
  "Colombo Fort",
  "Pettah",
  "Negombo",
  "Gampaha",
  "Kaduwela",
  "Kalutara",
  "Maharagama",
  "Moratuwa",
  "Homagama",
  "Kadawatha",
  "Dehiwala",
  "Kelaniya",
  "Ja-Ela",
  "Wattala",
  "Peliyagoda"
];

export const chatbotKnowledge = {
  greeting: [
    "Hello! Welcome to Colombo Bus Booking. How can I help you today?",
    "Hi there! I'm here to help you with bus bookings and route information.",
    "Welcome! Ask me about bus routes, timings, or booking tickets."
  ],
  routes: busRoutes,
  locations: locations,
  fareInfo: "Bus fares in Colombo district typically range from LKR 50 to LKR 200 depending on the distance and bus type. Air-conditioned buses are slightly more expensive.",
  bookingInfo: "You can book tickets by searching for your route on our homepage, selecting your preferred bus, and completing the payment. Bookings can be made up to 7 days in advance.",
  paymentMethods: "We accept credit cards, debit cards, mobile payments (eZcash, mCash), and online banking.",
  cancellationPolicy: "You can cancel your booking up to 2 hours before departure for a full refund. Cancellations within 2 hours will incur a 20% cancellation fee.",
  contactInfo: "For support, call us at +94 11 234 5678 or email support@colombobus.lk. Our customer service is available 24/7."
};