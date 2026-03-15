"use client";

import GoalPlanner from "@/components/GoalPlanner";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}

      <div className="flex justify-between items-center px-10 py-4 border-b bg-white">

        <h1 className="text-2xl font-bold text-[#224c87]">
          FinVision
        </h1>

        <button className="bg-[#224c87] text-white px-4 py-2 rounded-lg">
          Logout
        </button>

      </div>

      {/* DESCRIPTION */}

      <div className="max-w-6xl mx-auto p-6">

        <p className="text-gray-600 mb-6">
          FinVision helps investors estimate the monthly investment required to achieve
          long-term financial goals. The tool adjusts goal costs for inflation and
          demonstrates how disciplined SIP investing may help accumulate the required
          corpus over time.
        </p>

        <GoalPlanner />

      </div>

    </div>
  );
}