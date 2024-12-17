import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation

const LeaveFormPage = () => {
    const navigate = useNavigate(); // React Router's useNavigate hook
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        studentId: "",
        leaveType: "",
        leaveStart: "",
        leaveEnd: "",
        reason: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate("/dashboard"); // Navigate to the dashboard
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Request for Leave</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium mb-2">Name</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                First name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor="middleName" className="block text-sm font-medium text-gray-700 mb-1">
                                Middle name
                            </label>
                            <input
                                type="text"
                                id="middleName"
                                name="middleName"
                                value={formData.middleName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
                        Student ID
                    </label>
                    <input
                        type="text"
                        id="studentId"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700 mb-1">
                        Leave Type
                    </label>
                    <select
                        id="leaveType"
                        name="leaveType"
                        value={formData.leaveType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md"
                    >
                        <option value="">Select leave type</option>
                        <option value="sick">Sick Leave</option>
                        <option value="personal">Personal Leave</option>
                        <option value="family">Family Emergency</option>
                        <option value="academic">Academic Leave</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="leaveStart" className="block text-sm font-medium text-gray-700 mb-1">
                            Leave Start
                        </label>
                        <input
                            type="date"
                            id="leaveStart"
                            name="leaveStart"
                            value={formData.leaveStart}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="leaveEnd" className="block text-sm font-medium text-gray-700 mb-1">
                            Leave End
                        </label>
                        <input
                            type="date"
                            id="leaveEnd"
                            name="leaveEnd"
                            value={formData.leaveEnd}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                        Reason for leave
                    </label>
                    <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 bg-transparent rounded-md min-h-[100px]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Request Leave
                </button>
            </form>
        </div>
    );
};

export default LeaveFormPage;
