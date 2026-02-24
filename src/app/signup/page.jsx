// "use client";

// import { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock, User, ArrowRight, CheckCircle2, Sparkles, GraduationCap, BookOpen, Clock, Star } from 'lucide-react';
// import Link from 'next/link';

// export default function SignupPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     university: '',
//     agreeTerms: false
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [step, setStep] = useState(1);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setIsLoading(false);
//     setStep(2);
//   };

//   const features = [
//     { icon: BookOpen, text: "Unlimited subjects & tasks" },
//     { icon: Clock, text: "Smart deadline reminders" },
//     { icon: Star, text: "AI study recommendations" }
//   ];

//   return (
//     <div className="min-h-screen bg-white flex">
//       {/* Left Side - Form */}
//       <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-20 py-12">
//         <div className="w-full pt-20 max-w-md mx-auto">
//           {step === 1 ? (
//             <>
//               <div className="mb-8">
//                 <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
//                   Start your free trial
//                 </h1>
//                 <p className="text-gray-600">
//                   Join 5,000+ students already organizing their academic life with Planly.
//                 </p>
//               </div>

//               {/* Google Sign Up */}
//               <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors mb-6">
//                 <svg className="w-5 h-5" viewBox="0 0 24 24">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//                 Continue with Google
//               </button>

//               <div className="relative mb-6">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-200"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">Or continue with email</span>
//                 </div>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* Full Name */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                     Full Name
//                   </label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <input
//                       type="text"
//                       required
//                       value={formData.fullName}
//                       onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <input
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={(e) => setFormData({...formData, email: e.target.value})}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
//                       placeholder="you@university.edu"
//                     />
//                   </div>
//                 </div>

//                 {/* University */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                     University
//                   </label>
//                   <select
//                     value={formData.university}
//                     onChange={(e) => setFormData({...formData, university: e.target.value})}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-white"
//                   >
//                     <option value="">Select your university</option>
//                     <option value="unilag">University of Lagos</option>
//                     <option value="ui">University of Ibadan</option>
//                     <option value="oau">Obafemi Awolowo University</option>
//                     <option value="unizik">Nnamdi Azikiwe University</option>
//                     <option value="abu">Ahmadu Bello University</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       required
//                       value={formData.password}
//                       onChange={(e) => setFormData({...formData, password: e.target.value})}
//                       className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
//                       placeholder="••••••••"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                       {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                     </button>
//                   </div>
//                   <p className="mt-1.5 text-xs text-gray-500">
//                     Must be at least 8 characters with a number and symbol
//                   </p>
//                 </div>

//                 {/* Terms */}
//                 <div className="flex items-start gap-3">
//                   <input
//                     type="checkbox"
//                     id="terms"
//                     required
//                     checked={formData.agreeTerms}
//                     onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
//                     className="mt-1 w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
//                   />
//                   <label htmlFor="terms" className="text-sm text-gray-600">
//                     I agree to the{' '}
//                     <Link href="/terms" className="text-purple-600 hover:text-purple-700 font-medium">
//                       Terms of Service
//                     </Link>{' '}
//                     and{' '}
//                     <Link href="/privacy" className="text-purple-600 hover:text-purple-700 font-medium">
//                       Privacy Policy
//                     </Link>
//                   </label>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full flex items-center justify-center gap-2 py-3.5 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-purple-200"
//                 >
//                   {isLoading ? (
//                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                   ) : (
//                     <>
//                       Create Free Account
//                       <ArrowRight className="w-5 h-5" />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="mt-6 text-center text-sm text-gray-600">
//                 Already have an account?{' '}
//                 <Link href="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
//                   Log in
//                 </Link>
//               </p>
//             </>
//           ) : (
//             /* Success State */
//             <div className="text-center py-12">
//               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <CheckCircle2 className="w-10 h-10 text-green-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-3">
//                 Welcome to Planly, {formData.fullName.split(' ')[0]}!
//               </h2>
//               <p className="text-gray-600 mb-8">
//                 Check your email to verify your account and get started with your free trial.
//               </p>
//               <Link
//                 href="/dashboard"
//                 className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors"
//               >
//                 Go to Dashboard
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Right Side - Image (Desktop Only) */}
//       <div className="hidden lg:block lg:w-1/2 relative bg-gray-50">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
//             alt="Professional student working productively on laptop in modern workspace"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent" />
//         </div>

//         {/* Content Overlay */}
//         <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
//           <div className="max-w-md">
//             <div className="flex items-center gap-2 mb-4">
//               <Sparkles className="w-5 h-5 text-purple-300" />
//               <span className="text-sm font-medium text-purple-200">Why students love Planly</span>
//             </div>
//             <blockquote className="text-2xl font-medium mb-6 leading-relaxed">
//               "Planly transformed how I manage my studies. I've never felt more organized and in control."
//             </blockquote>
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
//                 SC
//               </div>
//               <div>
//                 <p className="font-semibold">Sarah Chen</p>
//                 <p className="text-sm text-purple-200">Computer Science, Stanford</p>
//               </div>
//             </div>

