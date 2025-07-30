# Feature Voting System Backend

This is the backend for the Feature Voting System project. It provides an API for user authentication, feature management, and voting functionality.

## Features

- User authentication (register, login, logout)
- Create and manage features
- Upvote features
- View votes on features

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd feature-voting-system/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database configuration in `src/config/database.ts`.

4. Run the application:
   ```bash
   npm start
   ```

## API Endpoints

- **Authentication**
  - `POST /register` - Register a new user
  - `POST /login` - Login an existing user

- **Features**
  - `POST /features` - Create a new feature
  - `GET /features` - Retrieve all features

- **Votes**
  - `POST /votes` - Cast a vote on a feature
  - `GET /votes` - Retrieve all votes

## License

This project is licensed under the MIT License.