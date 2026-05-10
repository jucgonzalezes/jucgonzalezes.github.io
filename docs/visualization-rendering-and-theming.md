# Visualization Rendering & Theming

## Philosophy

Visualizations are treated as integral editorial elements rather than isolated media assets.

Figures, diagrams, simulations, and computational graphics are expected to participate in the same visual system as typography, layout, and interaction design.

The rendering pipeline therefore prioritizes:
- adaptability
- typographic consistency
- theme awareness
- scalability
- and structural integration.

The objective is to make visualizations behave like living components of the publication environment.

---

# SVG-First Rendering Strategy

The preferred rendering format for:
- diagrams
- scientific plots
- mathematical graphics
- annotations
- and editorial visual systems

is SVG.

SVG is treated not as a static image format, but as a structured document system capable of:
- inheriting typography
- responding to themes
- adapting to layout changes
- supporting animation
- exposing semantic structure
- and integrating directly with CSS and application state.

This approach allows visual systems to remain fully coherent with the editorial design language.

---

## Why SVG

SVG rendering enables:
- crisp vector scaling
- typography consistency
- dark/light theme adaptation
- responsive layouts
- fine-grained interaction
- animation control
- and semantic styling.

Unlike raster images, SVG figures can inherit:
- fonts
- color variables
- spacing systems
- and interaction states

directly from the surrounding interface.

This ensures that plots and diagrams remain visually integrated with the broader publication system.

---

# Theme-Aware Visualization System

The website uses semantic design tokens rather than hardcoded visualization colors.

Plots and diagrams should reference abstract semantic variables such as:
- plot background
- axis color
- grid color
- annotation color
- primary series
- secondary series
- highlight color

rather than fixed hexadecimal values.

This allows visualizations to adapt automatically between:
- light mode
- dark mode
- print exports
- and future rendering environments.
