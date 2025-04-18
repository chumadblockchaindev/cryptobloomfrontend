import React, { useState, useEffect } from 'react';
import UpdateWallet from './UpdateWallet';
import api from '@/api';

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    username: '',
    email: '',
    password: '',
  });

  const [walletData, setWalletData] = useState({
    wallet_btc: '',
    wallet_eth: '',
    wallet_usdt: ''
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('/api/user/profile/');
        console.log(res.data)
        setFormData(prev => ({
          ...prev,
          full_name: res.data.full_name,
          username: res.data.username,
          email: res.data.email,
        }));
        setWalletData(prev => ({
          ...prev,
          wallet_btc: res.data.wallet_btc,
          wallet_eth: res.data.wallet_eth,
          wallet_usdt: res.data.wallet_usdt,
        }));
      } catch (err) {
        setError('Failed to fetch profile info.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const res = await api.patch('/api/user/update-profile/', formData);

      setMessage(res.data.message || 'Profile updated successfully.');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to update profile.');
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Update Profile</h2>
  
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-indigo-300 outline-none"
          />
  
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-indigo-300 outline-none"
          />
  
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-indigo-300 outline-none"
          />
  
          <input
            type="password"
            name="password"
            placeholder="New Password (optional)"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-indigo-300 outline-none"
          />
  
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-semibold py-3 rounded-md shadow-md"
          >
            Update Profile
          </button>
  
          {message && <p className="text-green-600 text-center font-medium">{message}</p>}
          {error && <p className="text-red-600 text-center font-medium">{error}</p>}
        </form>
  
        <div className="border-t mt-8 pt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Payment Settings</h3>
          <UpdateWallet walletData={walletData} />
        </div>
      </div>
    </div>
  );
  
};

export default ProfileUpdate;
