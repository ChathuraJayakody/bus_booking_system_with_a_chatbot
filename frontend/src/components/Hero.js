'use client';

import { MapPin, Calendar, Search, ArrowRightLeft } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative mb-20">
      {/* Background with Gradient and Pattern Overlay */}
      <div className="gradient-bg bg-blue-600 text-white pt-32 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-sm rounded-full">
            The Smartest Way to Commute
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Travel Across Colombo <br /> 
            <span className="text-orange-400">with Ease</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Experience reliable, comfortable, and scheduled bus services across the heart of Sri Lanka. Book your seat in seconds.
          </p>
        </div>
      </div>

      {/* Floating Search Bar Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-2 md:p-4 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            
            {/* From Input */}
            <div className="relative group p-4 hover:bg-slate-50 rounded-xl transition-colors">
              <label className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <MapPin className="h-3 w-3 mr-1 text-blue-600" /> From
              </label>
              <input 
                type="text" 
                placeholder="Departure City"
                className="w-full bg-transparent text-slate-900 font-semibold focus:outline-none placeholder:text-slate-400"
              />
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                <div className="bg-white border border-slate-200 p-1.5 rounded-full shadow-sm">
                  <ArrowRightLeft className="h-4 w-4 text-blue-500" />
                </div>
              </div>
            </div>

            {/* To Input */}
            <div className="relative group p-4 hover:bg-slate-50 rounded-xl transition-colors">
              <label className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <MapPin className="h-3 w-3 mr-1 text-orange-500" /> To
              </label>
              <input 
                type="text" 
                placeholder="Arrival City"
                className="w-full bg-transparent text-slate-900 font-semibold focus:outline-none placeholder:text-slate-400"
              />
            </div>

            {/* Date Input */}
            <div className="relative group p-4 hover:bg-slate-50 rounded-xl transition-colors">
              <label className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <Calendar className="h-3 w-3 mr-1 text-blue-600" /> Date
              </label>
              <input 
                type="date" 
                className="w-full bg-transparent text-slate-900 font-semibold focus:outline-none cursor-pointer"
              />
            </div>

            {/* Search Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-blue-200 group active:scale-95 py-4 md:py-0">
              <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">Find Buses</span>
            </button>

          </div>
        </div>

        {/* Quick Stats / Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 text-slate-500 text-sm font-medium">
          <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div> 50+ Routes</div>
          <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div> Verified Operators</div>
          <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div> 24/7 Support</div>
        </div>
      </div>
    </section>
  );
}