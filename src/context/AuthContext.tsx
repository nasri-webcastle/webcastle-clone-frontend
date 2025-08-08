// // 'use client';

// // import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// // type User = {
// //   id: number;
// //   username: string;
// //   email: string;
// // };

// // type AuthContextType = {
// //   user: User | null;
// //   isLoggedIn: boolean;
// //   login: (token: string, user: User) => void;
// //   logout: () => void;
// // };

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // export function AuthProvider({ children }: { children: ReactNode }) {
// //   const [user, setUser] = useState<User | null>(null);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   useEffect(() => {
// //     const storedToken = localStorage.getItem('token');
// //     const storedUser = localStorage.getItem('user');

// //     if (storedToken && storedUser) {
// //       setUser(JSON.parse(storedUser));
// //       setIsLoggedIn(true);
// //     }

// //     const handleStorageChange = () => {
// //       const token = localStorage.getItem('token');
// //       const userData = localStorage.getItem('user');
// //       if (token && userData) {
// //         setUser(JSON.parse(userData));
// //         setIsLoggedIn(true);
// //       } else {
// //         setUser(null);
// //         setIsLoggedIn(false);
// //       }
// //     };

// //     window.addEventListener('storage', handleStorageChange);
// //     return () => window.removeEventListener('storage', handleStorageChange);
// //   }, []);

// //   const login = (token: string, user: User) => {
// //     localStorage.setItem('token', token);
// //     localStorage.setItem('user', JSON.stringify(user));
// //     setUser(user);
// //     setIsLoggedIn(true);
// //   };

// //   const logout = () => {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     setIsLoggedIn(false);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // }

// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (context === undefined) {
// //     throw new Error('useAuth must be used within an AuthProvider');
// //   }
// //   return context;
// // };
// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// interface User {
//   id: number;
//   username: string;
//   email: string;
// }

// interface AuthContextType {
//   user: User | null;
//   isLoggedIn: boolean;
//   login: (identifier: string, password: string) => Promise<void>;
//   signup: (username: string, email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const login = async (identifier: string, password: string) => {
//     const res = await axios.post('http://localhost:1337/api/auth/local', {
//       identifier,
//       password,
//     });

//     const userData = res.data.user;
//     localStorage.setItem('user', JSON.stringify(userData));
//     setUser(userData);
//     setIsLoggedIn(true);
//     router.push('/');
//   };

//   const signup = async (username: string, email: string, password: string) => {
//     const res = await axios.post('http://localhost:1337/api/auth/local/register', {
//       username,
//       email,
//       password,
//     });

//     const userData = res.data.user;
//     localStorage.setItem('user', JSON.stringify(userData));
//     setUser(userData);
//     setIsLoggedIn(true);
//     router.push('/');
//   };

//   const logout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     setIsLoggedIn(false);
//     router.push('/');
//   };

//   return (
//     <AuthContext.Provider value={{ user, isLoggedIn, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth must be used within AuthProvider');
//   return context;
// };
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
