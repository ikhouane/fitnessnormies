import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const filePath = fileURLToPath(import.meta.url);
const compat = new FlatCompat({ baseDirectory: path.dirname(filePath) });

const config = [
  ...compat.extends("next/core-web-vitals"),
  { ignores: [".next/**", "node_modules/**"] },
];

export default config;
