"use client";
import InputField from "./InputField";
import CheckboxField from "./CheckboxField";
import { useState } from "react";
import { uploadFileToS3 } from "@/utils/UploadFile"; // Adjust path as needed

export default function ProductFormSection({ formData, setFormData }) {
  const [medicineFile, setMedicineFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setMedicineFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!medicineFile) return;
    setUploading(true);
    try {
      const url = await uploadFileToS3(medicineFile);
      setFormData({ ...formData, medicineFile: url });
      setMedicineFile(null);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <InputField
        label="Name"
        type="text"
        placeholder="Enter product name"
        value={formData.name}
        onChange={(v) => setFormData({ ...formData, name: v })}
        required
      />
      <InputField
        label="Price"
        type="number"
        placeholder="Enter price"
        value={formData.price}
        onChange={(v) => setFormData({ ...formData, price: v })}
        required
      />
      <InputField
        label="Description"
        type="text"
        placeholder="Enter description"
        value={formData.description || ""}
        onChange={(v) => setFormData({ ...formData, description: v })}
      />
      <CheckboxField
        label="Prescription Required"
        checked={formData.prescriptionRequired}
        onChange={(v) => setFormData({ ...formData, prescriptionRequired: v })}
      />
      <InputField
        label="Stock"
        type="number"
        placeholder="Enter stock quantity"
        value={formData.stock}
        onChange={(v) => setFormData({ ...formData, stock: v })}
      />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Medicine File
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all bg-gray-50 text-gray-800"
        />
        <button
          type="button"
          onClick={handleUpload}
          disabled={uploading || !medicineFile}
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {uploading ? "Uploading..." : "Upload Medicine File"}
        </button>
        {formData.medicineFile && (
          <p className="text-sm text-green-600 mt-2">
            Uploaded: {formData.medicineFile}
          </p>
        )}
      </div>
    </div>
  );
}
