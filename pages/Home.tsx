
import React, { useRef } from 'react';
import QuoteForm from '../components/QuoteForm';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '../components/ModalContext';
import { useSettings } from '../components/SettingsContext';

const Home: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { openQuoteModal } = useQuoteModal();
  const { settings } = useSettings();

  const testimonials = [
    {
      name: "Craig",
      location: "Peachland, BC",
      text: "10/10 carpet cleaning. We had a fantastic experience. The carpet cleaner was on time, friendly, and did an amazing job.",
      rating: 5
    },
    {
      name: "Derek",
      location: "Kelowna, BC",
      text: "Very impressed with Award Carpet Cleaning! Very professional from booking to finishing the service. They were right on time, careful and thorough – and the results are amazing! We are a 2 pet household and the carpets really needed some love. After Award Carpet Cleaning was finished, you'd think we had new carpet installed!",
      rating: 5
    },
    {
      name: "Amy",
      location: "West Kelowna, BC",
      text: "Highly recommend – best carpet cleaning company in the Okanagan!! He arrived on time, was very personable and more importantly, did a very thorough job. Very happy customer and will definitely use them again:) Thank you so much!!!",
      rating: 5
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#0a1e3d] overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=2000" 
            alt="Professional Steam Carpet Cleaning Service" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3d] via-[#0a1e3d]/70 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 text-white">
              <div className="inline-flex items-center bg-red-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Professional Cleaning Specialists
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter whitespace-pre-line">
                {settings.hero.title}
              </h1>
              
              <p className="text-lg md:text-xl mb-12 text-blue-100/90 leading-relaxed font-medium max-w-2xl">
                {settings.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                <button 
                  onClick={openQuoteModal}
                  className="group bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-lg text-lg font-black text-center shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  FREE QUOTE
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7"/></svg>
                </button>

                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <a href="tel:2505907044" className="flex items-center gap-3 text-white hover:text-blue-300 transition-colors">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <span className="font-bold">250-590-7044</span>
                  </a>
                  <a href="mailto:info@awardcarpetcleaning.ca" className="flex items-center gap-3 text-white hover:text-blue-300 transition-colors">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <span className="font-bold">info@awardcarpetcleaning.ca</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block">
               <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Slider Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a1e3d] tracking-tight inline-block relative">
              Services
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-900"></div>
            </h2>
          </div>
          
          <div className="relative group">
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 bg-white p-4 rounded-full shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-gray-50"
            >
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 bg-white p-4 rounded-full shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-gray-50"
            >
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar"
            >
              {settings.services.map((service, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start"
                >
                  <div className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col h-full relative group/card hover:shadow-2xl transition-all duration-300">
                    <div className="flex justify-center mb-10">
                      <div className="w-32 h-32 flex items-center justify-center p-4">
                        <img 
                          src="https://awardcarpetcleaning.ca/wp-content/uploads/2024/01/logo-933x1024.png" 
                          alt="Award Icon" 
                          className="w-full h-full object-contain group-hover/card:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-black text-[#0a1e3d] text-center mb-8 leading-tight min-h-[3.5rem] flex items-center justify-center">
                      {service.title}
                    </h3>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <Link 
                        to={`/services`} 
                        className="text-sm font-bold text-gray-900 flex items-center gap-1 hover:text-blue-600 transition-colors"
                      >
                        Read More 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                      </Link>
                      
                      <button 
                        onClick={openQuoteModal}
                        className="w-10 h-10 bg-[#f0f7ff] rounded-full flex items-center justify-center group-hover/card:bg-blue-600 transition-colors"
                      >
                        <svg className="w-4 h-4 text-blue-500 group-hover/card:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </section>

      {/* New Requested Pricing Section Style */}
      <section className="py-24 bg-[#f8fafc] overflow-hidden relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 tracking-tighter uppercase">PRICING</h2>
            <div className="w-24 h-1.5 bg-blue-900 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-500 font-bold uppercase tracking-widest">Transparent Rates with No Surprises</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {settings.pricing.map((plan, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center group transition-all hover:-translate-y-2">
                <div className="w-28 h-28 mb-10 flex items-center justify-center">
                  <img 
                    src="https://awardcarpetcleaning.ca/wp-content/uploads/2024/01/logo-933x1024.png" 
                    alt="Award Trophy" 
                    className="w-full h-full object-contain filter group-hover:brightness-110"
                  />
                </div>
                
                <h3 className="text-3xl font-black text-[#0a1e3d] uppercase tracking-tight mb-4">{plan.category}</h3>
                <div className="w-16 h-1 bg-gray-200 mb-10"></div>
                
                <div className="w-full space-y-6 flex-grow mb-12">
                  {plan.items.slice(0, 5).map(item => (
                    <div key={item.label} className="flex justify-between items-center gap-4 text-sm">
                      <span className="text-gray-500 font-bold text-left">{item.label}</span>
                      <span className="text-[#0a1e3d] font-black text-right whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/pricing" 
                  className="mt-auto inline-flex items-center gap-2 bg-[#0a1e3d] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-800 transition-colors shadow-xl active:scale-95"
                >
                  View All Rates
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg text-blue-900 font-black uppercase tracking-widest bg-white/50 inline-block px-8 py-4 rounded-full border border-gray-200 shadow-sm">
               Minimum $120 callout applies to all services
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#f8fbff] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="bubbles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                 <circle cx="20" cy="20" r="15" fill="#e0f2fe" />
                 <circle cx="70" cy="80" r="10" fill="#bae6fd" />
                 <circle cx="90" cy="30" r="12" fill="#f0f9ff" />
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#bubbles)" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-black text-blue-700 uppercase tracking-[0.2em]">Client Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0a1e3d] tracking-tighter">
                Some kind words from our happy clients.
              </h2>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center">
               <div className="flex items-center gap-1 mb-2">
                 <span className="text-xl font-black text-gray-800">100+</span>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-5" />
               </div>
               <div className="flex gap-1 mb-1">
                 {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-lg">★</span>)}
               </div>
               <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Five Star Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-50 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-[#f97316] text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-gray-600 font-medium leading-relaxed italic mb-8 flex-grow">
                  "{t.text}"
                </p>
                
                <div className="mt-4">
                  <h4 className="text-xl font-black text-[#0a1e3d]">{t.name}</h4>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Value Prop */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1000" 
                alt="Truck Mounted System" 
                className="rounded-[2rem] shadow-2xl relative z-10 border-8 border-white"
              />
              <div className="absolute -bottom-6 left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">✅</div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Authorized</p>
                  <p className="font-bold text-blue-900">Shaw & Mohawk Approved</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-4">Why Choose Us</h2>
              <h3 className="text-4xl font-black text-blue-900 mb-8 tracking-tighter leading-tight">Professional Steam Cleaning <br/>At Its Very Best.</h3>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Award Carpet Cleaning uses the high-powered **Truck Mount Steam Cleaning** method—the #1 recommendation by major carpet manufacturers. Unlike portable machines, our systems provide deeper cleaning and faster drying times.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Industry Excellence", desc: "Local, family-owned business focused on quality." },
                  { title: "Industrial Truck-Mounts", desc: "Highest heat and vacuum for superior soil removal." },
                  { title: "Eco-Safe Solutions", desc: "Non-toxic, biodegradable products safe for kids & pets." },
                  { title: "Certified Technicians", desc: "Fully trained, insured, and WCB covered." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center text-white text-[10px]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <h4 className="font-black text-blue-900 text-sm uppercase tracking-wide">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0a1e3d] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-blue-900 mb-2 uppercase tracking-tight">Ready to restore?</h3>
              <p className="text-gray-500 font-medium">Book your cleaning service today and feel the Award difference.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button 
                onClick={openQuoteModal}
                className="bg-red-600 text-white px-10 py-5 rounded-xl font-black text-center hover:bg-red-700 transition-all shadow-xl"
              >
                GET STARTED NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
