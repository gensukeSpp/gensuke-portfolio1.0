import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import reactRefresh from '@vitejs/plugin-react-refresh';
import viteReactJsx from 'vite-react-jsx';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
// import VitePluginLinaria from 'vite-plugin-linaria';

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/xue.hr3a-portfolio/",
  base: process.env.GITHUB_PAGES  // この行を追加
     ? "/xue.hr3a-portfolio/"            // この行を追加
     : "./",                     // この行を追加
  // base: "/",
  plugins: [vanillaExtractPlugin(), reactRefresh(), viteReactJsx(), tsconfigPaths()],
  // NOTE: vanillaExtractPlugin is placed after reactRefresh and before the others.
  build: {
    chunkSizeWarningLimit: 100000000
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['.', '/src'],
    },
  },
});
