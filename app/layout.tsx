import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "@/app/globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Portfolio R&D - Développeur Full Stack",
  description: "Portfolio de développeur full stack R&D spécialisé en mobile, IA et IoT",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}



import './globals.css'