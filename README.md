# Content Management System (CMS)

A modern, full-stack Content Management System built with React frontend and Node.js/Express backend. This CMS allows users to create, manage, and publish blog posts and static pages with a user-friendly admin interface.

## 🚀 Features

### Frontend (Admin Panel)

- **User Authentication** - Secure login system with JWT tokens
- **Dashboard** - Overview of content statistics and recent activity
- **Blog Management** - Create, edit, and delete blog posts
- **Page Management** - Create and manage static pages
- **Media Management** - Upload and organize media files
- **Draft/Published System** - Save posts as drafts before publishing
- **SEO Optimization** - Custom SEO titles and descriptions for each post/page
- **Responsive Design** - Modern UI built with Tailwind CSS
- **Rich Text Editor** - Enhanced content editing experience

### Backend (API)

- **RESTful API** - Clean and organized API endpoints
- **Database Integration** - MongoDB with Mongoose ODM
- **Authentication** - JWT-based user authentication
- **File Upload** - Cloudinary integration for media management
- **Slug Generation** - Automatic URL-friendly slug creation
- **CORS Support** - Cross-origin resource sharing enabled
- **Error Handling** - Comprehensive error handling and validation

### Public Interface

- **Blog Listing** - Public blog posts with pagination
- **Blog Details** - Individual blog post pages with SEO optimization
- **Static Pages** - Custom pages with friendly URLs
- **SEO Friendly** - Optimized URLs and meta tags

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications
- **React Quill** - Rich text editor
- **React Icons** - Icon library

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload middleware
- **Cloudinary** - Cloud-based image/video management
- **Slugify** - URL slug generation
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd cms
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

### 4. Environment Configuration

#### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/cms

# JWT Secret (generate a secure random string)
JWT_SECRET=your-super-secret-jwt-key-here

# Server Configuration
PORT=8000

# Cloudinary Configuration (for media uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

#### Frontend Environment Variables (Optional)

Create a `.env` file in the `frontend` directory if needed:

```env
VITE_API_URL=http://localhost:8000/api
```

## 🚀 Running the Application

### Development Mode

#### Start Backend Server

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:8000`

#### Start Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend application will start on `http://localhost:5173`

### Production Build

#### Build Frontend

```bash
cd frontend
npm run build
```

#### Start Backend in Production

```bash
cd backend
npm start
```

## 📚 API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration (if implemented)

### Posts

- `GET /api/posts` - Get all posts
- `GET /api/posts/published` - Get published posts only
- `GET /api/posts/:slug` - Get post by slug
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `PATCH /api/posts/:id/toggle-publish` - Toggle publish status

### Pages

- `GET /api/pages` - Get all pages
- `GET /api/pages/:slug` - Get page by slug
- `POST /api/pages` - Create new page
- `PUT /api/pages/:id` - Update page
- `DELETE /api/pages/:id` - Delete page

### Media

- `GET /api/media` - Get all media files
- `POST /api/media/upload` - Upload media file

## 🎯 Usage Guide

### Getting Started

1. **Login to Admin Panel**

   - Navigate to `http://localhost:5173/login`
   - Use your admin credentials (you may need to create the first admin user)

2. **Dashboard Overview**

   - View content statistics
   - Quick access to all CMS features

3. **Creating Content**
   - **Blog Posts**: Use Posts section to create blog articles
   - **Static Pages**: Use Pages section to create website pages
   - **Media**: Upload images and files in Media section

### Content Management

#### Blog Posts

- Create draft posts before publishing
- Add SEO metadata for better search engine visibility
- Use rich text editor for formatting
- Automatically generated URLs based on post titles

#### Pages

- Create static pages for About, Contact, etc.
- SEO-friendly URLs
- Content management similar to blog posts

#### Media Management

- Upload images, videos, and documents
- Cloudinary integration for fast delivery
- Automatic optimization and resizing

### Public Website

The public-facing website includes:

- **Home Page**: `http://localhost:5173/`
- **Blog List**: `http://localhost:5173/blogs`
- **Blog Detail**: `http://localhost:5173/blogs/:slug`
- **Static Pages**: `http://localhost:5173/:slug`

## 🔐 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt for secure password storage
- **Protected Routes** - Admin routes require authentication
- **Input Validation** - Server-side validation for all inputs
- **CORS Configuration** - Proper cross-origin setup
- **Environment Variables** - Sensitive data stored securely

## 📱 Responsive Design

The CMS is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile devices

## 🔄 Development Features

### Hot Reload

- Frontend: Automatic reload on file changes
- Backend: Automatic restart with nodemon

### Code Quality

- ESLint configuration for JavaScript linting
- Modern React patterns with hooks
- RESTful API design principles

## 🚀 Deployment

### Frontend Deployment

1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to your hosting service

### Backend Deployment

1. Ensure all environment variables are configured
2. Deploy to your preferred Node.js hosting service
3. Configure MongoDB connection for production

### Environment Variables for Production

- Update `MONGODB_URI` with production database
- Use strong `JWT_SECRET`
- Configure Cloudinary for production media storage
- Set appropriate `PORT` for your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**

- Ensure MongoDB is running
- Check connection string in `.env` file

**CORS Errors**

- Verify backend CORS configuration
- Check frontend API URL

**File Upload Issues**

- Verify Cloudinary credentials
- Check file size limits

**Build Errors**

- Clear node_modules and reinstall dependencies
- Check Node.js version compatibility

## 📞 Support

For support and questions:

- Create an issue in the repository
- Check existing documentation
- Review troubleshooting section

## 🎉 Acknowledgments

- React team for the excellent framework
- Express.js community
- MongoDB team
- All open-source contributors

---

**Built with ❤️ using modern web technologies**
