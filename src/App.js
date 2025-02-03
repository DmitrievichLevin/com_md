import "./App.css";
import { useState } from "react";
import useCodeTheme from "./hooks/useCodeTheme";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import routeConfig from "./pages/routeConfig";

function App() {
  const [isWasmLoaded, setIsWasmLoaded] = useState(false);
  const [wasmResult, setWasmResult] = useState(null);
  useCodeTheme();
  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.map((props) => (
          <Route exact {...props} key={props?.name} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
