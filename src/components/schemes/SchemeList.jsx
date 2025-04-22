"use client";
import SchemeCard from "./SchemeCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SchemeList({ schemes, search }) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Filter schemes based on search
  const filteredSchemes = schemes.filter((scheme) =>
    scheme.title.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredSchemes.length / itemsPerPage);

  // Get current schemes for the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSchemes = filteredSchemes.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page changes
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="space-y-4">
      {currentSchemes.map((scheme) => (
        <SchemeCard key={scheme.title} scheme={scheme} />
      ))}

      {/* Pagination Controls */}
      {filteredSchemes.length > itemsPerPage && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}
          >
            Prev
          </Button>

          {/* Page Numbers with Dots */}
          <span className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    className="w-8 h-8"
                  >
                    {page}
                  </Button>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <span key={page} className="px-2">
                    ...
                  </span>
                );
              }
              return null;
            })}
          </span>

          <Button
            variant="outline"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={
              currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
            }
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
