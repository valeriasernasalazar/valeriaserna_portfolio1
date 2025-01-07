import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html', 
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : '/valeriaserna_portfolio1'
    },
  },
};

export default config;
