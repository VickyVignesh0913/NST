import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { cn } from '../lib/utils'
import { motion } from 'framer-motion'
import { 
  Play, 
  ArrowRight,
  Award,
  BookOpen,
  Clock,
  FileText,
  Check
} from 'lucide-react'

// Commercial Analytics Abstraction
const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  // Implementation for GA4, Meta Pixel, etc.
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
  console.log(`[Analytics] ${eventName}`, params);
};


// Memory Anchor: Communication Silence
function CommunicationSilence() {
  return (
    <section className="h-[40vh] flex items-center justify-center bg-base relative overflow-hidden">
      <div className="resonance-ripple" style={{ animationDelay: '0s' }} />
      <div className="resonance-ripple" style={{ animationDelay: '1s' }} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="text-[10px] uppercase tracking-[1em] text-dim font-bold"
      >
        Listen to the space between thoughts.
      </motion.div>
    </section>
  );
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
    { label: 'Courses', href: '#courses' },
    { label: 'Testimonials', href: '#results' },
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
              style={{ fontFamily: "'General Sans', sans-serif", color: 'var(--text-primary)' }}
            >
              English Boss
            </span>
            <sup className="text-[10px] ml-0.5" style={{ color: 'var(--text-dim)' }}>(R)</sup>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: scrolled ? 'var(--text-dim)' : 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? 'var(--text-dim)' : 'var(--text-secondary)'}
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
            Start Free Demo
          </motion.a>
        </div>
      </div>
    </nav>
  )
}

// English Learning SVG Layer
function EnglishLayer() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.07, color: '#1a1a1a' }}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          @keyframes drift-slow {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(12px, -8px) rotate(0.5deg); }
          }
          @keyframes drift-medium {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-8px, 12px) rotate(-0.3deg); }
          }
          .drift-1 { animation: drift-slow 18s ease-in-out infinite; }
          .drift-2 { animation: drift-medium 14s ease-in-out infinite; }
          .drift-3 { animation: drift-slow 20s ease-in-out infinite; }
        `}
      </style>
      <g className="drift-1">
        <text x="60" y="120" fontSize="28" fontFamily="serif" fill="currentColor">Think. Speak. Lead.</text>
        <text x="60" y="160" fontSize="22" fontFamily="serif" fill="currentColor">Fluency = Practice × Confidence</text>
      </g>
      <g className="drift-2">
        <path d="M700 100 Q720 130 740 100 Q760 70 780 100 Q800 130 820 100" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="710" y="155" fontSize="18" fontFamily="serif" fill="currentColor">Picture. Describe. Express.</text>
      </g>
      <g className="drift-3">
        <circle cx="900" cy="350" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
        <line x1="860" y1="350" x2="940" y2="350" stroke="currentColor" strokeWidth="0.5" />
        <line x1="900" y1="310" x2="900" y2="390" stroke="currentColor" strokeWidth="0.5" />
        <text x="930" y="410" fontSize="16" fontFamily="serif" fill="currentColor">growth</text>
      </g>
      <g className="drift-1">
        <text x="100" y="500" fontSize="24" fontFamily="serif" fill="currentColor">Unlearn. Relearn. Speak.</text>
      </g>
      <g className="drift-2">
        <path d="M400 600 L440 560 L480 580 L520 540 L560 560 L600 520" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="440" cy="560" r="3" fill="currentColor" />
        <circle cx="480" cy="580" r="3" fill="currentColor" />
        <circle cx="520" cy="540" r="3" fill="currentColor" />
        <circle cx="560" cy="560" r="3" fill="currentColor" />
        <circle cx="600" cy="520" r="3" fill="currentColor" />
      </g>
      <g className="drift-3">
        <text x="850" y="560" fontSize="26" fontFamily="serif" fill="currentColor">"</text>
        <text x="860" y="560" fontSize="22" fontFamily="serif" fill="currentColor">Unlearn the learning.</text>
        <text x="1050" y="560" fontSize="26" fontFamily="serif" fill="currentColor">"</text>
      </g>
      <g className="drift-1">
        <text x="200" y="700" fontSize="20" fontFamily="serif" fill="currentColor">Speak English with Confidence</text>
      </g>
      <g className="drift-2">
        <path d="M800 650 L850 600 L850 700 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="860" y="660" fontSize="16" fontFamily="serif" fill="currentColor">Every day, speak better</text>
      </g>
</svg>
  )
}


// Cursor Glow

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState<{ id: number, x: number, y: number }[]>([])
  const rafRef = useRef<number>()
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }
    const handleClick = (e: MouseEvent) => {
      setRipples(prev => [...prev, { id: Date.now(), x: e.clientX, y: e.clientY }].slice(-3))
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('click', handleClick)

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.05
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.05
      setPos({ x: currentRef.current.x, y: currentRef.current.y })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('click', handleClick)
      cancelAnimationFrame(rafRef.current!)
    }
  }, [shouldReduceMotion])

  if (shouldReduceMotion) return null;

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0 will-change-transform"
        style={{
          background: `radial-gradient(1000px circle at ${pos.x}px ${pos.y}px, oklch(40% 0.10 145 / 0.02), transparent 70%)`,
        }}
      />
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          initial={{ width: 0, height: 0, opacity: 0.5, x: ripple.x, y: ripple.y }}
          animate={{ width: 400, height: 400, opacity: 0, x: ripple.x - 200, y: ripple.y - 200 }}
          className="fixed border border-accent-primary/20 rounded-full pointer-events-none z-[100]"
          transition={{ duration: 1.5, ease: "easeOut" }}
          onAnimationComplete={() => setRipples(prev => prev.filter(r => r.id !== ripple.id))}
        />
      ))}
    </>
  )
}


function FloatingTypography() {
  const words = ['Speak', 'Lead', 'Grow', 'Thrive']
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {words.map((word, i) => (
        <motion.div
          key={word}
          className="absolute font-english text-[8vw] font-bold tracking-tighter select-none"
          style={{
            color: 'var(--text-primary)',
            opacity: 0.03,
            left: `${10 + i * 20}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          initial={{ y: 0, rotate: 0 }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, (i % 2 === 0 ? 1 : -1) * 2, 0]
          }}
          transition={{ 
            duration: 8 + i * 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 1.5
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  )
}


