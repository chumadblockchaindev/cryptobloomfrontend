import React, { createContext, useContext, useEffect, useState } from "react";
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
  balance: number,
  total_interest_earned: string
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>({full_name: '', balance: 0, total_interest_earned: ''})
  const[isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('');

  useEffect(() => {
    auth().catch(() => setIsAuthenticated(false))
}, [isAuthenticated, setIsAuthenticated])


useEffect(() => {
  const fetchProfile = async () => {
    try {
      const res1 = await api.get("/api/user/earnings/");
      const res = await api.get('/api/user/profile/');
      setUser({...user, full_name: res.data.full_name, balance: res.data.balance, total_interest_earned: res1.data.total_earnings})
    } catch (err) {
      console.error(err);
    }
  };

  fetchProfile();
}, [isAuthenticated]);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("REFRESHTOKEN");
    
    try {
        const res = await api.post("/api/token/refresh/", {
            refresh: refreshToken,
        });
        if (res.status === 200) {
            localStorage.setItem("ACCESSTOKEN", res.data.access)
            setIsAuthenticated(true)
            setIsLoading(false)
        } else {
            setIsAuthenticated(false)
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
    setError(error.response?.data.detail || 'Failed to update profile.');
    console.error(error);
  }
}

  const auth = async () => {
    const token = localStorage.getItem("ACCESSTOKEN")

    if(!token) { 
      setIsAuthenticated(false)
      setIsLoading(false)
      return
    }
  
    const decoded = jwtDecode (token)
    const tokenExpiration = decoded.exp  
    const now = Date.now() / 1000

    if(tokenExpiration! < now) {
      await refreshToken()
    } else {
      setIsAuthenticated(true)
      setIsLoading(false)
    }
  }

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