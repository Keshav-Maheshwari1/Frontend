"use client";
import { useState } from "react";

export default function UPIPaymentComponent() {
  const [upiId, setUpiId] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handlePayment = () => {
    if (!upiId || !upiId.includes("@")) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-white p-6">
      <div className="relative bg-white max-w-md w-full p-8 rounded-2xl shadow-xl space-y-6 transform transition-all hover:scale-105 hover:shadow-2xl">


        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            Jan Aushadhi UPI Payment
          </h1>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Empowering 30M households with cashless payments
            <br />
            <span className="font-semibold">50% rural adoption</span> · ₹360B
            savings
          </p>
        </div>

        {/* UPI ID Input */}
        <div>
          <label
            htmlFor="upi"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter UPI ID
          </label>
          <div className="relative">
            <input
              id="upi"
              type="text"
              placeholder="e.g., keshav@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full p-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all bg-gray-50 text-gray-800 placeholder-gray-400"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              💳
            </span>
          </div>
        </div>

        {/* Button + Status */}
        <div className="text-center">
          <button
            onClick={handlePayment}
            disabled={status === "loading" || status === "success"}
            className="relative w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">
              {status === "loading" ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </span>
              ) : status === "success" ? (
                "Paid"
              ) : (
                "Pay Now"
              )}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-400 opacity-0 hover:opacity-20 transition-opacity" />
          </button>

          {status === "success" && (
            <div className="mt-4 flex items-center justify-center space-x-2 animate-fade-in">
              <svg
                className="h-6 w-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-green-600 font-semibold">Payment Successful</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
