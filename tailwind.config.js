/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        button: "var(--color-bg-button)",
        buttonSecondary: "var(--color-bg-buttonSecondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        btnText: "var(--color-bg-secondary)",
        btn: "var(--color-text-btn)",
      },
      borderColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-bg-secondary)",
        input: "var(--color-bg-input)",
        accent: "var(--color-text-accent)",
      },
    },
  },
  plugins: [],
};
