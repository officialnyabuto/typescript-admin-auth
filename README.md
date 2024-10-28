# TypeScript Authentication System

A robust, secure authentication system built with TypeScript, featuring JWT authentication, role-based access control, and PostgreSQL integration.

## Features

### User Management
- 🔐 Secure user registration with email/password
- 🎫 JWT-based authentication
- 👥 Role-based access control (Admin/User roles)
- ✨ Clean and intuitive API endpoints

### Security
- 🔒 Password hashing using bcrypt
- 🛡️ JWT token authentication
- 🚫 Protected routes middleware
- ✅ Input validation and sanitization

### Database Integration
- 📦 TypeORM with PostgreSQL
- 🏗️ Migration support
- 📝 Well-structured user entity
- 🔄 Automatic schema updates

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- TypeScript (v4 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/officialnyabuto/ts-auth-system.git
cd ts-auth-system
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Update the `.env` file with your PostgreSQL credentials:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=auth_db
JWT_SECRET=your_jwt_secret
```

5. Run database migrations:
```bash
npm run typeorm migration:run
```

6. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication

#### Register a new user
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword",
  "name": "John Doe"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### Protected Routes

To create protected routes, use the provided middleware:

```typescript
// Require authentication
router.get('/protected', authenticateToken, controller.method);

// Require admin role
router.get('/admin-only', authenticateToken, requireAdmin, controller.method);
```


## Security Considerations

- All passwords are hashed using bcrypt before storage
- JWT tokens are signed with a secure secret
- Input validation prevents common injection attacks
- Rate limiting is implemented on authentication endpoints
- CORS is configured for security

## Error Handling

The system includes a global error handling middleware that processes:
- Validation errors
- Authentication errors
- Database errors
- General runtime errors

All errors are returned in a consistent format:
```json
{
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE"
  }
}
```

## Development

1. Run in development mode:
```bash
npm run dev
```

2. Run tests:
```bash
npm test
```

3. Build for production:
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
