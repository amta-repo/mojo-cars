# Dax Auto Bookings

build me a car rental and booking website for this brand "DAX AUTO SARL" . 
For the Logo text, let DAX be at the top while Auto SARL is underneath, (smaller than DAX).

using this design:

## 1. Visual Theme & Atmosphere

Dax Auto SARL design system embodies a **bold, energetic mobility brand** with a strong commitment to accessibility and clarity. The aesthetic combines **vibrant action-oriented colors** with a clean, modern typography system built on system fonts. The visual language prioritizes **user trust through straightforward interactions**, leveraging high-contrast primary greens and attention-grabbing yellows to guide users through the car rental journey. The design emphasizes **efficiency and transparency**, with ample whitespace, legible forms, and prominent call-to-action buttons. Dark hero sections with overlay typography create cinematic moments for brand storytelling, while light, airy interior pages maintain focus on functional content.

**Key Characteristics**

- Vibrant, high-contrast primary palette anchored by **green** (`#009900` and `#027B00`) symbolizing trust, growth, and mobility

- Bright **yellow** (`#FFDC00`) as a secondary accent for prominence and urgency

- Clean typography using system fonts with generous hierarchy and spacing

- Prominent, rounded-corner buttons with substantial padding for touch targets

- High accessibility contrast with dark text on light backgrounds and light text on dark hero sections

- Modern card-based layout system with minimal elevation

- Functional form-first design prioritizing booking flows

- Strategic use of white space and breathing room between sections

## 2. Color Palette & Roles

### Primary

- **Primary Green** (`#009900`): Core brand action color for primary buttons, success states, and interactive elements; conveys growth, trust, and positive action

- **Dark Forest Green** (`#027B00`): Secondary green for hover states and brand reinforcement on dark backgrounds; used in promotional badges and accents

### Accent Colors

- **Bright Yellow** (`#FFDC00`): High-visibility secondary CTA color for prominent buttons and discount badges; creates urgency and attention

- **Electric Blue** (`#0000EE`): Hyperlink color and hover state indicator; used for navigation and secondary calls-to-action

### Interactive

- **Link Blue** (`#0000EE`): Default state for all text links; maintains strong visual hierarchy and click affordance

- **Success Green** (`#009900`): Used for confirmation buttons, positive feedback, and validation states

- **Warning Yellow** (`#FFDC00`): Applied to promotional tags, warning states, and time-sensitive offers

- **Error Red** (`#E70940`): Danger states, error messages, and critical alerts

### Neutral Scale

- **Pure Black** (`#000000`): Primary text color for body copy, headings, and high-contrast foreground content

- **Charcoal** (`#333333`): Secondary text for reduced emphasis; used in subheadings and metadata

- **Medium Gray** (`#666666`): Tertiary text for helper copy, timestamps, and low-priority information

- **Light Gray** (`#BFBFBF`): Disabled state text and subtle borders

- **Very Light Gray** (`#CCCCCC`): Secondary borders and divider lines

- **Off-White** (`#F7F7F7`): Subtle background tint for sections and card containers

### Surface & Borders

- **Pure White** (`#FFFFFF`): Primary surface for cards, modals, and form backgrounds

- **Off-White** (`#F7F7F7`): Subtle background differentiation for alternate sections

- **Light Gray Border** (`#CCCCCC`): Input field borders and subtle dividers

- **Medium Gray Border** (`#BFBFBF`): Secondary borders and reduced-emphasis lines

### Semantic / Status

- **Success** (`#009900`): Positive confirmations, completed actions, and validation checks

- **Warning** (`#FFDC00`): Promotional offers, time-sensitive information, and caution states

- **Error** (`#E70940`): Critical errors, validation failures, and destructive actions

- **Info Blue** (`#0000EE`): Informational content and primary navigation states

## 3. Typography Rules

### Font Family

