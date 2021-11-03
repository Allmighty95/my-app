import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <h1>React-Redux</h1>
        <div className="alert">Alert activate</div>
      </div>
    </Provider>
  );
}

export default App;
