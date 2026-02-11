// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class",
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx}", // If using src directory
//   ],
//   theme: {
//    extend: {
//       fontFamily: {
//         sans: ['Inter', 'system-ui', 'sans-serif'],
//         heading: ['Poppins', 'system-ui', 'sans-serif'],
//         display: ['Montserrat', 'system-ui', 'sans-serif'],
//         body: ['Open Sans', 'system-ui', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }



// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use the fonts you actually imported
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
        oswald: ['Oswald', 'system-ui', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive', 'system-ui'],
        
        // Or set them as defaults:
        sans: ['Montserrat', 'system-ui', 'sans-serif'], // Make Montserrat default
        heading: ['Oswald', 'system-ui', 'sans-serif'],  // Use Oswald for headings
        cursive: ['Satisfy', 'cursive', 'system-ui'],    // Use Satisfy for decorative text
      },
    },
  },
  plugins: [],
}