"use client";
import { useState, useRef } from "react";
import InputField from "@/components/InputField";
import PasswordField from "@/components/PasswordField";
export default function page() {
  const [isUser, setIsUser] = useState(true);
  const [isForget, setIsForget] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-white p-6">
      <div className="relative bg-white max-w-md w-full p-8 rounded-2xl shadow-xl space-y-6 transform transition-all hover:scale-105 hover:shadow-2xl">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            {isForget
              ? "Reset Password"
              : isUser
              ? "Welcome Back!"
              : "Create an Account"}
          </h1>
        </div>

        {/* Form */}
        <div className="space-y-5">
          {!isUser && !isForget && (
            <InputField
              label="Name"
              type="text"
              placeholder="Your Name"
              inputRef={nameInput}
              required
            />
          )}

          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
            inputRef={emailInput}
            required
          />

          {!isForget && (
            <PasswordField
              label="Password"
              inputRef={passwordInput}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}

          {isForget && (
            <PasswordField
              label="Confirm Password"
              inputRef={confirmPasswordInput}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}

          <button
            type="submit"
            onClick={handleSubmit}
            className="relative w-full py-3 bg-gradient-to-r from-[#E59622] to-[#d78010] text-white rounded-lg font-semibold hover:from-[#d78010] hover:to-[#c56f00] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">
              {isForget ? "Reset Password" : isUser ? "Login" : "Register"}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#d78010] to-[#c56f00] opacity-0 hover:opacity-20 transition-opacity" />
          </button>
        </div>

        {/* Links */}
        {!isForget && (
          <p className="text-center text-sm text-gray-600">
            {isUser ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => {
                setIsUser(!isUser);
                setIsForget(false);
              }}
              className="text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer font-medium"
            >
              {isUser ? "Sign up" : "Sign in"}
            </span>
          </p>
        )}

        <p
          className="text-center text-sm text-gray-600 cursor-pointer hover:text-indigo-600 hover:underline"
          onClick={() => {
            setIsForget(!isForget);
            setIsUser(true);
          }}
        >
          {isForget ? "Back to Login" : "Forgot Password?"}
        </p>
      </div>
    </main>
  );
}
