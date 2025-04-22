"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="text-6xl font-bold text-indigo-600 mb-4">404</div>
        <svg
          className="w-32 h-32 mx-auto mb-6 text-indigo-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! It seems the page you’re looking for doesn’t exist or has been
          moved. Let’s get you back on track.
        </p>
        <Button
          className="bg-indigo-600 text-white hover:bg-indigo-700"
          onClick={() => router.push("/")}
        >
          Back to Homepage
        </Button>
      </div>
    </div>
  );
}
