import { motion } from 'framer-motion';
import { FileText, Download, BookOpen } from 'lucide-react';
import Footer from '../components/Footer';

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

export default function StudyMaterialPage() {
  const studyMaterials = [
    { title: 'Vocabulary List', type: 'PDF', size: '2.5 MB' },
    { title: 'Grammar Handbook', type: 'PDF', size: '5.2 MB' },
    { title: 'Practice Worksheets', type: 'PDF', size: '1.8 MB' },
    { title: 'Audio Pronunciation Guide', type: 'MP3', size: '45 MB' },
  ];

  return (
    <div style={{ background: colors.canvas, minHeight: '100vh' }}>
      {/* Header */}
      <div className="py-16" style={{ background: colors.surface1, borderBottom: `2px solid ${colors.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-wide"
            style={{ color: colors.textPrimary, fontFamily: "'Iowan Old Style', serif" }}
          >
            Study Material
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg max-w-2xl"
            style={{ color: colors.textMuted }}
          >
            Access your learning resources and study materials
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Box */}
        <div className="rounded-xl p-6 mb-8" style={{ background: colors.surface2, border: `2px solid ${colors.border}` }}>
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: colors.accent }} />
            <div>
              <h3 className="font-semibold mb-1" style={{ color: colors.textPrimary }}>Access Your Materials</h3>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
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
              className="surface-card p-6 hover:border-[var(--border-strong)] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: colors.surface2 }}>
                  <FileText className="w-6 h-6" style={{ color: colors.accent }} />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded" style={{ background: colors.surface2, color: colors.textMuted }}>
                  {material.type}
                </span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: colors.textPrimary }}>{material.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: colors.textMuted }}>{material.size}</span>
                <button className="flex items-center gap-1 text-sm font-medium" style={{ color: colors.accent }}>
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-16 text-center">
          <p style={{ color: colors.textMuted }}>
            More study materials will be added as you progress through your courses.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}