
# Admix

Admix is a full-stack MERN (MongoDB, Express, React, Node.js) web application that provides secure user authentication and profile management using JWT (JSON Web Tokens) and Redux for global state management. It includes both user and admin functionality.

## 🔑 Features

### User Side
- Register and Login functionality
- JWT-based authentication & session management
- Home page with navigation
- User Profile page with profile image upload

### Admin Side
- Admin login
- Dashboard with user data overview
- Search functionality on users
- Create, Edit, and Delete user data

## 🛠️ Tech Stack

- **Frontend:** React, Redux Toolkit, Axios
- **Backend:** Node.js, Express.js, Multer (for file upload)
- **Authentication:** JWT
- **Database:** MongoDB (Mongoose)
- **File Uploads:** Multer (profile image handling)

## 📁 Folder Structure

```
/admix/
├── client/               # React frontend
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── features/
│       ├── pages/
│       ├── redux/
│       ├── App.jsx
│       ├── main.jsx
│       └── utils/
├── server/               # Node.js backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
├── .env
└── README.md
```

