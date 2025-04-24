import { useState } from "react";
import api from "@/api";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Invest = () => {
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("Gold");
  const {user} = useAuth()
  const navigate = useNavigate()

  const handleInvest = async (e: any) => {
    e.preventDefault();
    try {
      await api.post("/api/invest/", { amount, plan });
      alert("Investment successful!");
      navigate('/dashboard')
    } catch (err) {
      console.error("Investment error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-emerald-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-green-700 mb-1">Balance: ${parseFloat(`${user.balance}`).toFixed(2)}</h2>
          <p className="text-sm text-gray-600">
            Please note that you can't invest an amount greater than your balance.
            <br />
            Go to the deposit page to add funds.
          </p>
        </div>
  
        <h2 className="text-2xl font-extrabold text-center text-emerald-600 mb-6">Invest in a Plan</h2>
  
        <form onSubmit={handleInvest}>
          <label className="block mb-2 text-sm font-medium text-gray-700">Investment Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-200 mb-4"
            onChange={(e) => setAmount(e.target.value)}
          />
  
          <label className="block mb-2 text-sm font-medium text-gray-700">Choose a Plan</label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-200 mb-6"
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="Gold">Gold (2.5% ROI)</option>
            <option value="Diamond">Diamond (2% ROI)</option>
            <option value="Bronze">Bronze (1.8% ROI)</option>
          </select>
  
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Invest
          </button>
        </form>
      </div>
    </div>
  );  
};

export default Invest;
