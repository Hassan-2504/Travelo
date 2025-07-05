"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100 
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full text-white z-50"
      style={{
        background: 'linear-gradient(135deg, rgba(30,58,138,0.9) 0%, rgba(67,56,202,0.8) 25%, rgba(99,102,241,0.7) 50%, rgba(139,92,246,0.8) 75%, rgba(30,58,138,0.9) 100%)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        boxShadow: '0 4px 20px rgba(30, 58, 138, 0.3)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Image 
                    src="/logo.svg" 
                    alt="TravelApp Logo" 
                    width={48} 
                    height={48}
                    className="h-14 w-14 drop-shadow-lg"
                  />
                </motion.div>
                <motion.span
                  className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-sm"
                >
                  Travelo
                </motion.span>
              </motion.div>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.div
                  className="relative text-white/90 hover:text-white text-xl font-bold px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </motion.div>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link href="/book-trip">
              <motion.button
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 text-white px-12 py-2.5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl border border-white/20"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 15px 35px rgba(139, 92, 246, 0.4)',
                  background: 'linear-gradient(to right, #60a5fa, #a855f7, #3b82f6)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Book Trip
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  className="w-6 h-0.5 bg-white block transition-all duration-300 origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-white block mt-1.5 transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  className="w-6 h-0.5 bg-white block mt-1.5 transition-all duration-300 origin-center"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden rounded-lg mt-2 border border-white/20 overflow-hidden shadow-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(30,58,138,0.95) 0%, rgba(67,56,202,0.9) 50%, rgba(99,102,241,0.85) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                      <motion.div
                        className="block text-white/90 hover:text-white text-lg font-medium px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                        whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      >
                        {link.name}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-2"
                >
                  <Link href="/book-trip" onClick={() => setIsMenuOpen(false)}>
                    <motion.button
                      className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-3 rounded-lg font-semibold text-lg shadow-lg border border-white/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Trip
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;