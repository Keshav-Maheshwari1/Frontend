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
  const [hasStore, setHasStore] = useState(true);
  const [activeSection, setActiveSection] = useState("Profile Photo");
  const [showInventory, setShowInventory] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);

  const sections = {
    "Profile Photo": useRef(null),
    "User Details": useRef(null),
    "Settings": useRef(null),
    "Create Store": useRef(null),
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
      const scrollPosition = window.scrollY + 100;
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
    <div className="min-h-screen bg-white p-4 relative">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 sticky top-4 h-[calc(100vh-2rem)] bg-white rounded-xl shadow-md p-4 space-y-4">
          {Object.keys(sections).map((section) => (
            <div
              key={section}
              className={`cursor-pointer p-2 rounded-lg transition-colors ${
                activeSection === section
                  ? "bg-[#20B486] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() =>
                sections[section].current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {section}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-3/4 ml-6 space-y-6">
          <h1 className="text-3xl font-extrabold text-[#20B486] text-center">
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

          {/* Toggle Buttons for Store Owner */}
          {hasStore && (
            <div className="space-x-4 flex justify-center">
              <button
                className={`px-4 py-2 rounded-full text-white font-semibold shadow-md ${
                  showInventory
                    ? "bg-[#20B486]"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={() => setShowInventory(!showInventory)}
              >
                {showInventory ? "Hide" : "Show"} Inventory
              </button>
              <button
                className={`px-4 py-2 rounded-full text-white font-semibold shadow-md ${
                  showOrderHistory
                    ? "bg-[#20B486]"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={() => setShowOrderHistory(!showOrderHistory)}
              >
                {showOrderHistory ? "Hide" : "Show"} Orders
              </button>
            </div>
          )}

          {/* Conditionally Rendered Sections */}
          {showInventory && <MedicineInventory medicines={medicines} />}
          {showOrderHistory && <OrderHistory orders={orders} />}
        </div>
      </div>
    </div>
  );
}
