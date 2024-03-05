import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { headwayclanPlugin } from "./plugin";

export const anishPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [animatePlugin, headwayclanPlugin],
} satisfies Config;
