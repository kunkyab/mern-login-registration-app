import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
