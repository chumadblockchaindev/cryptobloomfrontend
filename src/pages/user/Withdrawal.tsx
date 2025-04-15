import api from "@/api";
import { useState } from "react";

const Withdrawal = () => {
  const [amount, setAmount] = useState("");

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
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Withdraw Funds</h1>
      <form className="bg-white p-6 shadow rounded" onSubmit={handleWithdraw}>
        <input
          type="number"
          placeholder="Enter amount"
          className="border p-2 w-full mb-2"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default Withdrawal;
