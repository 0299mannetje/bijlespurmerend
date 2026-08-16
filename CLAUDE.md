# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing/booking website for "Bijles Purmerend", a Dutch tutoring business. Plain HTML/CSS/vanilla JS — **no framework, no build tools, no package manager, no Node dependency**. Pages must work by opening the `.html` file directly (`file://`), which is why there is no fetch-based templating anywhere.

## Commands

There is no build, lint, or test step — there is nothing to compile. To preview locally:

```
python -m http.server 8000
```

then open `http://localhost:8000`. Or just double-click any `.html` file to open it directly in a browser. When verifying changes in a browser, prefer the local server over `file://` for pages using `fetch`/relative-path edge cases, but every current page works fine either way.

## Architecture

### No templating — header/nav/footer are copy-pasted per page

Each of the 6 top-level pages (`index.html`, `vakken.html`, `over-ons.html`, `proefles-inplannen.html`, `contact.html`, `404.html`) contains a **byte-identical** copy of the `<header class="site-header">` nav block and the `<footer class="site-footer">` block. This is intentional (fetch-based includes don't work under `file://`), but it means **any nav or footer change must be applied to all 6 files**, not just one. There is no build step to keep them in sync — check them all by hand (or with a project-wide find/replace).

There is no "Ervaringen" (reviews) page for now — it was removed until there are real customer reviews to show. The nav/footer link and the homepage teaser section are gone; `js/reviews-data.js` and `js/gallery-data.js` still exist (unused) as scaffolding for when reviews come back.

There is no standalone tarieven page — pricing lives in the "Tarieven" section (`id="tarieven"`) on `index.html`. Every page's "Tarieven" nav/footer link points to `index.html#tarieven`.

`js/main.js` marks the active nav link by comparing `location.pathname` against each `<a href>` (stripped of any `#anchor`) — it does not need per-page config.

### Design tokens live in one CSS file

All styling is in `css/style.css`, organized top-to-bottom as: CSS custom properties (`:root` — colors, spacing scale, radii) → reset → typography → layout/grid utilities → header/nav → footer → buttons/components → page-specific sections (hero, pricing table, FAQ, team cards, gallery, booking iframe) → responsive media queries. There's no CSS-in-JS or per-page stylesheet — add new component styles to the relevant section of this one file, reusing the existing `--color-*`/`--space-*` custom properties rather than hardcoding values.

Responsive breakpoints: mobile nav collapses to a hamburger (`.nav-toggle`) under 860px; grid layouts (`.grid--4`/`.grid--3`) reflow at 1024px and 640px.

### Editable content lives in small JS data files, not a CMS

`js/reviews-data.js` and `js/gallery-data.js` each export a plain array (`BIJLES_REVIEWS`, `BIJLES_GALLERY`) plus a `renderReviews()`/`renderGallery()` function that injects markup into a container `id` passed by the calling page. Both render an `.empty-state` placeholder message when the array is empty, so the site never shows broken images or a blank section before real content exists. Neither script is currently included on any page — the "Ervaringen" page and homepage teaser that used them were removed until there are real reviews. When reviews come back, edit the arrays in place — don't introduce a build step or fetch a JSON file for this.

### Booking page: Google Calendar iframe must degrade gracefully

`proefles-inplannen.html` embeds a Google Calendar **Appointment Schedule** iframe, but the iframe is not simply `src="..."`. It uses `data-src="[GOOGLE_AGENDA_EMBED_URL]"` plus a `hidden` attribute; an inline script at the bottom of the page checks whether `data-src` still contains the literal placeholder token (`[`), and if so, replaces the iframe wrapper with an `.empty-state` "coming soon" message instead of letting the browser render a broken-iframe 404. Once the real embed URL is pasted in, the script swaps it into `src` and un-hides the iframe. **Do not change this back to a plain `src="..."` iframe** — that regresses to a visibly broken embed whenever the calendar isn't configured yet. Setup steps for the business owner are documented in `GOOGLE-AGENDA-INSTRUCTIES.md`.

### Placeholder token convention

Contact/business info that isn't known yet is represented as literal bracketed tokens, used verbatim across every page's footer plus a few page-specific spots: `[TELEFOONNUMMER]`, `[EMAIL]`, `[WHATSAPP LINK]`, `[GOOGLE_BUSINESS_PROFIEL_LINK]`, `[GOOGLE_AGENDA_EMBED_URL]`. `SETUP.md` has the authoritative list of which files contain which token. Keep new placeholders (if ever needed) in this same bracketed style so they stay greppable (`grep -r "\["`).

### Content source of truth

Business facts (pricing, subjects, process, team bios) originated from the owner's `Bijles Idee (uitwerking).xlsx` and were transcribed into the HTML directly — there is no data layer connecting them. If those facts change, edit the relevant HTML page(s) by hand; there's no single source file to regenerate from.

### Deployment

Root-level static files, meant for GitHub Pages (`.nojekyll` present to disable Jekyll processing; no `docs/` subfolder). Full one-time publish steps (repo creation, git push, Pages settings) are in `SETUP.md` — there is no CI/deploy script in this repo.
