import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function Portfolio() {
  const careerPosts = posts.filter((post) =>
    post.tags?.includes("career")
  );

  return (
    <div className="page portfolio">
      <h1>My Portfolio & CV</h1>
      <a href="/assets/my-cv.pdf" target="_blank" rel="noopener noreferrer">
        Download My CV
      </a>

      <h2>Relevant Posts</h2>
      <div className="posts">
        {careerPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}