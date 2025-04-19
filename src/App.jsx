import React from 'react';
import Navbar from './components/Navbar';  // Import the Navbar component
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Import React Router
import Home from './pages/Home';  // Home Page
import PlacesToVisit from './pages/PlacesToVisit';  // Places To Visit Page
import Posts from './pages/Posts';  // Posts Page
import CreateTrip from './pages/CreateTrip';  // Create Trip Page
import TripList from './pages/TripList';  // Trip List Page
import AIAssistant from './pages/AIAssistant';  // AI Assistant Page

function App() {
  return (
    <BrowserRouter>  {/* Set up the Router for the app */}
      <Navbar />  {/* Add Navbar */}
      <Routes>  {/* Set up the routing */}
        <Route path="/" element={<Home />} />  {/* Home Route */}
        <Route path="/placesToVisit" element={<PlacesToVisit />} />  {/* PlacesToVisit Route */}
        <Route path="/posts" element={<Posts />} />  {/* Posts Route */}
        <Route path="/create-trip" element={<CreateTrip />} />  {/* Create Trip Route */}
        <Route path="/trip-list" element={<TripList />} />  {/* Trip List Route */}
        <Route path="/ai-assistant" element={<AIAssistant />} />  {/* AI Assistant Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