- **Primary**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` (System font stack for performance and modern rendering)

- **Fallback Secondary**: `Arial, sans-serif` (For select input fields and legacy form controls)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |

|------|------|------|--------|-------------|----------------|-------|

| Display XL | -apple-system | 48px | 700 | 70.08px | Normal | Hero titles, mega headings |

| Display Large | -apple-system | 46px | 600 | 58px | Normal | Large section headers |

| Display Medium | -apple-system | 36px | 600 | 44px | Normal | Secondary page headings |

| Heading 1 | -apple-system | 24px | 700 | 35.04px | Normal | Page titles and major sections |

| Heading 2 | -apple-system | 20px | 700 | 29.2px | Normal | Subsection headings |

| Heading 3 | -apple-system | 16px | 700 | 23.36px | Normal | Card titles and tertiary headings |

| Body Large | -apple-system | 16px | 400 | Normal | Normal | Form labels and descriptions |

| Body Regular | -apple-system | 14px | 700 | 20.44px | Normal | Body copy and card descriptions |

| Body Small | -apple-system | 14px | 400 | Normal | Normal | Links and secondary copy |

| Label | -apple-system | 16px | 400 | Normal | Normal | Form input labels |

| Input | Arial | 13.33px | 400 | Normal | Normal | Form field placeholder and value text |

### Principles

- **Contrast-First**: Dark text on light backgrounds (minimum 7:1 ratio), light text on dark backgrounds with sufficient weight

- **Hierarchy Through Weight**: Bold (`700`), semi-bold (`600`), and regular (`400`) create clear visual distinction without relying solely on size

- **Generous Line Height**: Larger line heights (1.4–1.5x) improve readability and breathing room in body text

- **System Fonts**: Leverages `-apple-system` for optimal rendering across Apple devices while maintaining performance; Arial as fallback for form inputs

- **Specific px Values**: All sizes are pixel-locked for consistency across browsers and devices

- **Performance**: Web-safe system fonts eliminate custom font loading delays and improve Lighthouse scores

## 4. Component Stylings

### Buttons

#### Primary CTA Button (Green)

- **Background**: `#009900`

- **Text Color**: `#FFFFFF`

- **Font Size**: `14px`

- **Font Weight**: `700`

- **Padding**: `14px 16px`

- **Height**: `48px`

- **Border Radius**: `0px` (sharp corners for modern aesthetic; optional `10px` for variant)

- **Border**: `0px none`

- **Box Shadow**: `#009900 0px 0px 0px 1px` (subtle outline for depth)

- **Font Family**: `-apple-system`

- **Line Height**: `normal`

- **State – Hover**: Background `#007A00`, shadow intensifies

- **State – Active**: Background `#006B00`, inset shadow

- **State – Disabled**: Background `#BFBFBF`, text `#666666`, cursor `not-allowed`

#### Secondary CTA Button (Yellow)

- **Background**: `#FFDC00`

- **Text Color**: `#000000`

- **Font Size**: `16px`

- **Font Weight**: `700`

- **Padding**: `11px 30px`

- **Height**: `43px`

- **Border Radius**: `10px`

- **Border**: `0px none`

- **Box Shadow**: `none`

- **Font Family**: `-apple-system`

- **Line Height**: `21px`

- **State – Hover**: Background `#FFD700`, shadow `rgba(0, 0, 0, 0.16) 0px 3px 6px 0px`

- **State – Active**: Background `#FFC700`, transform `scale(0.98)`

- **State – Disabled**: Background `#E6C200`, text `#666666`

#### Ghost Button (White Background)

- **Background**: `#FFFFFF`

- **Text Color**: `#000000`

- **Font Size**: `14px`

- **Font Weight**: `700`

- **Padding**: `14px 16px`

- **Height**: `48px`

- **Border Radius**: `0px`

- **Border**: `1px solid #CCCCCC`

- **Box Shadow**: `none`

- **Font Family**: `-apple-system`

- **Line Height**: `normal`

- **State – Hover**: Background `#F7F7F7`, border `#BFBFBF`

- **State – Active**: Background `#EEEEEE`, border `#999999`

#### Minimal Text Button (Navigation)

- **Background**: `rgba(0, 0, 0, 0)` (transparent)

