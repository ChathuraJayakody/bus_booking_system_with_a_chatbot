'use client';

import { Bus, Menu, X, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Sub-component for clean desktop links (Fixed JS Syntax)
function NavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Bus className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">Colombo Bus</span>
              <span className="text-[10px] text-blue-600 font-semibold uppercase tracking-widest">Travel Smart</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/bookings">My Bookings</NavLink>
            <NavLink href="/#routes">Routes</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
            <div className="h-6 w-[1px] bg-slate-200 mx-4" />
            <button className="flex items-center space-x-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
              <UserCircle className="h-5 w-5" />
              <span>Sign In</span>
            </button>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 text-slate-600" /> : <Menu className="h-6 w-6 text-slate-600" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 space-y-2 shadow-xl">
            <Link href="/" className="block p-3 rounded-lg font-medium text-slate-700 hover:bg-blue-50">Home</Link>
            <Link href="/bookings" className="block p-3 rounded-lg font-medium text-slate-700 hover:bg-blue-50">My Bookings</Link>
            <button className="w-full mt-4 bg-blue-600 text-white p-3 rounded-xl font-bold">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}