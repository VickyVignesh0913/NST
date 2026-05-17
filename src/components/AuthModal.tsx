import { useState } from 'react';
import { Check, Eye, EyeOff, ArrowRight, Target, Zap, BookOpen, Globe, Star, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ModalWrapper from './ModalWrapper';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthMode = 'login' | 'signup';

const COUNTRIES = [
  'USA', 'UK', 'India', 'Australia', 'Canada', 'Germany', 'France', 'Spain', 'Italy', 'Brazil', 'Mexico', 'Japan', 'China', 'Other'
];

const LEARNING_GOALS = [
  { id: 'conversational', label: 'Conversational', desc: 'Speak confidently daily' },
  { id: 'business', label: 'Business', desc: 'Workplace communication' },
  { id: 'ielts', label: 'IELTS', desc: 'Exam preparation' },
  { id: 'toefl', label: 'TOEFL', desc: 'Academic readiness' },
  { id: 'fluency', label: 'General Fluency', desc: 'Overall improvement' },
  { id: 'other', label: 'Other', desc: 'Custom goal' }
];

const ENGLISH_LEVELS = [
  { id: 'beginner', label: 'Beginner', desc: 'Just starting out' },
  { id: 'elementary', label: 'Elementary', desc: 'Basic phrases' },
  { id: 'intermediate', label: 'Intermediate', desc: 'Everyday conversations' },
  { id: 'advanced', label: 'Advanced', desc: 'Near-native flow' },
  { id: 'fluent', label: 'Fluent', desc: 'Native-level command' }
];

const MOTIVATIONS = [
  { id: 'career', icon: Star, label: 'Career Growth' },
  { id: 'travel', icon: Globe, label: 'Travel' },
  { id: 'study', icon: BookOpen, label: 'Study Abroad' },
  { id: 'confidence', icon: Zap, label: 'Confidence' },
  { id: 'exam', icon: Target, label: 'Exam Prep' }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showSuccess, setShowSuccess] = useState(false);
  const [signupStep, setSignupStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupWhatsApp, setSignupWhatsApp] = useState('');
  const [signupCountry, setSignupCountry] = useState('');
  const [signupGoal, setSignupGoal] = useState('');
  const [signupLevel, setSignupLevel] = useState('');
  const [signupMotivation, setSignupMotivation] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForms = () => {
    setLoginEmail('');
    setLoginPassword('');
    setSignupName('');
    setSignupEmail('');
    setSignupPhone('');
    setSignupWhatsApp('');
    setSignupCountry('');
    setSignupGoal('');
    setSignupLevel('');
    setSignupMotivation('');
    setSignupStep(1);
    setShowSuccess(false);
  };

  const handleClose = () => {
    resetForms();
    onClose();
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => handleClose(), 1800);
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1000);
  };

  const canProceedStep1 = signupName && signupEmail;
  const canProceedStep2 = signupLevel && signupGoal;
  const canProceedStep3 = true;

  return (
    <ModalWrapper isOpen={isOpen} onClose={handleClose} maxWidth="lg">
      <motion.div
        className="p-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div key="success" variants={fadeInUp} className="text-center py-8">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 border-2 border-[var(--accent-primary)] flex items-center justify-center surface-card-elevated"
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
              >
                <Check className="text-[var(--accent-primary)]" size={32} />
              </motion.div>
              <h3 className="heading-3 mb-2">
                {mode === 'login' ? 'Your Practice Resumes' : 'Your Journey Has Begun'}
              </h3>
              <p className="body-md mb-8 text-[var(--text-muted)]">
                {mode === 'login'
                  ? 'Pick up where you left off. Your progress is waiting.'
                  : 'Your fluency roadmap is ready. Let\'s start building.'}
              </p>
              {mode === 'signup' && (
                <motion.div
                  className="max-w-sm mx-auto text-left space-y-3"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="p-4 border border-[var(--border)] surface-card-elevated">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 border-2 border-[var(--accent-primary)] flex items-center justify-center">
                        <span className="font-mono text-xs text-[var(--accent-primary)]">1</span>
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-primary)]">Immediate</p>
                        <p className="body-sm">Access your first lesson pack</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 border-2 border-[var(--border)] flex items-center justify-center">
                        <span className="font-mono text-xs text-[var(--text-muted)]">2</span>
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">Today</p>
                        <p className="body-sm">Complete your level assessment</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border-2 border-[var(--border)] flex items-center justify-center">
                        <span className="font-mono text-xs text-[var(--text-muted)]">3</span>
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">This Week</p>
                        <p className="body-sm">Start your personalized practice plan</p>
                      </div>
                    </div>
                  </div>
                  <button onClick={handleClose} className="btn-primary w-full">
                    Begin My Journey
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : mode === 'login' ? (
            <motion.div key="login" variants={fadeInUp}>
              {/* Welcome Back Banner */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Zap size={16} className="text-[var(--accent-primary)]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-primary)]">Welcome Back</span>
                </div>
                <h2 className="heading-3">Resume Your Practice</h2>
                <p className="body-md text-[var(--text-muted)] mt-1">
                  Your progress is saved. Pick up where you left off.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <motion.div variants={fadeInUp}>
                  <label className="section-label">Email</label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="input w-full"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="section-label">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="input w-full pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--accent-primary)]"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </motion.div>

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-[var(--accent-primary)]" />
                    <span className="text-[var(--text-muted)]">Keep me signed in</span>
                  </label>
                  <button type="button" className="font-mono uppercase tracking-wider text-[var(--accent-primary)] hover:underline">
                    Forgot?
                  </button>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Signing in...' : (
                    <>Continue Your Streak <ArrowRight size={16} /></>
                  )}
                </motion.button>

                <p className="text-center body-md text-[var(--text-muted)]">
                  First time here?{' '}
                  <button type="button" onClick={() => { setMode('signup'); setSignupStep(1); }} className="link">
                    Start your journey
                  </button>
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div key={`signup-step-${signupStep}`} variants={fadeInUp}>
              {/* Signup — Multi-step Fluency Checkpoint */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Target size={16} className="text-[var(--accent-primary)]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-primary)]">
                    Step {signupStep} of 3
                  </span>
                </div>
                <h2 className="heading-3">
                  {signupStep === 1 && 'Who Are You?'}
                  {signupStep === 2 && 'Where Are You Today?'}
                  {signupStep === 3 && 'What Drives You?'}
                </h2>
                <p className="body-md text-[var(--text-muted)] mt-1">
                  {signupStep === 1 && 'Tell us about yourself so we can personalize your journey.'}
                  {signupStep === 2 && 'Help us understand your current level and goals.'}
                  {signupStep === 3 && 'One last step — then we build your fluency roadmap.'}
                </p>
              </div>

              {/* Step indicators */}
              <div className="flex gap-2 mb-6">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`flex-1 h-1 transition-colors ${
                    s <= signupStep ? 'bg-[var(--accent-primary)]' : 'bg-[var(--border)]'
                  }`} />
                ))}
              </div>

              <form onSubmit={handleSignup}>
                <AnimatePresence mode="wait">
                  {signupStep === 1 && (
                    <motion.div key="step1" variants={staggerContainer} initial="hidden" animate="visible" exit={{ opacity: 0, x: -20 }} className="space-y-4">
                      <motion.div variants={fadeInUp}>
                        <label className="section-label">Your Name *</label>
                        <input type="text" value={signupName} onChange={(e) => setSignupName(e.target.value)} placeholder="Your full name" className="input w-full" required />
                      </motion.div>
                      <motion.div variants={fadeInUp}>
                        <label className="section-label">Email *</label>
                        <input type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} placeholder="your@email.com" className="input w-full" required />
                      </motion.div>
                      <motion.div variants={fadeInUp}>
                        <label className="section-label">Phone Number</label>
                        <input type="tel" value={signupPhone} onChange={(e) => setSignupPhone(e.target.value)} placeholder="+1 234 567 890" className="input w-full" />
                      </motion.div>
                      <motion.button
                        type="button"
                        disabled={!canProceedStep1}
                        onClick={() => setSignupStep(2)}
                        className="btn-primary w-full flex items-center justify-center gap-2 mt-2 disabled:opacity-40"
                        variants={fadeInUp}
                        whileHover={{ scale: canProceedStep1 ? 1.02 : 1 }}
                        whileTap={{ scale: canProceedStep1 ? 0.98 : 1 }}
                      >
                        Next — Your Level <ArrowRight size={16} />
                      </motion.button>
                    </motion.div>
                  )}

                  {signupStep === 2 && (
                    <motion.div key="step2" variants={staggerContainer} initial="hidden" animate="visible" exit={{ opacity: 0, x: -20 }} className="space-y-5">
                      {/* Fluency Scale — Visual staircase */}
                      <motion.div variants={fadeInUp}>
                        <label className="section-label mb-3">Current English Level</label>
                        <div className="space-y-1">
                          {ENGLISH_LEVELS.map((level, i) => (
                            <motion.button
                              key={level.id}
                              type="button"
                              onClick={() => setSignupLevel(level.id)}
                              className={`w-full flex items-center gap-4 p-3 border transition-all ${
                                signupLevel === level.id
                                  ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/5'
                                  : 'border-[var(--border)] hover:border-[var(--border-strong)]'
                              }`}
                              whileHover={{ x: 4 }}
                              whileTap={{ scale: 0.99 }}
                            >
                              <div className={`h-6 w-1 transition-colors ${
                                signupLevel === level.id ? 'bg-[var(--accent-primary)]' : 'bg-[var(--border)]'
                              }`} />
                              <div className="flex-1 text-left">
                                <p className="body-sm font-medium">{level.label}</p>
                                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">{level.desc}</p>
                              </div>
                              {signupLevel === level.id && (
                                <Check size={16} className="text-[var(--accent-primary)]" />
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>

                      {/* Goal selector — visual cards */}
                      <motion.div variants={fadeInUp}>
                        <label className="section-label mb-3">Your Learning Goal</label>
                        <div className="grid grid-cols-2 gap-2">
                          {LEARNING_GOALS.map((goal) => (
                            <motion.button
                              key={goal.id}
                              type="button"
                              onClick={() => setSignupGoal(goal.id)}
                              className={`p-3 border text-left transition-all ${
                                signupGoal === goal.id
                                  ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/5'
                                  : 'border-[var(--border)] hover:border-[var(--border-strong)]'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <p className="body-sm font-medium">{goal.label}</p>
                              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">{goal.desc}</p>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp}>
                        <label className="section-label">Country</label>
                        <select value={signupCountry} onChange={(e) => setSignupCountry(e.target.value)} className="input w-full">
                          <option value="">Select country</option>
                          {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </motion.div>

                      <div className="flex gap-2">
                        <motion.button
                          type="button"
                          onClick={() => setSignupStep(1)}
                          className="flex-1 p-3 border border-[var(--border)] text-[var(--text-muted)] font-mono text-xs uppercase tracking-wider hover:border-[var(--border-strong)]"
                          variants={fadeInUp}
                        >
                          Back
                        </motion.button>
                        <motion.button
                          type="button"
                          disabled={!canProceedStep2}
                          onClick={() => setSignupStep(3)}
                          className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-40"
                          variants={fadeInUp}
                          whileHover={{ scale: canProceedStep2 ? 1.02 : 1 }}
                          whileTap={{ scale: canProceedStep2 ? 0.98 : 1 }}
                        >
                          Next — Motivation <ArrowRight size={16} />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {signupStep === 3 && (
                    <motion.div key="step3" variants={staggerContainer} initial="hidden" animate="visible" exit={{ opacity: 0, x: -20 }} className="space-y-5">
                      {/* Motivation — Visual chips */}
                      <motion.div variants={fadeInUp}>
                        <label className="section-label mb-3">What motivates you most?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {MOTIVATIONS.map((m) => {
                            const Icon = m.icon;
                            return (
                              <motion.button
                                key={m.id}
                                type="button"
                                onClick={() => setSignupMotivation(m.id)}
                                className={`p-4 border flex items-center gap-3 transition-all ${
                                  signupMotivation === m.id
                                    ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/5'
                                    : 'border-[var(--border)] hover:border-[var(--border-strong)]'
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Icon size={18} className={signupMotivation === m.id ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'} />
                                <span className="body-sm">{m.label}</span>
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp}>
                        <label className="section-label">WhatsApp Number (Optional)</label>
                        <input type="tel" value={signupWhatsApp} onChange={(e) => setSignupWhatsApp(e.target.value)} placeholder="+1 234 567 890" className="input w-full" />
                        <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mt-1">We use WhatsApp for practice reminders & tips</p>
                      </motion.div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting || !canProceedStep3}
                        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-40"
                        variants={fadeInUp}
                        whileHover={{ scale: canProceedStep3 ? 1.02 : 1 }}
                        whileTap={{ scale: canProceedStep3 ? 0.98 : 1 }}
                      >
                        {isSubmitting ? 'Building your roadmap...' : (
                          <>Build My Fluency Roadmap <ChevronRight size={16} /></>
                        )}
                      </motion.button>

                      <div className="flex gap-2">
                        <motion.button
                          type="button"
                          onClick={() => setSignupStep(2)}
                          className="flex-1 p-3 border border-[var(--border)] text-[var(--text-muted)] font-mono text-xs uppercase tracking-wider hover:border-[var(--border-strong)]"
                          variants={fadeInUp}
                        >
                          Back
                        </motion.button>
                        <div className="flex-1" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {signupStep === 1 && (
                  <p className="text-center body-md text-[var(--text-muted)] mt-4">
                    Already enrolled?{' '}
                    <button type="button" onClick={() => setMode('login')} className="link">
                      Resume your practice
                    </button>
                  </p>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ModalWrapper>
  );
}
