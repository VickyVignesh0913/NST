import { useState } from 'react';
import { Check, Smartphone, Building, Shield, ArrowRight, Compass, Target, BookOpen, Mic, Zap, Clock, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ModalWrapper from './ModalWrapper';
import { Course } from '../types';

interface Props {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onContactClick?: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const ROADMAP_STEPS = [
  { icon: Target, label: 'Assess', desc: 'Know your current level' },
  { icon: BookOpen, label: 'Build', desc: 'Foundation & vocabulary' },
  { icon: Mic, label: 'Drill', desc: 'Real conversation practice' },
  { icon: Compass, label: 'Speak', desc: 'Natural fluency unlocked' },
];

const PAYMENT_PATHS = [
  {
    id: 'razorpay',
    label: 'Instant Access',
    via: 'Razorpay',
    icon: Zap,
    desc: 'Card, UPI, NetBanking',
    badge: '2 min',
  },
  {
    id: 'paypal',
    label: 'International',
    via: 'PayPal',
    icon: Smartphone,
    desc: 'For students abroad',
  },
  {
    id: 'stripe',
    label: 'Secure Card',
    via: 'Stripe',
    icon: Shield,
    desc: 'All major cards',
  },
  {
    id: 'bank',
    label: 'Direct Transfer',
    via: 'Bank',
    icon: Building,
    desc: 'Manual confirmation',
    badge: '1-2 days',
  },
];

const BANK_DETAILS = {
  accountName: 'English Boss',
  accountNumber: '1234567890',
  bankName: 'HDFC Bank',
  ifscCode: 'HDFC0001234',
};

function calculatePerDay(price: number, duration: string): number {
  if (duration.includes('day')) {
    const days = parseInt(duration) || 40;
    return Math.round(price / days);
  }
  return Math.round(price / 60);
}

function getJourneyStepsForCourse(course: Course) {
  const isLive = course.type === 'Live';
  const level = course.level.toLowerCase();

  if (isLive) {
    return [
      { icon: Target, label: 'Assess', desc: 'Live level evaluation' },
      { icon: BookOpen, label: 'Learn', desc: 'Live sessions 5x/week' },
      { icon: Mic, label: 'Practice', desc: 'Real-time feedback from Charles' },
      { icon: Compass, label: 'Speak', desc: 'Confident in ' + (course.duration.includes('day') ? course.duration : 'weeks') },
    ];
  }
  if (level.includes('phrasal') || level.includes('all')) {
    return [
      { icon: Target, label: 'Start', desc: '21 practical topics' },
      { icon: BookOpen, label: 'Learn', desc: '400+ phrasal verbs' },
      { icon: Mic, label: 'Apply', desc: 'Real sentence drills' },
      { icon: Compass, label: 'Master', desc: 'Speak like a native' },
    ];
  }
  return [
    { icon: Target, label: 'Assess', desc: 'Diagnose your current level' },
    { icon: BookOpen, label: 'Build', desc: 'Grammar & word power' },
    { icon: Mic, label: 'Practice', desc: 'Real conversation drills' },
    { icon: Compass, label: 'Speak', desc: 'Natural fluency unlocked' },
  ];
}

export default function CoursePurchaseModal({ course, isOpen, onClose, onContactClick }: Props) {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => {
    setSelectedPayment(null);
    setIsProcessing(false);
    setShowSuccess(false);
    onClose();
  };

  const handlePurchase = () => {
    if (!selectedPayment) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 1500);
  };

  if (!course) return null;

  const roadmapSteps = getJourneyStepsForCourse(course);
  const originalPrice = course.originalPrice || Math.floor(course.price * 1.5);
  const discount = Math.round(((originalPrice - course.price) / originalPrice) * 100);
  const perDay = calculatePerDay(course.price, course.duration);

  if (showSuccess) {
    return (
      <ModalWrapper isOpen={isOpen} onClose={handleClose} maxWidth="md">
        <motion.div
          className="p-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Success header */}
          <motion.div className="text-center mb-6" variants={fadeInUp}>
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: 'var(--accent-primary)' }}></div>
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center border-2"
                style={{ borderColor: 'var(--accent-primary)', background: 'var(--surface-2)' }}>
                <Compass className="w-9 h-9 text-[var(--accent-primary)]" />
              </div>
            </div>
            <h3 className="heading-3 mb-1">Your Journey Has Begun</h3>
            <p className="body-sm text-[var(--text-dim)]">
              {course.type === 'Live'
                ? 'Your live batch is confirmed. Check your email for session details.'
                : 'Your course is unlocked. Start learning at your own pace.'}
            </p>
          </motion.div>

          {/* Confirmation card */}
          <motion.div className="mb-6 p-4 surface-card" variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-3 pb-3 border-b-2" style={{ borderColor: 'var(--border)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-primary)', color: 'var(--canvas)' }}>
                <span className="font-serif font-bold">{course.title.charAt(0)}</span>
              </div>
              <div>
                <p className="font-mono font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{course.title}</p>
                <p className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>{course.level} &middot; {course.duration}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>Amount paid</span>
              <span className="font-mono font-bold text-lg" style={{ color: 'var(--accent-primary)' }}>₹{course.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>Payment via</span>
              <span className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                {PAYMENT_PATHS.find(p => p.id === selectedPayment)?.via || selectedPayment}
              </span>
            </div>
          </motion.div>

          {/* Next steps hint */}
          <motion.div className="mb-6 p-4 rounded-lg flex items-start gap-3"
            style={{ background: 'color-mix(in oklab, var(--accent-primary) 8%, transparent)' }}
            variants={fadeInUp}
          >
            <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
            <div>
              <p className="font-mono font-bold text-xs mb-1" style={{ color: 'var(--accent-primary)' }}>What happens next?</p>
              <p className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                {course.type === 'Live'
                  ? 'You\'ll receive a confirmation email with batch schedule and access link within 5 minutes.'
                  : 'Your course materials are ready. Start with Module 1 — you\'ll find it in your dashboard.'}
              </p>
            </div>
          </motion.div>

          <motion.button
            type="button"
            onClick={handleClose}
            className="btn-primary w-full"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Go to Dashboard
          </motion.button>
        </motion.div>
      </ModalWrapper>
    );
  }

  return (
    <ModalWrapper isOpen={isOpen} onClose={handleClose}>
      <motion.div
        className="p-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Ribbon label */}
        <motion.div className="mb-5" variants={fadeInUp}>
          <span className="font-mono text-xs tracking-widest uppercase"
            style={{ color: 'var(--accent-primary)' }}>
            Course Briefing
          </span>
          <div className="w-8 h-0.5 mt-1.5" style={{ background: 'var(--accent-primary)' }}></div>
        </motion.div>

        {/* Course snapshot */}
        <motion.div className="flex items-start gap-4 mb-5" variants={fadeInUp}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--accent-primary)', color: 'var(--canvas)' }}>
            <span className="font-serif text-xl font-bold">{course.title.charAt(0)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif font-bold text-lg mb-0.5" style={{ color: 'var(--text-primary)' }}>
              {course.title}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                {course.level}
              </span>
              <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>&middot;</span>
              <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                {course.duration}
              </span>
              {course.type === 'Live' && course.batchTime && (
                <>
                  <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>&middot;</span>
                  <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                    {course.batchTime}
                  </span>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* The Roadmap — replaces generic feature badges */}
        <motion.div className="mb-5" variants={fadeInUp}>
          <h4 className="font-mono font-bold text-xs tracking-wider uppercase mb-3"
            style={{ color: 'var(--text-secondary)' }}>
            Your Learning Roadmap
          </h4>
          <div className="grid grid-cols-4 gap-2">
            {roadmapSteps.map((step, i) => (
              <div key={step.label} className="relative">
                <div className="flex flex-col items-center text-center p-3 rounded-lg transition-colors"
                  style={{
                    background: i < 2 ? 'color-mix(in oklab, var(--accent-primary) 8%, transparent)' : 'var(--surface-1)',
                  }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mb-2"
                    style={{
                      background: i < 2
                        ? 'color-mix(in oklab, var(--accent-primary) 15%, transparent)'
                        : 'var(--surface-2)',
                    }}>
                    <step.icon className="w-4 h-4" style={{
                      color: i < 2 ? 'var(--accent-primary)' : 'var(--text-muted)'
                    }} />
                  </div>
                  <span className="font-mono font-bold text-[11px] leading-tight mb-0.5"
                    style={{ color: 'var(--text-primary)' }}>
                    {step.label}
                  </span>
                  <span className="font-mono text-[10px] leading-tight"
                    style={{ color: 'var(--text-dim)' }}>
                    {step.desc}
                  </span>
                </div>
                {/* Connector line between steps */}
                {i < 3 && (
                  <div className="hidden sm:block absolute -right-1.5 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="w-3 h-3" style={{ color: 'var(--text-muted)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Course description — only shown if meaningful */}
        {course.shortDesc && (
          <motion.p className="font-mono text-xs leading-relaxed mb-5"
            style={{ color: 'var(--text-dim)' }}
            variants={fadeInUp}>
            {course.shortDesc.length > 120 ? course.shortDesc.slice(0, 120) + '...' : course.shortDesc}
          </motion.p>
        )}

        {/* Your Investment */}
        <motion.div className="mb-5 p-4 surface-card" variants={fadeInUp}>
          <h4 className="font-mono font-bold text-xs tracking-wider uppercase mb-3"
            style={{ color: 'var(--text-secondary)' }}>
            Your Investment
          </h4>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-mono font-bold text-3xl" style={{ color: 'var(--accent-primary)' }}>
              ₹{course.price.toLocaleString()}
            </span>
            <span className="font-mono text-sm line-through" style={{ color: 'var(--text-dim)' }}>
              ₹{originalPrice.toLocaleString()}
            </span>
            <span className="badge badge-accent ml-auto">{discount}% OFF</span>
          </div>
          <p className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
            Less than <span className="font-bold" style={{ color: 'var(--accent-primary)' }}>₹{perDay}/day</span>
            {' '}&mdash; invested in{' '}
            <span className="italic" style={{ color: 'var(--text-primary)' }}>you</span>
          </p>
        </motion.div>

        {/* Choose Your Path — reframed payment */}
        <motion.div className="mb-4" variants={fadeInUp}>
          <h4 className="font-mono font-bold text-xs tracking-wider uppercase mb-3"
            style={{ color: 'var(--text-secondary)' }}>
            Choose Your Path
          </h4>
          <div className="grid grid-cols-2 gap-2.5">
            {PAYMENT_PATHS.map((method) => (
              <motion.button
                key={method.id}
                type="button"
                onClick={() => setSelectedPayment(method.id)}
                className={`relative p-3 rounded-lg border-2 text-left transition-all duration-200 ${
                  selectedPayment === method.id
                    ? 'border-[var(--accent-primary)]'
                    : 'border-[var(--border)] hover:border-[var(--border-strong)]'
                }`}
                style={{
                  background: selectedPayment === method.id
                    ? 'color-mix(in oklab, var(--accent-primary) 8%, transparent)'
                    : 'var(--surface-1)',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{
                      background: selectedPayment === method.id
                        ? 'var(--accent-primary)'
                        : 'var(--surface-2)',
                    }}>
                    <method.icon className="w-4.5 h-4.5 transition-colors" style={{
                      color: selectedPayment === method.id ? 'var(--canvas)' : 'var(--text-muted)'
                    }} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className={`font-mono font-bold text-xs transition-colors ${
                        selectedPayment === method.id ? 'text-[var(--accent-primary)]' : ''
                      }`} style={{ color: 'var(--text-primary)' }}>
                        {method.label}
                      </span>
                      {method.badge && (
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded-full"
                          style={{
                            background: 'color-mix(in oklab, var(--accent-primary) 12%, transparent)',
                            color: 'var(--accent-primary)',
                          }}>
                          {method.badge}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[11px] block" style={{ color: 'var(--text-dim)' }}>
                      {method.desc}
                    </span>
                  </div>
                </div>

                {/* Selection check */}
                <div className={`absolute top-2.5 right-2.5 w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedPayment === method.id
                    ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)] scale-100 opacity-100'
                    : 'border-[var(--border-strong)] scale-75 opacity-0'
                }`}>
                  {selectedPayment === method.id && (
                    <Check className="w-2.5 h-2.5" style={{ color: 'var(--canvas)' }} />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Bank transfer details */}
        <AnimatePresence>
          {selectedPayment === 'bank' && (
            <motion.div
              className="mb-4 p-4 surface-card"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <h4 className="font-mono font-bold text-xs tracking-wider uppercase mb-3"
                style={{ color: 'var(--text-secondary)' }}>
                Transfer Details
              </h4>
              <div className="space-y-1.5 font-mono text-xs">
                {Object.entries(BANK_DETAILS).map(([key, val]) => (
                  <div key={key} className="flex justify-between">
                    <span style={{ color: 'var(--text-dim)' }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span style={{ color: 'var(--text-secondary)' }}>{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Confidence promise */}
        <motion.div className="mb-5 py-2.5 flex items-center justify-center gap-2"
          style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
          variants={fadeInUp}>
          <span className="font-mono text-[11px]" style={{ color: 'var(--text-dim)' }}>
            30-Day Fluency Promise &middot; 256-bit SSL
          </span>
        </motion.div>

        {/* Actions */}
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
                Begin My Journey
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Contact */}
        <p className="text-center mt-4 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
          Questions?{' '}
          <button
            type="button"
            onClick={() => { handleClose(); onContactClick?.(); }}
            className="font-bold underline underline-offset-2"
            style={{ color: 'var(--accent-primary)' }}
          >
            Speak with a guide
          </button>
        </p>
      </motion.div>
    </ModalWrapper>
  );
}
