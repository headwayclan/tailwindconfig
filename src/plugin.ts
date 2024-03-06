import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export const headwayPlugin = plugin(
  // Add CSS varible def
  function ({ addBase }) {
    addBase({
      ":root": {
        colorScheme: "light",
        "--background": "0 0% 100%",
        "--foreground": "222.2 47.4% 11.2%",
        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "222.2 47.4% 11.2%",
        "--border": "214.3 31.8% 91.4%",
        "--input": "214.3 31.8% 91.4%",
        "--card": "0 0% 100%",
        "--card-foreground": "222.2 47.4% 11.2%",
        "--primary": "20.5 90.2% 48.2%",
        "--primary-foreground": "210 40% 98%",
        "--secondary": "210 40% 96.1%",
        "--secondary-foreground": "222.2 47.4% 11.2%",
        "--accent": "210 40% 96.1%",
        "--accent-foreground": "222.2 47.4% 11.2%",
        "--destructive": "0 100% 50%",
        "--destructive-foreground": "210 40% 98%",
        "--ring": "215 20.2% 65.1%",
        "--radius": "0.5rem",
      },
      ".dark": {
        colorScheme: "dark",
        "--background": "224 71% 4%",
        "--foreground": "213 31% 91%",
        "--muted": "223 47% 11%",
        "--muted-foreground": "215.4 16.3% 56.9%",
        "--popover": "224 71% 4%",
        "--popover-foreground": "215 20.2% 65.1%",
        "--card": "224 71% 4%",
        "--card-foreground": "213 31% 91%",
        "--border": "216 34% 17%",
        "--input": "216 34% 17%",
        "--primary": "210 40% 98%",
        "--primary-foreground": "222.2 47.4% 1.2%",
        "--secondary": "222.2 47.4% 11.2%",
        "--secondary-foreground": "210 40% 98%",
        "--accent": "216 34% 17%",
        "--accent-foreground": "210 40% 98%",
        "--destructive": "0 63% 31%",
        "--destructive-foreground": "210 40% 98%",
        "--ring": "216 34% 17%",
        "--radius": "0.5rem",
      },
    });

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',
      },
    });
  },
  {
    theme: {
      spacing: {
        "3xs": "clamp(0.31rem, 0.31rem + 0.00vw, 0.31rem)",
        "2xs": "clamp(0.56rem, 0.54rem + 0.11vw, 0.63rem)",
        xs: "clamp(0.88rem, 0.85rem + 0.11vw, 0.94rem)",
        sm: "clamp(1.13rem, 1.08rem + 0.22vw, 1.25rem)",
        md: "clamp(1.69rem, 1.62rem + 0.33vw, 1.88rem)",
        lg: "clamp(2.25rem, 2.16rem + 0.43vw, 2.50rem)",
        xl: "clamp(3.38rem, 3.24rem + 0.65vw, 3.75rem)",
        "2xl": "clamp(4.50rem, 4.33rem + 0.87vw, 5.00rem)",
        "3xl": "clamp(6.75rem, 6.49rem + 1.30vw, 7.50rem)",
      },
      fontSize: {
        xs: "clamp(0.78rem, 0.77rem + 0.03vw, 0.80rem)",
        sm: "clamp(0.94rem, 0.92rem + 0.11vw, 1.00rem)",
        base: "clamp(1.13rem, 1.08rem + 0.22vw, 1.25rem)",
        lg: "clamp(1.35rem, 1.28rem + 0.37vw, 1.56rem)",
        xl: "clamp(1.62rem, 1.50rem + 0.58vw, 1.95rem)",
        "2xl": "clamp(1.94rem, 1.77rem + 0.87vw, 2.44rem)",
        "3xl": "clamp(2.33rem, 2.08rem + 1.25vw, 3.05rem)",
        "4xl": "clamp(2.80rem, 2.45rem + 1.77vw, 3.82rem)",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        borderColor: {
          DEFAULT: "hsl(var(--border) / <alpha-value>)",
        },
        colors: {
          border: "hsl(var(--border) / <alpha-value>)",
          input: "hsl(var(--input) / <alpha-value>)",
          ring: "hsl(var(--ring) / <alpha-value>)",
          background: "hsl(var(--background) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)",
          primary: {
            DEFAULT: "hsl(var(--primary) / <alpha-value>)",
            foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
            foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
            foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "hsl(var(--muted) / <alpha-value>)",
            foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          },
          accent: {
            DEFAULT: "hsl(var(--accent) / <alpha-value>)",
            foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          },
          popover: {
            DEFAULT: "hsl(var(--popover) / <alpha-value>)",
            foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          },
          card: {
            DEFAULT: "hsl(var(--card) / <alpha-value>)",
            foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          },
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          cal: ["Inter", ...fontFamily.sans],
          sans: ["Inter", ...fontFamily.sans],
        },
        keyframes: {
          "fade-up": {
            "0%": {
              opacity: "0",
              transform: "translateY(10px)",
            },
            "80%": {
              opacity: "0.6",
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0px)",
            },
          },
          "fade-down": {
            "0%": {
              opacity: "0",
              transform: "translateY(-10px)",
            },
            "80%": {
              opacity: "0.6",
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0px)",
            },
          },
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "fade-up": "fade-up 0.5s",
          "fade-down": "fade-down 0.5s",
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  }
);
