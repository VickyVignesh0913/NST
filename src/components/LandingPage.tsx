import { useState, useEffect } from 'react'
import { cn } from '../lib/utils'
import { motion } from 'framer-motion'
import {
  Play,
  ArrowRight,
  Award,
  BookOpen,
  Clock,
  FileText
} from 'lucide-react'

const siteFrame = 'mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12'
const sectionBand = 'relative overflow-hidden py-16 sm:py-20 lg:py-28'
const sectionSplit = 'grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-end'

// LINEAR DESIGN COLORS
const colors = {
  canvas: '#010102',
  surface1: '#0f1011',
  surface2: '#141516',
  hairline: '#23252a',
  hairlineStrong: '#34343a',
  accent: '#5e6ad2',
  accentHover: '#828fff',
  textPrimary: '#f7f8f8',
  textSecondary: '#d0d6e0',
  textMuted: '#8a8f98',
  textDim: '#62666d',
}


function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#courses' },
    { label: 'Results', href: '#results' },
    { label: 'Founder', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "border-b" : "border-transparent"
      )}
      style={{
        background: scrolled ? colors.surface1 : 'transparent',
        borderColor: scrolled ? colors.hairline : 'transparent'
      }}
    >
      <div className={`${siteFrame} py-4 sm:py-5`}>
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-baseline">
            <span
              className="text-xl tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif", color: colors.textPrimary, fontWeight: 600 }}
            >
              English Boss
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: scrolled ? colors.textMuted : colors.textSecondary }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
                onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? colors.textMuted : colors.textSecondary}
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Start Free Demo
          </motion.a>
        </div>
      </div>
    </nav>
  )
}


