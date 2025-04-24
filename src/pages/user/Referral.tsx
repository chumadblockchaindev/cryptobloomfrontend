import api from "@/api";
import { useState, useEffect } from "react";

const Referral = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("Copy");

  const [referralData, setReferralData] = useState({
    referral_link: "",
    referrals_count: 0,
    referral_earnings: 0,
  });

  useEffect(() => {
    fetchReferralData();
  }, []);

  const fetchReferralData = async () => {
    try {
      const response = await api.get("/api/user/referral/");
      setReferralData(response.data);
  } catch (error) {
      console.error("Error fetching referral data:", error);
  }
  };
  

  const generateReferral = async () => {
    setLoading(true);
    try {
        await api.post("/api/user/referral/", {});
    
        fetchReferralData();
    } catch (error) {
        console.error("Error generating referral link:", error);
    }
    setLoading(false);
};

function checkReferralUrl(url: string) {
  const equalSignIndex = url.lastIndexOf("=");
  return url.slice(equalSignIndex + 1);
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Referral Program</h1>
  
        {checkReferralUrl(referralData.referral_link) !== "None" ? (
          <>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Your Referral Link</label>
                <input
                  type="text"
                  value={referralData.referral_link}
                  readOnly
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Total Referrals</label>
                <input
                  type="text"
                  value={referralData.referrals_count}
                  readOnly
                  className="w-full px-4 py-3 rounded-md border border-gray-300"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Referral Earnings</label>
                <input
                  type="text"
                  value={`$${referralData.referral_earnings}`}
                  readOnly
                  className="w-full px-4 py-3 rounded-md border border-gray-300"
                />
              </div>
            </div>
  
            <button
              className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
              onClick={() => {navigator.clipboard.writeText(referralData.referral_link); setText("copied")}}
            >
             {text}
            </button>
          </>
        ) : (
          <button
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            onClick={generateReferral}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Referral Link"}
          </button>
        )}
      </div>
    </div>
  );
  
};

export default Referral;
