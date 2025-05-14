import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from '../services';


const Home = () => {
  const theme = useSelector((state) => state.theme.theme);

  const  [users,setUsers]=useState([])

 useEffect(() => {
  getUserData().then((data) => {
    console.log("Received Data:", data); 
    setUsers(data); 
  }).catch((error) => {
    console.log("Error fetching data:", error); 
  });
}, []);




  return (
    <div
      className={`min-h-screen py-10 px-6 transition-colors duration-300 
      ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}
    >
      <h1 className="text-3xl font-semibold mb-8 text-center">Welcome to Admix</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className={`rounded-xl shadow-lg p-6 transition-colors duration-300 
              ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} 
              ${theme === 'light' ? 'shadow-lg' : 'shadow-xl'}`}
          >
            <img
              src={user.image ? user.image : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-bold text-center">{user.name}</h2>
            <p className="text-center text-sm text-gray-500">{user.job ? user.job : ""}</p>
            <div className="mt-4 text-sm space-y-1">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
