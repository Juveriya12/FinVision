/* FUTURE VALUE WITH INFLATION */

export function calculateFutureValue(cost, inflation, years) {

  const c = Number(cost);
  const i = Number(inflation);
  const y = Number(years);

  return c * Math.pow(1 + i / 100, y);

}


/* SIP CALCULATION */

export function calculateSIP(futureValue, annualReturn, months) {

  const fv = Number(futureValue);
  const r = Number(annualReturn) / 100 / 12;
  const n = Number(months);

  const sip =
    fv /
    (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

  return sip;

}


/* YEARLY TIMELINE */

export function generateYearlyTimeline(monthlySIP, annualReturn, years) {

  const r = Number(annualReturn) / 100 / 12;

  let portfolioValue = 0;
  let totalInvested = 0;

  const data = [];

  for (let year = 1; year <= years; year++) {

    let startOfYearValue = portfolioValue;

    for (let m = 0; m < 12; m++) {

      portfolioValue = (portfolioValue + monthlySIP) * (1 + r);

      totalInvested += monthlySIP;

    }

    const investedThisYear = monthlySIP * 12;

    const interestEarned =
      portfolioValue - startOfYearValue - investedThisYear;

    const profit = portfolioValue - totalInvested;

    data.push({

      period: year,

      invested: Math.round(investedThisYear),

      interest: Math.round(interestEarned),

      totalInvested: Math.round(totalInvested),

      value: Math.round(portfolioValue),

      profit: Math.round(profit)

    });

  }

  return data;

}


/* MONTHLY TIMELINE */

export function generateMonthlyTimeline(monthlySIP, annualReturn, years) {

  const r = Number(annualReturn) / 100 / 12;

  const totalMonths = years * 12;

  let balance = 0;

  const data = [];

  for (let month = 1; month <= totalMonths; month++) {

    const deposit = monthlySIP;

    const interest = balance * r;

    balance = balance + deposit + interest;

    data.push({

      month: month,

      deposit: Math.round(deposit),

      interest: Math.round(interest),

      balance: Math.round(balance)

    });

  }

  return data;

}