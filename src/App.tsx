import React from 'react';

import Login from './auth/Login'
import Explore from './app/Explorer';
import Explanations from './app/Explanations'; 
import Viewer from './app/Viewer';

import Editor from './app/Editor'; 


function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;
