import tailwindTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

import { headwayPlugin } from "./plugin";

export const headwayPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [tailwindAnimate, headwayPlugin, tailwindTypography],
} satisfies Config;
