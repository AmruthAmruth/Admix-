import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AuthPage = () => {
  const theme = useSelector((state) => state.theme.theme); // 'light' or 'dark'
  const isDark = theme === 'dark';

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
        isValid = false;
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone is required';
        isValid = false;
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Confirm your password';
        isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Submitting form:', formData);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-12 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div
        className={`max-w-md w-full space-y-8 p-8 rounded-2xl shadow-xl transition-all duration-300 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'
        }`}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Welcome to <span className="text-blue-500">Admix</span>
          </h1>
          <p className="text-sm mt-2">
            {isLogin ? 'Login to continue your journey' : 'Create an account to get started'}
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 w-full px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  type="text"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 w-full px-3 py-2 rounded-lg border ${
                    isDark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  type="text"
                />
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>
            </>
          )}

          <div>
            <label className="block text-sm">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 w-full px-3 py-2 rounded-lg border ${
                isDark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="email"
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 w-full px-3 py-2 rounded-lg border ${
                isDark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="password"
            />
            {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password}</p>}
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm">Confirm Password</label>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`mt-1 w-full px-3 py-2 rounded-lg border ${
                  isDark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                type="password"
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-400 mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center text-sm mt-4">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button onClick={() => setIsLogin(false)} className="text-blue-400 underline">
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => setIsLogin(true)} className="text-blue-400 underline">
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
