import { useState } from 'react';
import { Check, CreditCard, Smartphone, Building, Shield, Sparkles, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ModalWrapper from './ModalWrapper';
import { Course } from '../types';

interface Props {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onContactClick?: () => void;
}

type PaymentMethod = 'razorpay' | 'paypal' | 'stripe' | 'bank';

const PAYMENT_METHODS = [
  { id: 'razorpay', label: 'Razorpay', icon: CreditCard, desc: 'Instant checkout' },
  { id: 'paypal', label: 'PayPal', icon: Smartphone, desc: 'Pay with PayPal' },
  { id: 'stripe', label: 'Stripe', icon: Shield, desc: 'Secure payment' },
  { id: 'bank', label: 'Bank Transfer', icon: Building, desc: 'Direct transfer' },
];

const BANK_DETAILS = {
  accountName: 'English Boss',
  accountNumber: '1234567890',
  bankName: 'HDFC Bank',
  ifscCode: 'HDFC0001234',
};

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
      staggerChildren: 0.06
    }
  }
};

export default function CoursePurchaseModal({ course, isOpen, onClose, onContactClick }: Props) {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => {
    setSelectedPayment(null);
    setIsProcessing(false);
    setShowSuccess(false);
    onClose();
  };

  const handlePurchase = async () => {
    if (!selectedPayment) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 1500);
  };

  if (!course) return null;

  if (showSuccess) {
    return (
      <ModalWrapper isOpen={isOpen} onClose={handleClose}>
        <motion.div
          className="text-center py-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="relative w-24 h-24 mx-auto mb-6"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full animate-ping"></div>
            <motion.div
              className="relative w-20 h-20 mx-auto flex items-center justify-center border-2"
              style={{ borderColor: 'var(--accent-primary)', background: 'var(--surface-2)' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Check className="w-10 h-10 text-[var(--accent-primary)]" />
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="heading-3 mb-2">Payment Initiated!</h3>
            <p className="body-sm mb-6">
              Your transformation journey is about to begin...
            </p>
          </motion.div>
          <motion.div
            className="surface-card mb-6 text-left"
            variants={fadeInUp}
          >
            <div className="flex justify-between items-center py-2 border-b-2 border-[var(--border)]">
              <span className="text-[var(--text-dim)] font-mono text-xs">Course</span>
              <span className="text-[var(--text-primary)] font-mono text-sm">{course.title}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b-2 border-[var(--border)]">
              <span className="text-[var(--text-dim)] font-mono text-xs">Amount</span>
              <span className="text-[var(--accent-primary)] font-mono font-bold text-lg">₹{course.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-[var(--text-dim)] font-mono text-xs">Via</span>
              <span className="text-[var(--text-secondary)] font-mono text-xs uppercase">{selectedPayment}</span>
            </div>
          </motion.div>
          <motion.button
            type="button"
            onClick={handleClose}
            className="btn-primary"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start My Journey
          </motion.button>
        </motion.div>
      </ModalWrapper>
    );
  }

  const originalPrice = Math.floor(course.price * 1.5);
  const discount = Math.round(((originalPrice - course.price) / originalPrice) * 100);

  return (
    <ModalWrapper isOpen={isOpen} onClose={handleClose}>
      <motion.div
        className="p-2"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Course Card - Transformation Gateway */}
        <motion.div
          className="relative mb-6 p-5 surface-card-elevated overflow-hidden"
          variants={fadeInUp}
        >
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-primary)]/5 rounded-bl-full"></div>

          {/* Transformation badge */}
          <div className="absolute top-4 left-4">
            <span className="badge badge-accent flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Transformation Path
            </span>
          </div>

          <div className="flex items-start gap-4 mt-6">
            {/* Course initial badge */}
            <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--accent-primary)', color: 'var(--canvas)' }}>
              <span className="font-serif text-2xl">{course.title.charAt(0)}</span>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="heading-4 mb-1">{course.title}</h3>
              <p className="body-sm line-clamp-2">{course.description}</p>
            </div>
          </div>

          {/* Price tag */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-[var(--accent-primary)] font-mono text-3xl font-bold">₹{course.price.toLocaleString()}</span>
              <span className="text-[var(--text-dim)] font-mono text-sm line-through">₹{originalPrice.toLocaleString()}</span>
            </div>
            <span className="badge badge-accent">
              {discount}% OFF
            </span>
          </div>
        </motion.div>

        {/* Features - Your transformation includes */}
        <motion.div className="mb-6" variants={fadeInUp}>
          <h4 className="section-label mb-3">Your Transformation Includes</h4>
          <div className="flex flex-wrap gap-2">
            {(course.features || []).slice(0, 4).map((feature, index) => (
              <span
                key={index}
                className="badge badge-muted flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-[var(--accent-primary)]" />
                {feature}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Payment Methods - Choose your path */}
        <motion.div className="mb-5" variants={fadeInUp}>
          <h4 className="section-label">Choose Payment Path</h4>
          <div className="grid grid-cols-2 gap-3">
            {PAYMENT_METHODS.map((method) => (
              <motion.button
                key={method.id}
                type="button"
                onClick={() => setSelectedPayment(method.id as PaymentMethod)}
                className={`relative p-4 border-2 rounded-lg transition-all duration-200 text-left group ${
                  selectedPayment === method.id
                    ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10'
                    : 'border-[var(--border)] bg-[var(--surface-1)] hover:border-[var(--border-strong)]'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                  selectedPayment === method.id ? 'bg-[var(--accent-primary)]' : 'bg-[var(--surface-2)] group-hover:bg-[var(--surface-3)]'
                }`}>
                  <method.icon className={`w-5 h-5 transition-colors ${
                    selectedPayment === method.id ? 'text-[var(--canvas)]' : 'text-[var(--text-muted)]'
                  }`} />
                </div>
                <div className={`font-mono font-bold text-sm ${
                  selectedPayment === method.id ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)]'
                }`}>
                  {method.label}
                </div>
                <div className="font-mono text-xs text-[var(--text-dim)]">{method.desc}</div>

                {/* Selection indicator */}
                <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedPayment === method.id ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)] scale-100' : 'border-[var(--border-strong)] scale-90 opacity-0'
                }`}>
                  {selectedPayment === method.id && (
                    <Check className="w-3 h-3 text-[var(--canvas)]" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Bank Transfer Details */}
        <AnimatePresence>
          {selectedPayment === 'bank' && (
            <motion.div
              className="mb-5 p-4 surface-card"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <h4 className="section-label">Bank Details</h4>
              <div className="space-y-2 font-mono text-sm">
                <p><span className="text-[var(--text-dim)]">Account:</span> <span className="text-[var(--text-secondary)]">{BANK_DETAILS.accountName}</span></p>
                <p><span className="text-[var(--text-dim)]">Number:</span> <span className="text-[var(--text-secondary)]">{BANK_DETAILS.accountNumber}</span></p>
                <p><span className="text-[var(--text-dim)]">Bank:</span> <span className="text-[var(--text-secondary)]">{BANK_DETAILS.bankName}</span></p>
                <p><span className="text-[var(--text-dim)]">IFSC:</span> <span className="text-[var(--text-secondary)]">{BANK_DETAILS.ifscCode}</span></p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Security badge */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-5 py-3 surface-card"
          variants={fadeInUp}
        >
          <Shield className="w-4 h-4 text-green-500" />
          <span className="font-mono text-xs text-[var(--text-dim)]">256-bit SSL Secured • 30-Day Guarantee</span>
        </motion.div>

        {/* Action buttons */}
        <motion.div className="flex gap-3" variants={fadeInUp}>
          <motion.button
            type="button"
            onClick={handleClose}
            className="btn-secondary flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore More
          </motion.button>
          <motion.button
            type="button"
            onClick={handlePurchase}
            disabled={!selectedPayment || isProcessing}
            className={`flex-1 ${selectedPayment && !isProcessing ? 'btn-primary' : 'btn-primary opacity-50 cursor-not-allowed'}`}
            whileHover={selectedPayment && !isProcessing ? { scale: 1.02 } : {}}
            whileTap={selectedPayment && !isProcessing ? { scale: 0.98 } : {}}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-[var(--canvas)]/30 border-t-[var(--canvas)] rounded-full animate-spin"></div>
                Processing...
              </span>
            ) : (
              <>
                Begin Transformation
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Contact link */}
        <p className="text-center mt-4 body-sm">
          Questions about your transformation?{' '}
          <button
            type="button"
            onClick={() => {
              handleClose();
              onContactClick?.();
            }}
            className="link"
          >
            Speak with a guide
          </button>
        </p>
      </motion.div>
    </ModalWrapper>
  );
}