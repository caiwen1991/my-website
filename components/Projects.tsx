'use client'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project Title Here',
    description: 'Add your first AI project description here. Include what problem it solves and what technologies were used.',
    tags: ['AI', 'Python', 'TensorFlow'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Another AI Project',
    description: 'Describe your second project. What was the challenge? What was your approach?',
    tags: ['Machine Learning', 'PyTorch', 'NLP'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Your Third Project',
    description: 'Add more projects as you build them. Keep your portfolio updated with your latest work.',
    tags: ['Deep Learning', 'Computer Vision', 'Python'],
    github: '#',
    demo: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container-wrapper">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-secondary p-6 rounded-lg border border-gray-700 hover:border-accent transition hover:shadow-lg hover:shadow-blue-500/20"
            >
              <h3 className="text-xl font-semibold mb-2 text-accent">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-accent/20 text-accent px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-sm text-accent hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="text-sm text-accent hover:underline"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
