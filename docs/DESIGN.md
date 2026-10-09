# Product Design Contract — Study Hub (`study.danialrashidi.ir`)

## Owner direction

- Owner-stated style: distinctive premium educational-product directory, editorial visual style, excellent typography, carefully composed layouts, restrained motion. Minimal and highly readable. Not a generic SaaS dashboard. No glassmorphism, no excessive gradients, no generic hero illustrations, no decorative animation without purpose.
- Owner-stated language/layout: natural Persian RTL as primary language. Welcoming to students, no institutional or professor branding.
- Owner-stated hierarchy (homepage): hero (interactive educational websites by Danial Rashidi that make difficult subjects easier) → featured courses → all-courses catalogue with lightweight search/filter → about the project (short, personal) → suggest-a-course via Telegram (no backend) → footer with creator attribution and real links.
- Owner-stated identity (exact): `دانیال رشیدی`, `imdanialrashidi.github.io`, `@imdanialrashidi`, Telegram `https://t.me/imdanialrashidi`. Include `https://danialrashidi.ir` only when appropriate. No invented social accounts.
- Owner-stated constraints: static-first Astro + TypeScript + Tailwind, no backend/database/auth/CMS/runtime API; GitHub Pages first, portable output; custom domain `study.danialrashidi.ir`; mobile-first responsive (360/390/430/768/1024/1360), accessible focus states, semantic links/buttons, contrast, reduced-motion, touch-friendly; one-entry course model (Astro Content Collections), build-time validation, only published entries public, no fabricated counts/stats.
- Agent-proposed details / unresolved choices: everything under Direction, Semantic tokens, Composition, Motion below is **proposed**, not owner-approved. Palette hex values are proposed exact shades.
- Canonical code token source: `src/styles/tokens.css` (Tailwind v4 `@theme` tokens) + `src/styles/global.css`.

## Experience brief

- Product / surface: Study Hub — a personal directory of interactive educational websites.
- Primary audience: Persian-speaking students (mobile-first) looking for friendly self-study resources.
- Single job of this surface: in under a minute, understand what the hub is and reach a course website.
- Desired user feeling before → after: lost among hard subjects → welcomed to a quiet, trustworthy study desk.
- Success signal: a visitor reaches a course website or the Telegram suggestion link without confusion.

## Brand character

- Editorial and calm, not corporate-dashboard.
- Personal and welcoming, not institutional or professorial.
- Precise and honest (no fake stats), not marketing-inflated.

## Reference calibration

| Reference / local image | Owner preference | Adopt / avoid and reason | Inspection status |
|---|---|---|---|
| Existing Danial Study visual identity (if any) | unspecified | Reuse where available; none found in repo — proceed with proposed paper/ink direction | not inspected (no assets in repo) |

## Direction

- Visual thesis: **«دفتر مطالعه» — a quiet Persian study desk.** Warm paper canvas, ink typography, library-index rules, one deep-green study accent. The page reads like a well-kept course ledger, not a startup landing page.
- Signature element: **the course index ledger** — catalogue rows set as a numbered editorial index with oversized Persian numerals, hairline rules, and marginal subject notes; the featured course rendered as a full-bleed editorial spread. (Specificity/execution scored at handoff.)
- Aesthetic risk / intentional restraint: deliberate restraint — no hero illustration, no gradient wash, no card wall. Boldness is spent on typography and the index composition only.
- What must feel familiar: a reading list / library catalogue; plain links that look like links.
- What must never look generic: SaaS hero + three feature cards + stat band. No stat band at all (no fabricated counts).

## Semantic tokens (proposed)

### Color

| Role / state | Theme | Exact value / code token | Foreground/background pair | Contrast proof |
|---|---|---|---|---|
| canvas | light | `#FAF8F1` / `--color-paper` | ink on paper | 16.5:1 measured |
| surface | light | `#FFFFFF` / `--color-surface` | ink on surface | 16.9:1 approx (white ≥ paper) |
| text | light | `#1C1917` / `--color-ink` | on paper/surface | 16.5:1 measured |
| muted text | light | `#57534E` / `--color-muted` | on paper | 7.2:1 measured |
| action / on-action | light | `#166534` / `--color-pine` + `#FFFFFF` | white on pine (buttons/links) | 7.1:1 measured |
| action hover | light | `#14532D` / `--color-pine-deep` | white on pine-deep | 9.1:1 measured |
| accent (featured markers, numerals) | light | `#92400E` / `--color-amber` | on paper, large/bold use | 6.7:1 measured |
| border / hairline | light | `#E5DDCB` / `--color-line` | decorative only | n/a (not text) |
| focus ring | light | `#166534` outline 2px + 2px offset | visible on paper | 7.5:1 approx non-text; ring observed in keyboard pass |

Dark theme: deferred (light-only launch; do not ship an untested dark mode).

### Typography

| Role | Family / fallback | Scale / weight / leading | Purpose |
|---|---|---|---|
| display | Vazirmatn (self-hosted `@fontsource/vazirmatn`), fallback `Tahoma, sans-serif` | clamp(2–3.5rem) / 800–900 / 1.25 | hero + section titles |
| body | Vazirmatn, same fallback | 1rem–1.125rem / 400–500 / 2 (Persian readability) | prose, descriptions |
| utility / data | Vazirmatn / 0.875rem / 700 for labels, tabular numerals for index numbers | eyebrows, meta, counts | index numerals, meta |

