import React from 'react';

import Login from './auth/Login'
import Explore from './app/Explorer';
import Explanations from './app/Explanations'; 
import Viewer from './app/Viewer';

import Editor from './app/Editor'; 

import Routes from './routes';

import AuthContextProvider from './contexts/auth.context' 

function App() {
  return (
    <div className="App">
        <AuthContextProvider>
            <Routes />
        </AuthContextProvider>
    </div>
  );
}

export default App;
