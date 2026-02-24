// "use client";

// import { useState, useEffect, useRef } from 'react';
// import { Check, X, Sparkles, Zap, Crown, HelpCircle, ArrowRight, Shield, Clock, Gift } from 'lucide-react';
// import Link from 'next/link';

// export default function Pricing() {
//   const [isYearly, setIsYearly] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const plans = [
//     {
//       name: "Starter",
//       description: "Perfect for getting started",
//       monthlyPrice: 0,
//       yearlyPrice: 0,
//       icon: Zap,
//       popular: false,
//       features: [
//         { text: "Up to 3 subjects", included: true },
//         { text: "Basic task management", included: true },
//         { text: "Calendar view", included: true },
//         { text: "Mobile app access", included: true },
//         { text: "Email reminders", included: true },
//         { text: "Advanced analytics", included: false },
//         { text: "AI study recommendations", included: false },
//         { text: "Priority support", included: false },
//         { text: "Group study rooms", included: false },
//         { text: "Custom integrations", included: false },
//       ],
//       cta: "Get Started Free",
//       ctaStyle: "outline"
//     },
//     {
//       name: "Basic",
//       description: "For serious students",
//       monthlyPrice: 1500,
//       yearlyPrice: 14400,
//       icon: Sparkles,
//       popular: false,
//       features: [
//         { text: "Unlimited subjects", included: true },
//         { text: "Advanced task management", included: true },
//         { text: "Calendar & Kanban views", included: true },
//         { text: "Mobile & desktop apps", included: true },
//         { text: "Smart reminders", included: true },
//         { text: "Basic analytics", included: true },
//         { text: "AI study recommendations", included: false },
//         { text: "Priority support", included: false },
//         { text: "Group study rooms", included: false },
//         { text: "Custom integrations", included: false },
//       ],
//       cta: "Start Basic Plan",
//       ctaStyle: "primary"
//     },
//     {
//       name: "Pro",
//       description: "Unlock your full potential",
//       monthlyPrice: 3000,
//       yearlyPrice: 28800,
//       icon: Crown,
//       popular: true,
//       features: [
//         { text: "Everything in Basic", included: true },
//         { text: "Unlimited subjects & tasks", included: true },
//         { text: "All views (Calendar, Kanban, List)", included: true },
//         { text: "All platforms + offline mode", included: true },
//         { text: "AI-powered smart reminders", included: true },
//         { text: "AI PDF summary", included: true },
//         { text: "Advanced analytics & insights", included: true },
//         { text: "Personalized AI study coach", included: true },
//         { text: "24/7 Priority support", included: true },
//         { text: "Unlimited group study rooms", included: true },
//       ],
//       cta: "Go Pro",
//       ctaStyle: "gradient"
//     }
//   ];

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-NG').format(price);
//   };

//   return (
//     <section 
//       id="pricing" 
//       ref={sectionRef}
//       className="relative py-24 lg:py-32 bg-white overflow-hidden"
//     >
//       {/* Subtle background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
//             <Shield className="w-4 h-4 text-purple-600" />
//             <span className="text-sm font-medium text-purple-700">Simple Pricing</span>
//           </div>
          
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
//             Choose Your Plan,<br />
//             <span className="text-purple-600">Start Excelling</span>
//           </h2>
          
//           <p className="text-lg text-gray-600 mb-10">
//             Affordable plans designed for students. No hidden fees, cancel anytime.
//           </p>

