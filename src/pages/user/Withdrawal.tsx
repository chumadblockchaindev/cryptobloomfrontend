import api from "@/api";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Withdrawal = () => {
  const [amount, setAmount] = useState("");
  const {user} = useAuth()

  const handleWithdraw = async (e: any) => {
    e.preventDefault();
    try {
      await api.post("/api/withdrawals/notify/", { amount });
      alert("Withdrawal request sent!");
    } catch (err) {
      console.error("Withdrawal error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-indigo-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
      <div className="mb-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-1">Balance: ${parseFloat(`${user.balance}`).toFixed(2)}</h2>
          <p className="text-sm text-gray-600">
            Please note that you can't withdraw an amount greater than your balance.
          </p>
        </div>
        <h1 className="text-2xl font-extrabold text-center text-indigo-700 mb-6">Withdraw Funds</h1>
  
        <form onSubmit={handleWithdraw}>
          <label className="block mb-2 text-sm font-medium text-gray-700">Withdrawal Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200 mb-4"
            onChange={(e) => setAmount(e.target.value)}
          />
  
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Withdraw
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default Withdrawal;
