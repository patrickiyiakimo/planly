"use client";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 relative flex items-center justify-center bg-black overflow-hidden">
      
      {/* Background Cosmic Effect */}
      <div className="absolute inset-0">
        {/* Star Field */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Geometric Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4f46e5 1px, transparent 1px),
              linear-gradient(to bottom, #4f46e5 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Nebula Effect */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white font-montserrat">Plan Your Day,</span>
              <span className="block mt-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Master Your Goals
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-400 leading-relaxed">
              Transform chaos into clarity with intelligent scheduling that adapts to your 
              academic rhythm. Our planner doesn't just organize, it motivates you to follow through.
            </p>

            {/* CTA Button */}
            <button className="group mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              Start Planning Free
              <div className="group-hover:translate-x-2 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>

          {/* Right: Professional Visual Section */}
          <div className="relative">
            {/* Main Container */}
            <div className="relative">
              {/* Glowing Background Orb */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/3 to-pink-500/5 rounded-3xl blur-3xl" />
              
              {/* Floating Visual Elements */}
              <div className="relative">
                
                {/* Central Calendar Element */}
                <div className="relative mx-auto w-64 h-64 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  {/* Calendar Grid */}
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
                  
                  {/* Highlighted Date */}
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

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <path d="M30,80 Q50,50 80,30" stroke="url(#line-gradient)" strokeWidth="1" fill="none" strokeDasharray="4,4" />
                <path d="M120,120 Q150,150 180,120" stroke="url(#line-gradient)" strokeWidth="1" fill="none" strokeDasharray="4,4" />
              </svg>
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

      {/* Animated Connection Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-10">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <path
            d="M20,200 Q400,100 600,300"
            stroke="url(#gradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="10,5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;