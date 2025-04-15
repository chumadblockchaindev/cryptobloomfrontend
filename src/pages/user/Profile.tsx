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
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="New Password (optional)"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>

        {message && <p className="text-green-600 text-center">{message}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}
      </form>
      <h2>Payment Settings</h2>
      <UpdateWallet walletData={walletData} />
    </div>
  );
};

export default ProfileUpdate;
