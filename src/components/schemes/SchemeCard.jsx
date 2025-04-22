"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function SchemeCard({ scheme }) {
  const router = useRouter();
const handleClick = () => {
  router.push(`scheme/${scheme._id}`);
};
  return (
    <Card
      key={scheme.title}
      className="shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-lg border border-gray-200"
      onClick={handleClick}
    >
      <CardContent className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">{scheme.title}</h3>
        <div className="flex flex-wrap gap-2">
          {scheme.applicableState?.map((state, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
            >
              {state}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 font-medium">{scheme.name}</p>
        <p className="text-sm text-gray-500">
          Start: {new Date(scheme.startDate).toLocaleDateString()}
        </p>
        <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
          {scheme.type}
        </span>
      </CardContent>
    </Card>
  );
}
