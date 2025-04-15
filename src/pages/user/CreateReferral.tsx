import React, { useState, useEffect } from "react";
import api from "@/api";

const ReferralLink: React.FC = () => {
    const [referralLink, setReferralLink] = useState("");
    const [referralsCount, setReferralsCount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchReferralData();
    }, []);

    const fetchReferralData = async () => {
        try {
            const response = await api.get("/api/user/referral/");
            setReferralLink(response.data.referral_link);
            setReferralsCount(response.data.referrals_count);
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

    return (
        <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-md">
            <h2 className="text-2xl font-semibold text-center">Referral Program</h2>
            {referralLink ? (
                <>
                    <p className="mt-4">Your Referral Link:</p>
                    <input
                        type="text"
                        value={referralLink}
                        readOnly
                        className="w-full border p-2 rounded-md"
                    />
                    <button
                        className="mt-2 bg-blue-500 text-white p-2 rounded-md w-full"
                        onClick={() => navigator.clipboard.writeText(referralLink)}
                    >
                        Copy Link
                    </button>
                    <p className="mt-4">Total Referrals: {referralsCount}</p>
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
    );
};

export default ReferralLink;
