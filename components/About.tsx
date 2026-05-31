'use client'

export function About() {
  return (
    <section id="about" className="py-20 container-wrapper">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-300 mb-4 leading-relaxed">
          I'm passionate about artificial intelligence and machine learning. This portfolio showcases my projects
          and explorations in AI development.
        </p>
        <p className="text-gray-300 mb-4 leading-relaxed">
          My focus areas include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Machine Learning & Deep Learning</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
          <li>AI Model Development & Optimization</li>
        </ul>
      </div>
    </section>
  )
}
