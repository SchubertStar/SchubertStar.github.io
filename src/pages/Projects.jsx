const projects = [
  { title: 'Professional Project 1', url: 'https://…' },
]

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
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