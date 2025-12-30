import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
        },
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F9FAFB',
        },
        text: {
          primary: '#111827',
          secondary: '#6B7280',
        },
        border: '#E5E7EB',
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.1)',
        'card-hover': '0 10px 15px -3px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
