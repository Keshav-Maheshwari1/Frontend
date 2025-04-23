"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import StoreFormSection from "@/components/StoreFormSection";

export default function StoreForm({ initialData }) {
  const router = useRouter();
  const [formData, setFormData] = useState(
    initialData || {
      pincode: "",
      certificate: "",
      isVerified: false,
      address: "",
      type: "",
      city: "",
      state: "",
    }
  );

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md"
    >
      <StoreFormSection formData={formData} setFormData={setFormData} />
      <Button
        type="submit"
        className="w-full bg-indigo-600 text-white hover:bg-indigo-700 mt-4"
      >
        Save
      </Button>
    </form>
  );
}
