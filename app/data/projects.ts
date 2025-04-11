import { link } from "fs";
import { fixAssetPath } from "@/lib/fixAssetPath";

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
      "Transformation des fichiers GLB vers le format USDZ pour une compatibilité iOS étendue",
      "Application des transformations (position, rotation, échelle) fournies par l'API dans la scène AR",
      "Analyse et tests d’ARKit pour garantir un rendu AR optimal",
      "Rédaction d’un manuel d'installation complet"
    ],
    technologies: [
      "Swift","ARKit","RealityKit","SceneKit","SwiftUI","Core Animation","simd","USDZ","GLB","API REST"
    ],
    images: [
      "/assets/vuear/vueAR-logo-16-9.png?height=600&width=600",
      "/assets/vuear/vueAR-AR.png?height=600&width=800",
      "/assets/vuear/vueAR-VR.png?height=600&width=800",
      "/assets/vuear/vueAR-projets.png?height=600&width=800"
    ],
    video: "https://www.youtube.com/embed/MF6B7gSeJSE",
    link: "https://github.com/MathisB2/vue-ar-project/tree/SAE-but-3-usdz-mobile"
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
      "Gestion du contexte utilisateur avec Redis pour des réponses personnalisées",
      "Déploiement conteneurisé avec Docker et orchestration via Docker Compose"
    ],
    technologies: ["Python", "LLMs", "ESP32", "IoT", "MQTT", "TensorFlow", "WebSockets", "Docker", "Flask", "Redis"],
    images: [
      "/assets/lome/lome-icone-16-9.png?height=600&width=800",
      "/assets/lome/lome-diagram-16-9.png?height=600&width=800",
      "/assets/lome/lome-login.png?height=600&width=800",
      "/assets/lome/lome-message.png?height=600&width=800",
      
    ],
    video: "https://youtu.be/D51o6VYnlKQ",
    link: "https://github.com/Arnaud-Dec/lome",
  },
  {
    id: "3",
    title: "Système de Signature",
    description:
      "Système de signature des licences internes pour CirilGroup. Outil Java (jar compilé avec Maven) qui récupère des infos depuis une BDD PostgreSQL, effectue des opérations internes via JUnit, et applique un hash SHA256 pour sécuriser les licences.",
    tasks: [
      "Récupération d'informations depuis la BDD PostgreSQL",
      "Exécution d'opérations internes via JUnit",
      "Hashage sécurisé des licences avec SHA256",
      "Mise à jour sécurisée des licences dans la BDD"
    ],
    technologies: ["Cryptographie", "Sécurité", "Tool" ,"Java", "Maven", "PostgreSQL", "JUnit", "SHA256"],
    images: [
      "/assets/ciril/Logo-Ciril-GROUP.png?height=600&width=800",
    ],
  },
  {
    id: "4",
    title: "Hichat (Kotlin)",
    description:
      "Hichat est une application de messagerie sécurisée développée en Kotlin pour Android. Elle repose sur Firestore pour le stockage des messages et des contacts. Son originalité réside dans son système d'ajout d'amis exclusivement par QR code, empêchant toute usurpation d'identité. J’ai principalement travaillé sur l’intégration complète de Firebase et la mise en place d’une CI/CD robuste, ainsi que sur plusieurs fonctionnalités de l’app côté frontend.",
    tasks: [
      "Implémentation complète de Firebase : Firestore, Authentication et gestion des utilisateurs",
      "Mise en place du système d'ajout d'amis via QR code avec synchronisation dans Firestore",
      "Développement des fonctionnalités de messagerie instantanée en temps réel avec Firestore",
      "Gestion des connexions en ligne et hors ligne avec Room + Firebase",
      "Création de plusieurs fragments (Home, Profil, Favoris, Chat/Message)",
      "Développement d'une CI/CD complète avec GitHub Actions et GitLab CI",
      "Configuration de 3 environnements distincts (dev, preprod, prod) avec notifications dédiées",
      "Intégration de SonarCloud pour l’analyse statique du code",
      "Ajout d'une popup d'avertissement en preprod pour informer l'utilisateur",
      "Gestion dynamique du pseudo utilisateur via Firestore"
    ],
    technologies: ["Kotlin","Android","XML","Firebase (Auth, Firestore)","Room","CI/CD","GitHub Actions","GitLab CI","SonarCloud","QR Code","MVVM"],
    images: [
      "/assets/hichatK/hichat-logo.png?height=600&width=800",
      "/assets/hichatK/hichatK-home.png?height=600&width=800",
      "/assets/hichatK/hichatK-login.png?height=600&width=800",
      "/assets/hichatK/hichatK-message.png?height=600&width=800",
      "/assets/hichatK/hichatK-QR.png?height=600&width=800"
    ],
    link: "https://github.com/Arnaud-Dec/Hichat-artifact"
  },  
  {
    id: "5",
    title: "Hichat (Flutter)",
    description:
      "Hichat est une application de messagerie sécurisée cross-platform développée en Flutter. Elle propose une expérience fluide sur iOS et Android en s’appuyant exclusivement sur Firebase pour la gestion des utilisateurs, des messages et des notifications. J’ai réalisé presque l’intégralité de l’application, en mettant en place une architecture propre MVVM avec séparation claire entre vue, domaine et données. Les contacts s’ajoutent uniquement via un scan de QR code, garantissant une sécurité renforcée.",
    tasks: [
      "Définition et mise en place de l'architecture MVVM avec repository, datasources et modèles",
      "Développement complet de l’interface utilisateur (pages login, register, home, message, add friend)",
      "Connexion à Firebase pour la gestion des messages, utilisateurs et favoris",
      "Implémentation de l’authentification Firebase (inscription, connexion, logout)",
      "Ajout du système de notifications avec Firebase Functions et configuration des canaux",
      "Affichage du dernier message dans les aperçus de conversation",
      "Gestion des erreurs de connexion et affichage de messages adaptés",
      "Intégration de la génération et lecture de QR codes pour l’ajout d’amis",
      "Ajout d’une image de lancement et personnalisation de l’apparence de l’app",
      "Refactorisation régulière pour maintenir une base de code claire et scalable"
    ],
    technologies: [
"Flutter","Dart","Firebase (Auth, Firestore, Functions)","MVVM","Provider","QR Code","Cloud Messaging","Cross-platform"],
    images: [
      "/assets/hichatF/hichat-logo.png?height=600&width=800",
      "/assets/hichatF/hichatF-home.png?height=600&width=800",
      "/assets/hichatF/hichatF-login.png?height=600&width=800",
      "/assets/hichatF/hichatF-message.png?height=600&width=800",
      "/assets/hichatF/hichatF-QR.png?height=600&width=800"
    ],
    video: "https://youtu.be/J17WAU8hnLY"
  },  
  {
    id: "6",
    title: "Robot de Trading",
    description:
      "CryptoBot est un projet de recherche personnel visant à étudier les comportements des cryptomonnaies pour en identifier les patterns et alimenter, à terme, une IA de deep learning capable de trader de façon autonome. Le but n’est pas le profit mais l’analyse scientifique des dynamiques de marché. Le bot collecte des données en temps réel depuis Binance, les stocke localement, génère des visualisations, calcule des indicateurs (CCI, rendements journaliers) et peut, en option, exécuter des trades sur un environnement de test. Une interface web Flask permet la consultation et l’analyse graphique des données.",
    tasks: [
      "Récupération en temps réel de données OHLCV depuis Binance via ccxt",
      "Traitement, structuration et stockage des données dans une base SQLite",
      "Création de visualisations avec Plotly et mplfinance (candlestick, CCI, volumes)",
      "Calcul d’indicateurs techniques : rendement journalier, CCI, variation en %",
      "Implémentation d’un bot de trading simple avec logique buy/sell testable sur testnet",
      "Développement d’un tableau de bord web avec Flask (prix en temps réel, stats, analyse graphique)",
      "Création d'une API REST pour obtenir le prix actuel via endpoint dédié",
      "Préparation du projet à l'intégration future d’un moteur de deep learning"
    ],
    technologies: ["Python","Flask","ccxt","Binance API","pandas","numpy", "mplfinance","Plotly","SQLite"
    ],
    images: [
      "/assets/bot/bot-logo.png?height=600&width=800",
      "/assets/bot/bot-trad-graph.png?height=600&width=800",
    ],
  },
]