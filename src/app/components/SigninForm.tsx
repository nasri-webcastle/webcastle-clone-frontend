// // // // // // components/SigninForm.tsx
// // // // // "use client";
// // // // // import { useState } from "react";
// // // // // import axios from "axios";
// // // // // import { signinUser } from "@/utils/auth/signin";
// // // // // import { Eye, EyeOff } from "lucide-react"; // Optional: install lucide-react or use another icon lib

// // // // // export default function SigninForm() {
// // // // //   const [form, setForm] = useState({ identifier: "", password: "" });
// // // // //   const [error, setError] = useState("");
// // // // //   const [showPassword, setShowPassword] = useState(false);

// // // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //   setForm({ ...form, [e.target.name]: e.target.value });
// // // // // };
// // // // // ;

// // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // //   e.preventDefault();
// // // // //   try {
// // // // //     const res = await signinUser(form);
// // // // //     const jwt = res.data.jwt;
// // // // //     localStorage.setItem("token", jwt);
// // // // //     localStorage.setItem("user", JSON.stringify(res.data.user));
// // // // //     alert("Login successful!");
// // // // //     window.location.href = '/';
// // // // //   } catch (err: unknown) {
// // // // //     if (axios.isAxiosError(err)) {
// // // // //       // Axios-specific error handling
// // // // //       const errorMessage =
// // // // //         err.response?.data?.error?.message || "Login failed.";
// // // // //       setError(errorMessage);
// // // // //       console.error("Login error:", errorMessage);
// // // // //     } else {
// // // // //       // Non-Axios error
// // // // //       setError("An unexpected error occurred.");
// // // // //       console.error("Unknown error:", err);
// // // // //     }
// // // // //   }
// // // // // };
// // // // //  const togglePasswordVisibility = () => {
// // // // //     setShowPassword((prev) => !prev);
// // // // //   };

// // // // //   return (
// // // // //     <div  className=" flex items-center justify-center " >
// // // // //       <form onSubmit={handleSubmit} className="space-y-4 justify-center p-4  md:p-8 py-10 max-w-md bg-white bg-opacity-90 shadow-lg rounded-lg ">
// // // // //         <h2 className="text-2xl font-semibold text-center text-gray-800">Sign In</h2>
// // // // //         <input name="identifier" placeholder="Email or Username" onChange={handleChange} className="border border-gray-300 p-3 w-full rounded" />
// // // // //         <div className="relative">
// // // // //           <input
// // // // //             name="password"
// // // // //             type={showPassword ? "text" : "password"}
// // // // //             placeholder="Password"
// // // // //             onChange={handleChange}
// // // // //             className="border border-gray-300 p-3 w-full rounded pr-10"
// // // // //           />
// // // // //           <div
// // // // //             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
// // // // //             onClick={togglePasswordVisibility}
// // // // //           >
// // // // //             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // // // //           </div>
// // // // //         </div>
// // // // //         <button type="submit" className="bg-green-600 text-white px-4 w-full py-3 font-medium rounded">Sign In</button>
// // // // //         {error && <p className="text-red-500">{error}</p>}
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";
// // // // import { useState } from "react";
// // // // import axios from "axios";
// // // // import { signinUser } from "@/utils/auth/signin";
// // // // import { Eye, EyeOff } from "lucide-react";

// // // // export default function SigninForm() {
// // // //   const [form, setForm] = useState({ identifier: "", password: "" });
// // // //   const [error, setError] = useState("");
// // // //   const [showPassword, setShowPassword] = useState(false);

// // // //   const [showForgot, setShowForgot] = useState(false);
// // // //   const [otp, setOtp] = useState("");
// // // //   const [generatedOtp, setGeneratedOtp] = useState("");
// // // //   const [otpVerified, setOtpVerified] = useState(false);

// // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // //   };

