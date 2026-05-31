'use client'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container-wrapper text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Interested in collaborating or discussing AI projects? Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Email Me
          </a>
          <a
            href="https://github.com/caiwen1991"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