function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden" style={{ background: colors.canvas }}>
      <div className={`${siteFrame} relative z-10 grid min-h-[100dvh] gap-10 pb-16 pt-28 sm:pb-20 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-10 lg:pt-32`}>
        <div className="max-w-3xl lg:col-span-7 lg:max-w-none lg:pr-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full border px-4 py-2 text-xs uppercase tracking-wider" style={{ borderColor: colors.hairline, color: colors.textSecondary, background: colors.surface1 }}>
              Founder-led spoken English
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: colors.textPrimary, letterSpacing: '-0.03em' }}
          >
            Learn to think clearly, then speak with confidence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="mt-6 max-w-2xl text-lg leading-7"
            style={{ color: colors.textSecondary, fontFamily: "'Inter', sans-serif" }}
          >
            English Boss is built for adult learners who want more than fluency drills. A practical environment where observation, daily practice, and individual feedback come together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#courses"
              className="btn-primary inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3 text-sm font-medium"
              whileTap={{ scale: 0.98 }}
            >
              Explore programs
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              href="#inside"
              className="btn-secondary inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3 text-sm font-medium"
              whileTap={{ scale: 0.98 }}
            >
              <Play className="h-4 w-4" />
              Watch class preview
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
          className="relative lg:col-span-5 lg:self-start lg:justify-self-end"
        >
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: colors.hairline, background: colors.surface1 }}>
            <img
              src="/charles-william.png"
              alt="Mr. Charles William"
              className="h-full min-h-[28rem] w-full object-cover"
              loading="eager"
            />
            <div className="p-5" style={{ borderTop: `1px solid ${colors.hairline}` }}>
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: colors.textMuted }}>English Boss</p>
              <p className="text-base leading-6" style={{ color: colors.textSecondary }}>
                Learn to observe, organise your thoughts, and speak with clarity.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="grid gap-4 sm:grid-cols-3 lg:col-span-12"
        >
          {[
            { value: '13+ years', label: 'corporate experience' },
            { value: 'TESOL + IELTS', label: 'training background' },
            { value: '5,000+', label: 'learners guided' }
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border p-4"
              style={{ borderColor: colors.hairline, background: colors.surface1 }}
            >
              <p className="text-lg font-medium" style={{ color: colors.textPrimary }}>{item.value}</p>
              <p className="text-sm mt-1" style={{ color: colors.textMuted }}>{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function InsideClassSection() {
  const features = [
    { icon: BookOpen, title: "Picture Description", desc: "Describe real images to build natural fluency." },
    { icon: Award, title: "Daily Verb Challenge", desc: "Master one powerful verb every day." },
    { icon: Clock, title: "Real-Life Practice", desc: "Interview, travel, and office scenarios." },
  ]

  return (
    <section id="inside" className={sectionBand} style={{ background: colors.canvas }}>
      <div className={siteFrame}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="section-label">Experience</span>
            <h2 className="heading-lg mt-4 max-w-xl" style={{ color: colors.textPrimary }}>
              Inside an English Boss Class
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed" style={{ color: colors.textSecondary }}>
              Not just grammar. A complete speaking environment designed for real-world English confidence.
            </p>

            <div className="mt-8 space-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border p-4"
                  style={{ borderColor: colors.hairline, background: colors.surface1 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: colors.surface2, border: `1px solid ${colors.hairline}` }}>
                    <feature.icon className="w-5 h-5" style={{ color: colors.accent }} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: colors.textPrimary }}>{feature.title}</h4>
                    <p className="text-sm" style={{ color: colors.textMuted }}>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="card overflow-hidden rounded-xl">
              <div className="aspect-video flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${colors.surface2} 0%, ${colors.surface1} 100%)` }}>
                <div className="text-center">
                  <button
                    type="button"
                    aria-label="Play class preview"
                    className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full transition-transform hover:scale-110"
                    style={{ background: colors.accent }}
                  >
                    <Play className="w-7 h-7 fill-current text-white ml-1" />
                  </button>
                  <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>English Boss Live Session</p>
                  <p className="mt-1 text-xs" style={{ color: colors.textMuted }}>Class Preview</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium" style={{ background: colors.accent, color: '#fff' }}>
                    CW
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>Mr. Charles William</p>
                    <p className="text-xs" style={{ color: colors.textMuted }}>Founder & Trainer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


function TrustNarrativeSection() {
  const trustPoints = [
    { stat: "5,000+", label: "learners trained", detail: "Across live classes and guided practice." },
    { stat: "13+ years", label: "corporate grounding", detail: "Real workplace communication experience." },
    { stat: "Weekly", label: "assessment rhythm", detail: "Progress reports and follow-up support." },
  ]

  return (
    <section className={sectionBand} style={{ background: colors.surface1 }}>
      <div className={siteFrame}>
        <div className={sectionSplit}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Why people stay</span>
            <h2 className="mt-5 max-w-xl text-3xl leading-tight md:text-4xl" style={{ color: colors.textPrimary, fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '-0.02em' }}>
              The trust comes from method, consistency, and genuine attention.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
            className="max-w-2xl text-base leading-7 md:justify-self-end"
            style={{ color: colors.textSecondary }}
          >
            English Boss feels personal because the system keeps returning to practice, observation, and correction. Learners keep getting nudged into clearer thinking.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {trustPoints.map((point, i) => (
            <motion.article
              key={point.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border p-6"
              style={{ background: colors.surface2, borderColor: colors.hairline }}
            >
              <p className="text-sm uppercase tracking-wider" style={{ color: colors.accent }}>{point.stat}</p>
              <h3 className="mt-3 text-lg" style={{ color: colors.textPrimary, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                {point.label}
              </h3>
              <p className="mt-3 text-sm leading-6" style={{ color: colors.textMuted }}>
                {point.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


function EcosystemShowcaseSection() {
  const methodMoments = [
    {
      step: '01',
      title: 'Observe before speaking',
      body: 'Picture description and situational analysis train learners to notice detail before producing English.',
      note: 'Picture prompts slow the learner down in the right way.'
    },
    {
      step: '02',
      title: 'Generate your own content',
      body: 'Daily verb challenges help students stop depending on memorised lines and start speaking from their own thinking.',
      note: 'Daily verb work builds natural vocabulary.'
    },
    {
      step: '03',
      title: 'Get corrected with care',
      body: 'Homework review and follow-up support create the repetition that changes confidence over time.',
      note: 'Reports and follow-up classes keep the progress from fading.'
    }
  ]

  return (
    <section className={sectionBand} style={{ background: colors.canvas }}>
      <div className={siteFrame}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="section-label">The method</span>
            <h2 className="mt-5 max-w-xl text-3xl leading-tight md:text-4xl" style={{ color: colors.textPrimary, fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '-0.02em' }}>
              English Boss works by changing how learners think before how they sound.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7" style={{ color: colors.textSecondary }}>
              Built on observation, memory, structure, repetition, and individual feedback.
            </p>
          </motion.div>

          <div className="space-y-4">
            {methodMoments.map((item, i) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border p-6"
                style={{
                  background: colors.surface1,
                  borderColor: colors.hairline
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-2xl">
                    <span className="inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-wider" style={{ background: colors.surface2, color: colors.accent }}>
                      Step {item.step}
                    </span>
                    <h3 className="mt-4 text-xl leading-tight" style={{ color: colors.textPrimary, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7" style={{ color: colors.textSecondary }}>
                      {item.body}
                    </p>
                  </div>
                  <div className="rounded-lg border px-4 py-3 text-sm max-w-[200px]" style={{ borderColor: colors.hairline, background: colors.surface2, color: colors.textMuted }}>
                    {item.note}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


function ResultsArchiveSection() {
  const voices = [
    {
      name: "Leemarose",
      context: "Perspective and confidence",
      quote: "I learned to think before I speak and to approach situations with clarity rather than emotion.",
      note: "Student"
    },
    {
      name: "Jhansi R",
      context: "Method and daily transition",
      quote: "The picture description and daily verb challenge helped me observe more and speak confidently.",
      note: "Learner"
    },
    {
      name: "Arun Kumar S",
      context: "Structure in speaking",
      quote: "I began to speak confidently using my own content with a clear introduction and conclusion.",
      note: "Student"
    },
  ]

  return (
    <section id="results" className={sectionBand} style={{ background: colors.surface1 }}>
      <div className={siteFrame}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="section-label">Student voices</span>
            <h2 className="mt-5 max-w-xl text-3xl leading-tight md:text-4xl" style={{ color: colors.textPrimary, fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '-0.02em' }}>
              People describe what changed in them, not just the course.
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {voices.map((voice, i) => (
              <motion.article
                key={voice.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  "rounded-xl border p-5",
                  i === 0 ? "md:col-span-2" : ""
                )}
                style={{
                  background: colors.surface2,
                  borderColor: colors.hairline
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: colors.textMuted }}>
                      {voice.context}
                    </p>
                    <h3 className="text-lg mt-1" style={{ color: colors.textPrimary, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      {voice.name}
                    </h3>
                  </div>
                  <span className="rounded-full px-3 py-1 text-xs uppercase tracking-wider" style={{ background: colors.surface1, color: colors.textMuted }}>
                    {voice.note}
                  </span>
                </div>
                <p className="text-base leading-7" style={{ color: colors.textSecondary }}>
                  "{voice.quote}"
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LearningPathwaysSection() {
  const pathways = [
    {
      title: "Essential",
      level: "Pre A1 Live",
      duration: "30-day live format",
      body: "A grounded starting point for learners who need structure, confidence, and daily speaking rhythm.",
      anchors: ["Picture description", "Daily verb challenge", "Guided corrections"],
    },
    {
      title: "Evolution",
      level: "B1 to B2",
      duration: "Intermediate progression",
      body: "For learners who can speak a little but want stronger organisation and better expression.",
      anchors: ["Situational analysis", "Structured speaking", "Weekly assessments"],
    },
    {
      title: "Practical Spoken",
      level: "Daily life & work",
      duration: "Applied communication",
      body: "For people who want English that works in offices, interviews, and everyday interaction.",
      anchors: ["Conversation flow", "Confidence building", "Real scenarios"],
    },
    {
      title: "Phrasal Verbs",
      level: "Expression upgrade",
      duration: "Naturalness focus",
      body: "For learners ready to sound more natural and expressive in spoken English.",
      anchors: ["Natural phrasing", "Everyday expression", "Recall through use"],
    }
  ]

  return (
    <section id="courses" className={sectionBand} style={{ background: colors.canvas }}>
      <div className={siteFrame}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="section-label">Learning Pathways</span>
          <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-4xl" style={{ color: colors.textPrimary, fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '-0.02em' }}>
            Programs that follow the learner's real stage, not a generic fluency promise.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {pathways.map((pathway, i) => (
            <motion.article
              key={pathway.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border p-6"
              style={{
                background: i === 0 ? colors.surface2 : colors.surface1,
                borderColor: colors.hairline
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-wider" style={{ color: colors.textMuted }}>
                    {pathway.level}
                  </p>
                  <h3 className="mt-2 text-xl leading-tight" style={{ color: colors.textPrimary, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    {pathway.title}
                  </h3>
                </div>
                <span className="rounded-full px-3 py-1 text-xs" style={{ background: colors.surface2, color: colors.textMuted }}>
                  {pathway.duration}
                </span>
              </div>

              <p className="text-sm leading-6 mb-4" style={{ color: colors.textSecondary }}>
                {pathway.body}
              </p>

              <div className="flex flex-wrap gap-2">
                {pathway.anchors.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border px-3 py-1 text-xs"
                    style={{ borderColor: colors.hairline, color: colors.textMuted, background: colors.surface2 }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


function FounderVisionSection() {
  return (
    <section id="about" className={sectionBand} style={{ background: colors.surface1 }}>
      <div className={siteFrame}>
        <div className="grid gap-10 lg:grid-cols-[minmax(300px,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: colors.hairline }}>
              <img
                src="/charles-william.png"
                alt="Charles William"
                className="h-full w-full object-cover"
              />
              <div className="p-4" style={{ borderTop: `1px solid ${colors.hairline}`, background: colors.surface2 }}>
                <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>Charles William</p>
                <p className="text-xs mt-1" style={{ color: colors.textMuted }}>Founder & Trainer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="section-label">The founder</span>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-4xl" style={{ color: colors.textPrimary, fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '-0.02em' }}>
              Teaching spoken English as a change in thought, not performance.
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-base leading-7" style={{ color: colors.textSecondary }}>
                "Brilliant people stay silent in rooms where they should be leading. It's not lack of knowledge — it's lack of psychological safety in expression."
              </p>
              <p className="text-base leading-7" style={{ color: colors.textSecondary }}>
                "English Boss is a place where people can observe carefully, fail safely, organise thoughts, and speak with authority."
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Corporate', value: '13+ years' },
                { label: 'Training', value: 'TESOL/IELTS' },
                { label: 'Approach', value: 'Thought-led' }
              ].map((item) => (
                <div key={item.label} className="rounded-lg border p-3" style={{ borderColor: colors.hairline, background: colors.surface2 }}>
                  <p className="text-xs uppercase tracking-wider" style={{ color: colors.textMuted }}>{item.label}</p>
                  <p className="text-base mt-1" style={{ color: colors.textPrimary, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


function ContactSection() {
  return (
    <section id="contact" className={sectionBand} style={{ background: colors.canvas }}>
      <div className={siteFrame}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border p-8 sm:p-12"
          style={{ background: colors.surface1, borderColor: colors.hairline }}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <span className="section-label">Get in touch</span>
              <h2 className="mt-4 max-w-2xl text-3xl leading-tight" style={{ color: colors.textPrimary, fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '-0.02em' }}>
                Ready to start your English journey?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7" style={{ color: colors.textSecondary }}>
                Connect with us to learn more about our programs and find the right fit for you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="tel:+918610690010" className="btn-primary rounded-lg px-6 py-3 text-center text-sm font-medium">
                Call Now
              </a>
              <a href="https://wa.me/918610690010" className="btn-secondary rounded-lg px-6 py-3 text-center text-sm font-medium">
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function RefinedFooter() {
  return (
    <footer className="py-12" style={{ background: colors.surface1, borderTop: `1px solid ${colors.hairline}` }}>
      <div className={siteFrame}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium" style={{ background: colors.accent, color: '#fff' }}>E</div>
              <span className="text-lg font-semibold" style={{ color: colors.textPrimary }}>English Boss</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6" style={{ color: colors.textMuted }}>
              Founder-led spoken English with structure, warmth, and authority.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+918610690010" className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors" style={{ borderColor: colors.hairline, color: colors.textSecondary }}>
                +91 86106 90010
              </a>
              <a href="https://wa.me/918610690010" className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors" style={{ borderColor: colors.hairline, color: colors.textSecondary }}>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold mb-4" style={{ color: colors.textMuted }}>Explore</h4>
              <ul className="space-y-3 text-sm" style={{ color: colors.textSecondary }}>
                <li><a href="#courses" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#results" className="hover:text-white transition-colors">Student Voices</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Founder</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold mb-4" style={{ color: colors.textMuted }}>Method</h4>
              <ul className="space-y-3 text-sm" style={{ color: colors.textSecondary }}>
                <li>Picture description</li>
                <li>Daily verb challenge</li>
                <li>Weekly assessments</li>
                <li>Follow-up support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: colors.hairline, color: colors.textDim }}>
          <p>English Boss — Practical spoken English</p>
          <p>Founder-led for adult learners</p>
        </div>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <main className="relative overflow-x-hidden" style={{ background: colors.canvas }}>
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <InsideClassSection />
        <TrustNarrativeSection />
        <EcosystemShowcaseSection />
        <LearningPathwaysSection />
        <ResultsArchiveSection />
        <FounderVisionSection />
        <ContactSection />
        <RefinedFooter />
      </div>
    </main>
  )
}