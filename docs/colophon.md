# Colophon

This website is designed as a computational editorial system.

It combines principles from scientific publishing, Swiss modernist design, computational visualization, and long-form technical writing in order to create a cohesive environment for research, experimentation, and communication.

The site is intentionally transparent in both construction and philosophy.

## Editorial Philosophy

The design prioritizes:

- readability over novelty
- hierarchy over decoration
- structure over visual noise
- and sustained attention over rapid consumption

Every visual element is expected to contribute either:

- informational clarity,
- compositional balance,
- or conceptual meaning.

The interface attempts to disappear into the act of reading and exploration.

## Typography

Typography forms the primary structural language of the site.

The system is set in three families, each carrying a distinct editorial voice:

- **Inter**: sans-serif for interface, navigation, headings, and structural hierarchy
- **Source Serif 4**: serif for extended reading, essay bodies, and reflective writing
- **IBM Plex Mono**: monospace for code, annotations, references, coordinates, figure labels, eyebrows, and the colophon register

Typography is treated not as branding, but as architecture.

Scale, spacing, alignment, and rhythm are used to establish editorial hierarchy and navigational flow.

## Layout & Grid System

The layout is based on explicit modular grids inspired by editorial and Swiss modernist systems.

The grid remains partially visible throughout the site as part of the visual language.

Spacing and alignment are treated as compositional tools rather than invisible implementation details.

The site intentionally favors:

- asymmetrical balance
- structural whitespace
- modular composition
- and strong typographic anchoring

over decorative interface patterns.

The gridded pages compose on a decentered three-panel structure: an unequal asymmetric grid with the body column anchored to the left and a deliberately wider right field reserved for marginalia, figures, and side annotations. The asymmetry is structural, not stylistic. It is what gives long-form reading room to be quiet on the left while the figures and apparatus speak on the right. Pages can optionally make the grid visible as an article frame (vertical pillars at the panel boundaries, horizontal rules at full viewport width on the page-header and at each section). The visible frame is reserved for compositions where the apparatus earns its presence; ordinary content pages run with the grid silent.

A full account of the grid, the bleed paradigms, the figure apparatus, and the structured colophon system lives in `docs/design-system.md`.

## Color System

The visual palette is intentionally restrained.

The interface primarily relies on:

- warm paper-like neutrals
- dark ink-like typography
- and a limited range of accent tones inspired by scientific publishing and editorial print systems

Accent colors are used sparingly and structurally:
to emphasize relationships, guide attention, and support visual hierarchy.

## Build

The site is built with Astro and TypeScript.

Content is authored in Markdown, with MDX reserved for pages that embed components directly.

Styling uses vanilla CSS with semantic design tokens expressed as custom properties, so typography, color, and visualization elements share a single coherent design system across light and dark themes.

Typography is self-hosted via Fontsource. No external font CDNs are used.

Visualizations are rendered primarily in SVG and integrate with the surrounding theme through CSS variables. JavaScript is loaded only where a figure or simulation requires it.

The site is deployed as a static build to GitHub Pages.

Discoverability and link-share metadata are handled at build time. `@astrojs/sitemap` emits `sitemap-index.xml` and `sitemap-0.xml` automatically from the configured `site` value; `robots.txt` allows all crawlers and points to the sitemap index. The shared `BaseLayout` emits a `<link rel="canonical">` plus the Open Graph (`og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`) and Twitter card meta for every page, so unfurled links render predictably across clients. No `og:image` is shipped yet; the cardless summary is the honest representation of what exists today.

## Disclaimer: AI usage

All text content on this site is written by me. The design system (typography, grid, color, composition, interaction) is chosen and refined according to my own principles, through deliberate iteration. The implementation, however, including the CSS, the Astro components, and the build configuration, is largely written by [Claude](https://claude.com).

AI is not the brain and heart of this motor, it is the hands that make its existence possible. Contents and the designs are my own.

## Ongoing Construction

This website is intentionally unfinished.

It evolves incrementally through writing, experimentation, tooling, visual systems, and research interests that change over time.

Some projects may remain incomplete.
Some essays may continue evolving long after publication.

The site is designed not as a static archive, but as a living computational notebook and publication environment.
