// components/Pricing.js
"use client";

import { Check, Star, Zap, Crown, Sparkles, Target, Shield, Brain, FileText, Rocket, TrendingUp, Gift } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      tagline: "Perfect for getting started",
      price: 1500,
      period: isAnnual ? "/year" : "/month",
      description: "Essential tools for academic organization",
      popular: false,
      color: "from-indigo-500 to-blue-500",
      icon: Target,
      features: [
        { text: "Daily & Weekly Planning", included: true },
        { text: "Assignment Tracker", included: true },
        { text: "Basic Progress Dashboard", included: true },
        { text: "Mobile & Web Access", included: true },
        { text: "Email Reminders", included: true },
        { text: "PDF Summary Reports", included: false },
        { text: "AI Study Recommendations", included: false },
        { text: "Priority Support", included: false },
      ],
      cta: "Start Basic Plan",
    },
    {
      name: "Pro Plan",
      tagline: "Most Popular - Full Features",
      price: 3000,
      period: isAnnual ? "/year" : "/month",
      description: "Advanced tools for maximum productivity",
      popular: true,
      color: "from-purple-500 to-pink-500",
      icon: Crown,
      features: [
        { text: "Everything in Basic Plan", included: true },
        { text: "PDF Summary Reports", included: true },
        { text: "AI Study Recommendations", included: true },
        { text: "Smart Time Optimization", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "Export to Google Calendar", included: true },
        { text: "Priority Email Support", included: true },
        { text: "Study Group Collaboration", included: true },
      ],
      cta: "Get Pro Plan",
    },
  ];

  const savings = [
    "Save up to ₦18,000 yearly with Pro",
    "Cancel anytime, no questions asked",
    "30-day money-back guarantee",
    "Trusted by 500+ students",
  ];

  return (
    <section id="pricing" className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Star Field */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Nebula Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Geometric Grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4f46e5 1px, transparent 1px),
              linear-gradient(to bottom, #4f46e5 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-black border border-gray-800 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)] mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="font-medium text-gray-300">Simple & Affordable Pricing</span>
          </div>
          
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-white">Invest in Your</span>
            <span className="block mt-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Academic Success
            </span>
          </h2>
          
          <p className="font-sans text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Choose the perfect plan for your needs. Both plans include our core features,
            with Pro adding powerful AI tools for maximum productivity.
          </p>

          {/* Toggle Switch - Annual vs Monthly */}
          <div className="inline-flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-800">
            <span className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${!isAnnual ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' : 'text-gray-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-gray-800 rounded-full p-1 transition-all duration-300"
            >
              <div className={`w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-transform duration-300 ${isAnnual ? 'transform translate-x-6' : ''}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${isAnnual ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' : 'text-gray-400'}`}>
                Annual Billing
              </span>
              <div className="px-2 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-xs font-bold text-white">
                Save 20%
              </div>
            </div>
          </div>
        </div>

        {/* Price Comparison Banner */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-pink-900/30 rounded-2xl p-6 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-white">Unbelievable Value</h4>
                  <p className="text-gray-400">Less than the cost of a textbook</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-white">
                  ₦{isAnnual ? '18,000' : '3,000'}
                  <span className="text-lg text-gray-400"> /year with Pro</span>
                </div>
                <p className="text-emerald-400 text-sm font-medium mt-1">
                  That's just ₦{isAnnual ? '50' : '100'} per day for academic excellence!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const displayPrice = isAnnual ? Math.floor(plan.price * 12 * 0.8) : plan.price;
            const monthlyEquivalent = isAnnual ? Math.floor(displayPrice / 12) : displayPrice;
            
            return (
              <div key={index} className={`relative ${plan.popular ? 'md:-mt-6' : ''}`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <Star className="w-4 h-4 fill-white" />
                      <span className="font-heading font-bold text-sm">MOST POPULAR</span>
                    </div>
                  </div>
                )}
                
                {/* Card Container */}
                <div className={`relative group ${plan.popular ? 'h-full' : ''}`}>
                  {/* Glowing Border */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.color} rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500`} />
                  
                  <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 border border-gray-800/50 backdrop-blur-sm h-full">
                    {/* Plan Header */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center shadow-lg`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-heading text-2xl font-bold text-white">{plan.name}</h3>
                              <p className="text-gray-400 text-sm">{plan.tagline}</p>
                            </div>
                          </div>
                        </div>
                        {plan.popular && (
                          <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
                            <span className="text-sm font-medium text-purple-300">BEST VALUE</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Price Display - Made BOLD and Prominent */}
                      <div className="text-center mb-6">
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-gray-400 text-lg font-medium">₦</span>
                          <span className="text-7xl md:text-8xl font-black text-white leading-none tracking-tight">
                            {displayPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 mt-2">
                          <span className="text-gray-400">{plan.period}</span>
                          {isAnnual && (
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500 line-through">
                                ₦{(plan.price * 12).toLocaleString()}
                              </span>
                              <span className="px-2 py-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded text-xs font-bold text-white">
                                Save ₦{(plan.price * 12 * 0.2).toLocaleString()}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Cost Breakdown - Emphasizing Affordability */}
                      <div className="bg-gray-900/50 rounded-xl p-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">
                            That's just ₦{monthlyEquivalent.toLocaleString()} per month!
                          </div>
                          <p className="text-gray-400 text-sm">
                            Less than ₦{(Math.ceil(monthlyEquivalent / 30)).toLocaleString()} per day
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <div className="mb-8">
                      <h4 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-500" />
                        What's included:
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded flex items-center justify-center ${feature.included ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : 'bg-gray-800 border border-gray-700'}`}>
                              {feature.included && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className={`font-sans ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                              {feature.text}
                            </span>
                            {feature.text.includes("AI") && (
                              <span className="px-2 py-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs font-bold rounded">
                                AI POWERED
                              </span>
                            )}
                            {feature.text.includes("PDF") && (
                              <span className="px-2 py-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 text-xs font-bold rounded">
                                NEW
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-auto">
                      <button className={`w-full py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 ${plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]' 
                        : 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]'
                      } text-white flex items-center justify-center gap-3 group`}>
                        {plan.cta}
                        <Rocket className={`w-5 h-5 ${plan.popular ? 'text-pink-300' : 'text-indigo-300'} group-hover:translate-x-1 transition-transform`} />
                      </button>
                      
                      {/* Guarantee Text */}
                      <p className="text-center text-gray-500 text-sm mt-4">
                        💰 30-day money-back guarantee • No credit card required
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Comparison */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl border border-gray-800 p-8">
            <div className="text-center mb-8">
              <h3 className="font-heading text-3xl font-bold text-white mb-4">
                See the <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Unbeatable Value</span>
              </h3>
              <p className="text-gray-400">Compare what ₦3,000 gets you elsewhere</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { 
                  item: "One Textbook", 
                  price: "₦5,000+", 
                  icon: "📚",
                  comparison: "Pro Plan gives you AI tools for 2 months!"
                },
                { 
                  item: "Coffee Shop Study", 
                  price: "₦2,500", 
                  icon: "☕",
                  comparison: "One week of coffee vs a month of planning"
                },
                { 
                  item: "Movie Tickets", 
                  price: "₦3,500", 
                  icon: "🎬",
                  comparison: "3 hours entertainment vs 30 days productivity"
                },
                { 
                  item: "Planly Pro", 
                  price: "₦3,000", 
                  icon: "🚀",
                  comparison: "Full AI features for academic excellence"
                },
              ].map((comp, idx) => (
                <div key={idx} className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-indigo-500/30 transition-all">
                  <div className="text-4xl mb-4">{comp.icon}</div>
                  <h4 className="font-heading font-bold text-white mb-2">{comp.item}</h4>
                  <div className="text-2xl font-black text-white mb-3">{comp.price}</div>
                  <p className="text-gray-400 text-sm">{comp.comparison}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Savings & Guarantees */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-900/20 to-black rounded-2xl border border-indigo-800/30 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-white">Yearly Savings</h4>
                <p className="text-gray-400">Switch to annual billing</p>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="text-gray-300">Basic Plan (Annual)</span>
                <span className="text-2xl font-black text-white">₦14,400</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-300">Pro Plan (Annual)</span>
                <span className="text-2xl font-black text-emerald-400">₦28,800</span>
              </li>
              <li className="pt-4 border-t border-gray-800">
                <div className="text-center">
                  <div className="text-lg text-gray-400">Total Yearly Savings</div>
                  <div className="text-3xl font-black text-emerald-400">₦7,200</div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-900/20 to-black rounded-2xl border border-emerald-800/30 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-white">No-Risk Guarantee</h4>
                <p className="text-gray-400">Your success is guaranteed</p>
              </div>
            </div>
            <ul className="space-y-4">
              {savings.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl" />
            <button className="relative group px-16 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-heading font-extrabold text-xl rounded-2xl hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:-translate-y-1.5 transition-all duration-500 flex items-center gap-4 mx-auto">
              <Brain className="w-6 h-6 text-white" />
              <span>GET STARTED FOR JUST ₦1,500/MONTH</span>
              <div className="group-hover:translate-x-2 transition-transform">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
            </button>
          </div>
          
          {/* Final Price Emphasis */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-6 inline-block">
              <div className="text-center">
                <div className="text-gray-400 text-sm mb-2">STARTING FROM JUST</div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-gray-400 text-xl">₦</span>
                  <span className="text-5xl md:text-6xl font-black text-white">1,500</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <div className="text-emerald-400 text-sm font-bold mt-2">
                  Cancel anytime • No hidden fees
                </div>
              </div>
            </div>
          </div>
          
          <p className="font-sans text-gray-400 mt-8 max-w-2xl mx-auto">
            Join 500+ students who have transformed their academic life with Planly. 
            Your success is just ₦1,500 away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;