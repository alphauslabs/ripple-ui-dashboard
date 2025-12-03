import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginSingleSpa from "vite-plugin-single-spa";
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: 4201,
      spaEntryPoints: ['src/spa.tsx'],
      cssStrategy: 'none',
    }),
  ],
  resolve: {
    alias: {
      '@project-ed/lib/ui': path.resolve(
        __dirname,
        './lib/ui/src/index.ts'
      ),
      '@project-ed/lib/shared-i18n': path.resolve(
        __dirname,
        './lib/shared-i18n/src/index.ts'
      ),
      '@project-ed/lib/icons': path.resolve(
        __dirname,
        './lib/icons/src/index.ts'
      ),
      '@project-ed/lib/constants': path.resolve(
        __dirname,
        './lib/constants/src/index.ts'
      ),
      '@stores': path.resolve(__dirname, './src/app/stores'),
      '@project-ed/lib/http-service': path.resolve(
        __dirname,
        './lib/http-service/src/index.ts'
      ),
      '@project-ed/lib/utils': path.resolve(
        __dirname,
        './lib/utils/src/index.ts'
      ),
    },
  },
  server: {
    hmr: false,
  },
});
