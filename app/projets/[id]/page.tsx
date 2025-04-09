import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Github, Linkedin, Mail } from "lucide-react"

import {fixAssetPath} from "@/lib/fixAssetPath"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TechBadge from "@/components/tech-badge"
import InteractiveBackground from "@/components/interactive-background"
import { projects } from "../../data/projects"

// Simulation de données de projets

export async function generateStaticParams() {
  // Retourne un tableau d'objets avec tous les IDs possibles
  return projects.map(project => ({
    id: project.id.toString(),
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id) || projects[0]

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
            <Link href="/#projets" className="hover:text-gray-400 transition-colors">
              Projets
            </Link>
            <Link href="/#competences" className="hover:text-gray-400 transition-colors">
              Compétences
            </Link>
            <Link href="/#contact" className="hover:text-gray-400 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 container mx-auto py-12 z-10">
        <Link href="/#projets" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux projets
        </Link>

        <div className="space-y-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <TechBadge key={index} name={tech} />
              ))}
            </div>
            <div className="h-[60vh] relative rounded-xl overflow-hidden border border-white/10">
              <Image src={fixAssetPath(project.images[0] || "/placeholder.svg")} alt={project.title} fill className="object-cover" />
            </div>
          </div>

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="tasks">Tâches Réalisées</TabsTrigger>
              <TabsTrigger value="media">Médias</TabsTrigger>
            </TabsList>
            <TabsContent
              value="description"
              className="space-y-6 backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-xl leading-relaxed">{project.description}</p>
              </div>
            </TabsContent>
            <TabsContent
              value="tasks"
              className="space-y-6 backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10"
            >
              <ul className="space-y-4">
                {project.tasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                    </div>
                    <span className="text-lg">{task}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent
              value="media"
              className="space-y-8 backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src={fixAssetPath(image || "/placeholder.svg")}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {project.video && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Vidéo de présentation</h3>
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-white/5">
                    {project.video.includes("youtube.com") || project.video.includes("youtu.be") ? (
                      <iframe
                        src={project.video.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/")}
                        title={`Vidéo ${project.title}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video controls className="w-full h-full object-cover">
                        <source src={project.video} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture vidéo.
                      </video>
                    )}
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {project.link && (
            <div className="flex justify-center pt-8">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Voir le projet en ligne
                </Button>
              </a>
            </div>
          )}
        </div>
      </main>

      <footer className="container mx-auto py-6 border-t border-white/10 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Portfolio. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/Arnaud-Dec" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/arnaud-decourt-6096202a2/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:arnaud.decourt.pro@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