Font source: npm `@fontsource/vazirmatn` (OFL license), bundled locally — no runtime CDN dependency.

### Geometry and depth

- Spacing/rhythm: 4pt base, section rhythm 4–7rem desktop / 3rem mobile.
- Grid/content measure: `max-w-6xl` shell, prose `65ch`.
- Radius logic: restrained — `0.75rem` cards/spread, `999px` pills only for small tags.
- Border/shadow logic: 1px hairlines for structure; one soft shadow for the featured spread only; no floating-card shadows elsewhere.
- Icon/media treatment: inline SVG line icons (Lucide-style strokes), 1.5px stroke; covers optional per-course artwork, never decorative stock.

### Media and art direction

- No hero illustration. Covers are optional per-course local images; missing cover → typographic placeholder block (numeral + subject), never a broken image.
- Icon family: single stroke set, `aria-hidden` decorative or labelled when functional.
- Alt-text: covers get descriptive Persian alt from entry data; placeholder blocks are text, not images.

## Composition and responsiveness

- Desktop composition: single-column editorial flow — masthead, hero (measure-limited, right-aligned RTL), featured spread, index ledger, about (two-part prose + marginal note), suggest band, footer.
- Mobile recomposition: index rows stack (numeral → title → meta → links); filter controls become a full-width search field + horizontally scrollable subject chips; nav becomes two-row masthead, no hamburger (nothing to hide).
- Dense/long-content behavior: catalogue scales by rows, not cards; search + subject filter + live count + designed empty state.
- Supported viewports: 360, 390, 430, 768, 1024, 1360px; no horizontal overflow at any of them.
- RTL: `dir="rtl"`, `lang="fa"`; numerals Persian in prose, Latin URLs/identifiers stay `dir="ltr"` inline.

## Components and states

| Component / pattern | Variants | Required states | Reuse or change |
|---|---|---|---|
| masthead nav | desktop row / mobile two-row | default / hover / focus-visible | new |
| featured spread | single | default / hover / focus-within | new |
| index row | with/without cover | default / hover / focus-visible / filtered-out (hidden) | new |
| search + subject chips | — | default / focus / active chip (`aria-pressed`) / empty-result | new |
| Telegram CTA | band button + footer link | default / hover / focus-visible | new, real link only |
| empty states | zero published / zero filter results | static copy + suggest link | new |

Journey states: loading — n/a (static, no async); empty — designed (see above); error — 404 page + build-time validation errors; success — outbound navigation to real course/Telegram URLs; disabled — none shipped (no dead controls); permission/offline — n/a (static).

## Motion and feedback

- Orchestrated moment: none (explicit no-motion direction beyond state feedback).
- State-transition motion: color/background 150ms ease only; underline offset on links.
- Reduced-motion alternative: `@media (prefers-reduced-motion: reduce)` disables transitions; layout never depends on motion.
- Sound/haptics: none.

## Content voice (Persian, per `no-ai-slop`)

- Warm, concrete, student-to-student; name the subject and what the site helps with; no superlatives without evidence, no fake counts, no institutional titles.
- Action labels: «ورود به وب‌سایت دوره», «مشاهده جزئیات», «پیشنهاد دوره در تلگرام».
- Empty states: plain explanation + next action («هنوز دوره‌ای منتشر نشده است… پیشنهاد بده»).
- Fixtures: one draft example entry (`src/content/courses/_example-course.md`, unpublished) + documented snippet in `docs/ADDING-COURSES.md`; zero invented public courses.

## Quality budgets

- Accessibility: WCAG 2.2 AA; text ≥ 4.5:1 (3:1 large); visible focus; reflow to 320px; 200% zoom usable; `44px` touch targets for controls.
- Performance: static HTML, zero client framework; one small vanilla filter script (< 3 KB); self-hosted subset fonts; LCP target ≤ 2.5s lab on mobile fixture; no CLS (reserved media dimensions).
- Browsers: evergreen Chromium/Firefox/Safari; keyboard + touch input.

## Screen acceptance

| Flow / screen | Critical states | Viewports/locales | Visual proof |
|---|---|---|---|
| `/` homepage | full hierarchy; empty catalogue; filter fixture (preview) | 1360 + 390, fa/RTL | screenshots + snapshot |
| `/courses/[slug]` detail | published entry; 404 | 1360 + 390, fa/RTL | screenshots |
| filter interaction | query + subject + zero-result | 390, keyboard | browser exercise |

## Decisions intentionally deferred

- Dark theme; English locale; per-course search indexing beyond title/subject/tags.

## Decision log

| Date | Decision | Evidence / rationale | Revisit when |
|---|---|---|---|
| 2026-10-09 | Paper/ink/pine palette, Vazirmatn, index-ledger signature (all proposed) | Owner brief: editorial, minimal, RTL, restrained; no existing identity assets in repo | Owner supplies brand colors or identity assets |
| 2026-10-09 | Zero published courses at launch; example entry ships as draft | No verifiable course URLs found; owner forbids invented data | Owner publishes first real course entry |
| 2026-10-09 | نشان کتاب باز + بوک‌مارک کهربایی (Logo.astro، favicon.svg، apple-touch-icon.png) | پالت توکنی موجود؛ تک‌رنگ در اندازه ۱۶px خوانا | بازبینی هنگام داشتن هویت بصری رسمی |
