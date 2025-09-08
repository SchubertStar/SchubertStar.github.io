import ReactMarkdown from "react-markdown";

export default function PostContent({ post }) {
  return (
    <article className="post-content">
      <h1>{post.title}</h1>
      <p className="date">{new Date(post.date).toLocaleDateString()}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}