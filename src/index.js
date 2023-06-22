import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Provider랑 store(저장소) import
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
