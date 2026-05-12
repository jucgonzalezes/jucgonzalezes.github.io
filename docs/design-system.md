# Design System & Editorial Guidelines

## Typography

The site is set in three families. The triple is a deliberate commitment, not a default — each family carries a distinct editorial voice and the three together compose the typographic system that any future page inherits.

### Inter — the architectural voice

Used for navigation, headings, UI components, figure labels, metadata, and diagram annotations.

Recommended weights: 400, 500, 600, 700, 900.

Inter is a contemporary sans designed for screen rendering across UI and display scales. It carries the structural work on this site: navigation, section titles, h2/h3 hierarchy, and the figure-number labels that index publication apparatus. At display scale (the article title) Inter's tight horizontal metrics let the eye read the title as architecture, not as text. At UI scale (eyebrow, captions) its open shapes hold legibility down to 12px. The site uses the variable font, which keeps weight transitions continuous and removes the need to ship discrete weight files.

### Source Serif 4 — the reading voice

Used for long-form essay bodies, reflective writing, and quotations.

Source Serif 4 is the body argument of the site. It is a transitional-style serif with relatively open apertures, drawn explicitly for screen reading at the measures and leadings that long-form work demands. At the canonical body size (17px / 1.0625rem) and `--lh-prose` (1.65), Source Serif 4 sets to roughly 65–72 characters per line at the `--measure` width — Bringhurst's number. Where the page asks the reader to settle in, this is the family carrying that ask.

### IBM Plex Mono — the computational voice

Used for code blocks, annotations, references, technical metadata, coordinates, axis labels, the eyebrow register, figure-number prefixes (set in mono small caps), and the colophon.

Plex Mono is a publishing-grade monospace — it is the typewriter-ledger family that signals "this is structured data, an index, a coordinate, a citation" rather than the coder-terminal family that signals "this is source code." On this site it has three structural addresses: eyebrows (label), figure labels (label), and the colophon / marginalia (read). Keeping mono present in those three roles is what lets the publication system read as a publication system rather than as a serif-on-cream blog.

### Why these three, together

Inter / Source Serif 4 / IBM Plex Mono is the recognizable 2026 editorial-web triple — Distill, Stripe Press, Vercel, and a long tail of computational-publishing sites use some combination of it. The site commits to it knowingly:

- All three are open-source and self-hosted (Fontsource), so the site has no third-party type dependency.
- Inter and Source Serif 4 are variable fonts; Plex Mono ships at selected weights only. Together they total a small payload.
- Their x-heights are close enough that sans and serif can sit on the same baseline without optical adjustment; Plex Mono's cap-height aligns cleanly with Inter at matching sizes, which matters when mono labels sit inline with sans captions.
- Each family carries a *distinct* editorial role on this site — architecture, reading, computational annotation. The triple is a three-voice instrument, not three interchangeable sans choices.

If a future redesign substitutes one family, the substitution should be motivated by what the *role* needs (a serif with more presence, a sans with more warmth, a mono with looser tracking), not by family fashion. Candidate substitutions worth considering before that point: Lyon Text or Tiempos Text for the serif (more authored voice); Söhne or Untitled Sans for the sans (more editorial weight); JetBrains Mono or Berkeley Mono for the mono (more present, less neutral).

## Core Color Palette

| Role | Hex |
|---|---|
| Background | #F5F4F0 |
| Elevated Surface | #FAF9F6 |
| Primary Text | #111111 |
| Secondary Text | #5E5E59 |
| Grid/Borders | #CFCBC3 |

## Editorial Accent Colors

| Role | Hex |
|---|---|
| Primary Ochre | #D8A632 |
| Secondary Ochre | #B7861E |
| Soft Highlight | #E7C46A |

Accent colors are scoped to specific surfaces:
- the landing page billboard (eyebrow, pager, progress bar, accent words in the display title)
- interaction states (link hover, focus outlines)
- the dedicated visualization palette (below) for figures and simulations

Content pages — about, colophon, blog index, and all future essays — are **monochromatic** by default. Eyebrows, blockquote bars, status badges, and other permanent visual chrome on those pages use the neutral palette only.

## Visualization Palette

