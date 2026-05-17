import { useState, useCallback } from 'react';

interface ModalState {
  isOpen: boolean;
  isSuccess: boolean;
  isSubmitting: boolean;
}

interface UseModalReturn extends ModalState {
  open: () => void;
  close: () => void;
  reset: () => void;
  setSubmitting: (value: boolean) => void;
  setSuccess: (value: boolean) => void;
}

export function useModalState(initialOpen = false): UseModalReturn {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    setIsSuccess(false);
    setIsSubmitting(false);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setIsSuccess(false);
    setIsSubmitting(false);
  }, []);

  const reset = useCallback(() => {
    setIsSuccess(false);
    setIsSubmitting(false);
  }, []);

  return { isOpen, isSuccess, isSubmitting, open, close, reset, setSubmitting: setIsSubmitting, setSuccess: setIsSuccess };
}

export function useFormReset(onReset?: () => void) {
  const reset = useCallback(() => {
    onReset?.();
  }, [onReset]);

  return { reset };
}