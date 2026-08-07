import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { Splash } from './pages/Splash';
import { Welcome } from './pages/Welcome';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { LanguageSelection } from './pages/LanguageSelection';
import { Dashboard } from './pages/Dashboard';
import { CreateCase } from './pages/CreateCase';
import { DocumentScanner } from './pages/DocumentScanner';
import { OcrVerification } from './pages/OcrVerification';
import { Workflow } from './pages/Workflow';
import { TaskDetail } from './pages/TaskDetail';
import { Assistant } from './pages/Assistant';
import { Vault } from './pages/Vault';
import { Notifications } from './pages/Notifications';
import { Settings } from './pages/Settings';
import { CaseComplete } from './pages/CaseComplete';

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/language" element={<LanguageSelection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/case/new" element={<CreateCase />} />
          <Route path="/scan" element={<DocumentScanner />} />
          <Route path="/verify" element={<OcrVerification />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/task/:taskId" element={<TaskDetail />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/complete" element={<CaseComplete />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>);

}