import { ReactNode, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: 'md' | 'lg';
  className?: string;
}

export default function ModalWrapper({
  isOpen,
  onClose,
  children,
  maxWidth = 'md',
  className = ''
}: ModalWrapperProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowContent(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setShowContent(false), 200);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const maxWidthClass = maxWidth === 'lg' ? 'max-w-lg' : 'max-w-md';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className={`relative w-full ${maxWidthClass} bg-[var(--surface-1)] border-2 border-[var(--border)] overflow-y-auto ${className}`}
            style={{ maxHeight: '90vh' }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-1 border-2 border-transparent hover:border-[var(--border)] hover:text-[var(--accent-primary)] transition-all z-10"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}