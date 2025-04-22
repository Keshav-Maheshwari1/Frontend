"use client";

const ImageURI = "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fcategories%2Fbanners%2FHealth.jpg&w=1920&q=75";

export default function HeaderImage() {
  return (
    <div className="mt-4 mb-4">
      <img src={ImageURI} alt="" />
    </div>
  );
}