import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Target, TrendingUp, Zap } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  showOriginalPrice?: boolean;
  variant?: 'default' | 'free' | 'featured';
  index?: number;
}

// Brutalist colors from LandingPage
const colors = {
  canvas: '#0a0a0a',
  surface1: '#0f0f0f',
  surface2: '#141414',
  surface3: '#1a1a1a',
  border: '#2a2a2a',
  borderStrong: '#444444',
  accent: '#e8a445',
  accentHover: '#f0b65a',
  textPrimary: '#fafafa',
  textSecondary: '#c8c8c8',
  textMuted: '#787878',
  textDim: '#555555',
};

// Transformation icons for different course types
const getTransformIcon = (type: string) => {
  switch (type) {
    case 'Live': return Zap;
    case 'Recorded': return Play;
    default: return Target;
  }
};

// Transformation promise per course type
const getTransformPromise = (type: string) => {
  switch (type) {
    case 'Live': return 'Live transformation with real-time guidance';
    case 'Recorded': return 'Self-paced journey to fluency';
    default: return 'Your path to clarity';
  }
};

export function CourseCard({ course, showOriginalPrice = true, variant = 'default', index = 0 }: CourseCardProps) {
  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
  const TransformIcon = getTransformIcon(course.type);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Hover glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-primary)]/20 via-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />

      <div
        className="relative h-full border-2 border-[var(--border)] transition-all duration-300 group-hover:border-[var(--accent-primary)]"
        style={{ background: colors.surface1 }}
      >
        {/* Image Section - Portal to transformation */}
        <div className="relative aspect-[16/10] overflow-hidden" style={{ background: colors.surface2 }}>
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Overlay - Transformation begins */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--canvas)] via-transparent to-transparent" />

          {/* Type Badge - Transformation mode */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div
              className="px-3 py-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
              style={{ background: colors.accent, color: colors.canvas }}
            >
              <TransformIcon className="w-3.5 h-3.5" />
              {course.type}
            </div>
            {variant === 'featured' && (
              <div
                className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
                style={{ background: colors.surface1, color: colors.accent, border: `1px solid ${colors.accent}` }}
              >
                Featured
              </div>
            )}
          </div>

          {/* Live badge */}
          {course.type === 'Live' && (
            <div
              className="absolute top-4 right-4 px-3 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 animate-pulse"
              style={{ background: '#dc2626', color: '#fff' }}
            >
              <span className="w-2 h-2 rounded-full bg-white" />
              LIVE
            </div>
          )}

          {/* Transformation preview on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(10,10,10,0.7)' }}>
            <div className="text-center">
              <Sparkles className="w-8 h-8 mx-auto mb-2" style={{ color: colors.accent }} />
              <p className="text-sm font-bold uppercase tracking-wider" style={{ color: colors.textPrimary }}>
                Begin Transformation
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Meta */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: colors.accent }}>
              {course.level}
            </span>
            <span className="text-xs" style={{ color: colors.textDim }}>•</span>
            <span className="text-xs" style={{ color: colors.textMuted }}>{course.duration}</span>
          </div>

          {/* Title - Transformation goal */}
          <h3
            className="text-lg font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-[var(--accent-primary)]"
            style={{ color: colors.textPrimary, fontFamily: "'Iowan Old Style', serif" }}
          >
            {course.title}
          </h3>

          {/* Description - Preview of change */}
          <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: colors.textSecondary }}>
            {course.shortDesc}
          </p>

          {/* Transformation promise */}
          <div className="flex items-center gap-2 mb-4 p-2 border-l-2" style={{ borderColor: colors.accent }}>
            <TrendingUp className="w-4 h-4 flex-shrink-0" style={{ color: colors.accent }} />
            <span className="text-xs font-medium" style={{ color: colors.textMuted }}>
              {getTransformPromise(course.type)}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {course.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 border transition-colors duration-200 group-hover:border-[var(--accent-primary)]"
                style={{
                  borderColor: colors.border,
                  color: colors.textMuted,
                  background: colors.surface2
                }}
              >
                {tag}
              </span>
            ))}
            {course.tags.length > 2 && (
              <span className="text-xs px-2 py-1" style={{ color: colors.textDim }}>
                +{course.tags.length - 2} more
              </span>
            )}
          </div>

          {/* Price & CTA */}
          <div className="flex items-end justify-between pt-4 border-t" style={{ borderColor: colors.border }}>
            <div>
              {variant !== 'free' && (
                <>
                  <span className="text-2xl font-bold" style={{ color: colors.accent }}>
                    {formatPrice(course.price)}
                  </span>
                  {showOriginalPrice && course.originalPrice > 0 && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm line-through" style={{ color: colors.textDim }}>
                        {formatPrice(course.originalPrice)}
                      </span>
                      <span className="text-xs font-bold" style={{ color: '#22c55e' }}>
                        {course.discount}
                      </span>
                    </div>
                  )}
                </>
              )}
              {variant === 'free' && (
                <span className="text-2xl font-bold" style={{ color: colors.accent }}>FREE</span>
              )}
            </div>

            <Link
              to={`/courses/${course.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 group-hover:gap-3"
              style={{
                background: colors.accent,
                color: colors.canvas,
              }}
            >
              View Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default CourseCard;