"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { Input } from "./ui/input";

export default function ProfilePhoto({ onUpload }) {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) onUpload(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-200">
        {/* Placeholder or preview image logic can go here if needed */}
        <Input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="absolute bottom-1 right-1 bg-white hover:bg-indigo-100"
          onClick={handleClick}
        >
          <Camera className="h-4 w-4 text-indigo-600" />
        </Button>
      </div>

      <Button type="button" variant="link" onClick={() => onUpload("aadhaar")}>
        Upload Aadhaar Photo
      </Button>
    </div>
  );
}
