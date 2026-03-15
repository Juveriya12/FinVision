import { NextResponse } from "next/server";

export async function POST(req) {

  const data = await req.json();

  const {
    message,
    goalCost,
    years,
    inflation,
    returnRate,
    sip,
    healthScore,
    healthStatus
  } = data;

  const msg = message.toLowerCase();

  let reply = "I can help explain your financial plan or financial concepts.";

  // -------------------------------
  // SIP EXPLANATION
  // -------------------------------

  if (msg.includes("sip")) {

    reply = `
SIP stands for Systematic Investment Plan.

It means investing a fixed amount regularly into an investment such as mutual funds.

Benefits of SIP:
• Builds discipline in investing
• Takes advantage of market fluctuations
• Uses the power of compounding

In your case:

To achieve a goal value of ₹${goalCost.toLocaleString()} over ${years} years,
you would need to invest about ₹${sip.toLocaleString()} every month.
`;

  }

  // -------------------------------
  // COMPOUNDING
  // -------------------------------

  else if (msg.includes("compound") || msg.includes("compounding")) {

    reply = `
Compounding means earning returns on both your original investment and the returns already generated.

Example:

If you invest regularly and earn ${returnRate}% returns,
your money grows faster over time because each year's returns
also start generating returns.

This is why long-term investing is powerful.

Your plan assumes ${returnRate}% expected return over ${years} years.
`;

  }

  // -------------------------------
  // INFLATION
  // -------------------------------

  else if (msg.includes("inflation")) {

    reply = `
Inflation is the rise in prices over time which reduces purchasing power.

For example:

If inflation is ${inflation}%,
something costing ₹${goalCost.toLocaleString()} today will cost much more in ${years} years.

That is why financial planning must adjust goals for inflation.
`;

  }

  // -------------------------------
  // FINANCIAL HEALTH
  // -------------------------------

  else if (msg.includes("health") || msg.includes("score")) {

    reply = `
Your Financial Health Score is ${healthScore}/100.

Status: ${healthStatus}

A higher score means your investment plan is strong and achievable.
`;

  }

  // -------------------------------
  // MUTUAL FUNDS
  // -------------------------------

  else if (msg.includes("mutual fund")) {

    reply = `
A mutual fund pools money from many investors
and invests it in stocks, bonds, or other assets.

Benefits:
• Diversification
• Professional fund management
• Accessible through SIP investments
`;

  }

  // -------------------------------
  // DIVERSIFICATION
  // -------------------------------

  else if (msg.includes("diversification")) {

    reply = `
Diversification means spreading investments across different assets
like stocks, bonds, and mutual funds.

This reduces risk because poor performance of one asset
may be balanced by others.
`;

  }

  // -------------------------------
  // GOAL ANALYSIS
  // -------------------------------

  else if (msg.includes("goal") || msg.includes("plan")) {

    reply = `
Your financial goal planning summary:

Goal Cost Today: ₹${goalCost.toLocaleString()}

Investment Period: ${years} years

Expected Return: ${returnRate}%

Required Monthly SIP: ₹${sip.toLocaleString()}

Maintaining consistent SIP contributions can help achieve this goal.
`;

  }

  // -------------------------------
  // DEFAULT RESPONSE
  // -------------------------------

  else {

    reply = `
I can help you with:

• SIP investing
• Compounding
• Inflation
• Mutual funds
• Diversification
• Your financial goal plan

Try asking something like:

"What is compounding?"
"Explain SIP"
"Is my financial plan good?"
`;

  }

  return NextResponse.json({ reply });

}