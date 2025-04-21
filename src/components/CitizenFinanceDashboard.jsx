"use client";
import { upiTransactions } from "@/constants/page";
export default function CitizenFinanceDashboard() {

  const pmjdyLinked = true;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl p-6 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-700">Citizen Finance Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Empowering 90% households · ₹360B saved · ₹720B losses reduced
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Wallet Info */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-blue-800">Wallet Summary</h2>
            <p className="mt-2 text-gray-700 text-sm">Available Balance:</p>
            <p className="text-2xl font-bold text-green-600">₹2,000</p>
            <p className="text-sm text-gray-600 mt-1">Incl. Subsidy: ₹1,500</p>
          </div>

          {/* UPI Transactions */}
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-green-800">Recent UPI Payments</h2>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              {upiTransactions.map((txn) => (
                <li key={txn.id} className="flex justify-between">
                  <span>To: {txn.to}</span>
                  <span className="font-medium">{txn.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PMJDY Status */}
          <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-yellow-800">PMJDY Status</h2>
            <p className="mt-2 text-gray-700">
              Account:{" "}
              <span
                className={`font-bold ${
                  pmjdyLinked ? "text-green-600" : "text-red-500"
                }`}
              >
                {pmjdyLinked ? "Linked" : "Not Linked"}
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Pradhan Mantri Jan Dhan Yojana coverage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
