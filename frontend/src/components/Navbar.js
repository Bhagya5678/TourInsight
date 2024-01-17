import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-medium-blue p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}``
          <img src="/path/to/your-logo.png" alt="Logo" className="w-8 h-8 mr-2" />
          <span className="text-white text-lg font-bold">Your Website</span>
        </div>

        <div className="flex items-center">
          {/* Login/Signup */}
          <div className="text-medium-blue mr-4">
            <span className="text-white">Login/Signup</span>
            {/* You can replace the icon with your own */}
            <i className="fa fa-user ml-2"></i>
          </div>

          {/* Dropdown Menu */}
          <div className="relative group">
            <div className="bg-white text-medium-blue p-2 cursor-pointer">
              {/* Three Lines Icon (representing a dropdown menu) */}
              <span className="block h-2 w-6 border-b border-medium-blue mb-1"></span>
              <span className="block h-2 w-6 border-b border-medium-blue mb-1"></span>
              <span className="block h-2 w-6 border-b border-medium-blue"></span>
            </div>

            {/* Dropdown Content */}
            <div className="hidden absolute top-10 right-0 bg-white text-medium-blue p-2">
              <a href="#" className="block py-1">Menu Item 1</a>
              <a href="#" className="block py-1">Menu Item 2</a>
              <a href="#" className="block py-1">Menu Item 3</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
