'use client';

import { Clock, DollarSign, Bus } from 'lucide-react';
import { busRoutes } from '../data/busRoutes';
import { useState } from 'react';

export default function PopularRoutes() {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleBooking = (route) => {
    setSelectedRoute(route);
    alert(`Booking initiated for Route ${route.route} from ${route.from} to ${route.to}. Price: LKR ${route.price}`);
  };

  return (
    <section id="routes" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular Routes
          </h2>
          <p className="text-gray-600 text-lg">
            Choose from our most popular bus routes across Colombo district
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {busRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-lg shadow-md p-6 card-hover cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl text-gray-800">
                    {route.from} → {route.to}
                  </h3>
                  <p className="text-blue-600 font-semibold">Route {route.route}</p>
                </div>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {route.busType}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{route.duration} • {route.frequency}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Bus className="h-5 w-5 mr-2" />
                  <span>{route.operatingHours}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span className="font-bold text-lg text-gray-800">LKR {route.price}</span>
                </div>
              </div>

              <button
                onClick={() => handleBooking(route)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}