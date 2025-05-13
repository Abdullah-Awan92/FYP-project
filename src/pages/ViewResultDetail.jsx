// File 2: ViewResultDetail.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';

const ViewResultDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const subject = location.state?.subject || 'Subject';

  const resultsBySubject = {
    'Mobile App Development': [
      { exam: 'Quiz 01', semester: '7th', date: '02-12-2024', marks: '10/10' },
      { exam: 'Quiz 02', semester: '7th', date: '03-12-2024', marks: '06/10' },
      { exam: 'Quiz 03', semester: '7th', date: '08-12-2024', marks: '05/10' },
    ],
    'Parallel & Distributed Computing': [
      { exam: 'Quiz 01', semester: '7th', date: '01-12-2024', marks: '08/10' },
      { exam: 'Quiz 02', semester: '7th', date: '04-12-2024', marks: '07/10' },
    ],
    'Islamic Studies': [
      { exam: 'Midterm', semester: '7th', date: '10-11-2024', marks: '09/10' },
    ],
    'Machine Learning': [
      { exam: 'Quiz 01', semester: '7th', date: '05-12-2024', marks: '06/10' },
    ],
    'Computer Intelligence': [
      { exam: 'Assignment', semester: '7th', date: '07-12-2024', marks: '07/10' },
    ],
    'Data Structures': [
      { exam: 'Quiz 01', semester: '6th', date: '01-06-2024', marks: '09/10' },
    ],
    'Computer Networks': [
      { exam: 'Quiz 01', semester: '6th', date: '05-06-2024', marks: '08/10' },
    ],
    'Operating Systems': [
      { exam: 'Midterm', semester: '5th', date: '10-10-2023', marks: '07/10' },
    ],
    'Digital Logic Design': [
      { exam: 'Final', semester: '5th', date: '15-11-2023', marks: '08/10' },
    ]
  };

  const mockResults = resultsBySubject[subject] || [];

  return (
    <div className="min-h-screen flex flex-row bg-[#f0f2f5]">
      <Sidebar />
      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-[#CCCCFF] h-[60px] flex justify-between items-center px-8 shadow w-full">
          <button
            onClick={() => navigate(-1)}
            className="text-[#2c3e50] font-medium bg-white hover:bg-[#dcdde1] border border-gray-300 px-4 py-2 rounded-full shadow transition duration-200"
          >
            ← Back
          </button>
          <div className="flex items-center">
            <span className="text-base mr-2.5 text-[#2c3e50] font-semibold">Reg No: 2021-CS-123</span>
            <img src="/user-286-removebg-preview.png" alt="Student Logo" className="w-10 h-10 rounded-full" />
          </div>
        </div>

        {/* Main Content */}
        <div className="p-10">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-2">View Result</h2>
          <p className="text-sm text-gray-500 mb-6">Click on an exam to see your scores</p>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#002855] text-white">
                <th className="p-3">Subject</th>
                <th className="p-3">Exam No</th>
                <th className="p-3">Semester</th>
                <th className="p-3">Date</th>
                <th className="p-3">Marks</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockResults.map((r, i) => (
                <tr key={i} className="border-b hover:bg-gray-100">
                  <td className="p-3">{subject}</td>
                  <td className="p-3">{r.exam}</td>
                  <td className="p-3">{r.semester}</td>
                  <td className="p-3">{r.date}</td>
                  <td className="p-3">{r.marks}</td>
                  <td className="p-3">
                    <button className="bg-[#0073E6] text-white px-4 py-1.5 rounded hover:bg-blue-600">
                      View Answers
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewResultDetail;
