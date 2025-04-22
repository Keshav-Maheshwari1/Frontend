"use client";
import PaymentForm from "@/components/PaymentForm";
import { useState } from "react";

export default function ParentComponent() {
  const [formData, setFormData] = useState({
    name: "Keshav",
    email: "keshav029@gmail.com",
    phone: "9993312857",
  });
  const [loading, setLoading] = useState(false);
  const amount = 100;
  const getId = () => Date.now().toString();

  return (
    <PaymentForm
      formData={formData}
      amount={amount}
      getId={getId}
      setLoading={setLoading}
    />
  );
}
