

const SectionNav = ({ sections, active }) => (
  <aside className="w-full md:w-1/5 sticky top-4 h-[calc(100vh-2rem)] bg-white rounded-lg shadow-md p-2 space-y-2">
    {[
      "details",
      "benefits",
      "eligibility",
      "exclusions",
      "application",
      "documents",
      "faq",
    ].map((sec) => (
      <div
        key={sec}
        className={`cursor-pointer p-2 rounded ${
          active === sec
            ? "bg-indigo-500 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() =>
          sections[sec].current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        {sec.charAt(0).toUpperCase() + sec.slice(1).replace(/([A-Z])/g, " $1")}
      </div>
    ))}
  </aside>
);

export default SectionNav;
