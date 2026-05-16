import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, BookOpen, FileText, Play } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import Footer from '../components/Footer';

// Brand colors from brief
const colors = {
  primary: '#1565C0',
};

export default function PurchasesPage() {
  const { isAuthenticated, user } = useAuth();
  const [activeTab, setActiveTab] = useState<'paid' | 'test-series'>('paid');
  const [searchQuery, setSearchQuery] = useState('');

  // Redirect to home if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Mock purchased courses (empty for now)
  const purchasedCourses: any[] = [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-16" style={{ background: colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide"
          >
            My Purchases
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-blue-100 text-lg"
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
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'paid'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
            style={activeTab === 'paid' ? { background: colors.primary } : {}}
          >
            <ShoppingBag className="w-5 h-5" />
            Paid Courses
          </button>
          <button
            onClick={() => setActiveTab('test-series')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'test-series'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
            style={activeTab === 'test-series' ? { background: colors.primary } : {}}
          >
            <FileText className="w-5 h-5" />
            Test Series
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search your purchased courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <Play className="w-4 h-4" />
                      Continue Learning
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No courses purchased yet</h2>
              <p className="text-gray-500 mb-6">
                Start your English learning journey by enrolling in a course
              </p>
              <Link
                to="/paid-courses"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                style={{ background: colors.primary }}
              >
                Browse Courses
              </Link>
            </div>
          )
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No test series purchased</h2>
            <p className="text-gray-500">
              Test series will appear here once you purchase them
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}