// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import Home from './pages/Home';
import PlacesToVisit from './pages/PlacesToVisit';
import Posts from './pages/Posts';
import CreateTrip from './pages/CreateTrip';
import TripList from './pages/TripList';

import { TripProvider } from './context/TripContext'; // ✅ Import the provider

function App() {
  return (
    <BrowserRouter>
      <TripProvider> {/* ✅ Wrap entire route system in TripProvider */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/placesToVisit" element={<PlacesToVisit />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/trip-list" element={<TripList />} />
        </Routes>
      </TripProvider>
    </BrowserRouter>
  );
}

export default App;
