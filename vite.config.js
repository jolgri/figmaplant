import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$green: #50806B;
                          $bggreen: #e8edde;
                          $lgreen: #5bc08A;
                          $black: #000;
                          $red: #d11f1f;
                          $textgrey: #7C8087;
                          $white: #fff;`
      }
    }
  }
})
