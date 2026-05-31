# My AI Project Portfolio

A personal website built with Next.js to showcase my artificial intelligence and machine learning projects.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/caiwen1991/my-website.git
cd my-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Projects.tsx      # Projects showcase
│   ├── About.tsx         # About me section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── public/               # Static files
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── next.config.js        # Next.js config
└── tailwind.config.ts    # Tailwind CSS config
```

## 🎨 Customization

### Update Your Information
1. Edit `components/Hero.tsx` - Update hero section text
2. Edit `components/About.tsx` - Add your bio
3. Edit `components/Projects.tsx` - Add your AI projects
4. Edit `components/Contact.tsx` - Add your contact links
5. Update `app/layout.tsx` - Change site metadata

### Add Your Projects

Edit the `projects` array in `components/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Brief description of what the project does',
    tags: ['Python', 'TensorFlow', 'AI'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
  },
  // ... more projects
]
```

## 🎯 Features

- ✨ Modern, responsive design
- 🎨 Tailwind CSS styling
- 🔧 TypeScript for type safety
- 📱 Mobile-friendly
- ⚡ Fast performance with Next.js
- 🌙 Dark theme optimized for tech portfolios
- 🔗 Easy links to GitHub, LinkedIn, and contact

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

Easy deployment options:

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Automatic deployments on every push

### Other Platforms
- GitHub Pages
- Netlify
- AWS Amplify

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to fork, modify, and improve this portfolio template.

---

**Happy coding! 🚀**
