// "use client";

// import { useState, useEffect, useRef } from 'react';
// import { Heart, Lightbulb, Users, Target, Quote, Sparkles, BookOpen, Star, ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// // Simple check circle icon component
// function CheckCircle({ className }) {
//   return (
//     <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//       <polyline points="22 4 12 14.01 9 11.01" />
//     </svg>
//   );
// }

// // Simple building icon component
// function Building({ className }) {
//   return (
//     <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
//       <path d="M9 22v-4h6v4" />
//       <path d="M8 6h.01" />
//       <path d="M16 6h.01" />
//       <path d="M12 6h.01" />
//       <path d="M12 10h.01" />
//       <path d="M12 14h.01" />
//       <path d="M16 10h.01" />
//       <path d="M16 14h.01" />
//       <path d="M8 10h.01" />
//       <path d="M8 14h.01" />
//     </svg>
//   );
// }

// export default function About() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeStory, setActiveStory] = useState(0);
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

//   // Auto-rotate stories every 8 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStory((prev) => (prev + 1) % stories.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   const stories = [
//     {
//       quote: "I was overwhelmed with assignments and deadlines. Planly didn't just organize my schedule—it gave me back my confidence.",
//       author: "Sarah Chen",
//       role: "Computer Science Major",
//       school: "Stanford University",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
//     },
//     {
//       quote: "The difference between my first semester and now is night and day. I actually have time for myself again.",
//       author: "Marcus Johnson",
//       role: "Pre-Med Student",
//       school: "Howard University",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
//     },
//     {
//       quote: "Planly understands that being a student isn't just about grades—it's about balance, growth, and wellbeing.",
//       author: "Emily Rodriguez",
//       role: "Psychology Major",
//       school: "UCLA",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
//     }
//   ];

//   const values = [
//     {
//       icon: Heart,
//       title: "Student-First",
//       description: "Every feature we build starts with one question: How does this help students thrive? We're not just building software; we're supporting dreams.",
//       color: "bg-pink-50 text-pink-600"
//     },
//     {
//       icon: Lightbulb,
//       title: "Intelligent Simplicity",
//       description: "Powerful doesn't have to mean complicated. We harness AI to handle the heavy lifting, so you can focus on learning, not logistics.",
//       color: "bg-amber-50 text-amber-600"
//     },
//     {
//       icon: Users,
//       title: "Community Driven",
//       description: "Built by students, for students. Our roadmap is shaped by real feedback from our community of over 5,000 active users.",
//       color: "bg-blue-50 text-blue-600"
//     },
//     {
//       icon: Target,
//       title: "Holistic Growth",
//       description: "Success isn't just about grades. We help you balance academics with mental health, social life, and personal development.",
//       color: "bg-emerald-50 text-emerald-600"
//     }
//   ];

//   const stats = [
//     { number: "50K+", label: "Active Students", icon: Users },
//     { number: "2M+", label: "Tasks Completed", icon: CheckCircle },
//     { number: "98%", label: "Satisfaction Rate", icon: Star },
//     { number: "150+", label: "Universities", icon: Building },
//   ];

//   return (
//     <section 
//       id="about" 
//       ref={sectionRef}
//       className="relative py-24 lg:py-32 bg-white overflow-hidden"
//     >
//       {/* Subtle background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
//             <Sparkles className="w-4 h-4 text-purple-600" />
//             <span className="text-sm font-medium text-purple-700">Our Story</span>
//           </div>
          
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
//             Built in a Dorm Room,<br />
//             <span className="text-purple-600">Loved Worldwide</span>
//           </h2>
          
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Planly began with a simple realization: students are juggling more than ever, 
//             yet the tools we use haven't evolved. We're here to change that.
//           </p>
//         </div>

//         {/* Origin Story */}
//         <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="relative">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50">
//               <img 
//                 src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop" 
//                 alt="Students collaborating" 
//                 className="w-full h-[400px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              
//               {/* Floating Card */}
//               <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-gray-100">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
//                     <BookOpen className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-gray-900 font-semibold mb-1">The Beginning</p>
//                     <p className="text-gray-500 text-sm">2019 • University of Michigan</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Decorative Elements */}
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200/60 rounded-full blur-2xl -z-10" />
//             <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200/60 rounded-full blur-2xl -z-10" />
//           </div>

//           <div className="space-y-6">
//             <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
//               From Personal Struggle to Global Solution
//             </h3>
            
//             <div className="space-y-4 text-gray-600 leading-relaxed">
//               <p>
//                 It started during finals week. I was sitting in a cramped dorm room, 
//                 surrounded by coffee cups, sticky notes, and three different planners—none of which 
//                 were helping. The stress was palpable, and the tools were failing.
//               </p>
//               <p>
//                 "There has to be a better way," I thought. Not just a prettier calendar, but something 
//                 that truly understands the rhythm of student life. The late nights, the group projects, 
//                 the panic before deadlines, the joy of small wins.
//               </p>
//               <p>
//                 That night, Planly was born. What started as a side project to help friends has grown 
//                 into a movement. Today, we're a team of 12, serving students across 150+ universities, 
//                 but our mission remains the same: <span className="text-purple-600 font-medium">every student deserves to feel in control.</span>
//               </p>
//             </div>

