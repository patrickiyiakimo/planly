// "use client";

// import { useState } from 'react';
// import { ChevronDown, Search, MessageCircle, Mail, Phone, GraduationCap, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// export default function FAQPage() {
//   const [openIndex, setOpenIndex] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');

//   const categories = [
//     { name: 'Getting Started', icon: Sparkles, color: 'bg-purple-50 text-purple-600' },
//     { name: 'Billing & Plans', icon: HelpCircle, color: 'bg-blue-50 text-blue-600' },
//     { name: 'Features', icon: GraduationCap, color: 'bg-green-50 text-green-600' },
//   ];

//   const faqs = [
//     {
//       category: 'Getting Started',
//       question: 'What is Planly and how does it work?',
//       answer: 'Planly is an intelligent academic planner designed specifically for students. It combines smart scheduling, AI-powered reminders, and progress tracking to help you stay organized. Simply sign up, add your courses and assignments, and let Planly create a personalized study schedule that adapts to your routine.'
//     },
//     {
//       category: 'Getting Started',
//       question: 'Is Planly really free to use?',
//       answer: 'Yes! Our Starter plan is completely free forever. You get up to 3 subjects, basic task management, calendar view, and email reminders. No credit card required to sign up. Upgrade to Basic (₦1,500/month) or Pro (₦3,000/month) anytime for unlimited features.'
//     },
//     {
//       category: 'Getting Started',
//       question: 'How do I get started with Planly?',
//       answer: 'Getting started is easy: 1) Create your free account, 2) Add your courses and upcoming assignments, 3) Set your study preferences and available hours, 4) Let our AI generate your personalized schedule. You will be up and running in under 5 minutes!'
//     },
//     {
//       category: 'Billing & Plans',
//       question: 'Can I switch between monthly and yearly billing?',
//       answer: 'Absolutely! You can switch between monthly and yearly billing at any time from your account settings. When you switch to yearly, you will immediately start saving 20%. If you switch to monthly, the change takes effect at your next billing cycle.'
//     },
//     {
//       category: 'Billing & Plans',
//       question: 'What payment methods do you accept?',
//       answer: 'We accept all major debit/credit cards, bank transfers, and mobile money payments including Paystack and Flutterwave. All payments are processed securely with 256-bit encryption. You can also pay via USSD for convenience.'
//     },
//     {
//       category: 'Billing & Plans',
//       question: 'Is there a refund policy?',
//       answer: 'Yes, we offer a 30-day money-back guarantee on all paid plans. If you are not satisfied with Planly for any reason, contact our support team within 30 days of your purchase for a full refund. No questions asked.'
//     },
//     {
//       category: 'Features',
//       question: 'How does the AI study recommendations work?',
//       answer: 'Our AI analyzes your study patterns, assignment deadlines, course difficulty, and past performance to suggest optimal study times and focus areas. It learns from your habits and continuously improves its recommendations to help you study smarter, not harder.'
//     },
//     {
//       category: 'Features',
//       question: 'Can I collaborate with classmates on Planly?',
//       answer: 'Yes! Pro users can create unlimited group study rooms where you can share schedules, collaborate on projects, and keep each other accountable. Basic users can join existing groups, while Starter users have read-only access to shared content.'
//     },
//     {
//       category: 'Features',
//       question: 'Does Planly work offline?',
//       answer: 'Pro users can access their schedules and mark tasks complete offline. Changes sync automatically when you are back online. Basic and Starter plans require an internet connection, but our mobile app is optimized to work well even on slow networks.'
//     }
//   ];

//   const filteredFaqs = faqs.filter(faq => 
//     faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const groupedFaqs = filteredFaqs.reduce((acc, faq) => {
//     if (!acc[faq.category]) acc[faq.category] = [];
//     acc[faq.category].push(faq);
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white" />
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
//           <div className="text-center max-w-3xl mx-auto">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
//               <HelpCircle className="w-4 h-4 text-purple-600" />
//               <span className="text-sm font-medium text-purple-700">Help Center</span>
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               How can we <span className="text-purple-600">help you?</span>
//             </h1>
            
//             <p className="text-lg text-gray-600 mb-10">
//               Everything you need to know about Planly. Can't find what you're looking for? 
//               Reach out to our friendly team.
//             </p>

//             {/* Search Bar */}
//             <div className="relative max-w-xl mx-auto">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search for answers..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-lg shadow-gray-100 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all text-lg"
//               />
//             </div>
//           </div>

//           {/* Hero Illustration */}
//           <div className="mt-12 flex justify-center">
//             <div className="relative">
//               <img 
//                 src="https://img.freepik.com/free-vector/tiny-business-people-with-giant-faq-letters-gadget-users-searching-instructions-useful-information-flat-vector-illustration-customer-support-solution-concept-banner-landing-web-page_74855-23409.jpg?w=800&q=80"
//                 alt="FAQ illustration with people and questions"
//                 className="w-full max-w-2xl h-auto rounded-2xl"
//               />
//               <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full blur-3xl -z-10" />
//               <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-200 rounded-full blur-3xl -z-10" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Category Pills */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//         <div className="flex flex-wrap justify-center gap-3">
//           {categories.map((cat) => (
//             <button
//               key={cat.name}
//               className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all ${cat.color} border-current/20 hover:shadow-md`}
//             >
//               <cat.icon className="w-4 h-4" />
//               <span className="font-medium text-sm">{cat.name}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* FAQ Content */}
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
//         {Object.entries(groupedFaqs).map(([category, items], catIndex) => (
//           <div key={category} className="mb-10">
//             <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//               <span className="w-8 h-1 bg-purple-600 rounded-full" />
//               {category}
//             </h2>
            
