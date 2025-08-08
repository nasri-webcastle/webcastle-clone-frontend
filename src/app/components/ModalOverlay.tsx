// // src/app/components/ModalOverlay.tsx
// 'use client';

// import { useSearchParams, useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import AuthPage from '@/app/auth/page';

// export default function ModalOverlay() {
//   const searchParams = useSearchParams();
//   const authTab = searchParams.get('auth'); // 'signin' or 'signup'
//   const [show, setShow] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     if (authTab === 'signin' || authTab === 'signup') {
//       setShow(true);
//     } else {
//       setShow(false);
//     }
//   }, [authTab]);

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/30 px-4">
//       <div className="w-full max-w-lg p-10 rounded-xl shadow-xl bg-white bg-opacity-95 relative">
//         <AuthPage />

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={() => router.push('/?auth=signin')}
//             className={`w-[48%] py-2 rounded-lg font-semibold ${
//               authTab === 'signin'
//                 ? 'bg-emerald-800 text-white shadow-md hover:bg-emerald-900'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           >
//             Sign In
//           </button>
//           <button
//             onClick={() => router.push('/?auth=signup')}
//             className={`w-[48%] py-2 rounded-lg font-semibold ${
//               authTab === 'signup'
//                 ? 'bg-emerald-800 text-white shadow-md hover:bg-emerald-900'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// src/app/components/ModalOverlay.tsx
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';

export default function ModalOverlay() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const authTab = searchParams.get('auth'); // 'signin' or 'signup'
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(authTab === 'signin' || authTab === 'signup');
  }, [authTab]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center  bg-black/30 px-4">
      <div className="w-full max-w-lg p-10 rounded-xl shadow-xl bg-white bg-opacity-95 relative">
        {authTab === 'signin' ? <SigninForm /> : <SignupForm />}

        <div className="flex justify-between mt-8">
          <button
            className={`w-[48%] py-2 rounded-lg transition-all font-semibold ${
              authTab === 'signin'
                ? 'bg-emerald-800 text-white shadow-md hover:bg-emerald-900'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => router.push('/?auth=signin')}
          >
            Sign In
          </button>

          <button
            className={`w-[48%] py-2 rounded-lg transition-all font-semibold ${
              authTab === 'signup'
                ? 'bg-emerald-800 text-white shadow-md hover:bg-emerald-900'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => router.push('/?auth=signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => router.push('/')}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
}