- **Text Color**: `#000000`

- **Font Size**: `14px`

- **Font Weight**: `700`

- **Padding**: `0px 0px 2px 0px`

- **Height**: `28px`

- **Border Radius**: `0px`

- **Border**: `0px none`

- **Box Shadow**: `none`

- **Font Family**: `-apple-system`

- **Line Height**: `normal`

- **State – Hover**: Text Color `#0000EE`, border-bottom `2px solid #0000EE`

- **State – Active**: Text Color `#0000EE`, border-bottom `2px solid #0000EE`

### Cards & Containers

#### Promotional Card (with overlay badge)

- **Background**: `rgba(0, 0, 0, 0)` (transparent; image background expected)

- **Padding**: `0px`

- **Border Radius**: `0px`

- **Text Color**: `#000000` (for overlaid text)

- **Height**: `286px` to `391px` (varies by layout)

- **Border**: `0px none`

- **Box Shadow**: `none` (image handles visual weight)

- **Badge Overlay**: Background `#E70940`, padding `12px 16px`, border-radius `4px`, font-weight `700`, z-index `10`

#### Guide/Content Card

- **Background**: `#FFFFFF`

- **Padding**: `4px 0px` (variable based on content)

- **Border Radius**: `0px`

- **Border**: `0px none`

- **Box Shadow**: `none`

- **Title Font Size**: `16px`, weight `700`, color `#000000`

- **Description Font Size**: `14px`, weight `400`, color `#666666`

- **Line Height**: `23.36px` (title), `20.44px` (description)

#### Form Card / Input Wrapper

- **Background**: `#FFFFFF`

- **Padding**: `16px 20px` (standard form padding)

- **Border Radius**: `5px` to `10px` (varies by input type)

- **Border**: `1px solid #CCCCCC`

- **Box Shadow**: `rgba(0, 0, 0, 0.5) 0px 1px 2px 0px` (subtle depth on focus)

### Inputs & Forms

#### Text Input (Default)

- **Background**: `#FFFFFF`

- **Text Color**: `#333333`

- **Font Size**: `16px`

- **Font Weight**: `400`

- **Padding**: `8px 8px 8px 4px`

- **Height**: `56px`

- **Border Radius**: `5px`

- **Border**: `1px solid #CCCCCC`

- **Box Shadow**: `none`

- **Font Family**: `-apple-system`

- **Placeholder Color**: `#BFBFBF`

- **State – Focus**: Border `1px solid #0000EE`, box-shadow `rgba(0, 0, 238, 0.2) 0px 0px 0px 3px`

- **State – Error**: Border `1px solid #E70940`, background `rgba(231, 9, 64, 0.05)`

- **State – Disabled**: Background `#F7F7F7`, text `#BFBFBF`, cursor `not-allowed`

#### Select Input (Dropdown)

- **Background**: `#FFFFFF`

- **Text Color**: `#333333`

- **Font Size**: `16px` (primary), `13.33px` (form fields)

- **Font Weight**: `400`

- **Padding**: `8px 12px`

- **Height**: `40px` to `56px` (varies)

- **Border Radius**: `0px` (native), `5px` (custom)

- **Border**: `1px solid #CCCCCC`

- **Box Shadow**: `none` (default), `rgba(0, 0, 0, 0.16) 0px 3px 6px 0px` (open state)

- **Arrow Icon**: `#666666`, positioned right `8px`

- **State – Open**: Box-shadow activates, border `#0000EE`

- **State – Disabled**: Background `#F7F7F7`, opacity `0.5`

#### Checkbox / Radio Input

- **Size**: `20px × 20px`

- **Border**: `2px solid #CCCCCC`

- **Border Radius**: `4px` (checkbox), `50%` (radio)

- **Background**: `#FFFFFF`

- **Checked Background**: `#009900`

- **Checked Border**: `2px solid #009900`

- **State – Hover**: Border `#0000EE`, cursor `pointer`

### Navigation

#### Horizontal Navigation Menu

