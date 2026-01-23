
import { Highlighter } from './components/ui/highlighter';
import { Project, SkillCategory, Experience, Education, Passion, SocialLink, Certification } from './types';

// Common Data (Non-translatable or shared)
export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/InToXy", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/matheo-pinget-8a60252a9/", icon: "linkedin" },
];

export const CALENDAR_URL = "https://cal.com/matheo-pinget-xadubu";
export const CREDLY_URL = "https://www.credly.com/users/matheo-pinget";

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "2024",
    badgeUrl: "https://training.cellenza.com/wp-content/uploads/2021/08/AZ900.png"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
  }
];

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "CI/CD & Automation",
    skills: ["GitLab CI", "Bash", "PowerShell", "Git", "GitHub"]
  },
  {
    title: "Network",
    skills: ["Cisco", "pfSense", "WatchGuard", "Firewall"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Terraform", "Ansible", "Azure", "AWS", "VCD", "Traefik Proxy"]
  },
  {
    title: "Programming",
    skills: ["Python", "Node.js", "API REST", "JWT", "SQL", "HTML", "CSS", "Next.js"]
  },
  {
    title: "Monitoring",
    skills: ["Prometheus", "Grafana", "Zabbix", "Centreon", "PRTG"]
  },
  {
    title: "System Admin",
    skills: ["Linux", "Windows Server", "Active Directory", "Bind", "Debian", "Ubuntu", "CentOS"]
  },
  {
    title: "Security",
    skills: ["Hardening", "Security Audit", "Fail2Ban", "CrowdSec"]
  },
  {
    title: "Project Management",
    skills: ["Agile Methods", "Scrum", "JIRA"]
  }
];

