// File 1: ViewResult.jsx (Main page with semester/subject list)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';

const ViewResult = () => {
  const navigate = useNavigate();
  const [expandedSemester, setExpandedSemester] = useState('fall2024');

  const toggleSubjects = (semesterId) => {
    setExpandedSemester(expandedSemester === semesterId ? null : semesterId);
  };

  const handleSubjectClick = (subject) => {
    navigate('/view-result-detail', { state: { subject } });
  };

  return (
    <div className="min-h-screen flex flex-row bg-[#f0f2f5]">
      <Sidebar />
      <div className="flex-1">
        {/* Top Bar */}
      <div className="bg-[#CCCCFF] p-4 flex justify-end items-center shadow">
          <div className="text-right">
            <h4 className="font-bold">Student Name</h4>
            <p className="text-sm text-gray-700">21bcs000888@uetpeshawar.edu.pk</p>
          </div>
          <img src="/profile.png" alt="Profile" className="w-12 h-12 rounded-full ml-4" />
        </div>

        <div className="w-full p-6 bg-[#f0f2f5] mt-4">
          <h2 className="text-2xl text-[#2c3e50] mb-5">View Result</h2>

          {/* Helper to render subjects with navigation */}
          {[
            {
              id: 'fall2024',
              label: '2024 – Fall Semester',
              subjects: [
                'Mobile App Development',
                'Parallel & Distributed Computing',
                'Islamic Studies',
                'Machine Learning',
                'Computer Intelligence'
              ]
            },
            {
              id: 'spring2024',
              label: '2024 – Spring Semester',
              subjects: ['Data Structures', 'Computer Networks']
            },
            {
              id: 'fall2023',
              label: '2023 – Fall Semester',
              subjects: ['Operating Systems', 'Digital Logic Design']
            }
          ].map((semester) => (
            <div key={semester.id} className="mb-4">
              <button
                className="w-full bg-[#002855] text-white p-3 text-left cursor-pointer text-base rounded"
                onClick={() => toggleSubjects(semester.id)}
              >
                {semester.label}
              </button>
              <div className={`border border-gray-300 border-t-0 ${expandedSemester === semester.id ? 'block' : 'hidden'}`}>
                {semester.subjects.map((subject) => (
                  <div
                    key={subject}
                    className="p-3 bg-white border-b border-gray-300 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSubjectClick(subject)}
                  >
                    {subject}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewResult;