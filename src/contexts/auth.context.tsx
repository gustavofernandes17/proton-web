import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export interface AuthContextData {
  isLoggedIn: boolean;
  userProfile: Object | null;
  setUserProfile: Function;
  handleLogin: Function;
  handleLogout: Function;
}

export const authContext = createContext<AuthContextData>(
  {} as AuthContextData
);

const AuthProvider: React.FC = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);

  async function handleLogin(data: any) {
    try {
      const response = await api.post("/u", {
        name: data.profileObj.name,
        email: data.profileObj.email,
        image_url: data.profileObj.imageUrl,
      });

      localStorage.setItem("@proton/user", JSON.stringify(response.data));
      setUserProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    localStorage.clear();
    setUserProfile(null);
  }
  useEffect(() => {
    const user = localStorage.getItem("@proton/user");

    if (user !== null) {
      setUserProfile(JSON.parse(user));
    }
  }, []);

  return (
    <authContext.Provider
      value={{
        isLoggedIn: !!userProfile,
        userProfile,
        setUserProfile,
        handleLogin,
        handleLogout,
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
