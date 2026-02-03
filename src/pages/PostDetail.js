import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(res.data);
      } catch {
        setError("Failed to load post");
      }
    };
    fetchPost();
  }, [id]);

  if (!post && !error) return <Loader />;

  return (
    <div className="page">
      <button onClick={() => navigate(-1)}>← Back</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {post && (
        <div className="card">
          <h2>{post.title}</h2>
          <p style={{ lineHeight: "1.6", color: "#555" }}>{post.body}</p>
        </div>
      )}
    </div>
  );
}
