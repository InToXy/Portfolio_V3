
import { Project, SkillCategory, Experience, Education, Passion, SocialLink, Certification } from './types';

// Common Data (Non-translatable or shared)
export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/InToXy", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/matheo-pinget-8a60252a9/", icon: "linkedin" },
];

export const CALENDAR_URL = "https://cal.com/matheo-pinget-xadubu";

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "2024",
    badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-azure-fundamentals-badge.svg"
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
    title: "DevOps & Cloud",
    skills: ["Docker", "Terraform", "Ansible", "Azure", "AWS", "VCD", "Traefik Proxy"]
  },
  {
    title: "CI/CD & Automation",
    skills: ["GitLab CI", "Bash", "PowerShell", "Git", "GitHub"]
  },
  {
    title: "Network & Security",
    skills: ["Cisco", "pfSense", "WatchGuard", "Firewall", "Hardening", "Security Audit"]
  },
  {
    title: "Programming & Monitoring",
    skills: ["Python", "Node.js", "Prometheus", "Grafana", "Zabbix", "API REST", "Centreon", "PRTG", "JWT", "SQL", "HTML", "CSS", "Next.js"]
  },
  {
    title: "System Admin",
    skills: ["Linux", "Windows Server", "Active Directory", "Bind", "Debian", "Ubuntu", "CentOS"]
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
      description: 'Je construis des solutions performantes et sécurisées avec Terraform, Ansible, Docker et GitLab CI.',
      cta_contact: 'Me Contacter',
      cta_calendar: 'Prendre RDV',
      cta_cv: 'Mon CV',
      location: 'Evian-les-Bains, France'
    },
    about: {
      title: 'À PROPOS',
      subtitle: 'Qui suis-je ?',
      description: "Ingénieur DevOps en alternance, spécialisé en automatisation d'infrastructures et CI/CD. Maîtrise de Terraform, Ansible, Docker, GitLab CI. Expérience en réseaux, cybersécurité et supervision (Prometheus, Grafana, Zabbix). Motivé et rigoureux, je souhaite contribuer à des projets cloud performants et sécurisés.",
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
      filter_dev: 'Development',
      filter_ops: 'DevOps',
      filter_data: 'Data',
      filter_sec: 'Security',
      details: 'Détails',
      context: 'Contexte & Objectif',
      features: 'Fonctionnalités Clés',
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
          image: "https://picsum.photos/400/300?grayscale"
        },
        {
          title: "Moto & Mécanique",
          emoji: "🏍️",
          description: "Passion pour les deux-roues, entretien mécanique et balades sur routes sinueuses.",
          image: "https://picsum.photos/401/300?grayscale"
        },
        {
          title: "Voyage & Découverte",
          emoji: "✈️",
          description: "Exploration de nouvelles cultures et destinations, ouverture d'esprit à travers les rencontres.",
          image: "https://picsum.photos/402/300?grayscale"
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
        category: "Data",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        description: "Construction d'un data warehouse pour un groupe hospitalier afin d'analyser et visualiser les données médicales.",
        longDescription: "Le projet visait à mettre en place une plateforme Big Data complète pour un groupe hospitalier (CHU) afin de créer un data warehouse. L'objectif était d'intégrer, stocker, analyser et visualiser des données hétérogènes, telles que les dossiers médicaux et les flux de patients, pour en extraire des informations stratégiques. L'architecture Data Lakehouse a été choisie pour traiter les données à travers différentes couches de qualité : Bronze, Silver et Gold.",
        tags: ["Apache Airflow", "Apache Spark", "MinIO", "Hive", "Trino", "Superset", "Docker"],
        features: ["Pipeline ETL complet", "Orchestration Airflow", "Traitement Spark", "Visualisation Superset"],
        results: ["Architecture Lakehouse fonctionnelle", "Tableaux de bord déployés", "Automatisation flux"],
        featured: true,
        githubUrl: "#"
      },
      {
        title: "JACK.CREATIVE.LAB",
        category: "Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        description: "Création d'une micro-entreprise spécialisée dans la refonte de sites web pour les PME.",
        longDescription: "Création d'une micro-entreprise spécialisée dans la refonte de sites web pour les PME. L'objectif est de transformer la présence numérique des entreprises avec des designs modernes, élégants et performants.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CI/CD", "SEO"],
        features: ["Design sur mesure", "Performance & SEO", "Workflow CI/CD", "RGPD"],
        featured: true,
        demoUrl: "#"
      },
      {
        title: "Serveur Multimédia Personnel",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80",
        description: "Solution complète de gestion et de diffusion de contenu multimédia (HomeLab).",
        longDescription: "Conception et déploiement d'un serveur multimédia personnel robuste et automatisé avec Docker Compose.",
        tags: ["Docker", "Docker Compose", "Plex", "Radarr", "Transmission", "Linux"],
        features: ["Content Centralization", "Automated Retrieval", "Containerized Architecture"],
        results: ["Système stable", "Gestion bibliothèque", "Accès distant"],
        githubUrl: "#"
      },
      {
        title: "Bot Trading Automatisé",
        category: "Development",
        image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80",
        description: "Bot de trading utilisant l'API Binance pour exécuter des stratégies crypto.",
        longDescription: "Création d'un bot de trading automatisé utilisant l'API Binance. Analyse des données de marché en temps réel.",
        tags: ["Python", "Binance API", "Pandas", "TensorFlow", "Docker", "Grafana"],
        features: ["Stratégies techniques", "Gestion des risques", "Backtesting", "Grafana Dashboard"],
        results: ["Bot fonctionnel", "Visualisation temps réel", "Trading 24/7"],
        githubUrl: "#"
      },
      {
        title: "Breezy - Réseau Social",
        category: "Development",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
        description: "Réseau social léger inspiré de Twitter/X, optimisé pour faibles ressources.",
        longDescription: "Développement d'un réseau social léger et réactif. Architecture microservices.",
        tags: ["Node.js", "Express", "MongoDB", "React", "Docker", "Microservices"],
        features: ["Microblogging", "Système de likes", "Microservices Traefik", "Auth JWT"],
        results: ["App full-stack", "Architecture scalable", "Pipeline CI/CD"],
        githubUrl: "#"
      },
      {
        title: "EasySave - Backup Software",
        category: "Development",
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80",
        description: "Scalable professional backup software in C#/.NET.",
        longDescription: "Scalable professional backup software developed in C#/.NET avec architecture MVC.",
        tags: ["C#", ".NET 8.0", "WPF", "MVC", "SHA-256", "Scrum"],
        features: ["Differential Backups", "SHA-256 Encryption", "Multi-threading", "MVC"],
        results: ["Robust Software", "Doxygen Documentation", "Scrum Methodology"],
        githubUrl: "#"
      },
      {
        title: "Vault Manager",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
        description: "DevSecOps solution for secure password management.",
        longDescription: "Développement d'une solution automatisée pour gérer les mots de passe d'infrastructure (HashiCorp Vault).",
        tags: ["HashiCorp Vault", "Ansible", "GitLab CI", "OpenSSL", "DevSecOps"],
        features: ["Récupération auto", "Suppression sécurisée", "Chiffrement AES-256", "Logs complets"],
        results: ["Gain de temps", "Sécurité accrue", "Intégration CI/CD"],
        githubUrl: "#"
      },
      {
        title: "ADEME - Recherche",
        category: "Data",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
        description: "Optimisation de tournées pour réduire les émissions CO₂.",
        longDescription: "Projet de recherche opérationnelle pour l'ADEME. Problème du Voyageur de Commerce.",
        tags: ["Python", "Algorithmes Génétiques", "Recuit Simulé", "Optimisation"],
        features: ["Modélisation Graphes", "PLNE", "Métaheuristiques", "Analyse comparative"],
        results: ["Réduction distances", "Comparatif algos", "Enjeu écologique"],
        githubUrl: "#"
      },
      {
        title: "Cloud OpenStack",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
        description: "Déploiement d'une infrastructure cloud complète.",
        longDescription: "Création d'une infrastructure cloud complète pour une petite structure avec OpenStack.",
        tags: ["OpenStack", "CentOS", "Windows", "Apache", "Prometheus"],
        features: ["Déploiement OpenStack", "Réseau privé", "Stack LAMP/Nextcloud", "Monitoring"],
        githubUrl: "#"
      },
      {
        title: "Sécurisation SI",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
        description: "Conception d'une infrastructure d'entreprise sécurisée (ANSSI).",
        longDescription: "Conception et déploiement d'une infrastructure d'entreprise avec DMZ et défense en profondeur.",
        tags: ["ESXI", "Cisco", "WatchGuard", "StormShield", "Splunk"],
        features: ["Architecture DMZ", "Firewalls", "Logs Splunk", "Hardening"],
        githubUrl: "#"
      },
      {
        title: "Pentesting Lab",
        category: "Security",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
        description: "Projet d'auto-formation aux techniques de test d'intrusion.",
        longDescription: "Identification et exploitation de vulnérabilités sur des environnements de laboratoire.",
        tags: ["Kali Linux", "Metasploit", "Nmap", "Hydra", "Wireshark"],
        features: ["Reconnaissance", "Exploitation vulnérabilités", "Brute force", "Rapports"],
        githubUrl: "#"
      },
      {
        title: "Python Data Tool",
        category: "Data",
        image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80",
        description: "Analyse de données calendaires et reporting.",
        longDescription: "Outil d'analyse de données CSV avec nettoyage et génération de rapports visuels.",
        tags: ["Python", "Pandas", "Matplotlib", "Data Viz", "Automation"],
        features: ["Parsing CSV", "Graphiques statistiques", "Export Markdown", "CLI"],
        githubUrl: "#"
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
      description: 'I build performant and secure solutions with Terraform, Ansible, Docker, and GitLab CI.',
      cta_contact: 'Contact Me',
      cta_calendar: 'Book a Meeting',
      cta_cv: 'My Resume',
      location: 'Evian-les-Bains, France'
    },
    about: {
      title: 'ABOUT',
      subtitle: 'Who am I?',
      description: "DevOps Engineer apprentice specializing in infrastructure automation and CI/CD. Proficient in Terraform, Ansible, Docker, GitLab CI. Experience in networking, cybersecurity, and monitoring (Prometheus, Grafana, Zabbix). Motivated and rigorous, I aim to contribute to performant and secure cloud projects.",
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
      filter_dev: 'Development',
      filter_ops: 'DevOps',
      filter_data: 'Data',
      filter_sec: 'Security',
      details: 'Details',
      context: 'Context & Goal',
      features: 'Key Features',
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
          image: "https://picsum.photos/400/300?grayscale"
        },
        {
          title: "Motorcycles & Mechanics",
          emoji: "🏍️",
          description: "Passion for two-wheelers, mechanical maintenance, and riding on winding roads.",
          image: "https://picsum.photos/401/300?grayscale"
        },
        {
          title: "Travel & Discovery",
          emoji: "✈️",
          description: "Exploring new cultures and destinations, opening my mind through encounters.",
          image: "https://picsum.photos/402/300?grayscale"
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
        category: "Data",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        description: "Building a data warehouse for a hospital group to analyze and visualize medical data.",
        longDescription: "The project aimed to set up a complete Big Data platform for a hospital group (CHU) to create a data warehouse. The goal was to integrate, store, analyze, and visualize heterogeneous data, such as medical records and patient flows. The Data Lakehouse architecture was chosen to process data across different quality layers: Bronze, Silver, and Gold.",
        tags: ["Apache Airflow", "Apache Spark", "MinIO", "Hive", "Trino", "Superset", "Docker"],
        features: ["Complete ETL Pipeline", "Airflow Orchestration", "Spark Processing", "Superset Visualization"],
        results: ["Functional Lakehouse", "Dashboards Deployed", "Automated Workflows"],
        featured: true,
        githubUrl: "#"
      },
      {
        title: "JACK.CREATIVE.LAB",
        category: "Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        description: "Creation of a micro-enterprise specializing in website redesign for SMEs.",
        longDescription: "Creation of a micro-enterprise specializing in website redesign for SMEs. The goal is to transform the digital presence of companies with modern, elegant, and performant designs.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CI/CD", "SEO"],
        features: ["Custom Design", "Performance & SEO", "CI/CD Workflow", "GDPR Compliance"],
        featured: true,
        demoUrl: "#"
      },
      {
        title: "Personal Media Server",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80",
        description: "Complete solution for managing and streaming multimedia content (HomeLab).",
        longDescription: "Design and deployment of a robust and automated personal media server using Docker Compose.",
        tags: ["Docker", "Docker Compose", "Plex", "Radarr", "Transmission", "Linux"],
        features: ["Content Centralization", "Automated Retrieval", "Containerized Architecture"],
        results: ["Stable System", "Library Management", "Remote Access"],
        githubUrl: "#"
      },
      {
        title: "Automated Trading Bot",
        category: "Development",
        image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80",
        description: "Trading bot using Binance API to execute crypto strategies.",
        longDescription: "Creation of an automated trading bot using the Binance API. Real-time market data analysis.",
        tags: ["Python", "Binance API", "Pandas", "TensorFlow", "Docker", "Grafana"],
        features: ["Technical Strategies", "Risk Management", "Backtesting", "Grafana Dashboard"],
        results: ["Functional Bot", "Real-time Visualization", "24/7 Trading"],
        githubUrl: "#"
      },
      {
        title: "Breezy - Social Network",
        category: "Development",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
        description: "Lightweight social network inspired by Twitter/X, optimized for low resources.",
        longDescription: "Development of a lightweight and responsive social network. Microservices architecture.",
        tags: ["Node.js", "Express", "MongoDB", "React", "Docker", "Microservices"],
        features: ["Microblogging", "Like System", "Traefik Microservices", "JWT Auth"],
        results: ["Full-stack App", "Scalable Architecture", "CI/CD Pipeline"],
        githubUrl: "#"
      },
      {
        title: "EasySave - Backup Software",
        category: "Development",
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80",
        description: "Scalable professional backup software in C#/.NET.",
        longDescription: "Scalable professional backup software developed in C#/.NET with MVC architecture.",
        tags: ["C#", ".NET 8.0", "WPF", "MVC", "SHA-256", "Scrum"],
        features: ["Differential Backups", "SHA-256 Encryption", "Multi-threading", "MVC"],
        results: ["Robust Software", "Doxygen Documentation", "Scrum Methodology"],
        githubUrl: "#"
      },
      {
        title: "Vault Manager",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
        description: "DevSecOps solution for secure password management.",
        longDescription: "Development of an automated solution to manage infrastructure passwords (HashiCorp Vault).",
        tags: ["HashiCorp Vault", "Ansible", "GitLab CI", "OpenSSL", "DevSecOps"],
        features: ["Auto Retrieval", "Secure Deletion", "AES-256 Encryption", "Full Logging"],
        results: ["Time Saving", "Increased Security", "CI/CD Integration"],
        githubUrl: "#"
      },
      {
        title: "ADEME - Operations Research",
        category: "Data",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
        description: "Route optimization to reduce CO₂ emissions.",
        longDescription: "Operations research project for ADEME. Traveling Salesman Problem.",
        tags: ["Python", "Genetic Algorithms", "Simulated Annealing", "Optimization"],
        features: ["Graph Modeling", "ILP", "Metaheuristics", "Comparative Analysis"],
        results: ["Distance Reduction", "Algo Comparison", "Ecological Impact"],
        githubUrl: "#"
      },
      {
        title: "OpenStack Cloud",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
        description: "Deployment of a complete cloud infrastructure.",
        longDescription: "Creation of a complete cloud infrastructure for a small structure using OpenStack.",
        tags: ["OpenStack", "CentOS", "Windows", "Apache", "Prometheus"],
        features: ["OpenStack Deployment", "Private Network", "LAMP/Nextcloud Stack", "Monitoring"],
        githubUrl: "#"
      },
      {
        title: "IS Security",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
        description: "Design of a secure enterprise infrastructure (ANSSI).",
        longDescription: "Design and deployment of an enterprise infrastructure with DMZ and defense in depth.",
        tags: ["ESXI", "Cisco", "WatchGuard", "StormShield", "Splunk"],
        features: ["DMZ Architecture", "Firewalls", "Splunk Logs", "Hardening"],
        githubUrl: "#"
      },
      {
        title: "Pentesting Lab",
        category: "Security",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
        description: "Self-training project in penetration testing techniques.",
        longDescription: "Identification and exploitation of vulnerabilities in laboratory environments.",
        tags: ["Kali Linux", "Metasploit", "Nmap", "Hydra", "Wireshark"],
        features: ["Reconnaissance", "Vulnerability Exploitation", "Brute Force", "Reporting"],
        githubUrl: "#"
      },
      {
        title: "Python Data Tool",
        category: "Data",
        image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80",
        description: "Calendar data analysis and reporting.",
        longDescription: "CSV data analysis tool with cleaning and visual report generation.",
        tags: ["Python", "Pandas", "Matplotlib", "Data Viz", "Automation"],
        features: ["CSV Parsing", "Statistical Graphs", "Markdown Export", "CLI"],
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
  // Map other fields to TRANSLATIONS.fr for fallback
  tagline: TRANSLATIONS.fr.hero.description,
  about: TRANSLATIONS.fr.about.description
};

// Kept for backward compat with components not yet updated, but will use SKILLS_DATA from translations
export const SKILLS = SKILLS_DATA;
// Projects and Experience are now dynamic in translations
export const PROJECTS = TRANSLATIONS.fr.projects_data; 
export const EXPERIENCE = TRANSLATIONS.fr.experience.data;
export const EDUCATION = TRANSLATIONS.fr.experience.education;
export const PASSIONS = TRANSLATIONS.fr.passions.items;
