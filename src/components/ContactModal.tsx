import { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

const INQUIRY_TYPES = [
  'Course Inquiry',
  'Technical Support',
  'Partnership',
  'General'
];

export default function ContactModal({ isOpen, onClose, initialType }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState(initialType || '');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setInquiryType('');
    setMessage('');
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
                <Send className="text-[#e8a445]" size={32} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">Message Sent!</h3>
              <p className="text-[#888] font-mono text-sm mb-6">
                We'll reply within 24 hours.
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
                <h2 className="font-serif text-3xl text-white mb-2">Contact Us</h2>
                <p className="text-[#666] font-mono text-sm">
                  We'd love to hear from you
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                    Inquiry Type
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors"
                  >
                    <option value="">Select type</option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#888] font-mono text-xs uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message..."
                    rows={4}
                    className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-white font-mono text-sm focus:border-[#e8a445] focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#e8a445] text-black uppercase tracking-widest font-mono text-sm hover:bg-[#f0b456] hover:shadow-[0_0_20px_rgba(232,164,69,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}