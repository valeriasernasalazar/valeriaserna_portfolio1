import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/valeriaserna_portfolio1' : '', // Base path for GitHub Pages
    },
  },
};

export default config;
