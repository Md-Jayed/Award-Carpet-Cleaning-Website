
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isQuoteModalOpen: boolean;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <ModalContext.Provider value={{ isQuoteModalOpen, openQuoteModal, closeQuoteModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useQuoteModal must be used within a ModalProvider');
  }
  return context;
};
