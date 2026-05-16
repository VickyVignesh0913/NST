import { motion } from 'framer-motion';
import { FileText, Download, BookOpen } from 'lucide-react';
import Footer from '../components/Footer';

// Brand colors from brief
const colors = {
  primary: '#1565C0',
};

export default function StudyMaterialPage() {
  // Placeholder - original loads dynamically
  const studyMaterials = [
    { title: 'Vocabulary List', type: 'PDF', size: '2.5 MB' },
    { title: 'Grammar Handbook', type: 'PDF', size: '5.2 MB' },
    { title: 'Practice Worksheets', type: 'PDF', size: '1.8 MB' },
    { title: 'Audio Pronunciation Guide', type: 'MP3', size: '45 MB' },
  ];

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
            Study Material
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-blue-100 text-lg max-w-2xl"
          >
            Access your learning resources and study materials
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Access Your Materials</h3>
              <p className="text-blue-700 text-sm">
                Study materials are available for enrolled students. Purchase a course to unlock all study resources.
              </p>
            </div>
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyMaterials.map((material, index) => (
            <motion.div
              key={material.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {material.type}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{material.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{material.size}</span>
                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            More study materials will be added as you progress through your courses.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}