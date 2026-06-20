
import { Highlighter } from '../components/ui/highlighter';
import { Project, SkillCategory, Experience, Education, Passion, SocialLink, Certification } from '../types';

import { SKILLS_DATA } from '../data/skills';

export const fr = {
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
          <Highlighter action="highlight" color="var(--highlight-color)" isView={true} delay={500}>Ingénieur DevOps en alternance</Highlighter>, spécialisé en automatisation d'infrastructures et CI/CD.<br />
          Maîtrise de Terraform, Ansible, Docker, GitLab CI.<br />
          Expérience en réseaux, cybersécurité et supervision (Prometheus, Grafana, Zabbix).<br />
          <Highlighter action="underline" color="var(--underline-color)" isView={true} delay={1000}>Motivé et rigoureux</Highlighter>, je souhaite contribuer à des <Highlighter action="underline" color="var(--underline-color)" isView={true} delay={1500}>projets cloud performants et sécurisés</Highlighter>.
        </>
      ),
      description_plain: "Ingénieur DevOps en alternance, spécialisé en automatisation d'infrastructures et CI/CD.\nMaîtrise de Terraform, Ansible, Docker, GitLab CI.\nExpérience en réseaux, cybersécurité et supervision (Prometheus, Grafana, Zabbix).\nMotivé et rigoureux, je souhaite contribuer à des projets cloud performants et sécurisés.",
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
          role: "Stagiaire en Recherche Opérationnelle",
          company: "Laboratoire DISP, INSA Lyon",
          period: "Stage",
          description: [
            "Étude du problème de réarrangement des stocks (WRP) au sein d'un entrepôt automatisé (SBS/RS) à double profondeur.",
            "Développement et implémentation d'heuristiques en Python (Gloutonne avec Liste Tabou, Beam Search).",
            "Analyse des cycles d'interblocage et minimisation de la distance totale parcourue par les navettes.",
            "Création de générateurs d'instances stochastiques et de scripts d'analyse de performances avec Matplotlib."
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
        title: "Automatisation de Démantèlement Cloud (UNBUILD)",
        category: "Projet Pro",
        image: "/Portfolio_V3/images/unbuild_cloud_automation.png",
        description: "Conception et développement d'un pipeline CI/CD (GitOps) pour automatiser la suppression de machines virtuelles sur la plateforme Cloud Avenue d'Orange Business.",
        context: "Dans le cadre de mon alternance chez Orange Business, le processus de démantèlement (unbuild) des VMs clientes était manuel, chronophage (1h) et sujet aux erreurs. L'objectif était de concevoir une architecture automatisée de bout en bout pour réduire ce temps d'exécution et garantir la conformité technique, financière et de sécurité.",
        objective: "Développer un pipeline d'Infrastructure as Code (IaC) hybride fiable, sécurisé et traçable, capable de gérer la suppression via API, de purger la supervision, de nettoyer les services internes (TrendMicro, Netbackup) et de libérer le nommage réseau.",
        tags: ["GitLab CI/CD", "Ansible", "Python", "HashiCorp Vault", "VMware Cloud Director", "CyberArk", "GitOps", "Zero Trust"],
        features: ["Pipeline CI/CD hybride multi-dépôts (architecture scalable)", "Approche Zero Trust avec HashiCorp Vault (JIT tokens OIDC/JWT)", "Interaction API avec VMware Cloud Director", "Nettoyage asynchrone (Ansible) et purge DNS", "Brique de validation continue (Continuous Compliance)"],
        competencies: ["Architecture Cloud & Infrastructure as Code (IaC)", "Sécurisation des accès (Zero Trust)", "Automatisation et orchestration de flux complexes", "Tolérance de pannes et conception idempotente"],
        results: ["Réduction du temps d'exécution de 1 heure à 7 minutes", "Suppression totale des erreurs humaines (0%)", "Automatisation complète des processus de facturation et de supervision", "Renforcement de la posture de cybersécurité"],
      },
      {
        title: "Optimisation d'Entrepôt Automatisé (Double Profondeur)",
        category: "Projet Pro",
        image: "/Portfolio_V3/images/warehouse_optimization.png",
        description: "Développement d'heuristiques pour l'optimisation du réarrangement des stocks dans un entrepôt automatisé à double profondeur.",
        context: "Stage de recherche opérationnelle au Laboratoire DISP (INSA Lyon). Le problème consistait à déterminer la séquence optimale de déplacements pour réarranger des bacs de manière à minimiser la distance parcourue, tout en gérant la complexité de la double profondeur et les cycles d'interblocage.",
        objective: "Créer, implémenter et évaluer des heuristiques avancées (approche Gloutonne couplée à une Liste Tabou, et approche Lookahead par Beam Search) capables de résoudre les interblocages profonds en un minimum de temps et de distance.",
        tags: ["Python", "Recherche Opérationnelle", "Heuristiques", "Beam Search", "Data Analysis", "Matplotlib"],
        features: ["Générateur stochastique d'instances d'entrepôts", "Heuristique Constructive (Gloutonne + Tabou)", "Heuristique Lookahead (Beam Search)", "Analyse comparative et visualisation de benchmarks"],
        competencies: ["Modélisation algorithmique complexe", "Recherche Opérationnelle (RO)", "Développement Python orienté objet", "Analyse de performances"],
        results: ["Mise en évidence de stratégies optimales de réarrangement", "Résolution efficace des cycles d'interblocage complexes", "Visualisations comparatives générées"],
        githubUrl: "https://github.com/MatheoPinget-dev/double-deep-warehouse-optimization",
        deliverables: [
          { label: "Voir le Poster Scientifique", url: "/Portfolio_V3/files/Matheo_PINGET_Poster_IR.pdf" }
        ],
      },
      {
        title: "Mon Homelab Perso (Proxmox VE)",
        category: "Projet Perso",
        image: "/Portfolio_V3/images/archi-homelab.jpeg",
        gallery: [
          "/Portfolio_V3/images/archi-homelab.jpeg"
        ],
        description: "Déploiement d'une infrastructure complète sur Proxmox VE avec conteneurisation, sécurité Zero Trust et hébergement d'un LLM local.",
        context: "Pour apprendre les infrastructures modernes en conditions réelles sans dépendre du cloud public, j'ai monté un homelab complet sur un Lenovo ThinkCentre M90q (i5-10500T, 32 Go RAM). Ce projet est mon laboratoire d'expérimentation pour le DevOps, les réseaux et la sécurité applicative.",
        objective: "Créer un environnement auto-hébergé sécurisé, performant et évolutif. Le système repose sur des conteneurs LXC et des VMs isolées, sans aucun port ouvert sur le routeur grâce à l'utilisation de Cloudflare Zero Trust et d'un VPN mesh Tailscale.",
        tags: ["Proxmox VE", "Docker", "Traefik", "Tailscale", "Cloudflare Zero Trust", "CrowdSec", "Linux", "Ollama"],
        features: ["LXC Docker Host avec Traefik, n8n, Portainer, Uptime Kuma", "LXC dédié à l'IA avec Ollama (qwen2.5-coder:7b)", "LXC AdGuard Home pour le filtrage DNS", "Sécurité : Tunnel Cloudflare (zéro port ouvert) et VPN Mesh Tailscale", "IDS/IPS collaboratif via CrowdSec + Bouncer"],
        competencies: ["Administration Linux et Proxmox", "Réseaux et Sécurité (Zero Trust, VPN Mesh)", "Conteneurisation avancée (Docker, LXC)", "Déploiement de LLM en auto-hébergement"],
        results: ["Infrastructure robuste et entièrement opérationnelle", "Apprentissage approfondi des concepts DevOps et sécurité réseau", "Hébergement de nombreux services open-source utilisés au quotidien"]
      },
      {
        title: "HumanForYou - Machine Learning RH",
        category: "Projet École",
        image: "/Portfolio_V3/images/humanforyou.png",
        description: "Analyse prédictive et Machine Learning pour anticiper le taux de rotation des employés (attrition) avec une forte dimension éthique.",
        context: "HumanForYou, une entreprise pharmaceutique en Inde de 4000 employés, connaît un taux de rotation annuel de 15%. La direction m'a sollicité pour identifier les facteurs d'attrition et proposer des modèles prédictifs afin de retenir les talents.",
        objective: "Analyser les données RH (âges, salaires, déplacements, évaluations) pour créer des modèles d'IA capables d'identifier les employés susceptibles de partir. Le projet incluait également une analyse éthique rigoureuse basée sur les 7 exigences de la Commission Européenne.",
        tags: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Data Analysis", "Jupyter", "IA Éthique"],
        features: ["Nettoyage et préparation de données RH anonymisées", "Modélisation prédictive supervisée", "Évaluation des modèles via des métriques de performance", "Analyse éthique des biais et de la confidentialité"],
        competencies: ["Analyse de données (Data Science)", "Création et optimisation de modèles ML", "Évaluation éthique de systèmes d'IA", "Restitution et vulgarisation scientifique"],
        results: ["Modèle prédictif fonctionnel de l'attrition", "Identification des facteurs clés de départ (salaire, distance, etc.)", "Démarche éthique documentée", "Présentation des résultats au client"],
        githubUrl: "#",
        deliverables: [
          { label: "Voir le Notebook Jupyter", url: "/Portfolio_V3/files/Grp3_Notebook_HumanForYou.ipynb" }
        ],
      },
      {
        title: "EcoGuardian - Système IoT Campus",
        category: "Projet École",
        image: "/Portfolio_V3/images/iot_projet.png",
        gallery: [
          "/Portfolio_V3/images/iot_archi_logi.png",
          "/Portfolio_V3/images/iot_archi_physique.png",
          "/Portfolio_V3/images/iot_flow_node-red.png",
          "/Portfolio_V3/images/iot_graph_plante.png"
        ],
        description: "Solution complète de surveillance environnementale : du capteur LoRa sécurisé (Edge) au Dashboard Cloud Big Data.",
        context: "Le campus CESI modernise ses infrastructures et nécessite un système de surveillance fiable et pérenne. EcoGuardian répond à ce besoin par une architecture distribuée et résiliente, loin des simples prototypes.",
        objective: "Déployer un réseau de capteurs autonomes (ESP32 + LoRa) communiquant avec une infrastructure Cloud centralisée. L'accent est mis sur la sécurité (chiffrement de bout en bout XTEA + TLS), la fiabilité (buffer circulaire local en cas de coupure) et l'expérience utilisateur (Dashboard temps réel).",
        tags: ["Docker", "Node-RED", "InfluxDB", "ESP32", "LoRa", "MQTTS", "CrowdSec", "Traefik", "React"],
        features: ["Transmission LoRa chiffrée (XTEA 128-bit)", "Buffer local sur capteur (0 perte de données)", "Traitement de flux avec Node-RED", "Base de données Time-Series (InfluxDB)", "Authentification SSO (Authelia)"],
        competencies: ["Architecture IoT & Edge Computing", "Développement Firmware C++ Optimisé", "Sécurisation des flux (Crypto & TLS)", "Orchestration Conteneurisée"],
        results: ["Système en production sur le campus", "Transmission fiable sur longue portée", "Visualisation fluide des métriques environnementales", "Architecture documentée et réplicable"],
        githubUrl: "https://github.com/MatheoPinget-dev/IOT_project",
      },
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
        downloadUrl: "#",
        githubUrl: "https://github.com/MatheoPinget-dev/BigData",
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
        githubUrl: "https://github.com/MatheoPinget-dev/docker-media-center/tree/dev"
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
        githubUrl: "https://github.com/MatheoPinget-dev/Bot_Trading.git"
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
        githubUrl: "https://github.com/MatheoPinget-dev/EasySave",
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
        githubUrl: "https://github.com/MatheoPinget-dev/MPI_POC_Vault_Retrieve",
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
        githubUrl: "https://github.com/MatheoPinget-dev/Recherche-Operationnelle",
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
        githubUrl: "https://github.com/MatheoPinget-dev"
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
        githubUrl: "https://github.com/MatheoPinget-dev"
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
        githubUrl: "https://github.com/MatheoPinget-dev"
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
        githubUrl: "https://github.com/MatheoPinget-dev"
      }
    ]
};