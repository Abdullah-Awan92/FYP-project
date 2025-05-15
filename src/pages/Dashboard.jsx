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
        <div className="bg-[#CCCCFF] p-4 flex justify-end items-center shadow">
          <div className="text-right">
            <h4 className="font-bold">Student Name</h4>
            <p className="text-sm text-gray-700">21bcs000888@uetpeshawar.edu.pk</p>
          </div>
          <img src="/profile.png" alt="Profile" className="w-12 h-12 rounded-full ml-4" />
        </div>

        <div className="w-full p-6 bg-[#f0f2f5] mt-4">

          <h2 className="text-2xl text-[#2c3e50] mb-2.5">Welcome back, Student Name</h2>

          {/* Upcoming Exams Section */}
          <div className="mt-8">
            <div className="text-xl font-semibold mb-4 text-[#34495e]">Upcoming Exams</div>
            <div className="bg-white p-5 rounded-xl shadow-md mb-5">
              <table className="w-full border-collapse mt-2.5">
                <thead>
                  <tr>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#002855] text-white font-semibold">Subject</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#002855] text-white font-semibold">Exam No.</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#002855] text-white font-semibold">Semester</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#002855] text-white font-semibold">Scheduled Date</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#002855] text-white font-semibold">Status</th>
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
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#002855] text-white font-semibold">Subject</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#002855] text-white font-semibold">Exam No.</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#002855] text-white font-semibold">Semester</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#002855] text-white font-semibold">Date</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#002855] text-white font-semibold">Score</th>
                    <th className="text-left p-3 border-b border-[#ecf0f1] bg-[#002855] text-white font-semibold">Action</th>
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