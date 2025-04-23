"use client";
import { useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useLogin, useSignup } from "@/costomeHooks/useAuth";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

export default function AuthForm() {
  const router = useRouter();
  const { setAuthData } = useAuthContext(); 

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);

  const { mutate: loginMutate, isPending: loginLoading, error: loginError } = useLogin();
  const { mutate: signupMutate, isPending: signupLoading, error: signupError } = useSignup();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailInput.current?.value;
    const password = passwordInput.current?.value;

    loginMutate(
      { email, password },
      {
        onSuccess: (res) => {
          console.log(res)

          setAuthData(); 
          router.push("/");
        },
        onError: (err) => console.log(err),
      }
    );
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const name = nameInput.current?.value;
    const email = emailInput.current?.value;
    const password = passwordInput.current?.value;
    const confirmPassword = confirmPasswordInput.current?.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    signupMutate(
      { name, email, password },
      {
        onSuccess: () => {
          setAuthData(); // 👈 refetch user
          router.push("/");
        },
        onError: (err) => console.log(err),
      }
    );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d4f6e7] via-white to-[#e8fef4] p-6">
      <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#20B486] to-[#3dd59d]">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h1>
        </div>

        <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-5">
          {!isLogin && (
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                ref={nameInput}
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#20B486]"
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              ref={emailInput}
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#20B486]"
            />
          </div>

          <div className="space-y-1 relative">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              ref={passwordInput}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#20B486]"
            />
            <div
              className="absolute right-3 top-8 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
              <input
                ref={confirmPasswordInput}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#20B486]"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-[#20B486] text-white rounded-lg font-semibold hover:bg-[#1ca173] transition"
          >
            {isLogin
              ? loginLoading
                ? "Logging in..."
                : "Login"
              : signupLoading
              ? "Creating account..."
              : "Sign Up"}
          </button>

          {(loginError || signupError) && (
            <p className="text-red-500 text-sm">{(loginError || signupError)?.message}</p>
          )}
        </form>

        <p className="text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#20B486] hover:underline cursor-pointer font-medium"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </span>
        </p>
      </div>
    </main>
  );
}
