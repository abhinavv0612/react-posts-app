# 📝 React Posts Application

A modern React application that allows users to browse posts, view post details, and create new posts.  
Built as part of a frontend code challenge.

---

## 🚀 Live Demo
🔗 **Deployed App:** https://imaginative-malasada-24c490.netlify.app/

---

## 📌 Features

### 📄 Posts List
- Fetches posts from an API
- Displays title and description
- Pagination using Next / Previous buttons
- Client-side caching for faster navigation

### 🔍 Post Detail
- Click any post to view full details
- Dynamic routing using post ID

### ➕ Create New Post
- Title and description input fields
- Title is mandatory
- Description limited to 1000 characters
- Form validation
- Loading indicator while submitting
- Redirects to post list after submission

---

## 🛠 Technologies Used

- **React**
- **React Router**
- **Axios**
- **CSS (custom styling)**
- **Netlify (deployment)**

---

## ⚙️ Setup Instructions (Run Locally)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/react-posts-app.git
cd react-posts-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm start
```

App will run at:
```
http://localhost:3000
```

---

## 🏗 Build for Production

```bash
npm run build
```

This creates optimized files in the `build/` folder.

---

## 📦 Project Structure

```
src/
 ├── components/
 │    ├── Loader.js
 │    └── Navbar.js
 ├── pages/
 │    ├── PostsList.js
 │    ├── PostDetail.js
 │    └── CreatePost.js
 ├── App.js
 └── index.js
```

---

## ⭐ Bonus Enhancements

- Client-side caching using sessionStorage
- Responsive design for mobile and desktop
- Loading spinners
- Modern card-based UI with hover effects
- Styled gradient background

---

## 📄 Notes

The API used is:
```
https://jsonplaceholder.typicode.com/posts
```
It simulates post creation but does not persist new posts permanently.

---

## 👤 Author

Developed by **Abhinav Tomar**
