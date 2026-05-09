# MASTER PROMPT — Project Context Switcher
# NEET → English Boss Landing Page Migration
# Original: NST (NEET Physics Coaching | Tamil Medium)
# Target: English Boss (Spoken English Mastery | English Medium)
# Reference Site: https://englishboss.akamai.net.in/
# Tech Stack: React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion

--------------------------------------------------------------------------------
## 1. PROJECT OVERVIEW
--------------------------------------------------------------------------------

This project is a single-page React + Vite landing page originally built for NST, a Tamil-medium NEET Physics coaching institute led by Dr. Sudharshan R. (MBBS). The client now wants the site repurposed for "English Boss," a spoken English mastery platform run by Mr. Charles William.

Key files to modify:
- src/components/LandingPage.tsx   (main file, 1,789 lines)
- src/styles/globals.css            (design tokens, custom classes)
- index.html                         (page title, meta)
- public/hero.png                    (hero background image)
- public/                            (other static assets if any)

--------------------------------------------------------------------------------
## 2. DESIGN SYSTEM (NEUTRAL — Reusable)
--------------------------------------------------------------------------------

### Color Tokens (from globals.css)
| Token | Value | Role |
|-------|-------|------|
| --bg-base | #f6f6f4 | Page background (warm off-white) |
| --bg-surface | #FEFDFB | Card backgrounds |
| --bg-elevated | #FAFAF7 | Elevated surfaces |
| --accent-primary | oklch(40% 0.10 145) | Primary brand color (green-teal) |
| --accent-warm | oklch(62% 0.13 50) | Warm accent (amber/orange) |
| --text-primary | oklch(14% 0.015 95) | Headlines |
| --text-secondary | oklch(40% 0.012 95) | Body text |
| --text-dim | oklch(55% 0.008 95) | Muted labels |
| --border-subtle | #ddd8d0 | Subtle borders |

### Typography
- **Headings**: 'Plus Jakarta Sans' (400–800)
- **Tamil/Bilingual**: 'Arima Madurai' (used for Tamil text on NEET site — may be repurposed)
- **General Sans**: also loaded but may be unused

### Component Classes
- .card → glassy surface, hover lift (-4px), soft shadow
- .hero-btn-primary / .hero-btn-secondary → gradient/bordered CTAs with glow
- .btn-primary / .btn-secondary → standard buttons
- .section-label → uppercase 11px muted text
- .heading-xl → clamp(32px, 5vw, 56px)

### Animation Tokens
- Scroll reveal: opacity 0→1, y: 20/30/40 → 0, duration 0.7s
- Ease curve: [0.16, 1, 0.3, 1] (cubic-bezier)
- Hover: scale 1.03, translateY -2px
- Stagger delay: 0.05–0.1s per item

--------------------------------------------------------------------------------
## 3. NEET CODEBASE — WHAT EXISTS NOW
--------------------------------------------------------------------------------

### 3.1 Brand (NEET — TO BE REPLACED)
| Element | Current Value |
|---------|---------------|
| Brand Name | NST |
| Instructor | Dr. Sudharshan R. | MBBS |
| Subject | NEET Physics |
| Target Language | Tamil Medium |
| Tagline | Physics Easy — ஆ Feel பண்ணுங்க |
| Emotional Line | Doctor ஆகும் உங்கள் பயணம் இன்றே தொடங்கட்டும் |
| CTA | Join 2027 Batch |
| Credibility | Trusted by 1000+ NEET aspirants across Tamil Nadu |
| Footer | NST | Tamil-first NEET Physics mentoring |

