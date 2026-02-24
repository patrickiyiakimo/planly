// "use client";

// import { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock, ArrowRight, CheckCircle2, GraduationCap } from 'lucide-react';
// import Link from 'next/link';

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setIsLoading(false);
//     setIsSuccess(true);
//   };

//   if (isSuccess) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center px-4">
//         <div className="text-center">
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
//             <CheckCircle2 className="w-10 h-10 text-green-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back!</h2>
//           <p className="text-gray-600 mb-8">Redirecting to your dashboard...</p>
//           <div className="w-48 h-1 bg-gray-100 rounded-full mx-auto overflow-hidden">
//             <div className="h-full bg-purple-600 rounded-full animate-[loading_1s_ease-in-out_infinite]" 
//                  style={{ width: '60%', animation: 'loading 2s ease-in-out infinite' }} />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       {/* Subtle background pattern */}
//       <div className="fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
      
//       {/* Top decoration */}
//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600" />

//       <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-12 relative">
//        {/* Main Card */}
//         <div className="w-full max-w-md">
//           <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10">
            
//             <div className="text-center mb-8">
//               <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//                 Welcome back
//               </h1>
//               <p className="text-gray-600">
//                 Sign in to continue your academic journey
//               </p>
//             </div>

//             {/* Social Login */}
//             <div className="space-y-3 mb-6">
//               <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all">
//                 <svg className="w-5 h-5" viewBox="0 0 24 24">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//                 Continue with Google
//               </button>
//             </div>

//             <div className="relative mb-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-200"></div>
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="px-2 bg-white text-gray-500 font-medium">Or continue with email</span>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Email Address
//                 </label>
//                 <div className="relative group">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
//                   <input
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all bg-gray-50/50 focus:bg-white"
//                     placeholder="you@university.edu"
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <div className="flex items-center justify-between mb-1.5">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Password
//                   </label>
//                   <Link href="/forgot-password" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
//                     Forgot password?
//                   </Link>
//                 </div>
//                 <div className="relative group">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     required
//                     value={formData.password}
//                     onChange={(e) => setFormData({...formData, password: e.target.value})}
//                     className="w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all bg-gray-50/50 focus:bg-white"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                   >
//                     {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember Me */}
//               <div className="flex items-center justify-between">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={formData.rememberMe}
//                     onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
//                     className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500/20"
//                   />
//                   <span className="text-sm text-gray-600">Remember me for 30 days</span>
//                 </label>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full flex items-center justify-center gap-2 py-2.5 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:-translate-y-0.5"
//               >
//                 {isLoading ? (
//                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                 ) : (
//                   <>
//                     Sign In
//                     <ArrowRight className="w-5 h-5" />
//                   </>
//                 )}
//               </button>
//             </form>

//             <p className="mt-6 text-center text-sm text-gray-600">
//               Don't have an account?{' '}
//               <Link href="/signup" className="text-purple-600 hover:text-purple-700 font-semibold">
//                 Create one free
//               </Link>
//             </p>
//           </div>

//           {/* Security Badge */}
//           <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//             </svg>
//             <span>Secured with 256-bit encryption</span>
//           </div>
//         </div>

//         {/* Footer Links */}
//         <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
//           <Link href="/help" className="hover:text-gray-700 transition-colors">Help Center</Link>
//           <span className="w-1 h-1 bg-gray-300 rounded-full" />
//           <Link href="/privacy" className="hover:text-gray-700 transition-colors">Privacy</Link>
//           <span className="w-1 h-1 bg-gray-300 rounded-full" />
//           <Link href="/terms" className="hover:text-gray-700 transition-colors">Terms</Link>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes loading {
//           0% { transform: translateX(-100%); }
//           50% { transform: translateX(0%); }
//           100% { transform: translateX(100%); }
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-4">
        {/* Background elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white/90 mb-2">Welcome back!</h2>
          <p className="text-white/60 mb-8">Redirecting to your dashboard...</p>
          <div className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-[loading_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-10 bg-[#0A0A0F] flex flex-col">
      {/* Background elements */}
      <div className="fixed inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      {/* Top decoration - Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500" />

      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-12 relative z-10">
        {/* Main Card */}
        <div className="w-full max-w-md">
          <div className="bg-[#1A1A23] rounded-2xl shadow-xl shadow-purple-500/5 border border-white/5 p-8 sm:p-10 backdrop-blur-sm">
            
            {/* <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 mb-4 shadow-lg shadow-purple-500/25">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white/90 mb-2">
                Welcome back
              </h1>
              <p className="text-white/50">
                Sign in to continue your academic journey
              </p>
            </div> */}

            {/* Social Login - Dark theme */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/80 font-medium hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="px-2 bg-[#1A1A23] text-white/40 font-medium">Or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1.5">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all text-white/90 placeholder-white/30"
                    placeholder="you@university.edu"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-white/70">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300 font-medium">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full pl-10 pr-12 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all text-white/90 placeholder-white/30"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/50 focus:ring-offset-0"
                  />
                  <span className="text-sm text-white/60">Remember me for 30 days</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-white/50">
              Don't have an account?{' '}
              <Link href="/signup" className="text-purple-400 hover:text-purple-300 font-semibold">
                Create one free
              </Link>
            </p>
          </div>

          {/* Security Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Secured with 256-bit encryption</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 flex items-center gap-6 text-sm text-white/40">
          <Link href="/help" className="hover:text-white/60 transition-colors">Help Center</Link>
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}