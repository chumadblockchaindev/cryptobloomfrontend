import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import api from "@/api";

interface OngoinginvestmentProp {
  id: number,
  plan: number,
  amount: number,
  start_date: string,
  end_date: string,
  daily_earning: string
}

const InvestmentPlans = ['Gold', 'Diamond', 'Bronze']

const Dashboard = () => {
  const [data, setData] = useState([]);

  const { user }  = useAuth()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/api/active-investments/");
        console.log(res.data)
        setData(res.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold">Welcome, {localStorage.getItem("full_name")}</h1>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className="text-xl font-bold">${Number.parseFloat(`${user.balance}`).toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Total Earnings</h2>
          <p className="text-xl font-bold">${user.total_interest_earned}</p>
        </div>
      </div>

      <div className="bg-white p-4 shadow rounded mt-6">
        <h2 className="text-lg font-semibold">Ongoing Investments</h2>
        <ul>
          {data.length > 0 ? (
            data.map((investment: OngoinginvestmentProp) => (
              <div key={investment.id}>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            Investment Plan
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Daily Earning
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Investment Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Days Remaining
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {InvestmentPlans[investment.plan-1] + "Investment" }
                            </th>
                            <td className="px-6 py-4">
                            ${investment.daily_earning}
                            </td>
                            <td className="px-6 py-4">
                            ${investment.amount}
                            </td>
                            <td className="px-6 py-4">
                            {Math.ceil((new Date().getTime() - new Date(investment.start_date).getTime()) / 86400000)} days left
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

              </div>
            ))
          ) : (
            <p>No ongoing investments</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
