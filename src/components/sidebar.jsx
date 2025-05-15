import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const linkClass = (path) =>
        `flex items-center px-8 py-4 text-lg transition-colors ${
            currentPath === path
                ? 'bg-[#003366] text-white font-semibold'
                : 'text-white hover:bg-[#003366]'
        }`;

    return (
        <div className="w-64 bg-[#002855] text-white flex flex-col justify-between py-10 sticky top-0 self-start h-screen">
            <div>
                <div className="text-center mb-12">
                    <img src='/LOGO-removebg-preview.png' alt="UET Logo" className="w-20 h-20 mx-auto" />
                </div>
                <nav className="flex flex-col gap-2">
                    <Link to="/dashboard" className={linkClass('/dashboard')}>
                        <i className="fas fa-house mr-2.5"></i>Dashboard
                    </Link>
                    <Link to="/take-exam" className={linkClass('/take-exam')}>
                        <i className="fas fa-pen mr-2.5"></i>Take Exam
                    </Link>
                    <Link to="/view-result" className={linkClass('/view-result')}>
                        <i className="fas fa-trophy mr-2.5"></i>View Result
                    </Link>
                    <Link to="/view-profile" className={linkClass('/view-profile')}>
                        <i className="fas fa-user-graduate mr-2.5"></i>Profile
                    </Link>
                </nav>
            </div>
            <div className="px-8 py-5">
                <Link to="/logout" className={linkClass('/logout')}>
                    <i className="fas fa-right-from-bracket mr-2.5"></i>Logout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;


