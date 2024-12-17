import React from 'react';
import LeaveHistory from '../components/leaveHistory/LeaveHistory';

const LeaveHistoryPage = () => {
    const leaveHistory = [
        { date: '17th sep-19th sep', reason: 'Family event', status: 'Pending' },
        { date: '13th sep-14th sep', reason: 'Medical appointment', status: 'Approved' },
        { date: '11th sep-12th sep', reason: 'Personal reasons', status: 'Rejected' },
        { date: '4th sep-6th sep', reason: 'Attending a workshop', status: 'Approved' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">Leave History</h1>
            <LeaveHistory leaveHistory={leaveHistory} />
        </div>
    );
};

export default LeaveHistoryPage;