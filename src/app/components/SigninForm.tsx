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