| Name | Hex |
|---|---|
| Ink Blue | #355C7D |
| Ochre | #D8A632 |
| Oxide Red | #B44C43 |
| Slate Teal | #4E7C74 |
| Deep Violet | #6C5B7B |
| Graphite Gray | #5B5B5B |
| Burnt Orange | #C97B36 |
| Olive Sage | #7A8B5A |

These are exposed both as raw tokens (`--plot-ink-blue`, etc.) and as semantic plot tokens (`--plot-axis`, `--plot-label`, `--plot-grid`, `--plot-series-1` … `--plot-series-8`, `--plot-highlight`, `--plot-bg`). Figures should reference the semantic tokens — never the raw values — so light/dark theming and future palette tuning land in one place.

The default ink for figure SVGs is `--plot-graphite` (a muted gray from the series). Setting figure color this way rather than via `currentColor` (which would inherit body text color) gives figures their own perceptual contrast line, theme-tuned for visualization rather than reading. Figures with more structure should set finer-grained tokens on SVG elements directly: `fill="var(--plot-series-1)"`, `stroke="var(--plot-axis)"`, etc.

## Layout Tokens

| Token | Value | Purpose |
|---|---|---|
| `--measure` | 36rem | Reading measure for body text (≈65–72 chars/line at the canonical size) |
| `--measure-wide` | 48rem | Article container max-width / framed-header reference width |
| `--gutter` | `var(--space-6)` (1.5rem) | Article horizontal padding |
| `--frame-pad-y` | 1.35rem | Vertical padding inside framed-header boxes (off the `--space-N` scale, tuned by eye) |
| `--asymm-left` | see below | Width of panel-1 on the decentered grid |
| `--asymm-right` | see below | Width of panel-3 on the decentered grid |
| `--asymm-center` | derived | Width of panel-2 (central column) = `100vw - asymm-left - asymm-right` |
| `--bleed-fraction` | `1/3` | Default cantilever fraction for `.bleed-right` / `.bleed-left` figures |
| `--caption-width` | `calc(--asymm-center / 3)` | Standard caption-box width for side-anchored captions on cantilevered figures |

## The Decentered Three-Panel Grid

Gridded content pages (`gridded: true` in frontmatter) lay out on a three-panel asymmetric grid above the 1100px viewport breakpoint:

```
┌─────────┬─────────────────────────────┬───────────────┐
│         │                             │               │
│ panel 1 │       panel 2 (article)     │    panel 3    │
│         │                             │               │
└─────────┴─────────────────────────────┴───────────────┘
   left          central column            right
```

- **Panel 1** (`--asymm-left`): `min(10rem, max(0px, (100vw - --measure-wide) / 4))`
- **Panel 3** (`--asymm-right`): `min(20rem, max(0px, (100vw - --measure-wide) / 2))`
- **Panel 2** (`--asymm-center`): the remainder — fills whatever's left between the two margins

The grid is **decentered by design**: panel 3 is twice as wide as panel 1. The visible inner-left pillar sits closer to viewport-left than the inner-right pillar sits to viewport-right. The right field is the structural "marginalia register" — wider on purpose, intended to carry sidenotes, captions, and bleed-right figures.

Both panels are capped (10rem and 20rem) so on very wide viewports the side fields don't grow to an unusable size — the grid degrades into an effectively-centered layout at large viewports rather than continuing to expand the side fields.

**Below 1100px** the grid falls back to the centered v2 layout — both margins equal to `(100vw - --measure-wide) / 2`. The asymmetric program only engages when the viewport can carry it.

The geometry tokens are defined on `main:has(.has-grid)` so a single source of geometry truth cascades to the article, the pillars, the rules, and the bleed paradigms. Changing the breakpoint or caps touches one place.

## Framed Header Pattern

Gridded pages declare a framed page-header. The pattern:

