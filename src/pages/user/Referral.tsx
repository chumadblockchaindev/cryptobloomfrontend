import api from "@/api";
import { useState, useEffect } from "react";

const Referral = () => {
  const [loading, setLoading] = useState(false);
  
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
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold">Referral Program</h1>
      <div className="p-2">
            {checkReferralUrl(referralData.referral_link) != "None" ? (
                <>
                <div className="mt-6 bg-white p-6 shadow rounded">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700">Your Referral Link</label>
                      <input
                        type="text"
                        value={referralData.referral_link}
                        readOnly
                        className="border px-4 py-2 w-full mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Total Referrals</label>
                      <input
                        type="text"
                        value={referralData.referrals_count}
                        readOnly
                        className="border px-4 py-2 w-full mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Referral Earnings</label>
                      <input
                        type="text"
                        value={`$${referralData.referral_earnings}`}
                        readOnly
                        className="border px-4 py-2 w-full mt-1"
                      />
                    </div>
                  </div>
                </div>
                    <button
                        className="mt-2 bg-blue-500 text-white p-2 rounded-md w-full"
                        onClick={() => navigator.clipboard.writeText(referralData.referral_link)}
                    >
                        Copy Link
                    </button>
                </>
            ) : (
                <button
                    className="mt-4 bg-green-500 text-white p-2 rounded-md w-full"
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
