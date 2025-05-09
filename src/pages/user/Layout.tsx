import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '@/context/AuthContext';
import { Navigate, Outlet } from "react-router-dom";

// interface Earnings {
// investment_earnings: string
// referral_earnings: string
// total_earnings: string
// }

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isAuthenticated } = useAuth()
  const { pathname } = useLocation()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
                  <Link to="/dashboard" className={`text-lg font-semibold ${pathname == '/dashboard' && 'p-3 rounded-xl w-fit bg-red-600'} `} onClick={toggleSidebar}><p></p> Dashboard</Link>
                  <Link to="/invest" className={`text-lg font-semibold ${pathname == '/invest' && 'p-3 rounded-xl w-fit bg-red-600'} `} onClick={toggleSidebar}>Investments</Link>
                  <Link to="/deposit" className={`text-lg font-semibold ${pathname == '/deposit' && 'p-3 rounded-xl w-fit bg-red-600'} `} onClick={toggleSidebar}>Deposit</Link>
                  <Link to="/withdraw" className={`text-lg font-semibold ${pathname == '/withdraw' && 'p-3 rounded-xl w-fit bg-red-600'} `} onClick={toggleSidebar}>Withdrawals</Link>
                  <Link to="/transfer-funds" className={`text-lg font-semibold ${pathname == '/transfer-funds' && 'p-3 rounded-xl w-fit bg-red-600'} `} onClick={toggleSidebar}>Transfer Funds</Link>
                  {/* <Link to="/history" className={`text-lg font-semibold ${pathname == '/history' && 'p-3 rounded-xl w-fit bg-red-600'} `} onClick={toggleSidebar}>History</Link> */}
                  <Link to="/profile" className={`text-lg font-semibold ${pathname == '/profile' && 'p-3 rounded-xl w-fit bg-red-600'} `} onClick={toggleSidebar}>Settings</Link>
                  <Link to="/referral" className={`text-lg font-semibold ${pathname == '/referral' && 'p-3 rounded-xl w-fit bg-red-600'} `} onClick={toggleSidebar}>Referral</Link>
                  <a href="/logout" className={`text-lg font-semibold ${pathname == '/logout' && 'p-3 rounded-xl w-fit bg-red-600'} `} >Logout</a>
            </div>
                </div>
        <div className={`transition-all duration-300 ml-0 flex-1 p-6 ${isSidebarOpen ? "ml-64" : ""}`}>
              {isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />}
        </div>
      </div>
  );
};

export default DashboardLayout;
