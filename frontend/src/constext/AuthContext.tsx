
import React, { createContext, useContext, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name:string;
  avatar:string;
  email: string;
  role: string;
} 

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (data: { data: User, tokens: { accessToken: string, refreshToken: string } }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('access_token'));

  const [refreshToken, setRefreshToken] = useState<string | null>(localStorage.getItem('refresh_token'));

  const login = (data: { data: User, tokens: { accessToken: string, refreshToken: string } }) => {
    setUser(data.data);
    setAccessToken(data.tokens.accessToken);
    setRefreshToken(data.tokens.refreshToken);
    
    localStorage.setItem('user', JSON.stringify(data.data));
    localStorage.setItem('access_token', data.tokens.accessToken);
    localStorage.setItem('refresh_token', data.tokens.refreshToken); 
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.clear(); 
    
  };

  const contextValue = useMemo(() => ({
    user,
    accessToken,
    refreshToken,
    login,
    logout,
  }), [user, accessToken, refreshToken]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};