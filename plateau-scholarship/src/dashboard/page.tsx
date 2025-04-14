// app/dashboard/page.tsx
"use client";

import { useState } from "react";

const stats = [
  { label: "Total Users", value: "1,204" },
  { label: "Sales", value: "$23,500" },
  { label: "New Orders", value: "120" },
  { label: "Pending Tasks", value: "18" },
];

const recentActivities = [
  { id: 1, text: "John Doe signed up", time: "2 hours ago" },
  { id: 2, text: "Order #2345 placed", time: "4 hours ago" },
  { id: 3, text: "Server restarted", time: "6 hours ago" },
  { id: 4, text: "New product added", time: "1 day ago" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, Admin</p>
      </header>

      {/* Tabs */}
      <div className="mb-6 flex gap-4">
        {["overview", "analytics", "settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "overview" && (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white shadow rounded-xl p-4 flex flex-col justify-between"
              >
                <span className="text-gray-500">{stat.label}</span>
                <span className="text-2xl font-semibold text-gray-800">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <ul>
              {recentActivities.map((activity) => (
                <li key={activity.id} className="border-b py-2 text-sm">
                  <span className="text-gray-700">{activity.text}</span>
                  <span className="block text-gray-400 text-xs">
                    {activity.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {activeTab === "analytics" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Analytics</h2>
          <p className="text-gray-600 text-sm">
            Placeholder for charts or analytics dashboard.
          </p>
        </div>
      )}

      {activeTab === "settings" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <p className="text-gray-600 text-sm">
            Placeholder for admin settings and preferences.
          </p>
        </div>
      )}
    </main>
  );
}
