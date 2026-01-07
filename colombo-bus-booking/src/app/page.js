'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchForm from '../components/SearchForm';
import PopularRoutes from '../components/PopularRoutes';
import Features from '../components/Features';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (searchData) => {
    console.log('Searching for:', searchData);
    alert(`Searching buses from ${searchData.from} to ${searchData.to} on ${searchData.date}`);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchForm onSearch={handleSearch} />
      </div>
      <PopularRoutes />
      <Features />
      <Footer />
      <Chatbot />
    </main>
  );
}