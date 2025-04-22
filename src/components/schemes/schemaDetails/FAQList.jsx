import React from "react";

const FAQList = React.forwardRef(({ data }, ref) => (
  <div ref={ref} className="space-y-2">
    <h2 className="text-xl">Frequently Asked Questions</h2>
    {data ? (
      <ul className="list-disc pl-5 space-y-1">
        {data.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
    ) : (
      <p>No FAQs available.</p>
    )}
  </div>
));

FAQList.displayName = "FAQList"; // Fix for forwardRef

export default FAQList;
