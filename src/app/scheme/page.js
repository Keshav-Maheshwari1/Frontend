"use client";
import FilterSidebar from "@/components/schemes/FilterSidebar";
import HeaderImage from "@/components/schemes/HeaderImage";
import SchemeList from "@/components/schemes/SchemeList";
import SearchBar from "@/components/schemes/SearchBar";
import { filters } from "@/constants/page";
import { useGetAllSchemes } from "@/costomeHooks/useSchemes";
import { useState } from "react";

export default function SchemeExplorer() {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    state: "",
    eligibility: "",
    type: "",
  });

  const {
    data: schemes,
    isPending: loadingSchemes,
    error: errorSchemes,
  } = useGetAllSchemes();

  if (loadingSchemes) return <div>Loading...</div>;
  if (errorSchemes) return <div>{errorSchemes.message}</div>;

  const filteredSchemes = schemes
    .filter((scheme) =>
      Object.entries(selectedFilters).every(([key, value]) => {
        if (!value || value === "") return true;

        const searchableText = `${scheme.eligibility || ""} ${
          scheme.content || ""
        }`.toLowerCase();

        const checks = {
          state: () => scheme.applicableState?.includes(value),
          gender: () => searchableText.includes(value.toLowerCase()),
          age: () => searchableText.includes(value.toLowerCase()),
          caste: () => searchableText.includes(value.toLowerCase()),
          ministry: () => searchableText.includes(value.toLowerCase()),
          disabilityPercentage: () =>
            searchableText.includes(value.toLowerCase()),
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
