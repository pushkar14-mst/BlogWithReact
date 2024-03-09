import Blog from "./components//Blog.js";

import "./App.css";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage.jsx";
import CreatePostPage from "./pages/CreatePostPage/CreatePostPage.jsx";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user-profile" element={<UserProfilePage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/create-post" element={<CreatePostPage />} />
      <Route path="post/:title" element={<PostDetailPage />} />
    </Routes>
  );
}

export default App;
