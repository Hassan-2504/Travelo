import React from 'react'

export default function Trips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Your Trips
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Manage and plan your upcoming adventures.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">No trips planned yet</h3>
            <p className="text-gray-600 mb-6">
              Start planning your next adventure by exploring our destinations.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Plan Your First Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
