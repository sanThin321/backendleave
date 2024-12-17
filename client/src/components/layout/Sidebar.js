import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    // Helper function to determine active route
    const isActive = (path) => location.pathname === path;

    return (
        <aside className="bg-gray-800 text-white w-64 min-h-screen  flex flex-col justify-between">
            {/* Logo */}
            <div>
                <img src="/Logo.png" alt="Logo" className="mb-12 mx-auto mt-4" />

                {/* Navigation */}
                <nav className="space-y-4">
                    <Link
                        to="/"
                        className={`flex items-center px-6 py-3  transition-all ${
                            isActive('/')
                                ? 'border-l-4  text-white'
                                : 'hover:bg-gray-700 text-[#C2C0FF]'
                        }`}
                    >
                        <span>Dashboard</span>
                    </Link>
                    <Link
                        to="/leave-history"
                        className={`flex items-center px-6 py-3 transition-all ${
                            isActive('/leave-history')
                                ? 'border-l-4  text-white'
                                : 'hover:bg-gray-700 text-[#C2C0FF]'
                        }`}
                    >
                        <span>Leave History</span>
                    </Link>
                </nav>
            </div>

            {/* Footer */}
            <div className="space-y-4">
                <button className="w-full flex items-center px-6 py-3 hover:bg-gray-700 text-[#C2C0FF] transition-all">
                    <span>Settings</span>
                </button>
                <button className="w-full flex items-center px-6 py-3  hover:bg-gray-700 text-[#C2C0FF] transition-all">
                    <span>Log out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