- **Vertical pillars** on `<main>` at panel-1 / panel-2 and panel-2 / panel-3 boundaries, spanning the content region between the site header and footer.
- **Article top + bottom rules**: 1px lines at full viewport width.
- **Page-header top rule**: 1px line at full viewport width, immediately above the title.
- **Per-section rules**: each `<h2>` opens with a 1px top rule at full viewport width — including the first h2 (every section is the same kind of object).
- **No eyebrow row** on gridded pages. The frontmatter `eyebrow` field is honored for non-gridded pages (e.g. `/colophon`) but is intentionally not rendered on gridded pages — the page-header's top rule does the upper-frame work that the eyebrow used to do.
- **Title** hangs from the page-header's top rule with asymmetric vertical padding: `var(--frame-pad-y)` above, `var(--space-12)` below. The page-header has NO closing rule on its bottom; the title floats above the body, the first h2's rule is unambiguously the first section divider.
- **Display scale** for the title on gridded pages only: `clamp(2.625rem, 7vw, var(--fs-3xl))`. Non-gridded pages use a smaller title.
- **No intersection dots.** Corners and T-intersections are clean line crossings.
- **All lines use `var(--color-rule)`**, adapting automatically in dark mode.

## Bleed Paradigms

Five classes define how content interrupts or coexists with the body column. All five are scoped to `.has-grid`.

### Crossing variants — sit ON the grid, occlude the pillars they cross

- **`.bleed-full`** — spans viewport-left to viewport-right (panel 1 + 2 + 3).
- **`.bleed-right`** — anchored at viewport-right, extends leftward into the central panel by `--bleed-fraction` of `--asymm-center` (default 1/3, so it covers panel 3 + the rightmost third of panel 2).
- **`.bleed-left`** — mirror of `.bleed-right`.

Each crossing variant has `background: var(--color-bg)` and `z-index: 1`, so the pillar it crosses is visually interrupted at the figure's vertical extent. Editorial logic: a figure that sits on a grid line breaks the grid line where the figure sits.

### Margin variants — sit BESIDE the grid, do not cross pillars

- **`.bleed-margin-right`** — entirely inside panel 3.
- **`.bleed-margin-left`** — entirely inside panel 1.

These are the sidenote / marginalia register. They are set in sans `--fs-sm` secondary text, no background, no z-index lift — the pillar remains visible alongside as the boundary.

### Configuration

`--bleed-fraction` (default `1/3`) controls how far `.bleed-right` and `.bleed-left` intrude into the central panel. Override per element with `style="--bleed-fraction: 0.5"` for a half-width bleed.

`--caption-width` (default `calc(--asymm-center / 3)`) is the standardized width for side-anchored captions on cantilevered figures. Decoupled from `--bleed-fraction` so a figure at fraction 0.5 doesn't end up with a wider caption box than one at fraction 1/3.

## Figure Apparatus

Figures use `<figure>` + `<figcaption>`. The figure-number label ("Fig. N · ") is rendered via a `::before` pseudo on figcaption, with the counter incremented on figcaption (not figure) so figures without captions don't gap the sequence. Counter scope: per article.

Figure ink defaults to `--plot-graphite` (a muted gray from the visualization palette), not body text color. This gives figures their own semantic color line, theme-tuned for visualization. SVGs using `currentColor` inherit this token automatically.

### Inline / `.bleed-full` / margin variants

Standard stacked layout: top rule (figure's `border-top`), SVG, bottom rule (figcaption's `border-top`), caption text. Caption is capped at `--measure` (body width) even when the parent figure bleeds wider, so caption text always reads at body measure.

### Cantilevered figures (`.bleed-right` / `.bleed-left`)

The cantilevered figures use a **margin-bracket** treatment rather than a four-sided frame:

- Top rule, bottom rule, and a vertical rule on the central-panel-side edge close the figure into a three-sided bounded region.
- The fourth side is defined by the viewport edge the figure is anchored to. The figure reads as "hinged to the edge," not contained inside the page.
- The bottom rule is the figure's own `border-bottom` (not the figcaption's `border-top` as in the stacked pattern) — the figcaption is no longer in the figure's flow.
- The figcaption is **absolutely positioned outside** the figure box: to the left of `.bleed-right`, to the right of `.bleed-left`. Bottom-aligned with the figure's bottom edge. Width: `var(--caption-width)`.
- The caption fills part of the body-column's empty band at the figure's vertical extent — it gives the empty space a register and an occupant.
- A height cap of `min(60vh, 28rem)` on the SVG keeps the figure from leaving an over-tall vertical void that would start to read as abandonment.

