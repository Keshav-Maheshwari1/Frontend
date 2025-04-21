"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ProfileSection({ profile }) {
  return (
    <div className="p-4 flex items-center space-x-4">
      <Avatar className="h-20 w-20">
        <AvatarImage src={profile.imageUrl} alt={profile.name} />
        <AvatarFallback>
          {profile.name.split(" ")[0][0]}
          {profile.name.split(" ")[1][0]}
        </AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-xl font-semibold text-gray-900">{profile.name}</h2>
        <p className="text-gray-600">{profile.handle}</p>
        <Button
          variant="outline"
          className="mt-2 text-indigo-600 hover:bg-indigo-100"
        >
          Update Profile Image
        </Button>
      </div>
    </div>
  );
}
