import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TakeExam from './pages/TakeExam';
import TestPage from './pages/TestPage';
import ViewResult from './pages/ViewResult';
import ViewResultDetail from './pages/ViewResultDetail';
import ViewProfile from './pages/ViewProfile';
import TLogin from './pages/TLogin';
import TDashboard from './pages/TDashboard';
import CreateExam from './pages/CreateExam';
import ExamSchedule from './pages/ExamSchedule';
import ManageExams from './pages/ManageExams';
import ReviewCheating from './pages/ReviewCheating';
import StudentManagement from './pages/StudentManagement';
import ViewResults from './pages/ViewResults';

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
        <Route path="/teacher/login" element={<TLogin />} />
<Route path="/Tdashboard" element={<TDashboard />} />
<Route path="/create-exam" element={<CreateExam />} />
<Route path="/exam-schedule" element={<ExamSchedule />} />
<Route path="/manage-exams" element={<ManageExams />} />
<Route path="/review-cheating" element={<ReviewCheating />} />
<Route path="/student-management" element={<StudentManagement />} />
<Route path="/view-results" element={<ViewResults />} />
      </Routes>
    </Router>
  );
}

export default App;
