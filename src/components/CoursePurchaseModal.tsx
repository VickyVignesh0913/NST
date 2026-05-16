import { useState } from 'react';
import { Check, CreditCard, Smartphone, Building, Shield, Sparkles } from 'lucide-react';
import ModalWrapper from './ModalWrapper';
import { Course } from '../types';

interface Props {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onContactClick?: () => void;
}

type PaymentMethod = 'razorpay' | 'paypal' | 'stripe' | 'bank';

const PAYMENT_METHODS = [
  { id: 'razorpay', label: 'Razorpay', icon: CreditCard, desc: 'Instant checkout' },
  { id: 'paypal', label: 'PayPal', icon: Smartphone, desc: 'Pay with PayPal' },
  { id: 'stripe', label: 'Stripe', icon: Shield, desc: 'Secure payment' },
  { id: 'bank', label: 'Bank Transfer', icon: Building, desc: 'Direct transfer' },
];

const BANK_DETAILS = {
  accountName: 'English Boss',
  accountNumber: '1234567890',
  bankName: 'HDFC Bank',
  ifscCode: 'HDFC0001234',
};

export default function CoursePurchaseModal({ course, isOpen, onClose, onContactClick }: Props) {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => {
    setSelectedPayment(null);
    setIsProcessing(false);
    setShowSuccess(false);
    onClose();
  };

  const handlePurchase = async () => {
    if (!selectedPayment) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 1500);
  };

  if (!course) return null;

  if (showSuccess) {
    return (
      <ModalWrapper isOpen={isOpen} onClose={handleClose}>
        <div className="text-center py-6">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 bg-[#e8a445]/20 rounded-full animate-ping"></div>
            <div className="relative w-20 h-20 mx-auto bg-[#e8a845]/20 rounded-full flex items-center justify-center border-2 border-[#e8a845]">
              <Check className="w-10 h-10 text-[#e8a845]" />
            </div>
          </div>
          <h3 className="font-serif text-3xl text-white mb-2">Payment Initiated!</h3>
          <p className="text-[#888] font-mono text-sm mb-6">
            Redirecting to {selectedPayment} gateway...
          </p>
          <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 mb-6 text-left">
            <div className="flex justify-between items-center py-2 border-b border-[#333]">
              <span className="text-[#666] font-mono text-xs">Course</span>
              <span className="text-white font-mono text-sm">{course.title}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[#333]">
              <span className="text-[#666] font-mono text-xs">Amount</span>
              <span className="text-[#e8a845] font-mono font-bold text-lg">₹{course.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-[#666] font-mono text-xs">Via</span>
              <span className="text-[#aaa] font-mono text-xs uppercase">{selectedPayment}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="px-8 py-3 bg-[#e8a845] text-black font-mono font-bold rounded-lg hover:bg-[#d4993d] transition-all hover:shadow-[0_0_20px_rgba(232,164,69,0.3)]"
          >
            Done
          </button>
        </div>
      </ModalWrapper>
    );
  }

  const originalPrice = Math.floor(course.price * 1.5);
  const discount = Math.round(((originalPrice - course.price) / originalPrice) * 100);

  return (
    <ModalWrapper isOpen={isOpen} onClose={handleClose}>
      <div className="p-2">
        {/* Course Card - Premium Look */}
        <div className="relative mb-6 p-5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#333] overflow-hidden">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#e8a845]/5 rounded-bl-full"></div>

          <div className="flex items-start gap-4">
            {/* Course initial badge */}
            <div className="w-14 h-14 rounded-xl bg-[#e8a845]/20 border border-[#e8a845]/30 flex items-center justify-center flex-shrink-0">
              <span className="font-serif text-2xl text-[#e8a845]">{course.title.charAt(0)}</span>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-2xl text-white mb-1">{course.title}</h3>
              <p className="text-[#666] font-mono text-xs line-clamp-2">{course.description}</p>
            </div>
          </div>

          {/* Price tag */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-[#e8a845] font-mono text-3xl font-bold">₹{course.price.toLocaleString()}</span>
              <span className="text-[#555] font-mono text-sm line-through">₹{originalPrice.toLocaleString()}</span>
            </div>
            <span className="px-2 py-1 bg-[#e8a845]/20 text-[#e8a845] font-mono text-xs font-bold rounded">
              {discount}% OFF
            </span>
          </div>
        </div>

        {/* Features - Pill badges */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {(course.features || []).slice(0, 4).map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-[#1a1a1a] border border-[#333] rounded-full font-mono text-xs text-[#aaa] flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-[#e8a845]" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Payment Methods - Visual cards */}
        <div className="mb-5">
          <h4 className="text-[#888] uppercase tracking-wider text-xs font-mono mb-3">Choose Payment</h4>
          <div className="grid grid-cols-2 gap-3">
            {PAYMENT_METHODS.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setSelectedPayment(method.id as PaymentMethod)}
                className={`relative p-4 border rounded-lg transition-all duration-200 text-left group ${
                  selectedPayment === method.id
                    ? 'border-[#e8a845] bg-[#e8a845]/10'
                    : 'border-[#333] bg-[#1a1a1a] hover:border-[#555]'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                  selectedPayment === method.id ? 'bg-[#e8a845]' : 'bg-[#252525] group-hover:bg-[#2a2a2a]'
                }`}>
                  <method.icon className={`w-5 h-5 transition-colors ${
                    selectedPayment === method.id ? 'text-black' : 'text-[#888]'
                  }`} />
                </div>
                <div className={`font-mono font-bold text-sm ${
                  selectedPayment === method.id ? 'text-[#e8a845]' : 'text-white'
                }`}>
                  {method.label}
                </div>
                <div className="font-mono text-xs text-[#555]">{method.desc}</div>

                {/* Selection indicator */}
                <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedPayment === method.id ? 'border-[#e8a845] bg-[#e8a845] scale-100' : 'border-[#444] scale-90 opacity-0'
                }`}>
                  {selectedPayment === method.id && (
                    <Check className="w-3 h-3 text-black" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bank Transfer Details */}
        {selectedPayment === 'bank' && (
          <div className="mb-5 p-4 border border-[#333] bg-[#0a0a0a] rounded-lg">
            <h4 className="text-[#888] uppercase tracking-wider text-xs font-mono mb-3">Bank Details</h4>
            <div className="space-y-2 font-mono text-sm">
              <p><span className="text-[#555]">Account:</span> <span className="text-[#aaa]">{BANK_DETAILS.accountName}</span></p>
              <p><span className="text-[#555]">Number:</span> <span className="text-[#aaa]">{BANK_DETAILS.accountNumber}</span></p>
              <p><span className="text-[#555]">Bank:</span> <span className="text-[#aaa]">{BANK_DETAILS.bankName}</span></p>
              <p><span className="text-[#555]">IFSC:</span> <span className="text-[#aaa]">{BANK_DETAILS.ifscCode}</span></p>
            </div>
          </div>
        )}

        {/* Security badge */}
        <div className="flex items-center justify-center gap-2 mb-5 py-3 bg-[#1a1a1a] rounded-lg border border-[#333]">
          <Shield className="w-4 h-4 text-green-500" />
          <span className="font-mono text-xs text-[#666]">256-bit SSL Secured</span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleClose}
            className="flex-1 py-3 border border-[#333] text-[#888] font-mono font-bold rounded-lg hover:border-[#555] hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handlePurchase}
            disabled={!selectedPayment || isProcessing}
            className={`flex-1 py-3 font-mono font-bold rounded-lg transition-all duration-200 ${
              selectedPayment && !isProcessing
                ? 'bg-[#e8a845] text-black hover:bg-[#d4993d] hover:shadow-[0_0_20px_rgba(232,164,69,0.3)]'
                : 'bg-[#333] text-[#666] cursor-not-allowed'
            }`}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                Processing...
              </span>
            ) : (
              `Pay ₹${course.price.toLocaleString()}`
            )}
          </button>
        </div>

        {/* Contact link */}
        <p className="text-center mt-4 text-[#666] font-mono text-xs">
          Questions?{' '}
          <button
            type="button"
            onClick={() => {
              handleClose();
              onContactClick?.();
            }}
            className="text-[#e8a845] hover:underline"
          >
            Contact us
          </button>
        </p>
      </div>
    </ModalWrapper>
  );
}