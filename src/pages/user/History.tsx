import React, { useEffect, useState } from "react";

interface HistoryItem {
    id: number;
    amount: number;
    end_date: string;
    is_active?: boolean;
    plan?: number;
    start_date: string;
    total_interest_earned: string;
}

interface Props {
    title: string;
    historyData: HistoryItem[];
}

const HistoryList: React.FC<Props> = ({ title, historyData }) => {
    const [filteredData, setFilteredData] = useState(historyData);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [minAmount, setMinAmount] = useState("");
    const [maxAmount, setMaxAmount] = useState("");

    useEffect(() => {
        setFilteredData(historyData)
    }, [filteredData, historyData])

    // Function to filter history data
    const filterHistory = () => {
        let filtered = historyData;

        if (startDate) {
            filtered = filtered.filter(item => new Date(item.start_date) >= new Date(startDate));
        }
        if (endDate) {
            filtered = filtered.filter(item => new Date(item.end_date) <= new Date(endDate));
        }
        if (minAmount) {
            filtered = filtered.filter(item => item.amount >= parseFloat(minAmount));
        }
        if (maxAmount) {
            filtered = filtered.filter(item => item.amount <= parseFloat(maxAmount));
        }

        setFilteredData(filtered);
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">{title}</h2>

            {/* Filter Inputs */}
            <div className="flex flex-wrap gap-4 mb-4">
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="p-2 border rounded-md"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="p-2 border rounded-md"
                />
                <input
                    type="number"
                    placeholder="Min Amount"
                    value={minAmount}
                    onChange={(e) => setMinAmount(e.target.value)}
                    className="p-2 border rounded-md"
                />
                <input
                    type="number"
                    placeholder="Max Amount"
                    value={maxAmount}
                    onChange={(e) => setMaxAmount(e.target.value)}
                    className="p-2 border rounded-md"
                />
                <button
                    onClick={filterHistory}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Apply Filters
                </button>
            </div>

            {/* Display Filtered Data */}
            <ul className="divide-y">
                {filteredData.length ? (
                    filteredData.map((item) => (
                        <li key={item.id} className="p-3">
                            <p className="text-lg font-semibold">${item.amount}</p>
                            <p className="text-sm text-gray-600">{new Date(item.end_date).toLocaleString()}</p>
                            {item.is_active && <p className="text-sm text-blue-500">Status: Active</p>}
                            {item.plan && <p className="text-sm text-green-500">Plan: {item.plan}</p>}
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">No matching records found.</p>
                )}
            </ul>
        </div>
    );
};

export default HistoryList;