//             <div className="flex items-center gap-4 pt-4">
//               <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl border-2 border-purple-200">
//                 PI
//               </div>
//               <div>
//                 <p className="text-gray-900 font-semibold">Patrick Iyiakimo</p>
//                 <p className="text-gray-500 text-sm">Founder & CEO</p>
//               </div>
//               <div className="ml-auto">
//                 <img 
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Michigan_logo.svg/1200px-University_of_Michigan_logo.svg.png" 
//                   alt="University of Michigan" 
//                   className="h-8 opacity-40 grayscale hover:grayscale-0 transition-all"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Values Grid */}
//         <div className={`mb-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="text-center mb-16">
//             <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Believe</h3>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our values aren't just words on a wall. They're the principles that guide every decision we make.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {values.map((value, index) => (
//               <div 
//                 key={index}
//                 className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300"
//               >
//                 <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6`}>
//                   <value.icon className="w-7 h-7" />
//                 </div>
                
//                 <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
//                   {value.title}
//                 </h4>
//                 <p className="text-gray-600 leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Student Stories Carousel */}
//         <div className={`mb-32 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="text-center mb-12">
//             <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Stories That Inspire Us</h3>
//             <p className="text-gray-600">Real students, real transformations</p>
//           </div>

//           <div className="relative max-w-4xl mx-auto">
//             <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-gray-100 p-8 md:p-12">
//               <Quote className="absolute top-8 left-8 w-16 h-16 text-purple-200" />
              
//               <div className="relative z-10">
//                 <div className="flex flex-col md:flex-row items-center gap-8">
//                   <div className="relative">
//                     <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                       <img 
//                         src={stories[activeStory].image} 
//                         alt={stories[activeStory].author}
//                         className="w-full h-full object-cover transition-all duration-500"
//                       />
//                     </div>
//                     <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-white flex items-center justify-center shadow-md">
//                       <Star className="w-4 h-4 text-white fill-white" />
//                     </div>
//                   </div>
                  
//                   <div className="flex-1 text-center md:text-left">
//                     <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-6">
//                       "{stories[activeStory].quote}"
//                     </p>
//                     <div>
//                       <p className="text-gray-900 font-semibold text-lg">{stories[activeStory].author}</p>
//                       <p className="text-purple-600">{stories[activeStory].role}</p>
//                       <p className="text-gray-500 text-sm">{stories[activeStory].school}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Navigation Dots */}
//               <div className="flex justify-center gap-2 mt-8">
//                 {stories.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveStory(index)}
//                     className={`h-2 rounded-full transition-all duration-300 ${
//                       index === activeStory ? 'w-8 bg-purple-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
//                     }`}
//                     aria-label={`Go to story ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300 group">
//               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 text-purple-600 mb-4 group-hover:scale-110 transition-transform">
//                 <stat.icon className="w-6 h-6" />
//               </div>
//               <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
//               <div className="text-gray-500 text-sm">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-3 rounded-2xl bg-gray-50 border border-gray-200">
//             <div className="px-6 py-3">
//               <p className="text-gray-900 font-semibold mb-1">Join our growing family</p>
//               <p className="text-gray-500 text-sm">Be part of something meaningful</p>
//             </div>
//             <Link
//               href="/signup"
//               className="group flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-200"
//             >
//               Get Started Free
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }







"use client";