- **Background**: `rgba(0, 0, 0, 0)` (transparent over hero) or `#FFFFFF` (on secondary pages)

- **Padding**: `0px 0px` (items inherit)

- **Height**: `28px` to `29px` (line-height based)

- **Font Size**: `16px`

- **Font Weight**: `400`

- **Text Color**: `#000000`

- **Link Item**: Padding `0px 20px`, height `28px`, border-bottom `2px solid transparent`

- **State – Hover**: Border-bottom `2px solid #0000EE`, color `#0000EE`

- **State – Active**: Border-bottom `2px solid #0000EE`, color `#0000EE`, font-weight `700`

- **Divider**: Border-right `1px solid #CCCCCC`, height `20px`

#### Mobile Navigation (Hamburger Menu)

- **Trigger Button**: Background transparent, width `40px`, height `40px`, padding `8px`

- **Menu Icon**: Stroke `#000000`, stroke-width `2px`

- **Dropdown Panel**: Background `#FFFFFF`, box-shadow `rgba(0, 0, 0, 0.16) 0px 3px 6px 0px`, z-index `1000`

- **Menu Items**: Padding `16px 20px`, font-size `14px`, font-weight `400`, border-bottom `1px solid #CCCCCC`

### Links

#### Text Link (Default)

- **Color**: `#0000EE`

- **Font Size**: `14px` to `16px` (varies by context)

- **Font Weight**: `400`

- **Text Decoration**: `none` (underline on hover)

- **Padding**: `0px` (inline)

- **State – Hover**: Text Decoration `underline`, color `#007CBA` (hover shade)

- **State – Visited**: Color `#7A00DF` (optional, if tracking needed)

- **State – Active**: Color `#0000EE`, font-weight `700`

#### Button Link (Card CTA)

- **Color**: `#0000EE`

- **Font Size**: `16px`

- **Font Weight**: `400`

- **Padding**: `0px`

- **Line Height**: `normal`

- **Arrow Suffix**: `→` icon, margin-left `8px`

- **State – Hover**: Color `#007CBA`, text-decoration `underline`

### Badges

#### Promotional Badge

- **Background**: `#E70940`

- **Text Color**: `#FFFFFF`

- **Font Size**: `14px`

- **Font Weight**: `700`

- **Padding**: `8px 12px`

- **Border Radius**: `20px`

- **Height**: `24px`

- **Box Shadow**: `none`

- **Positioning**: Absolute, top `12px`, left `12px` (card overlay)

#### Success Badge

- **Background**: `#009900`

- **Text Color**: `#FFFFFF`

- **Font Size**: `14px`

- **Font Weight**: `700`

- **Padding**: `8px 12px`

- **Border Radius**: `20px`

- **Icon**: Green checkmark, margin-right `4px`

#### Tag/Label Badge

- **Background**: `#F7F7F7`

- **Text Color**: `#333333`

- **Font Size**: `12px`

- **Font Weight**: `400`

- **Padding**: `4px 8px`

- **Border Radius**: `4px`

- **Border**: `1px solid #CCCCCC`

## 5. Layout Principles

### Spacing System

**Base Unit**: `4px`

**Scale**:

- **Extra Small**: `4px` (micro-spacing between inline elements, icon padding)

- **Small**: `8px` (internal spacing, tight grouping)

- **Base**: `16px` (standard padding, form field padding, section margins)

- **Medium**: `20px` (card padding, section margins, input spacing)

- **Large**: `24px` (section gaps, container padding)

- **Extra Large**: `32px` (major section gaps, header/footer spacing)

- **XXL**: `40px` (layout breathing room, hero section padding)

- **XXXL**: `48px` (major section separation)

- **Jumbo**: `56px` (hero spacing, full-width section gaps)

- **Jumbo XL**: `152px` to `156px` (hero top/bottom margins for breathing room)

**Usage Context**:

- **Forms**: Inputs use `8px` internal padding; form groups separated by `24px` to `32px`

- **Cards**: Content padding `16px` to `20px`; card-to-card gaps `24px` to `40px`

