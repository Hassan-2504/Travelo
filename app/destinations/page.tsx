'use client';

import React from 'react';
import Image from 'next/image';

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      description: "Stunning sunsets and white-washed buildings overlooking the Aegean Sea",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
      category: "Beach",
      duration: "7 Days",
      price: "$1,299"
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      description: "Ancient temples, traditional gardens, and cherry blossoms",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
      category: "Cultural",
      duration: "10 Days",
      price: "$1,899"
    },
    {
      id: 3,
      name: "Swiss Alps",
      description: "Majestic mountains, pristine lakes, and charming villages",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      category: "Adventure",
      duration: "12 Days",
      price: "$2,299"
    },
    {
      id: 4,
      name: "Bali, Indonesia",
      description: "Tropical paradise with rice terraces and spiritual temples",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
      category: "Beach",
      duration: "8 Days",
      price: "$999"
    },
    {
      id: 5,
      name: "Machu Picchu, Peru",
      description: "Ancient Incan citadel high in the Andes Mountains",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop",
      category: "Adventure",
      duration: "9 Days",
      price: "$1,599"
    },
    {
      id: 6,
      name: "Paris, France",
      description: "City of love with iconic landmarks and world-class cuisine",
      image: "https://images.unsplash.com/photo-1750869810132-0441f999063b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      category: "Cultural",
      duration: "6 Days",
      price: "$1,199"
    }
  ];

  const categories = ["All", "Beach", "Cultural", "Adventure"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white to-blue-50/50 text-gray-800 py-24 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <span className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">Home</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-700 font-medium">Destinations</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Discover Amazing
            </span>
            <br />
            <span className="text-gray-800">Destinations</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore the world&apos;s most beautiful places with our curated travel experiences
          </p>
          
          {/* Simple Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="Search destinations..." 
                    className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-lg"
                  />
                </div>
                <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
          
          {/* Simple Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white rounded-full font-medium border border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">150+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">50K+</div>
              <div className="text-gray-600">Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">25+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-1">4.9★</div>
              <div className="text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover extraordinary places that offer unforgettable experiences and breathtaking beauty
            </p>
          </div>

          {/* Simple Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      {destination.category}
                    </span>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white text-gray-800 text-sm font-medium rounded-full">
                      {destination.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  
                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">
                      {destination.price}
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              View More Destinations
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Main CTA Content */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of travelers who have discovered their perfect destination with us. Let our experts craft your dream journey.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Plan My Trip
            </button>
            <button className="px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Contact Expert
            </button>
          </div>

          {/* Simple Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-blue-600">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Personalized Planning</h3>
              <p className="text-gray-600">Tailored itineraries based on your interests and budget</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-blue-600">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Secure Booking</h3>
              <p className="text-gray-600">Safe and secure payment with full protection guarantee</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-blue-600">🌟</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance throughout your journey</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
