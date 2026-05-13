---
layout: ../layouts/PageLayout.astro
title: Colophon
eyebrow: Construction & editorial philosophy
description: The construction, typography, and editorial philosophy of this site.
---

This website is designed as a computational editorial system. It combines principles from scientific publishing, Swiss modernist design, computational visualization, and long-form technical writing into a single environment for research, experimentation, and communication. The site is intentionally transparent in both construction and philosophy.

## Editorial philosophy

The design prioritizes readability over novelty, hierarchy over decoration, structure over visual noise, and sustained attention over rapid consumption.

Every visual element is expected to contribute either informational clarity, compositional balance, or conceptual meaning. The interface attempts to disappear into the act of reading and exploration.

## Typography

Typography forms the primary structural language of the site. It is treated not as branding, but as architecture.

- **Inter** — a modern sans-serif for interface, navigation, and structural hierarchy.
- **Source Serif 4** — a serif layer for extended reading and reflective writing.
- **IBM Plex Mono** — monospace typography for code, annotations, references, coordinates, and computational elements.

Scale, spacing, alignment, and rhythm are used to establish editorial hierarchy and navigational flow.

## Layout and grid

The layout is based on explicit modular grids inspired by editorial and Swiss modernist systems. The grid remains partially visible throughout the site as part of the visual language. Spacing and alignment are treated as compositional tools rather than invisible implementation details.

The site intentionally favors asymmetrical balance, structural whitespace, modular composition, and strong typographic anchoring over decorative interface patterns.

## Color

The visual palette is intentionally restrained. The interface relies primarily on warm paper-like neutrals, dark ink-like typography, and a limited range of accent tones drawn from scientific publishing and editorial print systems. Accent colors are used sparingly and structurally — to emphasize relationships, guide attention, and support visual hierarchy.

A dedicated visualization palette is maintained separately from the editorial accent system, so plots, diagrams, and simulations remain legible without competing with the surrounding interface.

## Visualization

Figures are treated as first-class editorial components rather than embedded media assets. They share the same typography, color tokens, and spacing system as the surrounding text. SVG is the preferred rendering format, allowing each figure to inherit theme state, respond to layout changes, and remain semantically structured.

JavaScript is loaded only where a figure requires motion or interaction.

## Build

The site is built with **Astro** and **TypeScript**. Content is authored in **Markdown**, with **MDX** reserved for pages that embed components directly.

Styling uses **vanilla CSS with semantic design tokens** expressed as custom properties, so typography, color, and visualization share a single coherent system across light and dark themes.

Typography is self-hosted via **Fontsource**. No external font CDN is used.

The site is deployed as a static build to **GitHub Pages** via **GitHub Actions**.

## Disclaimer: AI usage

All text and visual contents on this site are written by me. The design system (typography, grid, color, composition, interaction) has been carefully designed and refined according to my own principles, through deliberate iteration. The implementation, however, including the CSS, the Astro components, and the build configuration, is largely written by [Claude](https://claude.com).

AI is not the brain and heart of this motor, it is the hands that make its existence possible.

Contents and the designs are my own.

## Ongoing construction

This website is intentionally unfinished. It evolves incrementally through writing, experimentation, tooling, visual systems, and research interests that change over time.

Some projects may remain incomplete. Some essays may continue evolving long after publication. The site is designed not as a static archive, but as a living computational notebook and publication environment.
