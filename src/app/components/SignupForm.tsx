'use client';

import { useState } from "react";
import axios from "axios";
import { signupUser } from "@/utils/auth/signup";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function SignupForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  // Validation Functions
  const isValidUsername = (username: string) =>
    /^[a-zA-Z0-9_]{4,}$/.test(username);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPassword = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password } = form;

    // Validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }
    if (!isValidUsername(username)) {
      setError("Username must be at least 4 characters and can only contain letters, numbers, and underscores.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!isValidPassword(password)) {
      setError("Password must be at least 6 characters and include a letter, number, and special character.");
      return;
    }

    try {
      const res = await signupUser(form);
      const jwt = res.data.jwt;
      localStorage.setItem("token", jwt);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Signup successful!");
      router.push("/auth?tab=signin");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.error?.message || "Signup failed.";
        setError(message);
        console.error("Signup error:", message);
      } else {
        setError("An unknown error occurred.");
        console.error("Unknown error:", err);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white bg-opacity-90 shadow-2xl rounded-xl px-8 py-10 backdrop-blur-md">
      <div className="flex items-center justify-center mb-6">                
        <h2 className="text-3xl font-bold text-green-900 text-center">
          Create an Account
        </h2>
        <Image
          src="/images/home/download.png" 
          alt="Logo"
          width={60}
          height={50}
          className="rounded-full"
        />
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        />
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
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
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md font-medium transition duration-200"
        >
          Sign Up
        </button>

        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
      </form>
    </div>
  );
}
