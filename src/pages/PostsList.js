import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const LIMIT = 10;

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const cacheKey = `posts-${page}`;
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) return setPosts(JSON.parse(cached));

      try {
        setLoading(true);
        setError("");

        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_start=${page * LIMIT}&_limit=${LIMIT}`
        );

        setPosts(res.data);
        sessionStorage.setItem(cacheKey, JSON.stringify(res.data));
      } catch {
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  return (
    <div className="page">

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ margin: 0 }}>Posts</h1>
        <button onClick={() => navigate("/create")}>+ Create Post</button>
      </div>

      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Post Cards */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="card post-card"
          onClick={() => navigate(`/post/${post.id}`)}
          style={{ cursor: "pointer" }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      {/* Pagination */}
      <div className="pagination">
        <button disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
          Previous
        </button>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}
