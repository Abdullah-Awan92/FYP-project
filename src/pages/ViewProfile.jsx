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
        <div className="bg-[#CCCCFF] h-[60px] flex justify-end items-center px-8 absolute top-0 left-[20%] w-[80%] shadow">
          <span className="text-base mr-2.5 text-[#2c3e50] font-semibold">Reg No: 2021-CS-123</span>
          <img src={profilePic} alt="Student Logo" className="w-10 h-10 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="w-full flex justify-center items-center p-10 mt-[60px]">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-10 border border-gray-200">
            <h2 className="text-3xl font-bold text-[#2c3e50] text-center mb-8">My Profile</h2>

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
