import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <p>Post not found.</p>;

  return (
    <article>
      <h1>{post.title}</h1>
      <span className="date-title">{post.date}</span>
      <p>{post.description}</p>
      <p>{post.content}</p>

      {post.image && <img src={post.image} alt={post.title} />}
      {post.audio && (
        <audio controls>
          <source src={post.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </article>
  );
}
