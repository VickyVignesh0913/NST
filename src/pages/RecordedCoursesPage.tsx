import { motion } from 'framer-motion';
import { coursesData } from '../data/courses';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import type { Course } from '../types';

// Brutalist colors from LandingPage
const colors = {
  canvas: '#0a0a0a',
  surface1: '#0f0f0f',
  surface2: '#141414',
  border: '#2a2a2a',
  borderStrong: '#444444',
  accent: '#e8a445',
  textPrimary: '#fafafa',
  textSecondary: '#c8c8c8',
  textMuted: '#787878',
  textDim: '#555555',
};

interface RecordedCoursesPageProps {
  onBuyCourse: (course: Course) => void;
}

export default function RecordedCoursesPage({ onBuyCourse }: RecordedCoursesPageProps) {
  const courses = coursesData.paidCourses.filter(c => c.type === 'Recorded');

  return (
    <div style={{ background: colors.canvas, minHeight: '100vh' }}>
      {/* Hero Banner */}
      <div className="py-16" style={{ background: colors.surface1, borderBottom: `2px solid ${colors.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-wide"
            style={{ color: colors.textPrimary, fontFamily: "'Iowan Old Style', serif" }}
          >
            Recorded Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg max-w-2xl"
            style={{ color: colors.textMuted }}
          >
            Self-paced learning at your convenience. Learn anytime, anywhere
          </motion.p>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg" style={{ color: colors.textMuted }}>No recorded courses available at the moment.</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 surface-card p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>Why Choose Recorded Courses?</h2>
          <p className="mb-6" style={{ color: colors.textSecondary }}>
            Our recorded courses give you the flexibility to learn at your own pace. Revisit any lesson as many times as you need,
            and study according to your schedule.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: colors.accent }}>24/7</div>
              <div style={{ color: colors.textMuted }}>Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: colors.accent }}>∞</div>
              <div style={{ color: colors.textMuted }}>Rewatches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: colors.accent }}>Self</div>
              <div style={{ color: colors.textMuted }}>Paced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: colors.accent }}>Lifetime</div>
              <div style={{ color: colors.textMuted }}>Access</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}