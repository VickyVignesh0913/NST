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
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: scrolled ? 'var(--text-primary)' : '#1a1a1a' }}
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
function PhysicsLayer() {
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
        <text x="60" y="120" fontSize="28" fontFamily="serif" fill="currentColor">E = mc^2</text>
        <text x="60" y="160" fontSize="22" fontFamily="serif" fill="currentColor">F = ma</text>
      </g>
      <g className="drift-2">
        <path d="M700 100 Q720 130 740 100 Q760 70 780 100 Q800 130 820 100" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="710" y="155" fontSize="18" fontFamily="serif" fill="currentColor">y = A sin(wt)</text>
      </g>
      <g className="drift-3">
        <circle cx="900" cy="350" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
        <line x1="860" y1="350" x2="940" y2="350" stroke="currentColor" strokeWidth="0.5" />
        <line x1="900" y1="310" x2="900" y2="390" stroke="currentColor" strokeWidth="0.5" />
        <text x="930" y="410" fontSize="16" fontFamily="serif" fill="currentColor">theta</text>
      </g>
      <g className="drift-1">
        <text x="100" y="500" fontSize="24" fontFamily="serif" fill="currentColor">grad x E = -dB/dt</text>
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
        <text x="750" y="550" fontSize="22" fontFamily="serif" fill="currentColor">lambda = h/mv</text>
      </g>
      <g className="drift-1">
        <text x="200" y="700" fontSize="20" fontFamily="serif" fill="currentColor">PV = nRT</text>
      </g>
      <g className="drift-2">
        <path d="M800 650 L850 600 L850 700 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="860" y="660" fontSize="16" fontFamily="serif" fill="currentColor">Delta S ge 0</text>
      </g>
    </svg>
  )
}