// // // //   const togglePasswordVisibility = () => {
// // // //     setShowPassword((prev) => !prev);
// // // //   };

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const res = await signinUser(form);
// // // //       const jwt = res.data.jwt;
// // // //       localStorage.setItem("token", jwt);
// // // //       localStorage.setItem("user", JSON.stringify(res.data.user));
// // // //       alert("Login successful!");
// // // //       window.location.href = '/';
// // // //     } catch (err: unknown) {
// // // //       if (axios.isAxiosError(err)) {
// // // //         const errorMessage = err.response?.data?.error?.message || "Login failed.";
// // // //         setError(errorMessage);
// // // //         console.error("Login error:", errorMessage);
// // // //       } else {
// // // //         setError("An unexpected error occurred.");
// // // //         console.error("Unknown error:", err);
// // // //       }
// // // //     }
// // // //   };

// // // //   // Simulate OTP generation (normally from backend)
// // // //   const handleGenerateOtp = () => {
// // // //     if (!form.identifier) {
// // // //       setError("Please enter your email or username.");
// // // //       return;
// // // //     }

// // // //     // Simulated OTP
// // // //     const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
// // // //     setGeneratedOtp(newOtp);
// // // //     alert(`Your OTP is: ${newOtp}`); // In real apps, NEVER show OTP in alert
// // // //     setError("");
// // // //   };

// // // //   const handleVerifyOtp = () => {
// // // //     if (otp === generatedOtp) {
// // // //       setOtpVerified(true);
// // // //       setError("");
// // // //       alert("OTP verified! You can now reset your password.");
// // // //     } else {
// // // //       setError("Invalid OTP. Please try again.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex items-center justify-center">
// // // //       <form onSubmit={handleSubmit} className="space-y-4 justify-center p-4 md:p-8 py-10 max-w-md bg-white bg-opacity-90 shadow-lg rounded-lg">
// // // //         <h2 className="text-2xl font-semibold text-center text-gray-800">
// // // //           {showForgot ? "Forgot Password" : "Sign In"}
// // // //         </h2>

// // // //         <input
// // // //           name="identifier"
// // // //           placeholder="Email or Username"
// // // //           onChange={handleChange}
// // // //           className="border border-gray-300 p-3 w-full rounded"
// // // //         />

