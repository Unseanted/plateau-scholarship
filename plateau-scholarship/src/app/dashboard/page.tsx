"use client";

import { useState } from "react";

const stats = [
  { label: "Total Users", value: "1,204" },
  { label: "Sales", value: "$23,500" },
  { label: "New Orders", value: "120" },
  { label: "Pending Student", value: "18" },
];

const recentActivities = [
  { id: 1, text: "John Doe signed up", time: "2 hours ago" },
  { id: 2, text: "Order #2345 placed", time: "4 hours ago" },
  { id: 3, text: "Server restarted", time: "6 hours ago" },
  { id: 4, text: "New product added", time: "1 day ago" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md px-6 py-8 hidden md:block">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">Admin Panel</h2>
        <ul className="space-y-4">
          {["dashboard", "profile"].map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-2 rounded-md text-lg font-medium ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {activeTab === "dashboard" ? "Admin Dashboard" : "Your Profile"}
          </h1>
          <p className="text-sm text-gray-500">Welcome back, Admin</p>
        </header>

        {/* Mobile Tab Menu */}
        <div className="md:hidden mb-6 flex gap-2 overflow-x-auto">
          {["dashboard", "profile"].map((tab) => (
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
        {activeTab === "dashboard" && (
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

        {activeTab === "profile" && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <p><strong>Name:</strong> Admin User</p>
              <p><strong>Email:</strong> admin@example.com</p>
              <p><strong>Role:</strong> Administrator</p>
              <p><strong>Joined:</strong> January 1, 2024</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
