import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, FileText, Play } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import Footer from '../components/Footer';

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

export default function PurchasesPage() {
  const { isAuthenticated, user } = useAuth();
  const [activeTab, setActiveTab] = useState<'paid' | 'test-series'>('paid');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const purchasedCourses: any[] = [];

  return (
    <div style={{ background: colors.canvas, minHeight: '100vh' }}>
      {/* Header */}
      <div className="py-16" style={{ background: colors.surface1, borderBottom: `2px solid ${colors.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-wide"
            style={{ color: colors.textPrimary, fontFamily: "'Iowan Old Style', serif" }}
          >
            My Purchases
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg"
            style={{ color: colors.textMuted }}
          >
            Welcome back, {user?.name || 'Student'}
          </motion.p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab('paid')}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors border-2 ${
              activeTab === 'paid' ? '' : 'border-[var(--border)]'
            }`}
            style={activeTab === 'paid'
              ? { background: colors.accent, color: colors.canvas, borderColor: colors.accent }
              : { background: colors.surface1, color: colors.textSecondary }
            }
          >
            <ShoppingBag className="w-5 h-5" />
            Paid Courses
          </button>
          <button
            onClick={() => setActiveTab('test-series')}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors border-2 ${
              activeTab === 'test-series' ? '' : 'border-[var(--border)]'
            }`}
            style={activeTab === 'test-series'
              ? { background: colors.accent, color: colors.canvas, borderColor: colors.accent }
              : { background: colors.surface1, color: colors.textSecondary }
            }
          >
            <FileText className="w-5 h-5" />
            Test Series
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: colors.textMuted }} />
          <input
            type="text"
            placeholder="Search your purchased courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 rounded-lg"
            style={{ background: colors.surface1, borderColor: colors.border, color: colors.textPrimary }}
          />
        </div>

        {/* Content */}
        {activeTab === 'paid' ? (
          purchasedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {purchasedCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="surface-card overflow-hidden"
                >
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2" style={{ color: colors.textPrimary }}>{course.title}</h3>
                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex items-center gap-2"
                      style={{ color: colors.accent }}
                    >
                      <Play className="w-4 h-4" />
                      Continue Learning
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 surface-card">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4" style={{ color: colors.textDim }} />
              <h2 className="text-xl font-semibold mb-2" style={{ color: colors.textPrimary }}>No courses purchased yet</h2>
              <p className="mb-6" style={{ color: colors.textMuted }}>
                Start your English learning journey by enrolling in a course
              </p>
              <Link
                to="/paid-courses"
                className="inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors"
                style={{ background: colors.accent, color: colors.canvas }}
              >
                Browse Courses
              </Link>
            </div>
          )
        ) : (
          <div className="text-center py-16 surface-card">
            <FileText className="w-16 h-16 mx-auto mb-4" style={{ color: colors.textDim }} />
            <h2 className="text-xl font-semibold mb-2" style={{ color: colors.textPrimary }}>No test series purchased</h2>
            <p style={{ color: colors.textMuted }}>
              Test series will appear here once you purchase them
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}