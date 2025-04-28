// components/dashboard/Sidebar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Home,
  Wallet,
  BarChart2,
  ArrowRightLeft,
  Link2,
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronsLeft,
} from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle sidebar collapse state for desktop
  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);

    // Update main content padding directly
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      if (newState) {
        mainContent.classList.remove("lg:pl-64");
        mainContent.classList.add("lg:pl-16");
      } else {
        mainContent.classList.remove("lg:pl-16");
        mainContent.classList.add("lg:pl-64");
      }
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarLinks = [
    { href: "/dashboard", icon: <Home size={20} />, label: "Home" },
    { href: "/banks", icon: <Wallet size={20} />, label: "My Banks" },
    {
      href: "/transactions",
      icon: <BarChart2 size={20} />,
      label: "Transaction History",
    },
    {
      href: "/payment",
      icon: <ArrowRightLeft size={20} />,
      label: "Payment Transfer",
    },
    { href: "/connect-bank", icon: <Link2 size={20} />, label: "Connect Bank" },
  ];

  return (
    <>
      {/* Mobile Header Bar with Logo and Hamburger */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-white p-3 shadow-sm z-40 lg:hidden">
        <Link href="/dashboard" className="flex items-center">
          <div className="bg-blue-900 p-1 rounded-md mr-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 12L12 7L17 12L12 17L7 12Z" fill="white" />
            </svg>
          </div>
          <span className="text-lg font-bold text-blue-900">FMS</span>
        </Link>

        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md bg-blue-900 text-white"
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link href="/dashboard" className="flex items-center">
            <div className="bg-blue-900 p-1 rounded-md mr-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 12L12 7L17 12L12 17L7 12Z" fill="white" />
              </svg>
            </div>
            <span className="text-lg font-bold text-blue-900">FMS</span>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-64px)]">
          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="search"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-4 py-2 space-y-1 flex-grow overflow-y-auto">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${
                  link.href === "/dashboard"
                    ? "bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                    : ""
                }`}
                onClick={toggleMobileMenu}
              >
                <span className="mr-3">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="mt-auto border-t border-gray-200 p-4">
            <div className="flex items-center">
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
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={`fixed top-0 left-0 border-r border-gray-200 bg-white h-screen transition-all duration-300 z-10 hidden lg:block ${
          isCollapsed ? "lg:w-16" : "lg:w-64"
        }`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="mb-6 flex justify-between items-center">
            {!isCollapsed ? (
              <Link href="/dashboard" className="flex items-center">
                <div className="bg-blue-900 p-1 rounded-md mr-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 12L12 7L17 12L12 17L7 12Z" fill="white" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-blue-900">FMS</span>
              </Link>
            ) : (
              <div className="mx-auto bg-blue-900 p-1 rounded-md">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="search"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search"
                />
              </div>
            </div>
          )}

          {/* Desktop Navigation */}
          <nav className="space-y-1 flex-grow overflow-y-auto">
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

          {/* Desktop User Profile */}
          <div className="mt-auto border-t border-gray-200 pt-4">
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
                {isCollapsed ? (
                  <ChevronRight size={20} />
                ) : (
                  <ChevronsLeft size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
