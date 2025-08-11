'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type User = {
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User, jwt: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user: User, jwt: string) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', jwt);
    setUser(user);
    router.push('/');
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
