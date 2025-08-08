
// // // 'use client';

// // // import { useEffect, useState } from 'react';
// // // import { useSearchParams, useRouter } from 'next/navigation';
// // // import SignupForm from '@/app/components/SignupForm';
// // // import SigninForm from '@/app/components/SigninForm';

// // // export default function AuthPage() {
// // //   const searchParams = useSearchParams();
// // //   const router = useRouter();

// // //   const initialTab = searchParams.get('tab') === 'signup' ? 'signup' : 'signin';
// // //   const [tab, setTab] = useState<'signin' | 'signup'>(initialTab);
// // //   const [checkingAuth, setCheckingAuth] = useState(true); // Wait for auth check

// // //   useEffect(() => {
// // //     const token = localStorage.getItem('token');
// // //     const user = localStorage.getItem('user');

// // //     if (token && user) {
// // //       router.replace('/'); // ✅ Redirect to home
// // //     } else {
// // //       setCheckingAuth(false); // ✅ Only show form if not logged in
// // //     }
// // //   }, [router]);

// // //   useEffect(() => {
// // //     setTab(initialTab);
// // //   }, [initialTab]);

// // //   // Don’t render the page at all while checking auth
// // //   if (checkingAuth) return null;

// // //   return (
// // //     <div className="z-[1] bg-teal-950 absolute w-full left-0 top-0 py-35 h-161 object-cover">
// // //       <div className="max-w-xl mx-auto border rounded shadow relative z-[2] p-6 bg-white">
// // //         {tab === 'signin' ? <SigninForm /> : <SignupForm />}
// // //         <div className="flex justify-between m-8">
// // //           <button
// // //             className={`px-4 py-2 ${tab === 'signin' ? 'bg-blue-600 hover:bg-gray-400 text-white' : 'bg-gray-200'}`}
// // //             onClick={() => {setTab('signin');
// // //             window.location.href = '/auth?tab=signin';
     
// // //             // window.location.reload();
// // //           }}
// // //           >
// // //             Sign In
// // //           </button>
// // //           <button
// // //             className={`px-4 py-2 ${tab === 'signup' ? 'bg-blue-600 hover:bg-blue-800 text-white' : 'bg-gray-200'}`}
// // //             onClick={() => setTab('signup')}
// // //           >
// // //             Sign Up
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// 'use client';

// import { useEffect, useState } from 'react';
// import { useSearchParams, useRouter } from 'next/navigation';
// import SignupForm from '@/app/components/SignupForm';
// import SigninForm from '@/app/components/SigninForm';

// export default function AuthPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const initialTab = searchParams.get('tab') === 'signup' ? 'signup' : 'signin';
//   const [tab, setTab] = useState<'signin' | 'signup'>(initialTab);
//   const [checkingAuth, setCheckingAuth] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const user = localStorage.getItem('user');

//     if (token && user) {
//       router.replace('/');
//     } else {
//       setCheckingAuth(false);
//     }
//   }, [router]);

//   useEffect(() => {
//     setTab(initialTab);
//   }, [initialTab]);

//   if (checkingAuth) return null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 flex justify-center">
//       <div className="w-full  max-w-lg my-34 p-12 rounded-xl shadow-2xl bg-white bg-opacity-95 relative z-10">

//         {tab === 'signin' ? <SigninForm /> : <SignupForm />}

//         <div className="flex justify-between mt-8">
//           <button
//             className={`w-[48%] py-2 rounded-lg transition-all font-semibold ${
//               tab === 'signin'
//                 ? 'bg-emerald-800 text-white shadow-md hover:bg-emerald-900'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//             onClick={() => {
//               setTab('signin');
//               window.location.href = '/auth?tab=signin';
//             }}
//           >
//             Sign In
//           </button>

//           <button
//             className={`w-[48%] py-2 rounded-lg transition-all font-semibold ${
//               tab === 'signup'
//                 ? 'bg-emerald-800 text-white shadow-md hover:bg-emerald-900'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//             onClick={() => {
//               setTab('signup');
//               router.push('/auth?tab=signup');
//             }}
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>

//       {/* Green blur background decoration */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] bg-emerald-500 opacity-20 rounded-full blur-3xl" />
//         <div className="absolute bottom-[-20%] right-[-20%] w-[400px] h-[400px] bg-teal-400 opacity-20 rounded-full blur-3xl" />
//       </div>
//     </div>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SignupForm from '@/app/components/SignupForm';
import SigninForm from '@/app/components/SigninForm';

export default function AuthPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialTab = searchParams.get('tab') === 'signup' ? 'signup' : 'signin';
  const [tab, setTab] = useState<'signin' | 'signup'>(initialTab);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      router.replace('/');
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  if (checkingAuth) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center  px-4">
      <div className="w-full max-w-lg p-10 rounded-xl shadow-xl bg-white bg-opacity-95 relative">
        {tab === 'signin' ? <SigninForm /> : <SignupForm />}

        <div className="flex justify-between mt-8">
          <button
            className={`w-[48%] py-2 rounded-lg transition-all font-semibold ${
              tab === 'signin'
                ? 'bg-emerald-800 text-white shadow-md hover:bg-emerald-900'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => {
              setTab('signin');
              router.push('/auth?tab=signin');
            }}
          >
            Sign In
          </button>

          <button
            className={`w-[48%] py-2 rounded-lg transition-all font-semibold ${
              tab === 'signup'
                ? 'bg-emerald-800 text-white shadow-md hover:bg-emerald-900'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => {
              setTab('signup');
              router.push('/auth?tab=signup');
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