### 3.2 Sections (NEET — ALL NEED REPURPOSING)
1. **Navigation** — Logo "NST", links: Home, Courses, Results, About, Contact, CTA "Join 2027 Batch"
2. **Hero** — Full-width `hero.png` (physics notebook + books), headline with Tamil, dual CTAs
3. **YouTube Authority** — 4 NEET Physics videos, "1L+ Subscribers", "150+ Strategy Sessions", "Tamil Medium First"
4. **Inside a Real NST Class** — "Tamil Explanation", "Exam Pattern Focus", "Shortcut Techniques"
5. **Programs (Pricing)** — NST ELITE (₹14,999), NST FLEXI (₹11,999), NPTS (₹2,999), Boot Camp (₹249)
6. **Results** — Student scorecards: Vetrivel 176/180, Ashwini 690, Santhosh 180/180. Case study: 40→165
7. **Method** — 4 steps: Concept First → Pattern Recognition → Mock Pressure → 1-on-1 Mentoring
8. **Comparison Table** — NST vs Others (Tamil Explanation, Personal Mentorship, Prediction Accuracy, Doctor Faculty, Affordable Pricing)
9. **Testimonials** — 4 student result stories with quotes
10. **About (The Mentor)** — Dr. Sudharshan R. profile, NEET rank 1207, 1000+ students, 30+ predicted MCQs
11. **CTA Section** — Contact form (name, phone, class, score, message) + phone/WhatsApp buttons. Netlify form integration.
12. **Footer** — Links, YouTube/WhatsApp/Call icons, "2026 NEET Strategies Tamil"
13. **StickyMobileCTA** — "Call Now" / "Join Now" buttons

### 3.3 NEET-Specific Background
- **PhysicsLayer SVG** — Contains physics formulas (E=mc², F=ma, PV=nRT, wave motion, entropy, field shift). This ornamental layer must be removed or replaced with English/communication-themed visuals.
- **hero.png** — Image shows physics notebook with electrostatics and wave optics formulas + physics textbooks (H.C. Verma, Irodov). Must be replaced.

### 3.4 NEET Course Details
| Course | Price | Original | Discount | Features |
|--------|-------|----------|----------|----------|
| NST ELITE | ₹14,999 | ₹30,000 | 51% OFF | Live lectures, mentorship, DPT, tests, notes, 24x7 doubt |
| NST FLEXI | ₹11,999 | ₹21,000 | 43% OFF | Chapter-wise, self-paced, PDF notes, doubt support |
| NPTS | ₹2,999 | ₹5,000 | 40% OFF | Prediction tests, NEET pattern, analysis, rank predictor |
| Boot Camp | ₹249 | ₹2,000 | 88% OFF | 3-day intensive, last-minute, shortcuts, priority |

--------------------------------------------------------------------------------
## 4. ENGLISH BOSS REFERENCE DATA (Target State)
--------------------------------------------------------------------------------

### 4.1 Brand (English Boss — TO BE IMPLEMENTED)
| Element | Target Value |
|---------|--------------|
| Brand Name | English Boss |
| Instructor | Mr. Charles William |
| Subject | Spoken English |
| Target Language | English (with Tamil explanations likely) |
| Tagline | Speak English with Confidence |
| Emotional Line | Fluent English. Real Confidence. |
| CTA | Join Free Demo / Start Learning |
| Credibility | Trusted by thousands across India |
| Footer | English Boss | Practical Spoken English |

### 4.2 Navigation Structure (Reference Site)
- Home Page, Paid Courses, Free Courses, Recorded Courses, Youtube Classes, Study Material, Quick Links, Live, Test Series

### 4.3 Courses (from reference site)
| Course | Price | Original | Discount | Focus |
|--------|-------|----------|----------|-------|
| Practical Spoken English for You | ₹6,200 | ₹7,500 | 18% off | Practical spoken English |
| Essential | (inferred) | (inferred) | (inferred) | Beginner/Basic |
| Intermediate | (inferred) | (inferred) | (inferred) | Speaking skills |
| Recorded | (inferred) | (inferred) | (inferred) | Self-paced |
| Evolution | (inferred) | (inferred) | (inferred) | Advanced transformation |

### 4.4 Testimonial Themes (from reference site)
Students consistently praise:
- **Unique teaching methodology**: Picture description, daily verb challenges, translation
- **Life skills + English**: "Not just English, but life lessons"
- **Confidence building**: "I picked up confidence within three weeks"
- **Structure and organization**: "Every class was highly organized and well-planned"
- **Individual attention**: "Gave everyone individual attention"
- **Lifetime access**: "Forever access to class recordings and materials"
- **Community**: "Better community of students"
- **After-class support**: "Continued support even after the course was completed"
- **Interview & career prep**: "Tips and techniques to crack interviews"
- **Real-life application**: "Communicating with a distinguished professor"

