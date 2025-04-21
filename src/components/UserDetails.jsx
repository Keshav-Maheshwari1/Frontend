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
    // Here you would typically send the updated user data to an API or state management
    console.log("Saved user data:", user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="mt-6 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl text-indigo-700">User Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          <strong>Name:</strong> {user.name || "Not provided"}
        </p>
        <p>
          <strong>Email:</strong> {user.email || "Not provided"}
        </p>
        {!isEditing && (
          <>
            {user.aadhaar || user.income || user.address || user.language ? (
              <>
                <p>
                  <strong>Aadhaar:</strong> {user.aadhaar || "Not provided"}
                </p>
                <p>
                  <strong>Income:</strong> {user.income || "Not provided"}
                </p>
                <p>
                  <strong>Address:</strong> {user.address || "Not provided"}
                </p>
                <p>
                  <strong>Language:</strong> {user.language || "Not provided"}
                </p>
                <button
                  variant="outline"
                  className="mt-4 text-indigo-600 hover:bg-indigo-100"
                  onClick={handleEditClick}
                >
                  Edit Details
                </button>
              </>
            ) : (
              <p className="text-gray-600">
                User details are empty.{" "}
                <span
                  className="text-indigo-600 cursor-pointer hover:underline"
                  onClick={handleEditClick}
                >
                  Click here to add details
                </span>
              </p>
            )}
          </>
        )}
        {isEditing && (
          <div className="space-y-4">
            <Input
              name="aadhaar"
              placeholder="Aadhaar Number"
              value={user.aadhaar}
              onChange={handleChange}
              className="w-full"
            />
            <Input
              name="income"
              placeholder="Income (e.g., ₹50,000/month)"
              value={user.income}
              onChange={handleChange}
              className="w-full"
            />
            <Input
              name="address"
              placeholder="Address"
              value={user.address}
              onChange={handleChange}
              className="w-full"
            />
            <Input
              name="language"
              placeholder="Language (e.g., English)"
              value={user.language}
              onChange={handleChange}
              className="w-full"
            />
            <button
              className="w-full bg-gradient-to-br from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600"
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
