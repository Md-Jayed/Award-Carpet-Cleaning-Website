
import React, { useState } from 'react';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Carpet Cleaning',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'Carpet Cleaning', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {status === 'success' ? (
        <div className="text-center py-12 animate-in fade-in zoom-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
          <p className="text-gray-600">We'll get back to you within 2 business hours.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-8 text-blue-600 font-bold hover:underline"
          >
            Send another request
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-black text-blue-900 mb-6 uppercase">Get Your Free Quote</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="(250) 000-0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Service Required</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option>Carpet Cleaning</option>
                <option>Upholstery Cleaning</option>
                <option>Tile & Grout</option>
                <option>Area Rugs</option>
                <option>Pet Stain Removal</option>
                <option>Commercial Cleaning</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Additional Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Number of rooms, type of stains, etc."
              />
            </div>
            <button
              disabled={status === 'submitting'}
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-lg uppercase tracking-widest shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-50"
            >
              {status === 'submitting' ? 'Processing...' : 'Submit Quote Request'}
            </button>
            <p className="text-[10px] text-gray-400 text-center uppercase tracking-tighter">
              By submitting, you agree to our privacy policy. Your data is secure.
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default QuoteForm;
