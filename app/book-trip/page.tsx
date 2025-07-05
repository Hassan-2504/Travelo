import React from 'react'

export default function BookTrip() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        {/* Booking Form */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
          {/* Form Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Book Your Dream Trip
            </h1>
            <p className="text-gray-600 text-lg">Plan your perfect getaway in just a few clicks</p>
          </div>

          {/* Form Fields */}
          <form className="space-y-8">
            {/* Destination */}
            <div>
              <label htmlFor="destination" className="block text-lg font-semibold text-gray-700 mb-3">
                Where would you like to go?
              </label>
              <input
                type="text"
                id="destination"
                className="w-full px-6 py-4 text-lg border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white/80 placeholder-gray-400"
                placeholder="Enter your dream destination..."
              />
            </div>

            {/* Dates Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="checkin" className="block text-lg font-semibold text-gray-700 mb-3">
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkin"
                  className="w-full px-6 py-4 text-lg border-2 border-pink-200 rounded-2xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 focus:outline-none transition-all duration-300 bg-white/80"
                />
              </div>
              <div>
                <label htmlFor="checkout" className="block text-lg font-semibold text-gray-700 mb-3">
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkout"
                  className="w-full px-6 py-4 text-lg border-2 border-blue-200 rounded-2xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
                />
              </div>
            </div>
            
            {/* Guests and Budget Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guests" className="block text-lg font-semibold text-gray-700 mb-3">
                  Number of Travelers
                </label>
                <select
                  id="guests"
                  className="w-full px-6 py-4 text-lg border-2 border-indigo-200 rounded-2xl focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 focus:outline-none transition-all duration-300 bg-white/80"
                >
                  <option value="">Select travelers</option>
                  <option>1 Traveler</option>
                  <option>2 Travelers</option>
                  <option>3 Travelers</option>
                  <option>4 Travelers</option>
                  <option>5+ Travelers</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-lg font-semibold text-gray-700 mb-3">
                  Budget Range
                </label>
                <select
                  id="budget"
                  className="w-full px-6 py-4 text-lg border-2 border-teal-200 rounded-2xl focus:ring-4 focus:ring-teal-300 focus:border-teal-500 focus:outline-none transition-all duration-300 bg-white/80"
                >
                  <option value="">Select budget</option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $2,500</option>
                  <option>$2,500 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
            </div>

            {/* Trip Type */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
                What type of experience are you looking for?
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="relative group cursor-pointer">
                  <input type="radio" name="tripType" value="beach" className="sr-only" />
                  <div className="p-4 border-2 border-orange-200 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 group-hover:from-orange-100 group-hover:to-yellow-100 transition-all duration-300 group-hover:border-orange-300 group-hover:shadow-lg">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block">🏖️</span>
                      <span className="text-lg font-semibold text-gray-700">Beach & Relaxation</span>
                    </div>
                  </div>
                </label>
                <label className="relative group cursor-pointer">
                  <input type="radio" name="tripType" value="adventure" className="sr-only" />
                  <div className="p-4 border-2 border-green-200 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 group-hover:from-green-100 group-hover:to-emerald-100 transition-all duration-300 group-hover:border-green-300 group-hover:shadow-lg">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block">🏔️</span>
                      <span className="text-lg font-semibold text-gray-700">Adventure & Nature</span>
                    </div>
                  </div>
                </label>
                <label className="relative group cursor-pointer">
                  <input type="radio" name="tripType" value="cultural" className="sr-only" />
                  <div className="p-4 border-2 border-rose-200 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 group-hover:from-rose-100 group-hover:to-pink-100 transition-all duration-300 group-hover:border-rose-300 group-hover:shadow-lg">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block">🏛️</span>
                      <span className="text-lg font-semibold text-gray-700">Cultural & History</span>
                    </div>
                  </div>
                </label>
                <label className="relative group cursor-pointer">
                  <input type="radio" name="tripType" value="city" className="sr-only" />
                  <div className="p-4 border-2 border-violet-200 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 group-hover:from-violet-100 group-hover:to-purple-100 transition-all duration-300 group-hover:border-violet-300 group-hover:shadow-lg">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block">🏙️</span>
                      <span className="text-lg font-semibold text-gray-700">City & Urban</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-5 rounded-2xl font-bold text-xl hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
            >
              ✨ Find My Perfect Trip ✨
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
