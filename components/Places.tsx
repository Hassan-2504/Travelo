"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const placesData = [
  {
    id: 1,
    title: "Tropical Paradise",
    location: "Maldives",
    description: "Crystal clear waters and pristine beaches await you in this island paradise.",
    image: "/P1.jpg",
    features: ["5-Star Resorts", "Water Villas", "Diving & Snorkeling"]
  },
  {
    id: 2,
    title: "Mountain Adventure",
    location: "Swiss Alps",
    description: "Experience breathtaking mountain views and thrilling outdoor adventures.",
    image: "/P2.jpg",
    features: ["Hiking Trails", "Ski Resorts", "Alpine Villages"]
  },
  {
    id: 3,
    title: "Cultural Heritage",
    location: "Kyoto, Japan",
    description: "Immerse yourself in ancient temples, gardens, and traditional culture.",
    image: "/P3.jpg",
    features: ["Historic Temples", "Cherry Blossoms", "Traditional Cuisine"]
  }
];

const Places = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r text-black bg-clip-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Amazing Places
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our handpicked destinations that offer unforgettable experiences and breathtaking views
          </motion.p>
        </motion.div>

        {/* Places Cards */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {placesData.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ 
                opacity: 0, 
                y: 100,
                scale: 0.8,
                rotateY: -15
              }}
              animate={isInView ? { 
                opacity: 1,
                y: 0,
                scale: 1,
                rotateY: 0
              } : {
                opacity: 0, 
                y: 100,
                scale: 0.8,
                rotateY: -15
              }}
              transition={{
                duration: 1,
                delay: index * 0.4,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-white/60 transform-gpu">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 relative overflow-hidden p-4 lg:p-6">
                    <motion.div
                      className="relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-xl"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: index % 2 === 0 ? 1 : -1,
                        y: -5
                      }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      <Image
                        src={place.image}
                        alt={place.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:brightness-110 group-hover:contrast-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      

                    </motion.div>
                  </div>

                  {/* Sub-divider between image and content */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-60"></div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 p-8 lg:p-12 relative">
                    {/* Horizontal sub-divider for mobile */}
                    <div className="lg:hidden absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent "></div>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.4 + 0.3,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <div className="mb-6">
                        <motion.span 
                          className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-md"
                          whileHover={{ scale: 1.05 }}
                        >
                          {place.location}
                        </motion.span>
                        <motion.h3 
                          className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          {place.title}
                        </motion.h3>
                      </div>

                      <motion.p 
                        className="text-gray-600 text-lg leading-relaxed mb-8"
                        whileHover={{ scale: 1.01 }}
                      >
                        {place.description}
                      </motion.p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">Experience Highlights:</h4>
                        <div className="flex flex-wrap gap-3">
                          {place.features.map((feature, featureIndex) => (
                            <motion.span
                              key={featureIndex}
                              initial={{ opacity: 0, scale: 0, y: 20 }}
                              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
                              transition={{ 
                                duration: 0.6, 
                                delay: index * 0.4 + 0.8 + featureIndex * 0.1,
                                type: "spring",
                                stiffness: 150
                              }}
                              whileHover={{ 
                                scale: 1.1,
                                y: -2,
                                transition: { duration: 0.2 }
                              }}
                              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                              {feature}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          y: -3,
                          boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                          rotate: index % 2 === 0 ? 1 : -1
                        }}
                        whileTap={{ 
                          scale: 0.95,
                          y: 0
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/30 backdrop-blur-sm"
                      >
                        Explore {place.location}
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};

export default Places;
