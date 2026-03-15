"use client";

import { useState, useEffect } from "react";

import GrowthChart from "./GrowthChart";
import PieChartTemp from "./PieChartTemp";
import InvestmentTable from "./InvestmentTable";
import exportPDF from "./ExcelExport";
import ChatBot from "./ChatBot";

import {
  calculateFutureValue,
  calculateSIP,
  generateYearlyTimeline,
  generateMonthlyTimeline
} from "@/utils/financialCalculations";

import { calculateHealthScore } from "@/utils/healthScore";

export default function GoalPlanner() {

  const [goalCost, setGoalCost] = useState(1000000);
  const [years, setYears] = useState(15);
  const [inflation, setInflation] = useState(8);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const [futureValue, setFutureValue] = useState(0);
  const [monthlySIP, setMonthlySIP] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [profit, setProfit] = useState(0);

  const [timelineType, setTimelineType] = useState("yearly");

  const [yearlyData, setYearlyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");

  useEffect(() => {

    const fv = calculateFutureValue(goalCost, inflation, years);

    const months = years * 12;

    const sip = calculateSIP(fv, expectedReturn, months);

    const yearlyTimeline = generateYearlyTimeline(
      sip,
      expectedReturn,
      years
    );

    const monthlyTimeline = generateMonthlyTimeline(
      sip,
      expectedReturn,
      years
    );

    const invested = sip * months;

    setFutureValue(Math.round(fv));
    setMonthlySIP(Math.round(sip));
    setTotalInvested(Math.round(invested));
    setProfit(Math.round(fv - invested));

    setYearlyData(yearlyTimeline);
    setMonthlyData(monthlyTimeline);

    const health = calculateHealthScore(years, sip, fv);

    setScore(health.score);
    setStatus(health.status);

  }, [goalCost, years, inflation, expectedReturn]);



  const applyGoalTemplate = (goal) => {

    setSelectedGoal(goal);

    if (goal === "education") {
      setGoalCost(1000000);
      setYears(15);
      setInflation(8);
      setExpectedReturn(12);
    }

    if (goal === "wedding") {
      setGoalCost(2000000);
      setYears(10);
      setInflation(7);
      setExpectedReturn(11);
    }

    if (goal === "retirement") {
      setGoalCost(10000000);
      setYears(25);
      setInflation(6);
      setExpectedReturn(10);
    }

    if (goal === "home") {
      setGoalCost(5000000);
      setYears(20);
      setInflation(7);
      setExpectedReturn(11);
    }

  };



  const summaryData = {
    goalCost,
    years,
    inflation,
    expectedReturn,
    futureValue,
    monthlySIP,
    totalInvested,
    profit
  };



  const timelineData =
    timelineType === "yearly"
      ? yearlyData
      : monthlyData;



  return (

    <div className="space-y-10">


      {/* GOAL BUTTONS */}

      <div className="flex gap-3 flex-wrap">

        <button
          onClick={() => applyGoalTemplate("education")}
          className={`px-4 py-2 rounded-lg border transition
          ${selectedGoal === "education"
            ? "bg-[#224c87] text-white"
            : "bg-white hover:bg-gray-100"}`}
        >
          Education
        </button>

        <button
          onClick={() => applyGoalTemplate("wedding")}
          className={`px-4 py-2 rounded-lg border transition
          ${selectedGoal === "wedding"
            ? "bg-[#224c87] text-white"
            : "bg-white hover:bg-gray-100"}`}
        >
          Wedding
        </button>

        <button
          onClick={() => applyGoalTemplate("retirement")}
          className={`px-4 py-2 rounded-lg border transition
          ${selectedGoal === "retirement"
            ? "bg-[#224c87] text-white"
            : "bg-white hover:bg-gray-100"}`}
        >
          Retirement
        </button>

        <button
          onClick={() => applyGoalTemplate("home")}
          className={`px-4 py-2 rounded-lg border transition
          ${selectedGoal === "home"
            ? "bg-[#224c87] text-white"
            : "bg-white hover:bg-gray-100"}`}
        >
          Home
        </button>

      </div>



      {/* INPUT + SUMMARY */}

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border rounded-xl p-6 bg-white">

          <h2 className="text-lg font-semibold text-[#224c87] mb-4">
            Goal Inputs
          </h2>

          <div className="space-y-4">

            <div>
              <label>Goal Cost</label>
              <input
                type="number"
                value={goalCost}
                onChange={(e) => setGoalCost(Number(e.target.value))}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label>Years</label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label>Inflation %</label>
              <input
                type="number"
                value={inflation}
                onChange={(e) => setInflation(Number(e.target.value))}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label>Expected Return %</label>
              <input
                type="number"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full border p-2 rounded"
              />
            </div>

          </div>

        </div>



        {/* SUMMARY */}

        <div className="border rounded-xl p-6 bg-white">

          <h2 className="text-lg font-semibold text-[#224c87] mb-4">
            Investment Summary
          </h2>

          <div className="space-y-4">

            <div className="border p-3 rounded">
              Future Goal Cost
              <div className="font-semibold">
                ₹{futureValue.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="border p-3 rounded">
              Monthly SIP
              <div className="font-semibold">
                ₹{monthlySIP.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="border p-3 rounded">
              Total Invested
              <div className="font-semibold">
                ₹{totalInvested.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="border p-3 rounded text-green-600 font-semibold">
              Estimated Profit
              <div>
                ₹{profit.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="border p-3 rounded bg-gray-50">
              Financial Health Score
              <div className="font-semibold">
                {score} / 100 ({status})
              </div>
            </div>

          </div>

        </div>

      </div>



      {/* CHARTS */}

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border rounded-xl p-6 bg-white">

          <h2 className="text-lg font-semibold text-[#224c87] mb-4">
            Investment Growth
          </h2>

          <GrowthChart data={yearlyData} />

        </div>

        <div className="border rounded-xl p-6 bg-white">

          <h2 className="text-lg font-semibold text-[#224c87] mb-4">
            Investment Distribution
          </h2>

          <div id="pieChartContainer">
  <PieChartTemp
    invested={totalInvested}
    returns={profit}
  />
</div>

        </div>

      </div>



      {/* TIMELINE */}

      <div className="border rounded-xl p-6 bg-white">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-lg font-semibold text-[#224c87]">
            Investment Timeline
          </h2>

          <div className="flex gap-3">

            <select
              value={timelineType}
              onChange={(e) => setTimelineType(e.target.value)}
              className="border px-3 py-1 rounded"
            >
              <option value="yearly">Yearly</option>
              <option value="monthly">Monthly</option>
            </select>

            <button
              onClick={() =>
                exportPDF(summaryData, yearlyData, "Yearly", selectedGoal)
              }
              className="bg-[#224c87] text-white px-3 py-1 rounded"
            >
              Download Yearly
            </button>

            <button
              onClick={() =>
                exportPDF(summaryData, monthlyData, "Monthly", selectedGoal)
              }
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Download Monthly
            </button>

          </div>

        </div>

        <InvestmentTable
          data={timelineData}
          type={timelineType}
        />

      </div>



      {/* DISCLAIMER */}

      <div className="text-xs text-gray-500 mt-10 border-t pt-4">

        This tool has been designed for information purposes only.
        Actual results may vary depending on various factors involved
        in capital market. Investor should not consider above as a
        recommendation for any schemes of HDFC Mutual Fund.
        Past performance may or may not be sustained in future and
        is not a guarantee of any future returns.

      </div>



      {/* FLOATING CHATBOT */}

      <ChatBot
        goalCost={goalCost}
        years={years}
        inflation={inflation}
        returnRate={expectedReturn}
        sip={monthlySIP}
        healthScore={score}
        healthStatus={status}
      />

    </div>

  );

}