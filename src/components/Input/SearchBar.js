// SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import searchIcon from '../../assets/icons/searchIcon.png';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = async () => {
    // Create the payload for the API request
    const payload = {
      filters: {
        keyword: query,
      },
    };

    try {
      // Fetch search results from the API
      const response = await fetch('https://2g2799px6e.execute-api.us-east-1.amazonaws.com/default/GetSearchResults', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Search result:', result);

      // Navigate to /results and pass the result as state
      navigate('/results', { state: { searchResults: result.body } }); // Adjust to match your API response structure
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  const searchLabelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
    fontFamily: 'Metapro Normal, sans-serif',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <label style={searchLabelStyle}>Search</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          style={{
            padding: '10px',
            fontFamily: 'Metapro Normal, sans-serif',
            border: '1px solid #ccc',
            borderRight: 'none',
            flexGrow: 1,
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            backgroundColor: '#FDBD57',
            padding: '8px 12px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <img
            src={searchIcon}
            alt="Search"
            style={{ width: '20px' }}
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
