import api from "@/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Deposit = () => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate()


  const handleDeposit = async (e: any) => {
    e.preventDefault();
    if (amount === '') return

    try {
      await api.post("/api/deposits/", { amount });
      alert("Deposit Pending, Choose Deposit Method!");
      navigate("/crypto-wallet", { state: { amount }, replace: true })
    } catch (err) {
      console.error("Deposit error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-6">
    <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
      <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">Deposit Funds</h1>
      <form onSubmit={handleDeposit}>
        <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-2">
          Enter Deposit Amount
        </label>
        <input
          type="number"
          id="amount"
          placeholder="e.g. 100"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 mb-4"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  </div>
  );
};

export default Deposit;
