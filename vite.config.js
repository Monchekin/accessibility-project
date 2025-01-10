import { defineConfig } from 'vite';

export default defineConfig({
  base: '/accessibility-project/', 
  build: {
    
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/main.948b6c14.js', 
        chunkFileNames: 'static/js/main.948b6c14.js', 
        assetFileNames: 'static/assets/main.948b6c14.js.LICENSE.txt', 
        sourcemapFileNames: 'static/js/main.948b6c14.js.map', 
      },
    },
    minify: true, 
  },
});
