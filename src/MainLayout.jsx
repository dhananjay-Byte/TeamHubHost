import "./index.css";
import React, { lazy } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from "react-redux"
import { store } from "../store";
import LoginComponent from "./Components/login";
import SignUpComponent from "./Components/signup";
import EmailVerificationHeader from "./Pages/EmailVerification/emailVerificationHeader";
const Chat = lazy(()=>import("chat_app/Chats"))
import EmailPage from "./Pages/Email/emailPage";
import AddTask from "./Components/addTask";
import Sidebar from "./Components/sidebar";

export default function MainLayout() {
  return (
    <>
 
    <Toaster/>
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/register" element={<SignUpComponent/>}/>
        <Route path="/email-verification" element={<EmailVerificationHeader/>}/>
        <Route path="/add-task" element={<AddTask/>}/>
        <Route path="/chat" element={
          <Chat/>}/>
        <Route path="/mail" element={<EmailPage/>}/>
        <Route path="/tasks" element={<Sidebar/>}/>
      </Routes>
    </Router>
    </>
    
  );
}