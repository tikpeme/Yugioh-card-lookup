import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Results from "../components/Results";
import ErrorPage from "../components/ErrorPage";
import Filter from "../components/Filter";
import Navigation from "../components/Navigation";
import Cardpage from "../pages/Cardpage";

function Router() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route
          path="/searched/:searchTerm"
          element={
            <Results>
              <Navigation />
            </Results>
          }
        />
        <Route path="/Card/:cardId" element={<Cardpage />} />
        <Route path="/Error/:cardName" element={<ErrorPage />} />
        <Route path="/filter/:searchTerm" element={<Filter />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Router;
