import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LocationContextType {
  address: string;
  setAddress: (address: string) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string>(() => {
    // Load from localStorage on init
    const saved = localStorage.getItem('deliveryAddress');
    return saved || 'Select delivery location';
  });

  useEffect(() => {
    // Persist to localStorage whenever address changes
    localStorage.setItem('deliveryAddress', address);
  }, [address]);

  return (
    <LocationContext.Provider value={{ address, setAddress }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
