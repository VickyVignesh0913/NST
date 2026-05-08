import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { cn } from '../lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Check,
  X, 
  Minus, 
  ArrowRight,
  Quote,
  Phone,
  MessageCircle,
  Award,
  BookOpen,
  Clock,
  FileText,
  ChevronDown
} from 'lucide-react'

// Commercial Analytics Abstraction
const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  // Implementation for GA4, Meta Pixel, etc.
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
  console.log(`[Analytics] ${eventName}`, params);
};


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const revealTransition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'Results', href: '#results' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out backdrop-blur-md",
        scrolled ? "border-b" : "border-transparent"
      )}
      style={{
        background: scrolled ? 'var(--bg-base)' : 'transparent',
        borderColor: scrolled ? 'var(--border-subtle)' : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-baseline">
            <span
              className="text-2xl tracking-tight"
              style={{ fontFamily: "'General Sans', sans-serif", color: scrolled ? 'var(--text-primary)' : '#1a1a1a' }}
            >
              NST
            </span>
            <sup className="text-[10px] ml-0.5" style={{ color: scrolled ? 'var(--text-dim)' : '#666' }}>(R)</sup>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: scrolled ? 'var(--text-dim)' : '#333' }}
                onMouseEnter={(e) => e.currentTarget.style.color = scrolled ? 'var(--accent-primary)' : 'var(--accent-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? 'var(--text-dim)' : '#333'}
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="btn-primary btn-glow relative overflow-hidden rounded-lg px-3.5 py-2 text-xs sm:px-5 sm:text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Join 2027 Batch
          </motion.a>
        </div>
      </div>
    </nav>
  )
}

// Physics SVG Layer
// Floating Typography System (Premium Cinematic Atmosphere)

function FloatingTypography() {
  const words = ['Speak', 'Think', 'Lead', 'Express', 'Communicate']
  const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[1]">
      <div className="absolute inset-0 opacity-[0.02]">
        {words.map((word, i) => (
          <motion.span
            key={word}
            initial={{ 
              x: (i * 20 + 5) + '%', 
              y: (i * 15 + 10) + '%',
              opacity: 0 
            }}
            animate={{ 
              y: [(i * 15 + 10) + '%', (i * 15 - 5) + '%', (i * 15 + 10) + '%'],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 25 + i * 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 3
            }}
            className="absolute text-[6vw] font-bold tracking-tighter will-change-transform"
            style={{ 
              fontFamily: "'Clash Display', sans-serif",
              filter: `blur(${6 + i}px)`,
              color: 'var(--text-primary)'
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  )
}


// Cursor Glow

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const rafRef = useRef<number>()
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMove, { passive: true })

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.05
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.05
      setPos({ x: currentRef.current.x, y: currentRef.current.y })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(rafRef.current!)
    }
  }, [shouldReduceMotion])

  if (shouldReduceMotion) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 will-change-transform"
      style={{
        background: `radial-gradient(1000px circle at ${pos.x}px ${pos.y}px, oklch(40% 0.10 145 / 0.02), transparent 70%)`,
      }}
    />
  )
}


