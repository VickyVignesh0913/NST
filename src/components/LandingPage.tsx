import { useState, useEffect } from 'react'
import { cn } from '../lib/utils'
import { motion } from 'framer-motion'
import {
  Play,
  ArrowRight,
  Award,
  BookOpen,
  Clock,
  CheckCircle
} from 'lucide-react'

// LINEAR DESIGN COLORS
const colors = {
  canvas: '#010102',
  surface1: '#0f1011',
  surface2: '#141516',
  surface3: '#18191a',
  hairline: '#23252a',
  hairlineStrong: '#34343a',
  accent: '#5e6ad2',
  accentHover: '#828fff',
  textPrimary: '#f7f8f8',
  textSecondary: '#d0d6e0',
  textMuted: '#8a8f98',
  textDim: '#62666d',
}

// Spacing tokens for consistency
const sp = {
  tight: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  section: '4rem',
}

// Layout constants
const siteFrame = 'mx-auto w-full max-w-7xl px-6 sm:px-8'
const sectionPadding = 'py-16 sm:py-20 lg:py-24'


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
      <div className={`${siteFrame} py-4`}>
        <div className="flex items-center justify-between">
          <a href="#home">
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif", color: colors.textPrimary }}
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
            className="btn-primary text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
      <div className={`${siteFrame} relative z-10 min-h-[100dvh] flex flex-col justify-center pb-16 pt-24 sm:pt-28`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span
                className="badge badge-muted"
                style={{ borderColor: colors.hairline }}
              >
                Founder-led spoken English
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="heading-1"
            >
              Learn to think clearly, then speak with confidence.
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
                whileTap={{ scale: 0.98 }}
              >
                Explore programs
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#inside"
                className="btn-secondary"
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-4 h-4" />
                Watch preview
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              {[
                { value: '13+', label: 'Years corporate' },
                { value: 'TESOL', label: 'Certified' },
                { value: '5,000+', label: 'Learners' }
              ].map((item) => (
                <div
                  key={item.label}
                  className="stat-card"
                >
                  <p className="text-xl font-semibold" style={{ color: colors.textPrimary }}>{item.value}</p>
                  <p className="text-xs mt-1" style={{ color: colors.textMuted }}>{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div
              className="surface-card overflow-hidden"
              style={{ padding: 0 }}
            >
              <img
                src="/charles-william.png"
                alt="Mr. Charles William"
                className="h-full w-full object-cover"
                style={{ minHeight: '320px' }}
              />
              <div className="p-5" style={{ borderTop: `1px solid ${colors.hairline}` }}>
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: colors.textMuted }}>English Boss</p>
                <p className="text-base leading-relaxed" style={{ color: colors.textSecondary }}>
                  Learn to observe, organise your thoughts, and speak with clarity.
                </p>
              </div>
            </div>
          </motion.div>
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
          {/* Left - Content */}
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

            <div className="mt-8 space-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: colors.surface2, border: `1px solid ${colors.hairline}` }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: colors.accent }} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: colors.textPrimary }}>{feature.title}</h4>
                    <p className="text-sm mt-1" style={{ color: colors.textMuted }}>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="surface-card-elevated overflow-hidden" style={{ padding: 0 }}>
              <div
                className="aspect-video flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${colors.surface2} 0%, ${colors.surface3} 100%)` }}
              >
                <div className="text-center">
                  <button
                    type="button"
                    aria-label="Play class preview"
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                    style={{ background: colors.accent }}
                  >
                    <Play className="w-7 h-7 fill-current text-white ml-1" />
                  </button>
                  <p className="mt-4 text-sm font-medium" style={{ color: colors.textPrimary }}>Class Preview</p>
                  <p className="text-xs mt-1" style={{ color: colors.textMuted }}>Recorded session</p>
                </div>
              </div>
              <div className="p-5" style={{ borderTop: `1px solid ${colors.hairline}` }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{ background: colors.accent, color: '#fff' }}
                  >
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


function TrustSection() {
  const trustPoints = [
    { stat: "5,000+", label: "learners trained", detail: "Across live classes and guided practice." },
    { stat: "13+", label: "years corporate", detail: "Real workplace communication." },
    { stat: "Weekly", label: "assessments", detail: "Progress reports and follow-up." },
  ]

  return (
    <section className={sectionPadding} style={{ background: colors.surface1 }}>
      <div className={siteFrame}>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
            className="body-md lg:justify-self-end"
          >
            English Boss feels personal because the system keeps returning to practice, observation, and correction. Learners keep getting nudged into clearer thinking.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {trustPoints.map((point, i) => (
            <motion.article
              key={point.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="stat-card"
            >
              <p className="text-lg font-medium" style={{ color: colors.accent }}>{point.stat}</p>
              <h3 className="mt-2 text-base font-medium" style={{ color: colors.textPrimary }}>{point.label}</h3>
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
          {/* Sticky left */}
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

          {/* Right - Steps */}
          <div className="lg:col-span-8 space-y-4">
            {steps.map((item, i) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="surface-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <span className="badge badge-accent">Step {item.step}</span>
                    <h3 className="heading-4 mt-4">{item.title}</h3>
                    <p className="body-md mt-3">{item.body}</p>
                  </div>
                  <div
                    className="sm:max-w-[200px] p-4 rounded-lg"
                    style={{ background: colors.surface2, border: `1px solid ${colors.hairline}` }}
                  >
                    <p className="text-sm" style={{ color: colors.textMuted }}>{item.note}</p>
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
          {/* Sticky left */}
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

          {/* Right - Testimonials */}
          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            {voices.map((voice, i) => (
              <motion.article
                key={voice.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn("testimonial-card", i === 0 ? "sm:col-span-2" : "")}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: colors.textMuted }}>
                      {voice.context}
                    </p>
                    <h3 className="mt-2 text-base font-medium" style={{ color: colors.textPrimary }}>{voice.name}</h3>
                  </div>
                  <span className="badge badge-muted">{voice.note}</span>
                </div>
                <p className="text-base leading-relaxed" style={{ color: colors.textSecondary }}>
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
          className="mb-10"
        >
          <span className="section-label">Learning Pathways</span>
          <h2 className="heading-2 mt-4" style={{ color: colors.textPrimary }}>
            Programs that follow the learner's real stage, not a generic fluency promise.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {programs.map((program, i) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn("program-card", program.featured && "program-card-featured")}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-wider" style={{ color: colors.textMuted }}>{program.level}</p>
                  <h3 className="heading-4 mt-2">{program.title}</h3>
                </div>
                <span className="badge badge-muted">{program.duration}</span>
              </div>

              <p className="text-sm leading-relaxed mb-4" style={{ color: colors.textSecondary }}>
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
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="surface-card overflow-hidden" style={{ padding: 0 }}>
              <img
                src="/charles-william.png"
                alt="Charles William"
                className="h-full w-full object-cover"
                style={{ minHeight: '400px' }}
              />
              <div className="p-5" style={{ borderTop: `1px solid ${colors.hairline}` }}>
                <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>Charles William</p>
                <p className="text-xs mt-1" style={{ color: colors.textMuted }}>Founder & Trainer</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label">The founder</span>
            <h2 className="heading-2 mt-4" style={{ color: colors.textPrimary }}>
              Teaching spoken English as a change in thought, not performance.
            </h2>

            <div className="mt-6 space-y-4">
              <p className="body-md">
                "Brilliant people stay silent in rooms where they should be leading. It's not lack of knowledge — it's lack of psychological safety in expression."
              </p>
              <p className="body-md">
                "English Boss is a place where people can observe carefully, fail safely, organise thoughts, and speak with authority."
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { label: 'Corporate', value: '13+ years' },
                { label: 'Training', value: 'TESOL/IELTS' },
                { label: 'Approach', value: 'Thought-led' }
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-lg"
                  style={{ background: colors.surface2, border: `1px solid ${colors.hairline}` }}
                >
                  <p className="text-xs uppercase tracking-wider" style={{ color: colors.textMuted }}>{item.label}</p>
                  <p className="text-base font-medium mt-1" style={{ color: colors.textPrimary }}>{item.value}</p>
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
          style={{ padding: '3rem' }}
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">Get in touch</span>
              <h2 className="heading-2 mt-4" style={{ color: colors.textPrimary }}>
                Ready to start your English journey?
              </h2>
              <p className="body-md mt-4">
                Connect with us to learn more about our programs and find the right fit for you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="tel:+918610690010"
                className="btn-primary text-center"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/918610690010"
                className="btn-secondary text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: colors.surface1, borderTop: `1px solid ${colors.hairline}` }}>
      <div className={`${siteFrame} py-10`}>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium"
                style={{ background: colors.accent, color: '#fff' }}
              >
                E
              </div>
              <span className="text-lg font-semibold" style={{ color: colors.textPrimary }}>English Boss</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: colors.textMuted }}>
              Founder-led spoken English with structure, warmth, and authority.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+918610690010"
                className="text-sm px-4 py-2 rounded-lg border transition-colors"
                style={{ borderColor: colors.hairline, color: colors.textSecondary }}
              >
                +91 86106 90010
              </a>
              <a
                href="https://wa.me/918610690010"
                className="text-sm px-4 py-2 rounded-lg border transition-colors"
                style={{ borderColor: colors.hairline, color: colors.textSecondary }}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Links */}
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

        <div
          className="mt-10 pt-6 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: `1px solid ${colors.hairline}`, color: colors.textDim }}
        >
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
      <Navigation />
      <HeroSection />
      <InsideClassSection />
      <TrustSection />
      <MethodSection />
      <ProgramsSection />
      <ResultsSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </main>
  )
}