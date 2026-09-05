# 🗣️ English Boss — Marketing Site (`NST`)

The marketing site for **English Boss** — a founder-led spoken-English program
for Tamil and South-Indian adult learners, taught by Charles William.

**Live:** <https://englishboss.vercel.app>

> ⚠️ **Note on the repo name.** This repo is called `NST` for historical reasons.
> The product it ships is English Boss. The "code name" stuck around because the
> repo predates the public brand.

---

## ✨ What's in this repo

This isn't a single React app — it's a **multi-project workspace** that includes:

| Path | What it is | Stack |
|---|---|---|
| `src/` | The **active marketing site** (Vite + React + TS) | React 18 · TS · Vite · Tailwind · framer-motion · react-router |
| `fluency-platform/` | A **Next.js 16 / React 19** rewrite kept alongside the Vite app (experimental / future migration target) | Next 16 · React 19 · TS · Tailwind v4 · framer-motion · lenis |
| `PRODUCT.md` | Brand spec: users, tone, anti-references, accessibility targets | — |
| `SKILL.md` | The `impeccable` design skill instructions used to author UI work | — |
| `MASTER_PROMPT_ENGLISH_BOSS_MIGRATION.md` | Migration brief | — |
| `UI_UX_Audit_Report.md` | Design audit | — |
| `apply_decor*.cjs`, `add_decor.cjs`, `clean_decor.cjs` | Node scripts for applying visual "decor" transformations | Node |
| `.agents/`, `.claude/`, `.codex/`, `.opencode/`, `.od-skills/` | Agent-harness directories (multi-tool support) | — |
| `awesome-design-md-main/`, `taste-skill-main/` | Vendored reference repos used during design exploration | — |

---

## 🚀 Run the marketing site

The active site is in `src/`. Standard Vite workflow:

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

Deployment config is in `netlify.toml` (SPA redirect to `index.html`, Node 18 / npm 10).
The site is currently hosted on Vercel (`englishboss.vercel.app`) — both targets work.

---

## 🧪 Try the Next.js rewrite

```bash
cd fluency-platform
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
```

This sub-project keeps its own `package.json`, `next.config.ts`, `tsconfig.json`,
and per-project `AGENTS.md` / `CLAUDE.md`. Treat it as a separate package.

---

## 🗂️ Source layout (active Vite app)

```
src/
├── App.tsx                # Router + modal state
├── main.tsx               # Entry
├── vite-env.d.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── LandingPage.tsx
│   ├── LandingPage_backup.tsx
│   ├── CourseCard.tsx
│   ├── CoursePurchaseModal.tsx
│   ├── ContactModal.tsx
│   ├── TestimonialModal.tsx
│   ├── AuthModal.tsx
│   ├── ModalWrapper.tsx
│   └── motion/            # AnimatedText, SpeechPill, WordReveal
├── pages/
│   ├── PaidCoursesPage.tsx
│   ├── FreeCoursesPage.tsx
│   ├── RecordedCoursesPage.tsx
│   ├── CourseDetailPage.tsx
│   ├── PurchasesPage.tsx
│   └── StudyMaterialPage.tsx
├── hooks/
│   ├── useAuth.ts
│   └── useModalState.ts
├── data/
│   ├── courses.ts         # TypeScript source
│   ├── courses.json
│   ├── navigation.json
│   └── testimonials.json
├── lib/
│   └── utils.ts
├── styles/
│   └── globals.css
└── types/
    ├── index.ts
    └── lucide-react.d.ts   # Type shim for legacy lucide-react v1
```

---

## 🛣️ Routes

| Path | Status |
|---|---|
| `/` | Active landing page |
| `/paid-courses` | Active |
| `/free-courses` | Active |
| `/recorded-courses` | Active |
| `/courses/:id` | Active |
| `/purchases` | Active |
| `/study-material` | Active |
| `/quick-links`, `/timetable`, `/test-series` | Placeholder ("Coming Soon") |
| `/terms`, `/privacy-policy`, `/refund-policy` | Placeholder |

---

## 🎨 Brand

Read `PRODUCT.md` first — it defines users, tone, anti-references, and accessibility targets.
The TL;DR: grounded, intelligent, life-changing; founder-led; never generic coaching.

---

## 🛠️ Scripts (root level)

```bash
# Visual decor transforms (run on demand — read the file first)
node apply_decor.cjs
node add_decor.cjs
node apply_decor_2.cjs
node apply_decor_3.cjs
node clean_decor.cjs
```

These were used during design exploration to apply transformations to component
code. They're kept for reproducibility but you don't need them to run the site.

---

## ⚠️ Caveats

- `lucide-react@^1.14.0` is the **legacy 1.x** line — the active version is `0.4xx`. The
  repo ships a type shim at `src/types/lucide-react.d.ts` to paper over the missing types.
- Many "Coming Soon" placeholder routes — see the table above.
- Auth is currently a stub (`onLogin={() => {}}`). A real provider (Firebase Auth, Clerk,
  NextAuth, etc.) is needed before the gated routes (`/purchases`, `/study-material`)
  can serve real users.
- The repo is intentionally **agent-harness aware** (`.agents/`, `.claude/`, `.codex/`,
  `.opencode/`). These directories are tooling, not application code — leave them alone
  unless you know what you're changing.

---

## 👤 Author

**VickyVignesh0913** (working with the English Boss team)

---

## 📄 License

MIT — see `LICENSE`.