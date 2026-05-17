import { motion } from 'framer-motion';
import { coursesData } from '../data/courses';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import { Sparkles, Gift, Rocket, GraduationCap } from 'lucide-react';

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

export default function FreeCoursesPage() {
  const courses = coursesData.freeCourses;

  const freePerks = [
    { icon: Gift, title: '100% Free', desc: 'No hidden costs, no strings attached' },
    { icon: Rocket, title: 'Quick Start', desc: 'Begin your journey immediately' },
    { icon: GraduationCap, title: 'Expert Crafted', desc: 'Designed by experienced educators' },
  ];

  return (
    <div style={{ background: colors.canvas, minHeight: '100vh' }}>
      {/* Hero Section - Free Transformation Gateway */}
      <div className="relative overflow-hidden" style={{ background: colors.surface1, borderBottom: `2px solid ${colors.border}` }}>
        {/* Animated background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full" style={{ background: colors.accent, filter: 'blur(100px)' }} />
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
              style={{ borderColor: colors.accent, background: colors.accent }}
            >
              <Sparkles className="w-4 h-4" style={{ color: colors.canvas }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: colors.canvas }}>
                Start Free
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: colors.textPrimary, fontFamily: "'Iowan Old Style', serif" }}
            >
              Your First Step to
              <span className="block" style={{ color: colors.accent }}>Clear Thinking & Speaking</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-8 leading-relaxed max-w-2xl"
              style={{ color: colors.textSecondary }}
            >
              Free courses designed to give you a glimpse of the transformation that awaits.
              Experience the English Boss method without any commitment.
            </motion.p>

            {/* Free perks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {freePerks.map((perk, i) => (
                <div
                  key={perk.title}
                  className="flex items-start gap-3 p-4 border-2"
                  style={{ borderColor: colors.border, background: colors.surface2 }}
                >
                  <div className="p-2" style={{ background: colors.accent, color: colors.canvas }}>
                    <perk.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: colors.textPrimary }}>{perk.title}</h3>
                    <p className="text-xs mt-1" style={{ color: colors.textMuted }}>{perk.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-2" style={{ color: colors.textPrimary, fontFamily: "'Iowan Old Style', serif" }}>
            Free Learning Paths
          </h2>
          <p className="text-lg" style={{ color: colors.textSecondary }}>
            Begin your transformation with no cost
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              variant="free"
              index={index}
            />
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg" style={{ color: colors.textMuted }}>No free courses available at the moment.</p>
          </div>
        )}

        {/* Upgrade CTA */}
        <motion.div
          className="mt-16 p-8 border-2 text-center"
          style={{ borderColor: colors.border, background: colors.surface1 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-3" style={{ color: colors.textPrimary }}>
            Ready for Deeper Transformation?
          </h3>
          <p className="mb-6 max-w-xl mx-auto" style={{ color: colors.textSecondary }}>
            Our paid courses offer comprehensive learning with live sessions, personal feedback, and structured progress tracking.
          </p>
          <motion.a
            href="/paid-courses"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider"
            style={{ background: colors.accent, color: colors.canvas }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Paid Courses
          </motion.a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}