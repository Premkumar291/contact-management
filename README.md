# Contact Management System

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing contacts efficiently with a responsive and modern UI.

## Features

- ✅ **Create Contacts**: Add new contacts with name, email, phone, and message
- ✅ **View Contacts**: Display all contacts in a responsive table
- ✅ **Delete Contacts**: Remove contacts with one click
- ✅ **Client-side Validation**: Real-time validation for form fields
- ✅ **Phone Validation**: Accepts exactly 10-digit phone numbers
- ✅ **Error Handling**: User-friendly error messages and loading states
- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Tailwind CSS**: Modern styling with Tailwind utility classes
- ✅ **Success Messages**: Feedback after successful contact submission

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ORM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure

```
Contact Management/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── contactForm.jsx       # Form component
│   │   │   └── contactList.jsx       # Table/list component
│   │   ├── api/
│   │   │   └── api.js                # Axios instance
│   │   ├── assets/
│   │   │   └── logo.svg              # App logo
│   │   ├── App.jsx                   # Root component
│   │   ├── index.css                 # Global styles
│   │   └── main.jsx                  # Entry point
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.cjs
├── backend/
│   ├── config/
│   │   └── db.config.js              # MongoDB connection
│   ├── controller/
│   │   └── contact.controller.js     # Business logic
│   ├── models/
│   │   └── contact.models.js         # MongoDB schema
│   ├── routes/
│   │   └── contact.routes.js         # API routes
│   ├── server.js                     # Server entry point
│   ├── package.json
│   └── .env                          # Environment variables
├── README.md
└── .gitignore
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB account (Atlas or local)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
PORT=8080
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?appName=<app-name>
```

4. Start the server:
```bash
npm run dev
```

The backend will run on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
VITE_API_URL=http://localhost:8080/api
```

4. Start the dev server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

All API requests use the base URL: `http://localhost:8080/api`

### Contacts

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/contacts` | Create a new contact |
| GET | `/contacts` | Fetch all contacts (sorted by creation date) |
| DELETE | `/contacts/:id` | Delete a contact by ID |

### Request/Response Examples

**Create Contact (POST /contacts)**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Hello"
}
```

**Response (201 Created)**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Hello",
  "createdAt": "2024-01-03T10:30:00.000Z",
  "updatedAt": "2024-01-03T10:30:00.000Z"
}
```

**Get All Contacts (GET /contacts)**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "message": "Hello",
    "createdAt": "2024-01-03T10:30:00.000Z",
    "updatedAt": "2024-01-03T10:30:00.000Z"
  }
]
```

## Database Schema

### Contact Model

```javascript
{
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  message: {
    type: String
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

## Form Validation Rules

### Frontend Validation
- **Name**: Required field
- **Email**: Valid email format (regex: `/\S+@\S+\.\S+/`)
- **Phone**: Exactly 10 digits, numbers only
- **Message**: Optional field

### Backend Validation
- Unique email constraint
- Unique phone constraint
- All required fields enforced by Mongoose schema

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```

The build output will be in the `dist/` folder.

### Backend
The backend doesn't require a build step. Just ensure all dependencies are installed:
```bash
cd backend
npm install
```

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:8080/api
```

### Backend (.env)
```
PORT=8080
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/?appName=contact-1
```

## Git Ignore

The `.env` files and `node_modules/` are already added to `.gitignore` to prevent committing sensitive data.

## Features Breakdown

### Contact Form
- Real-time validation
- Auto-formatting for phone numbers
- Error message display
- Success message after submission
- Loading state during submission
- Clean, accessible form inputs

### Contact List
- Responsive table layout
- Stacks into cards on mobile devices
- Delete button for each contact
- Loading state
- Empty state message
- Hover effects

### Error Handling
- Network error messages
- Form validation errors
- Server error feedback
- User-friendly error display

## Performance

- Optimized Tailwind CSS with PurgeCSS
- Minimal dependencies
- Fast API responses with MongoDB
- Efficient component re-renders
- Responsive images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Search and filter contacts
- Sort contacts by name, date
- Pagination for large contact lists
- Edit contact details
- Bulk delete
- Export contacts to CSV
- Contact categories/groups
- Phone number formatting per country

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue in the repository.

---

**Created with ❤️ as a MERN stack project**
