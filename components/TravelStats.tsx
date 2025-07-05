"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const statsData = [
  {
    id: 1,
    number: "200+",
    label: "Holiday Package",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    number: "450",
    label: "RedDoorz",
    color: "from-blue-500 to-purple-500"
  },
  {
    id: 3,
    number: "10",
    label: "Premium Airlines",
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 4,
    number: "12k+",
    label: "Happy Customer",
    color: "from-indigo-500 to-blue-500"
  }
];

const TravelStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
          {/* Left Content */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8 lg:pr-8"
          >
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-lg font-bold shadow-md"
              >
                TRAVEL POINT
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              >
                We help you find your{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">dream destination</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
              >
                Hey! Travelo is here to help you find your dream holiday. 
                Easy - just find where you want to go and buy the ticket.
              </motion.p>
            </div>
            
            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6 lg:gap-8"
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-center group bg-white/30 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-80 h-[500px] lg:w-96 lg:h-[600px]">
              {/* Background Circle */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full transform -rotate-12 opacity-20" 
              />
              
              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden w-full h-full"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/travel.jpg"
                      alt="Travel Stats"
                      className="w-full h-full object-cover"
                      width={400}
                      height={600}
                      priority
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -45 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 20, rotate: -45 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 z-20"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20, rotate: 45 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: -20, rotate: 45 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 z-20"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TravelStats;