//           {/* Billing Toggle */}
//           <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-gray-100 border border-gray-200">
//             <button
//               onClick={() => setIsYearly(false)}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                 !isYearly 
//                   ? 'bg-white text-gray-900 shadow-sm' 
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setIsYearly(true)}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
//                 isYearly 
//                   ? 'bg-white text-gray-900 shadow-sm' 
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Yearly
//               <span className="px-2 py-0.5 text-[10px] font-bold bg-green-500 text-white rounded-full">
//                 SAVE 20%
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {plans.map((plan, index) => (
//             <div
//               key={plan.name}
//               className={`relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               {/* Popular Badge */}
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
//                   <div className="px-4 py-1.5 bg-purple-600 rounded-full text-white text-sm font-semibold shadow-lg shadow-purple-200 flex items-center gap-1.5">
//                     <Crown className="w-4 h-4" />
//                     Most Popular
//                   </div>
//                 </div>
//               )}

//               <div className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
//                 plan.popular 
//                   ? 'bg-white border-2 border-purple-200 shadow-xl shadow-purple-100/50 lg:scale-105' 
//                   : 'bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:bg-white'
//               }`}>
                
//                 {/* Plan Header */}
//                 <div className="mb-6">
//                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
//                     plan.popular 
//                       ? 'bg-purple-600' 
//                       : 'bg-white border border-gray-200'
//                   }`}>
//                     <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-purple-600'}`} />
//                   </div>
                  
//                   <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
//                   <p className="text-gray-500 text-sm">{plan.description}</p>
//                 </div>

//                 {/* Price */}
//                 <div className="mb-6">
//                   <div className="flex items-baseline gap-1">
//                     <span className="text-xl text-gray-500">₦</span>
//                     <span className="text-4xl font-bold text-gray-900 tracking-tight">
//                       {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
//                     </span>
//                     <span className="text-gray-500 ml-1 text-sm">
//                       {plan.monthlyPrice === 0 ? 'Free' : `/${isYearly ? 'year' : 'month'}`}
//                     </span>
//                   </div>
                  
//                   {isYearly && plan.monthlyPrice > 0 && (
//                     <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
//                       <Gift className="w-4 h-4" />
//                       Save ₦{formatPrice((plan.monthlyPrice * 12) - plan.yearlyPrice)} yearly
//                     </p>
//                   )}
//                 </div>

//                 {/* CTA Button */}
//                 <Link
//                   href="/signup"
//                   className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 mb-6 ${
//                     plan.ctaStyle === 'gradient'
//                       ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200'
//                       : plan.ctaStyle === 'primary'
//                       ? 'bg-gray-900 text-white hover:bg-gray-800'
//                       : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300'
//                   }`}
//                 >
//                   <span className="flex items-center justify-center gap-2">
//                     {plan.cta}
//                     <ArrowRight className="w-4 h-4" />
//                   </span>
//                 </Link>

//                 {/* Features List */}
//                 <div className="space-y-3">
//                   <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
//                     What's included
//                   </p>
//                   <ul className="space-y-2.5">
//                     {plan.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start gap-3">
//                         {feature.included ? (
//                           <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                             <Check className="w-3 h-3 text-green-600" />
//                           </div>
//                         ) : (
//                           <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                             <X className="w-3 h-3 text-gray-400" />
//                           </div>
//                         )}
//                         <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
//                           {feature.text}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Trust Badges */}
//         <div className={`mt-16 flex flex-wrap items-center justify-center gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="flex items-center gap-2 text-gray-500">
//             <Shield className="w-5 h-5" />
//             <span className="text-sm">Secure Payment</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-500">
//             <Clock className="w-5 h-5" />
//             <span className="text-sm">Instant Access</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-500">
//             <Check className="w-5 h-5" />
//             <span className="text-sm">Cancel Anytime</span>
//           </div>
//         </div>

//         {/* FAQ Teaser */}
//         <div className={`mt-20 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center">
//             <HelpCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
//             <h3 className="text-xl font-bold text-gray-900 mb-2">Have Questions?</h3>
//             <p className="text-gray-600 mb-6">
//               Not sure which plan is right for you? Our team is here to help you choose.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <Link
//                 href="/contact"
//                 className="px-6 py-3 rounded-xl bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 transition-colors"
//               >
//                 Contact Sales
//               </Link>
//               <Link
//                 href="/faq"
//                 className="px-6 py-3 rounded-xl text-gray-600 hover:text-gray-900 font-medium hover:bg-gray-100 transition-colors"
//               >
//                 View FAQ
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Money Back Guarantee */}
//         <div className={`mt-8 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
//             <Shield className="w-4 h-4 text-green-600" />
//             30-day money-back guarantee. No questions asked.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }




// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Check, X, Sparkles, Zap, Crown, HelpCircle, ArrowRight, Shield, Clock, Gift } from "lucide-react";
// import Link from "next/link";

// export default function Pricing() {
//   const [isYearlyBilling, setIsYearlyBilling] = useState(false);
//   const [isSectionVisible, setIsSectionVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // All available pricing plans
//   const plans = [
//     {
//       name: "Starter",
//       description: "Perfect for getting started",
//       monthlyPrice: 0,
//       yearlyPrice: 0,
//       icon: Zap,
//       isPopular: false,
//       features: [
//         { text: "Up to 3 subjects", included: true },
//         { text: "Basic task management", included: true },
//         { text: "Calendar view", included: true },
//         { text: "Mobile app access", included: true },
//         { text: "Email reminders", included: true },
//         { text: "Advanced analytics", included: false },
//         { text: "AI study recommendations", included: false },
//         { text: "Priority support", included: false },
//         { text: "Group study rooms", included: false },
//         { text: "Custom integrations", included: false },
//       ],
//       cta: "Get Started Free",
//       buttonStyle: "outline"
//     },
//     {
//       name: "Basic",
//       description: "For serious students",
//       monthlyPrice: 1500,
//       yearlyPrice: 14400,
//       icon: Sparkles,
//       isPopular: false,
//       features: [
//         { text: "Unlimited subjects", included: true },
//         { text: "Advanced task management", included: true },
//         { text: "Calendar & Kanban views", included: true },
//         { text: "Mobile & desktop apps", included: true },
//         { text: "Smart reminders", included: true },
//         { text: "Basic analytics", included: true },
//         { text: "AI study recommendations", included: false },
//         { text: "Priority support", included: false },
//         { text: "Group study rooms", included: false },
//         { text: "Custom integrations", included: false },
//       ],
//       cta: "Start Basic Plan",
//       buttonStyle: "primary"
//     },
//     {
//       name: "Pro",
//       description: "Unlock your full potential",
//       monthlyPrice: 3000,
//       yearlyPrice: 28800,
//       icon: Crown,
//       isPopular: true,
//       features: [
//         { text: "Everything in Basic", included: true },
//         { text: "Unlimited subjects & tasks", included: true },
//         { text: "All views (Calendar, Kanban, List)", included: true },
//         { text: "All platforms + offline mode", included: true },
//         { text: "AI-powered smart reminders", included: true },
//         { text: "AI PDF summary", included: true },
//         { text: "Advanced analytics & insights", included: true },
//         { text: "Personalized AI study coach", included: true },
//         { text: "24/7 Priority support", included: true },
//         { text: "Unlimited group study rooms", included: true },
//       ],
//       cta: "Go Pro",
//       buttonStyle: "gradient"
//     }
//   ];

//   // Format price with commas for Nigerian Naira
//   const formatPrice = (price) => {
//     return new Intl.NumberFormat("en-NG").format(price);
//   };

//   // Calculate yearly savings
//   const calculateYearlySavings = (monthlyPrice, yearlyPrice) => {
//     if (monthlyPrice === 0) return 0;
//     return (monthlyPrice * 12) - yearlyPrice;
//   };

//   // Handle section visibility on scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//           setIsSectionVisible(true);
//           // Stop observing once visible to improve performance
//           if (sectionRef.current) {
//             observer.unobserve(sectionRef.current);
//           }
//         }
//       },
//       { 
//         threshold: 0.1,
//         rootMargin: "50px"
//       }
//     );

//     const currentSection = sectionRef.current;
//     if (currentSection) {
//       observer.observe(currentSection);
//     }

//     return () => {
//       if (currentSection) {
//         observer.unobserve(currentSection);
//       }
//     };
//   }, []);

//   // Helper for animation classes
//   const getAnimationClass = (delay = 0) => {
//     return `transition-all duration-1000 ${
//       isSectionVisible 
//         ? "opacity-100 translate-y-0" 
//         : "opacity-0 translate-y-10"
//     }`;
//   };

//   // Get button styles based on plan
//   const getButtonStyles = (style) => {
//     switch(style) {
//       case "gradient":
//         return "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200";
//       case "primary":
//         return "bg-gray-900 text-white hover:bg-gray-800";
//       default:
//         return "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300";
//     }
//   };

//   return (
//     <section 
//       id="pricing" 
//       ref={sectionRef}
//       className="relative py-24 lg:py-32 bg-white overflow-hidden"
//       aria-label="Pricing plans"
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0" aria-hidden="true">
//         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className={`max-w-3xl mx-auto text-center mb-16 ${getAnimationClass()}`}>
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
//             <Shield className="w-4 h-4 text-purple-600" />
//             <span className="text-sm font-medium text-purple-700">Simple Pricing</span>
//           </div>
          
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
//             Choose Your Plan,<br />
//             <span className="text-purple-600">Start Excelling</span>
//           </h2>
          
//           <p className="text-lg text-gray-600 mb-10">
//             Affordable plans designed for students. No hidden fees, cancel anytime.
//           </p>

//           {/* Billing Toggle - Monthly vs Yearly */}
//           <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-gray-100 border border-gray-200">
//             <button
//               onClick={() => setIsYearlyBilling(false)}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
//                 !isYearlyBilling 
//                   ? "bg-white text-gray-900 shadow-sm" 
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//               aria-pressed={!isYearlyBilling}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setIsYearlyBilling(true)}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
//                 isYearlyBilling 
//                   ? "bg-white text-gray-900 shadow-sm" 
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//               aria-pressed={isYearlyBilling}
//             >
//               Yearly
//               <span className="px-2 py-0.5 text-[10px] font-bold bg-green-500 text-white rounded-full">
//                 SAVE 20%
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* Pricing Cards Grid */}
//         <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {plans.map((plan, index) => {
//             const IconComponent = plan.icon;
//             const currentPrice = isYearlyBilling ? plan.yearlyPrice : plan.monthlyPrice;
//             const yearlySavings = calculateYearlySavings(plan.monthlyPrice, plan.yearlyPrice);
            
//             return (
//               <div
//                 key={plan.name}
//                 className={`relative group transition-all duration-1000 ${getAnimationClass()}`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 {/* Popular Badge - Only shows for Pro plan */}
//                 {plan.isPopular && (
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
//                     <div className="px-4 py-1.5 bg-purple-600 rounded-full text-white text-sm font-semibold shadow-lg shadow-purple-200 flex items-center gap-1.5">
//                       <Crown className="w-4 h-4" />
//                       <span>Most Popular</span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Plan Card */}
//                 <div className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
//                   plan.isPopular 
//                     ? "bg-white border-2 border-purple-200 shadow-xl shadow-purple-100/50 lg:scale-105" 
//                     : "bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:bg-white"
//                 }`}>
                  
//                   {/* Plan Header */}
//                   <div className="mb-6">
//                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
//                       plan.isPopular 
//                         ? "bg-purple-600" 
//                         : "bg-white border border-gray-200"
//                     }`}>
//                       <IconComponent className={`w-6 h-6 ${plan.isPopular ? "text-white" : "text-purple-600"}`} />
//                     </div>
                    
//                     <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
//                     <p className="text-gray-500 text-sm">{plan.description}</p>
//                   </div>

//                   {/* Price Display */}
//                   <div className="mb-6">
//                     <div className="flex items-baseline gap-1">
//                       <span className="text-xl text-gray-500">₦</span>
//                       <span className="text-4xl font-bold text-gray-900 tracking-tight">
//                         {formatPrice(currentPrice)}
//                       </span>
//                       <span className="text-gray-500 ml-1 text-sm">
//                         {plan.monthlyPrice === 0 ? "Free" : `/${isYearlyBilling ? "year" : "month"}`}
//                       </span>
//                     </div>
                    
//                     {/* Yearly Savings Badge */}
//                     {isYearlyBilling && yearlySavings > 0 && (
//                       <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
//                         <Gift className="w-4 h-4" />
//                         Save ₦{formatPrice(yearlySavings)} yearly
//                       </p>
//                     )}
//                   </div>

//                   {/* Call to Action Button */}
//                   <Link
//                     href="/signup"
//                     className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 mb-6 ${getButtonStyles(plan.buttonStyle)} focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2`}
//                   >
//                     <span className="flex items-center justify-center gap-2">
//                       {plan.cta}
//                       <ArrowRight className="w-4 h-4" />
//                     </span>
//                   </Link>

//                   {/* Features List */}
//                   <div className="space-y-3">
//                     <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
//                       What&apos;s included
//                     </p>
//                     <ul className="space-y-2.5">
//                       {plan.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-start gap-3">
//                           {feature.included ? (
//                             <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                               <Check className="w-3 h-3 text-green-600" />
//                             </div>
//                           ) : (
//                             <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                               <X className="w-3 h-3 text-gray-400" />
//                             </div>
//                           )}
//                           <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
//                             {feature.text}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Trust Badges */}
//         <div className={`mt-16 flex flex-wrap items-center justify-center gap-8 ${getAnimationClass(500)}`}>
//           <div className="flex items-center gap-2 text-gray-500">
//             <Shield className="w-5 h-5" />
//             <span className="text-sm">Secure Payment</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-500">
//             <Clock className="w-5 h-5" />
//             <span className="text-sm">Instant Access</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-500">
//             <Check className="w-5 h-5" />
//             <span className="text-sm">Cancel Anytime</span>
//           </div>
//         </div>

//         {/* FAQ Teaser Section */}
//         <div className={`mt-20 max-w-2xl mx-auto ${getAnimationClass(600)}`}>
//           <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center">
//             <HelpCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
//             <h3 className="text-xl font-bold text-gray-900 mb-2">Have Questions?</h3>
//             <p className="text-gray-600 mb-6">
//               Not sure which plan is right for you? Our team is here to help you choose.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <Link
//                 href="/contact"
//                 className="px-6 py-3 rounded-xl bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
//               >
//                 Contact Sales
//               </Link>
//               <Link
//                 href="/faq"
//                 className="px-6 py-3 rounded-xl text-gray-600 hover:text-gray-900 font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
//               >
//                 View FAQ
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Money Back Guarantee */}
//         <div className={`mt-8 text-center ${getAnimationClass(700)}`}>
//           <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
//             <Shield className="w-4 h-4 text-green-600" />
//             <span>30-day money-back guarantee. No questions asked.</span>
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }




