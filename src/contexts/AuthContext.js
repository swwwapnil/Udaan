// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import auth from '../services/auth'; // your axios wrapper

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => localStorage.getItem('token'));

  const login = async (credentials) => {
    const data = await auth.login(credentials);
    setAuthToken(data.token);
    return data;
  };

  const logout = () => {
    auth.logout();
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
