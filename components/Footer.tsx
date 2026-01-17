
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-6 group">
              <img 
                src="https://awardcarpetcleaning.ca/wp-content/uploads/2024/01/logo-933x1024.png" 
                alt="Award Carpet Cleaning" 
                className="h-12 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tighter leading-none">AWARD</span>
                <span className="text-[8px] font-bold text-red-500 uppercase tracking-widest leading-none mt-1">Carpet Cleaning</span>
              </div>
            </Link>
            <p className="text-gray-400 mt-6 leading-relaxed">
              Family-owned and operated since 2004, providing the highest quality industrial steam cleaning services for your home and office.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black mb-8 text-white uppercase tracking-[0.2em] border-l-2 border-red-600 pl-4">Our Services</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Residential Carpet</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Commercial Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Upholstery Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Tile & Grout</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Area Rug Specialists</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black mb-8 text-white uppercase tracking-[0.2em] border-l-2 border-red-600 pl-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Serving BC Communities</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:2505907044" className="hover:text-white transition-colors">250-590-7044</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:info@awardcarpetcleaning.ca" className="hover:text-white transition-colors">info@awardcarpetcleaning.ca</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-sm font-black mb-8 text-white uppercase tracking-[0.2em] border-l-2 border-red-600 pl-4">Our Hours</h4>
            <div className="space-y-2 text-gray-400 text-sm font-medium">
              <div className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white">8:00 AM - 6:00 PM</span></div>
              <div className="flex justify-between"><span>Saturday:</span> <span className="text-white">9:00 AM - 4:00 PM</span></div>
              <div className="flex justify-between"><span>Sunday:</span> <span className="text-red-500">Closed</span></div>
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all hover:-translate-y-1">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.778 6.98 6.978 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.688.072-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.359-2.618-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Award Carpet Cleaning. Professional Steam Cleaning Solutions.</p>
          <Link to="/admin" className="hover:text-blue-400 transition-colors flex items-center gap-1 opacity-40 hover:opacity-100">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            Admin Panel
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
