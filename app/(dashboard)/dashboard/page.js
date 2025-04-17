// app/dashboard/dashboard.js
import { Suspense } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import AccountSummary from "@/components/dashboard/AccountSummary";
import TransactionList from "@/components/dashboard/TransactionList";
import BankTabs from "@/components/dashboard/BankTabs";
import UserProfile from "@/components/dashboard/UserProfile";
import BudgetTracker from "@/components/dashboard/BudgetTracker";
import BankCards from "@/components/dashboard/BankCards";

export const metadata = {
  title: "Dashboard - Horizon App",
  description: "Manage your accounts and view your transactions",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-black dark:text-dark">
      <Sidebar />

      <div
        id="main-content"
        className="pl-64 flex-1 overflow-auto transition-all duration-300"
      >
        <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-50">
          <div className="flex-1 p-6 overflow-y-auto h-screen">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">
                Welcome, <span className="text-blue-500">Adrian</span>
              </h1>
              <p className="text-gray-600">
                Access & manage your account and transactions efficiently.
              </p>
            </div>

            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>

            <AccountSummary />

            {/* Transactions Section */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent transactions</h2>
                <button className="text-gray-700 hover:text-blue-700 px-3 py-1 rounded-md border border-gray-200 text-sm">
                  View all
                </button>
              </div>
              {/* Bank Tabs */}
              <BankTabs />
              {/* Transaction List */}
              <TransactionList />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-80 xl:w-100 bg-white p-6 border-l border-gray-200 overflow-y-auto h-screen sticky top-0">
            <UserProfile />
            <BankCards />
            <BudgetTracker />
          </div>
        </div>
      </div>
    </div>
  );
}