## Code Blocks

Code blocks (rendered by Astro's built-in Shiki) use a **dual minimal-color theme** — `min-light` for light mode, `min-dark` for dark mode. The themes are configured with `defaultColor: false` so Shiki emits CSS custom properties (`--shiki-light`, `--shiki-dark`) rather than inline `color:` styles, and a single CSS rule wires them to the active theme via `[data-theme="dark"]` without `!important`.

The container surfaces (background, border, padding) come from the global `pre` rule. The Plex Mono typeface and a muted 3–4-hue syntactic palette together produce the "research appendix" register CLAUDE.md asks for, not terminal-bright colors.

A `data-language` attribute (emitted automatically by Astro) is displayed as a small mono uppercase tag in the top-right of every block — same register as the eyebrow and figure-number labels — so the language is named without the reader having to guess from the syntax.

## Colophon System

The colophon is the trailing-register block at the end of an article. It supports two coexisting patterns inside a `.colophon` wrapper:

### Simple slots — `<p>` elements

For attributions or single lines where the role is implicit. `/about` uses this pattern: a single sentence ("Set in Inter, Source Serif 4 & IBM Plex Mono.") with no key/value label.

### Structured slots — `<dl>` elements

For trailing metadata that needs a label: attribution, citation, dates, references, license, DOI. Use `<div>` wrappers (with `display: contents`) to group each `<dt>` / `<dd>` pair into a grid row. The dl uses `align-items: baseline` so dt and dd share their baselines automatically — works even when dd wraps to multiple lines.

### Cluster pattern

For richer colophons (citation, dates, technical, rights all present), split the entries into **multiple `<dl>` elements** inside the `.colophon` wrapper, each representing a typographic cluster. `dl + dl` gets `margin-top: var(--space-5)` for the inter-cluster break. The result reads as grouped metadata rather than as a flat web-form. Lars Müller verso-page register.

The dt label is mono uppercase tracked at `--fs-xs`, the dd value is mono sentence-case at `--fs-sm`. The container has no top rule and no padding-top — `margin-top: var(--space-16)` above is enough to mark it as a trailing note.

## Theme

Dark mode is fully implemented. Tokens are defined for both light (`:root`) and dark (`[data-theme="dark"]`) themes; a header toggle persists the user's choice to `localStorage`; the boot script in `BaseLayout.astro` sets the theme attribute before first paint so there is no flash. The site follows `prefers-color-scheme` until the user explicitly toggles.

## Math

Math is rendered server-side at build time via `remark-math` + `rehype-katex`. The KaTeX stylesheet is loaded once site-wide in `BaseLayout.astro`; no JavaScript is required at view time. Inline math uses `$...$`; display math uses `$$...$$`. Display math is capped at `--measure` on gridded pages so equations stay aligned with body text.

## Print

Print is not a first-class target. The site is built for screen — the `100vw` math underlying horizontal rules, the position-absolute pillars, the asymmetric bleed paradigms, and the decentered three-panel grid are all viewport constructs that don't carry on paper.

A minimal `@media print` block in `PageLayout.astro` does just enough to keep prints legible:

- Flattens the asymmetric grid to a centered single column (both side panels collapse to zero).
- Hides the pillars and the full-viewport horizontal rules.
- Restores a normal `border-top` on each section h2 so sections still divide.
- Collapses every bleed paradigm to inline-block at body measure.
- Forces light-on-white regardless of dark-mode setting, so dark-mode users don't print on solid black ink.
- Hides the site header and footer.

The result is a readable but unornamented print artifact. Tightening print further (page numbers, running heads, citation rendering for `<cite>`, KaTeX print metrics) is deferred until there is a real essay corpus to print.

## Design Principles

The interface should feel:
- architectural
- restrained
- systematic
- and intellectually focused

Avoid:
- dashboard aesthetics
- decorative gradients
- excessive shadows
- startup-style UI patterns
- ornamental animations
- glassmorphism / backdrop-blur surfaces

Preferred characteristics:
- visible grid systems
- asymmetrical layouts
- generous whitespace
- typographic hierarchy
- restrained motion
- SVG-first graphics
