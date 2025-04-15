import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from "./pages/user/Dashboard";
import Layout from "./pages/Layout";
import DashboardLayout from "./pages/user/Layout";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Deposit from "./pages/user/Deposit";
import Profile from "./pages/user/Profile";
import Referral from "./pages/user/Referral";
import Withdrawal from "./pages/user/Withdrawal";
import Invest from "./pages/user/Invest";
import TransferEarnings from "./pages/user/TransferFunds";
import CryptoWallet from "./pages/user/CryptoWallet";
import DepositHistory from "./pages/user/DepositHistory";
import WithdrawalHistory from "./pages/user/WithdrawalHistory";
import EarningsHistory from "./pages/user/EarningsHistory";
import InvestmentHistory from "./pages/user/InvestmentHistory";

const App = () => {

  function Logout () {
    localStorage.clear()
    return <Navigate to="/login" />
  }

  return (
  <div>
      {/* Page Routes */}
      <Routes>        
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} /> 

        {/* Protected Route for Users */}
        <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/deposit" element={<Deposit/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/referral" element={<Referral/>} />
            <Route path="/withdraw" element={<Withdrawal/>} />
            <Route path="/invest" element={<Invest/>} />
            <Route path="/deposit-history" element={<DepositHistory/>} />
            <Route path="/withdraw-history" element={<WithdrawalHistory/>} />
            <Route path="/earning-history" element={<EarningsHistory/>} />
            <Route path="/invest-history" element={<InvestmentHistory/>} />
            <Route path="/transfer-funds" element={<TransferEarnings/>} />
            <Route path="/crypto-wallet" element={<CryptoWallet/>} />
        </Route>

        {/* Unprotected Routes for public */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/product" element={<Layout><Products /></Layout>} />
        <Route path="/logout" element={<Layout><Logout /></Layout>} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </div>
  )
}

export default App