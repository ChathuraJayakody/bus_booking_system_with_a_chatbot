'use client';

import { Bus, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Bus className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-800">Colombo Bus</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/bookings" className="text-gray-700 hover:text-blue-600 transition">
              My Bookings
            </Link>
            <Link href="/#routes" className="text-gray-700 hover:text-blue-600 transition">
              Routes
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/bookings" className="block py-2 text-gray-700 hover:text-blue-600">
              My Bookings
            </Link>
            <Link href="/#routes" className="block py-2 text-gray-700 hover:text-blue-600">
              Routes
            </Link>
            <Link href="/#contact" className="block py-2 text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <button className="mt-2 w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}