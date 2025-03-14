// components/dashboard/BankTabs.jsx
"use client";

import { useState } from "react";

export default function BankTabs() {
  const [activeTab, setActiveTab] = useState("Chase Bank");

  const tabs = ["Chase Bank", "Bank of America", "First Platypus Bank"];

  return (
    <div className="border-b border-gray-200 mb-4">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-1 relative ${
              activeTab === tab
                ? "text-blue-500 font-medium"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
