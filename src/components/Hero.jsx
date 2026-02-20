"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, CheckCircle2, Sparkles, Clock, TrendingUp, Users, Award } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: "5K+", label: "Active Students" },
    { icon: Star, value: "4.9", label: "App Store Rating" },
    { icon: Award, value: "#1", label: "Education App" },
  ];

  const features = [
    "Smart Study Scheduling",
    "AI-Powered Reminders", 
    "Grade Tracking",
    "Collaboration Tools"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Elements - Subtle for white theme */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200/40 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Trusted by 5,000+ Students</span>
            </div>

            {/* Headline */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="block text-gray-900 mb-2">Master Your Studies,</span>
              <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Own Your Time
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Planly combines intelligent scheduling with AI-powered insights to help you 
              stay organized, meet every deadline, and achieve the grades you deserve—without the stress.
            </p>

            {/* Feature List */}
            <div 
              className={`grid grid-cols-2 gap-3 mb-8 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-start gap-4 mb-10 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Link
                href="/signup"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold text-lg hover:bg-purple-700 transition-all duration-300 shadow-xl shadow-purple-200 hover:shadow-purple-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              {/* <button className="group inline-flex items-center gap-3 px-6 py-4 text-gray-700 font-medium hover:text-purple-700 transition-colors duration-300">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-purple-50 transition-all duration-300">
                  <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                </div>
                <span>See How It Works</span>
              </button> */}
            </div>

            {/* Stats */}
            <div 
              className={`flex items-center gap-8 pt-6 border-t border-gray-200 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/50 border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
                  alt="Diverse students collaborating and studying together with laptops and notebooks in a modern bright environment"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient - Lighter for white theme */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-indigo-600/10" />
                
                {/* Floating UI Elements - Adapted for white theme */}
                <div className="absolute top-6 left-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">Assignment Complete!</p>
                      <p className="text-gray-500 text-xs">2 hours early</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">Grade Improved</p>
                      <p className="text-green-600 text-xs">+15% this semester</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 hidden xl:block">
                  <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-900 text-sm font-medium">Next Study Session</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span>Calculus - 2:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        <span>History Essay - 4:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Softer for white theme */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-300/40 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-300/40 rounded-full blur-2xl" />
              
              {/* Floating Particles */}
              <div className="absolute top-10 right-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce" />
              <div className="absolute bottom-20 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;