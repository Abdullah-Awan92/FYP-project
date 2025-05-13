import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TakeExam from './pages/TakeExam';
import TestPage from './pages/TestPage';
import ViewResult from './pages/ViewResult';
import ViewResultDetail from './pages/ViewResultDetail';
import ViewProfile from './pages/ViewProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/take-exam" element={<TakeExam />} />
        <Route path="/take-exam/test-page" element={<TestPage />} />
        <Route path="/view-result" element={<ViewResult />} />
        <Route path="/view-result-detail" element={<ViewResultDetail />} />
        <Route path="/view-profile" element={<ViewProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
