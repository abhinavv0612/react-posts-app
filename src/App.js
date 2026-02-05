import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsList from "./pages/PostsList";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
