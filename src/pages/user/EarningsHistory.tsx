import React, { useEffect, useState } from "react";
import HistoryList from "./History";
import api from "@/api";

const EarningsHistory: React.FC = () => {
    const [earnings, setEarnings] = useState([]);

    useEffect(() => {
        api
            .get("/api/earnings/")
            .then((response) => setEarnings(response.data))
            .catch((error) => console.error("Error fetching earnings history", error));
    }, []);

    return <HistoryList title="Earnings History" historyData={earnings} />;
};

export default EarningsHistory;
