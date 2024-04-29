import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4500ff",     
          "secondary": "#409c00",   
          "accent": "#00f682",
          "neutral": "#12282e",       
          "base-100": "#12283e",
          "info": "#00f3ff",         
          "success": "#00eaa7",                  
          "warning": "#ffa842",                 
          "error": "#d30019",
          body: {
            "background-color": "#e3e6e6"
          }
        },
      },
    ],
  },
};
export default config;
