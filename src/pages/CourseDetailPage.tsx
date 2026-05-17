import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Clock, BarChart, CheckCircle } from 'lucide-react';
import { coursesData } from '../data/courses';
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
  accentHover: '#f0b65a',
  textPrimary: '#fafafa',
  textSecondary: '#c8c8c8',
  textMuted: '#787878',
  textDim: '#555555',
};

interface CourseDetailPageProps {
  onBuyCourse: (course: Course) => void;
}

export default function CourseDetailPage({ onBuyCourse }: CourseDetailPageProps) {
  const { id } = useParams<{ id: string }>();

  const paidCourse = coursesData.paidCourses.find(c => c.id === id);
  const freeCourse = coursesData.freeCourses.find(c => c.id === id);
  const course = paidCourse || freeCourse;

  if (!course) {
    return (
      <div style={{ background: colors.canvas, minHeight: '100vh' }} className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>Course Not Found</h1>
          <Link to="/paid-courses" className="hover:underline" style={{ color: colors.accent }}>
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
  const isFree = course.price === 0;

  return (
    <div style={{ background: colors.canvas, minHeight: '100vh' }}>
      {/* Header */}
      <div className="py-8" style={{ background: colors.surface1, borderBottom: `2px solid ${colors.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/paid-courses"
            className="inline-flex items-center mb-4"
            style={{ color: colors.textMuted }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8" style={{ background: colors.surface2 }}>
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {!isFree && course.type === 'Live' && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full flex items-center gap-1" style={{ background: '#dc2626', color: '#fff' }}>
                    <Play className="w-3 h-3" /> LIVE
                  </div>
                )}
                {isFree && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full" style={{ background: colors.accent, color: colors.canvas }}>
                    FREE
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h1 className="text-3xl font-bold mb-4" style={{ color: colors.textPrimary, fontFamily: "'Iowan Old Style', serif" }}>{course.title}</h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full text-sm border border-[var(--border)]" style={{ color: colors.textMuted }}>
                  {course.level}
                </span>
                <span className="px-3 py-1 rounded-full text-sm border border-[var(--border)] flex items-center gap-1" style={{ color: colors.textMuted }}>
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                {course.batchTime && (
                  <span className="px-3 py-1 rounded-full text-sm" style={{ background: colors.accent, color: colors.canvas }}>
                    {course.batchTime}
                  </span>
                )}
              </div>

              <h2 className="text-xl font-semibold mb-3" style={{ color: colors.textPrimary }}>About This Course</h2>
              <p className="mb-8 leading-relaxed" style={{ color: colors.textSecondary }}>
                {course.fullDesc}
              </p>

              {/* What You'll Learn */}
              <h2 className="text-xl font-semibold mb-4" style={{ color: colors.textPrimary }}>What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {[
                  'Build confidence in spoken English',
                  'Learn practical vocabulary and phrases',
                  'Master grammar in context',
                  'Develop fluent conversation skills',
                  'Think and speak in English',
                  'Apply learned concepts in real situations'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.accent }} />
                    <span style={{ color: colors.textSecondary }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm border border-[var(--border)]"
                    style={{ color: colors.textMuted }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Pricing */}
          <div className="lg:col-span-1">
            <div className="surface-card p-6 sticky top-24">
              <div className="text-center mb-6">
                {isFree ? (
                  <div className="text-4xl font-bold" style={{ color: colors.accent }}>FREE</div>
                ) : (
                  <>
                    <div className="text-3xl font-bold" style={{ color: colors.textPrimary }}>
                      {formatPrice(course.price)}
                    </div>
                    {course.originalPrice > 0 && (
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <span className="text-lg line-through" style={{ color: colors.textDim }}>
                          {formatPrice(course.originalPrice)}
                        </span>
                        <span className="font-medium" style={{ color: '#22c55e' }}>
                          {course.discount}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {isFree ? (
                <button
                  className="w-full py-3 font-semibold rounded-lg transition-colors mb-4"
                  style={{ background: colors.accent, color: colors.canvas }}
                >
                  View Content Now
                </button>
              ) : (
                <button
                  onClick={() => onBuyCourse(course)}
                  className="w-full py-3 font-semibold rounded-lg transition-colors mb-4"
                  style={{ background: colors.accent, color: colors.canvas }}
                >
                  Enroll Now
                </button>
              )}

              <button className="w-full py-3 border-2 font-semibold rounded-lg transition-colors" style={{ borderColor: colors.border, color: colors.textSecondary }}>
                Add to Wishlist
              </button>

              {/* Course Features */}
              <div className="mt-6 pt-6 border-t" style={{ borderColor: colors.border }}>
                <h3 className="font-semibold mb-4" style={{ color: colors.textPrimary }}>This course includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2" style={{ color: colors.textSecondary }}>
                    <Play className="w-4 h-4" />
                    {course.type === 'Live' ? 'Live Interactive Sessions' : 'Video Lessons'}
                  </li>
                  <li className="flex items-center gap-2" style={{ color: colors.textSecondary }}>
                    <BarChart className="w-4 h-4" />
                    Progress Tracking
                  </li>
                  <li className="flex items-center gap-2" style={{ color: colors.textSecondary }}>
                    <CheckCircle className="w-4 h-4" />
                    Certificate of Completion
                  </li>
                  <li className="flex items-center gap-2" style={{ color: colors.textSecondary }}>
                    <Clock className="w-4 h-4" />
                    Lifetime Access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}