//             <div className="space-y-3">
//               {items.map((faq, index) => {
//                 const globalIndex = catIndex * 100 + index;
//                 const isOpen = openIndex === globalIndex;
                
//                 return (
//                   <div
//                     key={globalIndex}
//                     className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
//                       isOpen ? 'border-purple-200 bg-purple-50/30 shadow-sm' : 'border-gray-200 hover:border-gray-300'
//                     }`}
//                   >
//                     <button
//                       onClick={() => setOpenIndex(isOpen ? -1 : globalIndex)}
//                       className="w-full flex items-center justify-between p-5 text-left"
//                     >
//                       <span className={`font-semibold pr-4 ${isOpen ? 'text-purple-700' : 'text-gray-900'}`}>
//                         {faq.question}
//                       </span>
//                       <ChevronDown 
//                         className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'text-purple-600 rotate-180' : 'text-gray-400'}`}
//                       />
//                     </button>
                    
//                     <div 
//                       className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
//                     >
//                       <div className="px-5 pb-5 text-gray-600 leading-relaxed">
//                         {faq.answer}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}

//         {filteredFaqs.length === 0 && (
//           <div className="text-center py-12">
//             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Search className="w-8 h-8 text-gray-400" />
//             </div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
//             <p className="text-gray-600">Try searching with different keywords or browse the categories above.</p>
//           </div>
//         )}
//       </div>

//       {/* Contact Section */}
//       <div className="bg-gray-50 border-t border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left - Content */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                 Still have questions?
//               </h2>
//               <p className="text-gray-600 mb-8">
//                 Can't find what you're looking for? Our friendly support team is here to help you 
//                 get the most out of Planly.
//               </p>
              
//               <div className="space-y-4">
//                 <Link 
//                   href="/contact"
//                   className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group"
//                 >
//                   <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
//                     <MessageCircle className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-gray-900">Live Chat</h3>
//                     <p className="text-sm text-gray-500">Average response time: 2 minutes</p>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
//                 </Link>

//                 <Link 
//                   href="mailto:support@planly.app"
//                   className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group"
//                 >
//                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
//                     <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-gray-900">Email Support</h3>
//                     <p className="text-sm text-gray-500">support@planly.app</p>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
//                 </Link>

