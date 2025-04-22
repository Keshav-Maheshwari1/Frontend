"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Input } from "./ui/input";

export default function UserDetails({ user: initialUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(initialUser);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="mt-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-shadow p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-[#20B486]">User Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <p className="font-medium text-gray-700">
            <strong>Name:</strong> {user.name || "Not provided"}
          </p>
          <p className="font-medium text-gray-700">
            <strong>Email:</strong> {user.email || "Not provided"}
          </p>
        </div>
        {!isEditing ? (
          <>
            {user.aadhaar || user.income || user.address || user.language ? (
              <div className="space-y-2">
                <p className="font-medium text-gray-700">
                  <strong>Aadhaar:</strong> {user.aadhaar || "Not provided"}
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Income:</strong> {user.income || "Not provided"}
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Address:</strong> {user.address || "Not provided"}
                </p>
                <p className="font-medium text-gray-700">
                  <strong>Language:</strong> {user.language || "Not provided"}
                </p>
                <button
                  className="mt-4 px-6 py-2 rounded-full bg-[#20B486] text-white font-semibold hover:bg-[#16a07d] transition-colors"
                  onClick={handleEditClick}
                >
                  Edit Details
                </button>
              </div>
            ) : (
              <p className="text-gray-600">
                User details are empty.{" "}
                <span
                  className="text-[#20B486] cursor-pointer hover:underline"
                  onClick={handleEditClick}
                >
                  Click here to add details
                </span>
              </p>
            )}
          </>
        ) : (
          <div className="space-y-4">
            <Input
              name="aadhaar"
              placeholder="Aadhaar Number"
              value={user.aadhaar}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-[#20B486] focus:border-[#20B486] transition-all"
            />
            <Input
              name="income"
              placeholder="Income (e.g., ₹50,000/month)"
              value={user.income}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-[#20B486] focus:border-[#20B486] transition-all"
            />
            <Input
              name="address"
              placeholder="Address"
              value={user.address}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-[#20B486] focus:border-[#20B486] transition-all"
            />
            <Input
              name="language"
              placeholder="Language (e.g., English)"
              value={user.language}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-[#20B486] focus:border-[#20B486] transition-all"
            />
            <button
              className="w-full py-3 rounded-lg bg-gradient-to-br from-[#20B486] to-[#16a07d] text-white font-semibold hover:from-[#16a07d] hover:to-[#20B486] transition-all"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
