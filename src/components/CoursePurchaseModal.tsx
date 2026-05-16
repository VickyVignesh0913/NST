import { useState } from 'react';
import { X, Check } from 'lucide-react';
import ModalWrapper from './ModalWrapper';

interface Course {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  image?: string;
}

interface CoursePurchaseModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = 'razorpay' | 'paypal' | 'stripe' | 'bank';

const PAYMENT_METHODS = [
  { id: 'razorpay', label: 'Razorpay', icon: '₹' },
  { id: 'paypal', label: 'PayPal', icon: 'PP' },
  { id: 'stripe', label: 'Stripe', icon: 'S' },
  { id: 'bank', label: 'Bank Transfer', icon: '🏦' },
];

const BANK_DETAILS = {
  accountName: 'English Boss',
  accountNumber: '1234567890',
  bankName: 'HDFC Bank',
  ifscCode: 'HDFC0001234',
};

export default function CoursePurchaseModal({ course, isOpen, onClose }: CoursePurchaseModalProps) {
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

  return (
    <ModalWrapper isOpen={isOpen} onClose={handleClose} maxWidth="md">
      <div className="p-6">
        {showSuccess ? (
          /* Success State - consistent with other modals */
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-[#e8a445] flex items-center justify-center">
              <Check className="text-[#e8a445]" size={32} />
            </div>
            <h3 className="font-serif text-3xl text-white mb-2">Payment Initiated!</h3>
            <p className="text-[#888] font-mono text-sm mb-6">
              Redirecting to {selectedPayment}...
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 border-2 border-[#e8a445] text-[#e8a445] font-mono text-sm uppercase tracking-wider hover:bg-[#e8a445]/10 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Course Summary */}
            <div className="mb-6 pb-6 border-b-2 border-[#333]">
              <h3 className="font-serif text-3xl text-white mb-2">{course.title}</h3>
              <p className="text-[#888] font-mono text-sm mb-4">{course.description}</p>
              <div className="text-4xl font-mono text-[#e8a445]">
                ₹{course.price.toLocaleString()}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-white uppercase tracking-wider text-xs font-mono mb-3">What's Included</h4>
              <ul className="space-y-2">
                {(course.features || []).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#888] font-mono text-sm">
                    <Check size={16} className="text-[#e8a445]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <h4 className="text-white uppercase tracking-wider text-xs font-mono mb-3">Select Payment Method</h4>
              <div className="grid grid-cols-2 gap-3">
                {PAYMENT_METHODS.map((method) => (
                  <button
                    type="button"
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id as PaymentMethod)}
                    className={`p-4 border-2 font-mono text-sm transition-all ${
                      selectedPayment === method.id
                        ? 'border-[#e8a445] bg-[#e8a445]/10 text-white'
                        : 'border-[#333] text-[#888] hover:border-[#555]'
                    }`}
                  >
                    <span className="block text-lg mb-1">{method.icon}</span>
                    {method.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bank Transfer Details */}
            {selectedPayment === 'bank' && (
              <div className="mb-6 p-4 border-2 border-[#333] bg-[#0a0a0a]">
                <h4 className="text-white uppercase tracking-wider text-xs font-mono mb-3">Bank Details</h4>
                <div className="space-y-2 font-mono text-sm text-[#888]">
                  <p><span className="text-[#666]">Account Name:</span> {BANK_DETAILS.accountName}</p>
                  <p><span className="text-[#666]">Account Number:</span> {BANK_DETAILS.accountNumber}</p>
                  <p><span className="text-[#666]">Bank:</span> {BANK_DETAILS.bankName}</p>
                  <p><span className="text-[#666]">IFSC:</span> {BANK_DETAILS.ifscCode}</p>
                </div>
              </div>
            )}

            {/* Buy Button */}
            <button
              type="button"
              onClick={handlePurchase}
              disabled={!selectedPayment || isProcessing}
              className={`w-full py-4 uppercase tracking-widest font-mono text-sm transition-all ${
                selectedPayment
                  ? 'bg-[#e8a445] text-black hover:bg-[#f0b456] hover:shadow-[0_0_20px_rgba(232,164,69,0.4)]'
                  : 'bg-[#333] text-[#666] cursor-not-allowed'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Buy Now'}
            </button>

            {/* Contact Link - Fixed: added type="button" */}
            <p className="text-center mt-4 text-[#666] font-mono text-sm">
              Have questions?{' '}
              <button type="button" className="text-[#e8a445] hover:underline">Contact us</button>
            </p>
          </>
        )}
      </div>
    </ModalWrapper>
  );
}