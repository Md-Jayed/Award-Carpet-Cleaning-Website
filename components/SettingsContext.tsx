
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PricingItem {
  label: string;
  price: string;
}

interface PricingCategory {
  category: string;
  items: PricingItem[];
}

interface ServiceContent {
  id: string;
  title: string;
  description: string;
  features: string[];
  img: string;
}

interface SiteSettings {
  hero: {
    title: string;
    subtitle: string;
  };
  services: ServiceContent[];
  pricing: PricingCategory[];
}

const defaultSettings: SiteSettings = {
  hero: {
    title: "AWARD CARPET CLEANING – OKANAGAN’S BEST CARPET CLEANER",
    subtitle: "Experience the deepest clean with our industrial truck-mounted steam systems. Serving your community with award-winning results and eco-friendly solutions."
  },
  services: [
    {
      id: "residential",
      title: "Residential Carpet Cleaning",
      description: "Carpet cleaning is just carpet cleaning, right? Think again. Discover the difference with Award Carpet Cleaning services for superior results.",
      features: [
        "Our advanced carpet cleaning technology, solutions, and methods provide a deeper clean with a difference you can see.",
        "Many carpet cleaning companies focus on the surface with a quick clean that won't remove stubborn dirt and soil, but that's not what you will get with your Award Carpet Cleaning trained technician.",
        "We guarantee our superior carpet cleaning results with a 100%-satisfaction guarantee - the best in the business."
      ],
      img: "https://awardcarpetcleaning.ca/wp-content/uploads/2020/10/Residential-Carpet-Cleaning-Picture.jpg"
    },
    {
      id: "commercial",
      title: "Commercial Carpet Cleaning",
      description: "Professional grade maintenance for high-traffic environments. We work around your schedule to ensure minimal disruption to your business operations.",
      features: ["Office Spaces", "Retail Fronts", "Industrial Carpets", "Encapsulation Cleaning"],
      img: "https://images.unsplash.com/photo-1581578731522-745d4b45a0e7?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "rugs",
      title: "Area Rug Specialists",
      description: "Fine rugs require expert care. We provide specialized cleaning for Wool, Silk, Persian, and synthetic area rugs using pH-balanced solutions.",
      features: ["Fringe Cleaning", "Color Stabilization", "Pet Odor Removal", "Off-site Options"],
      img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "pet",
      title: "Pet Stain and Odour",
      description: "Don't let pet accidents ruin your home. Our specialized enzyme treatments break down organic materials to eliminate stains and smells at the source.",
      features: ["Enzyme Treatments", "Deep Sub-floor Flush", "Sanitization", "Pheromone Neutralization"],
      img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "upholstery",
      title: "Upholstery & Furniture",
      description: "Gentle yet powerful cleaning for your sofas, sectionals, and dining chairs. We identify fabric types to ensure the safest cleaning method.",
      features: ["Microfiber Specialists", "Cotton/Linen Safe", "Leather Cleaning", "Dries in Hours"],
      img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "vehicle",
      title: "Boat Auto RV Cleaning",
      description: "Bring the 'new' feel back to your vehicles. We clean the interior upholstery and carpets of cars, trucks, recreational vehicles, and marine vessels.",
      features: ["Car Interior Steam", "RV Fabric Care", "Marine Grade Cleaning", "Stain Guarding"],
      img: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=800"
    }
  ],
  pricing: [
    {
      category: "Carpet",
      items: [
        { label: "Small room up to 120 sq ft", price: "$40" },
        { label: "Medium room up to 220 sq ft", price: "$50" },
        { label: "Large room up to 400 sq ft", price: "$70" },
        { label: "Hallways up to 40 sq ft", price: "$15" },
        { label: "Landings up to 30 sq ft", price: "$10" },
        { label: "Stairs", price: "$4 per step" },
        { label: "Commercial Carpet", price: "$0.15 – $0.25 sq ft" },
        { label: "Area Rugs", price: "$1.50 – $3 per sq ft" },
      ]
    },
    {
      category: "Upholstery",
      items: [
        { label: "3 seat sofa", price: "$80" },
        { label: "Love seat", price: "$60" },
        { label: "Armchair", price: "$50" },
        { label: "Dining room chairs", price: "$20" },
      ]
    },
    {
      category: "Vehicle Interior",
      items: [
        { label: "Coupes", price: "$100" },
        { label: "Sedans", price: "$150" },
        { label: "SUV/Van", price: "$180" },
        { label: "RV", price: "$200" },
        { label: "Boat", price: "$200" },
      ]
    }
  ]
};

interface SettingsContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: SiteSettings) => void;
  resetSettings: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('award_carpet_settings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const updateSettings = (newSettings: SiteSettings) => {
    setSettings(newSettings);
    localStorage.setItem('award_carpet_settings', JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('award_carpet_settings');
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
