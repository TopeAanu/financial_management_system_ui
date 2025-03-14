"use client";

import Image from "next/image";

export default function TransactionList() {
  const transactions = [
    {
      id: 1,
      icon: "🎵",
      merchantName: "Spotify",
      amount: -15.0,
      status: "Processing",
      date: "Wed 1:00pm",
      category: "Subscriptions",
    },
    {
      id: 2,
      icon: "👩",
      merchantName: "Alexa Doe",
      amount: 88.0,
      status: "Success",
      date: "Wed 2:45am",
      category: "Deposit",
    },
    {
      id: 3,
      icon: "🎨",
      merchantName: "Figma",
      amount: -18.99,
      status: "Processing",
      date: "Tue 6:10pm",
      category: "Income",
    },
    {
      id: 4,
      icon: "FV",
      merchantName: "Fresh F&V",
      amount: -88.0,
      status: "Success",
      date: "Tue 12:15pm",
      category: "Groceries",
    },
    {
      id: 5,
      icon: "👨",
      merchantName: "Sam Sulek",
      amount: -40.2,
      status: "Declined",
      date: "Tue 5:40am",
      category: "Food",
    },
  ];

  // Helper function to get the appropriate icon background color
  const getIconBgColor = (merchantName) => {
    const colorMap = {
      Spotify: "bg-green-500",
      "Alexa Doe": "bg-gray-500",
      Figma: "bg-purple-500",
      "Fresh F&V": "bg-gray-200 text-gray-700",
      "Sam Sulek": "bg-gray-500",
    };
    return colorMap[merchantName] || "bg-gray-400";
  };

  // Helper function to get status styles
  const getStatusStyles = (status) => {
    switch (status) {
      case "Success":
        return "text-green-600 bg-green-100";
      case "Processing":
        return "text-gray-600 bg-gray-100";
      case "Declined":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  // Helper function to get category styles
  const getCategoryStyles = (category) => {
    const styleMap = {
      Subscriptions: "text-blue-600 bg-blue-50 border-blue-500",
      Deposit: "text-green-600 bg-green-50 border-green-500",
      Income: "text-green-600 bg-green-50 border-green-500",
      Groceries: "text-blue-600 bg-blue-50 border-blue-500",
      Food: "text-pink-600 bg-pink-50 border-pink-500",
    };
    return styleMap[category] || "text-gray-600 bg-gray-50 border-gray-100";
  };

  // Helper function to get row styles based on merchant name
  const getRowStyles = (merchantName) => {
    if (merchantName === "Alexa Doe" || merchantName === "Fresh F&V") {
      return "bg-green-50 border-t border-b border-gray-200";
    }
    return "border-b border-gray-100 hover:bg-gray-50";
  };

  // Display active bank's info
  const activeBank = {
    name: "Chase Bank",
    balance: 2588.12,
    accountType: "savings",
  };

  return (
    <div>
      {/* Active Bank Info */}
      <div className="flex items-start justify-between mb-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center">
          <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
            <span className="font-medium text-sm">CB</span>
          </div>
          <div>
            <h3 className="text-lg font-medium pb-1">{activeBank.name}</h3>
            <span className="text-blue-500 font-bold">
              ${activeBank.balance.toLocaleString()}
            </span>
          </div>
        </div>
        <span className="text-green-600 px-3 py-1 bg-green-50 rounded-full text-sm">
          {activeBank.accountType}
        </span>
      </div>

      {/* Transaction Table */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-500 bg-blue-50 text-sm border-b border-gray-200">
              <th className="p-3 font-medium">Transaction</th>
              <th className="p-3 font-medium">Amount</th>
              <th className="p-3 font-medium">Status</th>
              <th className="p-3 font-medium">Date</th>
              <th className="p-3 font-medium">Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className={getRowStyles(transaction.merchantName)}
              >
                <td className="py-4 pl-4">
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full ${getIconBgColor(
                        transaction.merchantName
                      )} flex items-center justify-center text-white mr-3`}
                    >
                      <span>{transaction.icon}</span>
                    </div>
                    <span className="font-medium">
                      {transaction.merchantName}
                    </span>
                  </div>
                </td>
                <td
                  className={`py-4 ${
                    transaction.amount < 0 ? "text-red-500" : "text-green-500"
                  } font-medium`}
                >
                  {transaction.amount < 0 ? "-" : "+"} $
                  {Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getStatusStyles(
                      transaction.status
                    )}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current mr-1"></span>
                    {transaction.status}
                  </span>
                </td>
                <td className="py-4 text-gray-600">{transaction.date}</td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${getCategoryStyles(
                      transaction.category
                    )}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current mr-1"></span>
                    {transaction.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
