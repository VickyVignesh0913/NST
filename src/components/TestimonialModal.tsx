import { useState } from 'react';
import { Star, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ModalWrapper from './ModalWrapper';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: { id: string; title: string }[];
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function TestimonialModal({ isOpen, onClose, courses }: TestimonialModalProps) {
  const [name, setName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [rating, setRating] = useState(0);
  const [testimonial, setTestimonial] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const resetForm = () => {
    setName('');
    setSelectedCourse('');
    setRating(0);
    setTestimonial('');
    setIsSuccess(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={handleClose} maxWidth="md">
      <motion.div
        className="p-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <AnimatePresence mode="wait">
          {isSuccess ? (
            /* Success State - Transformation Complete */
            <motion.div
              key="success"
              variants={fadeInUp}
              className="text-center py-8"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 border-2 border-[var(--accent-primary)] flex items-center justify-center surface-card-elevated"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
              >
                <Star className="text-[var(--accent-primary)]" size={32} fill="var(--accent-primary)" />
              </motion.div>
              <h3 className="heading-3 mb-2">Transformation Shared!</h3>
              <p className="body-md mb-6">
                Your journey inspires others to begin their transformation.
              </p>
              <motion.button
                type="button"
                onClick={handleClose}
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue Your Journey
              </motion.button>
            </motion.div>
          ) : (
            <motion.div key="form" variants={fadeInUp}>
              {/* Header */}
              <div className="mb-6">
                <span className="section-label">Share Your Transformation</span>
                <h2 className="heading-3 mb-2">Your Journey Inspires Others</h2>
                <p className="body-md">
                  How has English Boss transformed your thinking and speaking?
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={fadeInUp}>
                  <label className="section-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="input w-full"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="section-label">
                    Which transformation path?
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="input w-full"
                  >
                    <option value="">Select your course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="section-label">
                    Rate Your Transformation
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="p-2 transition-transform hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Star
                          size={28}
                          className={`transition-colors ${
                            star <= (hoveredRating || rating)
                              ? 'fill-[var(--accent-primary)] text-[var(--accent-primary)]'
                              : 'text-[var(--border)]'
                          }`}
                        />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="section-label">
                    Your Transformation Story *
                  </label>
                  <textarea
                    value={testimonial}
                    onChange={(e) => setTestimonial(e.target.value)}
                    placeholder="How has your thinking and speaking changed? What clarity have you gained?"
                    rows={5}
                    className="input w-full resize-none"
                    required
                  />
                  <p className="body-sm mt-1">
                    {testimonial.length} characters (your story matters)
                  </p>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || testimonial.length < 10}
                  className="btn-primary w-full"
                  variants={fadeInUp}
                  whileHover={testimonial.length >= 10 ? { scale: 1.02 } : {}}
                  whileTap={testimonial.length >= 10 ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Sharing...' : 'Share My Transformation'}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ModalWrapper>
  );
}