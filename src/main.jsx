import ReactDOM from "react-dom/client";
import React, { lazy, Suspense } from "react";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";
import { BrowserRouter } from "react-router-dom";
const App = lazy(() => import("./App.jsx"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
