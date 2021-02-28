import React from "react";
import Routes from "./routes";

import AuthContextProvider from "./contexts/auth.context";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes />
      </div>
    </AuthContextProvider>
  );
}

export default App;
