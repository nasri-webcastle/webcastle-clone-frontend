// components/SigninForm.tsx
"use client";
import { useState } from "react";
import axios from "axios";
import { signinUser } from "@/utils/auth/signin";
import { useRouter } from 'next/navigation';

export default function SigninForm() {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
;

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await signinUser(form);
    const jwt = res.data.jwt;
    localStorage.setItem("token", jwt);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    alert("Login successful!");
    router.push('/');
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      // Axios-specific error handling
      const errorMessage =
        err.response?.data?.error?.message || "Login failed.";
      setError(errorMessage);
      console.error("Login error:", errorMessage);
    } else {
      // Non-Axios error
      setError("An unexpected error occurred.");
      console.error("Unknown error:", err);
    }
  }
};


  return (
    <div  className=" flex items-center justify-center " >        
    <form onSubmit={handleSubmit} className="space-y-4 justify-center p-4  md:p-8 py-10 max-w-md bg-white bg-opacity-90 shadow-lg rounded-lg ">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Sign In</h2>
      <input name="identifier" placeholder="Email or Username" onChange={handleChange} className="border border-gray-300 p-3 w-full rounded" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border border-gray-300 p-3 w-full rounded" />
      <button type="submit" className="bg-green-600 text-white px-4 w-full py-3 font-medium rounded">Sign In</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
    </div>
  );
}
