import type { Config } from 'tailwindcss';
import daisyui from 'daisyui'; // Import daisyui package
import forms from '@tailwindcss/forms'; // Import forms package
import plugin from 'tailwindcss/plugin';


const config: Config = {
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    daisyui, // Use daisyui plugin
    forms, // Use forms plugin
    plugin(function({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)')
    })
  ],
  daisyui: {
    themes: [
      {
        pibutheme: {
          "primary": "#F1F1F1",
          "primary-content": "#FFFFFF",
          "secondary": "#74B9F8",
          "secondary-content": "#FFFFFF",
          "accent": "#1F63A2",
          "neutral": "#A1A1A1",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
export default config
