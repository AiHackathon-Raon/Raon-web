import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./views/main/MainPage";
import LoginPage from "./views/login/LoginPage";
import SignUpPage from "./views/signup/SignUpPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/signup" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
