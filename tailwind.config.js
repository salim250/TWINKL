/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F4ED8',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          light: '#EDE9FE',
        },
        text: {
          dark: '#1F2937',
          muted: '#6B7280',
        },
        background: {
          light: '#F9FAFB',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        heading: '-0.02em',
      },
      lineHeight: {
        relaxed: '1.8',
      },
      maxWidth: {
        content: '1320px',
      },
    },
  },
  plugins: [],
};
