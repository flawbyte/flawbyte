# FlawByte Premium V2 Upgrade

## Direction
Elevate the existing site rather than rebuild it. Keep the FlawByte brand, purple accent, current pages, services, pricing, contact details, named projects, founder story, and user-provided statistics. Shift the experience toward a warm-white, near-black, editorial studio aesthetic with restrained lavender atmosphere, thin rules, precise grids, smaller radii, and quieter motion.

No genuine project imagery is currently stored in the site, so the portfolio will use intentionally art-directed typographic covers built only from each project’s real name, category, year, and existing description. No fabricated screenshots, metrics, results, testimonials, awards, or clients will be added.

## What will change

### Shared experience
- Rebuild the design tokens around warm white, ink, subtle lavender, FlawByte purple, and restrained project accents.
- Tighten the typography hierarchy, spacing rhythm, border treatment, button system, focus states, and motion behavior.
- Replace the current small mobile drawer with a full-screen editorial navigation.
- Refine the desktop navigation, footer, page transitions, reveal motion, reduced-motion behavior, and responsive wordmark.
- Remove excessive gradients, glow, glass effects, rounded cards, decorative blobs, bouncing, and constant floating.

### Homepage
- Keep “Building digital experiences that grow brands.” as the central message.
- Replace the current floating-stat hero claims with a unified, subtle digital-growth composition that avoids unverified performance numbers.
- Refine the client strip using the existing names only.
- Present all six services as alternating editorial rows with custom abstract compositions and direct pricing links.
- Turn “built like a product team” into a connected Discover → Define → Design → Build → Launch → Grow process plus four principles.
- Restyle the genuine statistics as a clean editorial strip.
- Add a curated portfolio preview using existing projects and restrained project-specific identities.
- Keep existing testimonials only if their wording can be treated as user-provided; remove decorative ratings and present them plainly.
- Rebuild the final CTA as a full-width near-black editorial section.

### Portfolio
- Preserve exactly: Unisol Homes, Dr. Anudeep’s Homeopathy, Vashishta 360, Dhar Fitness, Telugu Assets, Roots Dental Care, 4D Entertainers, and Alaya Home Decor.
- Remove colorful gradient tiles and invented impact, timeline, team-size, and result figures.
- Create an asymmetric gallery with one featured project, varied editorial proportions, minimal filters, and subtle hover movement.
- Replace the current generic modal with an accessible project-detail presentation containing only existing facts; omit Results where none are verified.
- Give each project a restrained visual identity while keeping the overall FlawByte system consistent.

### Services, pricing, about, and contact
- Services: retain all six offerings and capabilities, replacing generic icon-gradient panels with custom service compositions.
- Pricing: preserve every current package and price, but present them as premium studio engagements rather than a dense SaaS pricing wall.
- About: restructure the founder story into a concise manifesto—Who we are, How we think, How we work, What we build, and Why FlawByte—while preserving Kamatam Akhil’s age/start story and genuine timeline.
- Contact: use “Have something worth building?”, simplify the layout, retain genuine contact details, and add the requested project type and budget fields. Keep the form honest about its current non-delivery behavior unless a real submission service is added later.

### Legal, SEO, and quality
- Bring Privacy and Terms into the same visual system without changing their meaning.
- Give every content page unique title, description, Open Graph description/type, and Twitter card metadata.
- Verify headings, keyboard access, dialog behavior, form labels, focus visibility, contrast, and reduced motion.
- Test all routes and CTAs at representative desktop, tablet, and mobile sizes, including narrow 320–430px widths and wide desktop.

## Technical details
- Keep TanStack Start routing and the existing React/Motion stack.
- Centralize shared content and visual primitives where this prevents drift across Home, Services, and Portfolio.
- Use semantic Tailwind v4 tokens in `src/styles.css`; avoid page-level hardcoded colors.
- Use transforms and opacity for motion; remove continuous animation where it does not serve hierarchy.
- Keep route files complete and preserve existing URLs.
