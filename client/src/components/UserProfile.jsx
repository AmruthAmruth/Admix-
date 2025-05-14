import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { updateUser, userProfile } from '../services';

const UserProfile = () => {
    const theme = useSelector((state) => state.theme.theme);
    const user = useSelector((state) => state.user.user);

    const [userDetails, setUserDetails] = useState({});
    const [updatedDetails, setUpdatedDetails] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (user?.email) {
            userProfile(user.email)
                .then((data) => {
                    console.log("This is the response", data);
                    setUserDetails(data);
                    setUpdatedDetails(data);
                })
                .catch((err) => {
                    console.error("Error fetching user profile:", err);
                });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedDetails({ ...updatedDetails, [name]: value });
    };



   const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "profile_pictures");

    try {
        const res = await fetch("https://api.cloudinary.com/v1_1/dbslazpqx/image/upload", {
            method: "POST",
            body: formData
        });

        const data = await res.json();

        // 👇 Update both updatedDetails and userDetails immediately
        setUpdatedDetails((prev) => ({
            ...prev,
            profile: data.secure_url
        }));

        setUserDetails((prev) => ({
            ...prev,
            profile: data.secure_url
        }));
    } catch (err) {
        console.error("Image upload failed:", err);
    }
};




    const handleEditClick = () => setIsEditing(true);

    const handleSaveClick = async () => {
        try {
            const response = await updateUser(
                updatedDetails.name,
                updatedDetails.email,
                updatedDetails.phone,
                updatedDetails.password,
                updatedDetails.work,
                updatedDetails.profile
            );

            setUserDetails({ ...updatedDetails });
            setIsEditing(false);
            console.log('User updated successfully:', response);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const backgroundClass = theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white';
    const penColor = theme === 'light' ? 'text-black' : 'text-white';

    return (
        <div className={`min-h-screen flex items-center justify-center p-6 ${backgroundClass}`}>
            <div className={`rounded-xl p-8 max-w-md w-full shadow-xl border ${theme === 'light' ? 'bg-white' : 'bg-white/10 border-white/20 backdrop-blur-md'}`}>
                <div className="flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <div className="relative">
                        <img
                            src={updatedDetails.profile}
                            alt="Profile"
                            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
                        />
                        {isEditing && (
                            <label htmlFor="profileImageUpload" className={`absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer ${penColor}`}>
                                ✎
                                <input
                                    id="profileImageUpload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </label>
                        )}
                    </div>

                    <h2 className="mt-4 text-2xl font-bold tracking-tight">{userDetails.name}</h2>
                    <p className="text-sm opacity-80">{userDetails.work}</p>

                    {/* Fields */}
                    <div className="mt-6 w-full space-y-4 text-left">
                        {[
                            { label: 'Name', name: 'name', type: 'text' },
                            { label: 'Email', name: 'email', type: 'email' },
                            { label: 'Phone', name: 'phone', type: 'text' },
                            { label: 'Job Title', name: 'work', type: 'text' },
                            { label: 'Password', name: 'password', type: 'password' },
                        ].map((field) => (
                            <div key={field.name}>
                                <label className="text-xs uppercase font-semibold tracking-wide text-gray-500">
                                    {field.label}
                                </label>
                                {isEditing ? (
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={updatedDetails[field.name] || ''}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded mt-1 bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' && 'bg-white/20 text-white placeholder:text-white/70 border-white/30'}`}
                                    />
                                ) : (
                                    <div className="mt-1 text-base">
                                        {field.name === 'password' ? '••••••••••' : userDetails[field.name]}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex justify-center gap-4">
                        {isEditing ? (
                            <button
                                onClick={handleSaveClick}
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                onClick={handleEditClick}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
