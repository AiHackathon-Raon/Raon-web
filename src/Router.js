import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./views/main/MainPage";
import LoginPage from "./views/login/LoginPage";
import SignUpPage from "./views/signup/SignUpPage";
import WritingPage from "./views/writing/WritingPage";
import DetailPage from "./views/detail/DetailPage";
import ProfilePage from "./views/profile/ProfilePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/main" element={<MainPage />}></Route>
        <Route exact path="/" element={<LoginPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/signup" element={<SignUpPage />}></Route>
        <Route exact path="/Writing" element={<WritingPage />}></Route>
        <Route exact path="/detail" element={<DetailPage />}></Route>
        <Route exact path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
