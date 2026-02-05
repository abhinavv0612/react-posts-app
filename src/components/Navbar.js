import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3>📝 Posts App</h3>
      <div>
        <Link to="/">Posts</Link> | <Link to="/create">Create</Link>
      </div>
    </div>
  );
}
