import React, {useState, createContext, useEffect, useContext} from 'react'; 
import {useGoogleLogin, useGoogleLogout, GoogleLoginResponseOffline} from 'react-google-login';
import api from '../services/api';

export interface IUser {
    name: string;
    email: string; 
    imageUrl: string; 
    id: number;
}

export interface IAuthContext {
    isLogedIn: boolean;
    setIsLogedIn: Function;
    login: Function; 
    logout: Function;
    userProfile: IUser | null; 
    loading: boolean;
    setLoading: Function; 
}


export const authContext = createContext<IAuthContext | null>(null);



const AuthContextProvider: React.FC = ({children}) => {

    const [isLogedIn, setIsLogedIn] = useState(false); 
    const [userProfile, setUserProfile] = useState<IUser | null>(null); 

    const [loading, setLoading] = useState(false); 

  
    async function login(user: any) {

        try {
            const response = await api.post('/u', {
                name: user.profileObj.name,
                email: user.profileObj.email,
                image_url: user.profileObj.imageUrl,
            })
            console.log(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    async function logout() {

    }

    useEffect(() => {
        function checkIfUserIsAlreadyLoggedIn() {
            const user = localStorage.getItem('@proton/user');
            if (user) {
                setIsLogedIn(true); 
                setUserProfile(JSON.parse(user));
            }
        }
        checkIfUserIsAlreadyLoggedIn()
    })

    return (
        <authContext.Provider value={{login, logout, isLogedIn, setIsLogedIn, userProfile, loading, setLoading}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(authContext);
    return context
}

export default AuthContextProvider;
