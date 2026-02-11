// components/Footer.js
"use client";

import { Calendar, Heart, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-gray-900">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Planly
                </span>
                <span className="text-xs text-gray-500">Academic Planner</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
              Helping students organize, plan, and achieve academic success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading font-bold text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                About Us
              </a>
              <a href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">
                Pricing
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Divider */}
        <div className="mt-12 pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © {currentYear} Planly. All rights reserved.
            </div>
            
            {/* Made with Love */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for students</span>
            </div>
            
            {/* Legal Links */}
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;