//                 <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
//                   <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
//                     <Phone className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">Phone Support</h3>
//                     <p className="text-sm text-gray-500">Pro users only • 24/7 availability</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right - Illustration */}
//             <div className="relative hidden md:block">
//               <img 
//                 src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=600&q=80"
//                 alt="Customer support illustration"
//                 className="w-full h-auto rounded-2xl"
//               />
//               <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-purple-100 rounded-full blur-3xl -z-10" />
//               <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import { useState } from 'react';
import { ChevronDown, Search, MessageCircle, Mail, Phone, GraduationCap, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Getting Started', icon: Sparkles, color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    { name: 'Billing & Plans', icon: HelpCircle, color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { name: 'Features', icon: GraduationCap, color: 'bg-green-500/10 text-green-400 border-green-500/20' },
  ];

  const faqs = [
    {
      category: 'Getting Started',
      question: 'What is Planly and how does it work?',
      answer: 'Planly is an intelligent academic planner designed specifically for students. It combines smart scheduling, AI-powered reminders, and progress tracking to help you stay organized. Simply sign up, add your courses and assignments, and let Planly create a personalized study schedule that adapts to your routine.'
    },
    {
      category: 'Getting Started',
      question: 'Is Planly really free to use?',
      answer: 'Yes! Our Starter plan is completely free forever. You get up to 3 subjects, basic task management, calendar view, and email reminders. No credit card required to sign up. Upgrade to Basic (₦1,500/month) or Pro (₦3,000/month) anytime for unlimited features.'
    },
    {
      category: 'Getting Started',
      question: 'How do I get started with Planly?',
      answer: 'Getting started is easy: 1) Create your free account, 2) Add your courses and upcoming assignments, 3) Set your study preferences and available hours, 4) Let our AI generate your personalized schedule. You will be up and running in under 5 minutes!'
    },
    {
      category: 'Billing & Plans',
      question: 'Can I switch between monthly and yearly billing?',
      answer: 'Absolutely! You can switch between monthly and yearly billing at any time from your account settings. When you switch to yearly, you will immediately start saving 20%. If you switch to monthly, the change takes effect at your next billing cycle.'
    },
    {
      category: 'Billing & Plans',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major debit/credit cards, bank transfers, and mobile money payments including Paystack and Flutterwave. All payments are processed securely with 256-bit encryption. You can also pay via USSD for convenience.'
    },
    {
      category: 'Billing & Plans',
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a 30-day money-back guarantee on all paid plans. If you are not satisfied with Planly for any reason, contact our support team within 30 days of your purchase for a full refund. No questions asked.'
    },
    {
      category: 'Features',
      question: 'How does the AI study recommendations work?',
      answer: 'Our AI analyzes your study patterns, assignment deadlines, course difficulty, and past performance to suggest optimal study times and focus areas. It learns from your habits and continuously improves its recommendations to help you study smarter, not harder.'
    },
    {
      category: 'Features',
      question: 'Can I collaborate with classmates on Planly?',
      answer: 'Yes! Pro users can create unlimited group study rooms where you can share schedules, collaborate on projects, and keep each other accountable. Basic users can join existing groups, while Starter users have read-only access to shared content.'
    },
    {
      category: 'Features',
      question: 'Does Planly work offline?',
      answer: 'Pro users can access their schedules and mark tasks complete offline. Changes sync automatically when you are back online. Basic and Starter plans require an internet connection, but our mobile app is optimized to work well even on slow networks.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedFaqs = filteredFaqs.reduce((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Dark background elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Help Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90 mb-6">
              How can we <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">help you?</span>
            </h1>
            
            <p className="text-lg text-white/60 mb-10">
              Everything you need to know about Planly. Can't find what you're looking for? 
              Reach out to our friendly team.
            </p>

            {/* Search Bar - Dark theme */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#1A1A23] border border-white/10 rounded-2xl shadow-lg shadow-purple-500/5 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 outline-none transition-all text-lg text-white/90 placeholder-white/40"
              />
            </div>
          </div>

          {/* Hero Illustration - Dark theme overlay */}
          <div className="mt-12 flex justify-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/5">
                <img 
                  src="https://img.freepik.com/free-vector/tiny-business-people-with-giant-faq-letters-gadget-users-searching-instructions-useful-information-flat-vector-illustration-customer-support-solution-concept-banner-landing-web-page_74855-23409.jpg?w=800&q=80"
                  alt="FAQ illustration with people and questions"
                  className="w-full max-w-2xl h-auto opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-600/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all ${cat.color} hover:shadow-lg hover:shadow-purple-500/5 backdrop-blur-sm`}
            >
              <cat.icon className="w-4 h-4" />
              <span className="font-medium text-sm">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {Object.entries(groupedFaqs).map(([category, items], catIndex) => (
          <div key={category} className="mb-10">
            <h2 className="text-xl font-bold text-white/90 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
              {category}
            </h2>
            
            <div className="space-y-3">
              {items.map((faq, index) => {
                const globalIndex = catIndex * 100 + index;
                const isOpen = openIndex === globalIndex;
                
                return (
                  <div
                    key={globalIndex}
                    className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                      isOpen 
                        ? 'border-purple-500/30 bg-purple-500/5' 
                        : 'border-white/5 bg-[#1A1A23] hover:border-white/10'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : globalIndex)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className={`font-semibold pr-4 ${isOpen ? 'text-purple-400' : 'text-white/90'}`}>
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'text-purple-400 rotate-180' : 'text-white/40'
                        }`}
                      />
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                    >
                      <div className="px-5 pb-5 text-white/60 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
              <Search className="w-8 h-8 text-white/30" />
            </div>
            <h3 className="text-lg font-semibold text-white/90 mb-2">No results found</h3>
            <p className="text-white/50">Try searching with different keywords or browse the categories above.</p>
          </div>
        )}
      </div>

      {/* Contact Section - Dark theme */}
      <div className="bg-[#0A0A0F] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl font-bold text-white/90 mb-4">
                Still have questions?
              </h2>
              <p className="text-white/60 mb-8">
                Can't find what you're looking for? Our friendly support team is here to help you 
                get the most out of Planly.
              </p>
              
              <div className="space-y-4">
                <Link 
                  href="/contact"
                  className="flex items-center gap-4 p-4 bg-[#1A1A23] rounded-xl border border-white/5 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors border border-purple-500/20">
                    <MessageCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white/90">Live Chat</h3>
                    <p className="text-sm text-white/50">Average response time: 2 minutes</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-purple-400 transition-colors" />
                </Link>

                <Link 
                  href="mailto:support@planly.app"
                  className="flex items-center gap-4 p-4 bg-[#1A1A23] rounded-xl border border-white/5 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors border border-blue-500/20">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white/90">Email Support</h3>
                    <p className="text-sm text-white/50">support@planly.app</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-blue-400 transition-colors" />
                </Link>

                <div className="flex items-center gap-4 p-4 bg-[#1A1A23] rounded-xl border border-white/5">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90">Phone Support</h3>
                    <p className="text-sm text-white/50">Pro users only • 24/7 availability</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Illustration with dark overlay */}
            <div className="relative hidden md:block">
              <div className="relative rounded-2xl overflow-hidden border border-white/5">
                <img 
                  src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=600&q=80"
                  alt="Customer support illustration"
                  className="w-full h-auto opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>
    </div>
  );
}