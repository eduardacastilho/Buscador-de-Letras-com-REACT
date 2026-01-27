import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/lyrics": {
        target: "https://api.lyrics.ovh",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lyrics/, "")
      }
    }
  }
})
