"use client";
import { useState, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AuthPage() {
  const [isUser, setIsUser] = useState(true);
  const [isForget, setIsForget] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailInput.current?.value;
    const password = passwordInput.current?.value;

    if (!email || (!isForget && !password)) {
      return alert("Please fill all required fields.");
    }

    if (isForget) {
      alert(`Password reset link sent to: ${email}`);
      return;
    }

    if (isUser) {
      alert(`Logging in with: ${email}`);
    } else {
      const name = nameInput.current?.value;
      const confirm = confirmPasswordInput.current?.value;

      if (!name || !confirm) return alert("Please fill all fields.");
      if (password !== confirm) return alert("Passwords do not match.");

      alert(`Account created for ${name}`);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d4f6e7] via-white to-[#e8fef4] p-6">
      <div className="relative bg-white max-w-md w-full p-8 rounded-2xl shadow-xl space-y-6 transition-all duration-300">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#20B486] to-[#3dd59d]">
            {isForget
              ? "Reset Password"
              : isUser
              ? "Welcome Back!"
              : "Create an Account"}
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isUser && !isForget && (
            <div className="space-y-1">
              <label className="block text-sm text-gray-600 font-medium">
                Name
              </label>
              <input
                ref={nameInput}
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20B486]"
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="block text-sm text-gray-600 font-medium">
              Email
            </label>
            <input
              ref={emailInput}
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20B486]"
            />
          </div>

          {!isForget && (
            <div className="space-y-1 relative">
              <label className="block text-sm text-gray-600 font-medium">
                Password
              </label>
              <input
                ref={passwordInput}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20B486]"
              />
              <div
                className="absolute right-3 top-8 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          )}

          {!isUser && !isForget && (
            <div className="space-y-1 relative">
              <label className="block text-sm text-gray-600 font-medium">
                Confirm Password
              </label>
              <input
                ref={confirmPasswordInput}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20B486]"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-[#20B486] text-white rounded-lg font-semibold hover:bg-[#1ca173] transition-all"
          >
            {isForget
              ? "Send Reset Link"
              : isUser
              ? "Login"
              : "Register"}
          </button>
        </form>

        {/* Links */}
        <div className="text-center text-sm text-gray-600 space-y-2">
          {!isForget && (
            <p>
              {isUser ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                onClick={() => {
                  setIsUser(!isUser);
                  setIsForget(false);
                }}
                className="text-[#20B486] hover:underline cursor-pointer font-medium"
              >
                {isUser ? "Sign up" : "Sign in"}
              </span>
            </p>
          )}
          <p>
            {isForget ? (
              <span
                onClick={() => {
                  setIsForget(false);
                  setIsUser(true);
                }}
                className="text-[#20B486] hover:underline cursor-pointer font-medium"
              >
                Back to Login
              </span>
            ) : (
              <span
                onClick={() => {
                  setIsForget(true);
                }}
                className="text-[#20B486] hover:underline cursor-pointer font-medium"
              >
                Forgot Password?
              </span>
            )}
          </p>
        </div>
      </div>
    </main>
  );
}
