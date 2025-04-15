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
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Deposit Funds</h1>
      <form className="bg-white p-6 shadow rounded" onSubmit={handleDeposit}>
        <input
          type="number"
          placeholder="Enter amount"
          className="border p-2 w-full mb-2"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;
