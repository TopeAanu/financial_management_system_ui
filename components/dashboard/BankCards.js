// components/dashboard/BankCards.js
"use client";

import { useState } from "react";

export default function BankCards() {
  const [bankAccounts, setBankAccounts] = useState([
    {
      id: 1,
      bank: "JS Mastery Pro.",
      cardNumber: "1234 1234 1234 1234",
      cardHolder: "TOPE FASASI",
      expiryDate: "06/24",
      cardType: "visa",
      color: "bg-slate-800",
      gradientOverlay: "bg-gradient-to-r from-purple-400 to-pink-500",
    },
    {
      id: 2,
      bank: "Chase",
      cardNumber: "1234 1234 1234 1234",
      cardHolder: "TOPE FASASI",
      expiryDate: "09/25",
      cardType: "mastercard",
      color: "bg-blue-500",
      gradientOverlay: "",
    },
  ]);

  return (
    <div className="mb-0">
      <div className="flex justify-between items-center mb-0">
        <h3 className="text-md font-bold">My Banks</h3>
        <button className="text-gray-700 hover:text-blue-500 flex items-center text-sm font-medium">
          <span className="mr-1">+</span> Add bank
        </button>
      </div>

      <div className="relative w-full" style={{ height: "280px" }}>
        {/* Bottom card (visible) */}
        <div
          className="absolute rounded-2xl bg-blue-500 text-white shadow-lg"
          style={{
            width: "90%",
            height: "180px",
            top: "46px",
            left: "23px",
            zIndex: 1,
          }}
        >
          <div className="relative z-10 p-3 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <span className="font-medium text-md">JS Mastery Pro.</span>
              {/* NFC icon */}
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
                  <path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
                  <path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
                  <path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
                </svg>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-sm uppercase">TOPE FASASI</span>
              <div className="flex items-center">
                <span className="text-sm mr-2 px-6">09/25</span>
              </div>
            </div>

            <div className="mb-0 mt-0 flex justify-between">
              <div className="text-md font-mono tracking-smaller">
                1234 1234 1234 1234
              </div>
              <div className="w-10 h-6">
                <div className="flex">
                  <div className="w-5 h-5 bg-red-500 rounded-full opacity-90"></div>
                  <div className="w-5 h-5 bg-yellow-500 rounded-full opacity-90 -ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Top card */}
        <div
          className="absolute rounded-2xl bg-slate-800 text-white shadow-lg"
          style={{
            width: "90%",
            height: "180px",
            top: "1rem",
            left: "0",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          {/* Card gradient overlay */}
          <div
            className="absolute right-0 top-0 bottom-0 w-22 bg-gradient-to-r from-purple-400 to-pink-500 opacity-90"
            style={{ borderRadius: "0 1rem 1rem 0" }}
          ></div>

          {/* Card content */}
          <div className="relative z-10 p-4 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <span className="font-medium text-md">JS Mastery Pro.</span>
              {/* NFC icon */}
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
                  <path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
                  <path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
                  <path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col justify-end h-full">
              <div className="flex items-center">
                <span className="text-sm uppercase">TOPE FASASI</span>
                <div className="flex items-center">
                  <span className="text-sm px-10 mr-2">06/24</span>
                </div>
              </div>
            </div>

            <div className="mb-0 mt-0 flex justify-between items-center">
              <div className="text-md font-mono tracking-smaller">
                1234 1234 1234 1234
              </div>
              <div className="w-10 h-6">
                <div className="text-white text-right font-bold text-lg">
                  VISA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
