'use client'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-md border-b border-secondary z-50">
      <nav className="container-wrapper flex justify-between items-center h-16">
        <div className="text-xl font-bold text-accent">Caiwen's AI Portfolio</div>
        <ul className="hidden md:flex gap-8">
          <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
          <li><a href="#about" className="hover:text-accent transition">About</a></li>
          <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
