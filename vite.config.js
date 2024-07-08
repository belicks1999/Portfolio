// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

// Define environment variables explicitly if needed
const { parsed: env } = dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': env, // Define environment variables for frontend
  },
});
