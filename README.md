# Neil Ghosh — Portfolio

Personal portfolio site for Neil (Suvranil) Ghosh, Frontend Engineer. Built with Next.js 16 App Router, Tailwind CSS v4, and shadcn/ui.

Covers career history, selected work, tech stack, and a contact form.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** + Radix UI primitives
- **react-icons** + lucide-react

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app starts on the `/about` route.

## Project structure

```
app/          # Pages (about, career, projects, stack)
components/
  Portfolio/  # Page-level sections (AboutSection, CareerSection, etc.)
  shared/     # Reusable components (ContactDialog)
  ui/         # shadcn/ui primitives
lib/
  stack-data.ts  # Tech stack icon/color definitions
public/assets/   # Images (headshot, hobby photos)
```
