import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const AuthContext = createContext();
const apiURL = process.env.REACT_APP_API_URL_BASE

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${apiURL}/v1/api/auth/me`,{withCredentials:true});
        setUser(res.data.user);
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