// Cursor Glow
function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const rafRef = useRef<number>()
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMove)

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08
      setPos({ ...currentRef.current })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(rafRef.current!)
    }
  }, [])

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, oklch(40% 0.10 145 / 0.06), transparent 60%)`,
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

  const imgParallax = Math.min(scrollY * 0.4, 120)
  const contentFade = Math.min(scrollY / 350, 1)

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* Cursor Glow */}
      <CursorGlow />

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
          src="/hero.png"
          alt="NEET Physics coaching - Student studying"
          className="w-full h-[120%] -mt-[10%] object-cover"
          style={{ filter: 'contrast(1.05) saturate(1.02)' }}
          loading="eager"
        />
      </div>



      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[2] transition-opacity duration-700 ease-out"
        style={{
          opacity: overlayOpacity,
          background: 'linear-gradient(to right, var(--bg-base) 0%, color-mix(in srgb, var(--bg-base) 70%, transparent) 35%, color-mix(in srgb, var(--bg-base) 20%, transparent) 65%, color-mix(in srgb, var(--bg-base) 2%, transparent) 100%)'
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-6 py-24 md:py-0"
        style={{
          opacity: 1 - contentFade,
          transform: `translateY(${scrollY * 0.15}px)`,
          transition: 'opacity 0.1s linear, transform 0.1s linear',
        }}
      >
        <div className="w-full max-w-[560px]">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="mb-6"
          >
            <span className="text-xs tracking-wider" style={{ color: 'var(--text-dim)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Dr. Sudharshan R. | MBBS
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
            className="tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--text-primary)', letterSpacing: '0.02em' }}
          >
            <span className="inline text-3xl sm:text-4xl lg:text-[48px] font-[500]">
              Physics Easy{' '}
              <span className="text-academic" style={{ fontFamily: "'Arima Madurai', sans-serif", letterSpacing: 0 }}>— ஆ</span>
              {' '}<span style={{ fontFamily: "'Arima Madurai', sans-serif", letterSpacing: 0 }} className="font-bold">Feel பண்ணுங்க</span>
            </span>
          </motion.h1>

          {/* Tamil Emotional Line */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.54 }}
            className="mt-5"
          >
            <p className="text-xl sm:text-2xl lg:text-[28px] leading-[1.25]" style={{ fontFamily: "'Arima Madurai', sans-serif", letterSpacing: 0, color: 'var(--text-secondary)' }}>
              Doctor ஆகும் உங்கள் பயணம்
            </p>
            <p className="text-xl sm:text-2xl lg:text-[28px] leading-[1.2] mt-0.5 font-bold" style={{ fontFamily: "'Arima Madurai', sans-serif", letterSpacing: 0, color: 'var(--text-emphasis)' }}>
              இன்றே தொடங்கட்டும்
            </p>
          </motion.div>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="mt-5 max-w-[540px] text-[15px] leading-relaxed sm:text-base"
            style={{ color: 'var(--text-secondary)', fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '0.01em' }}
          >
            Premium NEET Physics coaching crafted for Tamil medium aspirants who aim for medical excellence.
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
            Trusted by 1000+ NEET aspirants across Tamil Nadu
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.82 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5"
          >
            <motion.a
              href="#courses"
              className="hero-btn-primary inline-flex w-full items-center justify-center gap-2 px-7 py-3.5 text-sm sm:w-auto"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              Join 2027 Batch
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#inside"
              className="hero-btn-secondary inline-flex w-full items-center justify-center gap-2 px-7 py-3.5 text-sm sm:w-auto"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Play className="w-4 h-4" />
              Get Free Demo Class
            </motion.a>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.94 }}
            className="mt-4 flex items-center gap-2.5 text-[11px] uppercase tracking-[0.15em]"
            style={{ color: 'var(--text-dim)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent-warm)' }} />
            Limited seats available. Batch closing soon.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

function YouTubeSection() {
  const videos = [
    {
      id: "Aq_P9_BZQZg",
      title: "Wasted 11th To Govt MBBS Seat NEET 2027- How? 1 Year Plan to Score 650+ in NEET Exam",
      duration: "18:42",
      views: "45K",
      time: "2 weeks ago"
    },
    {
      id: "H8anJmFwjQQ",
      title: "Units & Measurements | Dimensional Analysis Part - 1 | NST",
      duration: "32:15",
      views: "22K",
      time: "1 month ago"
    },
    {
      id: "TBmdKepSgX8",
      title: "Revolution in NEET Physics Coaching: Zero 2 Hero NEET/JEE 2026 Physics Course NST",
      duration: "15:28",
      views: "38K",
      time: "3 days ago"
    },
    {
      id: "wSyU_PqMYz0",
      title: "NEET 2026 Strategy: Last 6 Months Preparation Plan",
      duration: "22:18",
      views: "67K",
      time: "1 week ago"
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const activeVideo = videos[activeIndex]

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">YouTube Authority</span>
          <h2 className="heading-xl mt-4">
            Trusted by <em className="not-italic text-academic">Lakhs</em> of NEET Aspirants
          </h2>
          <p className="body-text mt-4 max-w-xl mx-auto">
            Thousands of students improve their Physics score every year through our free Tamil medium content.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="card rounded-full px-5 py-2.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent-warm)' }} />
            <span className="text-sm" style={{ color: 'var(--text-primary)' }}>1L+ Subscribers</span>
          </div>
          <div className="card rounded-full px-5 py-2.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent-primary)' }} />
            <span className="text-sm" style={{ color: 'var(--text-primary)' }}>150+ Strategy Sessions</span>
          </div>
          <div className="card rounded-full px-5 py-2.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--text-dim)' }} />
            <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Tamil Medium First</span>
          </div>
        </motion.div>

        <motion.a
          href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open YouTube video: ${activeVideo.title}`}
          className="group block overflow-hidden rounded-2xl card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="relative w-full aspect-video bg-slate-200"
            style={{ borderRadius: '12px', overflow: 'hidden' }}
          >
            <img
              src={`https://img.youtube.com/vi/${activeVideo.id}/maxresdefault.jpg`}
              alt={activeVideo.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${activeVideo.id}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300" />
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Play className="h-14 w-14 fill-current text-white/90 drop-shadow-lg sm:h-20 sm:w-20" />
            </motion.div>
            <span className="absolute bottom-3 left-3 z-20 text-xs text-white/90 bg-slate-900/60 px-2 py-0.5 rounded">
              {activeVideo.duration}
            </span>
            <div
              className="absolute bottom-0 left-0 right-0 z-10 hidden sm:block"
              style={{ padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}
            >
              <h3 className="font-medium text-lg text-white mb-1">{activeVideo.title}</h3>
              <p className="text-sm text-white/70">{activeVideo.views} views | {activeVideo.time}</p>
            </div>
          </div>
          <div className="space-y-2 p-4 sm:hidden">
            <div className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em]" style={{ background: 'oklch(72% 0.18 162 / 0.1)', color: 'var(--accent-primary)' }}>
              Now Playing
            </div>
            <h3 className="line-clamp-2 text-base font-medium text-foreground">{activeVideo.title}</h3>
            <p className="mt-1 text-sm text-secondary">{activeVideo.views} views | {activeVideo.time}</p>
          </div>
        </motion.a>

        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
          {videos.map((video, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-pressed={activeIndex === i}
              aria-label={`Select video: ${video.title}`}
              className="group relative w-full cursor-pointer overflow-hidden rounded-lg"
              style={{
                aspectRatio: '16/9',
                objectFit: 'cover',
                borderRadius: '8px',
                outline: activeIndex === i ? '2px solid var(--accent-primary)' : 'none',
                outlineOffset: '2px',
                boxShadow: activeIndex === i ? '0 10px 24px oklch(40% 0.10 145 / 0.16)' : 'none'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-85 transition-opacity duration-180"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="absolute bottom-1 left-1 z-10 text-xs text-white/90 bg-slate-900/60 px-1.5 py-0.5 rounded">{video.duration}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

function InsideClassSection() {
  const features = [
    { icon: BookOpen, title: "Tamil Explanation", desc: "Every concept explained in pure Tamil. No English barrier." },
    { icon: Award, title: "Exam Pattern Focus", desc: "We teach what NEET asks. Not what textbooks write." },
    { icon: Clock, title: "Shortcut Techniques", desc: "Solve complex Physics problems in under 60 seconds." },
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
              Inside a Real <em className="not-italic text-academic">NST Class</em>
            </h2>
            <p className="text-secondary mt-6 text-lg leading-relaxed">
              Not just lectures. A complete learning environment designed for Tamil medium NEET dominance.
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
                    aria-label="Play NST class preview"
                    className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
                  >
                    <Play className="w-7 h-7 text-blue-500 ml-1 fill-current" />
                  </button>
                  <p className="text-foreground font-medium text-sm">NST ELITE Live Session</p>
                  <p className="text-secondary text-xs mt-1">Electrostatics - Tamil Medium</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center" style={{ color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: '12px' }}>
                    DR
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">Dr. Sudharshan R.</p>
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
                Every session comes with downloadable Tamil notes & practice sheets.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CoursesSection() {
  const courses = [
  {
    name: "NST ELITE",
    tag: "Most Popular",
    price: "Rs. 14,999",
    original: "Rs. 30,000",
    discount: "51% OFF",
    features: ["Structured schedule with planned classes", "Live + Recorded NEET-oriented lectures", "Personal Mentorship & performance tracking", "Daily Practice Tests (DPT)", "Chapter, Weekly & Monthly Tests", "Detailed Test Analysis & Discussion", "Premium Notes PDF for quick revision", "24x7 Doubt Solving Support"],
    whoIsFor: ["Students who need proper guidance & discipline", "Serious NEET aspirants targeting top ranks", "Students who want mentor support + structured prep"],
    whatMakesSpecial: ["Fixed schedule for consistency", "Mentor monitoring your progress", "Strong focus on rank improvement", "Complete NEET preparation system"],
    popular: true
  },
    {
      name: "NST FLEXI",
      tag: "Flexible",
      price: "Rs. 11,999",
      original: "Rs. 21,000",
      discount: "43% OFF",
      features: ["Chapter-wise Purchase", "Self-paced", "PDF Notes", "Doubt Support"],
      popular: false
    },
    {
      name: "NPTS",
      tag: "Test Series",
      price: "Rs. 2,999",
      original: "Rs. 5,000",
      discount: "40% OFF",
      features: ["Prediction Tests", "NEET Pattern", "Analysis Report", "Rank Predictor"],
      popular: false
    },
    {
      name: "Boot Camp",
      tag: "Crash Course",
      price: "Rs. 249",
      original: "Rs. 2,000",
      discount: "88% OFF",
      features: ["3-Day Intensive", "Last Minute Prep", "Shortcut Techniques", "Priority Support"],
      popular: false
    }
  ]
  const [primaryCourse, ...secondaryCourses] = courses

  const testimonials = [
    { name: "Bhuvanessh S", rating: "5/5", text: "Amazing teaching like wow my best and first teacher in the Physics I see" },
    { name: "Ashwini", rating: "5/5", text: "Hi Anna Thank you so much ennaku shm idhu varaikum lvalo crystal clear understand aagala" },
    { name: "Priya Darshini M", rating: "5/5", text: "Physics concept lam super aa crystal clear aa understand aachi. Best online platform" }
  ]

  return (
    <section id="courses" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-widest text-secondary">Programs</span>
          <h2
            className="text-4xl sm:text-5xl text-foreground mt-4 leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Programs built for <em className="not-italic text-academic">NEET dominance</em>
          </h2>
          <p className="text-secondary mt-4 text-lg">
            Every batch is engineered around one goal: maximum Physics score in Tamil medium.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          <motion.div
            className="md:col-span-8 card rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {primaryCourse?.popular && (
              <div className="absolute right-3 top-3 text-[11px] sm:right-4 sm:top-4" style={{ color: 'var(--accent-primary)', background: 'oklch(72% 0.18 162 / 0.1)', paddingInline: '8px', paddingBlock: '4px', borderRadius: '9999px' }}>
                {primaryCourse.tag}
              </div>
            )}

            <div className="mb-6">
              <h3 className="pr-20 text-3xl font-medium text-foreground sm:pr-0">{primaryCourse?.name}</h3>
              <p className="text-xs text-secondary mt-1">{primaryCourse?.tag}</p>
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-4xl font-light text-foreground sm:text-5xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {primaryCourse?.price}
                </span>
                <span className="text-lg text-secondary line-through">{primaryCourse?.original}</span>
              </div>
              <span className="text-xs" style={{ color: 'var(--accent-primary)', background: 'oklch(72% 0.18 162 / 0.1)', paddingInline: '8px', paddingBlock: '2px', borderRadius: '4px', display: 'inline-block', marginTop: '8px' }}>
                {primaryCourse?.discount}
              </span>
            </div>

<h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Why ELITE Batch?</h4>
<ul className="space-y-3 mb-8">
  {primaryCourse?.features.map((feature, j) => (
    <li key={j} className="flex items-center gap-2 text-base text-secondary">
      <Check className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
      {feature}
    </li>
  ))}
</ul>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Who is this for?</h4>
  <ul className="space-y-2">
    {primaryCourse?.whoIsFor?.map((item, j) => (
      <li key={j} className="flex items-center gap-2 text-sm text-secondary">
        <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
        {item}
      </li>
    ))}
  </ul>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>What Makes ELITE Special?</h4>
  <ul className="space-y-2">
    {primaryCourse?.whatMakesSpecial?.map((item, j) => (
      <li key={j} className="flex items-center gap-2 text-sm text-secondary">
        <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
        {item}
      </li>
    ))}
  </ul>
</div>

            <motion.a 
              href="#contact"
              className="relative block w-full overflow-hidden py-3 text-center text-base btn-primary btn-glow sm:inline-block sm:w-auto sm:px-8"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Scoring 150+
            </motion.a>
          </motion.div>

          <div className="grid gap-4 md:col-span-4 md:grid-rows-3 md:h-full">
              {secondaryCourses.map((course, i) => (
                <motion.div
                  key={i}
                  className="card rounded-xl p-5 relative flex-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <div className="mb-3">
                  <h3 className="text-lg text-foreground font-medium">{course.name}</h3>
                  <p className="text-xs text-secondary mt-1">{course.tag}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl text-foreground font-light" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {course.price}
                    </span>
                    <span className="text-sm text-secondary line-through">{course.original}</span>
                  </div>
                  <span className="text-xs" style={{ color: 'var(--accent-primary)', background: 'oklch(72% 0.18 162 / 0.1)', paddingInline: '8px', paddingBlock: '2px', borderRadius: '4px', display: 'inline-block', marginTop: '8px' }}>
                    {course.discount}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {course.features.slice(0, 2).map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-secondary">
                      <Check className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a 
                  href="#contact"
                  className="block w-full text-center text-sm btn-primary py-2.5"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="card rounded-xl p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <p className="text-yellow-500 text-sm mb-2">{t.rating}</p>
              <p className="text-secondary text-sm mb-3 leading-relaxed">"{t.text}"</p>
              <p className="text-foreground text-xs font-medium">{t.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ResultsSection() {
  const students = [
    { name: "Vetrivel", score: "176", total: "180", story: "From 5 to 176. Unthinkable.", initial: "V" },
    { name: "Ashwini", score: "690", total: "Total", story: "Chose NST over Allen. Confident.", initial: "A" },
    { name: "Santhosh", score: "180", total: "180", story: "Tamil medium. Full marks.", initial: "S" },
  ]

  return (
    <section id="results" className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
            <span className="text-xs uppercase tracking-widest text-secondary">Results</span>
          <h2
            className="text-4xl sm:text-5xl text-foreground mt-4 leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Scoreboards that <em className="not-italic text-academic">speak louder</em>
          </h2>
          <p className="text-secondary mt-4 text-lg">
            Every number here represents a white coat earned through Tamil medium excellence.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {/* Vetrivel's card - left column */}
          <motion.div
            className="card relative overflow-hidden rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium uppercase tracking-[0.05em] sm:right-5 sm:top-5" style={{ color: 'var(--accent-primary)', background: 'oklch(72% 0.18 162 / 0.1)' }}>
              <Check className="w-3 h-3" />
              Verified
            </div>
            
            <div className="flex flex-col gap-6 sm:gap-7 md:flex-row md:items-start md:gap-8">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full card text-2xl font-bold sm:h-20 sm:w-20 sm:text-3xl" style={{ color: 'var(--accent-primary)' }}>
                  {students[0].initial}
                </div>
              </div>
              
              <div className="flex-1 pt-8 sm:pt-7 md:pt-0">
                <p className="mb-2 text-xs uppercase tracking-wider text-secondary">{students[0].name}</p>
                <p className="mb-3 text-5xl font-light text-foreground sm:text-6xl md:text-7xl lg:text-8xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {students[0].score}<span className="text-2xl text-secondary sm:text-3xl md:text-4xl">/{students[0].total}</span>
                </p>
                <p className="max-w-[22rem] text-base font-medium leading-relaxed sm:text-lg" style={{ color: 'var(--accent-primary)' }}>{students[0].story}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right stacked column - Ashwini + Santhosh */}
          <div className="flex flex-col gap-4">
            {students.slice(1).map((student, i) => (
              <motion.div
                key={i}
                className="card relative flex items-center gap-3 rounded-xl p-4 sm:gap-4 sm:p-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full card font-bold sm:h-12 sm:w-12" style={{ color: 'var(--accent-primary)' }}>
                  {student.initial}
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-[11px] uppercase tracking-wider text-secondary sm:text-xs">{student.name}</p>
                  <p className="text-[1.75rem] font-light text-foreground sm:text-3xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {student.score}<span className="text-lg text-secondary sm:text-xl">/{student.total}</span>
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--accent-primary)' }}>{student.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Case study card - spans both columns */}
          <motion.div
            className="card relative mx-auto max-w-4xl overflow-hidden rounded-2xl p-6 sm:p-8 md:col-span-2 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
              <div className="text-center md:max-w-xl md:text-left">
                <span className="mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider" style={{ color: 'var(--accent-primary)', background: 'oklch(72% 0.18 162 / 0.1)' }}>
                  Featured Case Study
                </span>
                <h3 className="text-2xl md:text-3xl text-foreground font-light mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  From 40 to 165 in 6 months
                </h3>
                <p className="text-secondary text-sm md:text-base leading-relaxed max-w-md">
                  "I joined NST as a dropper with barely 40 marks in Physics. Dr. S did not just teach formulas, he changed how I think about Physics."
                </p>
                <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
                  <div className="w-10 h-10 card rounded-full flex items-center justify-center font-bold" style={{ color: 'var(--accent-primary)' }}>R</div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Rohini K.</p>
                    <p className="text-secondary text-xs">NEET 2025 | Govt. Medical College</p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 rounded-2xl px-5 py-4 sm:px-6" style={{ background: 'var(--bg-elevated)' }}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="min-w-[4rem] text-center">
                    <p className="text-secondary text-xs uppercase tracking-wider mb-1">Before</p>
                    <p className="text-4xl text-secondary font-light" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>40</p>
                  </div>
                  <ArrowRight className="w-8 h-8" style={{ color: 'var(--accent-primary)' }} />
                  <div className="min-w-[4rem] text-center">
                    <p style={{ color: 'var(--accent-primary)' }} className="text-xs uppercase tracking-wider mb-1">After</p>
                    <p className="text-4xl text-foreground font-light" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>165</p>
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

function MethodSection() {
  const steps = [
    { num: "01", title: "Concept First", desc: "Every topic broken down into intuitive Tamil explanations. No textbook jargon." },
    { num: "02", title: "Pattern Recognition", desc: "We decode NEET's repeating patterns. 30+ predicted MCQs every single year." },
    { num: "03", title: "Mock Pressure", desc: "Timed tests under exam conditions. Build speed, accuracy, and unshakeable confidence." },
    { num: "04", title: "1-on-1 Mentoring", desc: "Personal doubt sessions. Dr. S tracks your progress personally until you hit your target.", highlight: true },
  ]

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-widest text-secondary">The Method</span>
            <h2
              className="text-4xl sm:text-5xl text-foreground mt-4 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              How we turn <em className="not-italic text-academic">fear into 150+</em>
            </h2>
            <p className="text-secondary mt-6 text-lg leading-relaxed">
              No rote memorization. No English-only explanations. Just pure conceptual clarity in Tamil, delivered by a doctor who cracked NEET himself.
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-5"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
               >
                 <div className={cn(
                  "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-light text-xl",
                  step.highlight ? "text-background" : "card"
                )} style={{ 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  background: step.highlight ? 'var(--accent-primary)' : undefined,
                  color: step.highlight ? '#f6f6f4' : 'var(--accent-primary)'
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg text-foreground font-medium">{step.title}</h3>
                  <p className="text-secondary text-sm mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  const features = [
    { name: "Tamil Explanation", nst: true, others: false },
    { name: "Personal Mentorship", nst: true, others: false },
    { name: "Prediction Accuracy", nst: true, others: "partial" },
    { name: "Doctor Faculty", nst: true, others: false },
    { name: "Affordable Pricing", nst: true, others: false },
  ]

  return (
    <section className="relative py-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
         >
           <span className="text-xs uppercase tracking-widest text-secondary">Comparison</span>
          <h2
            className="text-4xl sm:text-5xl text-foreground mt-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Why Students Choose <em className="not-italic text-academic">NST</em>
          </h2>
        </motion.div>

        <motion.div
          className="card overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
         >
           <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(72px,0.75fr)_minmax(72px,0.75fr)] border-b text-[11px] font-medium uppercase tracking-[0.08em] sm:grid-cols-[minmax(0,1.5fr)_minmax(88px,0.75fr)_minmax(88px,0.75fr)] sm:text-xs" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="px-4 py-4 text-secondary sm:px-6">Feature</div>
            <div className="bg-surface px-4 py-4 text-center font-medium text-foreground sm:px-6" style={{ background: 'var(--bg-surface)' }}>NST</div>
            <div className="px-4 py-4 text-center text-secondary sm:px-6">Others</div>
          </div>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-[minmax(0,1.35fr)_minmax(72px,0.75fr)_minmax(72px,0.75fr)] items-center border-b text-sm last:border-0 sm:grid-cols-[minmax(0,1.5fr)_minmax(88px,0.75fr)_minmax(88px,0.75fr)]" style={{ borderColor: 'var(--border-subtle)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
             >
               <div className="px-4 py-4 leading-snug text-foreground sm:px-6">{feature.name}</div>
              <div className="px-4 py-4 text-center sm:px-6">
                <span className={cn(
                  "inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold",
                  feature.nst ? "bg-emerald-400/10 text-emerald-400" : "bg-red-400/10 text-red-400"
                )}>
                  {feature.nst ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                </span>
              </div>
              <div className="px-4 py-4 text-center sm:px-6">
                <span className={cn(
                  "inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold",
                  feature.others === true ? "bg-emerald-400/10 text-emerald-400" :
                  feature.others === "partial" ? "bg-amber-400/10 text-amber-400" :
                  "bg-red-400/10 text-red-400"
                )}>
                  {feature.others === true ? <Check className="w-3.5 h-3.5" /> :
                   feature.others === "partial" ? <Minus className="w-3.5 h-3.5" /> :
                   <X className="w-3.5 h-3.5" />}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Vetri's score jumped from 5 to 176. That was impossible before NST. The Tamil explanations changed everything.",
      name: "Vetrivel",
      detail: "Score: 176/180 Physics",
      initial: "V"
    },
    {
      quote: "Ashwini chose NST over Allen and secured 690 total. The prediction tests alone are worth ten times the price.",
      name: "Ashwini",
      detail: "Score: 690 Total NEET",
      initial: "A"
    },
    {
      quote: "Santhosh scored full marks 180/180 in Tamil medium. NST made it happen. The confidence Dr. S gives is unreal.",
      name: "Santhosh",
      detail: "Score: 180/180 Physics",
      initial: "S"
    },
    {
      quote: "Mehaa's Physics crossed 150+ after the prediction tests. Every rupee spent on NST returned a hundredfold in score.",
      name: "Mehaa",
      detail: "Score: 150+ Physics",
      initial: "M"
    },
  ]

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-widest text-secondary">Stories</span>
          <h2
            className="text-4xl sm:text-5xl text-foreground mt-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Voices from the <em className="not-italic text-academic">white coat journey</em>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6 items-start">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
               className={cn(
                  "card rounded-2xl p-6 sm:p-7 md:p-8",
                  i % 2 === 0 ? "md:mt-8" : "md:mt-0"
                )}
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em]" style={{ background: 'oklch(72% 0.18 162 / 0.1)', color: 'var(--accent-primary)' }}>
                  <Quote className="h-3.5 w-3.5" />
                  Student Story
                </div>
                <span className="text-xs font-medium tracking-[0.18em] text-secondary">{t.detail}</span>
              </div>
              <p className="mb-6 text-base leading-relaxed text-foreground sm:text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 card rounded-full flex items-center justify-center font-bold" style={{ color: 'var(--accent-primary)' }}>
                  {t.initial}
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">{t.name}</p>
                  <p className="text-secondary text-xs">NST Student</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


function AboutSection() {
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);

  return (
    <section id="about" className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="card relative flex aspect-[0.96] items-center justify-center overflow-hidden rounded-3xl sm:aspect-square"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="relative z-10 text-center">
                <div className="w-36 h-36 mx-auto card rounded-full flex items-center justify-center mb-4 relative">
                  <div className="absolute inset-[2px] rounded-full bg-gradient-to-tr from-emerald-200/60 via-transparent to-blue-200/60 animate-[spin_8s_linear_infinite]" />
                  <div className="w-28 h-28 rounded-full flex items-center justify-center relative z-10" style={{ background: '#2F4F6F' }}>
                    <span className="text-3xl text-white font-light" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>DR. S</span>
                  </div>
                  <motion.div 
                    className="absolute -top-1 -right-1 z-20"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="bg-emerald-500 text-background text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg shadow-emerald-500/20">
                      <Check className="w-3 h-3" />
                      Verified
                    </div>
                  </motion.div>
                </div>
                <p className="text-2xl text-foreground font-light" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Dr. Sudharshan R.</p>
                <p className="text-sm mt-1" style={{ color: 'var(--accent-primary)' }}>MBBS, Govt. Erode Medical College</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span
                    className="rounded-full border px-3 py-1 text-xs"
                    style={{ color: 'var(--accent-primary)', borderColor: 'var(--border-subtle)', background: 'var(--bg-surface)' }}
                  >
                    NEET 2019 Cracker
                  </span>
                  <span
                    className="rounded-full border px-3 py-1 text-xs"
                    style={{ color: 'var(--accent-primary)', borderColor: 'var(--border-subtle)', background: 'var(--bg-surface)' }}
                  >
                    1,000+ Students
                  </span>
                  <span
                    className="rounded-full border px-3 py-1 text-xs sm:hidden"
                    style={{ color: 'var(--accent-primary)', borderColor: 'var(--border-subtle)', background: 'var(--bg-surface)' }}
                  >
                    2019 NEET Cracker
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 right-0 z-20 hidden rounded-xl card p-4 sm:block sm:-bottom-5 sm:-right-4 lg:-right-6"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-3xl text-foreground font-light" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>2019</p>
              <p className="text-secondary text-xs uppercase tracking-wider">NEET Cracker</p>
            </motion.div>

            <div className="absolute left-0 top-0 z-20 rounded-lg px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-background shadow-lg sm:-left-4 sm:-top-4" style={{ background: 'var(--accent-primary)' }}>
              Authority
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-widest text-secondary mb-3 block">The Mentor</span>
            
            <h2
              className="text-3xl sm:text-4xl text-foreground leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Cracked NEET 2019 with State Rank 1207, now mentors 1000+ students
            </h2>
            <p className="text-foreground font-medium mt-4 text-lg">
              Teaching NEET Physics in Tamil, like a brother, with real exam strategies.
            </p>

            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                <p className="text-secondary text-sm">
                  <strong className="text-foreground">Self-study success:</strong> No coaching, just strategy, proved it's possible
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                <p className="text-secondary text-sm">
                  <strong className="text-foreground">1000+ students:</strong> Mentored to score 120+ in Physics through NST
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                <p className="text-secondary text-sm">
                  <strong className="text-foreground">30+ MCQs yearly:</strong> Predicted questions that appear in NEET Physics & Chemistry
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                'MBBS | Govt. Erode Medical College', 
                'Self-Study | No Coaching'
              ].map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 border rounded-full text-[11px] text-secondary inline-block"
                  style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-surface)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <button 
                type="button"
                aria-expanded={isStoryExpanded}
                onClick={() => setIsStoryExpanded(!isStoryExpanded)}
                className="text-sm font-medium transition-colors flex items-center gap-1 group" style={{ color: 'var(--accent-primary)' }}
              >
                {isStoryExpanded ? 'Hide Story' : 'Read Full Story'}
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isStoryExpanded ? "rotate-180" : "group-hover:translate-y-0.5")} />
              </button>
              
              <AnimatePresence>
                {isStoryExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0.95 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden origin-top"
                  >
                    <p className="text-secondary mt-4 text-base leading-relaxed p-5 card rounded-xl" style={{ borderColor: 'var(--border-subtle)' }}>
                      Dr. Sudharshan R (MBBS, Govt. Erode Medical College) cracked NEET 2019 with State Rank 1207 through self-study as a fresher. Since then, through NST (NEET Strategies Tamil), he has guided 1000+ students to score 120+ in Physics. His content is widely followed for predicting NEET MCQs, with 30+ questions appearing in Physics and Chemistry every year over the past 6 years.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 rounded-xl px-4 py-4" style={{ background: 'oklch(72% 0.18 162 / 0.08)' }}>
              <p className="text-foreground font-medium">
                "Physics will no longer be your weak subject. That's a promise."
              </p>
              <p className="text-secondary text-sm mt-1">
                Join NST Family and start your NEET preparation with clarity and confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ClassDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState({ label: 'Select Class', value: '' })

  const options = [
    { value: '11', label: 'Class 11', description: 'Starting NEET preparation' },
    { value: '12', label: 'Class 12', description: 'Crucial year for NEET' },
    { value: 'dropper', label: 'Dropper', description: 'One year dedicated prep' },
  ]

  const handleSelect = (option: typeof options[0]) => {
    setSelected(option)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <label htmlFor="class-selection" className="block text-sm text-secondary mb-1.5">Class</label>
      <input type="hidden" name="studentClass" value={selected.value} />
      <motion.button
        id="class-selection"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="class-options"
        className="w-full px-4 py-3 border rounded-lg text-foreground focus:outline-none transition-all flex items-center justify-between text-left"
        style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
        whileTap={{ scale: 0.99 }}
      >
        <span className={selected.value ? 'text-foreground' : 'text-secondary'}>
          {selected.label}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-secondary" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="class-options"
            role="listbox"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute w-full mt-2 rounded-lg border overflow-hidden z-50 shadow-xl"
            style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
          >
            {options.map((option, index) => (
              <motion.button
                key={option.value}
                type="button"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1, delay: index * 0.03 }}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={selected.value === option.value}
                className={cn(
                  "w-full px-4 py-3 text-left transition-colors duration-200 flex items-center justify-between group",
                  selected.value === option.value
                    ? "bg-white/10 text-foreground"
                    : "text-secondary hover:text-foreground"
                )}
              >
                <div>
                  <div className="text-sm font-medium">{option.label}</div>
                  <div className="text-xs text-secondary/70">{option.description}</div>
                </div>
                {selected.value === option.value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Check className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function CTASection() {
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success'>('idle')
   
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    
    setTimeout(() => {
      setFormState('success')
    }, 1000)
  }
  
  if (formState === 'success') {
    return (
      <section id="contact" className="relative py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="card rounded-2xl p-12">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'oklch(72% 0.18 162 / 0.15)' }}>
              <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center" style={{ borderColor: 'var(--accent-primary)' }}>
                <Check className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
              </div>
            </div>
            <h3 className="text-2xl text-foreground mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Application Received!
            </h3>
            <p className="text-secondary mb-6">
              Dr. Sudharshan's team will contact you within 24 hours.
            </p>
            <a 
              href="https://wa.me/918610690010" 
              className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
              style={{ color: 'var(--accent-primary)' }}
            >
              <MessageCircle className="w-5 h-5" />
              Or message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="section-label">Start Today</span>
        <h2 className="heading-xl mt-4" style={{ fontFamily: "'Arima Madurai', sans-serif", letterSpacing: 0 }}>
          உங்கள் Doctor பயணம்<br />
          <em className="not-italic text-academic">இன்றே தொடங்கட்டும்</em>
        </h2>
        <p className="body-text mt-6 max-w-xl mx-auto">
          One decision. One year. One white coat. Call now and book your free demo class.
        </p>

        <div className="mt-10 grid gap-4 sm:flex sm:flex-wrap sm:justify-center">
          <motion.a 
            href="tel:+918610690010" 
            className="inline-flex w-full items-center justify-center gap-3 px-8 py-4 btn-primary btn-glow sm:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5" />
            8610690010
          </motion.a>
          <motion.a 
            href="https://wa.me/918610690010" 
            className="inline-flex w-full items-center justify-center gap-3 px-8 py-4 btn-secondary sm:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </motion.a>
        </div>

        <form 
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="mt-12 max-w-lg mx-auto space-y-4 text-left"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-secondary mb-1.5">First Name *</label>
              <input 
                type="text" 
                name="firstName"
                required 
                className="w-full px-4 py-3 border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none transition-colors input-glow"
                style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label className="block text-sm text-secondary mb-1.5">Last Name *</label>
              <input 
                type="text" 
                name="lastName"
                required 
                className="w-full px-4 py-3 border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none transition-colors input-glow"
                style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-secondary mb-1.5">Phone Number *</label>
              <input 
                type="tel" 
                name="phone"
                required 
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none transition-colors input-glow"
                style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
                placeholder="10-digit number"
              />
            </div>
            <ClassDropdown />
          </div>
          <div>
            <label className="block text-sm text-secondary mb-1.5">Target NEET Score</label>
            <input 
              type="text" 
              name="targetScore"
              className="w-full px-4 py-3 border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none transition-colors input-glow"
              style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              placeholder="e.g., 650+"
            />
          </div>
          <div>
            <label className="block text-sm text-secondary mb-1.5">Message (Optional)</label>
            <textarea 
              name="message"
              rows={3}
              className="w-full px-4 py-3 border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none transition-colors resize-none input-glow"
              style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              placeholder="Any specific requirements..."
            />
          </div>
          <motion.button 
            type="submit" 
            disabled={formState === 'submitting'}
            className="w-full btn-primary py-4 mt-2 disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {formState === 'submitting' ? 'Submitting...' : 'Book Free Demo Call'}
          </motion.button>
          <p className="text-center text-secondary text-xs">
            Dr. Sudharshan's team will reach out within 24 hours
          </p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-12" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 card rounded-md flex items-center justify-center text-foreground font-bold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            N
          </div>
          <span className="font-medium text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>NST</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-secondary md:gap-6">
          <a href="#home" className="hover:text-foreground transition-colors">Home</a>
          <a href="#courses" className="hover:text-foreground transition-colors">Courses</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
          <motion.a
            href="https://www.youtube.com/@NeetstrategiesinTamil"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 card rounded-full flex items-center justify-center text-secondary hover:text-red-500 transition-colors"
            title="YouTube"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </motion.a>
          <motion.a 
            href="https://wa.me/918610690010" 
            className="w-9 h-9 card rounded-full flex items-center justify-center text-secondary hover:text-emerald-500 transition-colors"
            title="WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-4 h-4" />
          </motion.a>
          <motion.a 
            href="tel:+918610690010" 
            className="w-9 h-9 card rounded-full flex items-center justify-center text-secondary hover:text-blue-400 transition-colors"
            title="Call"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 text-center text-xs text-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        (c) 2026 NEET Strategies Tamil. All rights reserved.
      </div>
    </footer>
  )
}

function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-2 px-3 py-3 shadow-[0_-12px_30px_rgba(0,0,0,0.06)] md:hidden" style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--border-subtle)' }}>
      <a 
        href="tel:+918610690010" 
        className="flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-center text-sm font-medium text-background"
        style={{ background: 'var(--accent-primary)' }}
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a 
        href="#contact" 
        className="flex-1 rounded-full bg-foreground py-3 text-center text-sm font-medium text-background"
      >
        Join Now
      </a>
    </div>
  )
}

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: '#f6f6f4' }}>
      <div className="fixed inset-0 pointer-events-none" style={{ opacity: 0.03, zIndex: 0 }}>
        <PhysicsLayer />
      </div>
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <YouTubeSection />
        <InsideClassSection />
        <CoursesSection />
        <ResultsSection />
        <MethodSection />
        <ComparisonSection />
        <TestimonialsSection />
        <AboutSection />
        <CTASection />
        <Footer />
        <StickyMobileCTA />
        
        <div className="h-24 md:hidden" />
      </div>
    </main>
  )
}
