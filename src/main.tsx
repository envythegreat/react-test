import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./assets/scss/core.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
