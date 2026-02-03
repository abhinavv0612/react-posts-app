import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (!title.trim()) return setError("Title is required");
    if (description.length > 1000) return setError("Max 1000 characters");

    try {
      setLoading(true);
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body: description,
      });
      navigate("/");
    } catch {
      setError("Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2>Create New Post</h2>

      <form onSubmit={handleSubmit} className="card">
        <div className="form-group">
          <label>Post Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Post Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            maxLength={1000}
          />
          <div className="char-count">{description.length}/1000 characters</div>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

<button type="submit" disabled={loading}>
  {loading ? <div className="button-spinner"></div> : "Submit Post"}
</button>

      </form>
    </div>
  );
}
