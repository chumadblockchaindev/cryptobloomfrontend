import api from '@/api';
import React, { useEffect, useState } from 'react'

interface Wallets {
  wallet_btc: string;
  wallet_eth: string;
  wallet_usdt: string;
}

const UpdateWallet = ({ walletData }: { walletData: Wallets }) => {
    const [wallets, setWallets] = useState({ wallet_btc: "", wallet_eth: "", wallet_usdt: "" });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

     useEffect(() => {
        setWallets(prev => ({
          ...prev,
          wallet_btc: walletData.wallet_btc,
          wallet_eth: walletData.wallet_eth,
          wallet_usdt: walletData.wallet_usdt
        }))
        setLoading(false)
      }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setWallets({ ...wallets, [e.target.name]: e.target.value }); 
    };

    const handleSubmit = async (e: React.FormEvent) => { 
        e.preventDefault(); 
        try {
            await api.patch("/api/user/update-wallets/", wallets)
            setMessage("✅ Wallets updated!"); 
        } catch (error) {
            console.error(error)
            setMessage("❌ Failed to update wallets");  
        }
    }

    if (loading) {
      return <div className="text-center py-10">Loading wallets...</div>;
    }

    return (
      <div>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-xl shadow-lg space-y-6"
        >
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">Update Crypto Wallets</h2>
    
          <div className="space-y-2">
            <label htmlFor="wallet_btc" className="block text-gray-700 font-medium">
              BTC Address
            </label>
            <input
              type="text"
              name="wallet_btc"
              placeholder="BTC Wallet Address"
              value={wallets.wallet_btc}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
    
          <div className="space-y-2">
            <label htmlFor="wallet_eth" className="block text-gray-700 font-medium">
              ETH Address
            </label>
            <input
              type="text"
              name="wallet_eth"
              placeholder="ETH Wallet Address"
              value={wallets.wallet_eth}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
    
          <div className="space-y-2">
            <label htmlFor="wallet_usdt" className="block text-gray-700 font-medium">
              USDT Address
            </label>
            <input
              type="text"
              name="wallet_usdt"
              placeholder="USDT Wallet Address"
              value={wallets.wallet_usdt}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
    
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-semibold py-3 rounded-md shadow-md"
          >
            Save Wallets
          </button>
    
          {message && (
            <p
              className={`text-sm text-center font-medium ${
                message.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    );
    
}

export default UpdateWallet

