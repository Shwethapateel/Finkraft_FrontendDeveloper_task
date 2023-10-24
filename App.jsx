import React from "react";
import "./app.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Authentication/Login";
import ProtectedRoute from "./Components/ServiceRoutes/ProtectedRoute";
import Home from "./Components/Pages Folder/Home";
import About from "./Components/Pages Folder/About";
import Admin from "./Components/Admins/Admin";
let App = () =>{
    return (
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </Router>
    );
}
export default App;