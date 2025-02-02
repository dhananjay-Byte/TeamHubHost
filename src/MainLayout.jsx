import "./index.css";
import React,{lazy} from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginComponent from "./Components/login";
import SignUpComponent from "./Components/signup";
import EmailVerificationHeader from "./Pages/EmailVerification/emailVerificationHeader";
import EmailPage from "./Pages/Email/emailPage";
import ChatPage from "./Pages/Chats/chatPage";
import { AuthProvider } from "./Context/authContext";
import ProtectedRoute from "./Components/protectedRoutes";
// import TaskPage from "./Pages/Tasks/taskPage";
const TaskPage = lazy(()=>import("./Pages/Tasks/taskPage"))

export default function MainLayout() {
  return (
    <>
      <AuthProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<SignUpComponent />} />
            <Route path="/email-verification" element={<EmailVerificationHeader />} />
            <Route path="/tasks" element={
              <ProtectedRoute>
                <TaskPage />
              </ProtectedRoute>
            } />
            <Route path="/chat" element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            } />
            <Route path="/mail" element={
              <ProtectedRoute>
                <EmailPage />
              </ProtectedRoute>
            } />
           
          </Routes>
        </Router>
      </AuthProvider>

    </>

  );
}