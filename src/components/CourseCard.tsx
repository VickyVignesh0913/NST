import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  showOriginalPrice?: boolean;
  variant?: 'default' | 'free' | 'featured';
}

// Brand colors from brief
const colors = {
  primary: '#1565C0',
  accent: '#2196F3',
  dark: '#0D1117',
  white: '#ffffff',
  textPrimary: '#0D1117',
  textSecondary: '#5a6a7a',
  textMuted: '#8a9aa8',
};

export function CourseCard({ course, showOriginalPrice = true, variant = 'default' }: CourseCardProps) {
  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {variant === 'featured' && (
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </span>
        )}
        {variant === 'free' && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
            FREE
          </span>
        )}
        {course.type === 'Live' && (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
            <Play className="w-3 h-3" /> LIVE
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {course.level}
          </span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500">{course.duration}</span>
        </div>

        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2" style={{ color: colors.textPrimary }}>
          {course.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2" style={{ color: colors.textSecondary }}>
          {course.shortDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        {variant !== 'free' && (
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xl font-bold" style={{ color: colors.primary }}>
              {formatPrice(course.price)}
            </span>
            {showOriginalPrice && course.originalPrice > 0 && (
              <>
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(course.originalPrice)}
                </span>
                <span className="text-sm font-medium text-green-600">
                  {course.discount}
                </span>
              </>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="flex gap-2">
          {variant === 'free' ? (
            <>
              <Link
                to="#"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors"
                style={{ background: colors.primary }}
              >
                View Content
                <Play className="w-4 h-4" />
              </Link>
              <Link
                to={`/courses/${course.id}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Details
              </Link>
            </>
          ) : (
            <Link
              to={`/courses/${course.id}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors w-full"
              style={{ background: colors.primary }}
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default CourseCard;