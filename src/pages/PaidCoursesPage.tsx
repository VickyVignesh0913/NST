import { useState } from 'react';
import { motion } from 'framer-motion';
import coursesData from '../data/courses.json';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import type { Course } from '../types';

// Brand colors from brief
const colors = {
  primary: '#1565C0',
  accent: '#2196F3',
  dark: '#0D1117',
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-blue-600 py-16" style={{ background: colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide"
          >
            Paid Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-blue-100 text-lg max-w-2xl"
          >
            Premium courses designed to transform your English communication skills
          </motion.p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 mb-8">
          {(['all', 'Recorded', 'Live'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              style={filter === f ? { background: colors.primary } : {}}
            >
              {f === 'all' ? 'All Courses' : f}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
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

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No courses found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}