
import React from 'react';
import QuoteForm from '../components/QuoteForm';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-24">
      <div className="bg-blue-900 py-20 text-center text-white">
        <h1 className="text-5xl font-black uppercase tracking-tighter">Contact Us</h1>
        <p className="text-xl text-blue-200 mt-4">We're here to help you get started on your cleaning project.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-black text-blue-900 mb-6 uppercase tracking-wider">Direct Contact</h3>
              <div className="space-y-6">
                <a href="tel:2505550199" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call or Text</p>
                    <p className="text-lg font-bold text-gray-900">(250) 555-0199</p>
                  </div>
                </a>
                <a href="mailto:info@awardcarpetcleaning.ca" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-lg font-bold text-gray-900">info@awardcarpetcleaning.ca</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-black text-blue-900 mb-6 uppercase tracking-wider">Service Areas</h3>
              <p className="text-gray-600 mb-6">We provide on-site services to the following regions:</p>
              <ul className="space-y-2 font-bold text-blue-900">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div> Victoria & Saanich
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div> Langford & Colwood
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div> Sidney & Peninsula
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div> Nanaimo & Parksville
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div> Cowichan Valley
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="h-[400px] w-full bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
           <img src="https://picsum.photos/id/164/1200/400" className="w-full h-full object-cover grayscale opacity-50" />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white px-8 py-4 rounded-full shadow-2xl font-black text-blue-900 uppercase tracking-widest">
               Serving All of Vancouver Island
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
