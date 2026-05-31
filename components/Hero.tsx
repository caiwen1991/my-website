'use client'

export function Hero() {
  return (
    <section className="pt-32 pb-20 container-wrapper">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
          AI Project Portfolio
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Exploring the intersection of artificial intelligence, machine learning, and innovative solutions.
        </p>
        <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-blue-600 transition">
          View My Work
        </button>
      </div>
    </section>
  )
}
