import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode'
import api from "@/api";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserData;
  error: string;
  loginAuth: ({ credientials }: LoginCredientials) => void;
}

export interface LoginCredientials {
  credientials : { email?: string, password?: string } 
}

interface UserData {
  full_name: string, 
  email: string,
  username: string,
  balance: number,
  wallet_btc: string;
  wallet_eth: string;
  wallet_usdt: string;
  referral_earnings: string
  investment_earnings: string
  total_earnings: string,
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>(
    {
      full_name: '',
      email: '',
      username: '',
      balance: 0,
      wallet_btc: '',
      wallet_eth: '',
      wallet_usdt: '',
      referral_earnings: '',
      investment_earnings: '',
      total_earnings: ''
    }
  )
  const[isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('');

  const getMultipleData = useCallback(async () => {
    const urls = [
      '/api/calculate/earnings/',
      '/api/user/earnings/',
      '/api/user/profile/'
    ];
  
    try {
      const responses = await Promise.all(urls.map(url => api.get(url)));
      // Actually process the responses and set state
      const [_, earningsData, profileData] = responses.map(response => response.data);
    
      // Merge the relevant data into a single user object
      const userData: UserData = {
        full_name: profileData.full_name,
        email: profileData.email,
        username: profileData.username,
        balance: profileData.balance,
        wallet_btc: profileData.wallet_btc || '',
        wallet_eth: profileData.wallet_eth || '',
        wallet_usdt: profileData.wallet_usdt || '',
        referral_earnings: earningsData.referral_earnings.toString(),
        investment_earnings: earningsData.investment_earnings.toString(),
        total_earnings: earningsData.total_earnings.toString()
      };
  
      setUser(userData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []); 

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("REFRESHTOKEN");

    if(!refreshToken) { 
      setIsAuthenticated(false)
      setIsLoading(false)
    }
    
    try {
        const res = await api.post("/api/token/refresh/", {
            refresh: refreshToken,
        });
        console.log(res)

        if (res.status === 200) {
            localStorage.setItem("ACCESSTOKEN", res.data.access)
            setIsAuthenticated(true)
            setIsLoading(false)
        }
    } catch (error) {
        setIsAuthenticated(false);
        setIsLoading(false)
    }
}

async function loginAuth ({ credientials }: LoginCredientials ) {
  setError('')
  try {
    const res = await api.post('/login/', credientials)

    if (res.status === 200){
      localStorage.setItem("ACCESSTOKEN", res.data.access);
      localStorage.setItem("REFRESHTOKEN", res.data.refresh);
      localStorage.setItem("full_name", res.data.user.full_name);
      auth()
    }
  } catch (error: any) {
    setError(error.response?.data.detail || 'Failed to login.');
    console.error(error);
  }
}

const auth = useCallback(async () => {
  const token = localStorage.getItem("ACCESSTOKEN");

  if (!token) { 
    setIsAuthenticated(false);
    return;
  }

  const decoded = jwtDecode(token);
  const tokenExpiration = decoded.exp;  
  const now = Math.floor(Date.now() / 1000);
    
  if (tokenExpiration! <= now) {
    await refreshToken();
  } else {
    setIsAuthenticated(true);
  }
}, [refreshToken]);



useEffect(() => {
  const initializeAuth = async () => {
    try {
      await auth();
      await getMultipleData();
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  initializeAuth();

}, [auth]); // Add other dependencies if used inside the effect


  return (
    <AuthContext.Provider value={{ isAuthenticated, error, loginAuth, user , isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};