Key testimonial phrases to integrate:
- "Unlearn the learning"
- "English is all about creativity"
- "Think before I speak"
- "Picture description exercises helped me see different perspectives"
- "Verb practice improved my grammar and imagination"
- "Now I can speak on any topic confidently without preparation"
- "I am deeply grateful to Mr. Charles for his practical and life-changing teaching"

### 4.5 Student Names/Profiles (from testimonials — use as placeholders)
- Elamathi Rajalingam (intermediate, got selected in reputed company)
- UTHESH RAGAVAN (Evolution Program, student coordinator for international workshop)
- Arun Kumar S (Intermediate, Batch 5, Oct-Dec 2025)
- Santhiya Bharathi
- Amrin Begam
- Gautham (beginner)
- Leemarose
- Dhivya
- DEVI G
- Jhansi R (Essential batch, 30-day learning)
- M.S.Hemalatha (government school, office meeting confidence)
- Mohamed Minas
- Rathika
- Vinothan Kumarasamy (joined from Switzerland)
- Bala Vijay
- Vijila Jasmine
- Malathi.P
- Bargunan Ponnusamy
- FAIZA TABASSUM N
- PRIYADARSHINI (basic + intermediate recorded)
- girithar prasath
- Pearcin Precilla (intermediate, comprehensive training)
- Tulasiamal Marayah (Malaysia)
- priyanka stephan (webinar: confusing words and metaphor)
- Sangeetha Sampath Kumar (Intermediate, professional settings)
- Thaslima
- S. M. Sabana afrin fathima
- Anitha E
- Surabhi
- Anish (beginner)
- LAKSHMI PRIYA RAMACHANDRAN (beginner)
- Janani Arumugam

