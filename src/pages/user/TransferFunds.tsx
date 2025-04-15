import api from "@/api";
import { useState } from "react";

const TransferEarnings = () => {
  const [amount, setAmount] = useState("")
  const handleTransfer = async (source: string) => {
    if (amount == '') {
      alert("Invalid amount")
      return
    } 

    try {
      await api.post("/api/transfer-earnings/", { source, amount });
      alert(`${source} earnings transferred!`);
    } catch (err) {
      console.error("Transfer error:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Transfer Earnings</h1>
      <input type="text" value={amount} className="py-3 px-7 border-2 border-amber-600 rounded-3xl" placeholder="amount" onChange={(e) => setAmount(e.target.value)} />
      <button
        onClick={() => handleTransfer("investment")}
        className="bg-blue-500 text-white px-4 py-2 rounded m-2"
      >
        Transfer Investment Earnings
      </button>
      <button
        onClick={() => handleTransfer("referral")}
        className="bg-green-500 text-white px-4 py-2 rounded m-2"
      >
        Transfer Referral Earnings
      </button>
    </div>
  );
};

export default TransferEarnings;
