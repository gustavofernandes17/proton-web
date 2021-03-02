import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";

export interface User {
  name: string;
  image_url: string;
  email: string;
}

export interface AuthContextData {
  isLoggedIn: boolean;
  userProfile: User | null;
  setUserProfile: Function;
  handleLogin: Function;
  handleLogout: Function;
  isLoading: boolean;
  setIsLoading: Function;
}

export const authContext = createContext<AuthContextData>(
  {} as AuthContextData
);

const AuthProvider: React.FC = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  async function handleLogin(data: any) {
    setIsLoading(true);
    try {
      const response = await api.post("/u", {
        name: data.profileObj.name,
        email: data.profileObj.email,
        image_url: data.profileObj.imageUrl,
      });

      localStorage.setItem("@proton/user", JSON.stringify(response.data));
      setUserProfile(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    localStorage.clear();
    setUserProfile(null);

    if (history) history.push("/");
  }

  useEffect(() => {
    setIsLoading(true);
    const user = localStorage.getItem("@proton/user");

    if (user !== null) {
      setUserProfile(JSON.parse(user));
    }
    setIsLoading(false);
  }, []);

  return (
    <authContext.Provider
      value={{
        isLoggedIn: !!userProfile,
        userProfile,
        setUserProfile,
        handleLogin,
        handleLogout,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context: AuthContextData = useContext(authContext);

  return context;
};

export default AuthProvider;
