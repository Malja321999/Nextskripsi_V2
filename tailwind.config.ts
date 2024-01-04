import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        'voubaas' : '#4f46e5',
        'primary'  : '#3B81F6',
         'white'   : '#ffffff',
        
         text:{
          'DEFAULT' : '#1F2937',
          'light' : '#6C7281',
         },
         light: {
          'DEFAULT' : '#FAFBFC',
          'lighter' : '#F3F4F6',
         }
        },
    },
  },
  plugins: [],
}
export default config
