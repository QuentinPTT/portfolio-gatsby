import React, { useState } from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black sm:flex sm:justify-center sm:items-center p-5 sm:p-0">
      <div className="sm:hidden flex justify-end">
        <button onClick={toggleMenu} className="text-white">
          <span className="block h-0.5 w-6 bg-white mb-1"></span>
          <span className="block h-0.5 w-6 bg-white mb-1"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </button>
      </div>
      <ul className={`sm:flex flex-col sm:flex-row justify-center flex-wrap text-center sm:py-5 ${isOpen ? 'block py-5' : 'hidden'}`}>
        <li className="mx-5 text-lg hover:text-red-300 transition-colors font-bold cursor-pointer"> <Link to="/">HOME</Link></li>
        <li className="mx-5 text-lg hover:text-red-300 transition-colors font-bold cursor-pointer"> <Link to="/portfolio">PORTFOLIO</Link></li>
        <li className="mx-5 text-lg hover:text-red-300 transition-colors font-bold cursor-pointer"> <Link to="/jobs">JOBS</Link></li>
        <li className="mx-5 text-lg hover:text-red-300 transition-colors font-bold cursor-pointer"> <Link to="/about">ABOUT</Link></li>
      </ul>
    </nav>
  );
}
