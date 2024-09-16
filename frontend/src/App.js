import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import HomePage from './pages/HomePage';
import ResourceDetailPage from './pages/ResourceDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Use Routes instead of Switch */}
        <Routes>
          {/* Define route for the home page */}
          <Route path="/" element={<HomePage />} />
          {/* Define route for a resource detail page */}
          <Route path="/resource/:id" element={<ResourceDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
