"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch, schemes }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between">
      <div className="relative w-full sm:w-2/3">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={18}
        />
        <Input
          className="pl-10"
          placeholder="Search schemes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="text-sm text-muted-foreground">
        We found{" "}
        <span className="text-primary font-medium">{schemes.length}</span>{" "}
        schemes based on your preferences
      </div>
    </div>
  );
}
