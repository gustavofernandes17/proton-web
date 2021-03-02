import React from "react";
import Routes from "./routes";

import AuthContextProvider from "./contexts/auth.context";

import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import EditorContextProvider from "./contexts/editor.context";

const theme = createMuiTheme({
  overrides: {
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
        padding: 0,
      },
    },
    MuiMenu: {
      list: {
        padding: 0,
      },
    },
  },
});

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <EditorContextProvider>
          <div className="App">
            <Routes />
          </div>
        </EditorContextProvider>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
