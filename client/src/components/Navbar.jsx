import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../services';
import { logoutUser } from '../features/userSlice';

const Navbar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = async () => {
    try {
      await userLogout(); 
      dispatch(logoutUser()); 
      navigate('/');
    } catch (err) {
      alert("Logout failed. Please try again.");
      console.error(err);
    }
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

        {isAuthenticated ? (
          <>
            <span className="font-medium cursor-pointer">
              Welcome, {user?.name}
            </span>
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate('/')}
            className="px-3 py-2 rounded border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
