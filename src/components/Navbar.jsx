// "use client";

// import { useState, useEffect } from 'react';
// import { Menu, X, ChevronRight, Sparkles, Calendar, ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Pricing', href: '#pricing' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrolled(currentScrollY > 10);

//       // Active section detection
//       const sections = navItems.map(item => item.href.replace('#', ''));
//       const scrollPos = currentScrollY + 100;

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = document.getElementById(sections[i]);
//         if (section && scrollPos >= section.offsetTop) {
//           setActiveSection(sections[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80;
//       const elementPos = element.getBoundingClientRect().top;
//       const offsetPos = elementPos + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPos,
//         behavior: 'smooth'
//       });
//     }
//     setIsOpen(false);
//   };

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen]);

//   return (
//     <>
//       <nav 
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           scrolled 
//             ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' 
//             : 'bg-white py-4'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">
            
//             {/* Logo */}
//             <button 
//               onClick={() => scrollToSection('home')}
//               className="flex items-center gap-2.5 group"
//             >
//               <div className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/20 group-hover:shadow-purple-600/30 transition-shadow">
//                 <Calendar className="w-5 h-5 text-white" />
//               </div>
//               <Link href="/" className="flex flex-col">
//               <div className="flex flex-col">
//                 <span className="text-lg font-bold text-gray-900 tracking-tight">
//                   Planly
//                 </span>
//               </div>
//               </Link>
//             </button>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-1 bg-gray-100/50 rounded-full p-1">
//               {navItems.map((item) => {
//                 const sectionId = item.href.replace('#', '');
//                 const isActive = activeSection === sectionId;
                
//                 return (
//                   <button
//                     key={item.name}
//                     onClick={() => scrollToSection(sectionId)}
//                     className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
//                       isActive 
//                         ? 'text-purple-700 bg-white shadow-sm' 
//                         : 'text-gray-600 hover:text-gray-900'
//                     }`}
//                   >
//                     {item.name}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* CTA Buttons */}
//             <div className="hidden md:flex items-center gap-3">
//               <Link
//                 href="/login"
//                 className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
//               >
//                 Log in
//               </Link>
//               <Link
//                 href="/signup"
//                 className="group flex items-center gap-1.5 px-5 py-2.5 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition-all duration-200 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30"
//               >
//                 Get Started
//                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div 
//         className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
//           isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
//         }`}
//       >
//         {/* Backdrop */}
//         <div 
//           className="absolute inset-0 bg-gray-950/20 backdrop-blur-sm"
//           onClick={() => setIsOpen(false)}
//         />
        
//         {/* Menu Panel */}
//         <div className={`absolute top-0 right-0 h-full w-full max-w-xs bg-white shadow-2xl transform transition-transform duration-300 ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}>
//           <div className="flex flex-col h-full">
//             {/* Header */}
//             <div className="flex items-center justify-between p-4 border-b border-gray-100">
//               <div className="flex items-center gap-2.5">
//                 <div className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center">
//                   <Calendar className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-lg font-bold text-gray-900">Planly</span>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Navigation */}
//             <div className="flex-1 py-6 px-3">
//               <nav className="space-y-1">
//                 {navItems.map((item) => {
//                   const sectionId = item.href.replace('#', '');
//                   const isActive = activeSection === sectionId;
                  
//                   return (
//                     <button
//                       key={item.name}
//                       onClick={() => scrollToSection(sectionId)}
//                       className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-colors ${
//                         isActive 
//                           ? 'bg-purple-50 text-purple-700' 
//                           : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       <span className="font-medium">{item.name}</span>
//                       {isActive && <ChevronRight className="w-4 h-4" />}
//                     </button>
//                   );
//                 })}
//               </nav>

//               {/* Mobile CTAs */}
//               <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
//                 <Link
//                   href="/signup"
//                   onClick={() => setIsOpen(false)}
//                   className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors"
//                 >
//                   Get Started Free
//                 </Link>
//                 <Link
//                   href="/login"
//                   onClick={() => setIsOpen(false)}
//                   className="flex items-center justify-center w-full px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
//                 >
//                   Log in
//                 </Link>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="p-4 border-t border-gray-100">
//               <p className="text-center text-xs text-gray-400">
//                 © {new Date().getFullYear()} Planly
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const menuItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Pricing", section: "pricing" },
  ];

  // Handle scroll effects and active section
  useEffect(() => {
    let isScrolling = false;
    
    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          updateNavbarOnScroll();
          isScrolling = false;
        });
        isScrolling = true;
      }
    };

    const updateNavbarOnScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 10);

      // Find which section is currently in view
      const viewportCenter = scrollPosition + window.innerHeight / 3;

      for (const item of menuItems) {
        const element = document.getElementById(item.section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + scrollPosition;
          const absoluteBottom = bottom + scrollPosition;

          if (viewportCenter >= absoluteTop && viewportCenter <= absoluteBottom) {
            setCurrentSection(item.section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navigateToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          hasScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Click to go home */}
            <button
              onClick={() => navigateToSection("home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/20 group-hover:shadow-purple-600/30 transition-shadow">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900 tracking-tight">
                Planly
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-gray-100/50 rounded-full p-1">
              {menuItems.map((item) => {
                const isActive = currentSection === item.section;
                
                return (
                  <button
                    key={item.section}
                    onClick={() => navigateToSection(item.section)}
                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-purple-700 bg-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="group flex items-center gap-1.5 px-5 py-2.5 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition-all duration-200 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <aside
          className={`absolute top-0 right-0 h-full w-full max-w-xs bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Panel Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900">Planly</span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto py-6 px-3">
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = currentSection === item.section;
                  
                  return (
                    <button
                      key={item.section}
                      onClick={() => navigateToSection(item.section)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-colors ${
                        isActive
                          ? "bg-purple-50 text-purple-700"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4" />}
                    </button>
                  );
                })}
              </nav>

              {/* Mobile Action Buttons */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <Link
                  href="/signup"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-full px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Log in
                </Link>
              </div>
            </div>

            {/* Panel Footer */}
            <div className="p-4 border-t border-gray-100">
              <p className="text-center text-xs text-gray-400">
                © {new Date().getFullYear()} Planly. All rights reserved.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}