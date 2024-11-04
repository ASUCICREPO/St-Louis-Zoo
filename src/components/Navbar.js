import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import logo from '../assets/images/logo/logo.png';

const Navbar = ({ searchClicked, cartItemCount }) => {
  // State to track the selected tab
  const [selectedTab, setSelectedTab] = useState('search');
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Get the current location

  // Inline CSS for the Navbar and its elements
  const navBarStyle = {
    backgroundColor: '#EEECE5',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    marginBottom: '0px',
    fontFamily: 'Metapro Normal, sans-serif',
    position: 'sticky',  // Makes the Navbar sticky
    top: '0',            // Sticks the Navbar to the top of the page
    zIndex: '1000',
    height: '50px',
  };

  const welcomeStyle = {
    color: '#000',
    fontSize: '22px',
  };

  const logoNavStyle = {
    height: '50px',
  };

  const navOptionsStyle = {
    display: 'flex',
    gap: '20px',
    position: 'relative',
  };

  const tabStyle = (tab) => ({
    color: '#000',
    padding: '10px',
    cursor: 'pointer',
    fontFamily: 'Metapro Normal, sans-serif',
    borderBottom: selectedTab === tab ? '2px solid #FDBD57' : 'none',
    fontWeight: selectedTab === tab ? 'bold' : 'normal',
  });

  const badgeStyle = {
    backgroundColor: '#FDBD57',
    borderRadius: '50%',
    padding: '4px 8px',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    position: 'absolute',
    top: '0',
    right: '-10px',
    display: cartItemCount > 0 ? 'block' : 'none',
  };

  // Handler for switching tabs
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (tab === 'search') {
      navigate('/search'); // Navigate to search page
    } else if (tab === 'cart') {
      navigate('/cart'); // Navigate to cart page
    }
  };

  return (
    <nav style={navBarStyle}>
      {location.pathname === '/search' ? ( // Check if the current path is '/search'
        <div style={welcomeStyle}>Welcome!</div>
      ) : (
        <img src={logo} alt="Logo" style={logoNavStyle} />
      )}

      <div style={navOptionsStyle}>
        <div
          style={tabStyle('search')}
          onClick={() => handleTabClick('search')}
        >
          Search
        </div>

        <div
          style={tabStyle('cart')}
          onClick={() => handleTabClick('cart')}
        >
          Shopping Cart
          <span style={badgeStyle}>{cartItemCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