// Content Dictionary
export const TRANSLATIONS = {
  fr: {
    nav: {
      about: 'À Propos',
      terminal: 'Terminal',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Parcours',
      cv: 'CV',
      contact: 'Contact'
    },
    hero: {
      available: 'Disponible pour opportunités',
      greeting: 'Bonjour, je suis',
      role: 'Ingénieur DevOps',
      subtitle: 'Ingénieur DevOps Cloud',
      rotating_text: ["Randonneur", "Motard", "Voyageur"],
      description: 'Je construis des solutions performantes et sécurisées avec Terraform, Ansible, Docker et GitLab CI.',
      cta_contact: 'Me Contacter',
      cta_calendar: 'Prendre RDV',
      cta_cv: 'Mon CV',
      cta_certs: 'Certifications',
      location: 'Evian-les-Bains, France'
    },
    about: {
      title: 'À PROPOS',
      subtitle: 'Qui suis-je ?',
      description: (
        <>
          <Highlighter action="highlight" color="#87CEFA" isView={true} delay={500}>Ingénieur DevOps en alternance</Highlighter>, spécialisé en automatisation d'infrastructures et CI/CD.<br />
          Maîtrise de Terraform, Ansible, Docker, GitLab CI.<br />
          Expérience en réseaux, cybersécurité et supervision (Prometheus, Grafana, Zabbix).<br />
          <Highlighter action="underline" color="#FF9800" isView={true} delay={1000}>Motivé et rigoureux</Highlighter>, je souhaite contribuer à des <Highlighter action="underline" color="#FF9800" isView={true} delay={1500}>projets cloud performants et sécurisés</Highlighter>.
        </>
      ),
      cards: {
        infra: { title: 'Infrastructure', desc: "Conception d'architectures Cloud résilientes et performantes." },
        collab: { title: 'Collaboration', desc: "Travail en équipe et méthodes Agiles pour une livraison continue." },
        security: { title: 'Sécurité', desc: "Intégration de la sécurité dès la conception (DevSecOps)." }
      }
    },
    skills: {
      tag: '<Expertise />',
      title: 'Compétences Techniques',
      categories: SKILLS_DATA // Using same skills for now, titles could be translated if needed but keys are English-ish
    },
    projects: {
      tag: 'Portfolio',
      title: 'Projets & Réalisations',
      all: 'Tout',

      details: 'Détails',
      context: 'Contexte',
      objective: 'Objectif',
      features: 'Fonctionnalités Clés',
      competencies: 'Compétences Développées',
      stack: 'Tech Stack',
      metrics: 'Chiffres Clés',
      code: 'Voir le code source',
      demo: 'Live Demo',
      viewer: 'Project_Viewer v2.4'
    },
    experience: {
      title_work: 'Expérience Pro',
      title_edu: 'Formation',
      title_cert: 'Certifications',
      data: [
        {
          role: "Ingénieur DevOps",
          company: "Orange Business",
          period: "2024 - 2027 (Alternance)",
          description: [
            "Automatisation du déploiement d'infrastructures avec Terraform et Ansible.",
            "Gestion de pipelines CI/CD avec GitLab CI et Docker.",
            "Supervision des infrastructures avec Prometheus, Grafana.",
            "Développement d'un projet Git pour automatiser la récupération sécurisée de mots de passe dans HashiVault."
          ]
        },
        {
          role: "Technicien Réseau",
          company: "Orange",
          period: "2022 - 2024 (Alternance)",
          description: [
            "Installation et configuration de routeurs, switches et firewalls.",
            "Développement d'un outil Python pour détecter des problèmes sur la fibre optique.",
            "Travail en équipe et communication avec les clients pour résoudre des problèmes techniques."
          ]
        }
      ],
      education: [
        {
          degree: "Ingénierie Informatique",
          school: "CESI École d'Ingénieurs, Lyon",
          period: "2024 - 2027"
        },
        {
          degree: "Licence Réseaux et Télécommunications",
          school: "IUT1, Grenoble",
          period: "2021 - 2024"
        },
        {
          degree: "Baccalauréat Pro Systèmes Numériques",
          school: "Lycée Saint Vincent de Paul",
          period: "2018 - 2021"
        }
      ]
    },
    passions: {
      tag: 'Loisirs',
      title: 'Passions & Intérêts',
      items: [
        {
          title: "Randonnée & Nature",
          emoji: "🥾",
          description: "Exploration des sentiers de montagne et découverte de paysages naturels pour me ressourcer.",
          image: "/Portfolio_V3/images/randonee.jpg"
        },
        {
          title: "Moto & Mécanique",
          emoji: "🏍️",
          description: "Passion pour les deux-roues, entretien mécanique et balades sur routes sinueuses.",
          image: "/Portfolio_V3/images/moto.jpg"
        },
        {
          title: "Voyage & Découverte",
          emoji: "✈️",
          description: "Exploration de nouvelles cultures et destinations, ouverture d'esprit à travers les rencontres.",
          image: "/Portfolio_V3/images/voyage.jpg"
        }
      ]
    },
    terminal: {
      access: 'ACCÈS SYSTÈME AUTORISÉ',
      title: 'Terminal Interactif',
      desc: 'Plongez au cœur du système. Explorez mon profil, mes compétences et mes projets via cette interface en ligne de commande.',
      help_cmd: 'Tapez help pour initialiser la connexion.',
      commands: {
        about: 'Informations identité utilisateur',
        skills: 'Scanner modules compétences',
        projects: 'Requête base de projets',
        experience: 'Voir logs système et parcours',
        contact: 'Ouvrir canaux communication',
        cv: 'Télécharger rapport statut complet',
        clear: 'Nettoyer buffer terminal'
      }
    },
    cv: {
      tag: 'Curriculum Vitae',
      title: 'Mon Parcours en Détail',
      download_fr: 'Télécharger (FR)',
      download_en: 'Télécharger (EN)',
      print: 'Imprimer',
      sections: {
        profile: 'Profil',
        experience: 'Expérience Professionnelle',
        education: 'Formation',
        skills: 'Compétences',
        certifications: 'Certifications',
        languages: 'Langues',
        interests: "Centres d'intérêt",
        lang_fr: 'Français',
        lang_en: 'Anglais',
        lang_native: 'Natif',
        lang_tech: 'Technique (B2)'
      },
      back: "Retour à l'accueil"
    },
    footer: {
      title: 'Prêt à collaborer ?',
      text: 'Je suis toujours intéressé par de nouveaux défis techniques et des opportunités de collaboration. Discutons de votre prochain projet !',
      rights: 'Tous droits réservés.',
      made_with: 'Conçu avec React & Tailwind CSS'
    },
    projects_data: [
      {
        title: "Plateforme Big Data pour la Santé",
        category: "Projet École",
        image: "/Portfolio_V3/images/big_data.jpg",
        description: "Construction d'un data warehouse pour un groupe hospitalier afin d'analyser et visualiser les données médicales.",
        context: "Le projet visait à mettre en place une plateforme Big Data complète pour un groupe hospitalier (CHU) afin de créer un data warehouse.",
        objective: "L'objectif était d'intégrer, stocker, analyser et visualiser des données hétérogènes, telles que les dossiers médicaux et les flux de patients, pour en extraire des informations stratégiques.\n\nL'architecture Data Lakehouse a été choisie pour traiter les données à travers différentes couches de qualité : Bronze (données brutes), Silver (nettoyées) et Gold (agrégées), prêtes pour la business intelligence.",
        tags: ["Apache Airflow", "Apache Spark (PySpark)", "MinIO", "Apache Hive", "Trino", "Apache Superset", "Docker", "Docker Compose", "Python"],
        features: ["Intégration de données brutes (Bronze)", "Nettoyage et transformation (Silver)", "Agrégation pour l'analyse (Gold)", "Orchestration des tâches avec Airflow", "Traitement distribué avec Spark", "Visualisation interactive avec Superset"],
        competencies: ["Architecture Data Lakehouse", "Traitement de données massives (Big Data)", "Orchestration de flux de données", "Visualisation et Business Intelligence"],
        results: ["Plateforme Big Data complète", "Data warehouse fonctionnel", "Analyse et visualisation des données médicales", "Architecture Lakehouse fonctionnelle"],
        featured: true,
        downloadUrl: "#",
        githubUrl: "https://github.com/InToXy/BigData",
        deliverables: [
          { label: "Télécharger le Livrable 1", url: "/Portfolio_V3/files/Bigdata_Livrable1.pdf" },
          { label: "Télécharger le Livrable 2", url: "/Portfolio_V3/files/Bigdata_Livrable2.pdf" }
        ]
      },
      {
        title: "JACK.CREATIVE.LAB",
        category: "Projet Perso",
        image: "/Portfolio_V3/images/jackcreativelab.png",
        description: "Création d'une micro-entreprise spécialisée dans la refonte de sites web pour les PME.",
        context: "Création d'une micro-entreprise spécialisée dans la refonte de sites web pour les PME.",
        objective: "L'objectif est de transformer la présence numérique des entreprises avec des designs modernes, élégants et performants. Le site vitrine a été développé pour présenter les services, les projets et attirer des clients.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CI/CD", "GitHub Pages", "SEO", "GDPR"],
        features: ["Design sur mesure et responsive", "Optimisation performance et SEO", "Workflow automatisé", "Conformité légale (RGPD)"],
        competencies: ["Développement Frontend moderne", "Stratégies SEO et performance web", "Gestion de projet entrepreneurial", "Conformité RGPD"],
        results: ["Site vitrine performant", "Présence numérique améliorée", "Designs modernes livrés"],
        featured: true,
        demoUrl: "https://jackcreativelab.github.io/jack-creative-lab-website/"
      },
      {
        title: "Serveur Multimédia Personnel",
        category: "Projet Perso",
        image: "/Portfolio_V3/images/serveur_multimedia_personnel.jpg",
        description: "Solution complète de gestion et de diffusion de contenu multimédia (HomeLab).",
        context: "Ce projet consiste en la conception et le déploiement d'un serveur multimédia personnel robuste et automatisé, permettant de centraliser, organiser et diffuser des films, séries et autres contenus.",
        objective: "L'objectif était de créer une infrastructure flexible et facile à maintenir grâce à la conteneurisation.\n\nJ'ai utilisé Docker et Docker Compose pour orchestrer plusieurs services, chacun ayant un rôle spécifique dans la chaîne de gestion multimédia : Plex pour la diffusion, Radarr pour la gestion des films, Jackett pour l'indexation, Transmission pour le téléchargement, et Flaresolverr pour contourner les protections anti-bot.",
        tags: ["Docker", "Docker Compose", "Plex Media Server", "Radarr", "Jackett", "Transmission", "FlareSolverr", "Linux"],
        features: ["Centralisation des films et séries", "Organisation automatique des médias", "Accès et diffusion via Plex", "Récupération automatisée de nouveaux contenus", "Indexation et métadonnées enrichies", "Contournement des protections anti-bot (FlareSolverr)"],
        competencies: ["Maîtrise de Docker et Docker Compose", "Configuration et optimisation de serveurs", "Gestion des volumes et réseaux Docker", "Dépannage d'environnements conteneurisés"],
        results: ["Centralisation et organisation des contenus multimédias", "Automatisation du processus de récupération", "Accès distant et diffusion fluide", "Architecture conteneurisée portable", "Optimisation des ressources et stabilité"],
        githubUrl: "https://github.com/InToXy/docker-media-center/tree/dev"
      },
      {
        title: "Bot Trading Automatisé",
        category: "Projet Perso",
        image: "/Portfolio_V3/images/bot_trading.webp",
        description: "Bot de trading utilisant l'API Binance pour exécuter des stratégies crypto.",
        context: "Création d'un bot de trading automatisé utilisant l'API Binance pour exécuter des stratégies de trading sur les cryptomonnaies.",
        objective: "L'objectif était de développer un système robuste capable d'analyser les données du marché en temps réel et de prendre des décisions d'achat ou de vente basées sur des indicateurs techniques.\n\nLe projet visait également à mettre en place un système de backtesting pour évaluer l'efficacité des stratégies sur des données historiques, ainsi qu'un dashboard de suivi des performances en temps réel.",
        tags: ["Python", "Binance API", "Pandas", "NumPy", "TensorFlow", "Docker", "PostgreSQL", "Grafana"],
        features: ["Stratégies techniques (MACD, RSI)", "Gestion des risques", "Backtesting sur données historiques", "Dashboard Grafana temps réel", "Optimisation des paramètres", "Stop-loss et take-profit automatiques"],
        competencies: ["Analyse de données financières avec Python", "Intégration d'APIs tierces", "Backtesting de stratégies de trading", "Visualisation de données avec Grafana"],
        results: ["Développement d'un bot de trading fonctionnel", "Intégration réussie avec l'API Binance", "Création d'un système de backtesting", "Déploiement d'un dashboard de monitoring"],
        githubUrl: "https://github.com/InToXy/Bot_Trading.git"
      },
      {
        title: "Breezy - Réseau Social Léger",
        category: "Projet École",
        image: "/Portfolio_V3/images/breezy.png",
        description: "Réseau social léger inspiré de Twitter/X, optimisé pour faibles ressources.",
        context: "Développement d'un réseau social léger et réactif, inspiré de Twitter/X, conçu pour fonctionner efficacement dans des environnements à faibles ressources et avec une connectivité limitée.",
        objective: "L'objectif principal était d'offrir une expérience utilisateur simple et fluide permettant de publier, liker, commenter, suivre et être suivi, tout en maintenant des performances optimales.\n\nBackend - Architecture Microservices :\n• Services indépendants : auth, users, posts, feed\n• Node.js + Express pour chaque microservice\n• MongoDB avec Mongoose pour la persistance\n• Authentification JWT avec refresh tokens\n• Traefik comme API Gateway et Load Balancer",
        tags: ["Node.js", "Express", "MongoDB", "React", "Next.js", "TailwindCSS", "Docker", "Traefik", "JWT", "Microservices"],
        features: ["Messages courts (280 caractères)", "Fil d'actualité chronologique", "Système de commentaires et réponses", "Système de likes", "Suivi d'utilisateurs", "Profils personnalisés avec bio"],
        competencies: ["Architecture microservices et conteneurisation", "Sécurisation avec JWT et sessions", "Développement full-stack moderne", "Intégration continue et DevOps"],
        results: ["Réseau social fonctionnel et extensible", "Expérience utilisateur fluide, optimisée mobile", "Architecture scalable et maintenable", "Pipeline CI/CD avec ESLint et Snyk"],
        downloadUrl: "#",
        githubUrl: "https://github.com/DAD-Equipe-5/Breezy",
        deliverables: [
          { label: "Télécharger le Rapport", url: "/Portfolio_V3/files/breezy-rapport-soutenance.pdf" }
        ]
      },
      {
        title: "EasySave - Logiciel de Sauvegarde",
        category: "Projet École",
        image: "/Portfolio_V3/images/easysave.jpg",
        description: "Logiciel de sauvegarde professionnel évolutif développé en C#/.NET.",
        context: "Projet académique réalisé dans le cadre d'un éditeur logiciel fictif (ProSoft), visant à développer un logiciel de sauvegarde performant et évolutif destiné à des utilisateurs professionnels.",
        objective: "L'objectif était de créer une solution fiable et simple d'utilisation, avec de fortes attentes en termes de performance et de maintenabilité du code.\n\nArchitecture MVC :\n• Séparation claire Modèle / Vue / Contrôleur\n• Modularité et maintenabilité du code\n• Évolutivité assurée pour les versions futures",
        tags: ["C#", ".NET 8.0", "WPF", "MVC", "SHA-256", "JSON", "Doxygen", "JIRA", "Git", "Scrum"],
        features: ["Interface graphique WPF moderne", "Sauvegardes complètes ou différentielles", "Chiffrement SHA-256 intégré", "Détection de logiciels métiers bloquants", "Sauvegardes en parallèle", "Gestion des priorités", "Console déportée (Sockets)"],
        competencies: ["Développement C#/.NET avancé", "Architecture logicielle MVC", "Gestion de projet agile (Scrum)", "Versioning Git et workflow collaboratif"],
        results: ["Logiciel modulaire et maintenable livré", "Évolutivité prouvée sur 3 versions majeures", "Interface utilisateur intuitive et professionnelle", "Performance optimisée avec sauvegardes parallèles"],
        downloadUrl: "#",
        githubUrl: "https://github.com/InToXy/EasySave",
        deliverables: [
          { label: "Télécharger le Rapport", url: "/Portfolio_V3/files/easysave-rapport.pdf" },
          { label: "Télécharger le Diaporama", url: "/Portfolio_V3/files/easysave-diapo.pdf" }
        ]
      },
      {
        title: "Gestion Sécurisée des Mots de Passe",
        category: "Projet Pro",
        image: "/Portfolio_V3/images/password_vault.png",
        description: "Solution DevSecOps automatisée pour la gestion de mots de passe d'infrastructure.",
        context: "Développement d'une solution automatisée et sécurisée pour gérer les mots de passe d'infrastructure dans une démarche DevSecOps chez Orange Business.",
        objective: "Constat Initial : Transmission manuelle des mots de passe (risques), processus lent, manque de traçabilité, coûts élevés.\n\nPipeline CI/CD Développé :\n1. retrieve_password : Récupération sécurisée depuis HashiCorp Vault\n2. check_delete : Vérification automatique avant suppression\n3. confirm_delete : Suppression validée manuellement",
        tags: ["HashiCorp Vault", "Ansible", "GitLab CI/CD", "OpenSSL", "AES-256", "WSL", "DevSecOps", "Automation"],
        features: ["Récupération automatisée des mots de passe", "Suppression sécurisée et contrôlée", "Chiffrement AES-256 des transferts", "Traçabilité complète (logs)", "Validation manuelle des suppressions"],
        competencies: ["Conception de rôles Ansible modulaires", "Intégration de la sécurité dans CI/CD", "Expérience DevOps/DevSecOps", "Gestion d'infrastructures sécurisées"],
        results: ["100 machines traitées en moins de 5 minutes", "Automatisation complète du processus", "Réduction significative des coûts opérationnels", "Amélioration de la sécurité et satisfaction utilisateurs"],
        downloadUrl: "#",
        githubUrl: "https://github.com/InToXy/MPI_POC_Vault_Retrieve",
        deliverables: [
          { label: "Télécharger le Rapport", url: "/Portfolio_V3/files/password-management-rapport.pdf" }
        ]
      },
      {
        title: "Optimisation de Tournées - ADEME",
        category: "Projet École",
        image: "/Portfolio_V3/images/ademe.webp",
        description: "Projet de recherche opérationnelle pour réduire les émissions CO₂ des transports.",
        context: "Projet universitaire en collaboration avec l'ADEME pour étudier l'optimisation des tournées de livraison, une variante complexe du problème du Voyageur de Commerce (TSP).",
        objective: "Répondre à un appel à projet pour réduire la consommation énergétique et les émissions de CO₂ liées aux transports de marchandises.\n\nMéthodes d'Optimisation Implémentées :\n• Méthode Exacte (PLNE)\n• Métaheuristiques Avancées : Recuit Simulé, Algorithme Génétique, Colonie de Fourmis",
        tags: ["Python", "PLNE", "Algorithmes Génétiques", "Recuit Simulé", "Colonie de Fourmis", "Optimisation", "Recherche Opérationnelle"],
        features: ["Modélisation en Graphe", "Prise en compte de contraintes complexes (temps, circuits)", "Comparaison systématique des performances", "Génération de matrices aléatoires"],
        competencies: ["Modélisation mathématique (NP-difficile)", "Implémentation d'algorithmes complexes", "Analyse comparative algorithmique", "Programmation Python scientifique"],
        results: ["Les heuristiques donnent des résultats proches de l'optimum", "Temps de calcul drastiquement réduit vs méthode exacte", "Colonie de fourmis particulièrement efficace sur les grandes instances", "Algorithme génétique excellent pour l'exploration"],
        downloadUrl: "#",
        githubUrl: "https://github.com/InToXy/Recherche-Operationnelle",
        deliverables: [
          { label: "Télécharger le Diaporama", url: "/Portfolio_V3/files/route-optimization-diapo.pdf" }
        ]
      },
      {
        title: "Infrastructure Cloud avec OpenStack",
        category: "Projet École",
        image: "/Portfolio_V3/images/openstack-cloud-infrastructure-dashboard-with-virt.png",
        description: "Construction d'un réseau informatique complet pour une petite structure.",
        context: "Ce projet consistait à créer une infrastructure cloud complète pour une petite structure en utilisant OpenStack.",
        objective: "L'objectif était de démontrer la capacité à concevoir, déployer et gérer un environnement virtualisé professionnel.\n\nL'infrastructure incluait la mise en place de serveurs virtuels sous différents systèmes d'exploitation (CentOS 8, Windows 10), la configuration d'un réseau privé sécurisé, et l'implémentation de services essentiels (Apache, MySQL, Nextcloud).",
        tags: ["OpenStack", "CentOS 8", "Windows 10", "DNS", "Apache", "MySQL", "Nextcloud", "Prometheus", "Grafana"],
        features: ["Réseau privé avec DHCP/DNS", "Routage inter-réseaux sécurisé", "Gestion des utilisateurs et accès", "Serveur web Apache + MySQL", "Nextcloud pour stockage collaboratif", "Monitoring complet avec alertes automatisées"],
        competencies: ["Administration OpenStack et virtualisation", "Configuration réseau avancée", "Déploiement et gestion de services", "Monitoring et observabilité"],
        results: ["Infrastructure cloud complète et fonctionnelle", "Réseau privé sécurisé avec services intégrés", "Monitoring complet avec alertes automatisées", "Documentation technique détaillée"],
        githubUrl: "https://github.com/InToXy"
      },
      {
        title: "Sécurisation d'un Système d'Information",
        category: "Projet École",
        image: "/Portfolio_V3/images/network-security-audit-dashboard-with-vulnerabilit.png",
        description: "Infrastructure d'entreprise complète selon les recommandations ANSSI.",
        context: "Ce projet ambitieux consistait à concevoir et déployer une infrastructure d'entreprise complète en respectant scrupuleusement les recommandations de l'ANSSI.",
        objective: "L'architecture incluait une DMZ pour isoler les services publics, un système d'information interne sécurisé, et plusieurs couches de protection avec des firewalls redondants.\n\nDéfense en Profondeur :\n• Multiples couches de sécurité : firewalls, IDS/IPS, antivirus\n• Segmentation réseau avec VLANs sécurisés\n• Contrôle d'accès et chiffrement des données",
        tags: ["ESXI 6.7", "Cisco", "WatchGuard", "StormShield", "Veeam", "PRTG", "Splunk", "Active Directory", "BIND", "Apache"],
        features: ["DMZ avec serveurs web publics", "Firewalls WatchGuard et StormShield", "Active Directory avec GPO sécurisées", "PRTG pour monitoring réseau", "Splunk pour analyse des logs", "Veeam pour sauvegarde centralisée"],
        competencies: ["Architecture de sécurité d'entreprise", "Configuration de firewalls et IDS/IPS", "Gestion des identités et des accès", "Monitoring et analyse de sécurité"],
        results: ["Infrastructure conforme aux recommandations ANSSI", "Sécurité multicouche avec monitoring complet", "Stratégie de sauvegarde 3-2-1 opérationnelle", "Documentation technique et procédures détaillées"],
        githubUrl: "https://github.com/InToXy"
      },
      {
        title: "Découverte du Pentesting",
        category: "Projet École",
        image: "/Portfolio_V3/images/web-application-penetration-testing-with-burp-suit.png",
        description: "Apprentissage autonome des techniques de test d'intrusion.",
        context: "Ce projet d'apprentissage autonome avait pour objectif d'acquérir les bases du pentesting éthique.",
        objective: "Il s'agissait de comprendre les méthodologies d'audit de sécurité et de maîtriser les outils essentiels utilisés par les professionnels de la cybersécurité. Le projet incluait la résolution d'un questionnaire technique complexe nécessitant l'identification et l'exploitation de vulnérabilités sur différents systèmes dans un environnement de laboratoire contrôlé.",
        tags: ["Kali Linux", "Metasploit", "Nmap", "Hydra", "SQLmap", "Burp Suite", "Wireshark", "John the Ripper"],
        features: ["Reconnaissance et Exploitation (Nmap, Metasploit, Hydra)", "Analyse et Reporting (Burp Suite, SQLmap)", "Escalade de privilèges sur Linux et Windows", "Documentation et recommandations de remédiation"],
        competencies: ["Tests d'intrusion éthiques", "Analyse de vulnérabilités web/réseau", "Utilisation d'outils de sécurité avancés", "Méthodologies d'audit de sécurité"],
        results: ["Maîtrise des outils de pentesting essentiels", "Compréhension des vulnérabilités communes", "Capacité à rédiger des rapports techniques", "Sensibilisation aux aspects éthiques et légaux"],
        githubUrl: "https://github.com/InToXy"
      },
      {
        title: "Traitement de Données avec Python",
        category: "Projet École",
        image: "/Portfolio_V3/images/python-data-analysis-dashboard-with-charts--graphs.png",
        description: "Analyse et visualisation de données de calendrier.",
        context: "Ce projet consistait à développer un script Python sophistiqué pour analyser et traiter des données issues de fichiers de calendrier au format CSV.",
        objective: "L'objectif était de créer un outil capable d'extraire, filtrer et présenter des informations spécifiques sur les événements et réunions. Le défi principal était de transformer des données brutes en informations exploitables, présentées sous forme de tableaux Markdown et de graphiques interactifs.",
        tags: ["Python", "Pandas", "Matplotlib", "CSV", "Markdown", "HTML/CSS", "Jupyter", "NumPy"],
        features: ["Parsing automatique de fichiers CSV", "Filtrage intelligent par type et date", "Génération de graphiques Matplotlib", "Tableaux Markdown formatés", "Export HTML/CSS personnalisé"],
        competencies: ["Manipulation de données avec Pandas", "Visualisation avec Matplotlib", "Développement Python orienté objet", "Tests unitaires et documentation"],
        results: ["Outil d'analyse de données complet et fonctionnel", "Visualisations graphiques claires et informatives", "Code documenté avec tests unitaires", "Interface utilisateur intuitive et robuste"],
        githubUrl: "https://github.com/InToXy"
      }
    ]
  },
  en: {
    nav: {
      about: 'About',
      terminal: 'Terminal',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      cv: 'Resume',
      contact: 'Contact'
    },
    hero: {
      available: 'Available for opportunities',
      greeting: 'Hello, I am',
      role: 'DevOps Engineer',
      subtitle: 'Cloud DevOps Engineer',
      rotating_text: ["Hiker", "Biker", "Traveler"],
      description: 'I build performant and secure solutions with Terraform, Ansible, Docker, and GitLab CI.',
      cta_contact: 'Contact Me',
      cta_calendar: 'Book a Meeting',
      cta_cv: 'My Resume',
      cta_certs: 'Certifications',
      location: 'Evian-les-Bains, France'
    },
    about: {
      title: 'ABOUT',
      subtitle: 'Who am I?',
      description: (
        <>
          <Highlighter action="highlight" color="#87CEFA" isView={true} delay={2000}>DevOps Engineer</Highlighter> apprentice specializing in infrastructure automation and CI/CD.<br />
          Proficient in Terraform, Ansible, Docker, GitLab CI.<br />
          Experience in networking, cybersecurity, and monitoring (Prometheus, Grafana, Zabbix).<br />
          <Highlighter action="underline" color="#FF9800" isView={true} delay={2000}>Motivated and rigorous</Highlighter>, I aim to contribute to <Highlighter action="underline" color="#FF9800" isView={true} delay={2000}>performant and secure cloud projects</Highlighter>.
        </>
      ),
      cards: {
        infra: { title: 'Infrastructure', desc: "Designing resilient and performant Cloud architectures." },
        collab: { title: 'Collaboration', desc: "Teamwork and Agile methodologies for continuous delivery." },
        security: { title: 'Security', desc: "Integrating security by design (DevSecOps)." }
      }
    },
    skills: {
      tag: '<Expertise />',
      title: 'Technical Skills',
      categories: SKILLS_DATA
    },
    projects: {
      tag: 'Portfolio',
      title: 'Projects & Achievements',
      all: 'All',

      details: 'Details',
      context: 'Context',
      objective: 'Objective',
      features: 'Key Features',
      competencies: 'Key Competencies',
      stack: 'Tech Stack',
      metrics: 'Key Metrics',
      code: 'View Source',
      demo: 'Live Demo',
      viewer: 'Project_Viewer v2.4'
    },
    experience: {
      title_work: 'Work Experience',
      title_edu: 'Education',
      title_cert: 'Certifications',
      data: [
        {
          role: "DevOps Engineer",
          company: "Orange Business",
          period: "2024 - 2027 (Apprenticeship)",
          description: [
            "Automating infrastructure deployment with Terraform and Ansible.",
            "Managing CI/CD pipelines with GitLab CI and Docker.",
            "Monitoring infrastructures with Prometheus and Grafana.",
            "Developing a Git project to automate secure password retrieval in HashiVault."
          ]
        },
        {
          role: "Network Technician",
          company: "Orange",
          period: "2022 - 2024 (Apprenticeship)",
          description: [
            "Installation and configuration of routers, switches, and firewalls.",
            "Developing a Python tool to detect optical fiber issues.",
            "Teamwork and client communication for technical troubleshooting."
          ]
        }
      ],
      education: [
        {
          degree: "Computer Engineering",
          school: "CESI Engineering School, Lyon",
          period: "2024 - 2027"
        },
        {
          degree: "Bachelor in Networks & Telecoms",
          school: "IUT1, Grenoble",
          period: "2021 - 2024"
        },
        {
          degree: "Vocational Baccalaureate Digital Systems",
          school: "Lycée Saint Vincent de Paul",
          period: "2018 - 2021"
        }
      ]
    },
    passions: {
      tag: 'Hobbies',
      title: 'Passions & Interests',
      items: [
        {
          title: "Hiking & Nature",
          emoji: "🥾",
          description: "Exploring mountain trails and discovering natural landscapes to recharge.",
          image: "/Portfolio_V3/images/randonee.jpg"
        },
        {
          title: "Motorcycles & Mechanics",
          emoji: "🏍️",
          description: "Passion for two-wheelers, mechanical maintenance, and riding on winding roads.",
          image: "/Portfolio_V3/images/moto.jpg"
        },
        {
          title: "Travel & Discovery",
          emoji: "✈️",
          description: "Exploring new cultures and destinations, opening my mind through encounters.",
          image: "/Portfolio_V3/images/voyage.jpg"
        }
      ]
    },
    terminal: {
      access: 'SYSTEM ACCESS GRANTED',
      title: 'Interactive Terminal',
      desc: 'Dive into the system. Explore my profile, skills, and projects via this command-line interface.',
      help_cmd: 'Type help to initialize connection.',
      commands: {
        about: 'User identity information',
        skills: 'Scan competence modules',
        projects: 'Query project database',
        experience: 'View system logs and career path',
        contact: 'Open communication channels',
        cv: 'Download full status report',
        clear: 'Clear terminal buffer'
      }
    },
    cv: {
      tag: 'Curriculum Vitae',
      title: 'Detailed Career Path',
      download_fr: 'Download (FR)',
      download_en: 'Download (EN)',
      print: 'Print',
      sections: {
        profile: 'Profile',
        experience: 'Work Experience',
        education: 'Education',
        skills: 'Skills',
        certifications: 'Certifications',
        languages: 'Languages',
        interests: "Interests",
        lang_fr: 'French',
        lang_en: 'English',
        lang_native: 'Native',
        lang_tech: 'Technical (B2)'
      },
      back: "Back to Home"
    },
    footer: {
      title: 'Ready to collaborate?',
      text: 'I am always interested in new technical challenges and collaboration opportunities. Let\'s discuss your next project!',
      rights: 'All rights reserved.',
      made_with: 'Designed with React & Tailwind CSS'
    },
    projects_data: [
      {
        title: "Big Data Healthcare Platform",
        category: "School Project",
        image: "/Portfolio_V3/images/big_data.jpg",
        description: "Building a data warehouse for a hospital group to analyze and visualize medical data.",
        context: "The project aimed to implement a complete Big Data platform for a hospital group (University Hospital) to create a data warehouse.",
        objective: "The objective was to integrate, store, analyze, and visualize heterogeneous data, such as medical records and patient flows, to extract strategic insights.\n\nThe Data Lakehouse architecture was chosen to process data through different quality layers: Bronze (raw data), Silver (cleaned), and Gold (aggregated), ready for Business Intelligence.",
        tags: ["Apache Airflow", "Apache Spark (PySpark)", "MinIO", "Apache Hive", "Trino", "Apache Superset", "Docker", "Docker Compose", "Python"],
        features: ["Raw data integration (Bronze)", "Cleaning and transformation (Silver)", "Aggregation for analysis (Gold)", "Task orchestration with Airflow", "Distributed processing with Spark", "Interactive visualization with Superset"],
        competencies: ["Data Lakehouse Architecture", "Big Data Processing", "Data Workflow Orchestration", "Visualization and Business Intelligence"],
        results: ["Complete Big Data Platform", "Functional Data Warehouse", "Medical Data Analysis & Viz", "Operational Lakehouse Architecture"],
        featured: true,
        downloadUrl: "#",
        githubUrl: "#",
        deliverables: [
          { label: "Download Deliverable 1", url: "/Portfolio_V3/files/Bigdata_Livrable1.pdf" },
          { label: "Download Deliverable 2", url: "/Portfolio_V3/files/Bigdata_Livrable2.pdf" }
        ]
      },
      {
        title: "JACK.CREATIVE.LAB",
        category: "Personal Project",
        image: "/Portfolio_V3/images/jackcreativelab.png",
        description: "Creation of a micro-enterprise specializing in website redesign for SMEs.",
        context: "Creation of a micro-enterprise specializing in website redesign for SMEs.",
        objective: "The goal is to transform the digital presence of businesses with modern, elegant, and high-performance designs. The showcase site was developed to present services, projects, and attract clients.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CI/CD", "GitHub Pages", "SEO", "GDPR"],
        features: ["Custom and responsive design", "Performance and SEO optimization", "Automated workflow", "GDPR compliance"],
        competencies: ["Modern Frontend Development", "SEO & Web Performance Strategies", "Entrepreneurial Project Management", "GDPR Compliance"],
        results: ["High-performance showcase site", "Improved digital presence", "Modern designs delivered"],
        featured: true,
        demoUrl: "#"
      },
      {
        title: "Personal Media Server",
        category: "Personal Project",
        image: "/Portfolio_V3/images/serveur_multimedia_personnel.jpg",
        description: "Complete solution for managing and streaming multimedia content (HomeLab).",
        context: "This project involves designing and deploying a robust and automated personal media server to centralize, organize, and stream movies, series, and other content.",
        objective: "The goal was to create a flexible and easy-to-maintain infrastructure using containerization.\n\nI used Docker and Docker Compose to orchestrate multiple services, each playing a specific role in the media management chain: Plex for streaming, Radarr for movie management, Jackett for indexing, Transmission for downloading, and Flaresolverr to bypass anti-bot protections.",
        tags: ["Docker", "Docker Compose", "Plex Media Server", "Radarr", "Jackett", "Transmission", "FlareSolverr", "Linux"],
        features: ["Centralization of movies and series", "Automatic media organization", "Access and streaming via Plex", "Automated content retrieval", "Indexing and enriched metadata", "Anti-bot protection bypass (FlareSolverr)"],
        competencies: ["Docker & Docker Compose Mastery", "Server Configuration & Optimization", "Docker Volume & Network Management", "Containerized Environment Troubleshooting"],
        results: ["Centralized & organized media content", "Automated retrieval process", "Seamless remote access & streaming", "Portable containerized architecture", "Resource optimization & stability"],
        githubUrl: "#"
      },
      {
        title: "Automated Trading Bot",
        category: "Personal Project",
        image: "/Portfolio_V3/images/bot_trading.webp",
        description: "Trading bot using Binance API to execute crypto strategies.",
        context: "Creation of an automated trading bot using the Binance API to execute trading strategies on cryptocurrencies.",
        objective: "The objective was to develop a robust system capable of analyzing market data in real-time and making buy/sell decisions based on technical indicators.\n\nThe project also aimed to implement a backtesting system to evaluate strategy effectiveness on historical data, as well as a dashboard for real-time performance monitoring.",
        tags: ["Python", "Binance API", "Pandas", "NumPy", "TensorFlow", "Docker", "PostgreSQL", "Grafana"],
        features: ["Technical strategies (MACD, RSI)", "Risk management", "Backtesting on historical data", "Real-time Grafana dashboard", "Parameter optimization", "Automatic stop-loss and take-profit"],
        competencies: ["Financial Data Analysis with Python", "Third-party API Integration", "Trading Strategy Backtesting", "Data Visualization with Grafana"],
        results: ["Functional trading bot developed", "Successful Binance API integration", "Backtesting system created", "Monitoring dashboard deployed"],
        githubUrl: "#"
      },
      {
        title: "Breezy - Lightweight Social Network",
        category: "School Project",
        image: "/Portfolio_V3/images/breezy.png",
        description: "Lightweight social network inspired by Twitter/X, optimized for low resources.",
        context: "Development of a lightweight and responsive social network, inspired by Twitter/X, designed to run efficiently in low-resource environments with limited connectivity.",
        objective: "The main objective was to offer a simple and fluid user experience allowing posting, liking, commenting, following, and being followed, while maintaining optimal performance.\n\nBackend - Microservices Architecture:\n• Independent services: auth, users, posts, feed\n• Node.js + Express for each microservice\n• MongoDB with Mongoose for persistence\n• JWT Authentication with refresh tokens\n• Traefik as API Gateway and Load Balancer",
        tags: ["Node.js", "Express", "MongoDB", "React", "Next.js", "TailwindCSS", "Docker", "Traefik", "JWT", "Microservices"],
        features: ["Short messages (280 chars)", "Chronological feed", "Comment and reply system", "Like system", "User following", "Custom profiles with bio"],
        competencies: ["Microservices Architecture & Containerization", "Security with JWT & Sessions", "Modern Full-stack Development", "CI/CD & DevOps Integration"],
        results: ["Functional and extensible social network", "Fluid user experience, mobile-optimized", "Scalable and maintainable architecture", "CI/CD Pipeline with ESLint and Snyk"],
        downloadUrl: "#",
        githubUrl: "#",
        deliverables: [
          { label: "Download Report", url: "/Portfolio_V3/files/breezy-rapport-soutenance.pdf" }
        ]
      },
      {
        title: "EasySave - Backup Software",
        category: "School Project",
        image: "/Portfolio_V3/images/easysave.jpg",
        description: "Scalable professional backup software developed in C#/.NET.",
        context: "Academic project realized for a fictitious software publisher (ProSoft), aiming to develop high-performance and scalable backup software for professional users.",
        objective: "The goal was to create a reliable and easy-to-use solution, with high expectations regarding performance and code maintainability.\n\nMVC Architecture:\n• Clear Model / View / Controller separation\n• Code modularity and maintainability\n• Scalability ensured for future versions",
        tags: ["C#", ".NET 8.0", "WPF", "MVC", "SHA-256", "JSON", "Doxygen", "JIRA", "Git", "Scrum"],
        features: ["Modern WPF GUI", "Full or differential backups", "Integrated SHA-256 encryption", "Blocking business software detection", "Parallel backups", "Priority management", "Remote console (Sockets)"],
        competencies: ["Advanced C#/.NET Development", "MVC Software Architecture", "Agile Project Management (Scrum)", "Git Versioning & Collaborative Workflow"],
        results: ["Modular and maintainable software delivered", "Proven scalability over 3 major versions", "Intuitive and professional UI", "Optimized performance with parallel backups"],
        downloadUrl: "#",
        githubUrl: "#",
        deliverables: [
          { label: "Download Report", url: "/Portfolio_V3/files/easysave-rapport.pdf" },
          { label: "Download Slides", url: "/Portfolio_V3/files/easysave-diapo.pdf" }
        ]
      },
      {
        title: "Secure Password Management",
        category: "Professional Project",
        image: "/Portfolio_V3/images/password_vault.png",
        description: "Automated DevSecOps solution for infrastructure password management.",
        context: "Development of an automated and secure solution to manage infrastructure passwords within a DevSecOps approach at Orange Business.",
        objective: "Context and Problem:\nInitial State: Manual password transmission (risks), slow process, lack of traceability, high costs.\n\nDeveloped CI/CD Pipeline:\n1. retrieve_password: Secure retrieval from HashiCorp Vault\n2. check_delete: Automatic verification before deletion\n3. confirm_delete: Manually validated deletion",
        tags: ["HashiCorp Vault", "Ansible", "GitLab CI/CD", "OpenSSL", "AES-256", "WSL", "DevSecOps", "Automation"],
        features: ["Automated password retrieval", "Secure and controlled deletion", "AES-256 transfer encryption", "Full traceability (logs)", "Manual deletion validation"],
        competencies: ["Modular Ansible Role Design", "Security Integration in CI/CD", "DevOps/DevSecOps Experience", "Secure Infrastructure Management"],
        results: ["100 machines processed in under 5 minutes", "Complete process automation", "Significant operational cost reduction", "Improved security and user satisfaction"],
        downloadUrl: "#",
        githubUrl: "#",
        deliverables: [
          { label: "Download Report", url: "/Portfolio_V3/files/password-management-rapport.pdf" }
        ]
      },
      {
        title: "Route Optimization - ADEME",
        category: "School Project",
        image: "/Portfolio_V3/images/ademe.webp",
        description: "Operations research project to reduce CO₂ emissions in transport.",
        context: "University project in collaboration with ADEME to study delivery route optimization, a complex variant of the Traveling Salesman Problem (TSP).",
        objective: "Responding to a call for projects to reduce energy consumption and CO₂ emissions related to freight transport.\n\nImplemented Optimization Methods:\n• Exact Method (ILP)\n• Advanced Metaheuristics: Simulated Annealing, Genetic Algorithm, Ant Colony Optimization",
        tags: ["Python", "PLNE", "Algorithmes Génétiques", "Recuit Simulé", "Colonie de Fourmis", "Optimisation", "Recherche Opérationnelle"],
        features: ["Graph Modeling", "Complex constraints handling (time, circuits)", "Systematic performance comparison", "Random matrix generation"],
        competencies: ["Mathematical Modeling (NP-Hard)", "Complex Algorithm Implementation", "Comparative Algorithmic Analysis", "Scientific Python Programming"],
        results: ["Heuristics provide near-optimal results", "Drastically reduced computation time vs exact method", "Ant Colony particularly effective on large instances", "Genetic Algorithm excellent for exploration"],
        downloadUrl: "#",
        githubUrl: "#",
        deliverables: [
          { label: "Download Slides", url: "/Portfolio_V3/files/route-optimization-diapo.pdf" }
        ]
      },
      {
        title: "Cloud Infrastructure with OpenStack",
        category: "School Project",
        image: "/Portfolio_V3/images/openstack-cloud-infrastructure-dashboard-with-virt.png",
        description: "Construction of a complete computer network for a small structure.",
        context: "This project consisted of creating a complete cloud infrastructure for a small structure using OpenStack.",
        objective: "The goal was to demonstrate the ability to design, deploy, and manage a professional virtualized environment.\n\nThe infrastructure included setting up virtual servers under different operating systems (CentOS 8, Windows 10), configuring a secure private network, and implementing essential services (Apache, MySQL, Nextcloud).",
        tags: ["OpenStack", "CentOS 8", "Windows 10", "DNS", "Apache", "MySQL", "Nextcloud", "Prometheus", "Grafana"],
        features: ["Private network with DHCP/DNS", "Secure inter-network routing", "User and access management", "Apache + MySQL web server", "Nextcloud for collaborative storage", "Complete monitoring with automated alerts"],
        competencies: ["OpenStack Administration & Virtualization", "Advanced Network Configuration", "Service Deployment & Management", "Monitoring & Observability"],
        results: ["Complete and functional cloud infrastructure", "Secure private network with integrated services", "Complete monitoring with automated alerts", "Detailed technical documentation"],
        githubUrl: "#"
      },
      {
        title: "IS Security",
        category: "School Project",
        image: "/Portfolio_V3/images/network-security-audit-dashboard-with-vulnerabilit.png",
        description: "Secure enterprise infrastructure design according to ANSSI recommendations.",
        context: "This ambitious project consisted of designing and deploying a complete enterprise infrastructure, scrupulously respecting ANSSI recommendations.",
        objective: "The architecture included a DMZ to isolate public services, a secure internal information system, and multiple protection layers with redundant firewalls.\n\nDefense in Depth:\n• Multiple security layers: firewalls, IDS/IPS, antivirus\n• Network segmentation with secure VLANs\n• Access control and data encryption",
        tags: ["ESXI 6.7", "Cisco", "WatchGuard", "StormShield", "Veeam", "PRTG", "Splunk", "Active Directory", "BIND", "Apache"],
        features: ["DMZ with public web servers", "WatchGuard and StormShield Firewalls", "Active Directory with secure GPOs", "PRTG for network monitoring", "Splunk for log analysis", "Veeam for centralized backup"],
        competencies: ["Enterprise Security Architecture", "Firewall & IDS/IPS Configuration", "Identity & Access Management", "Security Monitoring & Analysis"],
        results: ["Infrastructure compliant with ANSSI recommendations", "Multi-layer security with complete monitoring", "3-2-1 backup strategy operational", "Detailed technical documentation and procedures"],
        githubUrl: "#"
      },
      {
        title: "Pentesting Discovery",
        category: "School Project",
        image: "/Portfolio_V3/images/web-application-penetration-testing-with-burp-suit.png",
        description: "Self-learning project on penetration testing techniques.",
        context: "This self-learning project aimed to acquire the basics of ethical pentesting.",
        objective: "It involved understanding security audit methodologies and mastering essential tools used by cybersecurity professionals. The project included solving a complex technical questionnaire requiring the identification and exploitation of vulnerabilities on various systems in a controlled laboratory environment.",
        tags: ["Kali Linux", "Metasploit", "Nmap", "Hydra", "SQLmap", "Burp Suite", "Wireshark", "John the Ripper"],
        features: ["Reconnaissance and Exploitation (Nmap, Metasploit, Hydra)", "Analysis and Reporting (Burp Suite, SQLmap)", "Privilege escalation on Linux and Windows", "Documentation and remediation recommendations"],
        competencies: ["Ethical Penetration Testing", "Web/Network Vulnerability Analysis", "Advanced Security Tool Usage", "Security Audit Methodologies"],
        results: ["Mastery of essential pentesting tools", "Understanding of common vulnerabilities", "Ability to write technical reports", "Awareness of ethical and legal aspects"],
        githubUrl: "#"
      },
      {
        title: "Data Processing with Python",
        category: "School Project",
        image: "/Portfolio_V3/images/python-data-analysis-dashboard-with-charts--graphs.png",
        description: "Analysis and visualization of calendar data.",
        context: "This project consisted of developing a sophisticated Python script to analyze and process data from calendar files in CSV format.",
        objective: "The goal was to create a tool capable of extracting, filtering, and presenting specific information about events and meetings. The main challenge was to transform raw data into actionable insights, presented in the form of Markdown tables and interactive charts.",
        tags: ["Python", "Pandas", "Matplotlib", "CSV", "Markdown", "HTML/CSS", "Jupyter", "NumPy"],
        features: ["Automatic CSV file parsing", "Intelligent filtering by type and date", "Matplotlib chart generation", "Formatted Markdown tables", "Custom HTML/CSS export"],
        competencies: ["Data Manipulation with Pandas", "Visualization with Matplotlib", "Object-Oriented Python Development", "Unit Testing & Documentation"],
        results: ["Complete and functional data analysis tool", "Clear and informative graphical visualizations", "Documented code with unit tests", "Intuitive and robust user interface"],
        githubUrl: "#"
      }
    ]
  }
};

// Deprecated but kept for compatibility during refactor if needed (mapped to FR default)
export const PROFILE = {
  name: "Mathéo Pinget",
  title: "Ingénieur DevOps",
  phone: "06.40.24.07.08",
  email: "matheo.pinget@gmail.com",
  location: "Evian-les-Bains, France",
  avatar: "/Portfolio_V3/images/pp.jpg",
  // Map other fields to TRANSLATIONS.fr for fallback
  tagline: TRANSLATIONS.fr.hero.description,
  about: TRANSLATIONS.fr.about.description,
  credlyUrl: CREDLY_URL,
};

// Kept for backward compat with components not yet updated, but will use SKILLS_DATA from translations
export const SKILLS = SKILLS_DATA;
// Projects and Experience are now dynamic in translations
export const PROJECTS = TRANSLATIONS.fr.projects_data;
export const EXPERIENCE = TRANSLATIONS.fr.experience.data;
export const EDUCATION = TRANSLATIONS.fr.experience.education;
export const PASSIONS = TRANSLATIONS.fr.passions.items;
