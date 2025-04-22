"use client";
import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { uploadFileToS3 } from "@/utils/UploadFile";

export default function StoreFormSection({ formData, setFormData }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadFileToS3(file);
      setFormData({ ...formData, certificate: url });
      setFile(null);
    } catch (error) {
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <InputField
        label="Pincode"
        type="text"
        placeholder="Enter pincode"
        value={formData.pincode}
        onChange={(v) => setFormData({ ...formData, pincode: v })}
        required
      />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Certificate
        </label>
        <Input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all bg-gray-50 text-gray-800"
          required
        />
        <Button
          type="button"
          onClick={handleUpload}
          disabled={uploading || !file}
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {uploading ? "Uploading..." : "Upload Certificate"}
        </Button>
      </div>
      <InputField
        label="Address"
        type="text"
        placeholder="Enter address"
        value={formData.address || ""}
        onChange={(v) => setFormData({ ...formData, address: v })}
      />
      <SelectField
        label="Type"
        options={[
          "Retail",
          "Wholesale",
          "Online",
          "Clinic-attached",
          "Franchise",
          "Distributor",
        ]}
        value={formData.type}
        onChange={(v) => setFormData({ ...formData, type: v })}
      />
      <InputField
        label="City"
        type="text"
        placeholder="Enter city"
        value={formData.city || ""}
        onChange={(v) => setFormData({ ...formData, city: v })}
      />
      <InputField
        label="State"
        type="text"
        placeholder="Enter state"
        value={formData.state || ""}
        onChange={(v) => setFormData({ ...formData, state: v })}
      />
    </div>
  );
}
