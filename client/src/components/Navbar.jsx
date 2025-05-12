import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/themeSlice'; // adjust the path as needed

const Navbar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className={`w-full px-6 py-4 flex justify-between items-center shadow-md transition-colors duration-300 
     ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'}`}>
      

      <div className="text-2xl font-bold">Admix</div>

   
      <div className="flex gap-4 items-center">
        <button
          onClick={handleToggleTheme}
          className="px-3 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 transition"
        >
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        <button className="px-3 py-2 rounded border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
