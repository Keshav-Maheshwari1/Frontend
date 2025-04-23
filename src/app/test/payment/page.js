"use client";

import { usePayment } from "@/utils/usePayment";
import { useState } from "react";


export default function PaymentCaller() {
  const { initiatePayment } = usePayment();
  const [formData, setFormData] = useState({
    name: "Keshav",
    email: "keshav029@gmail.com",
    phone: "9993312857",
  });

  const amount = 100;
  const getId = () => Date.now().toString();
  const [loading, setLoading] = useState(false);

  return (
    <button
      onClick={() => {}}
      disabled={loading}
      className="w-full bg-[#20B486] text-white p-2 rounded"
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
}
