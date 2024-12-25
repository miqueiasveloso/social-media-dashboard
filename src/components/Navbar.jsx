import React, { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.style.backgroundColor = darkMode ? '#f8f9fa' : '#333';
    document.body.style.color = darkMode ? '#333' : '#f8f9fa';
    setDarkMode(!darkMode);
  };

  const navStyles = {
    padding: '10px 20px',
    backgroundColor: '#1877F2', // Facebook blue
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  };

  const linkStyles = {
    marginRight: '10px',
    padding: '8px 15px',
    textDecoration: 'none',
    color: darkMode ? '#f8f9fa' : '#333',
    backgroundColor: darkMode ? '#555' : '#e0e0e0',
    borderRadius: '25px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
  };

  const linkHoverStyles = {
    transform: 'scale(1.05)',
    backgroundColor: darkMode ? '#666' : '#d0d0d0',
  };

  const buttonStyles = {
    padding: '8px 15px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '25px',
    backgroundColor: darkMode ? '#555' : '#e0e0e0',
    color: darkMode ? '#f8f9fa' : '#333',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
  };

  const buttonHoverStyles = {
    transform: 'scale(1.05)',
    backgroundColor: darkMode ? '#666' : '#d0d0d0',
  };

  return (
    <nav style={navStyles}>
      <div>
        <a
          href="/"
          style={linkStyles}
          onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyles)}
          onMouseLeave={(e) => Object.assign(e.target.style, linkStyles)}
        >
          Home
        </a>
        <a
          href="/profile"
          style={linkStyles}
          onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyles)}
          onMouseLeave={(e) => Object.assign(e.target.style, linkStyles)}
        >
          Profile
        </a>
      </div>
      <button
        onClick={toggleDarkMode}
        style={buttonStyles}
        onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyles)}
        onMouseLeave={(e) => Object.assign(e.target.style, buttonStyles)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
