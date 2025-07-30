import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FeatureList() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/features');
      setFeatures(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching features:', error);
      setError('Failed to load features. Make sure the backend server is running.');
      setLoading(false);
    }
  };

  const handleVote = async (featureId) => {
    try {
      await axios.post(`http://localhost:3001/api/features/${featureId}/vote`);
      fetchFeatures();
    } catch (error) {
      console.error('Error voting:', error);
      alert('Failed to vote. Please try again.');
    }
  };

  if (loading) return <div style={{ padding: '20px' }}>Loading features...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Features</h2>
        <a href="/submit" style={{ 
          textDecoration: 'none', 
          backgroundColor: '#007bff', 
          color: 'white', 
          padding: '10px 20px', 
          borderRadius: '5px'
        }}>
          Submit New Feature
        </a>
      </div>
      
      {features.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <p>No features yet. Be the first to submit one!</p>
        </div>
      ) : (
        <div>
          {features.map(feature => (
            <div key={feature.id} style={{ 
              margin: '15px 0', 
              padding: '20px', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{feature.title}</h3>
              <p style={{ margin: '0 0 15px 0' }}>{feature.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Votes: <strong>{feature.votes || 0}</strong></span>
                <button 
                  onClick={() => handleVote(feature.id)}
                  style={{ 
                    backgroundColor: '#28a745', 
                    color: 'white', 
                    border: 'none', 
                    padding: '8px 16px', 
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Vote
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeatureList;