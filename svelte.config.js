import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // This enables SPA mode for dynamic routes
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/valeriasernasalazar/valeriaserna_portfolio1' : '',
    },
  },
};

export default config;
