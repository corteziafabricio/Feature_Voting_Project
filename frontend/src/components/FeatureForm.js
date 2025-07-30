import React, { useState } from 'react';
import axios from 'axios';

function FeatureForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      setMessage('Please fill in all fields');
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      await axios.post('http://localhost:3001/api/features', {
        title: title.trim(),
        description: description.trim()
      });
      
      setMessage('Feature submitted successfully! Redirecting...');
      setTitle('');
      setDescription('');
      
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
      
    } catch (error) {
      setMessage('Error submitting feature. Make sure the backend server is running.');
      console.error('Error submitting feature:', error);
    }
    
    setSubmitting(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <a href="/" style={{ textDecoration: 'none', color: '#007bff' }}>
          ← Back to Features
        </a>
        <h2>Submit New Feature</h2>
      </div>
      
      {message && (
        <div style={{ 
          padding: '15px', 
          marginBottom: '20px', 
          borderRadius: '5px',
          backgroundColor: message.includes('Error') ? '#f8d7da' : '#d4edda',
          color: message.includes('Error') ? '#721c24' : '#155724'
        }}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Feature Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a descriptive title"
            required
            style={{ 
              width: '100%', 
              padding: '12px', 
              border: '1px solid #ccc', 
              borderRadius: '5px',
              fontSize: '16px'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Description *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your feature request"
            required
            rows="6"
            style={{ 
              width: '100%', 
              padding: '12px', 
              border: '1px solid #ccc', 
              borderRadius: '5px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={submitting}
          style={{
            backgroundColor: submitting ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: submitting ? 'not-allowed' : 'pointer',
            width: '100%'
          }}
        >
          {submitting ? 'Submitting...' : 'Submit Feature'}
        </button>
      </form>
    </div>
  );
}

export default FeatureForm;