
import React, { useState, useRef, useEffect } from 'react';
import { getCleaningAdvice } from '../services/gemini';

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const advice = await getCleaningAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: advice || "I'm sorry, I couldn't process that. Try calling our experts at 250-590-7044." }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 md:bottom-10">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group ring-4 ring-white/20"
        >
          <div className="absolute -top-1 right-0 w-4 h-4 bg-red-600 border-2 border-white rounded-full animate-ping"></div>
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
          <div className="absolute -top-12 right-0 bg-blue-900 text-white text-[10px] font-black px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest border border-blue-800">
            Ask A Cleaning Expert
          </div>
        </button>
      ) : (
        <div className="bg-white w-[350px] sm:w-[420px] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden flex flex-col animate-in zoom-in slide-in-from-bottom-10 duration-300">
          <div className="bg-blue-900 p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-black text-blue-200">A</div>
              <div>
                <h3 className="font-black text-sm uppercase tracking-wider">Cleaning Advisor</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-blue-300 text-[10px] uppercase font-bold tracking-widest">Active Now</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="p-6 h-[400px] overflow-y-auto bg-gray-50/50 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-10 opacity-60">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                </div>
                <p className="text-blue-900 font-bold text-sm">Hi! How can I help you today?</p>
                <p className="text-gray-500 text-xs mt-2 px-8 leading-relaxed italic">"Spilled red wine on my rug, what should I do?"</p>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-blue-900 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-4 border-t border-gray-100 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask our stain expert..."
                className="flex-grow px-5 py-3 text-sm bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-900 transition-all font-medium"
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="bg-blue-900 text-white p-3 rounded-xl disabled:opacity-50 transition-transform active:scale-90 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </button>
            </div>
          </form>
          <div className="bg-gray-50 px-5 py-2 text-[8px] font-black text-gray-400 uppercase tracking-widest text-center border-t border-gray-100">
            For emergencies call 250-590-7044 (Victoria)
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAdvisor;
