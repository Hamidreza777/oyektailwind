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
import Webdesing from "./components/Webdesing/Webdesing.jsx";
import Ui from "./components/Ui/Ui.jsx";
import Applicaton from "./components/Application/Applicaton.jsx";
import Mohtava from "./components/Mohtava/Mohtava.jsx";
import Adds from "./components/Adds/Adds.jsx";
import Seo from "./components/Seo/Seo.jsx";
import Error from "./components/404/Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Body />} />
          <Route path="Khadamat" element={<Khadamat />} />
          <Route path="Amoozesh" element={<Amoozesh />} />
          <Route path="Call" element={<Call />} />
          <Route path="About" element={<About />} />
          <Route path="Webdesing" element={<Webdesing />} />
          <Route path="Ui" element={<Ui />} />
          <Route path="Application" element={<Applicaton />} />
          <Route path="Mohtava" element={<Mohtava />} />
          <Route path="Adds" element={<Adds />} />
          <Route path="Seo" element={<Seo />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
