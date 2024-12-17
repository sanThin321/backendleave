import React from 'react';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Dashboard</h1>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-8 pr-2 py-1 rounded text-black"
                    />
                    <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <BellIcon className="h-6 w-6 cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;