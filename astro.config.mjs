// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Deployed as a user GitHub Pages site at https://jucgonzalezes.github.io
// (repo: jucgonzalezes/jucgonzalezes.github.io). User/org pages publish
// from the root, so no `base` path is needed.

export default defineConfig({
  site: 'https://jucgonzalezes.github.io',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  markdown: {
    // Math: $inline$ and $$display$$ in markdown become KaTeX-rendered
    // spans/blocks at build time. KaTeX CSS is loaded in BaseLayout.astro.
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    // Shiki: dual themes tuned for editorial restraint. min-light /
    // min-dark are Sublime's "Minimal" themes — they use 3-4 muted hues
    // total, so syntactic structure is visible (comments, keywords,
    // strings, numbers) without terminal-bright colors. defaultColor: false
    // means Shiki emits only CSS custom properties (--shiki-light /
    // --shiki-dark) per token, no inline color/background. global.css
    // wires the variables to the active theme via [data-theme="dark"],
    // avoiding the !important wars an inline-styled theme would force.
    shikiConfig: {
      themes: {
        light: 'min-light',
        dark: 'min-dark',
      },
      defaultColor: false,
      wrap: true,
    },
  },
});
