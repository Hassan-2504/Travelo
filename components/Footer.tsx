"use client";

import { useRef, useEffect, useState } from 'react';

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const footerLinks = [
    { name: "About Us", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Contact", href: "/contact" },
    { name: "Book Trip", href: "/book-trip" }
  ];

  const socialIcons = [
    { icon: "📘", name: "Facebook" },
    { icon: "📷", name: "Instagram" },
    { icon: "🐦", name: "Twitter" },
    { icon: "📺", name: "YouTube" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 mt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-4xl opacity-20 animate-bounce">✈️</div>
        <div className="absolute top-20 right-20 text-3xl opacity-20 animate-pulse">🏖️</div>
        <div className="absolute bottom-20 left-20 text-3xl opacity-20 animate-bounce delay-1000">🗺️</div>
        <div className="absolute bottom-10 right-10 text-4xl opacity-20 animate-pulse delay-500">🧳</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Travelo
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover amazing places around the world with our curated travel experiences. 
              From tropical paradises to urban adventures, we make your dream trips a reality.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110"
                >
                  <span className="text-xl">{social.icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-300">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-purple-300">Get in Touch</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📧</span>
                <span>hello@travelo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">📍</span>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 rounded-2xl p-8 mb-8 backdrop-blur-sm border border-white/10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-300">Get the latest travel deals and destination guides</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Travelo. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