//create the pricing component with the following features:
// - 3 pricing plans: Starter (Free), Basic (₦1,500/month), Pro (₦3,000/month)
// - Each plan should have a list of features, with checkmarks for included features and X marks for excluded features
// - A toggle to switch between monthly and yearly billing (yearly should show a 20% discount)

// "use client";


// import { useState,  useRef, useEffect } from "react";
// import { Check, X, Sparkles, Zap, Crown, HelpCircle, ArrowRight, Shield, Clock, Gift } from "lucide-react";
// import Link from "next/link";

// export default function Pricing() {
//   const [isYearly, setIsYearly] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     const currentSection = sectionRef.current;
//     if (currentSection) {
//       observer.observe(currentSection);
//     }
//     return () => {      if (currentSection) {
//         observer.unobserve(currentSection);
//       }
//     };
//   }, []);

//   const plans = [
//     {
//       name: "Starter",
//       description: "Perfect for getting started",
//       monthlyPrice: 0,
//       yearlyPrice: 0,
//       icon: Zap,
//       popular: false,
//       features: [
//         { text: "Up to 3 subjects", included: true },
//         { text: "Basic task management", included: true },
//         { text: "Calendar view", included: true },
//         { text: "Mobile app access", included: true },
//         { text: "Email reminders", included: true },
//         { text: "Advanced analytics", included: false },
//         { text: "AI study recommendations", included: false },
//         { text: "Priority support", included: false },
//         { text: "Group study rooms", included: false },
//         { text: "Custom integrations", included: false },
//       ],
//       cta: "Get Started Free",
//       ctaStyle: "outline"
//     },
//     {
//       name: "Basic",
//       description: "For serious students",
//       monthlyPrice: 1500,
//       yearlyPrice: 14400,
//       icon: Sparkles,
//       popular: false,
//       features: [
//         { text: "Unlimited subjects", included: true },
//         { text: "Advanced task management", included: true },
//         { text: "Calendar & Kanban views", included: true },
//         { text: "Mobile & desktop apps", included: true },
//         { text: "Smart reminders", included: true },
//         { text: "Basic analytics", included: true },
//         { text: "AI study recommendations", included: false },
//         { text: "Priority support", included: false },
//         { text: "Group study rooms", included: false },
//         { text: "Custom integrations", included: false },
//       ],
//       cta: "Start Basic Plan",
//       ctaStyle: "primary"
//     },
//     {
//       name: "Pro",
//       description: "Unlock your full potential",
//       monthlyPrice: 3000,
//       yearlyPrice: 28800,
//       icon: Crown,
//       popular: true,
//       features: [
//         { text: "Everything in Basic", included: true },
//         { text: "Unlimited subjects & tasks", included: true },
//         { text: "All views (Calendar, Kanban, List)", included: true },
//         { text: "All platforms + offline mode", included: true },
//         { text: "AI-powered smart reminders", included: true },
//         { text: "AI PDF summary", included: true },
//         { text: "Advanced analytics & insights", included: true },
//         { text: "Personalized AI study coach", included: true },
//         { text: "24/7 Priority support", included: true },
//         { text: "Unlimited group study rooms", included: true },
//       ],
//       cta: "Go Pro",
//       ctaStyle: "gradient"
//     }
//   ];

