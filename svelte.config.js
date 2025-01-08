import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      // Set the base path for GitHub Pages
      base: process.env.NODE_ENV === 'production' ? '/valeriaserna_portfolio1' : '', // base path for GitHub Pages
    },
  },
};

export default config;
