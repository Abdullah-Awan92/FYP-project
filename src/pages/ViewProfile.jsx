// File: ViewProfile.jsx
import React, { useRef, useState } from 'react';
import Sidebar from '../components/sidebar';

const ViewProfile = () => {
  const fileInputRef = useRef(null);
  const [profilePic, setProfilePic] = useState('/user-286-removebg-preview.png');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
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
        </div>

        {/* Main Content */}
        <div className="w-full flex justify-center items-center p-10">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-10 border border-gray-200">
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#002855] shadow-md"
                />
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="absolute bottom-0 right-0 bg-[#002855] text-white px-2 py-1 text-xs rounded-full shadow"
                >
                  Change
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">Full Name</label>
                <div className="mt-1 p-3 bg-gray-100 rounded-lg text-gray-800">John Doe</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Registration No</label>
                <div className="mt-1 p-3 bg-gray-100 rounded-lg text-gray-800">2021-CS-123</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Semester</label>
                <div className="mt-1 p-3 bg-gray-100 rounded-lg text-gray-800">7th Semester</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <div className="mt-1 p-3 bg-gray-100 rounded-lg text-gray-800">john.doe@example.com</div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-600">Department</label>
                <div className="mt-1 p-3 bg-gray-100 rounded-lg text-gray-800">Computer Science</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
