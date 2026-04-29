import { useState } from 'react'
import { cn } from '../lib/utils'

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Studio', href: '#studio' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Reach Us', href: '#contact' },
]

export default function Hero() {
  const [activeLink] = useState('Home')

  return (
    <section className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-baseline">
            <span 
              className="text-3xl tracking-tight text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Velorah
            </span>
            <sup className="text-xs text-muted-foreground ml-0.5">®</sup>
          </a>

          {/* Nav Links - Desktop Only */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-300",
                  link.active || activeLink === link.label
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Begin Journey
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 max-w-7xl mx-auto">
        {/* H1 */}
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] font-normal max-w-7xl text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where{' '}
          <em className="not-italic text-muted-foreground">dreams</em>
          {' '}rise{' '}
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          We're designing tools for deep thinkers, bold creators, and quiet rebels.
          Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
        >
          Begin Journey
        </a>
      </div>
    </section>
  )
}
