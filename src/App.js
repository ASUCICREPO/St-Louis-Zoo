import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import UserAgreement from './pages/UserAgreement';
import Confirmation from './pages/Confirmation';
import ShoppingCart from './pages/ShoppingCart';
import Testing from './pages/testing';
import TagDetails from './pages/TagDetailsUser';
import SearchResults from './pages/SearchResults';


const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/confirm" element={<UserAgreement />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/test" element={<Testing />} />
          <Route path="/tags" element={<TagDetails />} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
