import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const LeaveApplication = () => {
    const [leaveDate, setLeaveDate] = useState('');
    const [leaveReason, setLeaveReason] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle leave application submission
        console.log('Leave application submitted:', { leaveDate, leaveReason });
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Apply for Leave</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="leaveDate" className="block text-sm font-medium text-gray-700">Date of leave:</label>
                    <input
                        type="date"
                        id="leaveDate"
                        value={leaveDate}
                        onChange={(e) => setLeaveDate(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="leaveReason" className="block text-sm font-medium text-gray-700">Reason for leave:</label>
                    <textarea
                        id="leaveReason"
                        value={leaveReason}
                        onChange={(e) => setLeaveReason(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        rows="3"
                        required
                    ></textarea>
                </div>
                {/* <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Apply Leave
                </button> */}

                <Link to="/leave-form">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Apply for Leave
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default LeaveApplication;