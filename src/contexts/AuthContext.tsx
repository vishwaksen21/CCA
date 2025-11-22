'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AuthUser, getCurrentSession } from '@/lib/mock-auth';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAdmin: false,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check for existing session on mount
    const session = getCurrentSession();
    setUser(session);
    setIsAdmin(session !== null);
    setLoading(false);

    // Listen for storage events to sync across tabs
    const handleStorageChange = () => {
      const updatedSession = getCurrentSession();
      setUser(updatedSession);
      setIsAdmin(updatedSession !== null);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for same-tab updates
    const handleSessionChange = () => {
      const updatedSession = getCurrentSession();
      setUser(updatedSession);
      setIsAdmin(updatedSession !== null);
    };

    window.addEventListener('session-change', handleSessionChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('session-change', handleSessionChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
