// components/dashboard/Sidebar.jsx
"use client"; 

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);

    // Update main content padding directly
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      if (newState) {
        mainContent.classList.remove("pl-64");
        mainContent.classList.add("pl-16");
      } else {
        mainContent.classList.remove("pl-16");
        mainContent.classList.add("pl-64");
      }
    }
  };

  const sidebarLinks = [
    { href: "/dashboard", icon: "🏠", label: "Home" },
    { href: "/banks", icon: "💰", label: "My Banks" },
    { href: "/transactions", icon: "📊", label: "Transaction History" },
    { href: "/payment", icon: "💸", label: "Payment Transfer" },
    { href: "/connect-bank", icon: "🔗", label: "Connect Bank" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 border-r border-gray-200 bg-white flex flex-col h-screen transition-all duration-300 z-10 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Main sidebar content - this will be scrollable */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="mb-6 flex justify-between items-center">
          {!isCollapsed && (
            <Link href="/dashboard" className="flex items-center">
              <div className="text-blue-900 mr-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="4" fill="currentColor" />
                  <path d="M7 12L12 7L17 12L12 17L7 12Z" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-bold text-blue-900">FMS</span>
            </Link>
          )}
          {isCollapsed && (
            <div className="mx-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-900"
              >
                <rect width="24" height="24" rx="4" fill="currentColor" />
                <path d="M7 12L12 7L17 12L12 17L7 12Z" fill="white" />
              </svg>
            </div>
          )}
        </div>

        {/* Search - hide when collapsed */}
        {!isCollapsed && (
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${
                link.href === "/dashboard"
                  ? "bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                  : ""
              } ${isCollapsed ? "justify-center" : ""}`}
              title={isCollapsed ? link.label : ""}
            >
              <span className={isCollapsed ? "" : "mr-3"}>{link.icon}</span>
              {!isCollapsed && <span>{link.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* User Profile at bottom - fixed position within sidebar */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center">
          {!isCollapsed && (
            <>
              <div className="w-10 h-10 mr-3">
                <Image
                  src="/jsmastery2.jpg"
                  alt="User Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">Tope Fasasi</h4>
                <p className="text-xs text-gray-500 truncate">
                  tope@jsmastery.pro
                </p>
              </div>
            </>
          )}
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-gray-600 ml-auto"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {isCollapsed ? (
                // Show right arrow when collapsed
                <path
                  d="M7 5L13 10L7 15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                // Show left arrow when expanded
                <>
                  <path d="M5 15L5 5" strokeLinecap="round" />
                  <path d="M5 5L7 5" strokeLinecap="round" />
                  <path d="M5 15L7 15" strokeLinecap="round" />
                  <path d="M8 10H13" strokeLinecap="round" />
                  <path
                    d="M11 7L14 10L11 13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
