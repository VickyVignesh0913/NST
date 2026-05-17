import { useState } from 'react';
import { Send, Check, MessageCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ModalWrapper from './ModalWrapper';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

const INQUIRY_TYPES = [
  { value: 'Course Inquiry', label: 'Course Guidance', desc: 'Find the right path for you' },
  { value: 'Technical Support', label: 'Technical Help', desc: 'Get help with access/issues' },
  { value: 'Partnership', label: 'Partnership', desc: 'Collaborate with us' },
  { value: 'General', label: 'General Inquiry', desc: 'Any other questions' },
];

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

export default function ContactModal({ isOpen, onClose, initialType }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState(initialType || '');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setInquiryType(initialType || '');
    setMessage('');
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

  const selectedInquiry = INQUIRY_TYPES.find(t => t.value === inquiryType);

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
            /* Success State */
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
                <Check className="text-[var(--accent-primary)]" size={32} />
              </motion.div>
              <h3 className="heading-3 mb-2">Message Sent!</h3>
              <p className="body-sm mb-6">
                A guide will reach out to you within 24 hours.
              </p>
              <motion.button
                type="button"
                onClick={handleClose}
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue Exploring
              </motion.button>
            </motion.div>
          ) : (
            <motion.div key="form" variants={fadeInUp}>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                    Start a Conversation
                  </span>
                </div>
                <h2 className="heading-3 mb-2">Speak with a Guide</h2>
                <p className="body-sm">
                  Not sure which path is right for you? Let's find out together.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={fadeInUp}>
                  <label className="block text-[var(--text-muted)] font-mono text-xs uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="What should we call you?"
                    className="input w-full"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-[var(--text-muted)] font-mono text-xs uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="input w-full"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-[var(--text-muted)] font-mono text-xs uppercase tracking-wider mb-2">
                    What brings you here?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {INQUIRY_TYPES.map((type) => (
                      <motion.button
                        key={type.value}
                        type="button"
                        onClick={() => setInquiryType(type.value)}
                        className={`p-3 border-2 text-left transition-all ${
                          inquiryType === type.value
                            ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10'
                            : 'border-[var(--border)] hover:border-[var(--border-strong)]'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="font-mono text-sm font-bold" style={{ color: inquiryType === type.value ? 'var(--accent-primary)' : 'var(--text-primary)' }}>
                          {type.label}
                        </div>
                        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          {type.desc}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-[var(--text-muted)] font-mono text-xs uppercase tracking-wider mb-2">
                    Share your goals *
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What do you want to achieve? What's holding you back?"
                    rows={4}
                    className="input w-full resize-none"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Start Conversation
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ModalWrapper>
  );
}