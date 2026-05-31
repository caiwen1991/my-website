import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My AI Projects',
  description: 'Personal portfolio showcasing AI and machine learning projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-gray-100">
        {children}
      </body>
    </html>
  )
}
