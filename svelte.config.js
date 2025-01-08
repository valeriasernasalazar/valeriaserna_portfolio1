import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess'; // Corrected named import

const config = {
    preprocess: sveltePreprocess(), // Use svelte-preprocess as a named import
    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/valeriaserna_portfolio1' : '',
        },
    },
};

export default config;
