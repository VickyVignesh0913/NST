import { useState } from 'react';
import { X, Star } from 'lucide-react';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: { id: string; title: string }[];
}

export default function TestimonialModal({ isOpen, onClose, courses }: TestimonialModalProps) {
  const [name, setName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [rating, setRating] = useState(0);
  const [testimonial, setTestimonial] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setName('');
    setSelectedCourse('');
    setRating(0);
    setTestimonial('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-[#0a0a0a] border-2 border-[#333]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#666] hover:text-[#e8a445] transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-[#e8a445] flex items-center justify-center">
                <Star className="text-[#e8a445]" size={32} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">Thank You!</h3>
              <p className="text-[#888] font-mono text-sm mb-6">
                Your testimonial will appear after review.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 border-2 border-[#e8a445] text-[#e8a445] font-mono text-sm uppercase tracking-wider hover:bg-[#e8a445]/10 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <h2 className="font-serif text-3xl text-white mb-2">Share Your Experience</h2>
                <p className="text-[#666] font-mono text-sm">
                  Help others by sharing your English Boss journey
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                    Which course did you take?
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="p-2 transition-transform hover:scale-110"
                      >
                        <Star
                          size={28}
                          className={`transition-colors ${
                            star <= (hoveredRating || rating)
                              ? 'fill-[#e8a445] text-[#e8a445]'
                              : 'text-[#333]'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                    Your Testimonial *
                  </label>
                  <textarea
                    value={testimonial}
                    onChange={(e) => setTestimonial(e.target.value)}
                    placeholder="Share your experience with English Boss..."
                    rows={5}
                    className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors resize-none"
                    required
                  />
                  <p className="text-[#666] font-mono text-xs mt-1">
                    {testimonial.length} characters (min 50 recommended)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || testimonial.length < 10}
                  className="w-full py-4 bg-[#e8a445] text-black uppercase tracking-widest font-mono text-sm hover:bg-[#f0b456] hover:shadow-[0_0_20px_rgba(232,164,69,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}