- **Sections**: Full-width sections separated by `48px` to `56px`

- **Hero Areas**: Top/bottom padding `152px` to `156px` for visual weight

### Grid & Container

**Max Width**: `1200px` (desktop container max)

**Columns**: 12-column grid for desktop; adapts to 6-column (tablet) and 4-column (mobile)

**Gutters**: `20px` between columns (fluid padding on sides)

**Section Pattern**:

- Full-width colored/image background sections

- Inner container at `max-width: 1200px` with `margin: 0 auto`

- Padding on inner container: `40px 20px` (mobile), `56px 40px` (tablet), `56px 48px` (desktop)

**Card Grid**: 

- Desktop: 4 columns, gap `24px`

- Tablet: 2 columns, gap `20px`

- Mobile: 1 column, gap `16px`

### Whitespace Philosophy

Europcar's design system embraces **generous whitespace** as a sign of premium positioning and clarity. Ample breathing room reduces cognitive load and elevates the user experience. Hero sections feature **substantial top/bottom padding** (`152px–156px`), while interior pages maintain **consistent 24px–48px section gaps**. Form fields and cards breathe with **16px–20px internal padding**, and between major content blocks, **48px–56px gaps** create visual hierarchy without feeling cramped. This philosophy reinforces the brand's accessibility commitment and modern, confident aesthetic.

### Border Radius Scale

- **Sharp** (`0px`): Buttons, form containers, hero sections (modern, bold aesthetic)

- **Minimal** (`4px`): Badges, tags, small UI elements (subtle rounding)

- **Soft** (`5px`): Form inputs, text fields (standard form controls)

- **Medium** (`8px`): Card corners, medium components (balanced feel)

- **Large** (`10px`): Primary action buttons, prominent CTAs (approachable, tappable)

- **Full** (`50%`): Circular badges, icon buttons, avatar areas (playful accents)

### Border Widths

- **Thin** (`1px`): Input fields, subtle dividers, borders on ghost buttons, secondary borders

- **Medium** (`2px`): Focus state borders on inputs, navigation underlines, strong emphasis

- **Thick** (`3px`): Accent borders on error states, prominent dividers (rare, high priority)

**Where Applied**:

- Input borders: `1px solid #CCCCCC`

- Focus states: `2px solid #0000EE` (input outline)

- Ghost button borders: `1px solid #CCCCCC`

- Navigation active states: `2px solid #0000EE` (underline)

- Error input border: `1px solid #E70940`

## 6. Depth & Elevation

| Level | Treatment | Use |

|-------|-----------|-----|

| Flat (None) | No shadow; `box-shadow: none` | Base content, cards on light backgrounds, hero sections |

| Subtle | `rgba(0, 0, 0, 0.5) 0px 1px 2px 0px` | Dropdown menus, focus states on form inputs |

| Medium | `rgba(0, 0, 0, 0.16) 0px 3px 6px 0px` | Hover states on buttons, elevated modal backgrounds, overlays |

| Outline | `#009900 0px 0px 0px 1px` (green accent shadow) | Primary button outline, success state indicators |

| Inset | `inset 0px 1px 2px rgba(0, 0, 0, 0.1)` | Active button press, selected form inputs (optional) |

**Shadow Philosophy**: Europcar's elevation system is deliberately **minimal and functional**. Rather than heavy drop shadows, the design favors **outline shadows** (1px colored stroke) and **subtle atmospheric shadows** for focus and interaction states. This approach maintains visual clarity and modern aesthetics while signaling interactivity through color and minimal depth cues. Shadows activate on `:hover`, `:focus`, and `:active` states, never on static content.

### Opacity Levels

- **Disabled**: `0.50` (50% opacity) — Used for disabled buttons, inactive form fields, muted text

- **Hover/Secondary**: `0.93` (93% opacity) — Subtle hover state for non-interactive text, icon hover

- **Focus Overlay**: `0.96` (96% opacity) — Semi-transparent focus ring or outline background

