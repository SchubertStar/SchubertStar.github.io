import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function Home({ searchTerm }) {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const filteredPosts = sortedPosts.filter((post) => {
    const term = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(term) ||
      post.description.toLowerCase().includes(term) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(term))
    );
  });

  return (
    <div className="page home">
      <div className="hero">
        <img src="/vite.svg" alt="Hero" />
      </div>

      <div className="posts">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>

      <footer className="home-footer">
        <p>© 2025 Ian Alexander Michel</p>
      </footer>
    </div>
  );
}