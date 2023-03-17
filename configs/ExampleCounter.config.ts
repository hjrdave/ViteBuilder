import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    outDir: 'bundles/ExampleCounter',
    minify: true,
    lib: {
      entry: './src/widgets/ExampleCounter',
      name: 'SCWidget',
      fileName: 'scwidget.examplecounter.bundle',
      formats: ['iife']
    },
    rollupOptions: {
      external: [ 'react', 'react-dom'],
      output: {
          globals: {
              'react': 'React',
              'react-dom': 'ReactDOM'
          },
          manualChunks: undefined
      }
  }
  }

})