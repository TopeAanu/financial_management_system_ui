// components/dashboard/AccountSummary.jsx
"use client";

import { useState } from "react";

export default function AccountSummary() {
  const [accountBalance, setAccountBalance] = useState(2698.12);
  const [bankAccounts, setBankAccounts] = useState(2);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex">
        <div className="relative w-24 h-24 mr-6 flex-shrink-0">
          {/* Circle progress indicator (simplified) */}
          <div className="w-full h-full rounded-full bg-100 border-8 border-blue-50"></div>
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-blue-500"
            style={{
              clipPath: "polygon(0 0, 40% 0, 40% 60%, 0 60%)",
              transform: "rotate(90deg)",
              zIndex: 3,
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-blue-300"
            style={{
              clipPath: "polygon(0% 60%, 100% 30%, 100% 60%, 0 60%)",
              transform: "rotate(90deg)",
              zIndex: 2,
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-blue-200"
            style={{
              clipPath: "polygon(0% 60%, 100% 90%, 100% 60%, 0 60%)",
              transform: "rotate(90deg)",
              zIndex: 2,
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-blue-400"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 60%)",
              transform: "rotate(90deg)",
              zIndex: 1,
            }}
          ></div>
        </div>

        <div className="flex-grow">
          <div className="flex justify-between items-center w-full">
            <span className="text-gray-700 font-medium">
              {bankAccounts} Bank Accounts
            </span>
            <button className="text-blue-500 hover:text-blue-700 flex items-center text-sm font-medium">
              <span className="mr-1">+</span> Add bank
            </button>
          </div>

          <div className="mt-4">
            <span className="block text-gray-600 mb-1">
              Total Current Balance
            </span>
            <span className="text-3xl font-bold">
              ${accountBalance.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