- **Dark Overlay**: `0.99` (99% opacity) — Dark overlay on hero images for text contrast

- **Light Overlay**: `0.20` (20% opacity) — Subtle light overlay on colored backgrounds for texture

**Application**:

- Disabled button: `background: #009900; opacity: 0.50`

- Focus ring background: `rgba(0, 0, 238, 0.20)` (blue with 20% opacity)

- Dark hero overlay: `rgba(0, 0, 0, 0.99)` over background image

### Z-index / Layering

- **Base Content**: `z-index: 1` — Body text, cards, standard page elements

- **Relative Elements**: `z-index: 2` — Slightly elevated components, secondary cards

- **Dropdowns/Popovers**: `z-index: 10` to `z-index: 20` — Dropdown menus, tooltip popovers; `10` for standard, `20` for nested dropdowns

- **Sticky Elements**: `z-index: 102` (header), `z-index: 999` (floating action buttons) — Navigation bars, persistent CTAs

- **Modal / Overlay**: `z-index: 1000` — Full-screen modals, lightboxes, critical overlays

**Stacking Context**:

1. Page background (`z-index: 0`)

2. Base content (`z-index: 1–2`)

3. Dropdown menus (`z-index: 10`)

4. Nested dropdowns (`z-index: 15–20`)

5. Sticky header (`z-index: 102`)

6. Floating action buttons (`z-index: 999`)

7. Modal backdrops (`z-index: 1000`)

## 7. Do's and Don'ts

### Do

- **Do use the primary green** (`#009900`) for all primary call-to-action buttons and success states; it is instantly recognizable as Europcar's brand action color

- **Do pair the bright yellow** (`#FFDC00`) with the green for secondary or promotional CTAs; the contrast draws attention without competing

- **Do maintain minimum touch target sizes** of `44px × 44px` for all interactive elements on mobile devices

- **Do use system fonts** (`-apple-system` stack) for optimal performance and native rendering across all devices

- **Do apply substantial padding** (`14px 16px` for buttons, `16px 20px` for forms) to create comfortable, tappable surfaces

- **Do keep text input height at 56px** on mobile for comfortable thumb-based interaction; reduce to 40px on desktop if space is constrained

- **Do use `font-weight: 700`** for buttons, headings, and emphasis; maintain `400` for body copy to preserve legibility

- **Do nest interactive elements within proper `<button>` or `<a>` tags** to maintain semantic HTML and keyboard accessibility

- **Do include hover and active states** on all interactive elements; use color shifts, underlines, or shadow changes to signal state

- **Do maintain at least 1.4x line-height** for body copy (`14px` body with `20.44px` line-height) to improve readability

- **Do use the full spacing scale** (`16px`, `24px`, `32px`, `48px`) consistently; never arbitrary spacing

- **Do test color combinations** against WCAG AA contrast ratio requirements (4.5:1 for normal text, 3:1 for large text)

- **Do right-align labels** in form fields when space permits; left-align on mobile for clarity

### Don't

- **Don't use colors outside the defined palette** for primary actions; any custom color dilutes brand recognition

- **Don't create buttons smaller than 44px in height** on touch devices; this violates accessibility guidelines for touch targets

- **Don't mix system fonts** (e.g., -apple-system and Arial in body copy); use Arial only for legacy form inputs

- **Don't apply `font-weight: 400`** to buttons or navigation; use `700` for all interactive text labels

- **Don't nest buttons inside links** or vice versa; this breaks semantic HTML and keyboard navigation

- **Don't apply drop shadows** to card backgrounds; use the subtle `rgba(0, 0, 0, 0.5) 0px 1px 2px` only on hover/focus

- **Don't use color alone** to communicate state; always add visual indicators (text, icons, borders) alongside color

- **Don't set border-radius above 10px** on standard buttons (exception: badges at 20px); extreme rounding looks dated

- **Don't forget disabled states**; always style `:disabled`, `:aria-disabled`, and visual disabled indicators at 50% opacity with `#BFBFBF` text

