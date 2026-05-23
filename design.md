---
name: ItGlass Nordic-Bauhaus
colors:
  surface: '#fdf9ef'
  surface-dim: '#dddad0'
  surface-bright: '#fdf9ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3e9'
  surface-container: '#f2eee4'
  surface-container-high: '#ece8de'
  surface-container-highest: '#e6e2d8'
  on-surface: '#1c1c16'
  on-surface-variant: '#44474e'
  inverse-surface: '#31312a'
  inverse-on-surface: '#f4f0e6'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#495f82'
  primary: '#001026'
  on-primary: '#ffffff'
  primary-container: '#0b2545'
  on-primary-container: '#778db2'
  inverse-primary: '#b1c7f0'
  secondary: '#715b3e'
  on-secondary: '#ffffff'
  secondary-container: '#f9dbb7'
  on-secondary-container: '#755f42'
  tertiary: '#110f0c'
  on-tertiary: '#ffffff'
  tertiary-container: '#262421'
  on-tertiary-container: '#8f8b86'
  error: '#8B2A2A'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b1c7f0'
  on-primary-fixed: '#001c3b'
  on-primary-fixed-variant: '#314769'
  secondary-fixed: '#fcdeba'
  secondary-fixed-dim: '#dfc29f'
  on-secondary-fixed: '#281903'
  on-secondary-fixed-variant: '#574329'
  tertiary-fixed: '#e7e1dc'
  tertiary-fixed-dim: '#cbc5c0'
  on-tertiary-fixed: '#1d1b18'
  on-tertiary-fixed-variant: '#494643'
  background: '#fdf9ef'
  on-background: '#1c1c16'
  surface-variant: '#e6e2d8'
  paper: '#FDFBF7'
  smoke: '#E2DDD3'
  ash: '#96918C'
  success: '#2A5440'
  warning: '#7A5A1E'
typography:
  display:
    fontFamily: Fraunces
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.05'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Fraunces
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Fraunces
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.15'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Fraunces
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.25'
  body-lg:
    fontFamily: Jost
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.65'
  body-md:
    fontFamily: Jost
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.65'
  label-caps:
    fontFamily: Jost
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.12em
  button:
    fontFamily: Jost
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 128px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style
The design system for the glassworks brand is rooted in the intersection of **Scandinavian architecture** and **Bauhaus discipline**. It prioritizes precision, material honesty, and the inherent clarity of glass. The brand personality is professional, technical, and grounded—moving away from "tech-startup" aesthetics toward a timeless "master-craftsman" identity.

**Design Style: Minimalism with Brutalist Precision.**
- **Clarity:** Heavy use of whitespace to mirror the transparency and lightness of glass.
- **Structure:** A strict adherence to a grid, emphasizing straight lines and sharp intersections.
- **Honesty:** No superfluous decorations (gradients, glows, or soft shadows). Depth is achieved through tonal layering and high-contrast borders rather than skeuomorphism.
- **Emotional Response:** Trustworthy, sturdy, architectural, and premium.

## Colors
The palette is inspired by natural building materials and the workshop environment.

- **Navy (#0B2545):** The primary color, used for structural branding, primary buttons, and major headings. It provides deep, stable contrast.
- **Coal (#1C1A17):** The secondary color for body text and secondary headings, offering better readability than pure black.
- **Brass (#8B7355):** A subtle accent color. Use it sparingly for "eyebrow" text, underlines, or small UI highlights to denote quality and craftsmanship.
- **Stone (#F4F0E6) & Paper (#FDFBF7):** The core background layers. Use Stone for the page background and Paper for cards and contained elements to create a subtle tonal lift.
- **Smoke (#E2DDD3):** The standard color for borders and dividers.

**Usage Rules:**
- Avoid using Brass as a background for large areas.
- Maintain high contrast for accessibility: Navy on Stone/Paper is the preferred combination for CTAs.

## Typography
The typographic system pairs the editorial elegance of **Fraunces** with the geometric neutrality of **Jost**.

- **Fraunces:** Use for all headings and "display" moments. Its variable weights allow for a sophisticated, architectural feel. Italic variants should be used sparingly for emphasis or captions to add a human touch.
- **Jost:** Use for body copy, UI elements, and navigation. Its Futura-inspired geometry complements the sharp edges of the design system.
- **Label-Caps (Eyebrow):** Use for category tags or section prefixes (e.g., "01 — SERVICES"). Always uppercase with generous letter spacing to evoke a blueprint or technical drawing aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** approach for desktop and a **Fluid Fluid** approach for mobile, ensuring content feels contained and deliberate, like a framed pane of glass.

- **Grid Model:** 12-column grid for desktop with 24px gutters. Margin should match the gutter at minimum but expand to 64px on large displays.
- **Spacing Rhythm:** Based on a 4px baseline. Vertical spacing between sections should be aggressive (64px to 128px) to allow the "minimalist" aesthetic to breathe.
- **Reflow Rules:** On mobile, move to a 4-column grid with 16px gutters. Section padding reduces to 48px.
- **Alignment:** Consistent left-alignment for all text blocks to maintain the Bauhaus structural integrity.

## Elevation & Depth
In line with the glass and architectural theme, depth is conveyed through **Tonal Layers** and **Crisp Outlines** rather than shadows.

- **Layering:** Use `Stone` (#F4F0E6) for the lowest level (background) and `Paper` (#FDFBF7) for elevated elements (cards, surfaces).
- **Outlines:** Use 1px solid borders in `Smoke` (#E2DDD3) to define elements. For active or focused states, transition the border to `Navy` or `Brass`.
- **Shadows:** Strictly prohibited, with the sole exception of the floating WhatsApp CTA, which may use a subtle, neutral shadow to ensure it floats above the "glass" surface of the site.

## Shapes
The shape language is defined by the product: **Glass**. Most elements are sharp and rectangular.

- **Primary Radius:** 0px. Used for cards, images, and section containers.
- **Secondary Radius:** 2px to 4px. Reserved strictly for interactive elements like buttons and input fields to provide a slight tactile affordance without breaking the geometric rigor.
- **Exceptions:** Use circular shapes (pill-shaped) only for the WhatsApp floating icon and user avatars.

## Components
- **Buttons:** 
  - *Primary:* Solid Navy background, white/Paper text, 4px radius. 
  - *Secondary:* Navy 1px border, transparent background, 2px radius. 
  - *Ghost:* No border, underline in Brass on hover.
- **Cards:** Background in Paper, 1px border in Smoke, 0px radius. Imagery should be edge-to-edge at the top of the card with no rounding.
- **Input Fields:** Background in Paper, 1px border in Smoke, 2px radius. On focus, the border changes to Navy with a 1px ring.
- **Chips/Tags:** Background in Stone, text in Brass (Label-Caps style), 2px radius.
- **Dividers:** 1px solid lines. Use Smoke for standard separators and Brass for high-level section transitions.
- **Imagery:** Use real photography of glass installations. Avoid stock photos. Apply a 0px border radius to all project images to emphasize the "cut glass" feel.
