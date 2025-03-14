// components/dashboard/BudgetTracker.jsx
"use client";

import { useState } from "react";
import { MoreVertical, Monitor, ShoppingBag, BarChart3 } from "lucide-react";

export default function BudgetTracker() {
  const [budgets, setBudgets] = useState([
    {
      id: 1,
      category: "Subscriptions",
      icon: <Monitor className="w-5 h-5 text-blue-500" />,
      remaining: 25,
      backgroundColor: "bg-blue-50",
      progressColor: "bg-blue-500",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      category: "Food and booze",
      icon: <ShoppingBag className="w-5 h-5 text-pink-500" />,
      remaining: 120,
      backgroundColor: "bg-pink-50",
      progressColor: "bg-pink-500",
      textColor: "text-pink-600",
    },
    {
      id: 3,
      category: "Savings",
      icon: <BarChart3 className="w-5 h-5 text-green-500" />,
      remaining: 50,
      backgroundColor: "bg-green-50",
      progressColor: "bg-green-500",
      textColor: "text-green-600",
    },
  ]);

  const getIconBackgroundClass = (budgetId) => {
    switch (budgetId) {
      case 1:
        return "bg-blue-200";
      case 2:
        return "bg-pink-200";
      case 3:
        return "bg-green-200";
      default:
        return "bg-gray-200";
    }
  };

  const getProgressBackgroundColor = (budgetId) => {
    switch (budgetId) {
      case 1: // Subscriptions
        return "bg-blue-100";
      case 2: // Food and booze
        return "bg-pink-100";
      case 3: // Savings
        return "bg-green-100";
      default:
        return "bg-gray-50";
    }
  };

  return (
    <div className="p-1 bg-white rounded-lg border-t border-gray-200 pt-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">My budgets</h3>
        <button className="text-gray-400">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-4">
        {budgets.map((budget) => (
          <div
            key={budget.id}
            className={`p-4 rounded-lg ${budget.backgroundColor} flex items-center justify-center`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${getIconBackgroundClass(
                budget.id
              )}`}
            >
              {budget.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">
                  {budget.category}
                </span>
                <span className={`text-right font-medium ${budget.textColor}`}>
                  ${budget.remaining} left
                </span>
              </div>
              <div
                className={`w-full ${getProgressBackgroundColor(
                  budget.id
                )} rounded-full h-2`}
              >
                <div
                  className={`${budget.progressColor} h-2 rounded-full`}
                  style={{
                    width:
                      budget.id === 1 ? "60%" : budget.id === 2 ? "74%" : "82%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
