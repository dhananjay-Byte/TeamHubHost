import React from "react"
import ReactDOM from "react-dom/client";
import "./index.css";

import MainLayout from "host/MainLayout";
import { Provider } from "react-redux";
import { store } from "../store";
const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(
    <Provider store={store}>
      <MainLayout/>
    </Provider>)