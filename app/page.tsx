import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Code, Server, Cpu, Terminal } from "lucide-react"

import { fixAssetPath } from "@/lib/fixAssetPath"
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
    "Spring Boot",
    "Java",
    "Docker",
    "LLMs",
    "IoT",
    "ESP32",
    "C++",
    "Node.js",
    "TypeScript",
    "Firebase",
  ]

  return (
    <div className="relative flex flex-col min-h-screen text-white">
      <InteractiveBackground />

      <header className="container mx-auto py-6 z-10">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            ARNAUD-DEC
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

      <main className="flex-1 z-10 relative">
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
              Alternant en développement R&D chez CirilGroup et étudiant au BUT Lyon 1, je suis un touche-à-tout passionné par la tech. Polyvalent et curieux, j'explore le mobile, l'IoT, l'IA et bien plus encore pour créer des solutions innovantes. Mes projets variés, tels que VueAR, Hichat et des outils de signature sécurisés, témoignent de ma capacité à relever des défis concrets avec des architectures modernes.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {technologies.slice(0, 8).map((tech, index) => (
                <TechBadge key={index} name={tech} />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="#projets">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Me contacter
              </Button>
            </Link>
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
              image={fixAssetPath("/assets/vuear/vueAR-logo-16-9.png?height=400&width=600")}
              technologies={["Swift","ARKit","RealityKit","SceneKit","SwiftUI","Core Animation","simd","USDZ","GLB","API REST"]}
            />
            <ProjectCard
              id="2"
              title="Lome"
              description="Assistant vocal pour contrôler des objets IoT via ESP32 et LLM."
              image={fixAssetPath("/assets/lome/lome-icone-16-9.png?height=400&width=600")}
              technologies={["Python", "LLMs", "ESP32", "IoT","MQTT", "TensorFlow", "WebSockets", "Docker", "Flask", "Redis"]}
            />
            <ProjectCard
              id="3"
              title="Système de Signature"
              description="Solution de signature des licences internes pour CirilGroup."
              image={fixAssetPath("/assets/ciril/cirilgroup.png?height=400&width=600")}
              technologies={["Cryptographie", "Sécurité", "Tool" ,"Java", "Maven", "PostgreSQL", "JUnit", "SHA256"]}
            />
            <ProjectCard
              id="4"
              title="Hichat (Kotlin)"
              description="App de messagerie avec ajout d’amis via QR code et notifications en temps réel."
              image={fixAssetPath("/assets/hichatK/hichat-logo.png?height=600&width=800")}
              technologies={["Kotlin","Android","XML","Firebase (Auth, Firestore)","Room","CI/CD","GitHub Actions","GitLab CI","SonarCloud","QR Code","MVVM"]}
            />
            <ProjectCard
              id="5"
              title="Hichat (Flutter)"
              description="Version Flutter de Hichat avec support iOS et Android, intégration Firebase."
              image={fixAssetPath("/assets/hichatF/hichat-logo.png?height=600&width=800")}
              technologies={["Flutter","Dart","Firebase (Auth, Firestore, Functions)","MVVM","Provider","QR Code","Cloud Messaging","Cross-platform"]}
            />
            <ProjectCard
              id="6"
              title="Robot de Trading"
              description="Robot d’analyse financière avec IA et API Flask pour exécuter des stratégies de trading."
              image={fixAssetPath("/assets/bot/bot-logo.png?height=600&width=800")}
              technologies={["Python", "IA","Recherche" ,"Flask", "API","Docker"]}
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
            <a href="mailto:arnaud.decourt.pro@gmail.com" className="flex items-center gap-4 p-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors backdrop-blur-sm">
              <Mail className="h-6 w-6" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-400">arnaud.decourt.pro@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/arnaud-decourt-6096202a2/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors backdrop-blur-sm">
              <Linkedin className="h-6 w-6" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-gray-400">arnaud-decourt</p>
              </div>
            </a>
            <a href="https://github.com/Arnaud-Dec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors backdrop-blur-sm">
              <Github className="h-6 w-6" />
              <div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-gray-400">Arnaud-Dec</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="container mx-auto py-6 border-t border-white/10 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Portfolio. Tous droits réservés à Arnaud Decourt.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Arnaud-Dec" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/arnaud-decourt-6096202a2/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:arnaud.decourt.pro@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

