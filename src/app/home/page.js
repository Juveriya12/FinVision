"use client";

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">

      <h1 className="text-5xl font-bold text-[#224c87] mb-6">
        Welcome to FinVision
      </h1>

      <p className="max-w-2xl text-gray-600 mb-10 text-lg">
        FinVision helps you plan financial goals, calculate SIP investments,
        visualize portfolio growth, and generate professional financial reports.
      </p>

      <button
        onClick={() => router.push("/dashboard")}
        className="bg-[#224c87] text-white px-6 py-3 rounded-lg"
      >
        Start Planning
      </button>

    </div>

  );

}