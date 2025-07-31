const projects = [
  { title: 'Professional Project 1', url: 'https://…' },
  // …more
]

export default function Blog() {
  return (
    <section className="Blog">
      <h2>Blog</h2>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              {p.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}