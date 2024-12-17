import React from 'react';
import StudentProfile from '../components/dashboard/StudentProfile';
import LeaveApplication from '../components/dashboard/LeaveApplication';
import RecentActivity from '../components/dashboard/RecentActivity';

const Dashboard = () => {
    const student = {
        name: 'Jigme Namgyel',
        id: '12230074',
        course: 'SIDD',
        year: 'Second Year'
    };

    const activities = [
        { date: '17th sep-19th sep', status: 'Pending' },
        { date: '13th sep-14th sep', status: 'Approved' },
        { date: '11th sep-12th sep', status: 'Rejected' },
        { date: '4th sep-6th sep', status: 'Approved' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StudentProfile student={student} />
            <LeaveApplication />
            <div className="md:col-span-2">
                <RecentActivity activities={activities} />
            </div>
        </div>
    );
};

export default Dashboard;