### 4.6 YouTube & Social (from reference)
- **YouTube Channel**: @EnglishbossRD (http://www.youtube.com/@EnglishbossRD)
- **WhatsApp**: Phone number may be updated
- **Contact**: Likely similar (phone + WhatsApp)

### 4.7 Key Teaching Methodologies (to feature)
1. **Picture Description** — Real-life situational thinking
2. **Daily Verb Challenge** — Grammar through practice
3. **Translation** — Tamil to English context building
4. **Situational Analysis** — Real-time practical approach
5. **Idea Generation** — Creative thinking before speaking
6. **Topic-Related Speaking** — Confidence on any subject
7. **Interview Preparation** — Cracking real-world conversations
8. **Interactive Sessions** — Group discussions, peer learning

--------------------------------------------------------------------------------
## 5. SECTION-BY-SECTION MIGRATION MAP
--------------------------------------------------------------------------------

### NEET → ENGLISHBOSS SECTION MIGRATION

| # | NEET Section | English Boss Section | Change Level |
|---|-------------|----------------------|--------------|
| 1 | Navigation | Navigation | Moderate — links update, logo rebrand |
| 2 | Hero (Physics notebook) | Hero (English confidence imagery) | Major — new image, headline, subtext |
| 3 | YouTube Authority | YouTube Authority | Moderate — videos swap, stats update |
| 4 | Inside Class | Inside Class | Moderate — features swap |
| 5 | Programs | Programs | Major — course names, prices, features |
| 6 | Results (scores) | Results (testimonials/stories) | Moderate — metric swap |
| 7 | Method | Method | Moderate — 4 steps → English steps |
| 8 | Comparison Table | Comparison Table | Moderate — features swap |
| 9 | Testimonials | Testimonials | Moderate — content swap |
| 10 | About (Dr. S) | About (Mr. Charles W.) | Major — full profile swap |
| 11 | CTA | CTA | Minor — form field update |
| 12 | Footer | Footer | Minor — branding update |
| 13 | Sticky Mobile CTA | Sticky Mobile CTA | Minor — text update |

### SECTION 1: NAVIGATION
- From: `NST` logo + (R), Home, Courses, Results, About, Contact, CTA: "Join 2027 Batch"
- To: `English Boss` logo, Home, Paid Courses, Free Courses, Recorded Courses, Youtube, Study Material, Live, Test Series, CTA: "Start Free Demo" / "Join Now"

### SECTION 2: HERO
- From: `hero.png` (physics notebook), headline with Tamil, "Physics Easy — ஆ Feel பண்ணுங்க", "Doctor ஆகும் உங்கள் பயணம்", "Trusted by 1000+ NEET aspirants"
- To: NEW IMAGE needed (English learning, confident speaker, or classroom), "Speak English with Confidence", "Your journey to fluent English starts today", "Trusted by thousands across India"
- PhysicsLayer SVG → Remove or replace with abstract communication-themed SVG

### SECTION 3: YOUTUBE AUTHORITY
- From: 4 NEET Physics video IDs, "1L+ Subscribers", "150+ Strategy Sessions", "Tamil Medium First"
- To: English Boss YouTube videos (@EnglishbossRD), "Thousands of learners", "100+ Speaking Sessions", "Practical English First"

### SECTION 4: INSIDE CLASS
- From: "Tamil Explanation", "Exam Pattern Focus", "Shortcut Techniques"
- To: "Picture Description Method", "Daily Verb Challenges", "Real-Life Conversations"

### SECTION 5: PROGRAMS
- From: NST ELITE (₹14,999), NST FLEXI (₹11,999), NPTS (₹2,999), Boot Camp (₹249)
- To: Based on reference — Practical Spoken English (₹6,200), Essential (₹?), Intermediate (₹?), Recorded (₹?), Evolution (₹?)
- Features: Remove "NEET Physics", replace with "Spoken English", "Grammar Mastery", "Picture Description", "Interview Prep", "Daily Practice"

### SECTION 6: RESULTS
- From: NEET scores (176/180, 690, 180/180)
- To: Success transformations. Eg: "From hesitant to confident speaker in 40 days", "Got selected in a reputed company", "Now communicating with international professors"

### SECTION 7: METHOD
- From: Concept First → Pattern Recognition → Mock Pressure → 1-on-1 Mentoring
- To: Picture Description → Verb Mastery → Situational Speaking → Personal Feedback

### SECTION 8: COMPARISON
- From: Tamil Explanation, Personal Mentorship, Prediction Accuracy, Doctor Faculty, Affordable Pricing
- To: Picture Description Method, Personal Feedback, Real-Life Conversations, Structured Curriculum, Affordable Pricing

### SECTION 9: TESTIMONIALS
- From: 4 NEET student score stories with quotes
- To: 4 English Boss student transformation stories (use reference data above — Elamathi, UTHESH RAGAVAN, Arun Kumar S, etc.)

### SECTION 10: ABOUT
- From: Dr. Sudharshan R. profile — Government Erode Medical College, NEET 2019 Rank 1207, Self-study, 1000+ students, 30+ predicted MCQs
- To: Mr. Charles William profile — unique teaching methodology, experienced English trainer, focus on practical speaking, thousands of students across India and abroad (Switzerland, Malaysia included), known as "English Boss"

### SECTION 11: CTA
- From: "Join 2027 Batch", form with First Name, Last Name, Phone, Class (11/12/Dropper), Target NEET Score, Message
- To: "Start Your English Journey", form with First Name, Last Name, Phone, Proficiency Level (Beginner/Essential/Intermediate/Advanced), Target (Interview/General/Career), Message

### SECTION 12: FOOTER
- From: "NST | Tamil-first NEET Physics mentoring", links to YouTube (@NeetstrategiesinTamil), phone: 8610690010
- To: "English Boss | Practical Spoken English", links to YouTube (@EnglishbossRD), updated phone/WhatsApp

### SECTION 13: STICKY MOBILE CTA
- From: "Call Now" / "Join Now"
- To: "Call Now" / "Start Free Demo"

--------------------------------------------------------------------------------
## 6. IMAGE & ASSET REQUIREMENTS
--------------------------------------------------------------------------------

### Need to Replace
| Asset | Current | New |
|-------|---------|-----|
| `public/hero.png` | Physics notebook, textbooks, coffee | English-speaking confidence, classroom, or speaker imagery |
| `public/Screenshot 2026-05-01 184806.png` | Unknown | Review/replace |
| `public/Screenshot 2026-05-01 184850.png` | Unknown | Review/replace |

### Need to Add
- Student testimonial photos (or use initials as current)
- Mr. Charles William headshot/profile image for About section
- English Boss logo asset
- Course card images if needed

--------------------------------------------------------------------------------
## 7. MIGRATION PRIORITY
--------------------------------------------------------------------------------

1. **CRITICAL (Blocker for any build)**
   - Replace brand name: NST → English Boss
   - Replace instructor: Dr. Sudharshan R. → Mr. Charles William
   - Replace hero image: physics notebook → English-related imagery
   - Remove/replace PhysicsLayer SVG (physics formulas)
   - Update page title in index.html

2. **HIGH (Essential for launch)**
   - Replace all NEET Physics text with English curriculum text
   - Update course names, prices, and features
   - Replace student results with English Boss testimonials
   - Update YouTube videos to English Boss channel
   - Update About section profile
   - Update contact form fields

3. **MEDIUM (Important for polish)**
   - Replace NEET-specific testimonials with English Boss student stories
   - Update comparison table features
   - Refine teaching method steps to match English Boss methodology
   - Update pricing to match English Boss offerings

4. **LOW (Nice-to-have)**
   - Fine-tune color palette if requested (currently green-teal, could be warmer)
   - Add more course cards if English Boss has more programs
   - Enhance with additional English Boss brand assets

--------------------------------------------------------------------------------
## 8. TECHNICAL NOTES
--------------------------------------------------------------------------------

- All UI animations (Framer Motion) are built in `LandingPage.tsx` using `motion` and `AnimatePresence`
- Page is fully responsive (mobile-first Tailwind)
- Sticky bottom CTA for mobile (`StickyMobileCTA` component)
- Netlify form integration in CTA section (form name="contact", data-netlify)
- Class dropdown uses custom `ClassDropdown` component (switch to "Proficiency Level")
- `cn()` utility in `src/lib/utils.ts` for conditional class merging
- HSL color variables in Tailwind config map to CSS custom properties

--------------------------------------------------------------------------------
## 9. COPYWRITING TONE (English Boss Reference)
--------------------------------------------------------------------------------

From testimonials, the expected tone of the English Boss site should be:

- **Empowering**: "I can clearly see my improvement"
- **Personal**: "He guided me like a child"
- **Practical**: "Real-time, practical approach... methodology is very effective"
- **Life-changing**: "He has truly changed many things in my life"
- **Confident**: "Now I can speak on any topic confidently without preparation"
- **Grateful**: "I am blessed to be a student of him"
- **Community-oriented**: "Better community of students, forever access"
- **Transformative**: "Not just English, but valuable life skills"

Target tagline style: Short, punchy, action-oriented. Like the reference site's "Speak English with Confidence."

--------------------------------------------------------------------------------
## 10. CRITICAL SUCCESS METRICS FOR MIGRATION
--------------------------------------------------------------------------------

Before deployment, verify:
- [ ] No "NST" text remains anywhere
- [ ] No "NEET" text remains anywhere (unless intentional for comparison)
- [ ] No "Dr. Sudharshan" text remains
- [ ] No physics formulas in SVG or background
- [ ] Hero image is English-related (not physics notebook)
- [ ] YouTube videos point to @EnglishbossRD
- [ ] Course names/prices match English Boss offerings
- [ ] Testimonials are English Boss student stories
- [ ] About section references Mr. Charles William
- [ ] Contact form fields ask for Proficiency Level, not Class 11/12/Dropper
- [ ] Phone/WhatsApp numbers updated if different
- [ ] Footer links to correct YouTube channel
- [ ] All Tamil text reviewed (may keep some if bilingual approach, but ensure it says English-related things)

--------------------------------------------------------------------------------
END OF MASTER PROMPT
--------------------------------------------------------------------------------
