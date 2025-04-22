"use client";
import StateSelector from "@/components/StateSelector";
import { useCreateScheme } from "@/costomeHooks/useSchemes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SchemeForm({ userId, initialData = {} }) {
  const router = useRouter();
  const { mutate: createScheme, isLoading: loading } = useCreateScheme();

  const [formData, setFormData] = useState({
    name: initialData.name || "",
    title: initialData.title || "",
    eligibility: initialData.eligibility || "",
    videoUrl: initialData.videoUrl || "",
    content: initialData.content || "",
    startDate: initialData.startDate?.split("T")[0] || "",
    endDate: initialData.endDate?.split("T")[0] || "",
    type: initialData.type || "",
    applicableState: initialData.applicableState || [],
    notApplicableState: initialData.notApplicableState || [],
  });

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, userId };
    createScheme(

        payload , 
      {
        onSuccess: (res) => {
            router.push('/scheme')
            console.log(res)
        },
        onError: (err) => {
           console.log(err)
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-center">
          {initialData._id ? "Edit Scheme" : "Add New Scheme"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Scheme Name", key: "name" },
            { label: "Title", key: "title" },
            { label: "Eligibility", key: "eligibility" },
            { label: "Video URL", key: "videoUrl", type: "url" },
          ].map(({ label, key, type = "text" }) => (
            <div key={key} className="space-y-1">
              <label className="text-sm text-gray-700">{label}</label>
              <input
                type={type}
                value={formData[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-full p-2 border rounded-lg"
                required={key !== "videoUrl"}
              />
            </div>
          ))}

          <div className="space-y-1">
            <label className="text-sm text-gray-700">Description</label>
            <textarea
              value={formData.content}
              onChange={(e) => handleChange("content", e.target.value)}
              rows={4}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["startDate", "endDate"].map((field) => (
              <div key={field} className="space-y-1">
                <label className="text-sm text-gray-700">
                  {field === "startDate" ? "Start Date" : "End Date"}
                </label>
                <input
                  type="date"
                  value={formData[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            ))}
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gray-700">Type</label>
            <select
              value={formData.type}
              onChange={(e) => handleChange("type", e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select Type</option>
              {[
                "Healthcare",
                "Pension",
                "Insurance",
                "Education",
                "Housing",
              ].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <StateSelector
            label="Applicable States"
            selectedStates={formData.applicableState}
            onChange={(val) => handleChange("applicableState", val)}
          />
          <StateSelector
            label="Not Applicable States"
            selectedStates={formData.notApplicableState}
            onChange={(val) => handleChange("notApplicableState", val)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {loading
              ? "Saving..."
              : initialData._id
              ? "Update Scheme"
              : "Add Scheme"}
          </button>
        </form>
      </div>
    </div>
  );
}
