import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html' // Ensures SPA routing works on GitHub Pages
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/valeriaserna_portfolio1' : '' // Base path for GitHub Pages
    },
    appDir: '_app', // Default, no need to change unless customizing
    prerender: {
      crawl: true, // Automatically prerender all linked pages
      entries: ['*'] // Prerender all routes
    }
  }
};

export default config;
