
import React from 'react';
import QuoteForm from './QuoteForm.tsx';
import { useQuoteModal } from './ModalContext.tsx';

const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal } = useQuoteModal();

  if (!isQuoteModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0a1e3d]/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={closeQuoteModal}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-300 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={closeQuoteModal}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-blue-900 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a1e3d] mb-4 tracking-tight leading-tight">
              We Look Forward to Working with You!
            </h2>
            <div className="bg-blue-50 py-4 px-6 rounded-2xl border border-blue-100">
              <p className="text-lg text-blue-900 font-bold">
                Get a free instant quote, call us at <a href="tel:2505754634" className="text-red-600 underline">250-575-4634</a>
              </p>
            </div>
          </div>

          <QuoteForm />
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
