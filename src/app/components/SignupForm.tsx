
"use client";
import { useState } from "react";
import axios from "axios";
import { signupUser } from "@/utils/auth/signup";
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation Functions
  const isValidUsername = (username: string) =>
    /^[a-zA-Z0-9_]{4,}$/.test(username); // min 4 chars, letters/numbers/underscore

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // basic email regex

  const isValidPassword = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password); // min 6, 1 letter, 1 number, 1 special

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, email, password } = form;

    // Validate fields
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
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:p-8 py-10 max-w-md bg-white bg-opacity-90 shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded w-full font-medium"
        >
          Sign Up
        </button>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </form>
    </div>
  );
}
