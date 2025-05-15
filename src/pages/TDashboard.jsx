import React from 'react';
import Sidebar from '../components/TSidebar';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 bg-white">
        {/* Header */}
        <div className="bg-[#D9D9D9] h-[80px] flex justify-end items-center px-6 shadow">
          <div className="text-right">
            <h4 className="font-bold">Teacher Name</h4>
            <p className="text-sm text-gray-700">teacher@uetpeshawar.edu.pk</p>
          </div>
          <img src="/profile.png" alt="Profile" className="w-12 h-12 rounded-full ml-4" />
        </div>

        {/* Page Content with spacing */}
        <div className="px-12 py-8 mt-4"> {/* ✅ Added mt-4 to push below header */}
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-600 mb-6">Welcome back, Teacher name</p>

          <h2 className="text-2xl font-bold mt-8 mb-3">Recent Exams</h2>
          <table className="w-full text-left border border-collapse">
            <thead>
              <tr className="bg-[#002855] text-white">
                <th className="p-2">Subject</th>
                <th className="p-2">Exam No.</th>
                <th className="p-2">Exam Date</th>
                <th className="p-2">Total Students</th>
                <th className="p-2">Passed</th>
                <th className="p-2">Failed</th>
                <th className="p-2">View Results</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">App Development</td>
                <td className="p-2">Quiz 01</td>
                <td className="p-2">04-12-2024</td>
                <td className="p-2">50</td>
                <td className="p-2">37</td>
                <td className="p-2">13</td>
                <td className="p-2 text-blue-600 underline cursor-pointer">View</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold mt-12 mb-3">Recent Cheating Incidents</h2>
          <table className="w-full text-left border border-collapse">
            <thead>
              <tr className="bg-[#002855] text-white">
                <th className="p-2">Student Name</th>
                <th className="p-2">Registration No</th>
                <th className="p-2">Exam No</th>
                <th className="p-2">Subject</th>
                <th className="p-2">Semester</th>
                <th className="p-2">Date</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">Student 1</td>
                <td className="p-2">21pwbcsxxxx</td>
                <td className="p-2">Quiz 01</td>
                <td className="p-2">Software Engineering</td>
                <td className="p-2">5th</td>
                <td className="p-2">22-12-2024</td>
                <td className="p-2 text-blue-600 underline cursor-pointer">View Video</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
