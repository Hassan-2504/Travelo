"use client";

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const planeRef = useRef<HTMLDivElement>(null);
  const starRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !footerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate floating icons
      iconRefs.current.forEach((icon, index) => {
        if (icon) {
          gsap.fromTo(icon, 
            { 
              opacity: 0, 
              y: 50, 
              scale: 0,
              rotation: 0 
            },
            {
              opacity: 0.6,
              y: -60,
              scale: 1.2,
              rotation: 360,
              duration: 6,
              delay: index * 0.5,
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top bottom",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Animate flying plane
      if (planeRef.current) {
        gsap.fromTo(planeRef.current,
          { x: -100, y: 200 },
          {
            x: 900,
            y: 150,
            duration: 8,
            repeat: -1,
            ease: "none",
            motionPath: {
              path: "M 50 200 Q 200 100 400 200 Q 600 300 750 150",
              autoRotate: true,
            },
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate stars
      starRefs.current.forEach((star, index) => {
        if (star) {
          gsap.fromTo(star,
            { opacity: 0, scale: 0 },
            {
              opacity: 1,
              scale: 1,
              duration: 2,
              delay: index * 0.1,
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top bottom",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Animate main content
      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, [mounted]);

  const travelIcons = [
    { icon: "✈️", delay: 0 },
    { icon: "🏖️", delay: 0.5 },
    { icon: "🗺️", delay: 1 },
    { icon: "🧳", delay: 1.5 },
    { icon: "🎒", delay: 2 },
    { icon: "📷", delay: 2.5 }
  ];

  const footerLinks = [
    { name: "About Us", href: "#" },
    { name: "Destinations", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" }
  ];

  const socialIcons = [
    { icon: "📘", name: "Facebook" },
    { icon: "📷", name: "Instagram" },
    { icon: "🐦", name: "Twitter" },
    { icon: "📺", name: "YouTube" }
  ];

  if (!mounted) {
    return (
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Start Your Adventure
          </h2>
          <p className="text-gray-300 mb-8">Discover amazing places around the world</p>
        </div>
      </footer>
    );
  }

  return (
    <footer 
      ref={footerRef}
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-screen"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Icons */}
        {travelIcons.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              iconRefs.current[index] = el;
            }}
            className="absolute text-6xl opacity-20"
            style={{
              left: `${10 + index * 15}%`,
              top: `${20 + (index % 2) * 30}%`,
            }}
          >
            {item.icon}
          </div>
        ))}

        {/* Flying Plane */}
        <div
          ref={planeRef}
          className="absolute text-4xl"
        >
          ✈️
        </div>

        {/* Stars */}
        {[...Array(15)].map((_, index) => (
          <div
            key={`star-${index}`}
            ref={(el) => {
              starRefs.current[index] = el;
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${(index * 6.7) % 100}%`,
              top: `${(index * 4.3) % 60}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Ready to Explore?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of adventurers discovering amazing destinations worldwide
          </p>
          <button className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl border-2 border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            Start Your Journey
          </button>
        </div>

        {/* Links and Info */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Travelo
            </h3>
            <p className="text-gray-300">
              Your gateway to unforgettable adventures
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors relative hover:scale-110 transform"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialIcons.map((social, index) => (
                <button
                  key={index}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 hover:scale-125 hover:rotate-12"
                  title={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 hover:text-white transition-colors">
            © 2025 Travelo. Made with ❤️ for travelers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
