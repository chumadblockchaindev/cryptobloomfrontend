import api from "@/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransferEarnings = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate()

  const handleTransfer = async (source: "investment" | "referral") => {
    if (!amount || parseFloat(amount) <= 0) {
      setStatus("❌ Enter a valid amount");
      return;
    }

    try {
      setLoading(true);
      setStatus("");
      await api.post("/api/transfer-earnings/", { source, amount });
      setStatus(`✅ ${source} earnings transferred successfully!`);
      setAmount("");
      navigate('/dashboard')
    } catch (err) {
      console.error("Transfer error:", err);
      setStatus("❌ Transfer failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Transfer Earnings
        </h1>

        <input
          type="number"
          min="0"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
        />

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <button
            onClick={() => handleTransfer("investment")}
            disabled={loading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Transferring..." : "Transfer Investment Earnings"}
          </button>

          <button
            onClick={() => handleTransfer("referral")}
            disabled={loading}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Transferring..." : "Transfer Referral Earnings"}
          </button>
        </div>

        {status && (
          <div className="text-center text-sm mt-2 font-medium text-gray-700 animate-pulse">
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransferEarnings;
