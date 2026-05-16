import { motion } from 'framer-motion';
import coursesData from '../data/courses.json';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';

// Brand colors from brief
const colors = {
  primary: '#1565C0',
};

export default function FreeCoursesPage() {
  const courses = coursesData.freeCourses;

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
            Free Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-blue-100 text-lg max-w-2xl"
          >
            Start your English learning journey with our free courses
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
              <CourseCard course={course} variant="free" />
            </motion.div>
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No free courses available at the moment.</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Free Courses?</h2>
          <p className="text-gray-600 mb-6">
            Our free courses are designed to help you get started on your English learning journey without any financial commitment.
            These courses provide a solid foundation and give you a glimpse of our teaching methodology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Free Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Beginner</div>
              <div className="text-gray-600">Friendly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Self-Paced</div>
              <div className="text-gray-600">Learning</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}