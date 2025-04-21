// src/components/AyushmanForm.tsx
"use client";

import { useState } from "react";

const AyushmanForm = () => {
  const [location, setLocation] = useState("");
  const [income, setIncome] = useState("");
  const [familySize, setFamilySize] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    e.preventDefault();
    setShowResult(true);
  };

  const isEligible = income !== "" && Number(income) < 150000 && Number(familySize) >= 2;

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md space-y-4 text-lg"
      >
        <h2 className="text-2xl font-bold text-green-700 text-center">Ayushman Bharat Check</h2>

        <div>
          <label className="block mb-1 text-black">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-black">Annual Income (₹)</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value === "" ? "" : Number(e.target.value))}
            required
            className="w-full p-2 border border-gray-300 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-black">Family Size</label>
          <input
            type="number"
            value={familySize}
            onChange={(e) => setFamilySize(e.target.value === "" ? "" : Number(e.target.value))}
            required
            className="w-full p-2 border border-gray-300 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
        >
          Check Eligibility
        </button>

        {showResult && (
          <div className="mt-4 p-4 rounded-xl text-center bg-green-100 text-green-700 font-medium">
            {isEligible ? (
              <>
                ✅ Based on the information provided, eligible for <strong>Ayushman Bharat</strong> scheme.
              </>
            ) : (
              <>
                ⚠️ Not currently eligible. Criteria include income below ₹1.5L and minimum 2 family members.
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default AyushmanForm;
