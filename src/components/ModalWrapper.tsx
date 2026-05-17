import { ReactNode, useEffect, useState, useRef } from 'react';
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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setShowContent(true);
      document.body.style.overflow = 'hidden';
      const firstInput = modalRef.current?.querySelector('input, button, textarea, select') as HTMLInputElement;
      setTimeout(() => firstInput?.focus(), 100);
    } else {
      setTimeout(() => setShowContent(false), 200);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const maxWidthClass = maxWidth === 'lg' ? 'max-w-lg' : 'max-w-md';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            className={`relative w-full ${maxWidthClass} bg-[var(--surface-1)] border border-[var(--accent-primary)] rounded-lg shadow-2xl overflow-y-auto ${className}`}
            style={{ maxHeight: '90vh' }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
            role="document"
          >
            {/* Close button - improved styling */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-md bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-all z-10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}