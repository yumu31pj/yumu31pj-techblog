import { reactRouter } from "@react-router/dev/vite";
import dotenv from 'dotenv';
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

dotenv.config();

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      '@globals': path.resolve(__dirname, 'app/src/sass/globals/'),
      "~": path.resolve(__dirname, "app"),
    },
  },
});
