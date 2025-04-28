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
        className="flex-1 w-full overflow-auto transition-all duration-300 lg:pl-64"
      >
        <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-50">
          <div className="flex-1 p-4 md:p-6 overflow-y-auto">
            <div className="mb-6 pt-12 lg:pt-0">
              <h1 className="text-2xl font-bold mt-4 sm:mt-0">
                Welcome, <span className="text-black-500">Tope</span>
              </h1>
              <p className="text-gray-600 mt-2 sm:mt-0">
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
          <div className="w-full lg:w-80 xl:w-96 bg-white p-6 border-l border-gray-200 overflow-y-auto sticky top-0">
            <UserProfile />
            <BankCards />
            <BudgetTracker />
          </div>
        </div>
      </div>
    </div>
  );
}
