---
layout: ../layouts/PageLayout.astro
title: Lab
description: A specimen page exercising every typographic register the publication system claims to support.
gridded: true
---

This page is a specimen. It documents the typographic system *using* the system — every register named in `docs/design-system.md` appears at least once, in context, so the prototype is no longer asserting capabilities it doesn't demonstrate. Read it the way you'd read a font specimen book, or a publication style sheet for a journal you're about to write for.

## Body & inline marks

The body of every long-form article is set in **Source Serif 4** at 17px with a line-height of 1.65 and a maximum measure of 36rem. This produces lines of roughly 65–72 characters — Bringhurst's number, the working width of any serious reading column.

Within the body, **strong emphasis** lifts a phrase via font-weight; *italic emphasis* through font-style — Source Serif 4 carries a real italic, not an obliqued roman. Inline `code` sits in IBM Plex Mono with a subtle surface tint. A [link to an external source](https://en.wikipedia.org/wiki/Swiss_Style_(design)) is underlined in the secondary rule color and lifts on hover. References to specific works — *Grid Systems in Graphic Design* — are italicized as titles. Technical terms when first introduced — like *typographic measure* — also take italic.

Numbers in running prose — 1,420 words, 36rem, 1.65 leading — sit in the body face. When precision matters, like a coordinate or a flag value (`x = 0.0042`), the value sits in mono so it reads as a value rather than as prose.

## Hierarchy

This page exercises three levels of heading. The article title sits in the framed page-header above (Inter 700, display scale). Each section opens with an h2 like the one introducing this paragraph (Inter 600 at 30px, preceded by a full-viewport rule). And within a section, an h3 can subdivide the argument:

### A third-level heading

The h3 is Inter 600 at body scale, primary text color, sentence case. It reads as a continuation of the body argument rather than as a metadata label — earlier in the project an h3 was uppercased + tracked + in the secondary text color, which had it reading like an eyebrow with a different name. That treatment is gone. The h3 is a heading; the eyebrow is a flag.

### A second h3 to show the rhythm

Spacing between h3 and the following paragraph is `--space-3` (0.75rem); spacing between paragraphs is `--space-5` (1.25rem). The visual step between an h3 and a paragraph below it is meaningful but small — the h3 introduces a sub-argument rather than starting a new section.

## Quotations

A blockquote sits in the body flow with a 2px left rule, italicized, secondary text color. It is the inline-quotation register — quoting a passage that informs the surrounding argument:

> Typography is two-dimensional architecture, based on experience and imagination, and guided by rules and readability. And this is the purpose of typography: The arrangement of design elements within a given structure should allow the reader to easily focus on the message, without slowing down the speed of his reading.
>
> — Hermann Zapf

Distinct from the inline blockquote, a **pull-quote** is a display register — borderless, larger serif, italic, set apart from the body flow to function as a punctuation point in the article's pacing.

<blockquote class="pull-quote">
The grid is the underlying order. The composition is the choice within the order. A page that lets you see the grid but never decides where the type goes is showing you the floor plan, not the building.
<cite>Iris Marti, fourth assessment</cite>
</blockquote>

The pull-quote stays at body measure (36rem) so it remains a reading object, not a billboard. Source Serif 4 at 22px, italic, with a mono attribution in the eyebrow register below.

## Lists & tabular data

Unordered lists carry their markers in the secondary text color so they sit quietly:

- Long-form readability over novelty
- Composition over decoration
- Structure over stimulation
- Permanence over recirculation

Ordered lists handle sequence:

1. The grid is established as the underlying order.
2. The composition is chosen within the grid.
3. The composition reads as a decision rather than a default.

Tables follow editorial convention rather than UI convention — a top rule, header row in mono small-caps, 1px row dividers, a closing tail rule. No vertical lines. Numeric columns right-align via a `numeric` utility class so digits sit on tabular figures.

| Family | Role | Weights used | <span class="numeric">Payload (gz)</span> |
|---|---|---|---|
| Inter | Architecture | <span class="numeric">400 – 900</span> | <span class="numeric">~48 KB</span> |
| Source Serif 4 | Reading | <span class="numeric">400, 600</span> | <span class="numeric">~42 KB</span> |
| IBM Plex Mono | Computation | <span class="numeric">400, 500</span> | <span class="numeric">~64 KB</span> |

## Code

Inline code (`var measure = 36;`) is set in IBM Plex Mono with a subtle background and 1px border. It reads as a value embedded in prose. Block code carries the same family at the editorial register — surface background, and a minimal dual-theme syntax palette (Shiki's `min-light` and `min-dark`) that surfaces structural information (comments, keywords, strings) through four or five muted hues rather than terminal-bright colors. A small mono language tag in the top-right corner names the language without the reader having to guess from the syntax:

```js
// Compute the central panel's width given two side panels.
function asymmCenter(viewport, measureWide) {
  const left  = Math.max(0, (viewport - measureWide) / 4);
  const right = Math.max(0, (viewport - measureWide) / 2);
  return viewport - left - right;
}
```

A second example in a different language picks up the same dual-theme treatment — the language tag changes, the hue palette is consistent:

```python
def measure_in_chars(width_px, font_size_px=17, avg_char_width=0.5):
    """Return approximate character count for a given column width."""
    return round(width_px / (font_size_px * avg_char_width))
```

## Math

Inline math sits in the body flow: the readable measure $m$ at a body size $s$ holds roughly $c = m / (s \cdot 0.5)$ characters per line — for $s = 17\text{px}$ and $m = 576\text{px}$, $c \approx 67$. Display math takes its own block, centered and breathing:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

A more involved equation reads as an event in the page — the Fourier transform of a Gaussian remains a Gaussian:

$$
\mathcal{F}\{e^{-\pi x^2}\}(\xi) = e^{-\pi \xi^2}
$$

KaTeX renders math at build time. The fonts are loaded once site-wide via `katex.min.css`; no JavaScript is required at view time.

## Figures

Five figures follow, demonstrating the figure apparatus and the four bleed paradigms. Each figure carries an auto-numbered mono label and a sentence-case caption in sans-secondary, capped at body measure regardless of how wide the figure extends.

The first is an **inline figure** sitting at body measure inside the central panel, without any bleed class. Use this when a figure belongs in the reading flow at the same width as the body.

<figure>
<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
  <line x1="40" y1="100" x2="760" y2="100" stroke="currentColor" stroke-width="1"/>
  <g fill="currentColor">
    <circle cx="40"  cy="100" r="3"/>
    <circle cx="220" cy="100" r="3"/>
    <circle cx="400" cy="100" r="3"/>
    <circle cx="580" cy="100" r="3"/>
    <circle cx="760" cy="100" r="3"/>
  </g>
  <g font-family="ui-monospace, monospace" font-size="11" fill="currentColor">
    <text x="40"  y="130" text-anchor="middle">0</text>
    <text x="220" y="130" text-anchor="middle">1</text>
    <text x="400" y="130" text-anchor="middle">2</text>
    <text x="580" y="130" text-anchor="middle">3</text>
    <text x="760" y="130" text-anchor="middle">4</text>
  </g>
</svg>
<figcaption>An inline figure at body measure — a one-dimensional axis with five sample points. The figure stays inside the central panel, no bleed.</figcaption>
</figure>

Next, a **bleed-right** figure at the default `--bleed-fraction: 1/3` — anchored at viewport-right, extending leftward into one-third of the central panel from the right side.

<figure class="bleed-right">
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
  <defs>
    <pattern id="lab-dots-1" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="16" cy="16" r="2.5" fill="currentColor"/>
    </pattern>
  </defs>
  <rect width="800" height="400" fill="url(#lab-dots-1)"/>
  <circle cx="560" cy="200" r="140" fill="none" stroke="currentColor" stroke-width="1.5"/>
</svg>
<figcaption>A regularly-sampled field with a region of interest, bleeding right at the default fraction.</figcaption>
</figure>

The same paradigm, but with `--bleed-fraction: 0.5` overriding the default so the figure extends further into the central panel — a half-width bleed for figures that need more presence.

<figure class="bleed-right" style="--bleed-fraction: 0.5;">
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
  <g stroke="currentColor" stroke-width="1" fill="none">
    <path d="M 0 160 Q 100 80, 200 160 T 400 160 T 600 160 T 800 160"/>
    <path d="M 0 200 Q 100 280, 200 200 T 400 200 T 600 200 T 800 200" opacity="0.5"/>
    <path d="M 0 120 Q 100 40, 200 120 T 400 120 T 600 120 T 800 120" opacity="0.3"/>
  </g>
</svg>
<figcaption>Three sine waves at decreasing amplitudes. Bleed-right with the fraction overridden to 0.5 — half the central panel rather than one-third.</figcaption>
</figure>

The mirror — **bleed-left** at the default fraction, anchored at viewport-left, extending rightward into the leftmost third of the central panel.

<figure class="bleed-left">
<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
  <g stroke="currentColor" stroke-width="1" fill="none">
    <g transform="translate(0,0)">
      <line x1="0" y1="0"   x2="800" y2="360"/>
      <line x1="0" y1="30"  x2="800" y2="390" opacity="0.85"/>
      <line x1="0" y1="60"  x2="800" y2="420" opacity="0.7"/>
      <line x1="0" y1="90"  x2="800" y2="450" opacity="0.55"/>
      <line x1="0" y1="120" x2="800" y2="480" opacity="0.4"/>
      <line x1="0" y1="150" x2="800" y2="510" opacity="0.25"/>
    </g>
    <g transform="translate(0,360) scale(1,-1)">
      <line x1="0" y1="0"   x2="800" y2="360" opacity="0.85"/>
      <line x1="0" y1="30"  x2="800" y2="390" opacity="0.7"/>
      <line x1="0" y1="60"  x2="800" y2="420" opacity="0.55"/>
      <line x1="0" y1="90"  x2="800" y2="450" opacity="0.4"/>
      <line x1="0" y1="120" x2="800" y2="480" opacity="0.25"/>
    </g>
  </g>
</svg>
<figcaption>Diagonal hatching with two reflected groups. Bleed-left, default fraction.</figcaption>
</figure>

Finally, a **bleed-full** figure spans the entire viewport edge to edge — for figures that need to read as a page event rather than as an inline illustration.

<figure class="bleed-full">
<svg viewBox="0 0 1600 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
  <g stroke="currentColor" stroke-width="1" fill="none">
    <circle cx="800" cy="120" r="30"/>
    <circle cx="800" cy="120" r="60" opacity="0.85"/>
    <circle cx="800" cy="120" r="90" opacity="0.7"/>
    <circle cx="800" cy="120" r="120" opacity="0.55"/>
    <circle cx="800" cy="120" r="150" opacity="0.4"/>
    <circle cx="800" cy="120" r="180" opacity="0.25"/>
  </g>
  <line x1="0" y1="120" x2="1600" y2="120" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
</svg>
<figcaption>Concentric circles centered on a horizontal baseline. Bleed-full — the figure occupies the full viewport width, including both side panels.</figcaption>
</figure>

## Marginalia

The two `.bleed-margin-*` classes carry the sidenote register — set in Inter sans at `--fs-sm`, secondary text color, occupying one of the side panels without crossing into the central column. They demonstrate the asymmetric grid's right field being used as a *register*, not as empty space.

The first sidenote sits to the right of this paragraph. It's a Tufte-style annotation — a short clarification, a citation, or a coordinate that belongs next to the body but not in it. The body text continues at its readable measure on the left; the marginal note carries supplementary material in panel-3.

<div class="bleed-margin-right">

This is a marginal note. It sits in panel-3, set in Inter sans at fs-sm with secondary text color — the system's *commentary register*. References and parenthetical remarks live here.

</div>

The mirror sits in panel-1, on the left. Because panel-1 is half the width of panel-3 (the asymmetric 1:2 ratio), `.bleed-margin-left` is a narrower register — best for shorter notes, dates, coordinates, or section numbers rather than running commentary.

<div class="bleed-margin-left">

Narrower note — panel-1.

</div>

## Footnotes

Footnotes are the trailing-reference register — the place where citations, qualifications, and pedantic asides go without interrupting the body's argument. The marker is a small superscript mono numeral linked to the entry at the bottom of the article<sup><a href="#fn-1" id="fnref-1">1</a></sup>. The entries themselves sit in a sans-secondary register, numbered in mono via CSS counter, on a list that opens with a 1px top rule<sup><a href="#fn-2" id="fnref-2">2</a></sup>.

<ol class="footnotes">
<li id="fn-1">The marker uses the HTML <code>&lt;sup&gt;</code> element with an internal-jump anchor. The anchor on the marker (<code>id="fnref-1"</code>) lets the footnote entry link back to the body. <a href="#fnref-1" aria-label="Back to text">↩</a></li>
<li id="fn-2">CSS counter on <code>.footnotes</code> auto-numbers the list items. The counter sits in Plex Mono at <code>--fs-xs</code> with the eyebrow's tracking. A future remark-footnote plugin can automate the markup, but manual is fine for the prototype. <a href="#fnref-2" aria-label="Back to text">↩</a></li>
</ol>

## Colophon

The colophon is the trailing register of the article — the place where attribution, dates, technical setting, and license sit. Below, the structured `<dl>` pattern from `docs/design-system.md` is exercised. Each label sits in mono uppercase tracked at `--fs-xs`; each value in mono sentence-case at `--fs-sm`, secondary color. A future essay's colophon can include attribution, citation, DOI, license; this prototype shows the structural slots.

<div class="colophon">
<dl>
<div><dt>Set in</dt><dd>Inter, Source Serif 4 &amp; IBM Plex Mono</dd></div>
</dl>
<dl>
<div><dt>Math</dt><dd>KaTeX, server-side rendered at build</dd></div>
<div><dt>Code</dt><dd>Shiki, dual theme <code>min-light</code> / <code>min-dark</code></dd></div>
<div><dt>Layout</dt><dd>Asymmetric three-panel grid, engaged above 1100px viewport</dd></div>
</dl>
<dl>
<div><dt>Revised</dt><dd>2026-05-11</dd></div>
</dl>
<dl>
<div><dt>License</dt><dd>CC BY 4.0</dd></div>
</dl>
</div>
