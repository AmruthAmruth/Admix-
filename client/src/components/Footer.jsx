import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <footer
      className={`w-full py-6 text-center transition-colors duration-300
        ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'}`}
    >
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Admix. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="/about"
            className="text-sm hover:text-indigo-500 transition-colors"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-sm hover:text-indigo-500 transition-colors"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="text-sm hover:text-indigo-500 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
