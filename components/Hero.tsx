"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const planeRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side to prevent hydration issues
    if (!isClient || typeof window === 'undefined') return;
    
    const plane = planeRef.current;
    const hero = heroRef.current;

    if (plane && hero) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      // Create multiple planes for more dynamic effect
      const createPlaneAnimation = () => {
        // Main plane animation - curved path
        gsap.set(plane, { 
          x: screenWidth + 300,
          y: screenHeight * 0.2,
          rotation: -15,
          scale: 0.5,
          opacity: 0
        });

        // Create a curved flight path using bezier
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
            onUpdate: (self) => {
              const progress = self.progress;
              
              // Curved path calculation (S-curve)
              const startX = screenWidth + 300;
              const midX = screenWidth * 0.5;
              const endX = -300;
              
              const startY = screenHeight * 0.2;
              const midY = screenHeight * 0.4;
              const endY = screenHeight * 0.7;
              
              // Bezier curve interpolation
              const t = progress;
              const x = Math.pow(1-t, 2) * startX + 2 * (1-t) * t * midX + Math.pow(t, 2) * endX;
              const y = Math.pow(1-t, 2) * startY + 2 * (1-t) * t * midY + Math.pow(t, 2) * endY;
              
              // Dynamic rotation based on path direction
              const rotation = -15 + (Math.sin(progress * Math.PI * 4) * 10);
              
              // Scale effect - grows then shrinks
              const scale = 0.5 + (Math.sin(progress * Math.PI) * 0.7);
              
              // Opacity fade in/out
              const opacity = Math.sin(progress * Math.PI) * 0.9;
              
              gsap.set(plane, { 
                x: x,
                y: y,
                rotation: rotation,
                scale: scale,
                opacity: opacity
              });
            }
          }
        });

        // Additional floating animation
        gsap.to(plane, {
          y: "+=30",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Entrance animation
        gsap.fromTo(plane, 
          { 
            opacity: 0,
            scale: 0.3,
            rotation: 45
          },
          {
            opacity: 0.8,
            scale: 0.5,
            rotation: -15,
            duration: 2,
            delay: 0.5,
            ease: 'back.out(1.7)'
          }
        );
      };

      createPlaneAnimation();
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isClient]);

  return (
    <>
      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes planeFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes planeTilt {
          0%, 100% { transform: rotateZ(0deg); }
          25% { transform: rotateZ(-3deg); }
          75% { transform: rotateZ(3deg); }
        }
        
        @keyframes cloudDrift {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(100vw); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      
      <section 
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Dynamic Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90" />
        
        {/* Animated Cloud Layers */}
        {isClient && (
          <div className="absolute inset-0 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/10 rounded-full blur-xl"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${60 + i * 30}px`,
                  top: `${10 + i * 15}%`,
                  left: `-${100 + i * 50}px`,
                  animation: `cloudDrift ${15 + i * 5}s infinite linear`,
                  animationDelay: `${i * 2}s`
                }}
              />
            ))}
          </div>
        )}
        
        {/* Floating Sparkles */}
        {isClient && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => {
              // Use index-based deterministic values
              const top = ((i * 37) % 100); // Deterministic positioning
              const left = ((i * 73) % 100);
              const duration = 2 + ((i * 13) % 3); // Duration between 2-5s
              const delay = (i * 0.25) % 5; // Delay between 0-5s
              
              return (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    animation: `sparkle ${duration}s infinite ease-in-out`,
                    animationDelay: `${delay}s`
                  }}
                />
              );
            })}
          </div>
        )}
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      
      {/* Enhanced Animated Plane with Multiple Effects */}
      <div 
        ref={planeRef}
        className="absolute z-10 pointer-events-none" 
        style={{ 
          willChange: 'transform',
          filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))'
        }}
      >
        {/* Dynamic Trail Effects */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          {/* Main trail */}
          <div className="absolute h-2 w-[400px] bg-gradient-to-l from-transparent via-blue-400/60 to-transparent blur-sm rounded-full translate-x-8 animate-pulse" />
          <div className="absolute h-4 w-[300px] bg-gradient-to-l from-transparent via-cyan-300/40 to-transparent blur-md rounded-full translate-x-6" />
          <div className="absolute h-6 w-[200px] bg-gradient-to-l from-transparent via-white/30 to-transparent blur-lg rounded-full translate-x-4" />
          
          {/* Particle trail */}
          {isClient && (
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              {[...Array(8)].map((_, i) => {
                // Use deterministic positioning instead of Math.sin
                const positions = [0, 5, 8, 5, 0, -5, -8, -5]; // Predefined wave pattern
                return (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                    style={{
                      right: `${i * 25 + 20}px`,
                      top: `${positions[i]}px`,
                      animationDelay: `${i * 0.1}s`,
                      animation: 'fadeInOut 2s infinite ease-in-out'
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
        
        {/* Multi-layered Glow Effects */}
        <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-3xl rounded-full scale-[2] animate-pulse" />
        <div className="absolute inset-0 -z-10 bg-cyan-400/20 blur-2xl rounded-full scale-150 animate-ping" 
             style={{ animationDuration: '3s' }} />
        
        {/* Rotating Halo Effect */}
        <div className="absolute inset-0 -z-10 border-2 border-blue-400/30 rounded-full scale-[1.8] animate-spin" 
             style={{ animationDuration: '8s' }} />
        
        <Image
          src="/plane.svg"
          alt="Flying Plane"
          width={400}
          height={400}
          className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 
                     drop-shadow-2xl filter brightness-125 contrast-110 saturate-110
                     transition-all duration-500"
          style={{
            animation: 'planeFloat 4s ease-in-out infinite, planeTilt 6s ease-in-out infinite',
          }}
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-start pl-8 md:pl-16 lg:pl-24" style={{ height: 'calc(100vh - 5rem)' }}>
        <div className="text-left text-white max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Explore the World
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-100 leading-relaxed drop-shadow-sm"
          >
            Discover amazing destinations and create unforgettable memories
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 text-white px-12 py-4 rounded-full font-semibold text-xl shadow-2xl transition-all duration-300 border border-white/20"
            >
              Start Your Journey 
            </motion.button>
          </motion.div>
        </div>
      </div>

    </section>
    </>
  );
};

export default Hero;
