
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQuoteModal } from './ModalContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openQuoteModal } = useQuoteModal();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar - Contact Info */}
      <div className="bg-[#0a1e3d] text-white py-2 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <span className="text-blue-400">VICTORIA:</span> 250-590-7044
            </span>
            <span className="flex items-center gap-2">
              <span className="text-blue-400">OKANAGAN:</span> 250-590-7044
            </span>
          </div>
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              AWARD WINNING SERVICE
            </span>
            <span className="text-gray-400">LICENSED • BONDED • INSURED</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-4 group">
              <img 
                src="https://awardcarpetcleaning.ca/wp-content/uploads/2024/01/logo-933x1024.png" 
                alt="Award Carpet Cleaning Logo" 
                className="h-16 w-auto transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#0a1e3d] tracking-tighter leading-none">AWARD</span>
                <span className="text-[9px] font-black text-red-600 uppercase tracking-[0.3em] leading-none mt-1">Carpet Cleaning</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  isActive(link.path) ? 'text-blue-700 font-black' : 'text-gray-600 font-bold'
                } hover:text-blue-800 px-1 py-2 text-xs uppercase tracking-widest transition-all duration-200 relative group`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transition-transform origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
            <button
              onClick={openQuoteModal}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
            >
              FREE QUOTE
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-900 focus:outline-none p-3 rounded-xl bg-gray-50"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-xl font-black text-[#0a1e3d] hover:bg-blue-50 rounded-2xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 border-t border-gray-100 flex flex-col gap-4 px-6">
               <button 
                 onClick={() => {
                   setIsOpen(false);
                   openQuoteModal();
                 }}
                 className="block w-full text-center bg-red-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs"
               >
                 Free Quote
               </button>
               <a href="tel:2505907044" className="block text-center bg-[#0a1e3d] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs">Call Us Now</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
