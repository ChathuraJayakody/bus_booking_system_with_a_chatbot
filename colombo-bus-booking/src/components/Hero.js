export default function Hero() {
  return (
    <div className="gradient-bg text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Travel Across Colombo with Ease
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Book your bus tickets instantly for routes across the Colombo district
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
            Book Now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
            View Routes
          </button>
        </div>
      </div>
    </div>
  );
}