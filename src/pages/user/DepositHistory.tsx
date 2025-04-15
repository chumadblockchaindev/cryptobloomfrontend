import React, { useEffect, useState } from "react";
import HistoryList from "./History";
import api from "@/api";

const DepositHistory: React.FC = () => {
    const [deposits, setDeposits] = useState([]);

    useEffect(() => {
            api.get("/api/deposits")
            .then((response) => setDeposits(response.data))
            .catch((error) => console.error("Error fetching deposit history", error));
    }, []);

    return <HistoryList title="Deposit History" historyData={deposits} />;
};

export default DepositHistory;

