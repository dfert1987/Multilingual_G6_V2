import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Banner from "./Components/Banner";
import TableSection from "./Components/TableSection";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./index.css";

ReactDOM.render(
  <HashRouter basename="/">
    <React.StrictMode>
      <AnimatePresence>
        <Banner />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/tablesection" element={<TableSection />} />
        </Routes>
      </AnimatePresence>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);
