import React from 'react'
import { useState, useEffect } from 'react'
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
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-baseline">
            <span
              className="text-2xl tracking-tight"
              style={{ fontFamily: "'General Sans', sans-serif", color: 'var(--text-primary)' }}
            >
              NST
            </span>
            <sup className="text-[10px] ml-0.5" style={{ color: 'var(--text-dim)' }}>®</sup>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--text-dim)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="btn-primary btn-glow px-5 py-2 text-sm relative overflow-hidden"
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

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Right-side Hero Image */}
      <div className="absolute inset-y-0 right-0 w-[68%] lg:block hidden">
        <img
          src="/hero.png"
          alt="NEET Physics coaching - Student studying"
          className="absolute inset-0 w-full h-full object-cover object-right"
          style={{
            filter: 'contrast(1.05) saturate(1.02)',
          }}
          loading="eager"
        />
      </div>

      {/* Gradient Overlay — left-to-right fade */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(246,246,244,0.92) 0%, rgba(246,246,244,0.6) 40%, rgba(246,246,244,0.1) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 h-screen flex items-center">
        <div className="w-full max-w-[520px]">
          {/* Eyebrow Label */}
          <div className="animate-fade-rise mb-6">
            <span className="text-xs tracking-wider" style={{ color: 'var(--text-dim)', fontFamily: "'General Sans', sans-serif" }}>
              Dr. Sudharshan R. | MBBS
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="animate-fade-rise tracking-tight leading-[1.1]"
            style={{ fontFamily: "'General Sans', sans-serif", color: 'var(--text-primary)', letterSpacing: '0.02em' }}
          >
            <span className="block text-4xl sm:text-5xl lg:text-[56px] font-[500]">
              Physics Easy{' '}
              <span className="text-academic" style={{ fontFamily: "'Arima Madurai', sans-serif", letterSpacing: 0 }}>— ஆ</span>
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-[68px] mt-1 font-bold leading-[1.05]" style={{ fontFamily: "'Arima Madurai', sans-serif", letterSpacing: 0 }}>
              Feel பண்ணுங்க
            </span>
          </h1>

          {/* Tamil Emotional Line */}
          <div className="animate-fade-rise-delay mt-6">
            <p className="text-2xl sm:text-3xl lg:text-[32px] leading-[1.2]" style={{ fontFamily: "'Arima Madurai', sans-serif", letterSpacing: 0, color: 'var(--text-secondary)' }}>
              Doctor ஆகும் உங்கள் பயணம்
            </p>
            <p className="text-2xl sm:text-3xl lg:text-[32px] leading-[1.15] mt-0.5 font-bold" style={{ fontFamily: "'Arima Madurai', sans-serif", letterSpacing: 0, color: 'var(--text-emphasis)' }}>
              இன்றே தொடங்கட்டும்
            </p>
          </div>

          {/* Supporting Paragraph */}
          <p className="animate-fade-rise-delay text-[15px] mt-6 leading-relaxed max-w-[500px]" style={{ color: 'var(--text-secondary)', fontFamily: "'General Sans', sans-serif", letterSpacing: '0.01em' }}>
            Premium NEET Physics coaching crafted for Tamil medium aspirants who aim for medical excellence.
          </p>

          {/* Inline Credibility */}
          <p className="animate-fade-rise-delay text-sm mt-5 flex items-center gap-2" style={{ color: 'var(--text-dim)', fontFamily: "'General Sans', sans-serif", letterSpacing: '0.01em' }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }} />
            Trusted by 1000+ NEET aspirants across Tamil Nadu
          </p>

          {/* CTA Row */}
          <div className="animate-fade-rise-delay-2 flex flex-wrap items-center gap-3.5 mt-9">
            <motion.a
              href="#courses"
              className="hero-btn-primary px-7 py-3.5 text-sm inline-flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              Join 2027 Batch
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#inside"
              className="hero-btn-secondary px-7 py-3.5 text-sm inline-flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Play className="w-4 h-4" />
              Get Free Demo Class
            </motion.a>
          </div>

          {/* Subtext */}
          <p className="animate-fade-rise-delay-2 text-[11px] uppercase tracking-[0.15em] mt-4 flex items-center gap-2.5" style={{ color: 'var(--text-dim)', fontFamily: "'General Sans', sans-serif" }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent-warm)' }} />
            Limited seats available. Batch closing soon.
          </p>
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
  ]

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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
          transition={{ duration: 0.5, delay: 0.1 }}
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

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {videos.map((video, i) => (
            <motion.a
              key={i}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden block h-full card-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div
                className="aspect-video relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/${video.id}/mqdefault.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                <motion.div
                  className="z-20"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play className="w-12 h-12 text-white/90 drop-shadow-lg fill-current" />
                </motion.div>
                <span className="absolute bottom-3 left-3 z-20 text-xs text-white/90 bg-slate-900/60 px-2 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-sm mb-1 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{video.title}</h3>
                <p className="text-xs" style={{ color: 'var(--text-dim)' }}>{video.views} views • {video.time}</p>
              </div>
            </motion.a>
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
    <section id="inside" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-widest text-secondary">Experience</span>
            <h2
              className="text-4xl sm:text-5xl text-foreground mt-4 leading-tight"
              style={{ fontFamily: "'General Sans', sans-serif" }}
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
                  transition={{ duration: 0.4, delay: i * 0.1 }}
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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card overflow-hidden rounded-2xl">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative flex items-center justify-center">
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto bg-white shadow-lg rounded-full flex items-center justify-center mb-3 cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-blue-500 ml-1 fill-current" />
                  </div>
                  <p className="text-foreground font-medium text-sm">NST ELITE Live Session</p>
                  <p className="text-secondary text-xs mt-1">Electrostatics – Tamil Medium</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center" style={{ color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: '12px' }}>
                    DR
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">Dr. Sudharshan R.</p>
                    <p className="text-secondary text-xs">Live now • 247 watching</p>
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
              transition={{ duration: 0.4, delay: 0.5 }}
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
      price: "₹14,999",
      original: "₹30,000",
      discount: "51% OFF",
      features: ["Full Syllabus Coverage", "Live + Recorded", "PDF Notes", "Mock Tests"],
      popular: true
    },
    {
      name: "NST FLEXI",
      tag: "Flexible",
      price: "₹9,999",
      original: "₹20,000",
      discount: "50% OFF",
      features: ["Chapter-wise Purchase", "Self-paced", "PDF Notes", "Doubt Support"],
      popular: false
    },
    {
      name: "NPTS",
      tag: "Test Series",
      price: "₹2,999",
      original: "₹5,000",
      discount: "40% OFF",
      features: ["Prediction Tests", "NEET Pattern", "Analysis Report", "Rank Predictor"],
      popular: false
    }
  ]

  return (
    <section id="courses" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-secondary">Programs</span>
          <h2
            className="text-4xl sm:text-5xl text-foreground mt-4 leading-tight"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            Programs built for <em className="not-italic text-academic">NEET dominance</em>
          </h2>
          <p className="text-secondary mt-4 text-lg">
            Every batch is engineered around one goal: maximum Physics score in Tamil medium.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={cn(
                "card rounded-2xl p-6 relative overflow-hidden",
                course.popular ? "border-[oklch(55%_0.15_162/0.3)]" : ""
              )}
            >
              {course.popular && (
                <div className="absolute top-4 right-4 text-xs" style={{ color: 'var(--accent-primary)', background: 'oklch(72% 0.18 162 / 0.1)', paddingInline: '8px', paddingBlock: '4px', borderRadius: '9999px' }}>
                  {course.tag}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl text-foreground font-medium">{course.name}</h3>
                {!course.popular && <p className="text-xs text-secondary mt-1">{course.tag}</p>}
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-foreground font-light" style={{ fontFamily: "'General Sans', sans-serif" }}>
                    {course.price}
                  </span>
                  <span className="text-sm text-secondary line-through">{course.original}</span>
                </div>
                <span className="text-xs" style={{ color: 'var(--accent-primary)', background: 'oklch(72% 0.18 162 / 0.1)', paddingInline: '8px', paddingBlock: '2px', borderRadius: '4px', display: 'inline-block', marginTop: '8px' }}>
                  {course.discount}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {course.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-secondary">
                    <Check className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.a 
                href="#contact"
                className="w-full btn-primary btn-glow py-3 text-sm text-center block relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Scoring 150+
              </motion.a>
            </motion.div>
          ))}
        </div>
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
    <section id="results" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-secondary">Results</span>
          <h2
            className="text-4xl sm:text-5xl text-foreground mt-4 leading-tight"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            Scoreboards that <em className="not-italic text-academic">speak louder</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {students.map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card rounded-2xl p-8 text-center relative"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1" style={{ color: 'var(--accent-primary)', background: 'oklch(72% 0.18 162 / 0.1)', fontSize: '10px', fontWeight: '500', letterSpacing: '0.05em', textTransform: 'uppercase', paddingInline: '8px', paddingBlock: '4px', borderRadius: '9999px' }}>
                <Check className="w-3 h-3" />
                Verified
              </div>
              
              <div className="w-12 h-12 mx-auto card rounded-full flex items-center justify-center font-bold text-lg mb-4" style={{ color: 'var(--accent-primary)' }}>
                {student.initial}
              </div>
              
              <p className="text-secondary text-xs uppercase tracking-wider mb-2">{student.name}</p>
              <p className="text-5xl text-foreground font-light mb-1" style={{ fontFamily: "'General Sans', sans-serif" }}>
                {student.score}<span className="text-2xl text-secondary">/{student.total}</span>
              </p>
              <p style={{ color: 'var(--accent-primary)' }} className="text-sm">{student.story}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="text-center md:text-left">
                <span className="inline-block mb-3 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--accent-primary)', background: 'oklch(72% 0.18 162 / 0.1)', paddingInline: '12px', paddingBlock: '4px', borderRadius: '9999px' }}>
                  Featured Case Study
                </span>
                <h3 className="text-2xl md:text-3xl text-foreground font-light mb-2" style={{ fontFamily: "'General Sans', sans-serif" }}>
                  From 40 → 165 in 6 months
                </h3>
                <p className="text-secondary text-sm md:text-base leading-relaxed max-w-md">
                  "I joined NST as a dropper with barely 40 marks in Physics. Dr. S didn't just teach formulas — he changed how I think about Physics."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 card rounded-full flex items-center justify-center font-bold" style={{ color: 'var(--accent-primary)' }}>R</div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Rohini K.</p>
                    <p className="text-secondary text-xs">NEET 2025 • Govt. Medical College</p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-secondary text-xs uppercase tracking-wider mb-1">Before</p>
                    <p className="text-4xl text-secondary font-light" style={{ fontFamily: "'General Sans', sans-serif" }}>40</p>
                  </div>
                  <ArrowRight className="w-8 h-8" style={{ color: 'var(--accent-primary)' }} />
                  <div className="text-center">
                    <p style={{ color: 'var(--accent-primary)' }} className="text-xs uppercase tracking-wider mb-1">After</p>
                    <p className="text-4xl text-foreground font-light" style={{ fontFamily: "'General Sans', sans-serif" }}>165</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="card rounded-full px-6 py-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent-primary)' }} />
            <span className="text-sm text-foreground">1000+ students trained</span>
          </div>
          <div className="card rounded-full px-6 py-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ color: 'var(--accent-muted)' }} />
            <span className="text-sm text-foreground">6 years of predictions</span>
          </div>
          <div className="card rounded-full px-6 py-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--text-dim)' }} />
            <span className="text-sm text-foreground">Tamil medium first</span>
          </div>
        </motion.div>
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
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-widest text-secondary">The Method</span>
            <h2
              className="text-4xl sm:text-5xl text-foreground mt-4 leading-tight"
              style={{ fontFamily: "'General Sans', sans-serif" }}
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
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className={cn(
                  "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-light text-xl",
                  step.highlight ? "text-background" : "card"
                )} style={{ 
                  fontFamily: "'General Sans', sans-serif",
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
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-secondary">Comparison</span>
          <h2
            className="text-4xl sm:text-5xl text-foreground mt-4"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            Why Students Choose <em className="not-italic text-academic">NST</em>
          </h2>
        </motion.div>

        <motion.div
          className="card rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-3 text-sm font-medium border-b" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="px-6 py-4 text-secondary">Feature</div>
            <div className="px-6 py-4 text-foreground bg-surface text-center font-medium" style={{ background: 'var(--bg-surface)' }}>NST</div>
            <div className="px-6 py-4 text-secondary text-center">Others</div>
          </div>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-3 text-sm border-b last:border-0 items-center" style={{ borderColor: 'var(--border-subtle)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="px-6 py-4 text-foreground">{feature.name}</div>
              <div className="px-6 py-4 text-center">
                <span className={cn(
                  "inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold",
                  feature.nst ? "bg-emerald-400/10 text-emerald-400" : "bg-red-400/10 text-red-400"
                )}>
                  {feature.nst ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                </span>
              </div>
              <div className="px-6 py-4 text-center">
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
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-secondary">Stories</span>
          <h2
            className="text-4xl sm:text-5xl text-foreground mt-4"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            Voices from the <em className="not-italic text-academic">white coat journey</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card rounded-2xl p-8"
            >
              <Quote className="w-8 h-8 mb-4" style={{ color: 'oklch(72% 0.18 162 / 0.3)' }} />
              <p className="text-lg text-foreground italic leading-relaxed mb-6" style={{ fontFamily: "'General Sans', sans-serif" }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 card rounded-full flex items-center justify-center font-bold" style={{ color: 'var(--accent-primary)' }}>
                  {t.initial}
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">{t.name}</p>
                  <p className="text-secondary text-xs">{t.detail}</p>
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
    <section id="about" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="aspect-square card rounded-3xl flex items-center justify-center relative overflow-hidden"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="relative z-10 text-center">
                <div className="w-36 h-36 mx-auto card rounded-full flex items-center justify-center mb-4 relative">
                  <div className="absolute inset-[2px] rounded-full bg-gradient-to-tr from-emerald-200/60 via-transparent to-blue-200/60 animate-[spin_8s_linear_infinite]" />
                  <div className="w-28 h-28 rounded-full flex items-center justify-center relative z-10" style={{ background: '#2F4F6F' }}>
                    <span className="text-3xl text-white font-light" style={{ fontFamily: "'General Sans', sans-serif" }}>DR. S</span>
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
                <p className="text-2xl text-foreground font-light" style={{ fontFamily: "'General Sans', sans-serif" }}>Dr. Sudharshan R.</p>
                <p className="text-sm mt-1" style={{ color: 'var(--accent-primary)' }}>MBBS, Govt. Erode Medical College</p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <motion.span 
                    className="px-3 py-1 card rounded-full text-xs cursor-pointer" style={{ color: 'var(--accent-primary)' }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    NEET 2019 Cracker
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 card rounded-full text-xs cursor-pointer" style={{ color: 'var(--accent-primary)' }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    1,000+ Students
                  </motion.span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 card p-4 rounded-xl z-20"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-3xl text-foreground font-light" style={{ fontFamily: "'General Sans', sans-serif" }}>2019</p>
              <p className="text-secondary text-xs uppercase tracking-wider">NEET Cracker</p>
            </motion.div>
            <div className="absolute -top-4 -left-4 text-background px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg z-20" style={{ background: 'var(--accent-primary)' }}>
              Authority
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-widest text-secondary mb-3 block">The Mentor</span>
            
            <h2
              className="text-4xl sm:text-5xl text-foreground leading-tight"
              style={{ fontFamily: "'General Sans', sans-serif" }}
            >
              SR 1207 → 1000+ 120+ Scorers
            </h2>
            <p className="text-foreground font-medium mt-4 text-lg">
              Teaching NEET Physics in Tamil — like a brother, with real exam strategies.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {[
                'MBBS • Govt. Erode Medical College', 
                'Self-Study • No Coaching'
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

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
              <div className="card p-4 rounded-xl flex flex-col items-center justify-center text-center">
                <p className="text-3xl sm:text-4xl text-foreground font-light mb-1" style={{ fontFamily: "'General Sans', sans-serif" }}>SR 1207</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-secondary">NEET 2019 Rank</p>
              </div>
              <div className="card p-4 rounded-xl flex flex-col items-center justify-center text-center">
                <p className="text-3xl sm:text-4xl text-foreground font-light mb-1" style={{ fontFamily: "'General Sans', sans-serif" }}>1000+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-secondary">120+ Scorers</p>
              </div>
              <div className="card p-4 rounded-xl flex flex-col items-center justify-center text-center">
                <p className="text-3xl sm:text-4xl text-foreground font-light mb-1" style={{ fontFamily: "'General Sans', sans-serif" }}>30+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-secondary">MCQs / Year</p>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => setIsStoryExpanded(!isStoryExpanded)}
                className="text-sm font-medium transition-colors flex items-center gap-1 group" style={{ color: 'var(--accent-primary)' }}
              >
                {isStoryExpanded ? 'Hide Story' : 'Read Full Story'}
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isStoryExpanded ? "rotate-180" : "group-hover:translate-y-0.5")} />
              </button>
              
              <AnimatePresence>
                {isStoryExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-secondary mt-4 text-base leading-relaxed p-5 card rounded-xl" style={{ borderColor: 'var(--border-subtle)' }}>
                      Dr. Sudharshan R (MBBS, Govt. Erode Medical College) cracked NEET 2019 with State Rank 1207 through self-study as a fresher. Since then, through NST (NEET Strategies Tamil), he has guided 1000+ students to score 120+ in Physics. His content is widely followed for predicting NEET MCQs, with 30+ questions appearing in Physics and Chemistry every year over the past 6 years.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 pl-4" style={{ borderLeft: '2px solid oklch(72% 0.18 162 / 0.3)' }}>
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
      <label className="block text-sm text-secondary mb-1.5">Class</label>
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
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
      <section id="contact" className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="card rounded-2xl p-12">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'oklch(72% 0.18 162 / 0.15)' }}>
              <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center" style={{ borderColor: 'var(--accent-primary)' }}>
                <Check className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
              </div>
            </div>
            <h3 className="text-2xl text-foreground mb-4" style={{ fontFamily: "'General Sans', sans-serif" }}>
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
    <section id="contact" className="relative py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="section-label">Start Today</span>
        <h2 className="heading-xl mt-4" style={{ fontFamily: "'Arima Madurai', sans-serif", letterSpacing: 0 }}>
          உங்கள் Doctor பயணம்<br />
          <em className="not-italic text-academic">இன்றே தொடங்கட்டும்</em>
        </h2>
        <p className="body-text mt-6 max-w-xl mx-auto">
          One decision. One year. One white coat. Call now and book your free demo class.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <motion.a 
            href="tel:+918610690010" 
            className="btn-primary btn-glow px-8 py-4 inline-flex items-center gap-3"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5" />
            8610690010
          </motion.a>
          <motion.a 
            href="https://wa.me/918610690010" 
            className="btn-secondary px-8 py-4 inline-flex items-center gap-3"
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
          <div className="w-8 h-8 card rounded-md flex items-center justify-center text-foreground font-bold text-sm" style={{ fontFamily: "'General Sans', sans-serif" }}>
            N
          </div>
          <span className="font-medium text-foreground" style={{ fontFamily: "'General Sans', sans-serif" }}>NST</span>
        </div>
        <div className="flex gap-6 text-sm text-secondary">
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
            <span className="text-xs">YT</span>
          </motion.a>
          <motion.a 
            href="https://wa.me/918610690010" 
            className="w-9 h-9 card rounded-full flex items-center justify-center text-secondary hover:text-emerald-500 transition-colors"
            title="WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs">WA</span>
          </motion.a>
          <motion.a 
            href="tel:+918610690010" 
            className="w-9 h-9 card rounded-full flex items-center justify-center text-secondary hover:text-blue-400 transition-colors"
            title="Call"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs">Ph</span>
          </motion.a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 text-center text-xs text-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        © 2026 NEET Strategies Tamil. All rights reserved.
      </div>
    </footer>
  )
}

function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-between gap-3 px-4 py-3" style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--border-subtle)' }}>
      <a 
        href="tel:+918610690010" 
        className="flex-1 text-background text-sm font-medium py-3 rounded-full text-center flex items-center justify-center gap-2"
        style={{ background: 'var(--accent-primary)' }}
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a 
        href="#contact" 
        className="flex-1 bg-foreground text-background text-sm font-medium py-3 rounded-full text-center"
      >
        Join Now
      </a>
    </div>
  )
}

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: '#f6f6f4' }}>
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
        
        <div className="h-20 md:hidden" />
      </div>
    </main>
  )
}
