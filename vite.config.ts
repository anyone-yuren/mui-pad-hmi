import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mui-pad-hmi/",
  plugins: [react()],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