//             {/* Feature Pills */}
//             <div className="flex flex-wrap gap-3 mt-8">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
//                   <feature.icon className="w-4 h-4 text-purple-300" />
//                   <span className="text-sm font-medium">{feature.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Stats Bar */}
//         <div className="absolute top-8 right-8 flex gap-6">
//           <div className="text-center px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
//             <p className="text-2xl font-bold">50K+</p>
//             <p className="text-xs text-purple-200">Students</p>
//           </div>
//           <div className="text-center px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
//             <p className="text-2xl font-bold">4.9</p>
//             <p className="text-xs text-purple-200">Rating</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, CheckCircle2, Sparkles, GraduationCap, BookOpen, Clock, Star, Building, School, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    university: '',
    agreeTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep(2);
  };

  const features = [
    { icon: BookOpen, text: "Unlimited subjects & tasks" },
    { icon: Clock, text: "Smart deadline reminders" },
    { icon: Star, text: "AI study recommendations" }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-20 py-12">
        <div className="w-full pt-20 max-w-md mx-auto">
          {step === 1 ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-white/90 mb-3">
                  Start your free trial
                </h1>
                <p className="text-white/60">
                  Join 5,000+ students already organizing their academic life with Planly.
                </p>
              </div>

              {/* Google Sign Up - Dark theme */}
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-white/10 bg-white/5 rounded-xl text-white/80 font-medium hover:bg-white/10 hover:border-white/20 transition-colors mb-6 backdrop-blur-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#0A0A0F] text-white/40">Or continue with email</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all text-white/90 placeholder-white/30"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all text-white/90 placeholder-white/30"
                      placeholder="you@university.edu"
                    />
                  </div>
                </div>

                {/* University */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">
                    University
                  </label>
                  <div className="relative">
                    <School className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <select
                      value={formData.university}
                      onChange={(e) => setFormData({...formData, university: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all text-white/90 appearance-none"
                    >
                      <option value="" className="bg-[#1A1A23]">Select your university</option>
                      <option value="unilag" className="bg-[#1A1A23]">University of Lagos</option>
                      <option value="ui" className="bg-[#1A1A23]">University of Ibadan</option>
                      <option value="oau" className="bg-[#1A1A23]">Obafemi Awolowo University</option>
                      <option value="unizik" className="bg-[#1A1A23]">Nnamdi Azikiwe University</option>
                      <option value="abu" className="bg-[#1A1A23]">Ahmadu Bello University</option>
                      <option value="other" className="bg-[#1A1A23]">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 pointer-events-none" />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all text-white/90 placeholder-white/30"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="mt-1.5 text-xs text-white/40">
                    Must be at least 8 characters with a number and symbol
                  </p>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/50 focus:ring-offset-0"
                  />
                  <label htmlFor="terms" className="text-sm text-white/60">
                    I agree to the{' '}
                    <Link href="/terms" className="text-purple-400 hover:text-purple-300 font-medium">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-purple-400 hover:text-purple-300 font-medium">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Create Free Account
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-white/50">
                Already have an account?{' '}
                <Link href="/login" className="text-purple-400 hover:text-purple-300 font-semibold">
                  Log in
                </Link>
              </p>
            </>
          ) : (
            /* Success State - Dark theme */
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white/90 mb-3">
                Welcome to Planly, {formData.fullName.split(' ')[0]}!
              </h2>
              <p className="text-white/60 mb-8">
                Check your email to verify your account and get started with your free trial.
              </p>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-colors shadow-lg shadow-purple-500/25"
              >
                Go to Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Image (Desktop Only) - Dark theme overlay */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#0A0A0F]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
            alt="Professional student working productively on laptop in modern workspace"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent" />
          
          {/* Purple accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-indigo-900/30" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Why students love Planly</span>
            </div>
            <blockquote className="text-2xl font-medium mb-6 leading-relaxed text-white/90">
              "Planly transformed how I manage my studies. I've never felt more organized and in control."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-lg font-bold shadow-lg shadow-purple-500/25">
                SC
              </div>
              <div>
                <p className="font-semibold text-white/90">Sarah Chen</p>
                <p className="text-sm text-purple-300">Computer Science, Stanford</p>
              </div>
            </div>

            {/* Feature Pills - Dark theme */}
            <div className="flex flex-wrap gap-3 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                  <feature.icon className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-white/80">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar - Dark theme */}
        <div className="absolute top-8 right-8 flex gap-6">
          <div className="text-center px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-2xl font-bold text-white/90">50K+</p>
            <p className="text-xs text-purple-300">Students</p>
          </div>
          <div className="text-center px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-2xl font-bold text-white/90">4.9</p>
            <p className="text-xs text-purple-300">Rating</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}