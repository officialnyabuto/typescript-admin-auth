# TypeScript Admin Authentication System

This project demonstrates a robust, efficient, and secure admin authentication system built with TypeScript, Express.js, and TypeORM. It showcases best practices in backend development, including secure password handling, JSON Web Token (JWT) authentication, and role-based access control.

## Features

- User registration and login
- Role-based access control (Admin and User roles)
- Secure password hashing using bcrypt
- JWT-based authentication
- Protected admin routes
- TypeORM integration for database operations
- PostgreSQL database support
- Error handling middleware
- Environment-based configuration

## Tech Stack

- TypeScript
- Node.js
- Express.js
- TypeORM
- PostgreSQL
- JSON Web Tokens (JWT)
- bcrypt

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL (v12 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/officialnyabuto/typescript-admin-auth.git
   cd typescript-admin-auth
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   JWT_SECRET=your_jwt_secret
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   DB_NAME=admin_auth
   ```
   Replace the values with your actual database credentials and preferred JWT secret.

4. Create a PostgreSQL database named `admin_auth` (or the name you specified in DB_NAME).

## Usage

1. Build the project:
   ```
   npm run build
   ```

2. Start the server:
   ```
   npm start
   ```

   For development with hot reloading:
   ```
   npm run dev
   ```

3. The server will start running on `http://localhost:3000` (or the port you specified in the .env file).

## API Endpoints

- POST `/auth/register`: Register a new user
- POST `/auth/login`: Login and receive a JWT
- POST `/auth/reset-password`: Reset user password (implementation required)
- GET `/admin/dashboard`: Get admin dashboard data (protected route)

## Testing

(Note: Add information about your testing setup and how to run tests once you've implemented them.)

## Deployment

This project is set up to be deployment-ready. While it's not currently deployed live, it can be easily deployed to cloud platforms like AWS Elastic Beanstalk or Heroku. Deployment instructions for various platforms can be added here as needed.

## Security Considerations

This project demonstrates secure coding practices, including:

- Secure password hashing with bcrypt
- JWT for stateless authentication
- Role-based access control
- Environment variable usage for sensitive data

Note: In a real-world scenario, additional security measures such as rate limiting, HTTPS enforcement, and more comprehensive input validation would be implemented.

## Contributing

Feel free to add contributions. If you have suggestions or find bugs, please feel free to open an issue.


## Contact

Your Name - ronnyabuto@gmail.com

Project Link: https://github.com/officialnyabuto/typescript-admin-auth

