import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/sidebar';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-row bg-[#f0f2f5]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-[#CCCCFF] h-[60px] flex justify-end items-center px-8 absolute top-0 left-[20%] w-[80%] shadow">
          <span className="text-base mr-2.5 text-[#2c3e50] font-semibold">Reg No: 2021-CS-123</span>
          <img src='/user-286-removebg-preview.png' alt="Student Logo" className="w-10 h-10 rounded-full" />
        </div>

        <div className="w-full p-8 bg-[#f0f2f5] mt-[60px]">
          <h2 className="text-2xl text-[#2c3e50] mb-2.5">Welcome back, Student Name</h2>

          {/* Upcoming Exams Section */}
          <div className="mt-8">
            <div className="text-xl font-semibold mb-4 text-[#34495e]">Upcoming Exams</div>
            <div className="bg-white p-5 rounded-xl shadow-md mb-5">
              <table className="w-full border-collapse mt-2.5">
                <thead>
                  <tr>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#CCCCFF] text-[#2c3e50] font-semibold">Subject</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#CCCCFF] text-[#2c3e50] font-semibold">Exam No.</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#CCCCFF] text-[#2c3e50] font-semibold">Semester</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#CCCCFF] text-[#2c3e50] font-semibold">Scheduled Date</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#CCCCFF] text-[#2c3e50] font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">App Development</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">Quiz 02</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">5th</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">14-12-2024</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">Scheduled</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">App Development</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">Quiz 03</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">5th</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">25-12-2024</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">Scheduled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Results Section */}
          <div className="mt-8">
            <div className="text-xl font-semibold mb-4 text-[#34495e]">Recent Results</div>
            <div className="bg-white p-5 rounded-xl shadow-md">
              <table className="w-full border-collapse mt-2.5">
                <thead>
                  <tr>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#CCCCFF] text-[#2c3e50] font-semibold">Subject</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#CCCCFF] text-[#2c3e50] font-semibold">Exam No.</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#CCCCFF] text-[#2c3e50] font-semibold">Semester</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#CCCCFF] text-[#2c3e50] font-semibold">Date</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#CCCCFF] text-[#2c3e50] font-semibold">Score</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#CCCCFF] text-[#2c3e50] font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">App Development</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">Quiz 01</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">5th</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">01-12-2024</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">85/100</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">
                      <button className="px-3 py-1.5 bg-[#3498db] text-white border-none rounded cursor-pointer hover:bg-[#2980b9] transition-colors">
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">App Development</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">Quiz 01</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">5th</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">01-12-2024</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">85/100</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">
                      <button className="px-3 py-1.5 bg-[#3498db] text-white border-none rounded cursor-pointer hover:bg-[#2980b9] transition-colors">
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">App Development</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">Quiz 01</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">5th</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">01-12-2024</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">85/100</td>
                    <td className="p-3 border-b border-[#ecf0f1] bg-white">
                      <button className="px-3 py-1.5 bg-[#3498db] text-white border-none rounded cursor-pointer hover:bg-[#2980b9] transition-colors">
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 