function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [overlayOpacity, setOverlayOpacity] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setOverlayOpacity(1), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const imgParallax = Math.min(scrollY * 0.3, 100)
  const contentFade = Math.min(scrollY / 400, 1)

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-base">
      <CursorGlow />
      <FloatingTypography />

      {/* Hero Image Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: \`translateY(${imgParallax}px) scale(1.02)\`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform',
        }}
      >
        <img
          src="/hero.png"
          alt="Premium English mastery training"
          className="w-full h-[110%] -mt-[5%] object-cover opacity-[0.95]"
          style={{ filter: 'contrast(1.02) saturate(0.9) brightness(1.02)' }}
          loading="eager"
        />
      </div>

      {/* Cinematic Gradient Overlay */}
      <div
        className="absolute inset-0 z-[2] transition-opacity duration-1000 ease-out"
        style={{
          opacity: overlayOpacity,
          background: 'radial-gradient(circle at 20% 50%, var(--bg-base) 0%, color-mix(in srgb, var(--bg-base) 90%, transparent) 40%, color-mix(in srgb, var(--bg-base) 10%, transparent) 100%)'
        }}
      />

      {/* Content Container */}
      <div
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-8 sm:px-12 py-24 md:py-0"
        style={{
          opacity: 1 - contentFade,
          transform: \`translateY(${scrollY * 0.1}px)\`,
          transition: 'opacity 0.2s linear, transform 0.2s linear',
        }}
      >
        <div className="w-full max-w-[640px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mb-8"
          >
            <span className="section-label">
              Premium Editorial Experience
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="heading-xl leading-[0.95] tracking-tight"
          >
            <span className="block">English Mastery</span>
            <span className="block mt-1 font-tamil font-medium text-[0.8em] opacity-90" style={{ color: 'var(--text-secondary)' }}>
              ஆங்கில பேச்சு மேலோங்க
            </span>
          </motion.h1>

          {/* Tamil Emotional Secondary Line */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-8 space-y-2"
          >
            <p className="text-2xl sm:text-3xl font-tamil leading-tight opacity-80" style={{ color: 'var(--text-secondary)' }}>
              ஆங்கிலத்தில் வெற்றி பெற
            </p>
            <p className="text-2xl sm:text-3xl font-tamil font-bold leading-tight" style={{ color: 'var(--accent-primary)' }}>
              உலகம் திறக்கும் திறவுகோல்
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="mt-8 max-w-[500px] text-lg leading-relaxed text-secondary font-english"
          >
            A high-end linguistic transition system meticulously designed for Tamil professionals and students aiming for global authority.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#courses"
              className="hero-btn-primary px-10 py-4 text-base flex items-center justify-center gap-3 group"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Batches
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            
            <motion.a
              href="#inside"
              className="hero-btn-secondary px-10 py-4 text-base flex items-center justify-center gap-3"
              whileHover={{ y: -4, background: 'var(--bg-elevated)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-4 h-4" />
              Watch Experience
            </motion.a>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            className="mt-16 pt-8 border-t border-subtle/50 flex flex-wrap gap-x-12 gap-y-6"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-primary">2,000+</span>
              <span className="text-[10px] uppercase tracking-widest text-dim font-semibold">Active Scholars</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-primary">150+</span>
              <span className="text-[10px] uppercase tracking-widest text-dim font-semibold">Digital Workshops</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-primary">98%</span>
              <span className="text-[10px] uppercase tracking-widest text-dim font-semibold">Fluency Success</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



function TrustNarrativeSection() {
  return (
    <section className="relative py-24 overflow-hidden border-y border-subtle/30" style={{ background: 'var(--bg-elevated)' }}>
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-warm/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Refined Metrics */}
          <div className="lg:col-span-3 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="text-3xl font-bold tracking-tighter text-primary">50K+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-dim font-semibold mt-1">Linguistic Scholars</div>
              <div className="w-8 h-[1px] bg-border-subtle mt-4 transition-all group-hover:w-12" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="group"
            >
              <div className="text-3xl font-bold tracking-tighter text-primary">1M+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-dim font-semibold mt-1">Speaking Sessions</div>
              <div className="w-8 h-[1px] bg-border-subtle mt-4 transition-all group-hover:w-12" />
            </motion.div>
          </div>

          {/* CENTER: Editorial Narrative Statement */}
          <div className="lg:col-span-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] font-medium tracking-tight text-primary font-english">
                Fluency is no longer a soft skill. <br />
                <span className="text-secondary italic">It shapes opportunity, confidence, and perception.</span>
              </h2>
              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="h-[1px] w-12 bg-border-subtle" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-dim font-bold">The Editorial Standard</span>
                <div className="h-[1px] w-12 bg-border-subtle" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Minimal Contextual Trust Indicators */}
          <div className="lg:col-span-3 space-y-12 lg:text-right">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="group"
            >
              <div className="text-3xl font-bold tracking-tighter text-primary">94%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-dim font-semibold mt-1">Confidence Improvement</div>
              <div className="w-8 h-[1px] bg-border-subtle mt-4 ml-auto transition-all group-hover:w-12" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="group"
            >
              <div className="text-xl font-medium tracking-tight text-secondary">PAN INDIA</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-dim font-semibold mt-1">Learner Ecosystem</div>
              <div className="w-8 h-[1px] bg-border-subtle mt-4 ml-auto transition-all group-hover:w-12" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}


function TransformationJourneySection() {
  const stages = [
    {
      title: "Hesitation",
      statement: "Confidence begins where hesitation disappears.",
      description: "The internal barrier between your thoughts and the world is the first thing we dissolve.",
      emphasis: "Break the silence."
    },
    {
      title: "Expression",
      statement: "Fluency is the bridge between thinking and being.",
      description: "Moving beyond vocabulary into the art of articulation, where your voice becomes your identity.",
      emphasis: "Find your voice."
    },
    {
      title: "Presence",
      statement: "Communication creates presence.",
      description: "It\'s not just about what you say, but how the room shifts when you speak.",
      emphasis: "Own the room."
    },
    {
      title: "Influence",
      statement: "Expression creates opportunity.",
      description: "When you speak with authority, you change how the world responds to you.",
      emphasis: "Shape perception."
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-base">
      {/* Background Evolution Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-12">
        {/* Section Header */}
        <div className="mb-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">The Transformation</span>
            <h2 className="heading-xl mt-6 max-w-2xl leading-tight">
              A journey of <br />
              <span className="text-secondary italic">psychological transition.</span>
            </h2>
          </motion.div>
        </div>

        {/* Progressive Storytelling */}
        <div className="space-y-48 sm:space-y-64">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className={`relative flex flex-col ${i % 2 === 0 ? 'lg:items-start' : 'lg:items-end'} text-center lg:text-left`}
            >
              {/* Background Word (Floating) */}
              <div className={`absolute -top-12 ${i % 2 === 0 ? '-left-8' : '-right-8'} opacity-[0.03] select-none pointer-events-none`} style={{ zIndex: -1 }}>
                <span className="text-[12vw] font-bold tracking-tighter font-english" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {stage.title}
                </span>
              </div>

              <div className={`max-w-xl ${i % 2 === 0 ? '' : 'lg:text-right'}`}>
                <div className="flex items-center gap-4 mb-6 ${i % 2 === 0 ? 'justify-center lg:justify-start' : 'justify-center lg:justify-end'}">
                  <span className="text-xs font-bold tracking-[0.3em] text-dim">0{i + 1}</span>
                  <div className="h-[1px] w-8 bg-border-subtle" />
                  <span className="text-xs font-bold tracking-[0.2em] text-accent-primary uppercase">{stage.title}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[48px] leading-[1] font-medium tracking-tight text-primary font-english">
                  {stage.statement}
                </h3>
                
                <p className="mt-8 text-lg text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0 ${i % 2 === 0 ? '' : 'lg:ml-auto'}">
                  {stage.description}
                </p>

                <motion.div 
                  className={`mt-10 flex items-center gap-3 ${i % 2 === 0 ? 'justify-center lg:justify-start' : 'justify-center lg:justify-end'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-sm font-semibold italic text-accent-primary">{stage.emphasis}</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-warm animate-pulse" />
                </motion.div>
              </div>

              {/* Connecting Line (Subtle) */}
              {i < stages.length - 1 && (
                <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-border-subtle to-transparent hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Final Aspirational Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-64 text-center border-t border-subtle/30 pt-24"
        >
          <h2 className="heading-xl tracking-tighter">
            Influence how the world <br />
            <span className="italic text-secondary">perceives you.</span>
          </h2>
          <motion.p 
            className="mt-8 text-xl text-dim font-light tracking-wide"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            A higher standard of communication.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}


function EcosystemShowcaseSection() {
  const experiences = [
    {
      title: "Guided Speaking",
      desc: "Immersive narrative environments designed to trigger natural speech patterns.",
      visual: "waveform"
    },
    {
      title: "Communication Labs",
      desc: "Simulated high-stakes scenarios to test presence, clarity, and authority.",
      visual: "panel"
    },
    {
      title: "Pronunciation Intelligence",
      desc: "Real-time acoustic analysis for refined articulation and phonetic mastery.",
      visual: "ai"
    },
    {
      title: "Interview Presence",
      desc: "Professional simulation layers focused on psychological authority and narrative control.",
      visual: "presence"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden border-t border-subtle/20" style={{ background: 'var(--bg-base)' }}>
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-primary/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent-warm/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* LEFT: Editorial Narrative */}
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">The Ecosystem</span>
              <h2 className="heading-xl mt-8 leading-[0.95] tracking-tighter">
                An environment <br />
                <span className="text-secondary italic">built for immersion.</span>
              </h2>
              <p className="mt-10 text-xl text-secondary leading-relaxed max-w-lg font-english">
                Fluency is not taught; it is cultivated. We have designed an intelligent space where communication becomes second nature.
              </p>

              <div className="mt-16 space-y-12">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="group"
                  >
                    <h4 className="text-lg font-semibold text-primary group-hover:text-accent-primary transition-colors duration-300">
                      {exp.title}
                    </h4>
                    <p className="mt-2 text-sm text-dim leading-relaxed max-w-sm">
                      {exp.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Abstract Premium Interface Compositions */}
          <div className="relative pt-12 lg:pt-0">
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto lg:ml-auto">
              
              {/* Main Abstract Panel (Guided Speaking) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 rounded-3xl overflow-hidden card border-subtle/40 shadow-2xl z-20 flex flex-col justify-between p-8"
                style={{ background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)' }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-accent-primary/20" />
                    <div className="w-2 h-2 rounded-full bg-accent-primary/20" />
                    <div className="w-2 h-2 rounded-full bg-accent-primary/20" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-dim font-bold">Active Environment</span>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center gap-12">
                  {/* Waveform Visualization */}
                  <div className="flex items-center gap-1 h-24">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [20, Math.random() * 80 + 20, 20] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                        className="w-1.5 bg-accent-primary rounded-full opacity-40"
                      />
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-medium text-secondary italic">"Refining Articulation Patterns..."</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-subtle/30 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-warm/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent-warm" />
                    </div>
                    <span className="text-[11px] font-bold tracking-widest text-primary uppercase">Narrative Mode</span>
                  </div>
                  <div className="px-3 py-1 rounded-full border border-accent-primary/20 text-[9px] font-bold text-accent-primary uppercase tracking-tighter">
                    Real-time Analysis
                  </div>
                </div>
              </motion.div>

              {/* Secondary Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-8 w-48 h-32 rounded-2xl card p-5 z-30 border-subtle/30 shadow-xl"
                style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}
              >
                <div className="flex flex-col gap-3">
                  <div className="h-2 w-1/2 bg-accent-primary/10 rounded-full" />
                  <div className="h-2 w-3/4 bg-accent-primary/5 rounded-full" />
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent-primary/20" />
                    <span className="text-[10px] font-bold text-dim uppercase">Presence Lab</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-12 -left-8 w-56 h-40 rounded-2xl card p-6 z-10 border-subtle/30 shadow-xl opacity-80"
                style={{ background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(8px)' }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-warm" />
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Communication Analytics</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 h-12 items-end">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-accent-primary/20 rounded-sm" style={{ height: (20 + i * 15) + '%' }} />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tertiary Atmospheric Glow */}
              <div className="absolute -inset-12 bg-accent-primary/5 blur-[100px] z-0 rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


function ResultsArchiveSection() {
  const archives = [
    {
      quote: "I stopped avoiding conversations. My voice finally became an extension of my thoughts.",
      author: "Aditi R.",
      role: "Software Architect",
      transformation: "Fear to Authority"
    },
    {
      quote: "The hesitation is gone. I learned how to express myself with intentional clarity.",
      author: "Rahul S.",
      role: "Product Manager",
      transformation: "Silence to Impact"
    },
    {
      quote: "Communication is no longer a barrier; it\'s my greatest advantage in every meeting.",
      author: "Meera K.",
      role: "Creative Lead",
      transformation: "Shyness to Presence"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden border-t border-subtle/10" style={{ background: 'var(--bg-base)' }}>
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="section-label">The Archive</span>
              <h2 className="heading-xl mt-6 leading-none tracking-tighter">
                Stories of <br />
                <span className="text-secondary italic">personal evolution.</span>
              </h2>
            </div>
            <div className="lg:text-right pb-2">
              <p className="text-sm text-dim max-w-xs font-english italic">
                A curated record of transformations that began with a single conversation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cinematic Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {archives.map((item, i) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
              className="flex flex-col group"
            >
              {/* Cinematic Silhouette Portrait Placeholder */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-slate-200 to-slate-300 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out opacity-80 group-hover:opacity-100">
                <div className="absolute inset-0 bg-accent-primary/5 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-1/2 h-1/2 bg-slate-400/20 blur-[60px] rounded-full" />
                </div>
                {/* Meta Indicator */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                   <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{item.transformation}</span>
                </div>
              </div>

              {/* Transformation Narrative */}
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 -top-2 text-4xl text-accent-primary/10 select-none">"</div>
                  <p className="text-xl text-primary leading-tight font-medium font-english">
                    {item.quote}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-subtle/30">
                  <h4 className="text-sm font-bold text-primary tracking-tight">{item.author}</h4>
                  <p className="text-[11px] text-dim uppercase tracking-widest mt-1 font-semibold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Archival Outcome Metrics */}
        <div className="mt-32 pt-24 border-t border-subtle/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-sm font-bold text-primary tracking-tighter">TRANSFORMATIONS</div>
              <div className="text-2xl font-light text-secondary tracking-tight italic">Thousands documented.</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-sm font-bold text-primary tracking-tighter">CONFIDENCE GAIN</div>
              <div className="text-2xl font-light text-secondary tracking-tight italic">Measured by presence.</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="text-sm font-bold text-primary tracking-tighter">INTERVIEW SUCCESS</div>
              <div className="text-2xl font-light text-secondary tracking-tight italic">Narrative authority.</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-2"
            >
              <div className="text-sm font-bold text-primary tracking-tighter">GLOBAL REACH</div>
              <div className="text-2xl font-light text-secondary tracking-tight italic">Tamil excellence.</div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}


function LearningPathwaysSection() {
  const pathways = [
    {
      title: "Presence Mastery",
      philosophy: "Speak with calm authority.",
      focus: "Executive Presence",
      size: "large"
    },
    {
      title: "Narrative Control",
      philosophy: "Master high-stakes conversations.",
      focus: "Strategic Communication",
      size: "medium"
    },
    {
      title: "Articulation Intelligence",
      philosophy: "Train articulation and clarity.",
      focus: "Phonetic Mastery",
      size: "medium"
    },
    {
      title: "Leadership Voice",
      philosophy: "Develop communication presence.",
      focus: "Influence & Impact",
      size: "small"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden border-t border-subtle/10" style={{ background: 'var(--bg-base)' }}>
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-accent-primary/5 via-transparent to-transparent opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Narrative */}
        <div className="mb-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">The Pathways</span>
            <h2 className="heading-xl mt-8 leading-[0.95] tracking-tighter max-w-3xl">
              Communication evolves through <br />
              <span className="text-secondary italic">intentional transition.</span>
            </h2>
            <p className="mt-10 text-xl text-secondary leading-relaxed max-w-lg font-english">
              Every level of communication requires a different kind of presence. Choose the discipline that aligns with your next evolution.
            </p>
          </motion.div>
        </div>

        {/* Cinematic Modular Pathway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Pathway 1: Large Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 group cursor-pointer"
          >
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden card border-subtle/30 shadow-xl transition-all duration-700 group-hover:shadow-2xl flex flex-col justify-end p-10 lg:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-warm/5 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent" />
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent-primary font-bold">{pathways[0].focus}</span>
                <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter text-primary mt-4">{pathways[0].title}</h3>
                <p className="text-xl text-secondary mt-4 italic font-english">{pathways[0].philosophy}</p>
                <div className="mt-8 flex items-center gap-4">
                   <div className="h-[1px] w-12 bg-accent-primary/30" />
                   <span className="text-[10px] uppercase tracking-widest text-dim font-bold">Immersion Depth: Advanced</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pathway 2: Medium Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-4 group cursor-pointer"
          >
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden card border-subtle/30 shadow-xl transition-all duration-700 group-hover:shadow-2xl flex flex-col justify-end p-10">
               <div className="absolute inset-0 bg-gradient-to-tr from-accent-warm/5 to-transparent opacity-40" />
               <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent-primary font-bold">{pathways[1].focus}</span>
                <h3 className="text-3xl font-bold tracking-tighter text-primary mt-4">{pathways[1].title}</h3>
                <p className="text-lg text-secondary mt-3 italic font-english">{pathways[1].philosophy}</p>
              </div>
            </div>
          </motion.div>

          {/* Pathway 3: Medium Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 group cursor-pointer"
          >
            <div className="relative h-full min-h-[350px] rounded-3xl overflow-hidden card border-subtle/30 shadow-xl transition-all duration-700 group-hover:shadow-2xl flex flex-col justify-end p-10">
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-primary/5 to-transparent opacity-40" />
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent-primary font-bold">{pathways[2].focus}</span>
                <h3 className="text-3xl font-bold tracking-tighter text-primary mt-4">{pathways[2].title}</h3>
                <p className="text-lg text-secondary mt-3 italic font-english">{pathways[2].philosophy}</p>
              </div>
            </div>
          </motion.div>

          {/* Pathway 4: Extended Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative h-full min-h-[350px] rounded-3xl overflow-hidden card border-subtle/30 shadow-xl transition-all duration-700 group-hover:shadow-2xl flex flex-col justify-end p-10 lg:p-12">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-transparent opacity-30" />
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent-primary font-bold">{pathways[3].focus}</span>
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter text-primary mt-4">{pathways[3].title}</h3>
                <p className="text-lg text-secondary mt-3 italic font-english">{pathways[3].philosophy}</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Final Path Narrative */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, delay: 0.5 }}
           className="mt-24 text-center lg:text-right"
        >
          <span className="text-sm font-medium italic text-dim">Choosing a path means committing to a higher standard.</span>
        </motion.div>

      </div>
    </section>
  )
}


function KnowledgeAuthoritySection() {
  const broadcasts = [
    {
      id: "Aq_P9_BZQZg",
      title: "The Psychology of Public Hesitation",
      category: "Broadcast 01",
      duration: "18:42"
    },
    {
      id: "H8anJmFwjQQ",
      title: "Articulation & Phonetic Precision",
      category: "Broadcast 02",
      duration: "32:15"
    },
    {
      id: "TBmdKepSgX8",
      title: "Presence in High-Stakes Environments",
      category: "Broadcast 03",
      duration: "15:28"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden border-t border-subtle/10" style={{ background: 'var(--bg-base)' }}>
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,var(--accent-primary)_0%,transparent_50%)] opacity-5" />
        {/* Subtle Scanline Texture Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Knowledge Authority</span>
            <h2 className="heading-xl mt-8 leading-[0.9] tracking-tighter">
              A cinematic <br />
              <span className="text-secondary italic">broadcast ecosystem.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
               <div className="flex items-center gap-2">
                 <span className="text-xl font-bold text-primary">1L+</span>
                 <span className="text-[10px] uppercase tracking-widest text-dim font-bold">Public Scholars</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-xl font-bold text-primary">5M+</span>
                 <span className="text-[10px] uppercase tracking-widest text-dim font-bold">Educational Reach</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Broadcast Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-pointer"
        >
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-subtle/30">
            {/* Muted Motion Preview Background */}
            <div className="absolute inset-0 bg-slate-900">
               <img 
                 src="https://img.youtube.com/vi/Aq_P9_BZQZg/maxresdefault.jpg" 
                 alt="Broadcast Preview" 
                 className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
               />
            </div>
            
            {/* Atmospheric Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div 
                 whileHover={{ scale: 1.1 }}
                 className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-500"
               >
                 <Play className="w-8 h-8 text-white ml-1 fill-white" />
               </motion.div>
            </div>

            {/* Broadcast Metadata */}
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
              <div className="max-w-xl">
                 <span className="px-3 py-1 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-[10px] font-bold text-accent-primary uppercase tracking-widest">Featured Broadcast</span>
                 <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter text-white mt-6">The Pedagogy of Presence: Why we avoid public speech.</h3>
                 <p className="text-slate-300 mt-4 text-sm font-english max-w-md italic">
                   "Communication is developed through exposure, repetition, and reflection. Your presence is shaped by what you consistently consume."
                 </p>
              </div>
              <div className="hidden lg:block text-right">
                 <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold block mb-2">Duration</span>
                 <span className="text-2xl font-light text-white italic tracking-tighter">18:42</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Media Archive Archive Layer */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {broadcasts.slice(1).map((broadcast, i) => (
            <motion.div
              key={broadcast.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-subtle/20 bg-elevated group-hover:border-accent-primary/30 transition-all duration-500">
                <img 
                  src={`https://img.youtube.com/vi/${broadcast.id}/mqdefault.jpg`} 
                  alt="Broadcast Thumbnail" 
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <span className="text-[9px] uppercase tracking-widest text-dim font-bold">{broadcast.category}</span>
                  <span className="text-[10px] text-primary/80 font-medium">{broadcast.duration}</span>
                </div>
              </div>
              <h4 className="mt-6 text-lg font-semibold text-primary leading-tight group-hover:text-accent-primary transition-colors duration-300">
                {broadcast.title}
              </h4>
            </motion.div>
          ))}

          {/* Curated Archive Narrative */}
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, delay: 0.5 }}
             className="flex flex-col justify-center p-8 rounded-2xl border border-dashed border-subtle/40"
          >
             <p className="text-sm text-dim font-english italic leading-relaxed">
               "A curated archive designed for those who aim for a higher standard of communication. Thousands learn through these public conversations."
             </p>
             <div className="mt-8 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-border-subtle" />
                <span className="text-[9px] uppercase tracking-[0.3em] text-accent-primary font-bold">Explore Archive</span>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}


function PedagogySection() {
  const pillars = [
    {
      title: "Immersion",
      statement: "Fluency develops through consistent exposure.",
      philosophy: "We create an environment where the language is not studied, but inhabited.",
      delay: 0.1
    },
    {
      title: "Repetition",
      statement: "Confidence emerges through repetition.",
      philosophy: "Neuro-linguistic patterns are forged through intentional, rhythmic practice.",
      delay: 0.2
    },
    {
      title: "Reflection",
      statement: "Expression improves through reflection.",
      philosophy: "Analyzing your own presence allows for the refinement of articulation and tone.",
      delay: 0.3
    },
    {
      title: "Presence",
      statement: "Presence is trained through conversation.",
      philosophy: "The ability to stay calm and articulate under pressure is a psychological skill.",
      delay: 0.4
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden border-t border-subtle/10" style={{ background: 'var(--bg-base)' }}>
      {/* Background Philosophical Atmosphere */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 blur-[160px] rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Philosophy Statement */}
        <div className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">The Pedagogy of Presence</span>
            <h2 className="heading-xl mt-8 leading-[1] tracking-tighter mx-auto max-w-4xl">
              Fluency is developed through <br />
              <span className="text-secondary italic">environment and intention.</span>
            </h2>
            <p className="mt-10 text-xl text-dim max-w-2xl mx-auto font-english italic">
              "We don't teach spoken English. We build the psychological and linguistic framework for authority."
            </p>
          </motion.div>
        </div>

        {/* Conceptual Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: pillar.delay }}
              className="relative group"
            >
              {/* Abstract Conceptual Visual (Ripple/Wave) */}
              <div className="absolute -left-12 top-0 w-24 h-24 opacity-[0.1] z-0">
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="w-full h-full rounded-full border-2 border-accent-primary"
                 />
                 <motion.div 
                   animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute inset-4 rounded-full border border-accent-warm"
                 />
              </div>

              <div className="relative z-10 pl-12 lg:pl-0">
                <div className="flex items-center gap-4 mb-6">
                   <span className="text-[10px] uppercase tracking-[0.4em] text-accent-primary font-bold">{pillar.title}</span>
                   <div className="h-[1px] w-12 bg-border-subtle" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter text-primary leading-tight font-english">
                  {pillar.statement}
                </h3>
                <p className="mt-8 text-lg text-secondary leading-relaxed max-w-md italic">
                  {pillar.philosophy}
                </p>
                <div className="mt-10 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                   <span className="text-[9px] uppercase tracking-widest text-dim font-bold">Linguistic Resonance</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Philosophical Anchoring */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
           className="mt-48 text-center pt-24 border-t border-subtle/20"
        >
          <h2 className="heading-xl tracking-tighter text-secondary opacity-80 italic">
            "Transformation is a reflection <br />
            of consistent exposure."
          </h2>
          <div className="mt-12 flex justify-center items-center gap-6">
             <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-border-subtle" />
             <span className="text-[10px] uppercase tracking-[0.3em] text-dim font-bold">The Editorial Standard</span>
             <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-border-subtle" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}


function EnrollmentSection() {
  const cohorts = [
    {
      title: "Presence Cohort",
      desc: "An intensive immersion into the psychology and mechanics of spoken authority.",
      meta: "Advanced Tier",
      schedule: "Q3 2027",
      cta: "Request Entry"
    },
    {
      title: "Leadership Track",
      desc: "Designed for professionals aiming for high-stakes narrative control and influence.",
      meta: "Executive Tier",
      schedule: "Q3 2027",
      cta: "Join the Track"
    },
    {
      title: "Articulation Lab",
      desc: "Focused on phonetic refinement and the physical mastery of clear expression.",
      meta: "Specialized Tier",
      schedule: "Opening Soon",
      cta: "Register Interest"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden border-t border-subtle/10" style={{ background: 'var(--bg-base)' }}>
      {/* Background Institutional Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent-primary/5 via-transparent to-transparent opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Narrative */}
        <div className="mb-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Institutional Enrollment</span>
            <h2 className="heading-xl mt-8 leading-[0.95] tracking-tighter max-w-3xl">
              Transformation begins through <br />
              <span className="text-secondary italic">consistent participation.</span>
            </h2>
            <p className="mt-10 text-xl text-secondary leading-relaxed max-w-xl font-english italic">
              Enrollment is an intentional commitment to a higher standard of presence. Choose your environment carefully.
            </p>
          </motion.div>
        </div>

        {/* Enrollment Modular Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Presence Cohort (Dominant) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 group"
          >
            <div className="relative h-full rounded-3xl overflow-hidden card border-subtle/40 shadow-2xl transition-all duration-700 flex flex-col justify-between p-10 lg:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-40" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start">
                   <div className="flex flex-col gap-2">
                     <span className="text-[10px] uppercase tracking-[0.4em] text-accent-primary font-bold">{cohorts[0].meta}</span>
                     <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter text-primary">{cohorts[0].title}</h3>
                   </div>
                   <div className="px-4 py-1.5 rounded-full border border-subtle/50 text-[10px] font-bold text-dim uppercase tracking-widest">
                     {cohorts[0].schedule}
                   </div>
                </div>
                
                <p className="mt-8 text-xl text-secondary leading-relaxed max-w-lg font-english italic">
                  {cohorts[0].desc}
                </p>

                <div className="mt-auto pt-16 flex flex-wrap items-center gap-12">
                   <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-widest text-dim font-bold">Status</span>
                      <span className="text-sm font-semibold text-primary">Applications Open</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-widest text-dim font-bold">Immersion</span>
                      <span className="text-sm font-semibold text-primary">Deep Focus</span>
                   </div>
                   <motion.button
                     whileHover={{ scale: 1.02, y: -2 }}
                     whileTap={{ scale: 0.98 }}
                     className="ml-auto px-10 py-4 rounded-xl bg-primary text-background text-sm font-bold tracking-tight shadow-lg shadow-primary/10 transition-all group-hover:bg-accent-primary"
                   >
                     {cohorts[0].cta}
                   </motion.button onClick={() => handleEnrollment("presence-cohort")}>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Cohorts */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {cohorts.slice(1).map((cohort, i) => (
              <motion.div
                key={cohort.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 + (i * 0.1) }}
                className="flex-1 group"
              >
                <div className="relative h-full rounded-3xl overflow-hidden card border-subtle/30 shadow-xl transition-all duration-700 flex flex-col justify-between p-8">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-warm/5 to-transparent opacity-30" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-accent-primary font-bold">{cohort.meta}</span>
                      <span className="text-[9px] font-bold text-dim">{cohort.schedule}</span>
                    </div>
                    <h4 className="text-2xl font-bold tracking-tighter text-primary">{cohort.title}</h4>
                    <p className="mt-4 text-sm text-secondary leading-relaxed font-english italic">
                      {cohort.desc}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="mt-10 flex items-center gap-3 text-[10px] font-bold text-primary uppercase tracking-[0.2em] group-hover:text-accent-primary transition-colors"
                  >
                    {cohort.cta}
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Final Institutional Statement */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, delay: 0.5 }}
           className="mt-24 pt-12 border-t border-subtle/20 text-center lg:text-left"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
             <p className="text-[11px] uppercase tracking-[0.3em] text-dim font-bold">
               Every environment shapes a different level of presence.
             </p>
             <div className="flex items-center justify-center lg:justify-end gap-6">
                <span className="text-xs text-secondary italic">Restrained. Intentional. Significant.</span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-warm animate-pulse" />
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}


function FounderVisionSection() {
  return (
    <section className="relative py-48 overflow-hidden bg-base border-t border-subtle/10">
      {/* Background Intimate Atmosphere */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent-primary/5 blur-[140px] rounded-full opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: Cinematic Portrait Treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden grayscale opacity-80 group">
               <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent z-10" />
               {/* Abstract Portrait Placeholder (Monochrome Silhouette style) */}
               <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-800" />
               <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <div className="w-[120%] h-[120%] bg-slate-900/40 blur-[100px] rounded-full" />
               </div>
               
               {/* Editorial Meta */}
               <div className="absolute bottom-12 left-12 z-20">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold block mb-2">The Visionary</span>
                  <h3 className="text-2xl font-bold tracking-tighter text-white">Dr. Sudharshan R.</h3>
                  <div className="h-[1px] w-8 bg-accent-primary/50 mt-4" />
               </div>
            </div>
            
            {/* Floating Philosophy Fragment */}
            <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-12 -right-8 w-64 p-8 rounded-2xl border border-subtle/30 backdrop-blur-xl bg-white/5 z-20"
            >
               <p className="text-sm italic text-secondary leading-relaxed font-english">
                 "Confidence is not a personality trait. It is a linguistic outcome."
               </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Manifesto-style Narrative */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <span className="section-label">A Manifesto on Expression</span>
              <h2 className="heading-xl mt-8 leading-[0.9] tracking-tighter">
                Communication is the bridge <br />
                <span className="text-secondary italic">to human potential.</span>
              </h2>
              
              <div className="mt-12 space-y-8 text-xl text-secondary leading-relaxed font-english italic">
                <p>
                  "Many people are intelligent long before they become expressive. I built this environment because I saw too many voices remain silent simply because they lacked the framework for articulation."
                </p>
                <p className="opacity-80">
                  "Fluency changes how your ability is perceived. It dictates opportunity, defines leadership, and shapes your identity in the world."
                </p>
                <p className="opacity-60">
                  "This is not about learning a language. It is about reclaiming your presence."
                </p>
              </div>

              <div className="mt-16 flex items-center gap-6">
                 <div className="h-[1px] w-16 bg-border-subtle" />
                 <span className="text-[10px] uppercase tracking-[0.3em] text-accent-primary font-bold">The Deeper Vision</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}


function FinalAspirationSection() {
  return (
    <section className="relative py-48 overflow-hidden bg-base border-t border-subtle/10">
      <div className="absolute inset-0 z-0">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-primary/10 blur-[180px] rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">The Final Threshold</span>
          <h2 className="heading-xl mt-8 leading-[0.9] tracking-tighter">
            Every white coat begins with <br />
            <span className="text-secondary italic">a single decision.</span>
          </h2>
          <p className="mt-12 text-2xl text-secondary leading-relaxed font-english italic">
            "Communication is not a skill you acquire. It is a presence you reclaim."
          </p>
          
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8">
             <motion.a
               href="tel:+918610690010"
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.98 }}
               className="px-12 py-5 rounded-2xl bg-primary text-background text-lg font-bold tracking-tight shadow-2xl shadow-primary/20"
             >
               Begin Transformation
             </motion.a>
             <motion.a
               href="https://wa.me/918610690010"
               whileHover={{ scale: 1.05, y: -2 }}
               className="px-12 py-5 rounded-2xl border border-subtle/50 text-primary text-lg font-bold tracking-tight backdrop-blur-md bg-white/5"
             >
               Consult a Mentor
             </motion.a>
          </div>
          
          <div className="mt-16 text-dim text-sm tracking-widest uppercase font-bold opacity-60">
             Limited Batch Entry · Q3 2027
          </div>
        </motion.div>
      </div>
    </section>
  )
}


function RefinedFooter() {
  return (
    <footer className="relative py-24 bg-base border-t border-subtle/10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-background font-bold text-lg">F</div>
               <span className="text-xl font-bold tracking-tighter text-primary">Fluency</span>
             </div>
             <p className="text-sm text-dim leading-relaxed font-english italic max-w-xs">
               A high-end communication environment designed for the serious scholar. Redefining how Tamil medium students master English.
             </p>
          </div>
          
          <div className="space-y-8">
             <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent-primary font-bold">Programs</h4>
             <ul className="space-y-4 text-sm text-secondary font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Presence Cohort</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Leadership Track</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Articulation Lab</a></li>
             </ul>
          </div>

          <div className="space-y-8">
             <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent-primary font-bold">Foundation</h4>
             <ul className="space-y-4 text-sm text-secondary font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Philosophy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Methodology</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Visionary</a></li>
             </ul>
          </div>

          <div className="space-y-8">
             <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent-primary font-bold">Connect</h4>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-subtle/30 flex items-center justify-center text-secondary hover:text-primary transition-colors hover:border-primary/50">YT</a>
                <a href="#" className="w-10 h-10 rounded-full border border-subtle/30 flex items-center justify-center text-secondary hover:text-primary transition-colors hover:border-primary/50">IG</a>
                <a href="#" className="w-10 h-10 rounded-full border border-subtle/30 flex items-center justify-center text-secondary hover:text-primary transition-colors hover:border-primary/50">WA</a>
             </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-subtle/20 flex flex-col md:flex-row justify-between items-center gap-8">
           <span className="text-[10px] uppercase tracking-[0.3em] text-dim font-bold">© 2027 Fluency Platform. The Editorial Standard.</span>
           <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] text-dim font-bold">
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  )
}


function RefinedMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 px-4 py-4 backdrop-blur-xl bg-base/80 border-t border-subtle/30 md:hidden">
      <motion.a 
        href="tel:+918610690010" 
        className="flex-1 rounded-2xl bg-primary py-4 text-center text-sm font-bold text-background shadow-xl"
        whileTap={{ scale: 0.95 }}
      >
        Request Entry
      </motion.a>
    </div>
  )
}

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="fixed inset-0 pointer-events-none" style={{ opacity: 0.03, zIndex: 0 }}>
        <FloatingTypography />
      </div>
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <TrustNarrativeSection />
        <TransformationJourneySection />
        <EcosystemShowcaseSection />
        <ResultsArchiveSection />
        <LearningPathwaysSection />
        <KnowledgeAuthoritySection />
        <PedagogySection />
        <EnrollmentSection />
        <FounderVisionSection />
        <FinalAspirationSection />
        <RefinedFooter />
        <RefinedMobileCTA />
        
        <div className="h-24 md:hidden" />
      </div>
    </main>
  )
}
