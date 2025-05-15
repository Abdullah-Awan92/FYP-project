import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';

const TestPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  const subject = location.state?.subject || 'Mobile App Development';
  const semester = '2024 - Fall Semester';

  return (
    <div className="min-h-screen flex flex-row bg-[#f0f2f5]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar with Back Button */}
     <div className="bg-[#CCCCFF] h-[80px] flex justify-between items-center px-6 shadow">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#2c3e50] bg-white hover:bg-[#dcdde1] border border-gray-300 px-4 py-2 rounded-full shadow transition duration-200"
      >
        <span className="text-xl">←</span>
        <span className="font-semibold text-sm">Back</span>
      </button>

      {/* User Info */}
      <div className="bg-[#CCCCFF] p-4 flex justify-end items-center ">
  <div className="text-right">
    <h4 className="font-bold">Student Name</h4>
    <p className="text-sm text-gray-700">21bcs000888@uetpeshawar.edu.pk</p>
  </div>
  <img src="/profile.png" alt="Profile" className="w-12 h-12 rounded-full ml-4" />
</div>

    </div>


        {/* Main Content */}
        <div className="w-full p-8 bg-[#f0f2f5] mt-[60px]">
          <h2 className="text-2xl text-[#2c3e50] mb-5">Subject Tests</h2>

          <div className="mt-5 bg-white p-5 border-l-4 border-[#2c3e50] rounded">
            <h3 className="mb-2.5">Exam Details</h3>
            <table className="w-full border-collapse mt-5 bg-white rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr>
                  <th className="p-3.5 text-left border-b bg-[#002855] text-white font-semibold uppercase">Subject Name</th>
                  <th className="p-3.5 text-left border-b bg-[#002855] text-white font-semibold uppercase">Exam No</th>
                  <th className="p-3.5 text-left border-b bg-[#002855] text-white font-semibold uppercase">Semester</th>
                  <th className="p-3.5 text-left border-b bg-[#002855] text-white font-semibold uppercase">Total Time</th>
                  <th className="p-3.5 text-left border-b bg-[#002855] text-white font-semibold uppercase">Date</th>
                  <th className="p-3.5 text-left border-b bg-[#002855] text-white font-semibold uppercase">Action</th>
                </tr>
                
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 border-b">{subject}</td>
                  <td className="p-3.5 border-b">1</td>
                  <td className="p-3.5 border-b">{semester}</td>
                  <td className="p-3.5 border-b">10 minutes</td>
                  <td className="p-3.5 border-b">{currentDate}</td>
                  <td className="p-3.5 border-b">
                    <button className="bg-[#27ae60] text-white border-none px-4 py-2 rounded font-medium cursor-pointer hover:bg-[#1e8449] transition-colors">
                      Start Test
                    </button>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
