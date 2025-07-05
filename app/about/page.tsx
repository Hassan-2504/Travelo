'use client';

import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section with Typewriter Effect */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="typewriter bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Discover. Explore. Experience.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 fade-in-up delay-1000">
            We create unforgettable journeys that transform the way you see the world
          </p>
        </div>
      </section>

      {/* Our Story Section with Slide Animations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 slide-in-left">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 scale-in"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-right">
              <p className="text-lg text-gray-600 leading-relaxed mb-6 fade-in-up delay-500">
                Founded with a passion for adventure and a love for exploration, we&apos;ve been crafting extraordinary travel experiences for over a decade. Our journey began with a simple belief: that travel has the power to transform lives, broaden perspectives, and create lasting memories.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed fade-in-up delay-700">
                From humble beginnings as a small group of travel enthusiasts, we&apos;ve grown into a trusted partner for thousands of adventurers worldwide, always staying true to our core mission of making travel accessible, sustainable, and unforgettable.
              </p>
            </div>
            <div className="slide-in-left delay-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 bounce-in">
                    10+ Years of Excellence
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center counter-animation">
                      <span className="text-3xl font-bold text-indigo-600 mr-3">50K+</span>
                      <span className="text-gray-600">Happy Travelers</span>
                    </div>
                    <div className="flex items-center counter-animation delay-200">
                      <span className="text-3xl font-bold text-purple-600 mr-3">150+</span>
                      <span className="text-gray-600">Destinations</span>
                    </div>
                    <div className="flex items-center counter-animation delay-400">
                      <span className="text-3xl font-bold text-pink-600 mr-3">25+</span>
                      <span className="text-gray-600">Countries</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Rotating Text */}
      <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Our Mission is to
          </h2>
          <div className="text-3xl md:text-4xl font-bold mb-8 h-16 flex items-center justify-center">
            <span className="rotating-text bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Create Amazing Experiences
            </span>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed wave-animation">
            We believe that every journey should be more than just a trip—it should be a transformative experience that enriches your life, connects you with different cultures, and creates memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* Values Section with Stagger Animation */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 zoom-in">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center stagger-animation">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 pulse-animation">
                <span className="text-3xl text-white">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 slide-up">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed fade-in">
                We&apos;re committed to responsible travel that preserves the beauty of our planet for future generations to enjoy.
              </p>
            </div>
            
            <div className="text-center stagger-animation delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 pulse-animation delay-100">
                <span className="text-3xl text-white">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 slide-up">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed fade-in">
                We create genuine connections with local communities and offer authentic experiences that go beyond typical tourism.
              </p>
            </div>
            
            <div className="text-center stagger-animation delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 pulse-animation delay-200">
                <span className="text-3xl text-white">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 slide-up">Excellence</h3>
              <p className="text-gray-600 leading-relaxed fade-in">
                We strive for perfection in every detail, ensuring that your travel experience exceeds all expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Flip Animation */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-100/50 to-purple-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 flip-in">
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center card-flip">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">👨‍💼</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 typing-effect">Sarah Johnson</h3>
                <p className="text-indigo-600 font-semibold mb-4">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With 15 years in the travel industry, Sarah&apos;s vision drives our commitment to extraordinary experiences.
                </p>
              </div>
            </div>
            
            <div className="text-center card-flip delay-200">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 typing-effect delay-300">Mark Chen</h3>
                <p className="text-purple-600 font-semibold mb-4">Head of Operations</p>
                <p className="text-gray-600 text-sm">
                  Mark ensures every trip runs smoothly with his attention to detail and operational expertise.
                </p>
              </div>
            </div>
            
            <div className="text-center card-flip delay-400">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">👩‍🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 typing-effect delay-600">Emma Wilson</h3>
                <p className="text-pink-600 font-semibold mb-4">Creative Director</p>
                <p className="text-gray-600 text-sm">
                  Emma crafts unique itineraries and experiences that turn ordinary trips into extraordinary adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CSS Animations */}
      <style jsx>{`
        /* Typewriter Effect */
        .typewriter {
          overflow: hidden;
          border-right: 3px solid #8b5cf6;
          white-space: nowrap;
          margin: 0 auto;
          animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #8b5cf6; }
        }

        /* Fade In Up */
        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slide Animations */
        .slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
          opacity: 0;
          transform: translateX(-50px);
        }

        .slide-in-right {
          animation: slideInRight 1s ease-out forwards;
          opacity: 0;
          transform: translateX(50px);
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Scale In */
        .scale-in {
          animation: scaleIn 0.8s ease-out forwards;
          transform: scale(0);
        }

        @keyframes scaleIn {
          to {
            transform: scale(1);
          }
        }

        /* Bounce In */
        .bounce-in {
          animation: bounceIn 1s ease-out forwards;
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Counter Animation */
        .counter-animation {
          animation: countUp 2s ease-out forwards;
          opacity: 0;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Rotating Text */
        .rotating-text {
          animation: rotateText 4s ease-in-out infinite;
        }

        @keyframes rotateText {
          0%, 100% { transform: rotateY(0deg); }
          25% { transform: rotateY(180deg); }
          50% { transform: rotateY(360deg); }
          75% { transform: rotateY(540deg); }
        }

        /* Wave Animation */
        .wave-animation {
          animation: wave 3s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* Zoom In */
        .zoom-in {
          animation: zoomIn 1s ease-out forwards;
          opacity: 0;
          transform: scale(0.5);
        }

        @keyframes zoomIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Stagger Animation */
        .stagger-animation {
          animation: staggerFade 1s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes staggerFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Pulse Animation */
        .pulse-animation {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8); }
        }

        /* Slide Up */
        .slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Fade In */
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        /* Card Flip */
        .card-flip {
          animation: cardFlip 1s ease-out forwards;
          opacity: 0;
          transform: rotateY(-90deg);
        }

        @keyframes cardFlip {
          to {
            opacity: 1;
            transform: rotateY(0deg);
          }
        }

        /* Flip In */
        .flip-in {
          animation: flipIn 1s ease-out forwards;
          opacity: 0;
          transform: rotateX(-90deg);
        }

        @keyframes flipIn {
          to {
            opacity: 1;
            transform: rotateX(0deg);
          }
        }

        /* Typing Effect */
        .typing-effect {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #8b5cf6;
          animation: typing2 2s steps(20, end), blink2 0.75s step-end infinite;
        }

        @keyframes typing2 {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink2 {
          from, to { border-color: transparent; }
          50% { border-color: #8b5cf6; }
        }

        /* Glow Text */
        .glow-text {
          animation: textGlow 2s ease-in-out infinite alternate;
        }

        @keyframes textGlow {
          from {
            text-shadow: 0 0 20px rgba(139, 92, 246, 0.5),
                         0 0 30px rgba(139, 92, 246, 0.5),
                         0 0 40px rgba(139, 92, 246, 0.5);
          }
          to {
            text-shadow: 0 0 30px rgba(139, 92, 246, 0.8),
                         0 0 50px rgba(139, 92, 246, 0.8),
                         0 0 60px rgba(139, 92, 246, 0.8);
          }
        }

        /* Breathing Text */
        .breathing-text {
          animation: breathe 3s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Magnetic Hover */
        .magnetic-hover {
          transition: all 0.3s ease;
          position: relative;
        }

        .magnetic-hover:hover {
          animation: magneticPull 0.6s ease-in-out;
        }

        @keyframes magneticPull {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.1) rotate(-2deg); }
          75% { transform: scale(1.1) rotate(2deg); }
        }

        /* Delay Classes */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
}
