// @ts-check
import { defineConfig } from 'astro/config';

// Deployed as a user GitHub Pages site at https://jucgonzalezes.github.io
// (repo: jucgonzalezes/jucgonzalezes.github.io). User/org pages publish
// from the root, so no `base` path is needed.

export default defineConfig({
  site: 'https://jucgonzalezes.github.io',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
