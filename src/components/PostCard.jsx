import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <article>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <h2 className="title">{post.title}</h2>
        <span className="date-title">{post.date}</span>
      </div>
      <p className="description">{post.description}</p>
      <Link to={`posts/${post.id}`}>Read more</Link>
    </article>
  );
}