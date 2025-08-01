'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SignupForm from '@/app/components/SignupForm';
import SigninForm from '@/app/components/SigninForm';

export default function AuthPage() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'signup' ? 'signup' : 'signin';
  const [tab, setTab] = useState<'signin' | 'signup'>(initialTab);

  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  return (
    <div  className="z-[1] bg-teal-950 absolute w-full left-0 top-0 py-35 h-161 object-cover "  > 
    <div className="max-w-xl  mx-auto   border rounded shadow relative z-[2] p-6 bg-white">     
      {tab === 'signin' ? <SigninForm /> : <SignupForm />}
      <div className="flex justify-between m-8">
        <button
          className={`px-4 py-2 ${tab === 'signin' ? 'bg-blue-600 hover:bg-gray-400 text-white' : 'bg-gray-200'}`}
          onClick={() => setTab('signin')}
        >
          Sign In
        </button>
        <button
          className={`px-4 py-2 ${tab === 'signup' ? 'bg-blue-600  hover:bg-blue-800 text-white' : 'bg-gray-200'}`}
          onClick={() => setTab('signup')}
        >
          Sign Up
        </button>
      </div>
    </div>
    </div>
  );
}
