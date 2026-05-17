import { useState, useEffect } from 'react'
import { cn } from '../lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  ArrowRight,
  Award,
  BookOpen,
  Clock,
  Phone,
  MessageCircle
} from 'lucide-react'
import { AnimatedBackground, SpeechPulse, VoiceWave } from './motion'

// CSS variable aliases - use these instead of hardcoded colors
const colors = {
  canvas: 'var(--canvas)',
  surface1: 'var(--surface-1)',
  surface2: 'var(--surface-2)',
  surface3: 'var(--surface-3)',
  border: 'var(--border)',
  borderStrong: 'var(--border-strong)',
  accent: 'var(--accent-primary)',
  accentHover: 'var(--accent-hover)',
  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  textMuted: 'var(--text-muted)',
  textDim: 'var(--text-dim)',
}

// Layout constants
const siteFrame = 'mx-auto w-full max-w-7xl px-6 sm:px-8'
const sectionPadding = 'py-16 sm:py-20 lg:py-24'

// Animation configurations
const easeOut = [0.25, 1, 0.5, 1] as const // cubic-bezier for refined, natural motion
const staggerDelay = 0.1 // 100ms between staggered items

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
}


function Navigation({ onLogin, onContact }: { onLogin?: () => void; onContact?: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        scrolled ? "border-b-2" : "border-transparent"
      )}
      style={{
        background: scrolled ? 'var(--surface-1)' : 'transparent',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className={`${siteFrame} py-4`}>
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div
              className="w-12 h-12 flex items-center justify-center text-xl font-bold"
              style={{ background: colors.accent, color: '#0a0a0a', border: `2px solid ${colors.accent}` }}
            >
              E
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "'Iowan Old Style', serif", color: colors.textPrimary }}
            >
              English Boss
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-all duration-200 hover:opacity-100"
                style={{ color: scrolled ? colors.textMuted : colors.textSecondary, opacity: 0.8 }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile menu toggle */}
          <div className="flex items-center gap-3">
            {onLogin && (
              <button
                onClick={onLogin}
                className="hidden sm:inline-flex px-4 py-2 text-sm font-mono uppercase tracking-wider border-2 transition-all"
                style={{ borderColor: colors.border, color: colors.textSecondary }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.color = colors.textPrimary }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.textSecondary }}
              >
                Login
              </button>
            )}
            {onContact ? (
              <button
                onClick={onContact}
                className="btn-primary text-sm hidden sm:inline-flex"
              >
                Start Free Demo
              </button>
            ) : (
              <motion.a
                href="#contact"
                className="btn-primary text-sm hidden sm:inline-flex"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Demo
              </motion.a>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 border"
              style={{ borderColor: colors.border, background: colors.surface1 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
                <span className="block h-0.5 rounded-full" style={{ background: colors.textSecondary }} />
                <span className="block h-0.5 rounded-full" style={{ background: colors.textSecondary }} />
                <span className="block h-0.5 rounded-full" style={{ background: colors.textSecondary }} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t-2"
              style={{ borderColor: colors.border }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-2 text-sm"
                  style={{ color: colors.textSecondary }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="btn-primary text-sm mt-4 w-full text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                Start Free Demo
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}


function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden">
      {/* Animated Background - unique speech/language themed */}
      <AnimatedBackground className="absolute inset-0">
        <div className="absolute left-[15%] top-[30%]">
          <SpeechPulse intensity="subtle" color="#e8a445" />
        </div>
        <div className="absolute right-[20%] top-[60%]">
          <SpeechPulse intensity="subtle" color="#e8a445" />
        </div>
      </AnimatedBackground>

      <div className={`${siteFrame} relative z-10 min-h-[100dvh] flex flex-col justify-center pb-16 pt-24 sm:pt-28`}>
        <div className="grid gap-10 lg:grid-cols-10 lg:items-center">
          {/* Left content - full width */}
          <div className="lg:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="badge badge-accent flex items-center gap-2">
                <VoiceWave bars={5} className="h-4" />
                Founder-led spoken English
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="heading-1"
            >
              <span className="relative">
                Learn to think clearly,
                <motion.span
                  className="absolute -right-8 top-0"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <SpeechPulse intensity="subtle" className="w-6 h-6" />
                </motion.span>
              </span>
              <br />
              then speak with confidence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="body-lg mt-5"
            >
              English Boss is built for adult learners who want more than fluency drills. A practical environment where observation, daily practice, and individual feedback come together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#courses"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore programs
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#inside"
                className="btn-secondary"
                whileHover={{ scale: 1.02, borderColor: colors.borderStrong }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-4 h-4" />
                Watch preview
              </motion.a>
            </motion.div>

            {/* Stats row - brutalist horizontal cards */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex gap-0"
            >
              {[
                { value: '13+', label: 'Years corporate' },
                { value: 'TESOL', label: 'Certified' },
                { value: '5,000+', label: 'Learners' }
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="stat-card"
                  style={{
                    borderRight: i < 2 ? `2px solid ${colors.border}` : 'none',
                    borderTop: '2px solid',
                    borderBottom: '2px solid',
                    borderLeft: i === 0 ? '2px solid' : 'none'
                  }}
                >
                  <p className="text-xl font-bold" style={{ color: colors.textPrimary }}>{item.value}</p>
                  <p className="text-xs mt-1 uppercase tracking-wider" style={{ color: colors.textMuted }}>{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          </div>
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
    <section id="inside" className={sectionPadding} style={{ background: colors.canvas }}>
      <div className={siteFrame}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left - Content - 70% */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Experience</span>
            <h2 className="heading-2 mt-4" style={{ color: colors.textPrimary }}>
              Inside an English Boss Class
            </h2>
            <p className="body-md mt-4" style={{ color: colors.textSecondary }}>
              Not just grammar. A complete speaking environment designed for real-world English confidence.
            </p>

            <div className="mt-10 space-y-0">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    borderTop: i === 0 ? `2px solid ${colors.border}` : `none`,
                    borderLeft: `2px solid ${colors.border}`,
                    borderRight: `2px solid ${colors.border}`,
                    borderBottom: i < features.length - 1 ? `none` : `2px solid ${colors.border}`,
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ background: colors.surface2, border: `2px solid ${colors.border}` }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: colors.accent }} />
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: colors.textPrimary }}>{feature.title}</h4>
                    <p className="text-sm mt-1" style={{ color: colors.textMuted }}>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Preview - 30% */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="surface-card-elevated overflow-hidden" style={{ padding: 0, border: `2px solid ${colors.border}` }}>
              <div
                className="aspect-video flex items-center justify-center relative overflow-hidden"
                style={{ background: colors.surface2 }}
              >
                <div className="text-center relative z-10">
                  <motion.button
                    type="button"
                    aria-label="Play class preview"
                    className="w-20 h-20 flex items-center justify-center"
                    style={{ background: colors.accent, border: `2px solid ${colors.accent}` }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 fill-current text-black ml-1" />
                  </motion.button>
                  <p className="mt-4 text-sm font-bold uppercase tracking-wider" style={{ color: colors.textPrimary }}>Class Preview</p>
                  <p className="text-xs mt-1" style={{ color: colors.textMuted }}>Recorded session</p>
                </div>
              </div>
              <div className="p-4" style={{ borderTop: `2px solid ${colors.border}`, background: colors.surface2 }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 flex items-center justify-center text-sm font-bold"
                    style={{ background: colors.accent, color: '#0a0a0a' }}
                  >
                    CW
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: colors.textPrimary }}>Mr. Charles William</p>
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


function TrustSection() {
  const trustPoints = [
    { stat: "5,000+", label: "learners trained", detail: "Across live classes and guided practice." },
    { stat: "13+", label: "years corporate", detail: "Real workplace communication." },
    { stat: "Weekly", label: "assessments", detail: "Progress reports and follow-up." },
  ]

  return (
    <section className={sectionPadding} style={{ background: colors.surface1 }}>
      <div className={siteFrame}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="section-label">Why people stay</span>
            <h2 className="heading-2 mt-4" style={{ color: colors.textPrimary }}>
              The trust comes from method, consistency, and genuine attention.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-md lg:col-span-5"
          >
            English Boss feels personal because the system keeps returning to practice, observation, and correction. Learners keep getting nudged into clearer thinking.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-0 sm:grid-cols-3" style={{ border: `2px solid ${colors.border}` }}>
          {trustPoints.map((point, i) => (
            <motion.article
              key={point.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="stat-card"
              style={{
                borderTop: 'none',
                borderBottom: 'none',
                borderLeft: i === 0 ? `2px solid ${colors.border}` : 'none',
                borderRight: `2px solid ${colors.border}`,
              }}
            >
              <p className="text-2xl font-bold" style={{ color: colors.accent }}>{point.stat}</p>
              <h3 className="mt-2 text-base font-bold uppercase tracking-wider" style={{ color: colors.textPrimary }}>{point.label}</h3>
              <p className="mt-2 text-sm" style={{ color: colors.textMuted }}>{point.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


function MethodSection() {
  const steps = [
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
    <section className={sectionPadding} style={{ background: colors.canvas }}>
      <div className={siteFrame}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Sticky left - 30% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <span className="section-label">The method</span>
            <h2 className="heading-2 mt-4" style={{ color: colors.textPrimary }}>
              English Boss works by changing how learners think before how they sound.
            </h2>
            <p className="body-md mt-4" style={{ color: colors.textSecondary }}>
              Built on observation, memory, structure, repetition, and individual feedback.
            </p>
          </motion.div>

          {/* Right - Steps - 70% */}
          <div className="lg:col-span-8 space-y-0">
            {steps.map((item, i) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="surface-card"
                style={{
                  borderTop: i === 0 ? `2px solid ${colors.border}` : 'none',
                  borderLeft: `2px solid ${colors.border}`,
                  borderRight: `2px solid ${colors.border}`,
                  borderBottom: i < steps.length - 1 ? 'none' : `2px solid ${colors.border}`,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <span className="badge badge-accent">Step {item.step}</span>
                    <h3 className="heading-4 mt-4" style={{ fontFamily: "'Iowan Old Style', serif" }}>{item.title}</h3>
                    <p className="body-md mt-3">{item.body}</p>
                  </div>
                  <div
                    className="sm:max-w-[200px] p-4"
                    style={{ background: colors.surface2, border: `2px solid ${colors.border}` }}
                  >
                    <p className="text-sm font-bold uppercase tracking-wider" style={{ color: colors.textMuted }}>{item.note}</p>
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


function ResultsSection() {
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
    <section id="results" className={sectionPadding} style={{ background: colors.surface1 }}>
      <div className={siteFrame}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Sticky left - 30% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <span className="section-label">Student voices</span>
            <h2 className="heading-2 mt-4" style={{ color: colors.textPrimary }}>
              People describe what changed in them, not just the course.
            </h2>
          </motion.div>

          {/* Right - Testimonials - 70% */}
          <div className="lg:col-span-8 grid gap-0 sm:grid-cols-2">
            {voices.map((voice, i) => (
              <motion.article
                key={voice.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn("testimonial-card", i === 0 ? "sm:col-span-2" : "")}
                style={{
                  border: `2px solid ${colors.border}`,
                  borderTop: i < 2 ? `2px solid ${colors.border}` : 'none',
                  borderBottom: i >= 1 ? `2px solid ${colors.border}` : 'none',
                  borderLeft: i % 2 === 0 ? `2px solid ${colors.border}` : 'none',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold" style={{ color: colors.accent }}>
                      {voice.context}
                    </p>
                    <h3 className="mt-2 text-base font-bold" style={{ color: colors.textPrimary }}>{voice.name}</h3>
                  </div>
                  <span className="badge badge-muted">{voice.note}</span>
                </div>
                <p className="text-base leading-relaxed font-medium" style={{ color: colors.textSecondary }}>
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

function ProgramsSection() {
  const programs = [
    {
      title: "Essential",
      level: "Pre A1 Live",
      duration: "30-day format",
      body: "A grounded starting point for learners who need structure, confidence, and daily speaking rhythm.",
      features: ["Picture description", "Daily verb challenge", "Guided corrections"],
      featured: true
    },
    {
      title: "Evolution",
      level: "B1 to B2",
      duration: "Intermediate",
      body: "For learners who can speak a little but want stronger organisation and better expression.",
      features: ["Situational analysis", "Structured speaking", "Weekly assessments"],
      featured: false
    },
    {
      title: "Practical Spoken",
      level: "Daily life & work",
      duration: "Applied",
      body: "For people who want English that works in offices, interviews, and everyday interaction.",
      features: ["Conversation flow", "Confidence building", "Real scenarios"],
      featured: false
    },
    {
      title: "Phrasal Verbs",
      level: "Expression upgrade",
      duration: "Naturalness",
      body: "For learners ready to sound more natural and expressive in spoken English.",
      features: ["Natural phrasing", "Everyday expression", "Recall through use"],
      featured: false
    }
  ]

  return (
    <section id="courses" className={sectionPadding} style={{ background: colors.canvas }}>
      <div className={siteFrame}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">Learning Pathways</span>
          <h2 className="heading-2 mt-4" style={{ color: colors.textPrimary }}>
            Programs that follow the learner's real stage, not a generic fluency promise.
          </h2>
        </motion.div>

        <div className="grid gap-0 sm:grid-cols-2">
          {programs.map((program, i) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn("program-card", program.featured && "program-card-featured")}
              style={{
                borderTop: i < 2 ? `2px solid ${colors.border}` : 'none',
                borderLeft: i % 2 === 0 ? `2px solid ${colors.border}` : 'none',
                borderRight: `2px solid ${colors.border}`,
                borderBottom: i >= 2 ? `2px solid ${colors.border}` : 'none',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold" style={{ color: colors.textMuted }}>{program.level}</p>
                  <h3 className="heading-4 mt-2" style={{ fontFamily: "'Iowan Old Style', serif" }}>{program.title}</h3>
                </div>
                <span className={cn("badge", program.featured ? "badge-accent" : "badge-muted")}>{program.duration}</span>
              </div>

              <p className="text-sm leading-relaxed mb-4 font-medium" style={{ color: colors.textSecondary }}>
                {program.body}
              </p>

              <div className="flex flex-wrap gap-2">
                {program.features.map((feature) => (
                  <span key={feature} className="badge badge-muted text-xs">
                    {feature}
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


function FounderSection() {
  return (
    <section id="about" className={sectionPadding} style={{ background: colors.surface1 }}>
      <div className={siteFrame}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Image - 40% */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="surface-card overflow-hidden" style={{ padding: 0, border: `2px solid ${colors.border}` }}>
              <img
                src="/charles-william.png"
                alt="Charles William - Founder and Trainer at English Boss"
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                style={{ minHeight: '450px' }}
                loading="lazy"
              />
              <div className="p-4" style={{ borderTop: `2px solid ${colors.border}`, background: colors.surface2 }}>
                <p className="text-sm font-bold" style={{ color: colors.textPrimary }}>Charles William</p>
                <p className="text-xs mt-1 uppercase tracking-widest" style={{ color: colors.textMuted }}>Founder & Trainer</p>
              </div>
            </div>
          </motion.div>

          {/* Content - 60% */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="section-label">The founder</span>
            <h2 className="heading-2 mt-4" style={{ color: colors.textPrimary }}>
              Teaching spoken English as a change in thought, not performance.
            </h2>

            <div className="mt-8 space-y-0">
              <div className="surface-card" style={{ borderLeft: `4px solid ${colors.accent}` }}>
                <p className="body-md font-medium italic">
                  "Brilliant people stay silent in rooms where they should be leading. It's not lack of knowledge, it's lack of psychological safety in expression."
                </p>
              </div>
              <div className="surface-card mt-4" style={{ borderLeft: `4px solid ${colors.borderStrong}` }}>
                <p className="body-md font-medium italic">
                  "English Boss is a place where people can observe carefully, fail safely, organise thoughts, and speak with authority."
                </p>
              </div>
            </div>

            <div className="mt-10 flex gap-0" style={{ border: `2px solid ${colors.border}` }}>
              {[
                { label: 'Corporate', value: '13+ years' },
                { label: 'Training', value: 'TESOL/IELTS' },
                { label: 'Approach', value: 'Thought-led' }
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="p-4 flex-1"
                  style={{
                    borderRight: i < 2 ? `2px solid ${colors.border}` : 'none',
                    background: colors.surface2
                  }}
                >
                  <p className="text-xs uppercase tracking-widest font-bold" style={{ color: colors.textMuted }}>{item.label}</p>
                  <p className="text-lg font-bold mt-1" style={{ color: colors.textPrimary }}>{item.value}</p>
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
    <section id="contact" className={sectionPadding} style={{ background: colors.canvas }}>
      <div className={siteFrame}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="surface-card-elevated"
          style={{ padding: '3rem', border: `2px solid ${colors.border}` }}
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="section-label">Get in touch</span>
              <h2 className="heading-2 mt-4" style={{ color: colors.textPrimary }}>
                Ready to start your English journey?
              </h2>
              <p className="body-md mt-4">
                Connect with us to learn more about our programs and find the right fit for you.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <motion.a
                href="tel:+918610690010"
                className="btn-primary text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/918610690010"
                className="btn-secondary text-center"
                whileHover={{ scale: 1.02, borderColor: colors.borderStrong }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: colors.surface1, borderTop: `2px solid ${colors.border}` }}>
      <div className={`${siteFrame} py-12`}>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 flex items-center justify-center text-lg font-bold"
style={{ background: 'var(--accent-primary)', color: '#0a0a0a', border: '2px solid var(--accent-primary)' }}
              >
                E
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "'Iowan Old Style', serif", color: colors.textPrimary }}>English Boss</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed font-medium" style={{ color: colors.textMuted }}>
              Founder-led spoken English with structure, warmth, and authority.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                href="tel:+918610690010"
                className="text-sm px-5 py-3 border-2 transition-all duration-200"
                style={{ borderColor: colors.border, color: colors.textSecondary, background: colors.surface2 }}
                whileHover={{ background: colors.surface1 }}
              >
                +91 86106 90010
              </motion.a>
              <motion.a
                href="https://wa.me/918610690010"
                className="text-sm px-5 py-3 border-2 transition-all duration-200"
                style={{ borderColor: colors.border, color: colors.textSecondary, background: colors.surface2 }}
                whileHover={{ background: colors.surface1 }}
              >
                WhatsApp
              </motion.a>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-5" style={{ color: colors.accent }}>Explore</h4>
              <ul className="space-y-3 text-sm font-medium" style={{ color: colors.textSecondary }}>
                <li><a href="#courses" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#results" className="hover:text-white transition-colors">Student Voices</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Founder</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-5" style={{ color: colors.accent }}>Method</h4>
              <ul className="space-y-3 text-sm font-medium" style={{ color: colors.textSecondary }}>
                <li>Picture description</li>
                <li>Daily verb challenge</li>
                <li>Weekly assessments</li>
                <li>Follow-up support</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between font-bold uppercase tracking-wider"
          style={{ borderTop: `2px solid ${colors.border}`, color: colors.textDim }}
        >
          <p>English Boss — Practical spoken English</p>
          <p>Founder-led for adult learners</p>
        </div>
      </div>
    </footer>
  )
}

interface LandingPageProps {
  onLogin?: () => void;
  onBuyCourse?: (course: any) => void;
  onContact?: () => void;
  onSubmitTestimonial?: () => void;
}

export default function LandingPage({ onLogin, onBuyCourse, onContact, onSubmitTestimonial }: LandingPageProps) {
  return (
    <main className="relative overflow-x-hidden" style={{ background: colors.canvas }}>
      {/* Navigation removed - using global Navbar from App.tsx */}
      <HeroSection />
      <InsideClassSection />
      <TrustSection />
      {/* MethodSection removed - combined into Trust for shorter page */}
      <ProgramsSection />
      <ResultsSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </main>
  )
}