//   return (
//     <section      id="pricing"
//       ref={sectionRef}
//       className="relative py-24 lg:py-32 bg-white overflow-hidden"
//     >
//       {/* Subtle background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px]" />
//       </div>
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
//             <Shield className="w-4 h-4 text-purple-600" />
//             <span className="text-sm font-medium text-purple-700">Simple Pricing</span>
//           </div>
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
//             Choose Your Plan,<br />
//             <span className="text-purple-600">Start Excelling</span>
//           </h2>
//           <p className="text-lg text-gray-600 mb-10">
//             Affordable plans designed for students. No hidden fees, cancel anytime.
//           </p>
//           {/* Billing Toggle */}
//           <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-gray-100 border border-gray-200">
//             <button
//               onClick={() => setIsYearly(false)}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                 !isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setIsYearly(true)}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
//                 isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Yearly
//               <span className="px-2 py-0.5 text-[10px] font-bold bg-green-500 text-white rounded-full">
//                 SAVE 20%
//               </span>
//             </button>
//           </div>
//         </div>
//         {/* Pricing Cards */}
//         <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {plans.map((plan, index) => (
//             <div
//               key={plan.name}
//               className={`relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               {/* Popular Badge */}
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
//                   <div className="px-4 py-1.5 bg-purple-600 rounded-full text-white text-sm font-semibold shadow-lg shadow-purple-200 flex items-center gap-1.5">
//                     <Crown className="w-4 h-4" />
//                     Most Popular
//                   </div>
//                 </div>
//               )}
//               <div className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
//                 plan.popular ? 'bg-white border-2 border-purple-200 shadow-xl shadow-purple-100/50 lg:scale-105' : 'bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:bg-white'
//               }`}>
//                 {/* Plan Header */}
//                 <div className="mb-6">
//                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
//                     plan.popular ? 'bg-purple-600' : 'bg-white border border-gray-200'
//                   }`}>
//                     <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-purple-600'}`} />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
//                   <p className="text-gray-500 text-sm">{plan.description}</p>
//                 </div>
//                 {/* Price */}
//                 <div className="mb-6">
//                   <div className="flex items-baseline gap-1">
//                     <span className="text-xl text-gray-500">₦</span>
//                     <span className="text-4xl font-bold text-gray-900 tracking-tight">
//                       {new Intl.NumberFormat("en-NG").format(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
//                     </span>
//                     <span className="text-gray-500 ml-1 text-sm">
//                       {plan.monthlyPrice === 0 ? 'Free' : `/${isYearly ? 'year' : 'month'}`}
//                     </span>
//                   </div>
//                   {isYearly && plan.monthlyPrice > 0 && (
//                     <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
//                       <Gift className="w-4 h-4" />
//                       Save ₦{new Intl.NumberFormat("en-NG").format((plan.monthlyPrice * 12) - plan.yearlyPrice)} yearly
//                     </p>
//                   )}
//                 </div>
//                 {/* CTA Button */}
//                 <Link
//                   href="/signup"
//                   className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 mb-6 ${
//                     plan.ctaStyle === 'gradient' ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200' :
//                     plan.ctaStyle === 'primary' ? 'bg-gray-900 text-white hover:bg-gray-800' :
//                     'bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300'
//                   }`}
//                 >
//                   <span className="flex items-center justify-center gap-2">
//                     {plan.cta}
//                     <ArrowRight className="w-4 h-4" />
//                   </span>
//                 </Link>
//                 {/* Features List */}
//                 <div className="space-y-3">
//                   <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
//                     What's included
//                   </p>
//                   <ul className="space-y-2.5">
//                     {plan.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start gap-3">
//                         {feature.included ? (
//                           <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                             <Check className="w-3 h-3 text-green-600" />
//                           </div>
//                         ) : (
//                           <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                             <X className="w-3 h-3 text-gray-400" />
//                           </div>
//                         )}
//                         <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
//                           {feature.text}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Trust Badges */}
//         <div className={`mt-16 flex flex-wrap items-center justify-center gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="flex items-center gap-2 text-gray-500">
//             <Shield className="w-5 h-5" />
//             <span className="text-sm">Secure Payment</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-500">
//             <Clock className="w-5 h-5" />
//             <span className="text-sm">Instant Access</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-500">
//             <Check className="w-5 h-5" />
//             <span className="text-sm">Cancel Anytime</span>
//           </div>
//         </div>

