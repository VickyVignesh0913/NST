import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Clock, BarChart, CheckCircle } from 'lucide-react';
import { coursesData } from '../data/courses';
import Footer from '../components/Footer';
import type { Course } from '../types';

// Brand colors from brief
const colors = {
  primary: '#1565C0',
  accent: '#2196F3',
  dark: '#0D1117',
};

interface CourseDetailPageProps {
  onBuyCourse: (course: Course) => void;
}

export default function CourseDetailPage({ onBuyCourse }: CourseDetailPageProps) {
  const { id } = useParams<{ id: string }>();

  // Find course in paid courses or free courses
  const paidCourse = coursesData.paidCourses.find(c => c.id === id);
  const freeCourse = coursesData.freeCourses.find(c => c.id === id);
  const course = paidCourse || freeCourse;

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link to="/paid-courses" className="text-blue-600 hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
  const isFree = course.price === 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-8" style={{ background: colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/paid-courses"
            className="inline-flex items-center text-blue-100 hover:text-white mb-4"
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
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {!isFree && course.type === 'Live' && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Play className="w-3 h-3" /> LIVE
                  </div>
                )}
                {isFree && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full">
                    FREE
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {course.level}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                {course.batchTime && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {course.batchTime}
                  </span>
                )}
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-3">About This Course</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {course.fullDesc}
              </p>

              {/* What You'll Learn */}
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h2>
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
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Pricing */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <div className="text-center mb-6">
                {isFree ? (
                  <div className="text-4xl font-bold text-green-600">FREE</div>
                ) : (
                  <>
                    <div className="text-3xl font-bold text-gray-900">
                      {formatPrice(course.price)}
                    </div>
                    {course.originalPrice > 0 && (
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <span className="text-lg text-gray-400 line-through">
                          {formatPrice(course.originalPrice)}
                        </span>
                        <span className="text-green-600 font-medium">
                          {course.discount}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {isFree ? (
                <button
                  className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors mb-4"
                >
                  View Content Now
                </button>
              ) : (
                <button
                  onClick={() => onBuyCourse(course)}
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors mb-4"
                  style={{ background: colors.primary }}
                >
                  Enroll Now
                </button>
              )}

              <button className="w-full py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Add to Wishlist
              </button>

              {/* Course Features */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">This course includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <Play className="w-4 h-4" />
                    {course.type === 'Live' ? 'Live Interactive Sessions' : 'Video Lessons'}
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <BarChart className="w-4 h-4" />
                    Progress Tracking
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4" />
                    Certificate of Completion
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
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