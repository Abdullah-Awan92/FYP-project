import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';

const TakeExam = () => {
  const navigate = useNavigate();
  const [expandedSemester, setExpandedSemester] = useState('fall2024');


  const toggleSubjects = (semesterId) => {
    setExpandedSemester(expandedSemester === semesterId ? null : semesterId);
  };

  const handleSubjectClick = (subject) => {
    goToTestPage(subject);
  };

  const goToTestPage = (subject) => {
    navigate('/take-exam/test-page', { state: { subject } });
  };

  return (
    <div className="min-h-screen flex flex-row bg-[#f0f2f5]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
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
          <h2 className="text-2xl text-[#2c3e50] mb-5">Take Exam</h2>

          {/* Fall 2024 Semester */}
          <div className="mb-4">
            <button
              className="w-full bg-[#002855] text-white p-3 text-left cursor-pointer text-base rounded"
              onClick={() => toggleSubjects('fall2024')}
            >
              2024 – Fall Semester
            </button>
            <div className={`border border-gray-300 border-t-0 ${expandedSemester === 'fall2024' ? 'block' : 'hidden'}`}>
              {['Mobile App Development', 'Parallel & Distributed Computing', 'Islamic Studies', 'Machine Learning', 'Computer Intelligence'].map((subject) => (
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

          {/* Spring 2024 Semester */}
          <div className="mb-4">
            <button
              className="w-full bg-[#002855] text-white p-3 text-left cursor-pointer text-base rounded"
              onClick={() => toggleSubjects('spring2024')}
            >
              2024 – Spring Semester
            </button>
            <div className={`border border-gray-300 border-t-0 ${expandedSemester === 'spring2024' ? 'block' : 'hidden'}`}>
              {['Data Structures', 'Computer Networks'].map((subject) => (
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

          {/* Fall 2023 Semester */}
          <div className="mb-4">
            <button
              className="w-full bg-[#002855] text-white p-3 text-left cursor-pointer text-base rounded"
              onClick={() => toggleSubjects('fall2023')}
            >
              2023 – Fall Semester
            </button>
            <div className={`border border-gray-300 border-t-0 ${expandedSemester === 'fall2023' ? 'block' : 'hidden'}`}>
              {['Operating Systems', 'Digital Logic Design'].map((subject) => (
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
        </div>
      </div>
    </div>
  );
};

export default TakeExam; 