import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html', // Necessary for SPA routing on GitHub Pages
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/valeriaserna_portfolio1' : '', // Base path for GitHub Pages
    },
    appDir: '_app', // Ensure the default app directory is used
  },
};

export default config;
