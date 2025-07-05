import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to plan your dream adventure? Our travel experts are here to help you create unforgettable memories.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-12">
            <form className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="name" className="block text-lg font-medium text-white mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-lg font-medium text-white mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="phone" className="block text-lg font-medium text-white mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="group">
                  <label htmlFor="subject" className="block text-lg font-medium text-white mb-3">
                    Travel Interest
                  </label>
                  <select
                    id="subject"
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="" className="bg-slate-800">Select your interest</option>
                    <option value="vacation" className="bg-slate-800">Vacation Planning</option>
                    <option value="business" className="bg-slate-800">Business Travel</option>
                    <option value="adventure" className="bg-slate-800">Adventure Tours</option>
                    <option value="honeymoon" className="bg-slate-800">Honeymoon Package</option>
                    <option value="group" className="bg-slate-800">Group Travel</option>
                    <option value="other" className="bg-slate-800">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block text-lg font-medium text-white mb-3">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your dream destination, travel dates, and any special requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl border-2 border-white/20 backdrop-blur-sm hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                >
                  Send Your Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">hello@travelo.com</p>
              <p className="text-gray-300">support@travelo.com</p>
            </div>

            <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📞</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-300">24/7 Support Available</p>
            </div>

            <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">123 Travel Street</p>
              <p className="text-gray-300">Adventure City, AC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
