# FlawByte Final Polish and Portfolio Link Upgrade

## Direction
Polish the existing premium editorial site rather than rebuilding it. Keep Manrope, warm white, near-black, charcoal, and FlawByte purple, while restoring controlled visual energy through sharper hierarchy, subtle purple atmosphere, richer hover states, smooth reveals, and purposeful motion. Preserve all existing services, pricing, founder information, statistics, testimonials, and project descriptions without inventing work or results.

## What will change

### Homepage and shared experience
- Strengthen the hero composition and CTA hierarchy while preserving “Building digital experiences that grow brands.”
- Make primary “Let’s Talk” actions open a prefilled WhatsApp conversation; keep Contact available as a full enquiry route.
- Add refined pointer movement, restrained gradient motion, service-row interaction, process progression, portfolio hover behavior, and reduced-motion fallbacks.
- Refine the navigation labels to Home, About, Services, Work, Pricing, Contact and keep the full-screen mobile menu.
- Rework the final dark CTA around “Let’s build something people remember.” with WhatsApp and Work actions.
- Add a compact, accessible floating WhatsApp button that avoids important controls.

### Portfolio and real destinations
- Add the eight exact verified project URLs to the shared project data.
- Make every portfolio card and homepage project preview open the correct external destination in a new tab with `noopener noreferrer`.
- Add a visible “View Project ↗” action to every project.
- Keep Unisol Homes visually dominant, preserve the asymmetric editorial rhythm, and enhance title, arrow, accent, and cover movement on hover.
- Keep typographic project covers because no genuine project images are present; do not fabricate screenshots.
- Retain only genuine categories and smoothly animate filter changes.

### Contact and footer
- Keep all six enquiry fields with clear client-side and server-side validation, length limits, loading, success, and error states.
- Add honeypot protection and rate limiting.
- Send enquiries securely to `flawbyte@gmail.com` through a server-side email function after Lovable Cloud is enabled and the email provider secret is configured.
- Provide “Continue on WhatsApp” after successful submission and a direct WhatsApp contact option throughout.
- Add WhatsApp to the footer and retain the giant FLAWBYTE signature without inventing social profiles.

### SEO and quality
- Use `https://flawbyte.com` for canonical and organization URLs.
- Preserve unique metadata on every content page.
- Verify all navigation, all eight project URLs, form states, keyboard access, focus visibility, reduced motion, mobile layouts from 320px upward, and desktop layouts through 1440px+.

## Technical details
- Keep TanStack Start and the current route structure.
- Extend `src/lib/site-data.ts` as the single source for project links.
- Use semantic Tailwind v4 tokens from `src/styles.css`; no raw component colors.
- Use a validated `createServerFn` for contact delivery, with server-only provider credentials and no client exposure.
- Enable Lovable Cloud before implementing server-side email functionality.
