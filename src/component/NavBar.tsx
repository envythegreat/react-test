// NavbarComponent.tsx
import React from 'react';
import '../assets/scss/Navbar.scss'; // Import your SCSS file

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        {children}
      </div>
    </div>
  );
};

export default Navbar;
