# Author Kit (whitelabel)
A stripped-down, unbranded AEM Edge Delivery Services base. All branding —
fonts, color palette, design tokens, typography, buttons, grid and spacing —
has been removed so the site can be re-themed from scratch. Built on the kit by
the team who brought you da.live and adobe.com.

## Blocks
Only the framework-essential blocks are included:

* `header`, `footer` — site chrome
* `columns` — multi-column layouts
* `fragment` — reusable content fragments / auto-block (`/fragments/`)
* `section-metadata` — section layout & options

Block CSS files are intentionally empty placeholders — add project styling there.
`styles/styles.css` keeps only the structural rules required for sections/blocks
to decorate without a flash of unstyled content.

## Getting started

### 1. Github
1. Use this template to make a new repo.
1. Install [AEM Code Sync](https://da.live/bot).

### 2. DA content
1. Browse to https://da.live/start.
2. Follow the steps.

### 3. Local development
1. Clone your new repo to your computer.
1. Install the AEM CLI using your terminal: `sudo npm install -g @adobe/aem-cli`
1. Start the AEM CLI: `aem up`.
1. Open the `{repo}` folder in your favorite code editor and buil something.
1. **Recommended:** Install common npm packages like linting and testing: `npm i`.

## Features

### Localization & globalization
* Language only support - Ex: en, de, hi, ja
* Region only support - Ex: en-us, en-ca, de-de, de-ch
* Hybrid support - Ex: en, en-us, de, de-ch, de-at
* Fragment-based localized 404s
* Localized Header & Footer
* Do not translate support (#_dnt)

### Flexible section authoring
* Section/block decoration machinery (grids, columns, containers) — styling is
  unstyled by default; add layout CSS in the block files
* Color scheme: light, dark

### Base content
* Images w/ retina breakpoint
* New window support
* Deep link support

### Header and footer content
* Brand - First link in header
* Main Menu - First list in header
* Actions - Last section of header
* Menu & mega menu support
* Disable header/footer via meta props

### Sidekick & pre-production
* Quick Edit
* Extensible plumbing for plugins
* Convert production links to relative

### Performance
* Extensible LCP detection

### Developer tools
* Environment detection
* Extensible logging (console, coralogix, splunk, etc.)
* Buildless reactive framework support (Lit)
* Hash utils patterns (#_blank, #_dnt, etc)
* Modern CSS scoping & nesting
* AEM Operational Telemetry

### Operations
* Cloudflare Worker reference implementation

## Patterns
### Page
A page is what holds your content. It can be styled using a metadata property called `template` which will load styles that apply to the entire page.

### Section
A section is a sub-section of your page. It can be styled using a `section-metadata` block. A section will control the layout of blocks.

### Block
Blocks are children of sections. A block adds visual context to parts of a page.

### Auto Block
An auto block is a block generated from a pre-defined piece of content. Often times from a link that matches a particular pattern. Link-based auto blocks can be helpful when additional nesting of content is required.

### Default content
Default content is content that lives outside a block.

## Design System
This is a whitelabel base — the design system (spacing/gap tokens, emphasis and
button styles, column/grid layout, color palette) has been intentionally
removed. Re-introduce design tokens in `styles/styles.css` and per-block styling
in the block CSS files. Only `light` / `dark` color schemes remain wired up.
