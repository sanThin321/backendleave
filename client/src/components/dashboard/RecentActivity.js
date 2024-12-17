import React from 'react';

const RecentActivity = ({ activities }) => {
    return (
        <div className="bg-white shadow rounded-lg p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                        <p>You requested leave from {activity.date}</p>
                        <span className={`px-2 py-1 rounded text-sm ${activity.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                activity.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                                    'bg-yellow-100 text-yellow-800'
                            }`}>
                            {activity.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;