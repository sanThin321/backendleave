import React from 'react';

const StudentProfile = ({ student }) => {
    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Student Profile</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="font-semibold">Name:</p>
                    <p>{student.name}</p>
                </div>
                <div>
                    <p className="font-semibold">Student ID:</p>
                    <p>{student.id}</p>
                </div>
                <div>
                    <p className="font-semibold">Course:</p>
                    <p>{student.course}</p>
                </div>
                <div>
                    <p className="font-semibold">Year:</p>
                    <p>{student.year}</p>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;