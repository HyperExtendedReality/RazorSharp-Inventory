import type { Config } from 'tailwindcss'

const config: Config = {
  mode:'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75',
        '200': '2.0',
        '250': '2.5',
      },
      height: {
        '5vh': '5vh',
      },
      width: {
        '1/16': '6.25%',
      },
      fontFamily: {
        squares: ["Squares", "sans"],
      },
      fontSize: {
        'osfa': '1.75vh',
      }
    },
    
  },
  plugins: [],
}
export default config
