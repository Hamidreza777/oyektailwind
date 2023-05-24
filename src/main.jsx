import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Khadamat from "./components/khadamat/Khadamat.jsx";
import Amoozesh from "./components/Amoozesh/Amoozesh.jsx";
import Call from "./components/Call/Call.jsx";
import About from "./components/About/About.jsx";
import Body from "./components/Body/Body.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Body/>}/>
          <Route path="Khadamat" element={<Khadamat />} />
          <Route path="Amoozesh" element={<Amoozesh />} />
          <Route path="Call" element={<Call />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
