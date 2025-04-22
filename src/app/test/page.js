'use client';
import { fetchGenericEquivalents } from '@/utils/generic';
import React, { useEffect, useState } from 'react';


function GenericFinder({ drugName }) {
  const [generics, setGenerics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!drugName) {
      setGenerics([]);
      setError(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const data = await fetchGenericEquivalents(drugName);
      setGenerics(data);
      setLoading(false);
    };

    fetchData();
  }, [drugName]);

  if (loading) return <p className="text-gray-600">Loading generics...</p>;
  if (error) return <p className="text-red-600">Error: Check console or try another medicine (e.g., Crocin)</p>;
  if (generics.length === 0) return <p className="text-gray-600">No generics found for "{drugName}".</p>;

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Generic Equivalents for "{drugName}"</h3>
      <ul className="list-disc pl-5">
        {generics.map((candidate, index) => (
          <li key={index} className="text-gray-800">
            {candidate.brand} → {candidate.name} (Score: {candidate.rank || 'N/A'}, Price: ₹{candidate.price || 'N/A'})
          </li>
        ))}
      </ul>
    </div>
  );
}

function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('Crocin');

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">HealthFin Marketplace</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter medicine name (e.g., Crocin, Metformin)"
        className="border border-gray-300 p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <GenericFinder drugName={searchTerm} />
    </div>
  );
}

export default Marketplace;