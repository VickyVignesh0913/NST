import { useState } from 'react';
import { X } from 'lucide-react';

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

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('login');

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

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Login successful!');
      onClose();
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Account created successfully!');
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-[#0a0a0a] border-2 border-[#333]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#666] hover:text-[#e8a445] transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="font-serif text-3xl text-white mb-2">
              {mode === 'login' ? 'Login' : 'Create Account'}
            </h2>
            <p className="text-[#666] font-mono text-sm">
              {mode === 'login'
                ? 'Welcome back to English Boss'
                : 'Start your English journey'}
            </p>
          </div>

          {mode === 'login' ? (
            /* Login Form */
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#e8a445] text-black uppercase tracking-widest font-mono text-sm hover:bg-[#f0b456] hover:shadow-[0_0_20px_rgba(232,164,69,0.4)] transition-all"
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>

              <p className="text-center text-[#666] font-mono text-sm">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className="text-[#e8a445] hover:underline"
                >
                  Sign up
                </button>
              </p>
            </form>
          ) : (
            /* Signup Form */
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={signupPhone}
                  onChange={(e) => setSignupPhone(e.target.value)}
                  placeholder="+1 234 567 890"
                  className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                  WhatsApp Number (Optional)
                </label>
                <input
                  type="tel"
                  value={signupWhatsApp}
                  onChange={(e) => setSignupWhatsApp(e.target.value)}
                  placeholder="+1 234 567 890"
                  className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                  Country
                </label>
                <select
                  value={signupCountry}
                  onChange={(e) => setSignupCountry(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                >
                  <option value="">Select country</option>
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                  Learning Goal
                </label>
                <select
                  value={signupGoal}
                  onChange={(e) => setSignupGoal(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                >
                  <option value="">Select goal</option>
                  {LEARNING_GOALS.map((goal) => (
                    <option key={goal} value={goal}>{goal}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                  Current English Level
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {ENGLISH_LEVELS.map((level) => (
                    <label
                      key={level}
                      className={`flex items-center justify-center p-3 border-2 font-mono text-xs cursor-pointer transition-colors ${
                        signupLevel === level
                          ? 'border-[#e8a445] bg-[#e8a445]/10 text-white'
                          : 'border-[#333] text-[#888] hover:border-[#555]'
                      }`}
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
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#e8a445] text-black uppercase tracking-widest font-mono text-sm hover:bg-[#f0b456] hover:shadow-[0_0_20px_rgba(232,164,69,0.4)] transition-all"
              >
                {isSubmitting ? 'Creating account...' : 'Create Account'}
              </button>

              <p className="text-center text-[#666] font-mono text-sm">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-[#e8a445] hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}