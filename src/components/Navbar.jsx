import React, { useState } from 'react';
import CartWidget from './CartWidget';
import logo from './logo.jpg';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white font-sm
                 hover:bg-gray-700
                 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >CATEGORIAS </button>
              {isMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <div className="margin-10px">
                      <p className="text-gray-900">Categoría 1</p>
                      <p className="text-gray-900">Categoría 2</p>
                      <p className="text-gray-900">Categoría 3</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-2" />
            <p className="text-white font-bold">ARG BOOKS</p>
          </div>
          <div className="flex items-center">
            <button className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <CartWidget />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
