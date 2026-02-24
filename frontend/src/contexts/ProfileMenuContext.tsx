import { createContext, useContext, useState, ReactNode } from 'react';

interface ProfileMenuContextType {
  isProfileMenuOpen: boolean;
  setIsProfileMenuOpen: (open: boolean) => void;
  toggleProfileMenu: () => void;
}

const ProfileMenuContext = createContext<ProfileMenuContextType | undefined>(undefined);

export function ProfileMenuProvider({ children }: { children: ReactNode }) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  return (
    <ProfileMenuContext.Provider
      value={{
        isProfileMenuOpen,
        setIsProfileMenuOpen,
        toggleProfileMenu,
      }}
    >
      {children}
    </ProfileMenuContext.Provider>
  );
}

export function useProfileMenu() {
  const context = useContext(ProfileMenuContext);
  if (!context) {
    throw new Error('useProfileMenu must be used within ProfileMenuProvider');
  }
  return context;
}
