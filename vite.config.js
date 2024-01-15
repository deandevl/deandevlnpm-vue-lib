import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name:'vue-lib',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      //   into the library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        //   for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
