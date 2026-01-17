
import React from 'react';
import { useQuoteModal } from '../components/ModalContext';

const About: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const okanaganAreas = [
    "Vernon Carpet Cleaning",
    "Lake Country Carpet Cleaning",
    "Kelowna Carpet Cleaning",
    "West Kelowna Carpet Cleaning",
    "Peachland Carpet Cleaning",
    "Summerland Carpet Cleaning",
    "Penticton Carpet Cleaning",
    "Oliver Carpet Cleaning",
    "Osoyoos Carpet Cleaning",
    "Merritt Carpet Cleaning"
  ];

  const metroVancouverAreas = [
    "Vancouver Carpet Cleaning",
    "Burnaby Carpet Cleaning",
    "Surrey Carpet Cleaning",
    "Delta Carpet Cleaning",
    "Richmond Carpet Cleaning",
    "New Westminster Carpet Cleaning",
    "Coquitlam Carpet Cleaning",
    "Port Coquitlam Carpet Cleaning",
    "Port Moody Carpet Cleaning",
    "Pitt Meadows Carpet Cleaning",
    "Maple Ridge Carpet Cleaning"
  ];

  return (
    <div className="bg-[#f3f4f6] min-h-screen pb-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12 text-center">
        <div className="w-24 h-24 mx-auto mb-8 bg-white p-4 rounded-3xl shadow-xl border border-blue-50">
          <img 
            src="https://awardcarpetcleaning.ca/wp-content/uploads/2024/01/logo-933x1024.png" 
            alt="Award Carpet Cleaning" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#0a1e3d] mb-6 tracking-tighter uppercase">
          About Award Carpet Cleaning
        </h1>
        <p className="text-xl text-blue-600 font-bold mb-8 italic">
          Award Carpet Cleaning takes great pride in our meticulous attention to detail on every job.
        </p>
        <div className="max-w-4xl mx-auto space-y-4 text-gray-600 text-lg leading-relaxed font-medium">
          <p>
            Our experienced technicians handle the job with care and professionalism. We are licensed, bonded and fully insured.
          </p>
          <p className="font-black text-blue-900 uppercase tracking-widest text-sm pt-4 border-t border-gray-200">
            Proudly Serving These Communities:
          </p>
        </div>
      </div>

      {/* Service Areas Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Okanagan Column */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h2 className="text-xl font-black text-blue-900 mb-8 border-l-4 border-red-600 pl-4 uppercase tracking-[0.2em]">
              Okanagan
            </h2>
            <ul className="space-y-4">
              {okanaganAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600 font-bold text-sm hover:text-blue-900 transition-colors">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Metro Vancouver Column */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h2 className="text-xl font-black text-blue-900 mb-8 border-l-4 border-blue-700 pl-4 uppercase tracking-[0.2em]">
              Metro Vancouver
            </h2>
            <ul className="space-y-4">
              {metroVancouverAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600 font-bold text-sm hover:text-blue-900 transition-colors">
                  <div className="w-1.5 h-1.5 bg-blue-700 rounded-full"></div>
                  {area}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Trust Badge / Footer CTA Area */}
      <div className="max-w-4xl mx-auto mt-24 text-center px-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-12 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <img src="https://awardcarpetcleaning.ca/wp-content/uploads/2024/01/logo-933x1024.png" className="w-32 h-auto" />
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-blue-900 font-black text-2xl mb-4 uppercase tracking-tight">Professional Results, Every Time.</p>
              <p className="text-gray-500 font-bold mb-8">Call us today for a site evaluation in any of our service regions across British Columbia.</p>
              <button 
                onClick={openQuoteModal}
                className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-xl shadow-red-200 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
