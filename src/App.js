import React from "react";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import ForgetPassword from "./Components/ForgetPassword";
import ResetPassword from "./Components/ResetPassword";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/signin" element={<SignIn/>} />
    <Route path="/forget-password" element={<ForgetPassword/>} />
    <Route path="/reset-password" element={<ResetPassword/>} />
    
  </Routes>
  </BrowserRouter>
 )
}

export default App;
