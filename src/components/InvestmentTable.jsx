export default function InvestmentTable({ data = [], type = "yearly" }) {

  if (!data || data.length === 0) {
    return (
      <div className="text-gray-500 p-4">
        No data available
      </div>
    );
  }

  /* MONTHLY TABLE */

  if (type === "monthly") {

    return (

      <table className="w-full text-sm border">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-2 text-center">Month</th>
            <th className="p-2 text-center">Amount Deposited</th>
            <th className="p-2 text-center">Interest Earned</th>
            <th className="p-2 text-center">Month End Balance</th>

          </tr>

        </thead>

        <tbody>

          {data.map((row, i) => {

            const deposit = row.deposit ?? 0
            const interest = row.interest ?? 0
            const balance = row.balance ?? 0

            return (

              <tr key={i} className="border-t">

                <td className="p-2 text-center">
                  {row.month ?? i + 1}
                </td>

                <td className="p-2 text-center">
                  ₹{deposit.toLocaleString("en-IN")}
                </td>

                <td className="p-2 text-center text-green-600">
                  ₹{interest.toLocaleString("en-IN")}
                </td>

                <td className="p-2 text-center">
                  ₹{balance.toLocaleString("en-IN")}
                </td>

              </tr>

            );

          })}

        </tbody>

      </table>

    );

  }

  /* YEARLY TABLE */

  return (

    <table className="w-full text-sm border">

      <thead className="bg-gray-100">

        <tr>

          <th className="p-2 text-center">Year</th>
          <th className="p-2 text-center">Invested This Year</th>
          <th className="p-2 text-center">Interest Earned</th>
          <th className="p-2 text-center">Total Invested</th>
          <th className="p-2 text-center">Portfolio Value</th>
          <th className="p-2 text-center">Profit</th>

        </tr>

      </thead>

      <tbody>

        {data.map((row, i) => {

          const invested = row.invested ?? row.investedThisYear ?? 0
          const interest = row.interest ?? 0
          const totalInvested = row.totalInvested ?? 0
          const value = row.value ?? row.portfolioValue ?? 0
          const profit = row.profit ?? (value - totalInvested)

          return (

            <tr key={i} className="border-t">

              <td className="p-2 text-center">
                {row.period ?? row.year ?? i + 1}
              </td>

              <td className="p-2 text-center">
                ₹{invested.toLocaleString("en-IN")}
              </td>

              <td className="p-2 text-center text-green-600">
                ₹{interest.toLocaleString("en-IN")}
              </td>

              <td className="p-2 text-center">
                ₹{totalInvested.toLocaleString("en-IN")}
              </td>

              <td className="p-2 text-center">
                ₹{value.toLocaleString("en-IN")}
              </td>

              <td className="p-2 text-center text-green-600 font-semibold">
                ₹{profit.toLocaleString("en-IN")}
              </td>

            </tr>

          );

        })}

      </tbody>

    </table>

  );

}