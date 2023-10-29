import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      define: {
        _global: {},
        global: {},
      },
      root: 'src',
      build: {
        rollupOptions: {
          input: glob.sync('./src/*.html'),
        },
        outDir: '../dist',
      },
      plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
    };
  } else {
    return {
      root: 'src',
      build: {
        rollupOptions: {
          input: glob.sync('./src/*.html'),
        },
        outDir: '../dist',
      },
      plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
    };
  }
});

// export default defineConfig(({ command, mode }) => {
//   if (command === 'serve') {
//     return {
//       // serve specific config
//     }
//   } else {
//     return {
//       // build specific config
//     }
//   }
// })
