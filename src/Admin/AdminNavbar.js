import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  const navbarStyle = {
    backgroundColor: '#d32f2f',  // Blood donation themed color (deep red)
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const logoStyle = {
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const navItemsStyle = {
    display: 'flex',
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  };

  const navItemStyle = {
    margin: '0 15px',
  };

  const linkStyle = {
    color: '#fff',
    fontSize: '18px',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: '#b71c1c',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/admin/home" style={logoStyle}>
        Blood Donation Portal - Admin Dashboard
      </Link>
      <ul style={navItemsStyle}>
        <li style={navItemStyle}>
          <Link
            to="/admin/home"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            Home
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link
            to="/admin/donors"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            All Donors
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link
            to="/login"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
