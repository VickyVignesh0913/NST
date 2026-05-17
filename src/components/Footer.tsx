import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import navigation from '../data/navigation.json';

// Brutalist colors from LandingPage
const colors = {
  canvas: '#0a0a0a',
  surface1: '#0f0f0f',
  surface2: '#141414',
  border: '#2a2a2a',
  borderStrong: '#444444',
  accent: '#e8a445',
  accentHover: '#f0b65a',
  textPrimary: '#fafafa',
  textSecondary: '#c8c8c8',
  textMuted: '#787878',
  textDim: '#555555',
};

export default function Footer() {
  const { footerLinks, contact } = navigation;

  return (
    <footer style={{ background: colors.surface1, borderTop: `2px solid ${colors.border}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center text-lg font-bold"
                style={{ background: colors.accent, color: colors.canvas }}
              >
                E
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "'Iowan Old Style', serif", color: colors.textPrimary }}>
                English Boss
              </span>
            </Link>
            <p className="text-sm mb-4 max-w-sm" style={{ color: colors.textMuted }}>
              Founder-led spoken English training. Learn to think clearly, organize thoughts, and speak with confidence.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors"
                style={{ color: colors.textMuted }}
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="p-2 transition-colors"
                style={{ color: colors.textMuted }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: colors.textPrimary }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/paid-courses" className="text-sm hover:text-[var(--accent-primary)] transition-colors" style={{ color: colors.textMuted }}>
                  Paid Courses
                </Link>
              </li>
              <li>
                <Link to="/free-courses" className="text-sm hover:text-[var(--accent-primary)] transition-colors" style={{ color: colors.textMuted }}>
                  Free Courses
                </Link>
              </li>
              <li>
                <Link to="/recorded-courses" className="text-sm hover:text-[var(--accent-primary)] transition-colors" style={{ color: colors.textMuted }}>
                  Recorded Courses
                </Link>
              </li>
              <li>
                <Link to="/study-material" className="text-sm hover:text-[var(--accent-primary)] transition-colors" style={{ color: colors.textMuted }}>
                  Study Material
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: colors.textPrimary }}>Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm hover:text-[var(--accent-primary)] transition-colors" style={{ color: colors.textMuted }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Download App */}
        <div className="border-t mt-8 pt-8" style={{ borderColor: colors.border }}>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: colors.textPrimary }}>Download App</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href={footerLinks.download.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm border-2 transition-colors"
              style={{ borderColor: colors.border, color: colors.textSecondary, background: colors.surface2 }}
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Google Play
            </a>
            <a
              href={footerLinks.download.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm border-2 transition-colors"
              style={{ borderColor: colors.border, color: colors.textSecondary, background: colors.surface2 }}
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href={footerLinks.download.windows}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm border-2 transition-colors"
              style={{ borderColor: colors.border, color: colors.textSecondary, background: colors.surface2 }}
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5.5l9-.5v7.5H3V5.5zm9 7.5l-.5 6.5h9l-.5-6.5-4.5.5zm-9-7v7l9 .5V6l-9-.5zM12 6l4.5.5.5 6.5-4.5.5L12 19v-13zm4.5 1l4.5.5v7.5l-4.5-.5V7z" />
              </svg>
              Windows
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: colors.border }}>
          <p className="text-sm" style={{ color: colors.textDim }}>
            © {new Date().getFullYear()} English Boss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}