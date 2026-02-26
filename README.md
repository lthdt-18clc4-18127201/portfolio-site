## Su Pham — Personal Portfolio (Next.js + Tailwind)

This is a minimal, bold personal site for **Su Pham**, built with **Next.js (App Router)** and **Tailwind CSS**.  
It focuses on clear storytelling, strong typography, and a simple weekly newsletter signup.

- **Home**: Hero intro + newsletter signup + selected projects.
- **About**: Short bio, highlights, and a resume CTA.
- **Projects**: A 3×2 responsive grid of placeholder projects.

All content is placeholder-only and marked with `REPLACE_ME` comments where you should customize copy or wire up real backends.

---

## Running the project locally

From the project root (`su-pham-portfolio`):

```bash
npm install        # only needed the first time
npm run dev        # start dev server

# or, if you prefer:
# yarn
# yarn dev
#
# pnpm install
# pnpm dev
#
# bun install
# bun dev
```

Then open `http://localhost:3000` in your browser.

### Build and production preview

```bash
npm run build      # create an optimized production build
npm start          # run the built app locally
```

These are the same steps Vercel or most hosting providers will use under the hood.

---

## Pages and main components

- **Home** (`src/app/page.tsx`)
  - Hero headline: “Hi, I&apos;m Su Pham.”
  - Short role/intro text.
  - Newsletter signup card with the main email capture form.
  - “Selected projects” section with 3 project cards and a “View all” CTA.

- **About** (`src/app/about/page.tsx`)
  - Placeholder bio paragraph.
  - 3–4 bullet-point highlights.
  - “Download resume” button (placeholder only).

- **Projects** (`src/app/projects/page.tsx`)
  - Intro copy for the projects section.
  - 6 placeholder projects in a responsive grid.

- **Shared layout & components**
  - `src/app/layout.tsx`: Global layout, fonts, header, footer.
  - `src/components/Header.tsx`: Minimal top navigation with logo text and links.
  - `src/components/Footer.tsx`: Footer with newsletter signup, simple links, and copyright.
  - `src/components/NewsletterForm.tsx`: Reusable email capture component with client-side validation and a stubbed submit handler.
  - `src/components/ProjectCard.tsx`: Project card with a placeholder thumbnail area and CTA button.

Everywhere you see a `REPLACE_ME` comment is a safe place to plug in real content, URLs, or integrations.

---

## Design system / style guide

### Fonts

- **Headings / display**: `'Bebas Neue', 'Nunito', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Body / supporting text**: `'Nunito', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- The font CSS is loaded in `src/app/layout.tsx` via:

```html
<link
  href="https://api.fontshare.com/v2/css?f[]=nunito@400&f[]=bebas-neue@400&display=swap"
  rel="stylesheet"
/>
```

### Colors

Defined in `src/app/globals.css` and mapped into Tailwind tokens:

- **White / background**: `#FFFFFF` → `bg-background`, `text-background`
- **Black / foreground**: `#000000` → `bg-foreground`, `text-foreground`
- **Accent (violet red)**: `#C6007E` → `bg-accent`, `text-accent`, borders and focus states

Usage guidelines:

- **Accent** is reserved for:
  - Primary CTAs (e.g., buttons like “Subscribe”, “View Project”, “Download resume”).
  - Small emphasis elements (e.g., bullet dots, subtle focus rings).
- Backgrounds remain mostly **white**, with **black** text and borders for structure.

### Spacing & layout

The layout relies on Tailwind’s spacing scale (`px-6`, `py-16`, etc.) with a focus on:

- **Vertical rhythm**
  - Section padding: `py-16` / `py-20` on desktop.
  - Component spacing: `gap-6`, `gap-8`, and `space-y-4` / `space-y-6`.
- **Content width**
  - Main content widths use `max-w-3xl` / `max-w-5xl` for readable line lengths.
- **Grid**
  - Projects grid: `grid gap-8 sm:grid-cols-2 lg:grid-cols-3`.

Suggested spacing scale (rough mental model):

- XS: `4–8px` → small gaps, label spacing.
- S: `12–16px` → between text blocks.
- M: `24–32px` → between sections / cards.
- L: `40–64px` → page-level padding.

### Headings

- Home hero: `text-5xl sm:text-6xl md:text-7xl` with generous tracking.
- Section headings: `text-lg`–`text-2xl` using the display font.
- All headings are uppercase with wider letter-spacing, set globally in `globals.css`.

### Buttons

Primary CTA (e.g., “Subscribe”, “Download resume”):

- Background: `bg-accent`
- Text: `text-background`
- Shape: `rounded-full`
- Padding: `px-5/6` and `py-2.5/3`
- Typography: `text-[0.7rem]`, `font-semibold`, `uppercase`, tracking: `tracking-[0.22em]`
- Focus / hover:
  - `hover:bg-accent/90`
  - `focus-visible:ring-2 focus-visible:ring-accent`
  - `focus-visible:ring-offset-2 focus-visible:ring-offset-background`

