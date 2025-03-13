import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Code, Server, Cpu, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import InteractiveBackground from "@/components/interactive-background"
import TechBadge from "@/components/tech-badge"
import ProfileImage from "@/components/profile-image"

export default function Home() {
  const technologies = [
    "Swift",
    "Kotlin",
    "Flutter",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "LLMs",
    "IoT",
    "ESP32",
    "C++",
    "Docker",
    "AWS",
    "Firebase",
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <InteractiveBackground />

      <header className="container mx-auto py-6 z-10">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            ARNAUD.DEV
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-gray-400 transition-colors">
              Accueil
            </Link>
            <Link href="#projets" className="hover:text-gray-400 transition-colors">
              Projets
            </Link>
            <Link href="#competences" className="hover:text-gray-400 transition-colors">
              Compétences
            </Link>
            <Link href="#contact" className="hover:text-gray-400 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 z-10">
        {/* Hero Section */}
        <section className="container mx-auto py-20 md:py-32 flex flex-col items-center text-center">
          <div className="w-full max-w-3xl mx-auto space-y-8">
            <ProfileImage />
            <div className="inline-block px-3 py-1 border border-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm bg-white/5">
              Développeur Full Stack R&D
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              Innovation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Technologique
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Je conçois et développe des solutions innovantes à l'intersection du mobile, de l'IA et de l'IoT et parfois des truc pas ouf.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {technologies.slice(0, 8).map((tech, index) => (
                <TechBadge key={index} name={tech} />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Me contacter
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="competences" className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Compétences</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Mon expertise couvre un large spectre de technologies et domaines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 border border-white/10 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Développement Mobile</h3>
                <p className="text-gray-400 mb-4">
                  Applications natives et cross-platform avec Swift, Kotlin et Flutter.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge name="Swift" />
                  <TechBadge name="Kotlin" />
                  <TechBadge name="Flutter" />
                </div>
              </div>

              <div className="p-6 border border-white/10 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Backend & API</h3>
                <p className="text-gray-400 mb-4">Conception d'architectures robustes et évolutives.</p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge name="Node.js" />
                  <TechBadge name="Python" />
                  <TechBadge name="REST" />
                </div>
              </div>

              <div className="p-6 border border-white/10 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">IoT & Systèmes Embarqués</h3>
                <p className="text-gray-400 mb-4">
                  Développement de solutions connectées avec ESP32 et microcontrôleurs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge name="ESP32" />
                  <TechBadge name="C++" />
                  <TechBadge name="IoT" />
                </div>
              </div>

              <div className="p-6 border border-white/10 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Terminal className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Intelligence Artificielle</h3>
                <p className="text-gray-400 mb-4">Intégration de modèles LLM et systèmes d'IA dans des applications.</p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge name="LLMs" />
                  <TechBadge name="Python" />
                  <TechBadge name="TensorFlow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projets" className="container mx-auto py-20 space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Mes Projets</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Une sélection de mes travaux de recherche et développement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              id="1"
              title="VueAR"
              description="Application Swift de visualisation d'objets 3D en réalité augmentée."
              image="/placeholder.svg?height=400&width=600"
              technologies={["Swift", "ARKit", "SceneKit", "iOS"]}
            />
            <ProjectCard
              id="2"
              title="Lome"
              description="Assistant domotique basé sur LLama 3.2 contrôlant des ESP32."
              image="/placeholder.svg?height=400&width=600"
              technologies={["Python", "LLMs", "ESP32", "IoT"]}
            />
            <ProjectCard
              id="3"
              title="Système de Signature"
              description="Solution de signature des licences internes pour CirilGroup."
              image="/placeholder.svg?height=400&width=600"
              technologies={["Cryptographie", "Node.js", "Sécurité", "API"]}
            />
            <ProjectCard
              id="4"
              title="Hichat (Kotlin)"
              description="Application de communication avec ajout d'amis via QR code."
              image="/placeholder.svg?height=400&width=600"
              technologies={["Kotlin", "Android", "Firebase", "QR Code"]}
            />
            <ProjectCard
              id="5"
              title="Hichat (Flutter)"
              description="Version cross-platform de Hichat développée avec Flutter."
              image="/placeholder.svg?height=400&width=600"
              technologies={["Flutter", "Dart", "Firebase", "Cross-platform"]}
            />
            <ProjectCard
              id="6"
              title="Projet R&D"
              description="Projet de recherche en cours de développement."
              image="/placeholder.svg?height=400&width=600"
              technologies={["R&D", "Innovation", "Prototype"]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto py-20 space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Contact</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Intéressé par une collaboration? N'hésitez pas à me contacter.
            </p>
          </div>

          <div className="max-w-md mx-auto grid gap-8">
            <div className="flex items-center gap-4 p-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors backdrop-blur-sm">
              <Mail className="h-6 w-6" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-400">contact@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors backdrop-blur-sm">
              <Linkedin className="h-6 w-6" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-gray-400">linkedin.com/in/username</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors backdrop-blur-sm">
              <Github className="h-6 w-6" />
              <div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-gray-400">github.com/username</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto py-6 border-t border-white/10 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Portfolio. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

