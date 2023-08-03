import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./views/main/MainPage";
import WritingPage from "./views/writing/WritingPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/Writing" element={<WritingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
