
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuoteModal } from '../components/ModalContext';
import { useSettings } from '../components/SettingsContext';

const Services: React.FC = () => {
  const { category } = useParams();
  const { openQuoteModal } = useQuoteModal();
  const { settings } = useSettings();

  return (
    <div className="bg-white">
      <div className="bg-[#0a1e3d] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Our Services</h1>
          <p className="text-xl text-blue-200 font-bold">The most comprehensive cleaning solutions in British Columbia.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
        {settings.services.map((s, idx) => (
          <div key={s.id} id={s.id} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-50 rounded-[2.5rem] -z-10 rotate-1"></div>
                <div className="overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-100">
                  <img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-auto object-contain block transition-transform duration-500 hover:scale-105" 
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Award Winning Quality</div>
              <h2 className="text-4xl font-black text-[#0a1e3d] mb-6 tracking-tight">{s.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">{s.description}</p>
              <ul className="grid grid-cols-1 gap-6 mb-10">
                {s.features.map(f => (
                  <li key={f} className="flex items-start gap-4 text-gray-700 text-sm leading-relaxed">
                    <div className="mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={openQuoteModal}
                className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-xl shadow-red-200 active:scale-95"
              >
                Book This Service
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* FAQ Mini Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0a1e3d] uppercase tracking-tight">Service FAQ</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          <div className="grid gap-6">
            {[
              { q: "How long does it take to dry?", a: "Typical carpets take 4-8 hours to dry completely depending on humidity and airflow. We use professional air movers on-site to jumpstart the process." },
              { q: "Do you move furniture?", a: "We move light furniture like chairs, sofas, and side tables. Large items like beds, heavy dressers, or electronics stay in place for safety." },
              { q: "Are your products safe?", a: "Yes, our cleaning solutions are eco-friendly, non-toxic, and specifically formulated to be safe for children and pets." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:shadow-md transition-shadow">
                <h4 className="font-black text-lg text-[#0a1e3d] mb-3 flex items-start gap-3">
                  <span className="text-red-600">Q:</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 font-medium leading-relaxed pl-8 border-l-2 border-gray-100 group-hover:border-blue-200 transition-colors">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
