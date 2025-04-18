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
        <div className="bg-white p-6 shadow-xl rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">{title}</h2>
      
          {/* Filter Section */}
          <div className="flex flex-wrap gap-4 mb-6">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="number"
              placeholder="Min Amount"
              value={minAmount}
              onChange={(e) => setMinAmount(e.target.value)}
              className="p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="number"
              placeholder="Max Amount"
              value={maxAmount}
              onChange={(e) => setMaxAmount(e.target.value)}
              className="p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <button
              onClick={filterHistory}
              className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-md shadow-md"
            >
              Apply Filters
            </button>
          </div>
      
          {/* History List */}
          <ul className="divide-y divide-gray-100">
            {filteredData.length ? (
              filteredData.map((item) => (
                <li
                  key={item.id}
                  className="py-4 px-3 hover:bg-gray-50 transition rounded-md"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        ${item.amount}
                      </p>
                      <p className="text-sm text-gray-500">
                        Start: {new Date(item.start_date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        End: {new Date(item.end_date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      {item.plan && (
                        <p className="text-sm text-green-600 font-medium">
                          Plan: {item.plan}
                        </p>
                      )}
                      {item.is_active && (
                        <p className="text-sm text-blue-500 font-medium">
                          Status: Active
                        </p>
                      )}
                      <p className="text-xs text-gray-500 italic">
                        Earned: ${item.total_interest_earned}
                      </p>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500 py-6">
                No matching records found.
              </p>
            )}
          </ul>
        </div>
      );
      
};

export default HistoryList;
