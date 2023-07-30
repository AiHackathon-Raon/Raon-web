import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./views/main/MainPage";
import LoginPage from "./views/login/LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
