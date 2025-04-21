"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { schemes, filters } from "@/constants/page"; // array of schemes// filters like state, caste, etc.
import { useState } from "react";

const ImageURI =
  "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fcategories%2Fbanners%2FHealth.jpg&w=1920&q=75";

export default function SchemeExplorer() {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

  return (
    <main>
      <div className=" mt-4 mb-4">
        <img src={ImageURI} alt="" />
      </div>
      <div className="flex flex-col md:flex-row min-h-screen p-4  justify-center gap-4">
        {/* Sidebar Filter Section */}
        <aside className="w-full md:w-1/8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Filter By</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedFilters({})}
            >
              Reset Filters
            </Button>
          </div>

          {filters.map((filter) => (
            <div key={filter.key}>
              <label className="block text-sm font-medium mb-1">
                {filter.label}
              </label>
              <Select
                onValueChange={(value) =>
                  setSelectedFilters((prev) => ({
                    ...prev,
                    [filter.key]: value,
                  }))
                }
              >
                <SelectTrigger>
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

        {/* Main Content Section */}
        <main className="w-full md:w-3/4 space-y-6">
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

          <div className="space-y-4">
            {schemes
              .filter((scheme) =>
                scheme.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((scheme) => (
                <Card key={scheme.title} className="shadow-md">
                  <CardContent className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold">{scheme.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {scheme.location}
                    </p>
                    <p className="text-sm">{scheme.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {scheme.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </main>
      </div>
    </main>
  );
}
