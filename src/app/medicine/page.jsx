"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import ProductFormSection from "@/components/ProductFormSection";

export default function ProductForm({ initialData }) {
  const router = useRouter();
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      price: 0,
      description: "",
      prescriptionRequired: false,
      stock: 0,
      medicineFile: "",
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    router.push("/products");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md"
    >
      <ProductFormSection formData={formData} setFormData={setFormData} />
      <Button
        type="submit"
        className="w-full bg-indigo-600 text-white hover:bg-indigo-700 mt-4"
      >
        Save
      </Button>
    </form>
  );
}
