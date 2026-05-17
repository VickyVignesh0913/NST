import { useState } from 'react';
import { motion } from 'framer-motion';
import { coursesData } from '../data/courses';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import type { Course } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

// CSS variable aliases - single source of truth from globals.css
const colors = {
  canvas: 'var(--canvas)',
  surface1: 'var(--surface-1)',
  surface2: 'var(--surface-2)',
  border: 'var(--border)',
  borderStrong: 'var(--border-strong)',
  accent: 'var(--accent-primary)',
  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  textMuted: 'var(--text-muted)',
  textDim: 'var(--text-dim)',
};

interface PaidCoursesPageProps {
  onBuyCourse: (course: Course) => void;
}

export default function PaidCoursesPage({ onBuyCourse }: PaidCoursesPageProps) {
  const courses = coursesData.paidCourses;
  const [filter, setFilter] = useState<'all' | 'Recorded' | 'Live'>('all');

  const filteredCourses = filter === 'all'
    ? courses
    : courses.filter(c => c.type === filter);

  return (
    <div style={{ background: colors.canvas, minHeight: '100vh' }}>
      {/* Hero Section - Transformation Gateway */}
      <div className="relative overflow-hidden" style={{ background: colors.surface1, borderBottom: `2px solid ${colors.border}` }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full" style={{ background: colors.accent, filter: 'blur(80px)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full" style={{ background: colors.accent, filter: 'blur(60px)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 border-2"
              style={{ borderColor: colors.accent }}
            >
              <Sparkles className="w-4 h-4" style={{ color: colors.accent }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: colors.accent }}>
                Your Transformation Starts Here
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: colors.textPrimary, fontFamily: "'Iowan Old Style', serif" }}
            >
              Choose Your Path to
              <span className="block" style={{ color: colors.accent }}>Confidence & Clarity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-8 leading-relaxed max-w-2xl"
              style={{ color: colors.textSecondary }}
            >
              Each course is a gate to transformation. Not just learning English — but learning to think clearly, speak confidently, and lead rooms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-3 px-4 py-2 border-2" style={{ borderColor: colors.border }}>
                <span className="text-2xl font-bold" style={{ color: colors.accent }}>5000+</span>
                <span className="text-sm" style={{ color: colors.textMuted }}>Learners Transformed</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 border-2" style={{ borderColor: colors.border }}>
                <span className="text-2xl font-bold" style={{ color: colors.accent }}>13+</span>
                <span className="text-sm" style={{ color: colors.textMuted }}>Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm font-bold uppercase tracking-wider" style={{ color: colors.textMuted }}>
            Filter by mode:
          </span>
          <div className="flex gap-2">
            {(['all', 'Recorded', 'Live'] as const).map((f, i) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-200`}
                style={filter === f
                  ? { background: colors.accent, color: colors.canvas, borderColor: colors.accent }
                  : { background: colors.surface1, color: colors.textSecondary, borderColor: colors.border }
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {f === 'all' ? 'All Paths' : f}
                {f !== 'all' && (
                  <span className="ml-2 opacity-60">
                    ({courses.filter(c => c.type === f).length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Course Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm" style={{ color: colors.textMuted }}>
            Showing <span style={{ color: colors.textPrimary }}>{filteredCourses.length}</span> transformation paths
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg" style={{ color: colors.textMuted }}>
              No courses found in this category.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="relative p-8 md:p-12 border-2"
          style={{ borderColor: colors.border, background: colors.surface1 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10" style={{ background: colors.accent, filter: 'blur(40px)' }} />

          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.textPrimary, fontFamily: "'Iowan Old Style', serif" }}>
              Not Sure Which Path is Right for You?
            </h2>
            <p className="mb-6" style={{ color: colors.textSecondary }}>
              Every learner's journey is unique. Let's find the transformation path that matches your goals.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider"
              style={{ background: colors.accent, color: colors.canvas }}
              whileHover={{ scale: 1.02, gap: '0.75rem' }}
              whileTap={{ scale: 0.98 }}
            >
              Speak with a Guide
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}