- **Don't omit focus states**; all interactive elements must have visible `:focus` styling (outline or color change) for keyboard navigation

- **Don't use justified text alignment** on body copy; left-align for European reading direction; right-align for Arabic/Hebrew languages

- **Don't hardcode spacing values** directly in components; always reference the spacing scale (`16px`, `24px`, `32px`, etc.)

- **Don't create inputs with padding less than 8px**; this reduces clickable area and feels cramped

- **Don't apply opacity to text directly**; use the neutral gray scale instead (`#BFBFBF`, `#CCCCCC`, `#666666`)

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |

|------------|-------|-------------|

| Mobile | 320px–479px | Single-column layout, stacked navigation, `16px` gutters, full-width buttons (100%), font sizes reduced by 2–4px on labels |

| Tablet | 480px–767px | 2-column card grid, horizontal nav with hamburger fallback, `20px` gutters, section padding `32px 20px`, input height `48px` |

| Desktop | 768px–1199px | 3-column card grid, full horizontal navigation visible, `24px` gutters, section padding `48px 40px`, input height `56px` |

| Large Desktop | 1200px+ | 4-column card grid, max-width container `1200px` centered, `28px` gutters, section padding `56px 48px` |

### Touch Targets

- **Minimum Interactive Size**: `44px × 44px` (mobile and tablet)

- **Button Height**: `48px` (mobile/tablet), `48px` (desktop standard); `40px` acceptable for compact desktop layouts

- **Input Height**: `56px` (mobile/tablet), `56px` (desktop); `40px` acceptable for nested or secondary inputs

- **Link/Text Button**: `28px` minimum height with `20px` top/bottom padding

- **Icon Button**: `40px × 40px` (mobile), `36px × 36px` (desktop)

- **Spacing Between Targets**: Minimum `8px` horizontal, `12px` vertical (to prevent accidental taps)

- **Padding Around Click Area**: `8px` minimum on all sides to prevent fat-finger errors

### Collapsing Strategy

**Mobile (320px–479px)**:

- Stack all elements vertically

- Convert horizontal navigation to hamburger menu (z-index 1000)

- Full-width buttons and inputs (remove max-width constraints)

- Single-column card layouts

- Reduce hero section padding from `156px` to `80px` top/bottom

- Hide secondary navigation items; prioritize primary CTAs

- Collapse data tables into card format with horizontal scroll as fallback

- Form labels left-aligned above inputs (not inline)

**Tablet (480px–767px)**:

- 2-column layouts for card grids

- Show secondary navigation horizontally if space; fallback to hamburger

- Maintain full-width buttons but allow slight reduction in padding

- Hero sections: `120px` top/bottom padding

- Input width at ~100% container or 2-column split for related fields

- Show/hide form sections using tabs or accordions if height exceeds 4 rows

**Desktop (768px+)**:

- Restore full horizontal navigation

- 3–4 column card grids

- Hero sections: restore `156px` padding

- Form fields can be 2–3 columns in a grid layout

- Buttons return to intrinsic width (not 100%)

- Sidebars and aside content appear inline or floating

**Specific Component Adaptations**:

- **Dropdown menus**: Single-column on mobile, 2–3 columns on desktop (if content-heavy)

- **Form groups**: Stack vertically on mobile; 2-column on tablet/desktop where logical (e.g., first name + last name)

- **Data tables**: Horizontal scroll on mobile (with sticky first column); normal grid on tablet/desktop

- **Hero text**: `24px` heading on mobile, `36px` on tablet, `48px` on desktop

- **Navigation**: Hamburger menu collapses below `768px`; shows full horizontal bar above

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Success Green (`#009900`) — Primary buttons, success states, brand affirmation

- **Secondary CTA**: Bright Yellow (`#FFDC00`) — Promotional buttons, discount badges, urgency cues

- **Hyperlinks**: Electric Blue (`#0000EE`) — All text links, link states, secondary interactive elements

- **Body Text**: Pure Black (`#000000`) — All body copy, headings, high-contrast text

