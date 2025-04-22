import React from "react";

const EligibilityList = React.forwardRef(({ data }, ref) => (
  <div ref={ref} className="space-y-2">
    <h2 className="text-xl">Eligibility</h2>
    {data ? (
      <ol className="list-decimal pl-5">
        {data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    ) : (
      <p>No eligibility criteria available.</p>
    )}
  </div>
));

EligibilityList.displayName = 'EligibilityList'; // Fix for forwardRef

export default EligibilityList;
