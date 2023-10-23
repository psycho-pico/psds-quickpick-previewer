import type {Config} from "tailwindcss"

const pegadaianColors = {
    "broccoli-90": "#001e1a",
    "broccoli-80": "#002e28",
    "broccoli-60": "#003d35",
    "broccoli-50": "#004d43",
    "broccoli-40": "#407972",
    "broccoli-20": "#99b7b3",
    "broccoli-10": "#e6edec",

    "lime-90": "#00441f",
    "lime-80": "#00662e",
    "lime-60": "#00883e",
    "lime-50": "#00ab4e",
    "lime-40": "#40bd63",
    "lime-20": "#99dcab",
    "lime-10": "#e6f6ea",

    "pear-90": "#2d4c1b",
    "pear-80": "#447228",
    "pear-60": "#5b9836",
    "pear-50": "#72bf44",
    "pear-40": "#95cf72",
    "pear-20": "#c6e5b4",
    "pear-10": "#f1f8ec",

    "kiwi-90": "#4c5613",
    "kiwi-80": "#72811c",
    "kiwi-60": "#98ac26",
    "kiwi-50": "#bfd730",
    "kiwi-40": "#cfe163",
    "kiwi-20": "#e5efac",
    "kiwi-10": "#f8fbea",

    "red-90": "#450c0d",
    "red-80": "#681214",
    "red-60": "#8b181b",
    "red-50": "#ae1e22",
    "red-40": "#d44c50",
    "red-20": "#e89fa1",
    "red-10": "#f9e7e8",

    "orange-90": "#59320f",
    "orange-80": "#864b16",
    "orange-60": "#b3641e",
    "orange-50": "#e07e26",
    "orange-40": "#e79e5c",
    "orange-20": "#f2cba8",
    "orange-10": "#fbf2e9",

    "yellow-90": "#664e1f",
    "yellow-80": "#99762f",
    "yellow-60": "#cc9d3f",
    "yellow-50": "#ffc54f",
    "yellow-40": "#ffd37b",
    "yellow-20": "#fff3a5",
    "yellow-10": "#fff9ed",

    "gold-90": "#56482b",
    "gold-80": "#816c41",
    "gold-60": "#ac9057",
    "gold-50": "#d8b56d",
    "gold-40": "#e1c791",
    "gold-20": "#efe1c4",
    "gold-10": "#fbf7f0",

    "turquoise-90": "#004436",
    "turquoise-80": "#006752",
    "turquoise-60": "#00896d",
    "turquoise-50": "#00ac89",
    "turquoise-40": "#40c0a6",
    "turquoise-20": "#99ddcf",
    "turquoise-10": "#e6f6f3",

    "blue-90": "#072c4a",
    "blue-80": "#0b4270",
    "blue-60": "#0f5895",
    "blue-50": "#1868ab",
    "blue-40": "#5297d1",
    "blue-20": "#a3c7e6",
    "blue-10": "#e8f1f9",

    "purple-90": "#371036",
    "purple-80": "#521852",
    "purple-60": "#6e206d",
    "purple-50": "#8a2889",
    "purple-40": "#a75da6",
    "purple-20": "#d0a9cf",
    "purple-10": "#f3e9f3",

    "black-80": "#252528",
    "black-60": "#58585b",
    "black-50": "#939597",
    "black-40": "#bbbdc0",
    "black-20": "#eeeeef",
    "black-10": "#f8f8f8"
};

const config: Config = {
    content: [
        "./src/app/**/*.{js,tsx}",
        "./src/components/**/*.{js,tsx}"
    ],
    theme: {
        screens: {
            "max-2xl": {"max": "1535px"},
            "max-xl": {"max": "1279px"},
            "max-lg": {"max": "1023px"},
            "max-md": {"max": "767px"},
            "max-sm": {"max": "639px"}
        },
        extend: {
            colors: {
                ...pegadaianColors,
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: 0},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: 0},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")]
}

export default config;