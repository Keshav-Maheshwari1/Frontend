"use client";

import { ShieldCheck, Users, Wallet } from "lucide-react";

export default function SchemeHighlight() {
  return (
    <section className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl max-w-5xl mx-auto mt-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-800">
          Secure Your Health with Ayushman Bharat
        </h2>
        <p className="text-gray-600 text-lg">
          India's largest government health scheme
        </p>
      </div>

      {/* Scheme Benefits */}
      <div className="grid sm:grid-cols-3 gap-6 text-center">
        <div className="bg-green-100 p-5 rounded-xl">
          <ShieldCheck className="text-green-700 mx-auto" size={32} />
          <h3 className="text-lg font-semibold mt-2 text-green-900">
            ₹5 Lakh Coverage
          </h3>
          <p className="text-sm text-green-800">Per family, per year</p>
        </div>

        <div className="bg-blue-100 p-5 rounded-xl">
          <Users className="text-blue-700 mx-auto" size={32} />
          <h3 className="text-lg font-semibold mt-2 text-blue-900">
            175M+ Users
          </h3>
          <p className="text-sm text-blue-800">Already enrolled</p>
        </div>

        <div className="bg-yellow-100 p-5 rounded-xl">
          <Wallet className="text-yellow-700 mx-auto" size={32} />
          <h3 className="text-lg font-semibold mt-2 text-yellow-900">
            ₹875B Saved
          </h3>
          <p className="text-sm text-yellow-800">In health expenses</p>
        </div>
      </div>

      {/* Enrollment Guide */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          How to Enroll
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          [Static placeholder for enrollment steps: Mention eligibility,
          documents required, and how to apply via official portal or nearest
          center.]
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full text-lg shadow">
          Enroll Now
        </button>
        <p className="text-sm text-gray-500 mt-2">
          Be part of the 175 million+ who’ve secured their health
        </p>
      </div>
    </section>
  );
}
