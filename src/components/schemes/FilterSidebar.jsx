"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterSidebar({
  filters,
  selectedFilters,
  setSelectedFilters,
}) {
  const handleFilterChange =  (key, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: value || null, 
    }));
  };

  return (
    <aside className="w-full md:w-1/8 space-y-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Filter By</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSelectedFilters({})}
          className="text-indigo-600 hover:bg-indigo-100"
        >
          Reset Filters
        </Button>
      </div>
      {filters.map((filter) => (
        <div key={filter.key} className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            {filter.label}
          </label>
          <Select
            value={selectedFilters[filter.key] || ""}
            onValueChange={(value) => handleFilterChange(filter.key, value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={`Select ${filter.label}`} />
            </SelectTrigger>
            <SelectContent>
              {filter.options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </aside>
  );
}
