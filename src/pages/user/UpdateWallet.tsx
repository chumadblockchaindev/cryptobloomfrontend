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
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow space-y-4"> 
    <h2 className="text-lg font-semibold">Update Crypto Wallets</h2>
    <div>
      <label htmlFor="wallet_btc">BTC Address</label>
      <input
      type="text"
      name="wallet_btc"
      placeholder="BTC Wallet Address"
      value={wallets.wallet_btc}
      onChange={handleChange}
      className="w-full p-2 border rounded"
    />
    </div>
 
    <div>
      <label htmlFor="wallet_eth">ETH Address</label>
      <input
      type="text"
      name="wallet_eth"
      placeholder="ETH Wallet Address"
      value={wallets.wallet_eth}
      onChange={handleChange}
      className="w-full p-2 border rounded"
    />
    </div>
  
    <div>
      <label htmlFor="wallet_usdt">USDT Address</label>
      <input
      type="text"
      name="wallet_usdt"
      placeholder="USDT Wallet Address"
      value={wallets.wallet_usdt}
      onChange={handleChange}
      className="w-full p-2 border rounded"
    />
    </div>
  
  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
    Save Wallets
  </button>

  {message && <p className="text-sm text-gray-600">{message}</p>}
</form>
    </div>
  )
}

export default UpdateWallet

