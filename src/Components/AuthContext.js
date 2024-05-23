// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && token !== "undefined" && token !== "") {
      const decoded = jwtDecode(token);
      setUser({ name: decoded.nickname });
      console.log(decoded);
    }
  }, []);

  const login = (token) => {
    const decoded = jwtDecode(token);
    setUser({ name: decoded.nickname });
    localStorage.setItem("accessToken", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
