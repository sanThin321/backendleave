
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import LeaveHistoryPage from './pages/LeaveHistoryPage';
import LeaveFormPage from './pages/LeaveFormPage';
import "./index.css"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leave-history" element={<LeaveHistoryPage />} />
          <Route path="/leave-form" element={<LeaveFormPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;