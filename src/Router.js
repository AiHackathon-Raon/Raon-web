import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./views/main/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
