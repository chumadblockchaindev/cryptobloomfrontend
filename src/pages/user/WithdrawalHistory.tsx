import React, { useEffect, useState } from "react";
import HistoryList from "./History";
import api from "@/api";

const WithdrawalHistory: React.FC = () => {
    const [withdrawals, setWithdrawals] = useState([]);

    useEffect(() => {
        api
            .get("/api/withdrawals/notify/")
            .then((response) => setWithdrawals(response.data))
            .catch((error) => console.error("Error fetching withdrawal history", error));
    }, []);

    return <HistoryList title="Withdrawal History" historyData={withdrawals} />;
};

export default WithdrawalHistory;
