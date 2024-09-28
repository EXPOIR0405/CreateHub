import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        moveDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        'move-up': 'moveUp 2s ease-in-out infinite alternate',
        'move-down': 'moveDown 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
export default config;
