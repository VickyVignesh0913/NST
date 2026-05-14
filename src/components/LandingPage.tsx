import { useState, useEffect, useRef } from 'react'
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
export function EnglishLayer() {
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

export function CursorGlow() {
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


export function FloatingTypography() {
  const words = ['Speak', 'Lead', 'Grow', 'Thrive']
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {words.map((word, i) => (
        <motion.div
          key={word}
          className="absolute font-english text-[8vw] font-bold tracking-tighter select-none"
          style={{
            color: 'var(--text-primary)',
            opacity: 0.04,
            left: `${8 + i * 22}%`,
            top: `${15 + (i % 2) * 45}%`,
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
    <section id="home" className="relative min-h-[100svh] overflow-hidden" style={{ background: '#1b1938' }}>
      {/* Violet atmospheric backdrop */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#c9b4fa]/10 blur-[120px] rounded-full pointer-events-none" style={{ zIndex: 1 }} />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#c9b4fa]/5 blur-[100px] rounded-full pointer-events-none" style={{ zIndex: 1 }} />

      {/* Full-width Image Background with Parallax - right aligned */}
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
          className="w-1/2 h-[120%] -mt-[10%] object-cover ml-auto"
          style={{ filter: 'contrast(1.05) saturate(1.02)' }}
          loading="eager"
        />
        {/* Dark overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b1938] via-[#1b1938]/70 to-transparent" />
      </div>

      {/* Content Container */}
      <div
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-8 sm:px-12 py-20 lg:py-0"
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
            <span className="text-xs tracking-wider text-[#bcbac9]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Mr. Charles William | English Boss
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="heading-xl leading-[0.96] tracking-[-1.32px]"
            style={{ fontWeight: 460, color: '#ffffff', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Speak English with Confidence
          </motion.h1>

          {/* English Emotional Secondary Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-8 space-y-2"
          >
            <p className="text-xl leading-[1.5]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: 0, color: '#bcbac9' }}>
              Fluent English. Real Confidence. Real Results.
            </p>
            <p className="text-xl leading-[1.5] mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: 0, color: '#ffffff', fontWeight: 540 }}>
              Your journey to fluent English starts today.
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="mt-8 max-w-[500px] text-lg leading-relaxed"
            style={{ color: '#bcbac9', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Practical spoken English coaching for learners who want real confidence in real conversations.
          </motion.p>

          {/* Inline Credibility */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="mt-4 flex items-center gap-2 text-sm"
            style={{ color: '#bcbac9', fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '0.01em' }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9b4fa]" />
            Trusted by thousands of learners across India
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#courses"
              className="px-10 py-4 text-base flex items-center justify-center gap-3 text-[#1b1938] font-bold rounded-lg"
              style={{ background: '#ffffff' }}
              whileTap={{ scale: 0.98 }}
            >
              Start Free Demo
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            
            <motion.a
              href="#inside"
              className="px-10 py-4 text-base flex items-center justify-center gap-3 text-white rounded-lg"
              style={{ border: '1px solid rgba(255,255,255,0.3)' }}
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
            className="mt-16 pt-8 border-t border-white/20 flex flex-wrap gap-x-12 gap-y-6 items-center"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse mr-2 bg-[#c9b4fa]" />
            <span className="text-sm text-[#bcbac9]">Limited seats available. Batch closing soon.</span>
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
    <section id="inside" className="relative py-12 lg:py-20 border-t border-[#e8e4dd]" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Experience</span>
            <h2 className="heading-lg mt-4" style={{ color: '#292827' }}>
              Inside a Real English Boss Class
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: '#73706d' }}>
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
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#fafaf8', border: '1px solid #e8e4dd' }}>
                    <feature.icon className="w-5 h-5" style={{ color: '#1b1938' }} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: '#292827' }}>{feature.title}</h4>
                    <p className="text-sm" style={{ color: '#73706d' }}>{feature.desc}</p>
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


function TrustNarrativeSection() {
  const trustPoints = [
    { stat: "5,000+", label: "Students Trained" },
    { stat: "98%", label: "Confidence Improvement" },
    { stat: "50+", label: "Master Sessions" },
  ]

  return (
    <section className="relative py-12 lg:py-20 border-t border-[#e8e4dd]" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Proven Results</span>
          <h2 className="heading-lg mt-6 max-w-3xl mx-auto" style={{ color: '#292827' }}>
            Trusted by those who demand excellence
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
              className="text-center p-8 rounded-xl border border-[#e8e4dd]"
              style={{ background: '#fafaf8' }}
            >
              <div className="text-3xl font-bold mb-2" style={{ color: '#292827' }}>{point.stat}</div>
              <div className="text-sm uppercase tracking-wider" style={{ color: '#73706d' }}>{point.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


function EcosystemShowcaseSection() {
  return (
    <section className="relative py-12 lg:py-20 border-t border-[#e8e4dd]" style={{ background: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="section-label">The Ecosystem</span>
          <h2 className="heading-lg mt-6 max-w-2xl mx-auto" style={{ color: '#292827' }}>
            A complete environment for fluency development
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div className="p-6 rounded-xl border border-[#e8e4dd]" style={{ background: '#ffffff' }}>
            <div className="mb-4 inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-[11px] font-bold tracking-[0.18em]" style={{ color: '#1b1938', background: '#f3f0eb' }}>01</div>
            <h3 className="font-medium mb-2" style={{ color: '#292827' }}>Structured Curriculum</h3>
            <p className="text-sm leading-6" style={{ color: '#73706d' }}>Progressive learning paths designed for measurable growth.</p>
          </motion.div>
          <motion.div className="p-6 rounded-xl border border-[#e8e4dd]" style={{ background: '#ffffff' }}>
            <div className="mb-4 inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-[11px] font-bold tracking-[0.18em]" style={{ color: '#1b1938', background: '#f3f0eb' }}>02</div>
            <h3 className="font-medium mb-2" style={{ color: '#292827' }}>Live Sessions</h3>
            <p className="text-sm leading-6" style={{ color: '#73706d' }}>Real-time practice with instant feedback and correction.</p>
          </motion.div>
          <motion.div className="p-6 rounded-xl border border-[#e8e4dd]" style={{ background: '#ffffff' }}>
            <div className="mb-4 inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-[11px] font-bold tracking-[0.18em]" style={{ color: '#1b1938', background: '#f3f0eb' }}>03</div>
            <h3 className="font-medium mb-2" style={{ color: '#292827' }}>Community Access</h3>
            <p className="text-sm leading-6" style={{ color: '#73706d' }}>Connect with serious learners on the same journey.</p>
          </motion.div>
          <motion.div className="p-6 rounded-xl border border-[#e8e4dd]" style={{ background: '#ffffff' }}>
            <div className="mb-4 inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-[11px] font-bold tracking-[0.18em]" style={{ color: '#1b1938', background: '#f3f0eb' }}>04</div>
            <h3 className="font-medium mb-2" style={{ color: '#292827' }}>Resource Library</h3>
            <p className="text-sm leading-6" style={{ color: '#73706d' }}>Every session comes with downloadable notes and practice exercises.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


function ResultsArchiveSection() {
  const results = [
    { stat: "01", title: "Interview Success", desc: "Students cracking interviews at top MNCs with newfound confidence." },
    { stat: "02", title: "Career Growth", desc: "Professionals commanding respect in meetings and presentations." },
    { stat: "03", title: "Global Communication", desc: "Learners speaking fluently with international clients." },
  ]

  return (
    <section id="results" className="relative py-12 lg:py-20 border-t border-[#e8e4dd]" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="section-label">Results Archive</span>
          <h2 className="heading-lg mt-6 max-w-2xl mx-auto" style={{ color: '#292827' }}>
            Real transformations, documented outcomes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, i) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-8 rounded-xl border border-[#e8e4dd] text-center"
              style={{ background: '#fafaf8' }}
            >
              <div className="mb-5 inline-flex h-12 min-w-12 items-center justify-center rounded-full px-4 text-sm font-bold tracking-[0.2em]" style={{ color: '#1b1938', background: '#f3f0eb' }}>{result.stat}</div>
              <h3 className="font-medium mb-2" style={{ color: '#292827' }}>{result.title}</h3>
              <p className="text-sm" style={{ color: '#73706d' }}>{result.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


function FounderVisionSection() {
  return (
    <section id="about" className="relative py-12 lg:py-20 border-t border-[#e8e4dd]" style={{ background: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-[#e8e4dd] relative" style={{ background: '#e8e4dd' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold" style={{ color: '#9a9794' }}>CW</span>
              </div>
              <div className="absolute bottom-8 left-8">
                <span className="section-label mb-2 block">A Vision for Confidence</span>
                <h3 className="heading-md font-medium" style={{ color: '#292827' }}>Mr. Charles William</h3>
                <p className="text-xs uppercase tracking-[0.2em] font-bold mt-1" style={{ color: '#9a9794' }}>Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="section-label">The Founder's Conviction</span>
            <h2 className="heading-lg mt-4" style={{ color: '#292827' }}>
              Communication is the bridge between who you are and who you want to be.
            </h2>
            <p className="mt-8 text-lg leading-relaxed" style={{ color: '#73706d' }}>
              "I've spent years observing a painful pattern: brilliant people staying silent in rooms where they should be leading. It wasn't a lack of knowledge—it was a lack of psychological safety in their own expression."
            </p>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: '#73706d' }}>
              "I built this environment to be more than a school. It is a space where you can fail safely until you speak brilliantly."
            </p>
          </motion.div>
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
    <section id="courses" className="relative py-12 lg:py-20 border-t border-[#e8e4dd]" style={{ background: '#fafaf8' }}>
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-accent-primary/5 via-transparent to-transparent opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        <div className="mb-12 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Learning Pathways</span>
            <h2 className="heading-lg mt-6 max-w-2xl" style={{ color: '#292827' }}>
              Choose your path to communication mastery
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
              className="card p-6 rounded-xl group hover:border-[#1b1938] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: '#fafaf8', border: '1px solid #e8e4dd' }}>
                <span className="text-xl font-bold" style={{ color: '#1b1938' }}>{i + 1}</span>
              </div>
              <h3 className="text-lg font-medium mb-3" style={{ color: '#292827' }}>{pathway.title}</h3>
              <p className="text-sm mb-4 italic" style={{ color: '#73706d' }}>{pathway.philosophy}</p>
              <span className="text-xs font-medium" style={{ color: '#9a9794' }}>{pathway.focus}</span>
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
    <section id="knowledge" className="relative py-12 lg:py-20 border-t border-[#e8e4dd]" style={{ background: '#ffffff' }}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 blur-[160px] rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        <div className="mb-8 text-center">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#292827]/60 via-[#292827]/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white ml-1 fill-current" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: '#9a9794' }}>{broadcasts[0].category}</span>
                <h3 className="text-xl font-semibold text-white mt-2">{broadcasts[0].title}</h3>
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
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#e8e4dd] group-hover:border-[#1b1938] transition-all duration-300" style={{ background: '#fafaf8' }}>
                <img 
                  src={`https://img.youtube.com/vi/${broadcast.id}/mqdefault.jpg`} 
                  alt="Broadcast Thumbnail" 
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292827]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <span className="text-[9px] uppercase tracking-widest font-bold" style={{ color: '#9a9794' }}>{broadcast.category}</span>
                  <span className="text-[10px] font-medium" style={{ color: '#ffffff' }}>{broadcast.duration}</span>
                </div>
              </div>
              <h4 className="mt-6 text-lg font-semibold leading-tight group-hover:text-[#1b1938] transition-colors duration-300" style={{ color: '#292827' }}>
                {broadcast.title}
              </h4>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="flex flex-col justify-center p-8 rounded-xl border border-dashed border-[#e8e4dd]"
            style={{ background: '#fafaf8' }}
          >
            <p className="text-sm leading-relaxed italic" style={{ color: '#9a9794' }}>
              "A curated archive designed for those who aim for a higher standard of communication. Thousands learn through these public conversations."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] w-8" style={{ background: '#e8e4dd' }} />
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold" style={{ color: '#1b1938' }}>Explore Archive</span>
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
    <section className="relative py-12 lg:py-20 border-t border-[#e8e4dd]" style={{ background: '#fafaf8' }}>
      {/* Background Philosophical Atmosphere */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 blur-[160px] rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Philosophy Statement */}
        <div className="mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">The Pedagogy of Presence</span>
            <h2 className="heading-lg mt-8 leading-[1] tracking-tighter mx-auto max-w-4xl" style={{ color: '#292827' }}>
              Fluency is developed through environment and intention.
            </h2>
            <p className="mt-10 text-xl max-w-2xl mx-auto italic" style={{ color: '#9a9794' }}>
              "We don't teach spoken English. We build the psychological and linguistic framework for authority."
            </p>
          </motion.div>
        </div>

        {/* Conceptual Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32">
          {pillars.map((pillar) => (
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
                   className="w-full h-full rounded-full border-2 border-[#1b1938]"
                 />
                 <motion.div 
                   animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute inset-4 rounded-full border border-[#c9b4fa]"
                 />
              </div>

              <div className="relative z-10 pl-12 lg:pl-0">
                <div className="flex items-center gap-4 mb-6">
                   <span className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: '#1b1938' }}>{pillar.title}</span>
                   <div className="h-[1px] w-12" style={{ background: '#e8e4dd' }} />
                </div>
                <h3 className="heading-lg font-medium tracking-tighter leading-tight" style={{ color: '#292827' }}>
                  {pillar.statement}
                </h3>
                <p className="mt-8 text-lg leading-relaxed max-w-md italic" style={{ color: '#73706d' }}>
                  {pillar.philosophy}
                </p>
                <div className="mt-10 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#1b1938] animate-pulse" />
                   <span className="text-[9px] uppercase tracking-widest font-bold" style={{ color: '#9a9794' }}>Linguistic Resonance</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enrollment CTA Band - Teal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 text-center py-16 px-8"
          style={{ background: '#0e3030' }}
        >
          <span className="text-sm uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.7)' }}>Limited Entry</span>
          <h2 className="heading-lg mt-6 mx-auto max-w-2xl" style={{ color: '#ffffff' }}>
            Your transformation begins with a single decision.
          </h2>
          <p className="mt-8 text-lg mx-auto max-w-2xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Join thousands of learners already speaking confidently.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="tel:+918610690010"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-lg font-bold shadow-xl"
              style={{ background: '#ffffff', color: '#0e3030' }}
            >
              Enroll Now
            </motion.a>
            <motion.a
              href="https://wa.me/918610690010"
              whileHover={{ scale: 1.05 }}
              className="px-10 py-4 rounded-lg font-bold"
              style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#ffffff' }}
            >
              WhatsApp
            </motion.a>
          </div>
           
          <div className="mt-8 text-sm tracking-widest uppercase font-bold opacity-60" style={{ color: '#ffffff' }}>
             Limited Seats · Batch Open Now
          </div>
        </motion.div>
      </div>
    </section>
  )
}


function RefinedFooter() {
  return (
    <footer id="contact" className="relative py-12 lg:py-20 border-t border-[#e8e4dd]" style={{ background: '#fafaf8' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ background: '#1b1938' }}>E</div>
              <span className="text-xl font-bold tracking-tighter" style={{ color: '#292827' }}>English Boss</span>
            </div>
            <p className="text-sm leading-relaxed italic max-w-xs" style={{ color: '#9a9794' }}>
              A high-end spoken English environment designed for determined learners. Building real confidence through practical coaching.
            </p>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: '#1b1938' }}>Programs</h4>
            <ul className="space-y-4 text-sm font-medium" style={{ color: '#73706d' }}>
              <li><a href="#courses" className="hover:text-[#292827] transition-colors">Presence Cohort</a></li>
              <li><a href="#courses" className="hover:text-[#292827] transition-colors">Leadership Track</a></li>
              <li><a href="#courses" className="hover:text-[#292827] transition-colors">Articulation Lab</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: '#1b1938' }}>Foundation</h4>
            <ul className="space-y-4 text-sm font-medium" style={{ color: '#73706d' }}>
              <li><a href="#inside" className="hover:text-[#292827] transition-colors">Philosophy</a></li>
              <li><a href="#results" className="hover:text-[#292827] transition-colors">Methodology</a></li>
              <li><a href="#about" className="hover:text-[#292827] transition-colors">Visionary</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: '#1b1938' }}>Connect</h4>
            <div className="flex gap-4">
              <a href="#knowledge" className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors" style={{ color: '#73706d', borderColor: '#e8e4dd' }}>YT</a>
              <a href="#about" className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors" style={{ color: '#73706d', borderColor: '#e8e4dd' }}>IG</a>
              <a href="https://wa.me/918610690010" className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors" style={{ color: '#73706d', borderColor: '#e8e4dd' }}>WA</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


function RefinedMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 px-4 py-4 backdrop-blur-xl border-t md:hidden" style={{ background: '#ffffff', borderColor: '#e8e4dd' }}>
      <motion.a 
        href="tel:+918610690010" 
        className="flex-1 rounded-xl py-4 text-center text-sm font-bold shadow-xl"
        style={{ background: '#1b1938', color: '#ffffff' }}
        whileTap={{ scale: 0.95 }}
      >
        Call Now
      </motion.a>
      <motion.a 
        href="https://wa.me/918610690010" 
        className="rounded-xl py-4 px-6 text-sm font-bold shadow-xl"
        style={{ background: '#1b1938', color: '#ffffff' }}
        whileTap={{ scale: 0.95 }}
      >
        WhatsApp
      </motion.a>
    </div>
  )
}

export default function LandingPage() {
  return (
    <main className="relative overflow-x-hidden" style={{ background: '#ffffff' }}>
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <InsideClassSection />
        <TrustNarrativeSection />
        <EcosystemShowcaseSection />
        <LearningPathwaysSection />
        <PedagogySection />
        <ResultsArchiveSection />
        <KnowledgeAuthoritySection />
        <FounderVisionSection />
        <RefinedFooter />
        <RefinedMobileCTA />
        
        <div className="h-24 md:hidden" />
      </div>
    </main>
  )
}

