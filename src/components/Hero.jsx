// "use client";

// import { ChevronRight } from "lucide-react";

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen pt-20 relative flex items-center justify-center bg-black overflow-hidden">
      
//       <div className="absolute inset-0">
//         {/* Background Image with Dark Overlay */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
//           style={{ 
//             backgroundImage: 'url(/images/planly-background.webp)',
//             filter: 'brightness(0.4) blur(2px)',
//           }} 
//         />
        
//         {/* Additional dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* Nebula Effect */}
//         <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-7xl w-full px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           {/* Left: Text Content */}
//           <div className="space-y-8">
//             {/* Main Headline */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//               <span className="text-white font-montserrat">Plan Your Day,</span>
//               <span className="block mt-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Master Your Goals
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-xl text-gray-400 leading-relaxed">
//               Transform chaos into clarity with intelligent scheduling that adapts to your 
//               academic rhythm. Our planner doesn't just organize, it motivates you to follow through.
//             </p>

//             {/* CTA Button */}
//             <button className="group mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl duration-300 flex items-center gap-3">
//               Start Planning Free
//               <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//             </button>
//           </div>

//           {/* Right: Professional Visual Section */}
//           <div className="relative">
//             {/* Main Container */}
//             <div className="relative">
//               {/* Glowing Background Orb */}
//               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/3 to-pink-500/5 rounded-3xl blur-3xl" />
              
//               {/* Floating Visual Elements */}
//               <div className="relative">
                
//                 {/* Central Calendar Element */}
//                 <div className="relative mx-auto w-64 h-64 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
//                   {/* Calendar Grid */}
//                   <div className="absolute inset-4">
//                     <div className="grid grid-cols-7 gap-1">
//                       {Array.from({ length: 7 }).map((_, i) => (
//                         <div key={i} className="h-4 bg-gray-800 rounded"></div>
//                       ))}
//                       {Array.from({ length: 35 }).map((_, i) => (
//                         <div key={i} className={`h-8 rounded ${i === 15 ? 'bg-gradient-to-br from-indigo-500 to-purple-500' : 'bg-gray-900'}`}></div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Highlighted Date */}
//                   <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
//                     <span className="text-white font-bold text-2xl">15</span>
//                   </div>
//                 </div>

//                 {/* Floating Task Cards */}
//                 <div className="absolute -top-6 left-6 w-56 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 shadow-xl transform -rotate-6 hover:-rotate-2 transition-transform duration-500">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
//                     <span className="text-white font-medium">Study Session</span>
//                   </div>
//                   <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
//                     <div className="w-3/4 h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
//                   </div>
//                 </div>

//                 <div className="absolute bottom-6 right-6 w-56 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 shadow-xl transform rotate-6 hover:rotate-2 transition-transform duration-500">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
//                     <span className="text-white font-medium">Project Work</span>
//                   </div>
//                   <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
//                     <div className="w-2/3 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
//                   </div>
//                 </div>

//                 {/* Progress Ring */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
//                   <svg className="w-full h-full" viewBox="0 0 100 100">
//                     <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" strokeWidth="6" />
//                     <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient-ring)" strokeWidth="6" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="70" transform="rotate(-90 50 50)" />
//                     <defs>
//                       <linearGradient id="gradient-ring" x1="0%" y1="0%" x2="100%" y2="100%">
//                         <stop offset="0%" stopColor="#6366f1" />
//                         <stop offset="100%" stopColor="#8b5cf6" />
//                       </linearGradient>
//                     </defs>
//                   </svg>
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//                     <span className="text-2xl font-bold text-white">75%</span>
//                     <div className="text-xs text-gray-400">Progress</div>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* Stats Badge */}
//             <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-xl px-6 py-3 shadow-lg flex items-center gap-6">
//               <div className="text-center">
//                 <div className="text-lg font-bold text-white">24</div>
//                 <div className="text-xs text-gray-400">Tasks</div>
//               </div>
//               <div className="h-8 w-px bg-gray-800"></div>
//               <div className="text-center">
//                 <div className="text-lg font-bold text-white">18</div>
//                 <div className="text-xs text-gray-400">Completed</div>
//               </div>
//               <div className="h-8 w-px bg-gray-800"></div>
//               <div className="text-center">
//                 <div className="text-lg font-bold text-white">92%</div>
//                 <div className="text-xs text-gray-400">Focus</div>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




"use client";

import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="w-full bg-black overflow-hidden">
      {/* Outer container with max height for large screens */}
      <div className="w-full lg:max-h-[800px] xl:max-h-[900px] 2xl:max-h-[1000px]">
        
        {/* Hero content with min-height for mobile, constrained height for desktop */}
        <div className="relative min-h-screen lg:min-h-0 lg:h-[800px] xl:h-[900px] 2xl:h-[1000px] pt-20 flex items-center justify-center">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
              style={{ 
                backgroundImage: 'url(/images/planly-background.webp)',
                filter: 'brightness(0.4) blur(2px)',
              }} 
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Nebula Effects */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl w-full px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Text Content */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white font-montserrat">Plan Your Day,</span>
                  <span className="block mt-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Master Your Goals
                  </span>
                </h1>

                <p className="text-xl text-gray-400 leading-relaxed">
                  Transform chaos into clarity with intelligent scheduling that adapts to your 
                  academic rhythm. Our planner doesn't just organize, it motivates you to follow through.
                </p>

                <button className="group mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl duration-300 flex items-center gap-3">
                  Start Planning Free
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Right: Professional Visual Section */}
              <div className="relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/3 to-pink-500/5 rounded-3xl blur-3xl" />
                  
                  <div className="relative">
                    
                    {/* Central Calendar Element */}
                    <div className="relative mx-auto w-64 h-64 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                      <div className="absolute inset-4">
                        <div className="grid grid-cols-7 gap-1">
                          {Array.from({ length: 7 }).map((_, i) => (
                            <div key={i} className="h-4 bg-gray-800 rounded"></div>
                          ))}
                          {Array.from({ length: 35 }).map((_, i) => (
                            <div key={i} className={`h-8 rounded ${i === 15 ? 'bg-gradient-to-br from-indigo-500 to-purple-500' : 'bg-gray-900'}`}></div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-2xl">15</span>
                      </div>
                    </div>

                    {/* Floating Task Cards */}
                    <div className="absolute -top-6 left-6 w-56 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 shadow-xl transform -rotate-6 hover:-rotate-2 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                        <span className="text-white font-medium">Study Session</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-6 w-56 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 shadow-xl transform rotate-6 hover:rotate-2 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                        <span className="text-white font-medium">Project Work</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Progress Ring */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" strokeWidth="6" />
                        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient-ring)" strokeWidth="6" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="70" transform="rotate(-90 50 50)" />
                        <defs>
                          <linearGradient id="gradient-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-2xl font-bold text-white">75%</span>
                        <div className="text-xs text-gray-400">Progress</div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-xl px-6 py-3 shadow-lg flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">24</div>
                    <div className="text-xs text-gray-400">Tasks</div>
                  </div>
                  <div className="h-8 w-px bg-gray-800"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">18</div>
                    <div className="text-xs text-gray-400">Completed</div>
                  </div>
                  <div className="h-8 w-px bg-gray-800"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">92%</div>
                    <div className="text-xs text-gray-400">Focus</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;