"use client";

import { useState, useEffect } from 'react';
import { ArrowLeft, Home, Search, Compass, Ghost } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const suggestions = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Pricing', href: '/pricing', icon: Compass },
    { name: 'FAQ', href: '/faq', icon: Search },
  ];

  return (
    <div className="min-h-screen pt-10 bg-white flex flex-col items-center justify-center px-4 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Illustration */}
        <div className="relative mb-8 inline-block">
          <div className="relative">
            <img 
              src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=600&q=80"
              alt="Lost astronaut illustration"
              className="w-64 h-64 sm:w-80 sm:h-80 object-contain mx-auto"
            />
          </div>
          
          {/* 404 Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-6 py-2 bg-purple-600 text-white font-bold text-2xl rounded-full shadow-lg shadow-purple-200">
            404
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Page not found
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! Looks like you wandered off the study path. 
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="group flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 hover:shadow-purple-300"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </div>
  );
}