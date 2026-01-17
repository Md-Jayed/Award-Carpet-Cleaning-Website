
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import About from './pages/About.tsx';
import Pricing from './pages/Pricing.tsx';
import Contact from './pages/Contact.tsx';
import Admin from './pages/Admin.tsx';
import { ModalProvider } from './components/ModalContext.tsx';
import { SettingsProvider } from './components/SettingsContext.tsx';
import QuoteModal from './components/QuoteModal.tsx';

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <ModalProvider>
        <HashRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:category" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>
            <Footer />
            
            <QuoteModal />

            {/* Persistent Sticky CTA for Mobile */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40 flex items-center justify-between gap-4">
              <a href="tel:2505907044" className="flex-1 bg-blue-700 text-white py-3 rounded-lg text-center font-bold flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                Call Now
              </a>
              <button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-quote-modal'));
                }}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg text-center font-bold"
              >
                Free Quote
              </button>
            </div>
          </div>
        </HashRouter>
      </ModalProvider>
    </SettingsProvider>
  );
};

export default App;
