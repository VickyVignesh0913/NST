import { useState } from 'react';
import { Sparkles, ArrowRight, GraduationCap, Target, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ModalWrapper from './ModalWrapper';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: { id: string; title: string }[];
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

const LEVELS = [
  { id: 'a1', label: 'A1 — Beginner', desc: 'Could barely introduce myself' },
  { id: 'a2', label: 'A2 — Elementary', desc: 'Simple sentences, lots of pauses' },
  { id: 'b1', label: 'B1 — Intermediate', desc: 'Could hold basic conversations' },
  { id: 'b2', label: 'B2 — Upper Intermediate', desc: 'Felt confident in most situations' },
  { id: 'c1', label: 'C1 — Advanced', desc: 'Almost native-level fluency' },
];

const MILESTONES = [
  'First full conversation',
  'Job interview in English',
  'Presentation at work',
  'Traveled without translator',
  'Passed exam / certification',
  'Made English-speaking friends',
  'Started thinking in English',
  'Got a promotion',
];

const StoryArc = ({
  number, title, subtitle, value, onChange, placeholder, lines
}: {
  number: string;
  title: string;
  subtitle: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  lines: number;
}) => (
  <motion.div variants={fadeInUp} className="space-y-2">
    <div className="flex items-center gap-3">
      <span className="w-7 h-7 rounded-full border border-[var(--accent-primary)] flex items-center justify-center text-xs font-mono text-[var(--accent-primary)] shrink-0">
        {number}
      </span>
      <div>
        <label className="text-sm font-semibold text-[var(--fg)]">{title}</label>
        <p className="text-xs text-[var(--muted)]">{subtitle}</p>
      </div>
    </div>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={lines}
      className="input w-full resize-none text-sm ml-10"
    />
  </motion.div>
);

export default function TestimonialModal({ isOpen, onClose, courses }: TestimonialModalProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [levelBefore, setLevelBefore] = useState('');
  const [levelAfter, setLevelAfter] = useState('');
  const [storyStart, setStoryStart] = useState('');
  const [storyTurning, setStoryTurning] = useState('');
  const [storyResult, setStoryResult] = useState('');
  const [milestones, setMilestones] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetForm = () => {
    setStep(1);
    setName(''); setSelectedCourse('');
    setLevelBefore(''); setLevelAfter('');
    setStoryStart(''); setStoryTurning(''); setStoryResult('');
    setMilestones([]);
    setIsSuccess(false);
  };

  const handleClose = () => { resetForm(); onClose(); };

  const toggleMilestone = (m: string) => {
    setMilestones(prev => prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m]);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const canProceedStep1 = name.trim().length >= 2 && selectedCourse;
  const canProceedStep2 = levelBefore && levelAfter && levelBefore !== levelAfter;
  const canProceedStep3 = storyStart.trim().length >= 10 && storyResult.trim().length >= 10;
  const canSubmit = milestones.length > 0;

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
            <motion.div key="success" variants={fadeInUp} className="text-center py-8">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-[var(--accent-primary)]/10 rounded-full flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <Sparkles className="text-[var(--accent-primary)]" size={32} />
              </motion.div>
              <h3 className="heading-3 mb-2">You Are Now an Inspiration</h3>
              <p className="body-md mb-6 max-w-sm mx-auto">
                Your story will light the path for someone who is where you once were — stuck, unsure, waiting for a sign.
              </p>
              <div className="surface-card p-4 mb-6 text-left space-y-2 rounded-lg border border-[var(--border)]">
                <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider">Your Impact Card</p>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap size={14} className="text-[var(--accent-primary)]" />
                  <span className="font-semibold">{name}</span>
                  <span className="text-[var(--muted)]">·</span>
                  <span className="text-[var(--muted)]">{levelBefore?.toUpperCase()} → {levelAfter?.toUpperCase()}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {milestones.map(m => (
                    <span key={m} className="text-xs px-2 py-0.5 border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] rounded">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <motion.button
                type="button"
                onClick={handleClose}
                className="btn-primary"
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
                <span className="section-label">Step {step} of 3</span>
                <div className="flex gap-1.5 mt-2 mb-4">
                  {[1, 2, 3].map(s => (
                    <div key={s} className={`h-1 flex-1 rounded-full transition-colors ${s <= step ? 'bg-[var(--accent-primary)]' : 'bg-[var(--border)]'}`} />
                  ))}
                </div>
                <h2 className="heading-3 mb-2">
                  {step === 1 && 'Your Transformation Story'}
                  {step === 2 && 'Your Progress Arc'}
                  {step === 3 && 'Your Breakthrough Details'}
                </h2>
                <p className="body-md">
                  {step === 1 && 'Tell us who you are and which path you walked.'}
                  {step === 2 && 'Show the distance you have traveled — from where you started to where you are now.'}
                  {step === 3 && 'Describe your turning point. What changed? What can others learn from your journey?'}
                </p>
              </div>

              {/* Step 1 — Identity */}
              {step === 1 && (
                <motion.div key="step1" variants={staggerContainer} className="space-y-4">
                  <motion.div variants={fadeInUp}>
                    <label className="section-label">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name (e.g. Priya Sharma)"
                      className="input w-full"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <label className="section-label">Which course transformed you?</label>
                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="input w-full"
                    >
                      <option value="">Select your course</option>
                      {courses.map(c => (
                        <option key={c.id} value={c.id}>{c.title}</option>
                      ))}
                    </select>
                  </motion.div>
                  <motion.button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!canProceedStep1}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-40"
                    variants={fadeInUp}
                  >
                    Next — Your Progress <ArrowRight size={16} />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2 — Before/After level */}
              {step === 2 && (
                <motion.div key="step2" variants={staggerContainer} className="space-y-5">
                  {/* Before */}
                  <motion.div variants={fadeInUp}>
                    <label className="section-label mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[var(--accent-primary)]/20 flex items-center justify-center text-xs text-[var(--accent-primary)]">B</span>
                      Where did you start?
                    </label>
                    <div className="space-y-1.5">
                      {LEVELS.map(l => (
                        <button
                          key={l.id}
                          type="button"
                          onClick={() => setLevelBefore(l.id)}
                          className={`w-full text-left px-3 py-2 rounded border text-sm transition-all ${
                            levelBefore === l.id
                              ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/5'
                              : 'border-[var(--border)] hover:border-[var(--muted)]'
                          }`}
                        >
                          <span className="font-semibold">{l.label}</span>
                          <span className="text-[var(--muted)] text-xs ml-2">{l.desc}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {/* After */}
                  <motion.div variants={fadeInUp}>
                    <label className="section-label mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[var(--accent-primary)]/20 flex items-center justify-center text-xs text-[var(--accent-primary)]">A</span>
                      Where are you now?
                    </label>
                    <div className="space-y-1.5">
                      {LEVELS.map(l => (
                        <button
                          key={l.id}
                          type="button"
                          onClick={() => setLevelAfter(l.id)}
                          disabled={l.id === levelBefore}
                          className={`w-full text-left px-3 py-2 rounded border text-sm transition-all ${
                            levelAfter === l.id
                              ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/5'
                              : l.id === levelBefore
                                ? 'border-[var(--border)] opacity-30 cursor-not-allowed'
                                : 'border-[var(--border)] hover:border-[var(--muted)]'
                          }`}
                        >
                          <span className="font-semibold">{l.label}</span>
                          <span className="text-[var(--muted)] text-xs ml-2">{l.desc}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Progress meter */}
                  {levelBefore && levelAfter && levelBefore !== levelAfter && (
                    <motion.div variants={fadeInUp} className="surface-card p-3 rounded border border-[var(--border)]">
                      <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-1.5">
                        <span>Before: {levelBefore.toUpperCase()}</span>
                        <TrendingUp size={14} className="text-[var(--accent-primary)]" />
                        <span>After: {levelAfter.toUpperCase()}</span>
                      </div>
                      <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: `${(LEVELS.findIndex(l => l.id === levelAfter) / (LEVELS.length - 1)) * 100}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  )}

                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!canProceedStep2}
                      className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-40"
                    >
                      Next — Your Story <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3 — Story + Milestones */}
              {step === 3 && (
                <motion.div key="step3" variants={staggerContainer} className="space-y-4">
                  <StoryArc
                    number="1" title="Where I Started" subtitle="What was your level before? What was hard?"
                    value={storyStart} onChange={setStoryStart}
                    placeholder="I could barely order food without panicking. Grammar was a mess, and I froze every time someone spoke fast..."
                    lines={3}
                  />
                  <StoryArc
                    number="2" title="The Turning Point" subtitle="What changed? A specific moment, lesson, or shift in mindset?"
                    value={storyTurning} onChange={setStoryTurning}
                    placeholder="One day during a practice session, I realized I wasn't translating in my head anymore. The words just came out..."
                    lines={2}
                  />
                  <StoryArc
                    number="3" title="My Result Today" subtitle="What can you do now that you couldn't before?"
                    value={storyResult} onChange={setStoryResult}
                    placeholder="Today I lead stand-ups at work, negotiate with international clients, and think in English without effort..."
                    lines={3}
                  />

                  {/* Milestones */}
                  <motion.div variants={fadeInUp}>
                    <label className="section-label mb-2 flex items-center gap-2">
                      <Target size={14} className="text-[var(--accent-primary)]" />
                      Milestones you have hit
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {MILESTONES.map(m => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => toggleMilestone(m)}
                          className={`px-3 py-1.5 rounded text-xs border transition-all ${
                            milestones.includes(m)
                              ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
                              : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  <div className="flex gap-3 pt-2">
                    <button type="button" onClick={() => setStep(2)} className="btn-secondary flex-1">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!canProceedStep3 || !canSubmit || isSubmitting}
                      className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-40"
                    >
                      {isSubmitting ? (
                        'Sharing...'
                      ) : (
                        <><Sparkles size={14} /> Share My Breakthrough</>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ModalWrapper>
  );
}
