"use client";

import FilterSidebar from "@/components/schemes/FilterSidebar";
import HeaderImage from "@/components/schemes/HeaderImage";
import SchemeList from "@/components/schemes/SchemeList";
import SearchBar from "@/components/schemes/SearchBar";
import { schemes, filters } from "@/constants/page";
import { useState } from "react";

export default function SchemeExplorer() {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

  const filteredSchemes = schemes
    .filter((scheme) =>
      Object.entries(selectedFilters).every(([key, value]) => {
        if (!value || value.length === 0 || Array.isArray(value)) return true;
        const checks = {
          state: () => value.includes(scheme.location),
          gender: () => value.some((v) => scheme.description.includes(v)),
          age: () => value.some((v) => scheme.description.includes(v)),
          caste: () => value.some((v) => scheme.description.includes(v)),
          ministry: () => value.some((v) => scheme.tags.includes(v)),
          disabilityPercentage: () =>
            value.some((v) => scheme.description.includes(v)),
        };
        return checks[key] ? checks[key]() : true;
      })
    )
    .filter((scheme) =>
      scheme.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <main>
      <HeaderImage />
      <div className="flex flex-col md:flex-row min-h-screen p-4 justify-center gap-4">
        <FilterSidebar
          filters={filters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <main className="w-full md:w-3/4 space-y-6">
          <SearchBar
            search={search}
            setSearch={setSearch}
            schemes={filteredSchemes}
          />
          <SchemeList schemes={filteredSchemes} search={search} />
        </main>
      </div>
    </main>
  );
}
