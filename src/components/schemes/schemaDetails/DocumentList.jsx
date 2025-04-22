import React from "react";

const DocumentList = React.forwardRef(({ data }, ref) => (
  <div ref={ref} className="space-y-2">
    <h2 className="text-xl">Documents Required</h2>
    {data ? (
      <ol className="list-decimal pl-5">
        {data.map((doc, i) => (
          <li key={i}>{doc}</li>
        ))}
      </ol>
    ) : (
      <p>No documents required.</p>
    )}
  </div>
));

DocumentList.displayName = "DocumentList"; // Fix for forwardRef

export default DocumentList;