//         {/* FAQ Teaser */}
//         <div className={`mt-20 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center">
//             <HelpCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
//             <h3 className="text-xl font-bold text-gray-900 mb-2">Have Questions?</h3>
//             <p className="text-gray-600 mb-6">
//               Not sure which plan is right for you? Our team is here to help you choose.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <Link
//                 href="/contact"
//                 className="px-6 py-3 rounded-xl bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 transition-colors"
//               >
//                 Contact Sales
//               </Link>
//               <Link
//                 href="/faq"
//                 className="px-6 py-3 rounded-xl text-gray-600 hover:text-gray-900 font-medium hover:bg-gray-100 transition-colors"
//               >
//                 View FAQ
//               </Link>
//             </div>
//           </div>
//         </div>
//         {/* Money Back Guarantee */}
//         <div className={`mt-8 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
//             <Shield className="w-4 h-4 text-green-600" />
//             30-day money-back guarantee. No questions asked.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useState, useRef, useEffect } from "react";
import { Check, X, Sparkles, Zap, Crown, HelpCircle, ArrowRight, Shield, Clock, Gift } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );
    
    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }
    
    return () => { 
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: Zap,
      popular: false,
      features: [
        { text: "Up to 3 subjects", included: true },
        { text: "Basic task management", included: true },
        { text: "Calendar view", included: true },
        { text: "Mobile app access", included: true },
        { text: "Email reminders", included: true },
        { text: "Advanced analytics", included: false },
        { text: "AI study recommendations", included: false },
        { text: "Priority support", included: false },
        { text: "Group study rooms", included: false },
        { text: "Custom integrations", included: false },
      ],
      cta: "Get Started Free",
      ctaStyle: "outline"
    },
    {
      name: "Basic",
      description: "For serious students",
      monthlyPrice: 1500,
      yearlyPrice: 14400,
      icon: Sparkles,
      popular: false,
      features: [
        { text: "Unlimited subjects", included: true },
        { text: "Advanced task management", included: true },
        { text: "Calendar & Kanban views", included: true },
        { text: "Mobile & desktop apps", included: true },
        { text: "Smart reminders", included: true },
        { text: "Basic analytics", included: true },
        { text: "AI study recommendations", included: false },
        { text: "Priority support", included: false },
        { text: "Group study rooms", included: false },
        { text: "Custom integrations", included: false },
      ],
      cta: "Start Basic Plan",
      ctaStyle: "primary"
    },
    {
      name: "Pro",
      description: "Unlock your full potential",
      monthlyPrice: 3000,
      yearlyPrice: 28800,
      icon: Crown,
      popular: true,
      features: [
        { text: "Everything in Basic", included: true },
        { text: "Unlimited subjects & tasks", included: true },
        { text: "All views (Calendar, Kanban, List)", included: true },
        { text: "All platforms + offline mode", included: true },
        { text: "AI-powered smart reminders", included: true },
        { text: "AI PDF summary", included: true },
        { text: "Advanced analytics & insights", included: true },
        { text: "Personalized AI study coach", included: true },
        { text: "24/7 Priority support", included: true },
        { text: "Unlimited group study rooms", included: true },
      ],
      cta: "Go Pro",
      ctaStyle: "gradient"
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG").format(price);
  };

  const getButtonStyles = (style) => {
    switch(style) {
      case "gradient":
        return "bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 shadow-lg shadow-purple-500/25";
      case "primary":
        return "bg-white/10 text-white hover:bg-white/20 border border-white/10";
      default:
        return "bg-transparent text-white/70 border-2 border-white/10 hover:border-white/20 hover:text-white/90";
    }
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0A0A0F] overflow-hidden"
    >
      {/* Sophisticated dark background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Deep purple gradient blobs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
            <Shield className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Simple Pricing</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90 mb-6 tracking-tight">
            Choose Your Plan,<br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Start Excelling</span>
          </h2>
          
          <p className="text-lg text-white/60 mb-10">
            Affordable plans designed for students. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle - Dark theme version */}
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly 
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                  : 'text-white/60 hover:text-white/90'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isYearly 
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                  : 'text-white/60 hover:text-white/90'
              }`}
            >
              Yearly
              <span className="px-2 py-0.5 text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/30 rounded-full">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const yearlySavings = plan.monthlyPrice > 0 ? (plan.monthlyPrice * 12) - plan.yearlyPrice : 0;

            return (
              <div
                key={plan.name}
                className={`relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white text-sm font-semibold shadow-lg shadow-purple-500/25 flex items-center gap-1.5">
                      <Crown className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Card */}
                <div className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-[#1A1A23] to-[#15151E] border-2 border-purple-500/30 shadow-xl shadow-purple-500/10 lg:scale-105' 
                    : 'bg-[#1A1A23] border border-white/5 hover:border-purple-500/20 hover:bg-[#1E1E2A]'
                }`}>
                  
                  {/* Plan Header */}
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-purple-500 to-indigo-500' 
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-purple-400'}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white/90 mb-1">{plan.name}</h3>
                    <p className="text-white/50 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl text-white/40">₦</span>
                      <span className="text-4xl font-bold text-white/90 tracking-tight">
                        {formatPrice(currentPrice)}
                      </span>
                      <span className="text-white/40 ml-1 text-sm">
                        {plan.monthlyPrice === 0 ? 'Free' : `/${isYearly ? 'year' : 'month'}`}
                      </span>
                    </div>
                    
                    {isYearly && yearlySavings > 0 && (
                      <p className="mt-2 text-sm text-green-400 flex items-center gap-1">
                        <Gift className="w-4 h-4" />
                        Save ₦{formatPrice(yearlySavings)} yearly
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/signup"
                    className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 mb-6 ${getButtonStyles(plan.ctaStyle)}`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>

                  {/* Features List */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-white/30 uppercase tracking-wider">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {feature.included ? (
                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-500/30">
                              <Check className="w-3 h-3 text-green-400" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10">
                              <X className="w-3 h-3 text-white/20" />
                            </div>
                          )}
                          <span className={`text-sm ${feature.included ? 'text-white/70' : 'text-white/30'}`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className={`mt-16 flex flex-wrap items-center justify-center gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-2 text-white/50">
            <Shield className="w-5 h-5 text-purple-400" />
            <span className="text-sm">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-sm">Instant Access</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <Check className="w-5 h-5 text-purple-400" />
            <span className="text-sm">Cancel Anytime</span>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className={`mt-20 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="p-8 rounded-2xl bg-[#1A1A23] border border-white/5 text-center backdrop-blur-sm">
            <HelpCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white/90 mb-2">Have Questions?</h3>
            <p className="text-white/60 mb-6">
              Not sure which plan is right for you? Our team is here to help you choose.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-white/5 text-white/90 font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                Contact Sales
              </Link>
              <Link
                href="/faq"
                className="px-6 py-3 rounded-xl text-white/60 hover:text-white/90 font-medium hover:bg-white/5 transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className={`mt-8 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-white/50 text-sm flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            30-day money-back guarantee. No questions asked.
          </p>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>
    </section>
  );
}