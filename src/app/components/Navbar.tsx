'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getNavbarData } from '@/lib/api';

type NavbarLink = {
  id: number;
  label: string;
  url: string;
};

type NavbarData = {
  logo: { url: string };
  links: NavbarLink[];
};

type User = {
  id: number;
  username: string;
  email: string;
};

export default function Navbar() {
  const [navbar, setNavbar] = useState<NavbarData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const data = await getNavbarData();
        setNavbar(data);
      } catch (error) {
        console.error('Failed to load navbar:', error);
      }
    };

    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');

      if (token && userData) {
        setIsLoggedIn(true);
        setUser(JSON.parse(userData));
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    fetchNavbar();
    checkAuth();

    // Listen to any changes across tabs/windows
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    window.location.href = '/'; // forces page reload
  };

  if (!navbar || isLoggedIn === null) {
    return <div className="text-white p-4">Navbar loading...</div>;
  }

  const logoUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${navbar.logo?.url}`;

  return (
    <header className="bg-transparent">
      <nav className="absolute top-0 pl-30 w-full z-30 text-white flex justify-between items-center py-5 bg-transparent">
        <Link href="/" className="inline-block bg-transparent">
          <Image
            src={logoUrl}
            alt="Webcastle Logo"
            width={170}
            height={60}
            priority
          />
        </Link>

        <div className="flex space-x-12 text-sm font-semibold text-white justify-center items-center px-2 py-2 border border-white/20 rounded bg-white/10">
          {navbar.links?.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {isLoggedIn && user ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-full font-semibold">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-white">
                  {user.username}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth?tab=signup"
                className="px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded transition duration-200"
              >
                Sign Up
              </Link>
              <Link
                href="/auth?tab=signin"
                className="px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded transition duration-200"
              >
                Sign In
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-bold w-30 sm:text-base cursor-pointer px-5 py-2 rounded-md border-opacity-20 bg-green-600 text-white hover:bg-green-800 transition">
            Let’s Talk
          </span>
          <div className="w-11 h-11 mr-7 flex flex-col items-center justify-center gap-[5px] rounded-full border border-white/20 cursor-pointer hover:bg-[#239A48] group transition">
            <span className="w-[13px] h-[2px] bg-[#239A48] group-hover:bg-white transition duration-300 translate-x-[2px] group-hover:translate-x-0 rounded-r-full"></span>
            <span className="w-[13px] h-[2px] bg-[#239A48] group-hover:bg-white transition duration-300 -translate-x-[2px] group-hover:translate-x-0 rounded-r-full"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
