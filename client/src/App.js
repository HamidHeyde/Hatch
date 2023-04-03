import React from "react";
import { Home } from "./pages/home/Home";
import { NotFound } from "./pages/notFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="appWrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
