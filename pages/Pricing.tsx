
import React from 'react';
import { useQuoteModal } from '../components/ModalContext';
import { useSettings } from '../components/SettingsContext';

const Pricing: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const { settings } = useSettings();

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="text-2xl">✨</span>
             <span className="text-sm font-black text-blue-600 uppercase tracking-[0.3em]">Pricing Plan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0a1e3d] mb-6 tracking-tighter">
            Check out our budget friendly pricing with no hidden costs
          </h1>
          <p className="inline-block px-8 py-3 bg-red-600 text-white rounded-full text-xl font-bold shadow-xl shadow-red-200">
            (Minimum $120 callout)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {settings.pricing.map((section, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100 flex flex-col h-full transform transition-all hover:-translate-y-1 group">
              <div className="text-center mb-10">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src="https://awardcarpetcleaning.ca/wp-content/uploads/2024/01/logo-933x1024.png" 
                    alt="Award Carpet Cleaning Icon" 
                    className="w-full h-full object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <h2 className="text-3xl font-black text-blue-900 tracking-tight">{section.category}</h2>
                <div className="w-16 h-1 bg-gray-200 mx-auto mt-4"></div>
              </div>
              
              <div className="space-y-6 flex-grow">
                {section.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600 font-medium text-sm hover:text-blue-900 transition-colors">{item.label}</span>
                    <span className="text-blue-900 font-black text-sm whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <button 
                  onClick={openQuoteModal}
                  className="block w-full text-center py-5 bg-blue-900 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-red-600 transition-all shadow-lg active:scale-95"
                >
                  Book {section.category}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-blue-900 rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                 <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Looking for a custom quote?</h3>
                 <p className="text-blue-200 text-lg leading-relaxed">
                   For larger projects, commercial spaces, or special stain treatments, our technicians provide on-site evaluations for the most accurate pricing.
                 </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                 <button 
                   onClick={openQuoteModal}
                   className="flex-1 text-center bg-red-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-red-700 transition-all"
                 >
                   Online Form
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
