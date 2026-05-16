import { ReactNode, useEffect, useState } from 'react';
import { X } from 'lucide-react';

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
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      setShowContent(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      setTimeout(() => setShowContent(false), 200);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!showContent && !isAnimating) return null;

  const maxWidthClass = maxWidth === 'lg' ? 'max-w-lg' : 'max-w-md';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        opacity: isAnimating ? 1 : 0,
        transition: 'opacity 200ms ease-out'
      }}
    >
      {/* Backdrop with pulse animation */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        style={{
          animation: isAnimating ? 'modalBackdropIn 200ms ease-out' : 'modalBackdropOut 200ms ease-in'
        }}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full ${maxWidthClass} mx-4 bg-[#0a0a0a] border-2 border-[#333] overflow-y-auto ${className}`}
        style={{
          maxHeight: '90vh',
          transform: isAnimating ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
          opacity: isAnimating ? 1 : 0,
          transition: 'transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 200ms ease-out'
        }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-[#666] hover:text-[#e8a445] transition-colors z-10"
        >
          <X size={24} />
        </button>

        {children}
      </div>
    </div>
  );
}