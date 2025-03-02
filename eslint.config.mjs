import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      ".next",          // Next.js build output directory
      ".cache",         // Cache files
      "package-lock.json", // Lock file for npm
      "public",         // Public directory
      "node_modules",   // Dependencies directory
      "next-env.d.ts",  // Next.js TypeScript environment declaration
      "next.config.ts", // Next.js configuration file
      "yarn.lock"       // Lock file for Yarn
    ],
  },
];

export default eslintConfig;
