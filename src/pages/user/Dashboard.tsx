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
        setData(res.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 p-6">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome, {localStorage.getItem("full_name")}</h1>
  
      {/* Balance and Earnings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white border-t-4 border-indigo-500 shadow-xl rounded-xl p-6">
          <h2 className="text-sm text-gray-600 font-medium uppercase">Balance</h2>
          <p className="text-3xl font-bold text-indigo-700 mt-2">${Number.parseFloat(`${user.balance}`).toFixed(2)}</p>
        </div>
        <div className="bg-white border-t-4 border-green-500 shadow-xl rounded-xl p-6">
          <h2 className="text-sm text-gray-600 font-medium uppercase">Total Earnings</h2>
          <p className="text-3xl font-bold text-green-700 mt-2">${user.total_interest_earned || 0}</p>
        </div>
      </div>
  
      {/* Ongoing Investments */}
      <div className="bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Ongoing Investments</h2>
  
        {data.length > 0 ? (
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white text-sm text-left text-gray-700">
              <thead className="bg-indigo-100 text-gray-800 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Investment Plan</th>
                  <th className="px-6 py-3">Daily Earning</th>
                  <th className="px-6 py-3">Investment Amount</th>
                  <th className="px-6 py-3">Days Remaining</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.map((investment: OngoinginvestmentProp) => (
                  <tr key={investment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-indigo-700">
                      {InvestmentPlans[investment.plan - 1]} Investment
                    </td>
                    <td className="px-6 py-4 text-green-600">${investment.daily_earning}</td>
                    <td className="px-6 py-4 text-gray-800">${investment.amount}</td>
                    <td className="px-6 py-4 text-yellow-600 font-medium">
                      {7 - Math.floor((new Date().getTime() - new Date(investment.start_date).getTime()) / 86400000)} days left
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No ongoing investments</p>
        )}
      </div>
    </div>
  </div>  
  );
};

export default Dashboard;
