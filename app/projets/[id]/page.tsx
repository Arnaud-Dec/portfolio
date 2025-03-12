import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TechBadge from "@/components/tech-badge"
import InteractiveBackground from "@/components/interactive-background"

// Simulation de données de projets
const projects = [
  {
    id: "1",
    title: "VueAR",
    description:
      "VueAR est une application iOS développée en Swift qui permet la visualisation d'objets 3D en réalité augmentée. Elle utilise ARKit pour placer et manipuler des modèles 3D dans l'environnement réel, offrant une expérience immersive pour les utilisateurs. L'application permet de charger différents types de modèles 3D, de les redimensionner, les faire pivoter et interagir avec eux dans l'espace réel.",
    tasks: [
      "Développement de l'interface utilisateur intuitive avec SwiftUI",
      "Intégration d'ARKit pour le placement d'objets en réalité augmentée",
      "Implémentation du chargement et rendu de modèles 3D avec SceneKit",
      "Création de fonctionnalités d'interaction avec les objets (rotation, zoom, déplacement)",
      "Optimisation des performances pour différents appareils iOS",
      "Mise en place d'une bibliothèque de modèles 3D préchargés",
    ],
    technologies: ["Swift", "ARKit", "SceneKit", "iOS", "SwiftUI", "Core Animation"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: "https://example.com/video.mp4",
  },
  {
    id: "2",
    title: "Lome",
    description:
      "Lome est un assistant domotique intelligent basé sur le modèle de langage Llama 3.2. Il permet de contrôler divers appareils connectés via des microcontrôleurs ESP32. L'assistant comprend les commandes en langage naturel, les interprète et envoie les instructions appropriées aux différents appareils de la maison. Lome apprend également des habitudes des utilisateurs pour proposer des automatisations personnalisées.",
    tasks: [
      "Intégration et fine-tuning du modèle Llama 3.2 pour la compréhension des commandes",
      "Développement du firmware pour les ESP32 contrôlant différents appareils",
      "Création d'un protocole de communication sécurisé entre le serveur et les ESP32",
      "Implémentation d'un système d'apprentissage des habitudes utilisateur",
      "Développement d'une interface web pour la configuration et le monitoring",
      "Optimisation de la consommation énergétique des appareils connectés",
    ],
    technologies: ["Python", "LLMs", "ESP32", "IoT", "MQTT", "C++", "TensorFlow", "WebSockets"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: "https://example.com/video.mp4",
  },
  {
    id: "3",
    title: "Système de Signature",
    description:
      "Système de signature des licences internes développé pour CirilGroup. Cette solution permet de générer, valider et gérer les licences logicielles de manière sécurisée. Le système utilise des algorithmes cryptographiques avancés pour garantir l'authenticité des licences et empêcher leur utilisation non autorisée.",
    tasks: [
      "Conception de l'architecture du système de gestion des licences",
      "Implémentation des algorithmes cryptographiques pour la signature et vérification",
      "Développement d'une API REST pour l'intégration avec les produits existants",
      "Création d'un tableau de bord d'administration pour la gestion des licences",
      "Mise en place d'un système de détection des utilisations frauduleuses",
      "Documentation complète et formation des équipes internes",
    ],
    technologies: ["Node.js", "Cryptographie", "API REST", "JWT", "PostgreSQL", "Docker", "Sécurité"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: "https://example.com/video.mp4",
  },
  {
    id: "4",
    title: "Hichat (Kotlin)",
    description:
      "Hichat est une application de messagerie innovante développée en Kotlin pour Android. Sa particularité réside dans son système d'ajout de contacts: les utilisateurs peuvent uniquement se connecter en scannant mutuellement leurs QR codes, garantissant ainsi une vérification physique des contacts et renforçant la sécurité. L'application offre des fonctionnalités de messagerie instantanée, partage de médias et appels vidéo.",
    tasks: [
      "Développement de l'application native Android avec Kotlin et Jetpack Compose",
      "Implémentation du système de génération et lecture de QR codes",
      "Création d'un backend sécurisé avec Firebase pour la gestion des utilisateurs",
      "Développement des fonctionnalités de messagerie en temps réel",
      "Mise en place du chiffrement de bout en bout pour les conversations",
      "Optimisation des performances et de l'expérience utilisateur",
    ],
    technologies: ["Kotlin", "Android", "Jetpack Compose", "Firebase", "QR Code", "WebRTC", "Chiffrement"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: "https://example.com/video.mp4",
  },
  {
    id: "5",
    title: "Hichat (Flutter)",
    description:
      "Version cross-platform de Hichat développée avec Flutter, permettant de déployer l'application sur iOS et Android à partir d'une base de code unique. Cette version conserve le concept d'ajout de contacts via QR code tout en offrant une expérience utilisateur cohérente sur les différentes plateformes.",
    tasks: [
      "Refactorisation de l'application en Flutter pour le support multi-plateformes",
      "Adaptation de l'interface utilisateur pour respecter les guidelines iOS et Android",
      "Optimisation des performances sur les différents appareils",
      "Intégration des API natives pour la gestion des caméras et QR codes",
      "Mise en place d'une architecture propre avec BLoC pattern",
      "Tests automatisés pour garantir la stabilité sur les différentes plateformes",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "BLoC", "Cross-platform", "QR Code", "CI/CD"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: "https://example.com/video.mp4",
  },
  {
    id: "6",
    title: "Projet R&D",
    description:
      "Projet de recherche et développement en cours, explorant de nouvelles technologies et approches innovantes. Les détails seront communiqués ultérieurement.",
    tasks: [
      "Recherche et veille technologique",
      "Prototypage et tests de concepts",
      "Développement de preuves de concept",
      "Analyse de faisabilité et d'impact",
      "Documentation des résultats et apprentissages",
      "Préparation pour l'industrialisation",
    ],
    technologies: ["R&D", "Innovation", "Prototype", "Recherche"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    video: "https://example.com/video.mp4",
  },
]

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
              <Image src={project.images[0] || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
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
                      src={image || "/placeholder.svg"}
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
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                    <p className="text-gray-400">Vidéo de démonstration du projet</p>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="flex justify-center pt-8">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Voir le projet en ligne
            </Button>
          </div>
        </div>
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

