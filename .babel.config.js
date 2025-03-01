module.exports = {
  presets: [
    "next/babel", // Use Next.js Babel preset
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // Enables the modern JSX transform
      },
    ],
  ],
};
