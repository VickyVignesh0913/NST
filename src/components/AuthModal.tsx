import { useState } from 'react';
import { X, Check } from 'lucide-react';
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
  'Conversational', 'Business', 'IELTS', 'TOEFL', 'TOEIC', 'Cambridge', 'Other'
];

const ENGLISH_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Fluent'];

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

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup form
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupWhatsApp, setSignupWhatsApp] = useState('');
  const [signupCountry, setSignupCountry] = useState('');
  const [signupGoal, setSignupGoal] = useState('');
  const [signupLevel, setSignupLevel] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset function for consistent close behavior
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
      setSuccessMessage('Login successful!');
      setShowSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 1500);
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Account created successfully!');
      setShowSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 1500);
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
          {showSuccess ? (
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
              <h3 className="heading-3 mb-2">Success!</h3>
              <p className="body-md mb-6">
                {successMessage}
              </p>
            </motion.div>
          ) : (
            <motion.div key={mode} variants={fadeInUp}>
              {/* Header */}
              <div className="mb-6 text-center">
                <span className="section-label">Welcome Back</span>
                <h2 className="heading-3 mb-2">
                  {mode === 'login' ? 'Login' : 'Create Account'}
                </h2>
                <p className="body-md">
                  {mode === 'login'
                    ? 'Continue your transformation journey'
                    : 'Begin your English transformation'}
                </p>
              </div>

              {mode === 'login' ? (
                /* Login Form */
                <form onSubmit={handleLogin} className="space-y-4">
                  <motion.div variants={fadeInUp}>
                    <label className="section-label">
                      Email
                    </label>
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
                    <label className="section-label">
                      Password
                    </label>
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="input w-full"
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
                    {isSubmitting ? 'Logging in...' : 'Continue Journey'}
                  </motion.button>

                  <p className="text-center body-md">
                    New to English Boss?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="link"
                    >
                      Start transformation
                    </button>
                  </p>
                </form>
              ) : (
                /* Signup Form */
                <form onSubmit={handleSignup} className="space-y-4">
                  <motion.div variants={fadeInUp}>
                    <label className="section-label">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      placeholder="Your full name"
                      className="input w-full"
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="section-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="input w-full"
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="section-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={signupPhone}
                      onChange={(e) => setSignupPhone(e.target.value)}
                      placeholder="+1 234 567 890"
                      className="input w-full"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="section-label">
                      WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={signupWhatsApp}
                      onChange={(e) => setSignupWhatsApp(e.target.value)}
                      placeholder="+1 234 567 890"
                      className="input w-full"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="section-label">
                      Country
                    </label>
                    <select
                      value={signupCountry}
                      onChange={(e) => setSignupCountry(e.target.value)}
                      className="input w-full"
                    >
                      <option value="">Select country</option>
                      {COUNTRIES.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="section-label">
                      Learning Goal
                    </label>
                    <select
                      value={signupGoal}
                      onChange={(e) => setSignupGoal(e.target.value)}
                      className="input w-full"
                    >
                      <option value="">Select goal</option>
                      {LEARNING_GOALS.map((goal) => (
                        <option key={goal} value={goal}>{goal}</option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="section-label">
                      Current English Level
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {ENGLISH_LEVELS.map((level) => (
                        <motion.label
                          key={level}
                          className={`flex items-center justify-center p-3 border-2 font-mono text-xs cursor-pointer transition-colors ${
                            signupLevel === level
                              ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--text-primary)]'
                              : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)]'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="radio"
                            name="englishLevel"
                            value={level}
                            checked={signupLevel === level}
                            onChange={(e) => setSignupLevel(e.target.value)}
                            className="sr-only"
                          />
                          {level}
                        </motion.label>
                      ))}
                    </div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Creating account...' : 'Begin Transformation'}
                  </motion.button>

                  <p className="text-center body-md">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="link"
                    >
                      Continue journey
                    </button>
                  </p>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ModalWrapper>
  );
}