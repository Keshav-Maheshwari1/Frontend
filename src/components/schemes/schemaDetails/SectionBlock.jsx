import React from "react";


const SectionBlock = React.forwardRef(({ title, content }, ref) => (
  <div ref={ref} className="space-y-2">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p>{content || "No information available."}</p>
  </div>
));

SectionBlock.displayName = "SectionBlock"; // Fix for forwardRef

export default SectionBlock;
