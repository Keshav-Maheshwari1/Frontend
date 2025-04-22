"use client";
"use client";
import { FaInfoCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import sanitizeHtml from "sanitize-html";
import { useGetAllSchemes } from "@/costomeHooks/useSchemes";

export default function SchemeDetails({ id }) {
  const {
    data: schemes,
    isPending: loadingSchemes,
    error: errorSchemes,
  } = useGetAllSchemes();

  const sections = {
    details: useRef(null),
    benefits: useRef(null),
    eligibility: useRef(null),
    exclusions: useRef(null),
    application: useRef(null),
    documents: useRef(null),
    faq: useRef(null),
  };
  const [active, setActive] = useState("details");

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY + 100;
      for (let [key, ref] of Object.entries(sections))
        if (ref.current && scroll >= ref.current.offsetTop) setActive(key);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loadingSchemes) return <div>Loading...</div>;
  if (errorSchemes) return <div>{errorSchemes.message}</div>;

  const scheme = schemes.find((s) => s._id === id);
  if (!scheme) {
    return <div>No such scheme</div>;
  }
  const renderContent = (content) => {
    if (!content)
      return <p className="text-gray-600">No description available</p>;
    // Check if content contains HTML tags
    const hasHtml = /<\/?[a-z][\s\S]*>/i.test(content);
    if (hasHtml) {
      const cleanHtml = sanitizeHtml(content, {
        allowedTags: ["h1", "h2", "p", "ul", "ol", "li", "br"],
        allowedAttributes: {},
      });
      return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
    }
    return <p className="text-gray-600 leading-relaxed">{content}</p>;
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-gray-50 to-white flex flex-col md:flex-row gap-6">
      <main className="w-full md:w-4/5 mx-auto space-y-8">
        <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-3xl font-extrabold text-gray-800">
            {scheme.title}{" "}
            <span className="text-green-500">
              <FaInfoCircle className="inline ml-2" />
            </span>
          </h1>
          <span className="text-sm text-gray-500 bg-green-100 px-3 py-1 rounded-full">
            {scheme.type}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Applicable States
            </h2>
            <div className="flex flex-wrap gap-2">
              {scheme.applicableState?.map((state, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Not Applicable States
            </h2>
            <div className="flex flex-wrap gap-2">
              {scheme.notApplicableState?.map((state, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Description
          </h2>
          {renderContent(scheme.content)}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Eligibility
          </h2>
          <p className="text-gray-600 leading-relaxed">{scheme.eligibility}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Start Date
            </h2>
            <p className="text-gray-600">
              {new Date(scheme.startDate).toLocaleDateString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              End Date
            </h2>
            <p className="text-gray-600">
              {new Date(scheme.endDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Scheme Name
          </h2>
          <p className="text-gray-600 font-medium">{scheme.name}</p>
        </div>
        {scheme.videoUrl && (
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Video Overview
            </h2>
            <iframe
              src={scheme.videoUrl.replace("watch?v=", "embed/")}
              title="Scheme Video"
              className="w-full h-64 rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </main>
    </div>
  );
}
