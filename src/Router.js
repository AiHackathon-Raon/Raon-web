import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./views/main/MainPage";
import DetailPage from "./views/detail/DetailPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/detail" element={<DetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