- **Secondary Text**: Medium Gray (`#666666`) — Helper copy, timestamps, reduced emphasis

- **Disabled/Muted**: Light Gray (`#BFBFBF`) — Disabled buttons, placeholder text, low-priority labels

- **Error/Danger**: Error Red (`#E70940`) — Error messages, validation failures, critical alerts

- **Backgrounds**: Pure White (`#FFFFFF`) — Primary surfaces; Off-White (`#F7F7F7`) for subtle variation

- **Borders**: Light Gray (`#CCCCCC`) — Input borders, dividers, secondary lines

### Iteration Guide

1. **Always default button styles to 48px height with 14px–16px font-weight 700**; use `#009900` background for primary actions, `#FFDC00` for secondary, `#FFFFFF` for tertiary. Apply `#009900 0px 0px 0px 1px` outline shadow for depth.

2. **Text inputs must be 56px tall on mobile/tablet, 40px–56px on desktop**, with `8px` left/right padding, `5px` border-radius, and `1px solid #CCCCCC` border. On focus, add `2px solid #0000EE` border and `rgba(0, 0, 238, 0.2) 0px 0px 0px 3px` shadow.

3. **All interactive elements require `:hover`, `:active`, and `:focus` states**; shift color, add underline (links), or apply subtle shadow changes. Use `#0000EE` or darker shade of primary color for hover feedback.

4. **Typography always uses `-apple-system` font stack with specific pixel values**; body copy is `14px` weight `400` with `20.44px` line-height. Headings are `700` weight with sizes: 24px (H1), 20px (H2), 16px (H3).

5. **Spacing is always from the base scale: 4px, 8px, 16px, 20px, 24px, 32px, 40px, 48px, 56px**; never arbitrary values. Form padding `16px`, section gaps `24px–48px`, hero top/bottom `152px–156px`.

6. **All text must meet WCAG AA contrast minimums**: dark text on light (`#000000` on `#FFFFFF` = 21:1 ✓), light text on dark (`#FFFFFF` on `#009900` = 7:1 ✓). Test every color combination.

7. **Cards and containers use 0px border-radius** for a modern, bold aesthetic; exceptions are form inputs (`5px`), badges (`20px`), and prominent action buttons (`10px`).

8. **Disabled state styling**: reduce opacity to `0.50`, shift text to `#BFBFBF`, set cursor `not-allowed`. Disabled buttons maintain the same height and padding as enabled versions.

9. **Mobile-first responsive approach**: design for `320px` width first, then progressively enhance for tablet (`480px–767px`) and desktop (`768px+`). Breakpoint adjustments: hero padding, card columns, input widths, font sizes.

10. **All shadows are minimal and functional**; use `rgba(0, 0, 0, 0.5) 0px 1px 2px` for dropdowns, `rgba(0, 0, 0, 0.16) 0px 3px 6px` for hover elevation. Never apply shadow to static content; only on interaction states.

11. **Form fields and buttons must include `:disabled`, `:aria-invalid`, and `:focus-visible` pseudo-classes** for full keyboard and assistive technology support. Use `outline` for focus indicators if not relying on background color.

12. **Icons should be `20px–24px` in mobile contexts, `24px–32px` on desktop**. Pair with `8px–12px` left/right margin next to text labels for visual breathing room.

Google reviews:



Bob Junker
5 star

Excellent service de chauffeur. Ponctuel et bon marché

SOHOUDJI Cégnannou Enock Lionel

Local Guide · 691 reviews · 2,924 photos

5 Star - a year ago

Belle expérience

###: Attached are the images to be used for the site: edit the image and make them very beautiful while you still maintain the car shown in the image; the background of those car photos with poor background should be changed to a beautiful graphics whle the ones with good background should be made better for great customer attraction.


Note that these photos should not be coverted to json so that it'll be able to show on any browser.


## Website Information:
Address: Godomey attrokpocodji, Godomey
Phone number/Whatsapp: 0194952847
location: 98RF+XR Godomey

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0f918cdd-0555-490e-b1dc-cd59cd1dcfc5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
