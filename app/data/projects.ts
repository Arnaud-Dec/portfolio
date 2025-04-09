import { link } from "fs";

export const projects = [
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
      "/assets/vuear/vueAR-logo-16-9.png?height=600&width=600",
      "/assets/vuear/vueAR-AR.png?height=600&width=800",
      "/assets/vuear/vueAR-VR.png?height=600&width=800",
    ],
    video: "https://www.youtube.com/embed/MF6B7gSeJSE",
    link: "https://github.com/MathisB2/vue-ar-project/tree/SAE-but-3-usdz-mobile",
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
      "/assets/lome/lome-icone-16-9.png?height=600&width=800",
      "/assets/lome/lome-diagram-16-9.png?height=600&width=800",
      
    ],
    video: "https://example.com/video.mp4",
    link: "https://github.com/Arnaud-Dec/lome",
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
      "/assets/ciril/Logo-Ciril-GROUP.png?height=600&width=800",
    ],
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
      "../../placeholder.svg?height=600&width=800",
      "../../placeholder.svg?height=600&width=800",
      "../../placeholder.svg?height=600&width=800",
    ],
    video: "https://example.com/video.mp4",
    link:"https://github.com/Arnaud-Dec/Hichat-artifact",
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
      "../../placeholder.svg?height=600&width=800",
      "../../placeholder.svg?height=600&width=800",
      "../../placeholder.svg?height=600&width=800",
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
      "../../placeholder.svg?height=600&width=800",
      "../../placeholder.svg?height=600&width=800",
      "../../placeholder.svg?height=600&width=800",
    ],
  },
]