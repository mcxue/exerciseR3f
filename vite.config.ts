import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', '@react-three/fiber'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          '@react-three/fiber': '@react-three/fiber',
        },
      },
    },
  },
  assetsInclude: ['**/*.glb', '**/*.hdr'],
});
