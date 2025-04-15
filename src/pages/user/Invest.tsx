import { useState } from "react";
import api from "@/api";
import { useAuth } from "@/context/AuthContext";

const Invest = () => {
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("Gold");
  const {user} = useAuth()

  const handleInvest = async (e: any) => {
    e.preventDefault();
    try {
      await api.post("/api/invest/", { amount, plan });
      alert("Investment successful!");
    } catch (err) {
      console.error("Investment error:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div style={{padding: 3}}>
        <h2 className="font-semibold text-xl text-start text-danger">Balance: ${user.balance}</h2>
        <p>Please note that you can't invest an amount greater than your balance. Go to deposit page to add funds</p>
      </div>
      <h2 className="text-xl font-bold">Invest in a Plan</h2>
      <form className="bg-white p-6 shadow rounded" onSubmit={handleInvest}>
        <input
          type="number"
          placeholder="Enter amount"
          className="border p-2 w-full mb-2"
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="border p-2 w-full mb-2"
          onChange={(e) => setPlan(e.target.value)}
        >
          <option value="Gold">Gold (2.5% ROI)</option>
          <option value="Diamond">Diamond (2% ROI)</option>
          <option value="Bronze">Bronze (1.8% ROI)</option>
        </select>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Invest
        </button>
      </form>
    </div>
  );
};

export default Invest;
