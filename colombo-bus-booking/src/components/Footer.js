import { Bus, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bus className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">Colombo Bus</span>
            </div>
            <p className="text-gray-400">
              Making bus travel across Sri Lanka simple, safe, and convenient for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/#routes" className="text-gray-400 hover:text-white transition">Routes</a></li>
              <li><a href="/bookings" className="text-gray-400 hover:text-white transition">My Bookings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +94 11 234 5678
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                support@colombobus.lk
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>123 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Colombo Bus Booking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}