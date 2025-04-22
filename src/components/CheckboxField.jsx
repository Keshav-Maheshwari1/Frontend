"use client";
import { useState } from "react";

export default function CheckboxField({ label, checked, onChange }) {
  return (
    <div className="mb-4">
      <label className="flex items-center text-sm text-gray-700">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        {label}
      </label>
    </div>
  );
}
