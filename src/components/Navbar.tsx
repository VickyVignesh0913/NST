import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ChevronDown, User, LogOut, ShoppingBag } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../hooks/useAuth';
import AuthModal from './AuthModal';

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

const mainNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Paid Courses', href: '/paid-courses' },
  { label: 'Free Courses', href: '/free-courses' },
  { label: 'Recorded Courses', href: '/recorded-courses' },
];

const moreMenuItems = [
  { label: 'Study Material', href: '/study-material' },
  { label: 'Quick Links', href: '/quick-links' },
  { label: 'Live / Timetable', href: '/timetable' },
  { label: 'Test Series', href: '/test-series' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2",
          scrolled ? "bg-[var(--surface-1)]" : "bg-transparent"
        )}
        style={{
          borderColor: scrolled ? colors.border : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div
                className="w-10 h-10 flex items-center justify-center text-lg font-bold"
                style={{ background: colors.accent, color: colors.canvas }}
              >
                E
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "'Iowan Old Style', serif", color: colors.textPrimary }}
              >
                English Boss
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-[var(--accent-primary)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative">
                <button
                  onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                >
                  More
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {moreMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-1 w-48 border-2 border-[var(--border)]"
                      style={{ background: colors.surface1 }}
                    >
                      {moreMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-2)]"
                          onClick={() => setMoreMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <button
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 p-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-2)]"
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center text-sm font-medium"
                      style={{ background: colors.accent, color: colors.canvas }}
                    >
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                  </button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-1 w-48 border-2 border-[var(--border)]"
                        style={{ background: colors.surface1 }}
                      >
                        <Link
                          to="/purchases"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-2)]"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <ShoppingBag className="w-4 h-4" />
                          My Purchases
                        </Link>
                        <Link
                          to="/profile"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-2)]"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <User className="w-4 h-4" />
                          Profile
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            setUserMenuOpen(false);
                          }}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-[var(--surface-2)] w-full text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => setAuthModalOpen(true)}
                  className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-bold uppercase tracking-wider border-2 transition-all"
                  style={{
                    background: colors.accent,
                    color: colors.canvas,
                    borderColor: colors.accent
                  }}
                >
                  Login / Register
                </button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[var(--text-muted)] md:hidden"
                style={{ border: `2px solid ${colors.border}` }}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t-2"
              style={{ background: colors.surface1, borderColor: colors.border }}
            >
              <div className="px-4 py-3 space-y-1">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "block px-4 py-2 text-base font-medium",
                      isActive(item.href)
                        ? "text-[var(--accent-primary)]"
                        : "text-[var(--text-secondary)]"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t pt-2 mt-2">
                  <p className="px-4 text-xs font-medium text-[var(--text-dim)] uppercase">More</p>
                  {moreMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-base text-[var(--text-secondary)]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                {!isAuthenticated && (
                  <button
                    onClick={() => {
                      setAuthModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full mt-4 px-4 py-3 text-base font-bold uppercase tracking-wider"
                    style={{ background: colors.accent, color: colors.canvas }}
                  >
                    Login / Register
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
}