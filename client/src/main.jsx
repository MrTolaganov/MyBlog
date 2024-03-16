import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { persistor, store } from "./redux/store.js";
import ThemeProvider from "./components/ThemeProvider.jsx";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>
);
