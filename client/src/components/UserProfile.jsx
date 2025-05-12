import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const theme = useSelector((state) => state.theme.theme); // Get the current theme from Redux store

    // Sample user data (dummy data)
    const [userDetails, setUserDetails] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        work: 'Software Engineer',
        profileImage: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1747028750~exp=1747032350~hmac=a0470f5170cd533d71a0d73e9fed00bec6a07676a500e28cd12a117a39dcec5d&w=1380', // default image
    });

    const [updatedDetails, setUpdatedDetails] = useState(userDetails);

    // Toggle edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Handle changes in form input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedDetails({
            ...updatedDetails,
            [name]: value,
        });
    };

    // Handle profile image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUpdatedDetails({
                    ...updatedDetails,
                    profileImage: reader.result, // save base64 encoded image
                });
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle edit button
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Handle save button
    const handleSaveClick = () => {
        setUserDetails(updatedDetails);
        setIsEditing(false);
    };

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} p-6`}>
            <div className={`w-full max-w-3xl ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg shadow-lg p-6`}>
                {/* User Profile */}
                <div className="text-center mb-6">
                    <h1 className={`text-3xl font-semibold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>User Profile</h1>
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-indigo-500">
                            <img
                                src={updatedDetails.profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {isEditing && (
                            <div className="flex items-center">
                                <label
                                    htmlFor="file-upload"
                                    className={`px-6 py-2 bg-indigo-500 text-white rounded-md cursor-pointer ${theme === 'light' ? 'hover:bg-indigo-600' : 'hover:bg-indigo-400'} transition`}
                                >
                                    Upload Profile Picture
                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Profile Details */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className={`font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Name:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="name"
                                value={updatedDetails.name}
                                onChange={handleInputChange}
                                className={`border p-2 rounded ${theme === 'light' ? 'bg-white' : 'bg-gray-700'} ${theme === 'light' ? 'text-black' : 'text-white'}`}
                            />
                        ) : (
                            <span className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>{updatedDetails.name}</span>
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <label className={`font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Email:</label>
                        {isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={updatedDetails.email}
                                onChange={handleInputChange}
                                className={`border p-2 rounded ${theme === 'light' ? 'bg-white' : 'bg-gray-700'} ${theme === 'light' ? 'text-black' : 'text-white'}`}
                            />
                        ) : (
                            <span className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>{updatedDetails.email}</span>
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <label className={`font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Phone:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="phone"
                                value={updatedDetails.phone}
                                onChange={handleInputChange}
                                className={`border p-2 rounded ${theme === 'light' ? 'bg-white' : 'bg-gray-700'} ${theme === 'light' ? 'text-black' : 'text-white'}`}
                            />
                        ) : (
                            <span className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>{updatedDetails.phone}</span>
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <label className={`font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Work:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="work"
                                value={updatedDetails.work}
                                onChange={handleInputChange}
                                className={`border p-2 rounded ${theme === 'light' ? 'bg-white' : 'bg-gray-700'} ${theme === 'light' ? 'text-black' : 'text-white'}`}
                            />
                        ) : (
                            <span className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>{updatedDetails.work}</span>
                        )}
                    </div>
                </div>

                {/* Edit/Save Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    {isEditing ? (
                        <button
                            onClick={handleSaveClick}
                            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={handleEditClick}
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>


        </div>
    );
};

export default UserProfile;
