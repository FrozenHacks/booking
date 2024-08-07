import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import CustomRouter from "./routing/CustomRouter.tsx";
import { Provider } from "react-redux";
import store from "./store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={CustomRouter} />
    </Provider>
  </React.StrictMode>
);
