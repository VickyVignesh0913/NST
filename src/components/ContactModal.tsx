import { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ModalWrapper from './ModalWrapper';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

const LEVELS = [
  { value: 'beginner', label: 'Beginner', desc: 'I know basic words' },
  { value: 'intermediate', label: 'Intermediate', desc: 'I can hold simple conversations' },
  { value: 'upper-intermediate', label: 'Upper Intermediate', desc: 'I can express complex ideas' },
  { value: 'advanced', label: 'Advanced', desc: 'I speak with near-fluency' },
];

const GOALS = [
  { value: 'career', label: 'Career', desc: 'Job interviews, presentations, emails' },
  { value: 'travel', label: 'Travel', desc: 'Navigate real-world situations' },
  { value: 'study', label: 'Study', desc: 'Academic English & exams' },
  { value: 'confidence', label: 'Confidence', desc: 'Speak without hesitation' },
  { value: 'fluency', label: 'Fluency', desc: 'Think and speak in English' },
];

const TIMESLOTS = [
  { value: 'morning', label: 'Morning', desc: '8 AM – 12 PM' },
  { value: 'afternoon', label: 'Afternoon', desc: '12 PM – 5 PM' },
  { value: 'evening', label: 'Evening', desc: '5 PM – 9 PM' },
  { value: 'any', label: 'Any Time', desc: 'Flexible' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function ContactModal({ isOpen, onClose, initialType }: ContactModalProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetForm = () => {
    setStep(1);
    setName('');
    setEmail('');
    setPhone('');
    setLevel('');
    setGoal('');
    setTimeSlot('');
    setMessage('');
    setIsSubmitting(false);
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

  const canProceedToStep2 = name && email;
  const canProceedToStep3 = level && goal;
  const canSubmit = timeSlot;

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
            /* ─── Success State ─── */
            <motion.div
              key="success"
              variants={staggerContainer}
              className="text-center py-6"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 border-2 border-[var(--accent-primary)] flex items-center justify-center surface-card-elevated"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
              >
                <Check className="text-[var(--accent-primary)]" size={32} />
              </motion.div>
              <motion.h3 className="heading-3 mb-2" variants={fadeInUp}>Strategy Call Booked</motion.h3>
              <motion.p className="body-md mb-6" variants={fadeInUp}>
                Your roadmap session is confirmed. Here's what happens next:
              </motion.p>

              <motion.div className="space-y-3 text-left mb-8" variants={staggerContainer}>
                {[
                  { step: '1', title: 'Check Your Inbox', desc: 'You\'ll receive a confirmation email within 5 minutes with a link to book your exact slot.' },
                  { step: '2', title: 'Pre-Session Assessment', desc: 'We\'ll send you a quick 3-minute self-assessment so your session is personalised.' },
                  { step: '3', title: 'Your Strategy Call', desc: 'A 20-minute video call where we map your personalised fluency roadmap.' },
                ].map((item) => (
                  <motion.div
                    key={item.step}
                    className="flex gap-4 p-4 surface-card-elevated"
                    variants={fadeInUp}
                  >
                    <div className="w-8 h-8 flex-shrink-0 border border-[var(--border)] flex items-center justify-center">
                      <span className="font-mono text-sm text-[var(--accent-primary)]">{item.step}</span>
                    </div>
                    <div>
                      <div className="font-mono text-sm font-bold">{item.title}</div>
                      <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                type="button"
                onClick={handleClose}
                className="btn-secondary"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Return to Dashboard
              </motion.button>
            </motion.div>
          ) : (
            /* ─── Form ─── */
            <motion.div key="form" variants={fadeInUp}>
              {/* Header */}
              <div className="mb-6">
                <span className="section-label">
                  {step === 1 ? 'Step 1 of 3 — Profile' : step === 2 ? 'Step 2 of 3 — Assessment' : 'Step 3 of 3 — Schedule'}
                </span>
                <h2 className="heading-3 mb-1">Book Your Free Strategy Call</h2>
                <p className="body-md">
                  {step === 1
                    ? 'Tell us a bit about yourself so we can prepare.'
                    : step === 2
                    ? 'Help us understand where you are and where you want to go.'
                    : 'Pick a time window and add any notes for your strategist.'}
                </p>

                {/* Progress bar */}
                <div className="mt-4 flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1 flex-1 transition-all ${
                        s <= step ? 'bg-[var(--accent-primary)]' : 'bg-[var(--border)]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* ── Step 1: Profile ── */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="space-y-4"
                    >
                      <motion.div variants={fadeInUp}>
                        <label className="section-label">Your Name *</label>
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
                        <label className="section-label">Email *</label>
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
                        <label className="section-label">Phone <span className="text-[var(--text-muted)] text-xs">(optional)</span></label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="input w-full"
                        />
                      </motion.div>

                      <motion.div className="flex gap-3 pt-2" variants={fadeInUp}>
                        <motion.button
                          type="button"
                          onClick={() => setStep(2)}
                          disabled={!canProceedToStep2}
                          className={`btn-primary flex-1 flex items-center justify-center gap-2 ${!canProceedToStep2 ? 'opacity-40 cursor-not-allowed' : ''}`}
                          whileHover={canProceedToStep2 ? { scale: 1.02 } : {}}
                          whileTap={canProceedToStep2 ? { scale: 0.98 } : {}}
                        >
                          Next — Your Level
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* ── Step 2: Assessment ── */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="space-y-5"
                    >
                      {/* Level staircase */}
                      <motion.div variants={fadeInUp}>
                        <label className="section-label mb-3">Your Current Level</label>
                        <div className="space-y-2">
                          {LEVELS.map((lvl) => (
                            <motion.button
                              key={lvl.value}
                              type="button"
                              onClick={() => setLevel(lvl.value)}
                              className={`w-full p-3 flex items-center gap-3 border-2 text-left transition-all ${
                                level === lvl.value
                                  ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/5'
                                  : 'border-[var(--border)] hover:border-[var(--border-strong)]'
                              }`}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                            >
                              <div className={`w-6 h-6 flex items-center justify-center border-2 text-xs font-mono ${
                                level === lvl.value
                                  ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]'
                                  : 'border-[var(--border)] text-[var(--text-muted)]'
                              }`}>
                                {lvl.value === 'beginner' ? 'A1' : lvl.value === 'intermediate' ? 'B1' : lvl.value === 'upper-intermediate' ? 'B2' : 'C1'}
                              </div>
                              <div className="flex-1">
                                <div className="font-mono text-sm font-bold">{lvl.label}</div>
                                <div className="text-xs text-[var(--text-muted)]">{lvl.desc}</div>
                              </div>
                              {level === lvl.value && (
                                <Check className="w-4 h-4 text-[var(--accent-primary)]" />
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>

                      {/* Goal chips */}
                      <motion.div variants={fadeInUp}>
                        <label className="section-label mb-3">What's Your Goal?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {GOALS.map((g) => (
                            <motion.button
                              key={g.value}
                              type="button"
                              onClick={() => setGoal(g.value)}
                              className={`p-3 border-2 text-left transition-all ${
                                goal === g.value
                                  ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10'
                                  : 'border-[var(--border)] hover:border-[var(--border-strong)]'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="font-mono text-sm font-bold" style={{ color: goal === g.value ? 'var(--accent-primary)' : 'var(--text-primary)' }}>
                                {g.label}
                              </div>
                              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                {g.desc}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>

                      {/* Nav */}
                      <motion.div className="flex gap-3 pt-2" variants={fadeInUp}>
                        <motion.button
                          type="button"
                          onClick={() => setStep(1)}
                          className="btn-ghost flex items-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </motion.button>
                        <motion.button
                          type="button"
                          onClick={() => setStep(3)}
                          disabled={!canProceedToStep3}
                          className={`btn-primary flex-1 flex items-center justify-center gap-2 ${!canProceedToStep3 ? 'opacity-40 cursor-not-allowed' : ''}`}
                          whileHover={canProceedToStep3 ? { scale: 1.02 } : {}}
                          whileTap={canProceedToStep3 ? { scale: 0.98 } : {}}
                        >
                          Next — Schedule
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* ── Step 3: Schedule ── */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="space-y-4"
                    >
                      {/* Time slot */}
                      <motion.div variants={fadeInUp}>
                        <label className="section-label mb-3">Preferred Time Slot</label>
                        <div className="grid grid-cols-2 gap-2">
                          {TIMESLOTS.map((slot) => (
                            <motion.button
                              key={slot.value}
                              type="button"
                              onClick={() => setTimeSlot(slot.value)}
                              className={`p-3 border-2 text-left transition-all ${
                                timeSlot === slot.value
                                  ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10'
                                  : 'border-[var(--border)] hover:border-[var(--border-strong)]'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="font-mono text-sm font-bold" style={{ color: timeSlot === slot.value ? 'var(--accent-primary)' : 'var(--text-primary)' }}>
                                {slot.label}
                              </div>
                              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                {slot.desc}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>

                      {/* Message */}
                      <motion.div variants={fadeInUp}>
                        <label className="section-label">Anything you'd like us to prepare?</label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Specific topics, challenges, or goals you want to discuss..."
                          rows={3}
                          className="input w-full resize-none"
                        />
                      </motion.div>

                      {/* Summary */}
                      <motion.div
                        className="p-3 border border-[var(--border)]"
                        variants={fadeInUp}
                      >
                        <div className="text-xs font-mono text-[var(--text-muted)] mb-1">Session Summary</div>
                        <div className="text-sm font-mono">{level ? LEVELS.find((l) => l.value === level)?.label : '—'} → {goal ? GOALS.find((g) => g.value === goal)?.label : '—'}</div>
                      </motion.div>

                      {/* Nav */}
                      <motion.div className="flex gap-3 pt-2" variants={fadeInUp}>
                        <motion.button
                          type="button"
                          onClick={() => setStep(2)}
                          className="btn-ghost flex items-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </motion.button>
                        <motion.button
                          type="submit"
                          disabled={!canSubmit || isSubmitting}
                          className={`btn-primary flex-1 flex items-center justify-center gap-2 ${(!canSubmit || isSubmitting) ? 'opacity-40 cursor-not-allowed' : ''}`}
                          whileHover={canSubmit ? { scale: 1.02 } : {}}
                          whileTap={canSubmit ? { scale: 0.98 } : {}}
                        >
                          {isSubmitting ? (
                            'Booking...'
                          ) : (
                            <>
                              <Sparkles className="w-4 h-4" />
                              Book My Strategy Call
                            </>
                          )}
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ModalWrapper>
  );
}
