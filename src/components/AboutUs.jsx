"use client";

import { Users, Target, Award, Sparkles, TrendingUp, Globe, BookOpen, Heart, ChevronRight, Zap, Shield, Star } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { value: "500+", label: "Active Students", icon: Users },
    { value: "98%", label: "Satisfaction Rate", icon: Heart },
    { value: "2.5x", label: "Productivity Gain", icon: TrendingUp },
    { value: "10+", label: "Universities", icon: Globe },
  ];

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0">
      
        {/* Nebula Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 border border-gray-800 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="font-medium text-gray-300">Our Story & Mission</span>
          </div>
          
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-white">Redefining Academic</span>
            <span className="block mt-4 pb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Planning Experience
            </span>
          </h2>
          
          <p className="font-sans text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We believe every student deserves tools that not only organize their time 
            but also inspire discipline, focus, and academic success.
          </p>
        </div>

        {/* Mission & Vision - Enhanced Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Mission Card - Enhanced */}
          <div className="relative group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-0.5 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-700 animate-gradient-x" />
            
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-900/95 to-black rounded-3xl p-8 border border-gray-800/50 backdrop-blur-sm">
              {/* Card Header with Decorative Elements */}
              <div className="relative flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-md opacity-50" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-3xl font-bold text-white">Our Mission</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-1.5 h-1.5  rounded-full animate-pulse" />
                    <span className="text-xs text-gray-400 font-medium">Core Purpose</span>
                  </div>
                </div>
              </div>
              
              {/* Content with Decorative Elements */}
              <div className="relative">
                <p className="font-sans text-gray-300 text-lg leading-relaxed mb-6 pl-4 border-l-2 border-gradient-to-b from-indigo-500 to-purple-500">
                  To empower students worldwide with intelligent planning tools that transform 
                  academic pressure into organized, achievable goals. We're building more than 
                  software—we're creating habits that last a lifetime.
                </p>
                
                {/* Feature Dots */}
                <div className="flex gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
                    <span className="text-sm text-gray-400">Student-Centric</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
                    <span className="text-sm text-gray-400">Evidence-Based</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
                    <span className="text-sm text-gray-400">Impact-Driven</span>
                  </div>
                </div>
              </div>
              
              {/* Footer with Enhanced Design */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">Since 2020</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-sm" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-sm" />
          </div>

          {/* Vision Card - Enhanced */}
          <div className="relative group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-0.5 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-700 animate-gradient-x" />
            
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-900/95 to-black rounded-3xl p-8 border border-gray-800/50 backdrop-blur-sm">
              {/* Card Header with Decorative Elements */}
              <div className="relative flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md opacity-50" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-3xl font-bold text-white">Our Vision</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
                    <span className="text-xs text-gray-400 font-medium">Future Goals</span>
                  </div>
                </div>
              </div>
              
              {/* Content with Decorative Elements */}
              <div className="relative">
                <p className="font-sans text-gray-300 text-lg leading-relaxed mb-6 pl-4 border-l-2 border-gradient-to-b from-purple-500 to-pink-500">
                  A world where no student feels overwhelmed by academic demands. Where planning 
                  becomes second nature, and every learner can reach their full potential through 
                  structured, stress-free organization.
                </p>
                
                {/* Feature Dots */}
                <div className="flex gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                    <span className="text-sm text-gray-400">Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                    <span className="text-sm text-gray-400">Accessibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                    <span className="text-sm text-gray-400">Innovation</span>
                  </div>
                </div>
              </div>
              
              {/* Footer with Enhanced Design */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">40+ Countries</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-sm" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-pink-500/30 to-rose-500/30 rounded-full blur-sm" />
          </div>
        </div>

        {/* Stats Section - Enhanced */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative group">
                {/* Glowing Background */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300 group-hover:-translate-y-1">
                  {/* Icon Container with Enhanced Design */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-3 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl blur-md group-hover:blur-lg transition duration-500" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-900/80 to-purple-900/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-indigo-500/20">
                      <Icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    </div>
                    {/* Corner Decorations */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-indigo-500/30 rounded-tl-lg" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-purple-500/30 rounded-br-lg" />
                  </div>
                  
                  {/* Stat Value with Glow */}
                  <div className="relative">
                    <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="mt-4 h-1 bg-gray-800/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: `${index === 0 ? 95 : index === 1 ? 98 : index === 2 ? 85 : 90}%` }} />
                  </div>
                </div>
                
                {/* Floating Particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            );
          })}
        </div>

        {/* Values Section - Enhanced */}
        <div className="relative group">
          {/* Glowing Border for Entire Section */}
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-4xl blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000" />
          
          <div className="relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 rounded-3xl border border-gray-800/50 p-8 md:p-12 backdrop-blur-sm">
            {/* Section Header with Enhanced Design */}
            <div className="text-center mb-12 relative">
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                <Star className="w-5 h-5 text-indigo-400 animate-spin-slow" />
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
                  Our <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">Core Values</span>
                </h3>
                <Star className="w-5 h-5 text-purple-400 animate-spin-slow" />
              </div>
              <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto">
                The principles that guide every decision we make
              </p>
            </div>
            
            {/* Values Cards - Enhanced */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Student-First Design",
                  description: "Every feature is built with real student needs in mind, tested and refined through continuous feedback.",
                  gradient: "from-indigo-500 to-blue-500",
                  icon: Shield
                },
                {
                  title: "Scientific Approach",
                  description: "Our methods are backed by educational psychology research and proven productivity techniques.",
                  gradient: "from-purple-500 to-pink-500",
                  icon: BookOpen
                },
                {
                  title: "Continuous Innovation",
                  description: "We evolve with academic trends, constantly improving to serve students better.",
                  gradient: "from-emerald-500 to-cyan-500",
                  icon: Zap
                }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="relative group/card">
                    {/* Card Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${value.gradient} rounded-2xl blur-lg opacity-0 group-hover/card:opacity-30 transition duration-500`} />
                    
                    <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm group-hover/card:border-gray-700/50 transition-all duration-300">
                      {/* Icon with Enhanced Design */}
                      <div className="relative mb-6">
                        <div className={`absolute -inset-4 bg-gradient-to-br ${value.gradient} rounded-xl blur-md opacity-10`} />
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        {/* Floating Decorations */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-white/20 rounded-tr-lg" />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-white/20 rounded-bl-lg" />
                      </div>
                      
                      {/* Content */}
                      <h4 className="font-heading text-xl font-bold text-white mb-4 text-center">
                        {value.title}
                      </h4>
                      <p className="font-sans text-gray-300 leading-relaxed text-center">
                        {value.description}
                      </p>
                      
                      {/* Bottom Indicator */}
                      <div className="flex justify-center mt-6">
                        <div className="flex gap-1">
                          <div className="w-6 h-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full" />
                          <div className="w-6 h-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full" />
                          <div className={`w-6 h-1 bg-gradient-to-br ${value.gradient} rounded-full`} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Arrow */}
                    <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-1 transition-all duration-300">
                      <ChevronRight className={`w-6 h-6 ${index === 0 ? 'text-indigo-400' : index === 1 ? 'text-purple-400' : 'text-emerald-400'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Section Footer */}
            <div className="text-center mt-12 pt-8 border-t border-gray-800/50">
              <div className="inline-flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">These values drive our daily work and future vision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA - Enhanced */}
        <div className="text-center mt-20">
          <div className="relative inline-block group">
            {/* Pulsing Glow Effect */}
            <div className="absolute -inset-6  rounded-full blur-3xl animate-pulse" />
            
            {/* Rotating Border */}
            <div className="absolute -inset-1.5  rounded-3xl blur-md animate-gradient-x" />
            
            <button className="relative group/btn px-14 py-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white font-heading font-semibold rounded-3xl hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:-translate-y-1.5 transition-all duration-500 flex items-center gap-4 mx-auto border border-gray-800/50">
              <Sparkles className="w-5 h-5 text-indigo-400 group-hover/btn:animate-spin" />
              <span className="text-lg">Join Our Academic Revolution</span>
              <div className="group-hover/btn:translate-x-2 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </div>
          <p className="font-sans text-gray-400 mt-8">
            Start your organized academic journey today
          </p>
        </div>
      </div>

      {/* Add these animations to your globals.css */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;