---

## Replacing placeholder content (`REPLACE_ME`)

Search for `REPLACE_ME` in the codebase to find all customization points. Common areas:

- **Text content**
  - Hero headline, subheading, and role line (`src/app/page.tsx`).
  - About page bio, highlights, and section headings (`src/app/about/page.tsx`).
  - Projects descriptions and intro copy (`src/app/projects/page.tsx`).
  - Newsletter description and success / privacy messages (`NewsletterForm`, header/footer).

- **Links and CTAs**
  - “View Project” button in `ProjectCard` — point to a project page or external URL.
  - “Download resume” button on the About page — link to a PDF or profile.
  - Any social or footer links you add later.

- **Branding**
  - Site title and description in `src/app/layout.tsx`.
  - Header logo text (`Su Pham`) in `Header.tsx`.

---

## Newsletter form & future provider integration

### Current behavior

The newsletter form is implemented in `src/components/NewsletterForm.tsx` as a small client component:

- Accessible label and input (`type="email"`) with `aria-invalid` and `aria-describedby`.
- Basic email validation using a simple regex.
- Inline error message when validation fails.
- Stubbed async `handleSubmit` that:
  - Prevents the default form submission.
  - Simulates a short delay.
  - Shows a success message (`Thanks — we'll be in touch.`).
- A short privacy note:
  - “We only use your email for the weekly newsletter. No spam. Unsubscribe anytime.”

The form is reused:

- In the **home hero** (`idSuffix="hero"`).
- In the **footer** (`idSuffix="footer"`).

### Connecting a real newsletter provider later

When you’re ready to integrate a real provider (e.g., Mailchimp, ConvertKit, Resend, etc.):

1. **Create a serverless function / route handler**
   - Add an API route such as `src/app/api/subscribe/route.ts`.
   - In that handler, read the incoming email, validate it, and call your provider’s API.
   - Use environment variables for API keys and secrets (e.g., `NEWSLETTER_API_KEY`).

2. **Store API keys securely**
   - For local development, add them to a `.env.local` file (never commit this file).
   - For production hosting (Vercel/Netlify/etc.), add them as environment variables in the project settings.

3. **Update the client-side submit logic**
   - In `NewsletterForm`, replace the stubbed `setTimeout` with a real `fetch` call:

   ```ts
   const response = await fetch("/api/subscribe", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ email }),
   });
   ```

   - Handle success and error states based on the JSON response.

> **Important:** For security, **only call LLMs or external APIs that require secrets from server-side code or serverless functions**, never directly from the browser. That keeps your API keys private.

---

## Accessibility & keyboard support

- Semantic structure:
  - Uses `header`, `nav`, `section`, and `footer` elements.
  - Navigational regions are labeled with `aria-label` where needed.
- Forms:
  - Inputs have associated `<label>` elements.
  - Errors and success messages use `role="alert"` / `role="status"` with `aria-describedby`.
- Keyboard:
  - Buttons and links have visible focus rings using the accent color.
  - Navigation links are reachable and usable via keyboard alone.

---

## Responsive behavior

- Projects grid:
  - `1` column on small screens.
  - `2` columns on small/medium screens (`sm:grid-cols-2`).
  - `3` columns on large screens (`lg:grid-cols-3`).
- Layout:
  - The home hero stacks vertically on small screens and switches to a side-by-side layout on wider viewports.
  - Generous padding scales down slightly on smaller screens while keeping content centered.

---

## Recommended hosting options (free tiers)

You can deploy this Next.js project to any modern static / serverless host:

- **Vercel**: First-class support for Next.js, great DX, preview deployments, environment variables UI, and automatic CI/CD from GitHub/GitLab.  
  _Recommended for this starter._
- **Netlify**: Good support for Next.js and serverless functions, plus UI for environment variables and deploy previews.
- **GitHub Pages**: Best suited for static exports; requires extra configuration for Next.js and usually a build step via GitHub Actions.
- **Cloudflare Pages**: Works well for static and some SSR scenarios with the right configuration; also supports environment variables and edge functions.

### Why Vercel is recommended here

This project uses the **Next.js App Router**, which Vercel supports natively:

- Zero-config deployment from a GitHub repo.
- Automatic builds on push, with preview URLs for each branch.
- Easy environment variable management for newsletter and LLM integrations.
- Built-in image and font optimizations.

Deployment with Vercel is usually:

1. Push this project to a Git repository (GitHub, GitLab, Bitbucket).
2. Import the repo at `https://vercel.com`.
3. Confirm the root directory and build command (`npm run build`), then deploy.

After that, each push to your main branch will trigger a new deployment automatically.

