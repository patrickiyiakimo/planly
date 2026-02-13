"use client";

import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sparkles, Calendar } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items with section IDs
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    // { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'services', 'pricing'];
      const currentPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && currentPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl py-3 border-b border-gray-900' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Scrolls to home */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center border border-gray-800 group-hover:border-indigo-500 transition-all duration-300">
                  <Calendar className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              <Link href="/" className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Planly
                </span>
                <span className="text-xs text-gray-400">Academic Planner</span>
              </div>
              </Link>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(sectionId)}
                    className={`relative px-4 py-2 font-medium rounded-xl transition-all duration-300 group ${
                      activeSection === sectionId 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-900/50'
                    }`}
                  >
                    {item.name}
                    {activeSection === sectionId && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                    )}
                  </button>
                );
              })}
              
              {/* Signup Button - Desktop (Only one that's a link) */}
              <div className="relative ml-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <a
                  href="/signup"
                  className="relative px-8 py-3 bg-gradient-to-r from-gray-900 to-black text-white font-semibold rounded-xl border border-gray-800 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 flex items-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Sign Up
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                scrolled 
                  ? 'bg-gray-900/80 hover:bg-gray-800' 
                  : 'bg-gray-900/50 hover:bg-gray-800/80'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
        isOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Backdrop - Cosmic Effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-opacity duration-500 ${
            isOpen ? 'opacity-95' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        >
          {/* Star effect in backdrop */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.1,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black shadow-2xl border-l border-gray-800 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full flex flex-col">
            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto pt-40 py-8">
              <div className="space-y-2 px-4">
                {navItems.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(sectionId)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                        activeSection === sectionId 
                          ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          activeSection === sectionId 
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                            : 'bg-gray-800'
                        }`}>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      {activeSection === sectionId && (
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                      )}
                    </button>
                  );
                })}
                
                {/* Signup Button - Mobile (Only link) */}
                <div className="pt-8 px-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-50" />
                    <a
                      href="/signup"
                      className="relative block w-full text-center px-6 py-4 bg-gradient-to-r from-gray-900 to-black text-white font-semibold rounded-xl border border-gray-800 hover:border-indigo-500 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                        Sign Up Free
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-gray-800">
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Planly. All rights reserved.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-150" />
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse delay-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;