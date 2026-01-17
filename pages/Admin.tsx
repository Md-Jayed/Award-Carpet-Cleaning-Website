
import React, { useState } from 'react';
import { useSettings } from '../components/SettingsContext';

const Admin: React.FC = () => {
  const { settings, updateSettings, resetSettings } = useSettings();
  const [activeTab, setActiveTab] = useState<'hero' | 'services' | 'pricing'>('hero');
  const [localSettings, setLocalSettings] = useState(settings);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const handleSave = () => {
    setSaveStatus('saving');
    updateSettings(localSettings);
    setTimeout(() => setSaveStatus('saved'), 500);
    setTimeout(() => setSaveStatus('idle'), 3000);
  };

  const handleServiceChange = (id: string, field: string, value: any) => {
    const updatedServices = localSettings.services.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    );
    setLocalSettings({ ...localSettings, services: updatedServices });
  };

  const handlePricingItemChange = (catIdx: number, itemIdx: number, field: 'label' | 'price', value: string) => {
    const updatedPricing = [...localSettings.pricing];
    updatedPricing[catIdx].items[itemIdx][field] = value;
    setLocalSettings({ ...localSettings, pricing: updatedPricing });
  };

  const handlePricingCategoryNameChange = (catIdx: number, value: string) => {
    const updatedPricing = [...localSettings.pricing];
    updatedPricing[catIdx].category = value;
    setLocalSettings({ ...localSettings, pricing: updatedPricing });
  };

  const addNewPricingItem = (catIdx: number) => {
    const updatedPricing = [...localSettings.pricing];
    updatedPricing[catIdx].items.push({ label: 'New Service', price: '$0' });
    setLocalSettings({ ...localSettings, pricing: updatedPricing });
  };

  const removePricingItem = (catIdx: number, itemIdx: number) => {
    if (window.confirm('Are you sure you want to delete this pricing item?')) {
      const updatedPricing = [...localSettings.pricing];
      updatedPricing[catIdx].items.splice(itemIdx, 1);
      setLocalSettings({ ...localSettings, pricing: updatedPricing });
    }
  };

  const addNewPricingCategory = () => {
    setLocalSettings({
      ...localSettings,
      pricing: [...localSettings.pricing, { category: 'New Category', items: [{ label: 'New Service', price: '$0' }] }]
    });
  };

  const removePricingCategory = (catIdx: number) => {
    if (window.confirm('Are you sure you want to delete this entire category and all its items?')) {
      const updatedPricing = localSettings.pricing.filter((_, idx) => idx !== catIdx);
      setLocalSettings({ ...localSettings, pricing: updatedPricing });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-[#0a1e3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter">Site Admin Panel</h1>
            <p className="text-blue-300 font-bold text-sm mt-1 uppercase tracking-widest">Control Center</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                if(window.confirm('Reset all changes to default site values?')) {
                  resetSettings();
                  setLocalSettings(settings);
                }
              }}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase transition-colors"
            >
              Reset to Defaults
            </button>
            <button 
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 disabled:opacity-50"
            >
              {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'Saved! ✓' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-4 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-200">
          <button 
            onClick={() => setActiveTab('hero')}
            className={`flex-1 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'hero' ? 'bg-blue-900 text-white' : 'hover:bg-gray-50 text-gray-400'}`}
          >
            Hero Content
          </button>
          <button 
            onClick={() => setActiveTab('services')}
            className={`flex-1 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'services' ? 'bg-blue-900 text-white' : 'hover:bg-gray-50 text-gray-400'}`}
          >
            Services Text
          </button>
          <button 
            onClick={() => setActiveTab('pricing')}
            className={`flex-1 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'pricing' ? 'bg-blue-900 text-white' : 'hover:bg-gray-50 text-gray-400'}`}
          >
            Pricing Rates
          </button>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-200 p-8 md:p-12 overflow-hidden">
          {activeTab === 'hero' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <div>
                <label className="block text-xs font-black text-blue-900 uppercase tracking-widest mb-4">Hero Title</label>
                <textarea 
                  value={localSettings.hero.title}
                  onChange={(e) => setLocalSettings({...localSettings, hero: {...localSettings.hero, title: e.target.value}})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-6 text-xl font-black text-gray-900 focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-xs font-black text-blue-900 uppercase tracking-widest mb-4">Hero Subtitle</label>
                <textarea 
                  value={localSettings.hero.subtitle}
                  onChange={(e) => setLocalSettings({...localSettings, hero: {...localSettings.hero, subtitle: e.target.value}})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-6 text-lg font-medium text-gray-600 focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                  rows={4}
                />
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4">
              {localSettings.services.map((service, idx) => (
                <div key={service.id} className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-sm">{idx + 1}</span>
                    <h3 className="text-xl font-black text-blue-900 uppercase tracking-tight">{service.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Display Title</label>
                        <input 
                          type="text"
                          value={service.title}
                          onChange={(e) => handleServiceChange(service.id, 'title', e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-bold text-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Description</label>
                        <textarea 
                          value={service.description}
                          onChange={(e) => handleServiceChange(service.id, 'description', e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-600"
                          rows={4}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Features (one per line)</label>
                      <textarea 
                        value={service.features.join('\n')}
                        onChange={(e) => handleServiceChange(service.id, 'features', e.target.value.split('\n'))}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 h-full min-h-[150px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-black text-blue-900 uppercase tracking-tight">Manage Pricing</h2>
                <button 
                  onClick={addNewPricingCategory}
                  className="bg-blue-900 text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition-all shadow-md flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
                  Add New Category
                </button>
              </div>

              {localSettings.pricing.map((cat, catIdx) => (
                <div key={catIdx} className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm relative group/cat">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex-grow w-full md:w-auto">
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Category Name</label>
                      <input 
                        type="text"
                        value={cat.category}
                        onChange={(e) => handlePricingCategoryNameChange(catIdx, e.target.value)}
                        className="text-2xl font-black text-blue-900 uppercase tracking-tight bg-gray-50 border border-transparent hover:border-blue-200 rounded-xl px-4 py-2 w-full focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => addNewPricingItem(catIdx)}
                        className="text-xs font-black text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors uppercase tracking-widest flex items-center gap-2"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
                        Add Item
                      </button>
                      <button 
                        onClick={() => removePricingCategory(catIdx)}
                        className="text-xs font-black text-red-600 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors uppercase tracking-widest flex items-center gap-2"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                        Delete Category
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col gap-4 relative group/item hover:border-red-100 transition-all">
                        <div className="flex justify-between items-start">
                          <label className="block text-[8px] font-black text-gray-400 uppercase tracking-widest">Pricing Item #{itemIdx + 1}</label>
                          <button 
                            onClick={() => removePricingItem(catIdx, itemIdx)}
                            className="text-gray-400 hover:text-red-600 transition-colors p-1"
                            title="Delete Item"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                        <div>
                          <label className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Service Label</label>
                          <input 
                            type="text"
                            value={item.label}
                            onChange={(e) => handlePricingItemChange(catIdx, itemIdx, 'label', e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-blue-100 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Rate</label>
                          <input 
                            type="text"
                            value={item.price}
                            onChange={(e) => handlePricingItemChange(catIdx, itemIdx, 'price', e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-black text-red-600 focus:ring-2 focus:ring-red-100 outline-none"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
