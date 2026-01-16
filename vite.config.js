import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/nwd-clothing/", // 👈 මේ පේළිය අනිවාර්යයෙන්ම එකතු කරන්න (Repo එකේ නම)
})