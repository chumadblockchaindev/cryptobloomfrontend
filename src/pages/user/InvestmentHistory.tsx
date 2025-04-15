import React, { useEffect, useState } from "react";
import HistoryList from "./History";
import api from "@/api";

const InvestmentHistory: React.FC = () => {
    const [investments, setInvestments] = useState([]);

    useEffect(() => {
        api
            .get("/api/investments/")
            .then((response) => setInvestments(response.data))
            .catch((error) => console.error("Error fetching investment history", error));
    }, []);

    return <HistoryList title="Investment History" historyData={investments} />;
};

export default InvestmentHistory;
