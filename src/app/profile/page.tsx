// // app/profile/page.tsx
// 'use client';

// import { useEffect, useState } from 'react';

// type User = {
//   id: number;
//   username: string;
//   email: string;
// };

// export default function ProfilePage() {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const userData = localStorage.getItem('user');
//     if (userData) {
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   if (!user) {
//     return (
//     <div className="z-[1] bg-teal-950 absolute w-full left-0 top-0 py-35 h-161 object-cover justify-items-center">
//         <h2 className="text-4xl font-bold text-white">You are not logged in</h2>
//         <p className="text-white text-xl mt-2">Please sign in to view your profile.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="z-[1] bg-teal-950 absolute w-full left-0 top-0 py-35 h-161 object-cover justify-items-center">
//       <h1 className="text-3xl font-bold  text-gray-300 mb-6">Welcome, {user.username}!</h1>
//       <div className="text-xl border-0 shadow-2xl bg-emerald-50 w-md  p-15">
//         <p className="mb-3 text-green-600"><strong>Username:</strong> {user.username}</p>
//         <p className="mb-3  text-green-600"><strong>Email:</strong> {user.email}</p>
//       </div>
//     </div>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type User = {
  id: number;
  username: string;
  email: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
        <h2 className="text-4xl font-bold mb-4">You are not logged in</h2>
        <p className="text-lg">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 max-w-md w-full text-white space-y-6">
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src="/images/home/profile.jpg"
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full border-4 border-green-500"
          />
        </div>

        {/* Username */}
        <div>
          <h1 className="text-2xl font-bold text-center">{user.username}</h1>
          <p className="text-sm text-center text-gray-400">ID: {user.id}</p>
        </div>

        {/* User Details */}
        <div className="space-y-4">
          <div>
            <p className="text-gray-400">Email</p>
            <p className="text-lg">{user.email}</p>
          </div>
          <div>
            <p className="text-gray-400">Phone Number</p>
            <p className="text-lg">+91 98765 43210</p> {/* Dummy */}
          </div>
          
        </div>
      </div>
    </div>
  );
}
