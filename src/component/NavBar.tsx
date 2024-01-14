import React from 'react';
import '../assets/scss/Navbar.scss';
import { BurgerIcon, BellIcon, CalendarIcon } from './icons';
import useFormattedDate from '../hooks/useFormattedDate'

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const formattedDate = useFormattedDate();
  
  return (
    <div className="navbar">
      <div className="navbar-content">
        <button>
          <BurgerIcon />
        </button>
        <div className='calendar'>
          <CalendarIcon />
          <span>{formattedDate}</span>
        </div>
        {children}
        <button>
          <BellIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
