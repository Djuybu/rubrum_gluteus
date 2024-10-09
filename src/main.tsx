import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById("root")!).render(
  <CookiesProvider>
    <Provider store={store}>  
        <App />
    </Provider>
  </CookiesProvider>
);
