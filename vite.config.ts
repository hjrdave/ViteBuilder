import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    minify: true,
    lib: {
      entry: './src/widgets/ExampleCounter',
      name: 'SCWidget',
      fileName: 'scwidget.bundle',
    },
    rollupOptions: {
      external: [ 'react', 'react-dom', "react/jsx-runtime"],
      output: {
        format: 'umd',
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        },
        manualChunks: undefined,
      }
    }
  }
})