import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeatureList from './components/FeatureList';
import FeatureForm from './components/FeatureForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Feature Voting System</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<FeatureList />} />
            <Route path="/submit" element={<FeatureForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;