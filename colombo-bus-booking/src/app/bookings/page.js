'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Calendar, MapPin, Clock, CreditCard } from 'lucide-react';

export default function BookingsPage() {
  // Sample booking data (in a real app, this would come from a database)
  const bookings = [
    {
      id: 'BK001',
      route: '240',
      from: 'Colombo Fort',
      to: 'Negombo',
      date: '2025-01-10',
      time: '08:00 AM',
      seats: 2,
      price: 300,
      status: 'Confirmed'
    },
    {
      id: 'BK002',
      route: '155',
      from: 'Colombo Fort',
      to: 'Kalutara',
      date: '2025-01-15',
      time: '10:30 AM',
      seats: 1,
      price: 180,
      status: 'Confirmed'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            My Bookings
          </h1>

          {bookings.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-gray-600 text-lg mb-4">You don't have any bookings yet</p>
              <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block">
                Book Your First Ticket
              </a>
            </div>
          ) : (
            <div className="space-y-6">
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                          Route {booking.route}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          booking.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {booking.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">Journey</p>
                            <p className="font-semibold">{booking.from} → {booking.to}</p>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">Date & Time</p>
                            <p className="font-semibold">{booking.date} at {booking.time}</p>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 mr-2 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">Seats</p>
                            <p className="font-semibold">{booking.seats} Passenger(s)</p>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">Total Paid</p>
                            <p className="font-semibold">LKR {booking.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 md:ml-6 flex flex-col gap-2">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                        View Ticket
                      </button>
                      <button className="bg-red-100 text-red-600 px-6 py-2 rounded-lg hover:bg-red-200 transition font-semibold">
                        Cancel Booking
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Booking ID: <span className="font-semibold">{booking.id}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
      <Chatbot />
    </main>
  );
}