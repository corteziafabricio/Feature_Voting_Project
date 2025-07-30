# Feature Voting System

## Overview
The Feature Voting System allows users to post new features and upvote existing ones. This project consists of a backend API, a frontend web application, and a mobile application.

## Project Structure
```
feature-voting-system
├── backend          # Backend API
│   ├── src
│   │   ├── app.js                  # Entry point for the backend application
│   │   ├── controllers             # Controllers for handling requests
│   │   │   ├── featureController.js # Handles feature-related requests
│   │   │   └── voteController.js    # Handles voting actions
│   │   ├── models                  # Database models
│   │   │   ├── Feature.js          # Feature model
│   │   │   └── Vote.js             # Vote model
│   │   ├── routes                  # API routes
│   │   │   ├── features.js         # Routes for features
│   │   │   └── votes.js            # Routes for votes
│   │   ├── middleware              # Middleware for authentication
│   │   │   └── auth.js             # Authentication middleware
│   │   └── config                  # Configuration files
│   │       └── database.js         # Database connection logic
│   ├── package.json                 # NPM configuration for backend
│   └── .env                        # Environment variables
├── frontend         # Frontend web application
│   ├── public
│   │   └── index.html              # Main HTML file for the frontend
│   ├── src
│   │   ├── components              # React components
│   │   │   ├── FeatureList.js      # Displays list of features
│   │   │   ├── FeatureForm.js      # Allows users to submit new features
│   │   │   └── VoteButton.js       # Allows users to upvote a feature
│   │   ├── services                # API service functions
│   │   │   └── api.js              # Functions for making API calls
│   │   ├── App.js                  # Main component for routing
│   │   └── index.js                # Entry point for the frontend
│   └── package.json                 # NPM configuration for frontend
├── mobile           # Mobile application
│   ├── App.js                  # Entry point for the mobile application
│   ├── components              # Mobile components
│   │   ├── FeatureList.js      # Displays list of features for mobile
│   │   ├── FeatureForm.js      # Allows users to submit new features in mobile
│   │   └── VoteButton.js       # Allows users to upvote a feature in mobile
│   ├── services                # Mobile API service functions
│   │   └── api.js              # Functions for making API calls
│   └── package.json             # NPM configuration for mobile
├── database          # Database setup
│   └── schema.sql              # SQL schema for database tables
├── prompts.txt       # Prompts used during development
└── README.md        # Project documentation
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with your database connection details.
4. Run the backend server:
   ```
   node src/app.js
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Run the frontend application:
   ```
   npm start
   ```

### Mobile
1. Navigate to the `mobile` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Run the mobile application (ensure you have the appropriate environment set up for mobile development):
   ```
   npm start
   ```

## Usage
- Users can submit new features through the frontend or mobile app.
- Users can view the list of features and upvote them.
- The backend API handles all requests and manages the database.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or features you'd like to add!