// // // //         {!showForgot && (
// // // //           <>
// // // //             <div className="relative">
// // // //               <input
// // // //                 name="password"
// // // //                 type={showPassword ? "text" : "password"}
// // // //                 placeholder="Password"
// // // //                 onChange={handleChange}
// // // //                 className="border border-gray-300 p-3 w-full rounded pr-10"
// // // //               />
// // // //               <div
// // // //                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
// // // //                 onClick={togglePasswordVisibility}
// // // //               >
// // // //                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // // //               </div>
// // // //             </div>
// // // //             <button
// // // //               type="submit"
// // // //               className="bg-green-600 text-white px-4 w-full py-3 font-medium rounded"
// // // //             >
// // // //               Sign In
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {showForgot && (
// // // //           <>
// // // //             <button
// // // //               type="button"
// // // //               onClick={handleGenerateOtp}
// // // //               className="bg-blue-600 text-white px-4 w-full py-3 font-medium rounded"
// // // //             >
// // // //               Generate OTP
// // // //             </button>

// // // //             {generatedOtp && !otpVerified && (
// // // //               <>
// // // //                 <input
// // // //                   placeholder="Enter OTP"
// // // //                   value={otp}
// // // //                   onChange={(e) => setOtp(e.target.value)}
// // // //                   className="border border-gray-300 p-3 w-full rounded"
// // // //                 />
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={handleVerifyOtp}
// // // //                   className="bg-yellow-500 text-white px-4 w-full py-3 font-medium rounded"
// // // //                 >
// // // //                   Verify OTP
// // // //                 </button>
// // // //               </>
// // // //             )}

// // // //             {otpVerified && (
// // // //               <>
// // // //                 <input
// // // //                   name="password"
// // // //                   type="text"
// // // //                   placeholder="New Password"
// // // //                   onChange={handleChange}
// // // //                   className="border border-gray-300 p-3 w-full rounded"
// // // //                 />
// // // //                 {/* <button
// // // //                   type="button"
// // // //                   onClick={async () => {
// // // //                     try {
// // // //                       await axios.post("http://localhost:1337/api/otp-auth/reset-password", {
// // // //                         identifier: form.identifier,
// // // //                         otp: generatedOtp,
// // // //                         newPassword: form.password,
// // // //                       });
// // // //                       alert("Password reset Successfully"); // show server response
// // // //                       // Reset states
// // // //                       setShowForgot(false);
// // // //                       setOtpVerified(false);
// // // //                       setOtp("");
// // // //                       setGeneratedOtp("");
// // // //                     } catch (err: unknown) {
// // // //                         if (axios.isAxiosError(err)) {
// // // //                           setError(err.response?.data?.error?.message || "Failed to reset password.");
// // // //                         } else {
// // // //                           setError("An unexpected error occurred.");
// // // //                         }
// // // //                       }
// // // //                   }}
// // // //                   className="bg-green-600 text-white px-4 w-full py-3 font-medium rounded"
// // // //                 >
// // // //                   Reset Password
// // // //                 </button> */}
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={async () => {
// // // //                     try {
// // // //                       await axios.post("http://localhost:1337/api/otp-auth/reset-password", {
// // // //                         identifier: form.identifier,
// // // //                         otp: generatedOtp,
// // // //                         newPassword: form.password,
// // // //                       });

// // // //                       alert("Password reset successfully!");
// // // //                       // Reset states
// // // //                       setShowForgot(false);
// // // //                       setOtpVerified(false);
// // // //                       setOtp("");
// // // //                       setGeneratedOtp("");
// // // //                     } catch (err: unknown) {
// // // //                       if (axios.isAxiosError(err)) {
// // // //                         console.error("❌ Axios error:", err);

// // // //                         // Log everything from the response
// // // //                         console.log("Status:", err.response?.status);
// // // //                         console.log("Data:", err.response?.data);

// // // //                         // Extract readable error
// // // //                         const backendError = err.response?.data?.error;
// // // //                         const detailedMessage =
// // // //                           backendError?.message ||
// // // //                           backendError?.details?.errors?.[0]?.message ||
// // // //                           "Failed to reset password.";

// // // //                         setError(detailedMessage);
// // // //                       } else {
// // // //                         console.error("❌ Unknown error:", err);
// // // //                         setError("An unexpected error occurred.");
// // // //                       }
// // // //                     }
// // // //                   }}
// // // //                   className="bg-green-600 text-white px-4 w-full py-3 font-medium rounded"
// // // //                 >
// // // //                   Reset Password
// // // //                 </button>

// // // //               </>
// // // //             )}
// // // //           </>
// // // //         )}

// // // //         <p className="text-sm text-blue-600 cursor-pointer underline" onClick={() => setShowForgot((prev) => !prev)}>
// // // //           {showForgot ? "Back to Sign In" : "Forgot Password?"}
// // // //         </p>

// // // //         {error && <p className="text-red-500">{error}</p>}
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }
// // // 'use client';

// // // import { useState } from 'react';
// // // import axios from 'axios';

// // // export default function ForgotPasswordForm() {
// // //   const [step, setStep] = useState<'identifier' | 'otp' | 'success'>('identifier');
// // //   const [form, setForm] = useState({
// // //     identifier: '',
// // //     otp: '',
// // //     password: '',
// // //     confirmPassword: '',
// // //   });
// // //   const [serverOtp, setServerOtp] = useState('');
// // //   const [error, setError] = useState('');
// // //   const [message, setMessage] = useState('');

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const sendOtp = async () => {
// // //     try {
// // //       const res = await axios.post('http://localhost:1338/api/otp-auth/generate-otp', {
// // //         identifier: form.identifier,
// // //       });
// // //       setMessage('OTP sent successfully!');
// // //       setServerOtp(res.data.otp); // ⚠️ Only during development
// // //       setStep('otp');
// // //      } catch (err: unknown) {
// // //       console.error("❌ Error sending OTP:", err);

// // //       if (axios.isAxiosError(err)) {
// // //         setError(
// // //           err.response?.data?.error?.message ||
// // //           err.response?.data?.message ||
// // //           "Failed to send OTP."
// // //         );
// // //       } else {
// // //         setError("An unexpected error occurred.");
// // //       }
// // //     }
// // //   };

// // //   const resetPassword = async () => {
// // //     if (form.password !== form.confirmPassword) {
// // //       setError('Passwords do not match');
// // //       return;
// // //     }

// // //     try {
// // //       await axios.post('http://localhost:1338/api/otp-auth/reset-password', {
// // //         identifier: form.identifier,
// // //         otp: form.otp,
// // //         newPassword: form.password,
// // //       });
// // //       setMessage('Password reset successful!');
// // //       setStep('success');
// // //       } catch (err: unknown) {
// // //   console.error("❌ Error resting password:", err);

// // //   if (axios.isAxiosError(err)) {
// // //     setError(
// // //       err.response?.data?.error?.message ||
// // //       err.response?.data?.message ||
// // //       "Failed to rest password."
// // //     );
// // //   } else {
// // //     setError("An unexpected error occurred.");
// // //   }
// // // }
// // //   };

// // //   return (
// // //     <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
// // //       <h2 className="text-xl font-bold mb-4">Forgot Password</h2>

// // //       {error && <p className="text-red-500 mb-2">{error}</p>}
// // //       {message && <p className="text-green-600 mb-2">{message}</p>}

// // //       {step === 'identifier' && (
// // //         <>
// // //           <input
// // //             type="text"
// // //             name="identifier"
// // //             placeholder="Email or Username"
// // //             value={form.identifier}
// // //             onChange={handleChange}
// // //             className="w-full mb-3 px-4 py-2 border rounded"
// // //           />
// // //           <button
// // //             onClick={sendOtp}
// // //             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// // //           >
// // //             Send OTP
// // //           </button>
// // //         </>
// // //       )}

// // //       {step === 'otp' && (
// // //         <>
// // //           <input
// // //             type="text"
// // //             name="otp"
// // //             placeholder="Enter OTP"
// // //             value={form.otp}
// // //             onChange={handleChange}
// // //             className="w-full mb-3 px-4 py-2 border rounded"
// // //           />
// // //           <input
// // //             type="password"
// // //             name="password"
// // //             placeholder="New Password"
// // //             value={form.password}
// // //             onChange={handleChange}
// // //             className="w-full mb-3 px-4 py-2 border rounded"
// // //           />
// // //           <input
// // //             type="password"
// // //             name="confirmPassword"
// // //             placeholder="Confirm Password"
// // //             value={form.confirmPassword}
// // //             onChange={handleChange}
// // //             className="w-full mb-3 px-4 py-2 border rounded"
// // //           />
// // //           <button
// // //             onClick={resetPassword}
// // //             className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
// // //           >
// // //             Reset Password
// // //           </button>
// // //         </>
// // //       )}

// // //       {step === 'success' && (
// // //         <div className="text-center text-green-700 font-semibold">
// // //           ✅ Your password has been reset. You can now sign in.
// // //         </div>
// // //       )}

// // //       {/* Show OTP during dev for testing only */}
// // //       {serverOtp && step === 'otp' && (
// // //         <p className="text-xs text-gray-400 mt-2">Testing OTP: {serverOtp}</p>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // 'use client';

// // import { useState } from 'react';
// // import { Eye, EyeOff } from 'lucide-react';
// // import axios from 'axios';

// // export default function AuthForm() {
// //   const [tab, setTab] = useState<'signin' | 'forgot'>('signin');

// //   // Signin State
// //   const [signinForm, setSigninForm] = useState({ identifier: '', password: '' });
// //   const [showPassword, setShowPassword] = useState(false);

// //   // Forgot Password State
// //   const [step, setStep] = useState<'identifier' | 'otp' | 'success'>('identifier');
// //   const [forgotForm, setForgotForm] = useState({
// //     identifier: '',
// //     otp: '',
// //     password: '',
// //     confirmPassword: '',
// //   });
// //   const [serverOtp, setServerOtp] = useState('');

// //   // Shared
// //   const [error, setError] = useState('');
// //   const [message, setMessage] = useState('');

// //   const togglePasswordVisibility = () => setShowPassword(prev => !prev);

// //   const handleSigninChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setSigninForm({ ...signinForm, [e.target.name]: e.target.value });
// //   };

// //   const handleForgotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setForgotForm({ ...forgotForm, [e.target.name]: e.target.value });
// //   };

// //   const handleSignin = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setError('');
// //     try {
// //       const res = await axios.post('http://localhost:1338/api/auth/local', signinForm);
// //       const { jwt, user } = res.data;
// //       localStorage.setItem('token', jwt);
// //       localStorage.setItem('user', JSON.stringify(user));
// //       window.location.href = '/';
// //     } catch (err: unknown) {
// //       if (axios.isAxiosError(err)) {
// //         setError(err.response?.data?.error?.message || 'Login failed.');
// //       } else {
// //         setError('An unexpected error occurred.');
// //       }
// //     }
// //   };

// //   const sendOtp = async () => {
// //     setError('');
// //     try {
// //       const res = await axios.post('http://localhost:1338/api/otp-auth/generate-otp', {
// //         identifier: forgotForm.identifier,
// //       });
// //       setServerOtp(res.data.otp); // Dev only
// //       setMessage('OTP sent successfully!');
// //       setStep('otp');
// //     } catch (err: unknown) {
// //       if (axios.isAxiosError(err)) {
// //         setError(err.response?.data?.error?.message || 'Failed to send OTP.');
// //       } else {
// //         setError('An unexpected error occurred.');
// //       }
// //     }
// //   };

// //   const resetPassword = async () => {
// //     if (forgotForm.password !== forgotForm.confirmPassword) {
// //       setError('Passwords do not match');
// //       return;
// //     }

// //     try {
// //       await axios.post('http://localhost:1338/api/otp-auth/reset-password', {
// //         identifier: forgotForm.identifier,
// //         otp: forgotForm.otp,
// //         newPassword: forgotForm.password,
// //       });
// //       setMessage('Password reset successful!');
// //       setStep('success');
// //     } catch (err: unknown) {
// //       if (axios.isAxiosError(err)) {
// //         setError(err.response?.data?.error?.message || 'Failed to reset password.');
// //       } else {
// //         setError('An unexpected error occurred.');
// //       }
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
// //       <div className="flex justify-between mb-6">
// //           <h2 className="text-2xl font-semibold text-center text-gray-800">Sign In</h2>

// //         <button
// //           onClick={() => { setTab('signin'); setError(''); setMessage(''); }}
// //           className={`w-1/2 py-2 font-medium ${tab === 'signin' ? 'border-b-2 border-blue-600' : 'text-gray-500'}`}
// //         >
// //           Sign In
// //         </button>
// //         <button
// //           onClick={() => { setTab('forgot'); setError(''); setMessage(''); setStep('identifier'); }}
// //           className={`w-1/2 py-2 font-medium ${tab === 'forgot' ? 'border-b-2 border-blue-600' : 'text-gray-500'}`}
// //         >
// //           Forgot Password
// //         </button>
// //       </div>

// //       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
// //       {message && <p className="text-green-600 text-sm mb-2">{message}</p>}

// //       {/* Sign In Form */}
// //       {tab === 'signin' && (
// //         <form onSubmit={handleSignin} className="space-y-4">
// //           <input
// //             type="text"
// //             name="identifier"
// //             placeholder="Email or Username"
// //             value={signinForm.identifier}
// //             onChange={handleSigninChange}
// //             className="w-full px-4 py-2 border rounded"
// //           />

// //           <div className="relative">
// //             <input
// //               type={showPassword ? 'text' : 'password'}
// //               name="password"
// //               placeholder="Password"
// //               value={signinForm.password}
// //               onChange={handleSigninChange}
// //               className="w-full px-4 py-2 border rounded pr-10"
// //             />
// //             <div
// //               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
// //               onClick={togglePasswordVisibility}
// //             >
// //               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// //             </div>
// //           </div>

// //           <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
// //             Sign In
// //           </button>
// //         </form>
// //       )}

// //       {/* Forgot Password Form */}
// //       {tab === 'forgot' && (
// //         <div className="space-y-4">
// //           {step === 'identifier' && (
// //             <>
// //               <input
// //                 type="text"
// //                 name="identifier"
// //                 placeholder="Email or Username"
// //                 value={forgotForm.identifier}
// //                 onChange={handleForgotChange}
// //                 className="w-full px-4 py-2 border rounded"
// //               />
// //               <button
// //                 onClick={sendOtp}
// //                 className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// //               >
// //                 Send OTP
// //               </button>
// //             </>
// //           )}

// //           {step === 'otp' && (
// //             <>
// //               <input
// //                 type="text"
// //                 name="otp"
// //                 placeholder="Enter OTP"
// //                 value={forgotForm.otp}
// //                 onChange={handleForgotChange}
// //                 className="w-full px-4 py-2 border rounded"
// //               />
// //               <input
// //                 type="password"
// //                 name="password"
// //                 placeholder="New Password"
// //                 value={forgotForm.password}
// //                 onChange={handleForgotChange}
// //                 className="w-full px-4 py-2 border rounded"
// //               />
// //               <input
// //                 type="password"
// //                 name="confirmPassword"
// //                 placeholder="Confirm Password"
// //                 value={forgotForm.confirmPassword}
// //                 onChange={handleForgotChange}
// //                 className="w-full px-4 py-2 border rounded"
// //               />
// //               <button
// //                 onClick={resetPassword}
// //                 className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
// //               >
// //                 Reset Password
// //               </button>

// //               {serverOtp && (
// //                 <p className="text-xs text-gray-400 mt-2">Dev OTP: {serverOtp}</p>
// //               )}
// //             </>
// //           )}

// //           {step === 'success' && (
// //             <div className="text-center text-green-700 font-semibold">
// //               ✅ Password reset successful. You can now sign in.
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import axios from "axios";

// export default function AuthForm() {
//   const [tab, setTab] = useState<"signin" | "forgot">("signin");

//   const [signinForm, setSigninForm] = useState({
//     identifier: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const [step, setStep] = useState<"identifier" | "otp" | "success">(
//     "identifier"
//   );
//   const [forgotForm, setForgotForm] = useState({
//     identifier: "",
//     otp: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [serverOtp, setServerOtp] = useState("");

//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

//   const handleSigninChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSigninForm({ ...signinForm, [e.target.name]: e.target.value });
//   };

//   const handleForgotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForgotForm({ ...forgotForm, [e.target.name]: e.target.value });
//   };

//   const handleSignin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const res = await axios.post(
//         "http://localhost:1338/api/auth/local",
//         signinForm
//       );
//       const { jwt, user } = res.data;
//       localStorage.setItem("token", jwt);
//       localStorage.setItem("user", JSON.stringify(user));
//       alert("Login successful!");
//       window.location.href = "/";
//     } catch (err: unknown) {
//       if (axios.isAxiosError(err)) {
//         setError(err.response?.data?.error?.message || "Login failed.");
//       } else {
//         setError("An unexpected error occurred.");
//       }
//     }
//   };

//   const sendOtp = async () => {
//     setError("");
//     try {
//       const res = await axios.post(
//         "http://localhost:1338/api/otp-auth/generate-otp",
//         {
//           identifier: forgotForm.identifier,
//         }
//       );
//       setServerOtp(res.data.otp); // Dev only
//       alert("OTP sent successfully!");
//       setStep("otp");
//     } catch (err: unknown) {
//       if (axios.isAxiosError(err)) {
//         setError(err.response?.data?.error?.message || "Failed to send OTP.");
//       } else {
//         setError("An unexpected error occurred.");
//       }
//     }
//   };

//   const resetPassword = async () => {
//     if (forgotForm.password !== forgotForm.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:1338/api/otp-auth/reset-password", {
//         identifier: forgotForm.identifier,
//         otp: forgotForm.otp,
//         newPassword: forgotForm.password,
//       });
//       setMessage("Password reset successful!");
//       setStep("success");
//     } catch (err: unknown) {
//       if (axios.isAxiosError(err)) {
//         setError(
//           err.response?.data?.error?.message || "Failed to reset password."
//         );
//       } else {
//         setError("An unexpected error occurred.");
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
//       <h2 className="text-2xl font-semibold text-center text-gray-800 mt-2 mb-6">
//         {tab === "signin" ? "Sign In" : "Forgot Password"}
//       </h2>

//       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//       {message && <p className="text-green-600 text-sm mb-2">{message}</p>}

//       {tab === "signin" && (
//         <form onSubmit={handleSignin} className="space-y-4 py-2">
//           <input
//             type="text"
//             name="identifier"
//             placeholder="Email or Username"
//             value={signinForm.identifier}
//             onChange={handleSigninChange}
//   className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//           />

//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={signinForm.password}
//               onChange={handleSigninChange}
//               className="border border-gray-300 p-3 w-full rounded"
//             />
//             <div
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </div>
//           </div>

//           {/* Forgot Password Link */}
//           <div className="text-right text-sm">
//             <button
//               type="button"
//               onClick={() => {
//                 setTab("forgot");
//                 setStep("identifier");
//                 setError("");
//                 setMessage("");
//                 setForgotForm((prev) => ({
//                   ...prev,
//                   identifier: signinForm.identifier, // Auto-fill identifier
//                 }));
//               }}
//               className="text-blue-600 hover:underline"
//             >
//               Forgot Password?
//             </button>
//           </div>

//           <button
//             type="submit"
//             className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded w-full font-medium"
//           >
//             Sign In
//           </button>
//         </form>
//       )}

//       {tab === "forgot" && (
//         <div className="space-y-4">
//           {step === "identifier" && (
//             <>
//               <input
//                 type="text"
//                 name="identifier"
//                 placeholder="Email or Username"
//                 value={forgotForm.identifier}
//                 onChange={handleForgotChange}
//                 className="border border-gray-300 p-3 w-full rounded "
//               />
//               <button
//                 onClick={sendOtp}
//                 className="bg-blue-600 text-white px-4 py-3 rounded w-full font-medium hover:bg-blue-700  mt-3 mb-4"
//               >
//                 Send OTP
//               </button>
//             </>
//           )}

//           {step === "otp" && (
//             <>
//               <input
//                 type="text"
//                 name="otp"
//                 placeholder="Enter OTP"
//                 value={forgotForm.otp}
//                 onChange={handleForgotChange}
//                 className="border border-gray-300 p-3 w-full rounded"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="New Password"
//                 value={forgotForm.password}
//                 onChange={handleForgotChange}
//                 className="border border-gray-300 p-3 w-full rounded"
//               />
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   value={forgotForm.confirmPassword}
//                   onChange={handleForgotChange}
//                   className="border border-gray-300 p-3 w-full rounded"
//                 />
//                 <div
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
//                 onClick={togglePasswordVisibility}
//                 >
//                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </div>
//              </div>
//               <button
//                 onClick={resetPassword}
//                 className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//               >
//                 Reset Password
//               </button>

//               {serverOtp && (
//                 <p className="text-xs text-gray-400 mt-2">
//                   Dev OTP: {serverOtp}
//                 </p>
//               )}
//             </>
//           )}

//           {step === "success" && (
//             <div className="text-center text-green-700 font-semibold">
//               ✅ Password reset successful. You can now sign in.
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
'use client';

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import Image from "next/image";


export default function AuthForm() {
  const [tab, setTab] = useState<"signin" | "forgot">("signin");

  const [signinForm, setSigninForm] = useState({
    identifier: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [step, setStep] = useState<"identifier" | "otp" | "success">("identifier");
  const [forgotForm, setForgotForm] = useState({
    identifier: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [serverOtp, setServerOtp] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSigninChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSigninForm({ ...signinForm, [e.target.name]: e.target.value });
  };

  const handleForgotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForgotForm({ ...forgotForm, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:1338/api/auth/local", signinForm);
      const { jwt, user } = res.data;
      localStorage.setItem("token", jwt);
      localStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");
      window.location.href = "/";
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error?.message || "Login failed.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const sendOtp = async () => {
    setError("");
    try {
      const res = await axios.post("http://localhost:1338/api/otp-auth/generate-otp", {
        identifier: forgotForm.identifier,
      });
      setServerOtp(res.data.otp); // Dev only
      alert("OTP sent successfully!");
      setStep("otp");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error?.message || "Failed to send OTP.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const resetPassword = async () => {
    if (forgotForm.password !== forgotForm.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:1338/api/otp-auth/reset-password", {
        identifier: forgotForm.identifier,
        otp: forgotForm.otp,
        newPassword: forgotForm.password,
      });
      setMessage("Password reset successful!");
      setStep("success");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error?.message || "Failed to reset password.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (

    <div className="max-w-md mx-auto bg-white bg-opacity-90 shadow-2xl rounded-xl px-8 py-10 backdrop-blur-md">
      <div className="flex items-center justify-center mb-6">
        
        <h2 className="text-3xl font-bold text-green-900 text-center">
          {tab === "signin" ? "Hello, Web Castle" : "Forgot Password"}
        </h2>
        <Image
          src="/images/home/download.png" // <-- Replace with your actual logo path in public/
          alt="Logo"
          width={60}
          height={50}
          className="rounded-full"
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {message && <p className="text-green-600 text-sm mb-4">{message}</p>}

      {tab === "signin" && (
        <form onSubmit={handleSignin} className="space-y-5">
          <input
            type="text"
            name="identifier"
            placeholder="Email or Username"
            value={signinForm.identifier}
            onChange={handleSigninChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={signinForm.password}
              onChange={handleSigninChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <div className="text-right text-sm">
            <button
              type="button"
              onClick={() => {
                setTab("forgot");
                setStep("identifier");
                setError("");
                setMessage("");
                setForgotForm((prev) => ({
                  ...prev,
                  identifier: signinForm.identifier,
                }));
              }}
              className="text-emerald-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md font-medium transition duration-200"
          >
            Sign In
          </button>
        </form>
      )}

      {tab === "forgot" && (
        <div className="space-y-5">
          {step === "identifier" && (
            <>
              <input
                type="text"
                name="identifier"
                placeholder="Email or Username"
                value={forgotForm.identifier}
                onChange={handleForgotChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <button
                onClick={sendOtp}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium"
              >
                Send OTP
              </button>
            </>
          )}

          {step === "otp" && (
            <>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={forgotForm.otp}
                onChange={handleForgotChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <input
                type="password"
                name="password"
                placeholder="New Password"
                value={forgotForm.password}
                onChange={handleForgotChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={forgotForm.confirmPassword}
                  onChange={handleForgotChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>

              <button
                onClick={resetPassword}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md font-medium"
              >
                Reset Password
              </button>

              {serverOtp && (
                <p className="text-xs text-gray-400 mt-2">
                  Dev OTP: {serverOtp}
                </p>
              )}
            </>
          )}

          {step === "success" && (
            <div className="text-center text-green-700 font-semibold">
              ✅ Password reset successful. You can now sign in.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
