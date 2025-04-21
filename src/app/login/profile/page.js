"use client";
import ProfilePhoto from "@/components/ProfilePhoto.jsx";
import UserDetails from "@/components/UserDetails.jsx";
import Settings from "@/components/Settings.jsx";
import ChatbotButton from "@/components/ChatbotButton.jsx";
import CreateStoreForm from "@/components/CreateStoreForm.jsx";
import OrderHistory from "@/components/OrderHistory.jsx";
import MedicineInventory from "@/components/MedicineInventory.jsx";
import { useState, useRef, useEffect } from "react";
import {
  userData,
  orders,
  medicines,
  languages,
} from "@/constants/page";

export default function ProfilePage() {
  const [language, setLanguage] = useState(userData.language);
  const [hasStore, setHasStore] = useState(false);
  const [activeSection, setActiveSection] = useState("Profile Photo");

  const sections = {
    "Profile Photo": useRef(null),
    "User Details": useRef(null),
    "Settings": useRef(null),
    "Create Store": useRef(null),
    "Medicine Inventory": useRef(null),
    "Order History": useRef(null),
  };

  const handlePhotoUpload = (type) => {
    alert(`Uploading ${type} photo!`);
  };

  const handleStoreCreated = (store) => {
    setHasStore(true);
    alert(
      `Store "${store.name}" created with ${store.medicines.length} medicine(s)!`
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      let newActiveSection = activeSection;

      for (const [sectionName, ref] of Object.entries(sections)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            newActiveSection = sectionName;
            break;
          }
        }
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-white p-4 relative">
      <div className="flex">
        {/* Left Sidebar for Component Names */}
        <div className="w-1/4 sticky top-4 h-[calc(100vh-2rem)] bg-white rounded-xl shadow-md p-4 space-y-4">
          {Object.keys(sections).map((section) => (
            <div
              key={section}
              className={`cursor-pointer p-2 rounded-lg transition-colors ${
                activeSection === section
                  ? "bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
                  : "text-gray-600 hover:bg-indigo-100"
              }`}
              onClick={() =>
                sections[section].current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              {section}
            </div>
          ))}
        </div>

        {/* Right Content Area */}
        <div className="w-3/4 ml-6 space-y-6">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 text-center">
            Profile Management
          </h1>
          <p className="text-center text-gray-600">
            Empowering 150M users with ₹100B savings via Jan Aushadhi
          </p>

          <div ref={sections["Profile Photo"]}>
            <ProfilePhoto onUpload={handlePhotoUpload} />
          </div>
          <div ref={sections["User Details"]}>
            <UserDetails user={userData} />
          </div>
          <div ref={sections["Settings"]}>
            <Settings
              language={language}
              setLanguage={setLanguage}
              languages={languages}
            />
          </div>
          <div ref={sections["Create Store"]}>
            {!hasStore && (
              <CreateStoreForm onStoreCreated={handleStoreCreated} />
            )}
          </div>
          <div ref={sections["Medicine Inventory"]}>
            <MedicineInventory medicines={medicines} />
          </div>
          <div ref={sections["Order History"]}>
            <OrderHistory orders={orders} />
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
      <ChatbotButton />
    </div>
  );
}
