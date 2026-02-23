//create the Hero page with a light background and more subtle colors, but still with the same layout and design elements. The animations should be softer and more elegant, with a focus on smooth transitions and a clean aesthetic. The overall vibe should be calm, professional, and inviting, while still showcasing the key features and benefits of the app in an engaging way.

"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, Star, CheckCircle2, Sparkles, Clock, TrendingUp, Users, Award } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Small delay to trigger entrance animations after mount
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      value: "5K+",
      label: "Active Students",
    },
    {
      icon: Star,
      value: "4.9",
      label: "App Store Rating",
    },
    {
      icon: Award,
      value: "#1",
      label: "Education App",
    },
  ];

  const features = [
    "Smart Study Scheduling",
    "AI-Powered Reminders",
    "Grade Tracking",
    "Collaboration Tools",
  ];

  // Animation classes helper
  const getAnimationClass = (delay = 0) => {
    return `transition-all duration-1000 ${
      showContent        ? "opacity-100 translate-y-0 translate-x-0"
        : "opacity-0 translate-y-10"
    }`;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Hero section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200/40 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content - Main text and CTAs */}
          <div className="max-w-2xl">
            {/* Trust badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6 ${getAnimationClass()}`}
            >
              <Sparkles className="w-4 h-4 text-purple-600" />    
              <span className="text-sm font-medium text-purple-700">
                Trusted by 5,000+ Students
              </span>
            </div>
            {/* Main headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ${getAnimationClass(200)}`}
            >
              <span className="block text-gray-900 mb-2">Master Your Studies,</span>
              <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Own Your Time
              </span>
            </h1>
            {/* Supporting text */}
            <p
              className={`text-lg text-gray-600 mb-8 leading-relaxed ${getAnimationClass(300)}`}
            >
              Planly combines intelligent scheduling with AI-powered insights to help you stay organized, meet every deadline, and achieve the grades you deserve—without the stress.
            </p>
            {/* Feature grid */}
            <div
              className={`grid grid-cols-2 gap-3 mb-8 ${getAnimationClass(400)}`}
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
            {/* Call to action buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center gap-4 ${getAnimationClass(500)}`}
            >
              <Link
                href="/login"
                className="px-6 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="group flex items-center gap-1.5 px-6 py-3 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition-all duration-200 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
          {/* Right content - Illustration */}
          <div
            className={`relative w-full max-w-lg mx-auto ${getAnimationClass(600)}`}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
              alt="Illustration of students using an educational app"
              className="w-full rounded-2xl h-auto object-contain"
            />
          </div>
        </div>
        {/* Stats section */}
        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 ${getAnimationClass(700)}`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;