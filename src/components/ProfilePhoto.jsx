"use client";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function ProfilePhoto({ onUpload }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full h-32 w-32 object-cover border-4 border-indigo-200"
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-0 right-0 bg-white hover:bg-indigo-100"
          onClick={onUpload}
        >
          <Camera className="h-4 w-4 text-indigo-600" />
        </Button>
      </div>
      <Button variant="link" onClick={() => onUpload("aadhaar")}>
        Upload Aadhaar Photo
      </Button>
    </div>
  );
}