import { useState, useEffect, useRef } from "react";
import { Heart, Lightbulb, Users, Target, Quote, Sparkles, BookOpen, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

// Simple check circle icon component
function CheckCircle({ className }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

// Simple building icon component
function Building({ className }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

export default function About() {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const sectionRef = useRef(null);

  // Stories data - Real student testimonials
  const stories = [
    {
      quote: "I was overwhelmed with assignments and deadlines. Planly didn't just organize my schedule—it gave me back my confidence.",
      author: "Sarah Chen",
      role: "Computer Science Major",
      school: "Stanford University",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The difference between my first semester and now is night and day. I actually have time for myself again.",
      author: "Marcus Johnson",
      role: "Pre-Med Student",
      school: "Howard University",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Planly understands that being a student isn't just about grades—it's about balance, growth, and wellbeing.",
      author: "Emily Rodriguez",
      role: "Psychology Major",
      school: "UCLA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Company values
  const values = [
    {
      icon: Heart,
      title: "Student-First",
      description: "Every feature we build starts with one question: How does this help students thrive? We're not just building software; we're supporting dreams.",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: Lightbulb,
      title: "Intelligent Simplicity",
      description: "Powerful doesn't have to mean complicated. We harness AI to handle the heavy lifting, so you can focus on learning, not logistics.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by students, for students. Our roadmap is shaped by real feedback from our community of over 5,000 active users.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Target,
      title: "Holistic Growth",
      description: "Success isn't just about grades. We help you balance academics with mental health, social life, and personal development.",
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  // Key statistics
  const stats = [
    { number: "50K+", label: "Active Students", icon: Users },
    { number: "2M+", label: "Tasks Completed", icon: CheckCircle },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
    { number: "150+", label: "Universities", icon: Building },
  ];

  // Animation helper
  const getAnimationClass = (delay = 0) => {
    return `transition-all duration-1000 ${
      isSectionVisible 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-10"
    }`;
  };

  // Observe when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          // Once visible, we can stop observing
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "50px" // Slight buffer for better UX
      }
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

  // Auto-rotate stories every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [stories.length]);

  // Navigate to a specific story
  const goToStory = (index) => {
    setCurrentStoryIndex(index);
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      aria-label="About Planly - Our story and mission"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-20 ${getAnimationClass()}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Our Story</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Built in a Dorm Room,<br />
            <span className="text-purple-600">Loved Worldwide</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Planly began with a simple realization: students are juggling more than ever, 
            yet the tools we use haven&apos;t evolved. We&apos;re here to change that.
          </p>
        </div>

        {/* Origin Story - The beginning of Planly */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 ${getAnimationClass(200)}`}>
          {/* Left column - Image with overlay */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop" 
                alt="Students collaborating in a modern study space" 
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              
              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">The Beginning</p>
                    <p className="text-gray-500 text-sm">2019 • University of Michigan</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative blurred circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200/60 rounded-full blur-2xl -z-10" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200/60 rounded-full blur-2xl -z-10" aria-hidden="true" />
          </div>

          {/* Right column - The story text */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              From Personal Struggle to Global Solution
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                It started during finals week. I was sitting in a cramped dorm room, 
                surrounded by coffee cups, sticky notes, and three different planners—none of which 
                were helping. The stress was palpable, and the tools were failing.
              </p>
              <p>
                &quot;There has to be a better way,&quot; I thought. Not just a prettier calendar, but something 
                that truly understands the rhythm of student life. The late nights, the group projects, 
                the panic before deadlines, the joy of small wins.
              </p>
              <p>
                That night, Planly was born. What started as a side project to help friends has grown 
                into a movement. Today, we&apos;re a team of 12, serving students across 150+ universities, 
                but our mission remains the same: <span className="text-purple-600 font-medium">every student deserves to feel in control.</span>
              </p>
            </div>

            {/* Founder info */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl border-2 border-purple-200">
                PI
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Patrick Iyiakimo</p>
                <p className="text-gray-500 text-sm">Founder & CEO</p>
              </div>
              <div className="ml-auto">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Michigan_logo.svg/1200px-University_of_Michigan_logo.svg.png" 
                  alt="University of Michigan logo" 
                  className="h-8 opacity-40 grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid - What we believe */}
        <div className={`mb-32 ${getAnimationClass(300)}`}>
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Believe</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our values aren&apos;t just words on a wall. They&apos;re the principles that guide every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <div 
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Student Stories Carousel - Real experiences */}
        <div className={`mb-32 ${getAnimationClass(400)}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Stories That Inspire Us</h3>
            <p className="text-gray-600">Real students, real transformations</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-gray-100 p-8 md:p-12">
              {/* Decorative quote mark */}
              <Quote className="absolute top-8 left-8 w-16 h-16 text-purple-200" aria-hidden="true" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Student image */}
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src={stories[currentStoryIndex].image} 
                        alt={stories[currentStoryIndex].author}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-white flex items-center justify-center shadow-md">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                  
                  {/* Testimonial content */}
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-6">
                      &quot;{stories[currentStoryIndex].quote}&quot;
                    </p>
                    <div>
                      <p className="text-gray-900 font-semibold text-lg">{stories[currentStoryIndex].author}</p>
                      <p className="text-purple-600">{stories[currentStoryIndex].role}</p>
                      <p className="text-gray-500 text-sm">{stories[currentStoryIndex].school}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-8">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStory(index)}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
                      index === currentStoryIndex ? 'w-8 bg-purple-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View story from ${stories[index].author}`}
                    aria-current={index === currentStoryIndex ? "true" : "false"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Key metrics */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 ${getAnimationClass(500)}`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className={`text-center ${getAnimationClass(600)}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-3 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="px-6 py-3">
              <p className="text-gray-900 font-semibold mb-1">Join our growing family</p>
              <p className="text-gray-500 text-sm">Be part of something meaningful</p>
            </div>
            <Link
              href="/signup"
              className="group flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}