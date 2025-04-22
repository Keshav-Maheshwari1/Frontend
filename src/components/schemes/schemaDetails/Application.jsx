import React from "react";

const ApplicationSteps = React.forwardRef(({ data }, ref) => (
  <div ref={ref} className="space-y-2">
    <h2 className="text-xl">Application Process</h2>
    {data ? (
      <div className="pl-4 space-y-2">
        <p className="text-green-600">Online</p>
        {data.unregistered && (
          <div>
            <strong>Unregistered Applicant:</strong>
            <ol className="list-decimal pl-5 mt-1">
              {data.unregistered.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        )}
        {data.registered && (
          <div>
            <strong>Already Registered Applicant:</strong>
            <ol className="list-decimal pl-5 mt-1">
              {data.registered.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    ) : (
      <p>No application process available.</p>
    )}
  </div>
));

ApplicationSteps.displayName = "ApplicationSteps"; // Fix for forwardRef

export default ApplicationSteps;
