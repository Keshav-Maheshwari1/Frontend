"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

import SectionBlock from "./SectionBlock";
import TagList from "./TagList";
import EligibilityList from "./EligibilityList";
import DocumentList from "./DocumentList";
import ApplicationSteps from "./Application";
import FAQList from "./FAQList";
import SectionNav from "./SectionNav";

export default function SchemeDetails({ scheme }) {
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

  return (
    <div className="min-h-screen p-4 flex flex-col md:flex-row gap-4">
      <SectionNav sections={sections} active={active} />
      <main className="w-full md:w-4/5 space-y-6">
        <h1 className="text-2xl font-bold">
          {scheme.title} <span className="text-green-500">ⓘ</span>
        </h1>
        <TagList tags={scheme.tags} />
        <Button className="bg-purple-500 text-white">Check Eligibility</Button>

        <SectionBlock
          ref={sections.details}
          title="Details"
          content={scheme.description}
        />
        <SectionBlock
          ref={sections.benefits}
          title="Benefits"
          content={scheme.benefits}
        />
        <EligibilityList ref={sections.eligibility} data={scheme.eligibility} />
        <SectionBlock
          ref={sections.exclusions}
          title="Exclusions"
          content={scheme.exclusions}
        />
        <ApplicationSteps
          ref={sections.application}
          data={scheme.application}
        />
        <DocumentList ref={sections.documents} data={scheme.documents} />
        <FAQList ref={sections.faq} data={scheme.faq} />
      </main>
    </div>
  );
}
