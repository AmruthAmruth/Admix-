import React from 'react';
import { useSelector } from 'react-redux';

const dummyUsers = [
  {
    id: 1,
    name: 'Amruth Saiju',
    email: 'amruth@example.com',
    phone: '+91 98765 43210',
    job: 'MERN Stack Developer',
    image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1747028750~exp=1747032350~hmac=a0470f5170cd533d71a0d73e9fed00bec6a07676a500e28cd12a117a39dcec5d&w=1380',
  },
  {
    id: 2,
    name: 'Neha Sharma',
    email: 'neha@example.com',
    phone: '+91 91234 56789',
    job: 'UI/UX Designer',
    image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1747028750~exp=1747032350~hmac=a0470f5170cd533d71a0d73e9fed00bec6a07676a500e28cd12a117a39dcec5d&w=1380',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    email: 'rahul@example.com',
    phone: '+91 99887 77665',
    job: 'Backend Developer',
    image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1747028750~exp=1747032350~hmac=a0470f5170cd533d71a0d73e9fed00bec6a07676a500e28cd12a117a39dcec5d&w=1380',
  },
   {
    id: 1,
    name: 'Amruth Saiju',
    email: 'amruth@example.com',
    phone: '+91 98765 43210',
    job: 'MERN Stack Developer',
    image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1747028750~exp=1747032350~hmac=a0470f5170cd533d71a0d73e9fed00bec6a07676a500e28cd12a117a39dcec5d&w=1380',
  },
  {
    id: 2,
    name: 'Neha Sharma',
    email: 'neha@example.com',
    phone: '+91 91234 56789',
    job: 'UI/UX Designer',
    image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1747028750~exp=1747032350~hmac=a0470f5170cd533d71a0d73e9fed00bec6a07676a500e28cd12a117a39dcec5d&w=1380',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    email: 'rahul@example.com',
    phone: '+91 99887 77665',
    job: 'Backend Developer',
    image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1747028750~exp=1747032350~hmac=a0470f5170cd533d71a0d73e9fed00bec6a07676a500e28cd12a117a39dcec5d&w=1380',
  },
];

const Home = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`min-h-screen py-10 px-6 transition-colors duration-300 
      ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}
    >
      <h1 className="text-3xl font-semibold mb-8 text-center">Welcome to Admix</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyUsers.map((user) => (
          <div
            key={user.id}
            className={`rounded-xl shadow-lg p-6 transition-colors duration-300 
              ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} 
              ${theme === 'light' ? 'shadow-lg' : 'shadow-xl'}`}
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-bold text-center">{user.name}</h2>
            <p className="text-center text-sm text-gray-500">{user.job}</p>
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
