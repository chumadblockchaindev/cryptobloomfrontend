import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from '@/context/AuthContext';
import { Navigate, Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if(isLoading){
    return <>Loading...</>
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md">
            <button onClick={toggleSidebar} className="text-white">
              <FiMenu size={24} />
            </button>
            <div className="text-xl font-semibold">BinaryBloom</div>
            {/* Navbar right side (can be used for user profile, notifications, etc.) */}
            <div></div>
        </div>
              {/* Sidebar */}
          <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform duration-300 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
            <div className="p-4">
              <button onClick={toggleSidebar} className="text-white">
                <FiMenu size={24} />
              </button>
            </div>
                <div className="flex flex-col p-6 space-y-4 text-white">
                  <Link to="/dashboard" className="text-lg font-semibold" onClick={toggleSidebar}>Dashboard</Link>
                  <Link to="/invest" className="text-lg font-semibold" onClick={toggleSidebar}>Investments</Link>
                  <Link to="/deposit" className="text-lg font-semibold" onClick={toggleSidebar}>Deposit</Link>
                  <Link to="/withdraw" className="text-lg font-semibold" onClick={toggleSidebar}>Withdrawals</Link>
                  <Link to="/transfer-funds" className="text-lg font-semibold" onClick={toggleSidebar}>Transfer Funds</Link>
                  <Link to="/history" className="text-lg font-semibold" onClick={toggleSidebar}>History</Link>
                  <Link to="/profile" className="text-lg font-semibold" onClick={toggleSidebar}>Settings</Link>
                  <Link to="/referral" className="text-lg font-semibold" onClick={toggleSidebar}>Referral</Link>
                  <Link to="/logout" className="text-lg font-semibold" onClick={toggleSidebar}>Logout</Link>
            </div>
                </div>
        <div className={`transition-all duration-300 ml-0 flex-1 p-6 ${isSidebarOpen ? "ml-64" : ""}`}>
              {isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />}
        </div>
      </div>
  );
};

export default DashboardLayout;