function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const imgParallax = -Math.min(scrollY * 0.15, 60)

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-base">
      <CursorGlow />
      <FloatingTypography />

      {/* Full-width Image Background with Parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${imgParallax}px) scale(1.05)`,
          transition: 'transform 0.1s linear',
          willChange: 'transform',
        }}
      >
        <img
          src="/images/charles-william.jpg"
          alt="Mr. Charles William - English Boss Founder"
          className="w-full h-[120%] -mt-[10%] object-cover"
          style={{ filter: 'contrast(1.05) saturate(1.02)' }}
          loading="eager"
        />
        <div className="absolute inset-0 portrait-grain opacity-[0.03] pointer-events-none" />
      </div>


      {/* Content Container */}
      <div
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-8 sm:px-12 py-24 md:py-0"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          transition: 'transform 0.2s linear',
        }}
      >
        <div className="w-full max-w-[640px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="text-xs tracking-wider" style={{ color: 'var(--text-dim)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Mr. Charles William | English Boss
            </span>
            <span className="human-moment-tag">The Moment of Articulation</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="heading-xl leading-[0.95] tracking-tight resonance-field"
          >
            <span className="inline text-3xl sm:text-4xl lg:text-[48px] font-[500]">
              Speak English with Confidence
            </span>
          </motion.h1>

          {/* English Emotional Secondary Line */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-8 space-y-2"
          >
            <p className="text-xl sm:text-2xl lg:text-[28px] leading-[1.25]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: 0, color: 'var(--text-secondary)' }}>
              Fluent English. Real Confidence. Real Results.
            </p>
            <p className="text-xl sm:text-2xl lg:text-[28px] leading-[1.2] mt-0.5 font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: 0, color: 'var(--text-emphasis)' }}>
              Your journey to fluent English starts today.
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="mt-8 max-w-[500px] text-lg leading-relaxed text-secondary font-english italic"
          >
            Practical spoken English coaching for learners who want real confidence in real conversations.
          </motion.p>

          {/* Inline Credibility */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="mt-4 flex items-center gap-2 text-sm"
            style={{ color: 'var(--text-dim)', fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '0.01em' }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }} />
            Trusted by thousands of learners across India
          </motion.p>

          {/* CTA Row */}

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
              whileTap={{ scale: 0.98 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
                const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
                e.currentTarget.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
              }}
            >
            Start Free Demo
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            
            <motion.a
              href="#inside"
              className="hero-btn-secondary px-10 py-4 text-base flex items-center justify-center gap-3"
              whileTap={{ scale: 0.98 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
                const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
                e.currentTarget.style.transform = `translate(${x}px, ${y}px) scale(1.01)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
              }}
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
<span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent-warm)' }} />
            Limited seats available. Batch closing soon.
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InsideClassSection() {
  const features = [
    { icon: BookOpen, title: "Picture Description Method", desc: "Describe real images and situations to build natural fluency. No memorization needed." },
    { icon: Award, title: "Daily Verb Challenges", desc: "Master one powerful verb every day. Build vocabulary and confidence simultaneously." },
    { icon: Clock, title: "Real-Life Conversations", desc: "Practice daily scenarios like interviews, travel, and office meetings with zero fear." },
  ]

  return (
    <section id="inside" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-widest text-secondary">Experience</span>
            <h2
              className="text-4xl sm:text-5xl text-foreground mt-4 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Inside a Real <em className="not-italic text-academic">English Boss Class</em>
            </h2>
            <p className="text-secondary mt-6 text-lg leading-relaxed">
              Not just grammar. A complete speaking environment designed for real-world English confidence.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                 >
                   <div className="w-10 h-10 card rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium">{feature.title}</h4>
                    <p className="text-secondary text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--accent-primary)', background: 'oklch(72% 0.18 162 / 0.1)', paddingInline: '12px', paddingBlock: '4px', borderRadius: '9999px' }}>
                Live Class Preview
              </span>
              <span className="text-xs text-secondary">Recorded & Available 24/7</span>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="card overflow-hidden rounded-2xl">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative flex items-center justify-center">
                <div className="relative z-10 text-center">
                  <button
                    type="button"
                    aria-label="Play English Boss class preview"
                    className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
                  >
                    <Play className="w-7 h-7 text-blue-500 ml-1 fill-current" />
                  </button>
                  <p className="text-foreground font-medium text-sm">English Boss Live Session</p>
                  <p className="text-secondary text-xs mt-1">Situational Speaking - English</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center" style={{ color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: '12px' }}>
                    CW
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">Mr. Charles William</p>
                    <p className="text-secondary text-xs">Live now | 247 watching</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {['HD Video', 'PDF Notes', 'Q&A Live'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-md text-xs text-secondary border border-subtle" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 card p-4 rounded-xl max-w-[200px] hidden sm:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
             >
               <div className="flex items-center gap-2 mb-2">
                 <FileText className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                 <span className="text-foreground font-medium text-sm">Class Notes</span>
              </div>
              <p className="text-secondary text-xs">
                Every session comes with downloadable notes & practice exercises.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


function TransformationJourneySection() {
  const stages = [
    { title: 'Silence', moment: 'The Recognition', desc: 'Understanding the gap between where you are and where you want to be.' },
    { title: 'Intent', moment: 'The Decision', desc: 'Committing to change. Setting aside ego for growth.' },
    { title: 'Practice', moment: 'The Work', desc: 'Showing up daily. Repeating until repetition becomes natural.' },
    { title: 'Speak', moment: 'The Expression', desc: 'Stepping into rooms and owning your voice.' },
  ]

  return (
    <section className="relative py-32 overflow-hidden bg-base">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-12">
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

        <div className="space-y-48 sm:space-y-64">
          {stages.map((stage: { title: string; moment: string; desc: string }, i: number) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className={`relative flex flex-col ${i % 2 === 0 ? 'lg:items-start' : 'lg:items-end'} text-center lg:text-left`}
            >
              <div className={`absolute -top-12 ${i % 2 === 0 ? '-left-8' : '-right-8'} opacity-[0.03] select-none pointer-events-none`} style={{ zIndex: -1 }}>
                <span className="text-[12vw] font-bold tracking-tighter font-english" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {stage.title}
                </span>
              </div>

              <div className={`max-w-xl ${i % 2 === 0 ? '' : 'lg:text-right'}`}>
                <div className={`flex items-center gap-4 mb-6 ${i % 2 === 0 ? 'justify-center lg:justify-start' : 'justify-center lg:justify-end'}`}>
                  <span className="text-xs font-bold tracking-[0.3em] text-dim">0{i + 1}</span>
                  <div className="h-[1px] w-8 bg-border-subtle" />
                  <span className="human-moment-tag">{stage.moment}</span>
                </div>
                <p className="text-secondary text-lg leading-relaxed">{stage.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

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
              <div className="text-2xl font-light text-secondary tracking-tight italic">Global excellence.</div>
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
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-accent-primary/5 via-transparent to-transparent opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        <div className="mb-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Learning Pathways</span>
            <h2 className="heading-xl mt-6 max-w-2xl leading-tight">
              Choose your path to <span className="text-secondary italic">communication mastery</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((pathway, i) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="card p-8 rounded-2xl group hover:border-accent-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-accent-primary">{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{pathway.title}</h3>
              <p className="text-secondary text-sm mb-4 italic">{pathway.philosophy}</p>
              <span className="text-xs text-dim font-medium">{pathway.focus}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


function KnowledgeAuthoritySection() {
  const broadcasts = [
    {
      id: "xI5_C6DeHxk",
      title: "Never Forget English Again",
      category: "Broadcast 01",
      duration: "18:42"
    },
    {
      id: "jNwi7oji8go",
      title: "Do not use Dictionary",
      category: "Broadcast 02",
      duration: "32:15"
    },
    {
      id: "0x6sgMnPZkw",
      title: "தமிழ் vs English Idioms",
      category: "Broadcast 03",
      duration: "15:28"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-base border-t border-subtle/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 blur-[160px] rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Knowledge Archive</span>
            <h2 className="heading-xl mt-6 max-w-2xl mx-auto leading-tight">
              Public broadcasts on <span className="text-secondary italic">communication psychology</span>
            </h2>
          </motion.div>
        </div>

        {/* Featured Broadcast */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-subtle/30 bg-elevated group cursor-pointer">
            <img 
              src={`https://img.youtube.com/vi/${broadcasts[0].id}/hqdefault.jpg`} 
              alt={broadcasts[0].title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-bg-base/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white ml-1 fill-current" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-dim font-bold">{broadcasts[0].category}</span>
                <h3 className="text-2xl font-semibold text-white mt-2">{broadcasts[0].title}</h3>
              </div>
              <span className="text-sm text-white/80 font-medium">{broadcasts[0].duration}</span>
            </div>
          </div>
        </motion.div>

        {/* Media Archive Layer */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {broadcasts.slice(1).map((broadcast: { id: string; title: string; category: string; duration: string }, i: number) => (
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
            Every fluent speaker begins with <br />
            <span className="text-secondary italic">a single decision.</span>
          </h2>
          <p className="mt-12 text-2xl text-secondary leading-relaxed font-english italic">
            "Communication is not a skill you acquire. It is a presence you reclaim."
          </p>
          
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8">
             <motion.a
               href="tel:+918610690010"
               onClick={() => trackEvent('cta_phone_final')}
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.98 }}
               className="px-12 py-5 rounded-2xl bg-primary text-background text-lg font-bold tracking-tight shadow-2xl shadow-primary/20"
             >
               Begin Transformation
             </motion.a>
             <motion.a
               href="https://wa.me/918610690010"
               onClick={() => trackEvent('cta_whatsapp_final')}
               whileHover={{ scale: 1.05, y: -2 }}
               className="px-12 py-5 rounded-2xl border border-subtle/50 text-primary text-lg font-bold tracking-tight backdrop-blur-md bg-white/5"
             >
               Consult a Mentor
             </motion.a>
          </div>
          
          <div className="mt-16 text-dim text-sm tracking-widest uppercase font-bold opacity-60">
             Limited Seats · Batch Open Now
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
              A high-end communication environment designed for the serious scholar. Redefining how determined students master English.
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
      </div>
    </footer>
  )
}


function TrustNarrativeSection() {
  const trustPoints = [
    { stat: "5,000+", label: "Students Trained" },
    { stat: "98%", label: "Confidence Improvement" },
    { stat: "50+", label: "Master Sessions" },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-base border-t border-subtle/10">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Proven Results</span>
          <h2 className="heading-xl mt-6 max-w-3xl mx-auto leading-tight">
            Trusted by those who <span className="text-secondary italic">demand excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl border border-subtle/20 bg-elevated"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary tracking-tighter">{point.stat}</div>
              <div className="text-sm text-secondary mt-2 uppercase tracking-wider">{point.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-center"
        >
          <blockquote className="text-xl lg:text-2xl text-secondary leading-relaxed font-english italic max-w-3xl mx-auto">
            "The environment here doesn't just teach English—it transforms how you carry yourself."
          </blockquote>
          <p className="mt-6 text-sm text-dim">— Featured in education media across India</p>
        </motion.div>
      </div>
    </section>
  )
}


function EcosystemShowcaseSection() {
  const features = [
    { icon: BookOpen, title: "Daily Practice Sessions", desc: "Structured daily conversations on real scenarios" },
    { icon: Award, title: "Achievement Tracking", desc: "Monitor your progress with measurable milestones" },
    { icon: Clock, title: "Flexible Schedule", desc: "Learn at your pace with 24/7 recorded sessions" },
  ]

  return (
    <section id="courses" className="relative py-32 overflow-hidden bg-base border-t border-subtle/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">The Ecosystem</span>
            <h2 className="heading-xl mt-6 max-w-xl leading-tight">
              A complete environment for <span className="text-secondary italic">fluency development</span>
            </h2>
            <p className="mt-6 text-lg text-secondary leading-relaxed">
              Everything you need to transform from hesitant speaker to confident communicator.
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex items-start gap-6 p-6 rounded-2xl border border-subtle/20 bg-elevated"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">{feature.title}</h4>
                  <p className="text-secondary text-sm mt-1">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


function ResultsArchiveSection() {
  const results = [
    { title: "Interview Success", desc: "Students cracking top MNC interviews with confidence" },
    { title: "Public Speaking", desc: "From silent observers to commanding speakers" },
    { title: "Career Growth", desc: "Promotions driven by communication excellence" },
  ]

  return (
    <section id="results" className="relative py-32 overflow-hidden border-t border-subtle/10" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label">Results Archive</span>
          <h2 className="heading-xl mt-6 max-w-2xl mx-auto leading-tight">
            Real transformations, <span className="text-secondary italic">documented outcomes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, i) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="p-8 rounded-2xl border border-subtle/20 bg-base text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent-primary/10 mx-auto mb-6 flex items-center justify-center">
                <Check className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{result.title}</h3>
              <p className="text-secondary text-sm">{result.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


function EnrollmentSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent-primary/50" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-sm uppercase tracking-widest text-background/70 font-bold">Limited Entry</span>
          <h2 className="heading-xl mt-6 text-background leading-tight">
            Your transformation begins with <span className="text-background/80 italic">a single step</span>
          </h2>
          <p className="mt-8 text-lg text-background/80 max-w-2xl mx-auto">
            Join the 2027 batch and experience a complete shift in how you communicate.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="tel:+918610690010"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl bg-background text-primary font-bold shadow-xl"
            >
              Enroll Now
            </motion.a>
            <motion.a
              href="https://wa.me/918610690010"
              whileHover={{ scale: 1.05 }}
              className="px-10 py-4 rounded-xl border-2 border-background/50 text-background font-bold"
            >
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


function FounderVisionSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-base border-t border-subtle/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 blur-[200px] rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-subtle/20 bg-elevated relative">
              <img 
                src="/images/charles-william.png" 
                alt="Mr. Charles William - English Boss Founder"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(1) contrast(1.1)' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }}
              />
              <div className="hidden absolute inset-0 bg-accent-primary/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/40">CW</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent opacity-50" />
              <div className="absolute bottom-8 left-8">
                <span className="section-label mb-2 block">Quiet Authority</span>
                <h3 className="text-3xl font-bold tracking-tighter text-primary">Mr. Charles William</h3>
                <p className="text-dim text-xs uppercase tracking-[0.2em] font-bold mt-1">Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="section-label resonance-field">A Vision for Confidence</span>
            <h2 className="heading-xl mt-6 leading-[0.95] tracking-tight">
              Communication is the bridge <br />
              <span className="text-secondary italic">to who you can become.</span>
            </h2>
            
            <div className="mt-10 space-y-6 text-lg text-secondary leading-relaxed">
              <p>
                "I've spent years observing a painful pattern: brilliant people staying silent in rooms where they should be leading. It wasn't a lack of knowledge—it was a lack of psychological safety in their own expression."
              </p>
              <p className="opacity-80">
                "I built this environment to be more than a school. It is a space where you can fail safely until you speak brilliantly."
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-border-subtle" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent-primary font-bold">The Founder's Conviction</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
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
        Call Now
      </motion.a>
      <motion.a 
        href="https://wa.me/918610690010" 
        className="rounded-2xl bg-accent-primary py-4 px-6 text-sm font-bold text-background shadow-xl"
        whileTap={{ scale: 0.95 }}
      >
        WhatsApp
      </motion.a>
    </div>
  )
}

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <CommunicationSilence />
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
