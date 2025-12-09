# 🍔 Food Delivery App

A full-stack food delivery application built with the MERN stack (MongoDB, Express, React, Node.js). This application features a customer-facing frontend, a robust backend API, and an admin panel for managing food items and orders.

## ✨ Features

### Customer Frontend

-   🔐 User authentication (Login/Signup) with JWT
-   🍕 Browse food items by category
-   🔍 Search and filter functionality
-   🛒 Shopping cart management
-   💳 Secure payment integration with Stripe
-   📦 Order tracking and order history
-   📱 Responsive design for all devices
-   👤 User profile management

### Admin Panel

-   ➕ Add new food items with image upload
-   📋 View and manage all food items
-   📊 Order management system
-   🚚 Update order status (Food Processing, Out for Delivery, Delivered)
-   📈 View all orders with customer details

### Backend API

-   RESTful API architecture
-   JWT-based authentication
-   MongoDB database integration
-   File upload handling with Multer
-   Secure password hashing with bcrypt
-   Payment processing with Stripe
-   CORS enabled for cross-origin requests

## 🛠️ Tech Stack

### Frontend

-   **React** - UI library
-   **Vite** - Build tool and development server
-   **React Router DOM** - Client-side routing
-   **Axios** - HTTP client
-   **Context API** - State management

### Backend

-   **Node.js** - Runtime environment
-   **Express** - Web framework
-   **MongoDB** - NoSQL database
-   **Mongoose** - ODM for MongoDB
-   **JWT** - Authentication
-   **Bcrypt** - Password hashing
-   **Stripe** - Payment processing
-   **Multer** - File upload handling
-   **Validator** - Input validation

### Admin Panel

-   **React** - UI library
-   **Vite** - Build tool
-   **React Toastify** - Toast notifications
-   **Axios** - HTTP client

## 📁 Project Structure

```
Food-delivery__App/
├── frontend/           # Customer-facing React app
│   ├── src/
│   │   ├── assets/     # Images and static files
│   │   ├── components/ # Reusable components
│   │   │   ├── navbar/
│   │   │   ├── header/
│   │   │   ├── exploreMenu/
│   │   │   ├── food-display/
│   │   │   ├── food-item/
│   │   │   ├── footer/
│   │   │   ├── login-popup/
│   │   │   └── app-download/
│   │   ├── context/    # Context API state management
│   │   ├── pages/      # Page components
│   │   │   ├── home/
│   │   │   ├── cart/
│   │   │   ├── placeOrder/
│   │   │   ├── verify/
│   │   │   └── my-orders/
│   │   └── App.jsx
│   └── package.json
│
├── backend/            # Node.js/Express API
│   ├── config/         # Database configuration
│   ├── controllers/    # Route controllers
│   │   ├── userController.js
│   │   ├── foodController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   ├── middleware/     # Authentication middleware
│   ├── models/         # Mongoose models
│   │   ├── userModel.js
│   │   ├── foodModel.js
│   │   └── orderModel.js
│   ├── routes/         # API routes
│   │   ├── userRoute.js
│   │   ├── foodRoute.js
│   │   ├── cartRoute.js
│   │   └── orderRoute.js
│   ├── uploads/        # Uploaded food images
│   ├── server.js       # Entry point
│   └── package.json
│
└── admin/              # Admin panel React app
    ├── src/
    │   ├── components/ # Navbar and Sidebar
    │   ├── pages/      # Admin pages
    │   │   ├── Add/    # Add food items
    │   │   ├── List/   # List all food items
    │   │   └── Orders/ # Manage orders
    │   └── App.jsx
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   MongoDB (local or MongoDB Atlas)
-   npm or yarn
-   Stripe account for payment processing

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd Food-delivery__App
```

2. **Backend Setup**

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the backend server:

```bash
npm run server
```

The backend will run on `http://localhost:4000`

3. **Frontend Setup**

````bash
cd ../frontend
npm install

Start the frontend development server:
```bash
npm run dev
````

The frontend will run on `http://localhost:5173`

4. **Admin Panel Setup**

```bash
cd ../admin
npm install
```

Start the admin panel:

```bash
npm run dev
```

The admin panel will run on `http://localhost:5174`

## 📝 API Endpoints

### User Routes

-   `POST /api/user/register` - Register new user
-   `POST /api/user/login` - User login

### Food Routes

-   `GET /api/food/list` - Get all food items
-   `POST /api/food/add` - Add new food item (admin)
-   `POST /api/food/remove` - Remove food item (admin)

### Cart Routes

-   `POST /api/cart/add` - Add item to cart
-   `POST /api/cart/remove` - Remove item from cart
-   `POST /api/cart/get` - Get user cart

### Order Routes

-   `POST /api/order/place` - Place new order
-   `POST /api/order/verify` - Verify payment
-   `POST /api/order/userorders` - Get user orders
-   `GET /api/order/list` - Get all orders (admin)
-   `POST /api/order/status` - Update order status (admin)

## 🔒 Environment Variables

### Backend (.env)

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Frontend (.env) - Optional

```env
VITE_API_URL=http://localhost:4000
```

## 🎨 Key Features Implementation

### Authentication

-   JWT-based authentication with secure password hashing
-   Protected routes using middleware
-   Token stored in localStorage

### Payment Integration

-   Stripe payment gateway integration
-   Secure payment verification
-   Order status tracking after successful payment

### Image Upload

-   Multer middleware for handling file uploads
-   Images stored in backend/uploads directory
-   Served as static files through Express

### State Management

-   Context API for global state management
-   Cart state persistence
-   User authentication state

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Dinesh Nikum**
