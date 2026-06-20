
import { Highlighter } from '../components/ui/highlighter';
import { Project, SkillCategory, Experience, Education, Passion, SocialLink, Certification } from '../types';

import { SKILLS_DATA } from '../data/skills';

export const en = {
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
          <Highlighter action="highlight" color="var(--highlight-color)" isView={true} delay={2000}>DevOps Engineer</Highlighter> apprentice specializing in infrastructure automation and CI/CD.<br />
          Proficient in Terraform, Ansible, Docker, GitLab CI.<br />
          Experience in networking, cybersecurity, and monitoring (Prometheus, Grafana, Zabbix).<br />
          <Highlighter action="underline" color="var(--underline-color)" isView={true} delay={2000}>Motivated and rigorous</Highlighter>, I aim to contribute to <Highlighter action="underline" color="var(--underline-color)" isView={true} delay={2000}>performant and secure cloud projects</Highlighter>.
        </>
      ),
      description_plain: "DevOps Engineer apprentice specializing in infrastructure automation and CI/CD.\nProficient in Terraform, Ansible, Docker, GitLab CI.\nExperience in networking, cybersecurity, and monitoring (Prometheus, Grafana, Zabbix).\nMotivated and rigorous, I aim to contribute to performant and secure cloud projects.",
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
          role: "Operations Research Intern",
          company: "DISP Laboratory, INSA Lyon",
          period: "Internship",
          description: [
            "Studied the Warehouse Reshuffling Problem (WRP) in a double-deep Shuttle-Based Storage and Retrieval System (SBS/RS).",
            "Developed and implemented heuristic algorithms in Python (Greedy with Tabu List, Beam Search).",
            "Analyzed deadlock cycles and minimized the total distance traveled by the shuttles.",
            "Built stochastic instance generators and performance benchmarking scripts using Matplotlib."
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
        title: "Cloud Decommissioning Automation (UNBUILD)",
        category: "Professional Project",
        image: "/Portfolio_V3/images/unbuild_cloud_automation.png",
        description: "Design and development of a CI/CD pipeline (GitOps) to automate the deletion of virtual machines on the Orange Business Cloud Avenue platform.",
        context: "As part of my apprenticeship at Orange Business, the client VM decommissioning (unbuild) process was manual, time-consuming (1h), and prone to errors. The goal was to design an end-to-end automated architecture to reduce this execution time and ensure technical, financial, and security compliance.",
        objective: "Develop a reliable, secure, and traceable hybrid Infrastructure as Code (IaC) pipeline capable of managing deletion via API, purging monitoring, cleaning internal services (TrendMicro, Netbackup), and releasing network naming.",
        tags: ["GitLab CI/CD", "Ansible", "Python", "HashiCorp Vault", "VMware Cloud Director", "CyberArk", "GitOps", "Zero Trust"],
        features: ["Multi-repository hybrid CI/CD pipeline (scalable architecture)", "Zero Trust approach with HashiCorp Vault (JIT OIDC/JWT tokens)", "API interaction with VMware Cloud Director", "Asynchronous cleanup (Ansible) and DNS purge", "Continuous Compliance validation component"],
        competencies: ["Cloud Architecture & Infrastructure as Code (IaC)", "Access Security (Zero Trust)", "Automation and orchestration of complex flows", "Fault tolerance and idempotent design"],
        results: ["Reduction in execution time from 1 hour to 7 minutes", "Total elimination of human errors (0%)", "Complete automation of billing and monitoring processes", "Strengthened cybersecurity posture"],
      },
      {
        title: "Automated Warehouse Optimization (Double-Deep)",
        category: "Professional Project",
        image: "/Portfolio_V3/images/warehouse_optimization.png",
        description: "Development of heuristics for optimizing stock reshuffling in a double-deep automated warehouse.",
        context: "Operations Research internship at DISP Laboratory (INSA Lyon). The goal was to find the optimal sequence of moves to reshuffle bins, minimizing travel distance while handling the complexity of double-deep storage and cyclic deadlocks.",
        objective: "Design, implement, and benchmark advanced heuristics (Greedy approach with Tabu List, and Lookahead via Beam Search) to resolve deep deadlocks efficiently in terms of time and distance.",
        tags: ["Python", "Operations Research", "Heuristics", "Beam Search", "Data Analysis", "Matplotlib"],
        features: ["Stochastic warehouse instance generator", "Constructive Heuristic (Greedy + Tabu)", "Lookahead Heuristic (Beam Search)", "Comparative analysis and benchmark visualization"],
        competencies: ["Complex algorithmic modeling", "Operations Research (OR)", "Object-Oriented Python Development", "Performance benchmarking"],
        results: ["Identification of optimal reshuffling strategies", "Efficient resolution of complex cyclic deadlocks", "Generated comparative data visualizations"],
        githubUrl: "https://github.com/MatheoPinget-dev/double-deep-warehouse-optimization",
        deliverables: [
          { label: "View Scientific Poster", url: "/Portfolio_V3/files/Matheo_PINGET_Poster_IR.pdf" }
        ],
      },
      {
        title: "Personal Homelab (Proxmox VE)",
        category: "Personal Project",
        image: "/Portfolio_V3/images/archi-homelab.jpeg",
        gallery: [
          "/Portfolio_V3/images/archi-homelab.jpeg"
        ],
        description: "Deployment of a complete infrastructure on Proxmox VE featuring containerization, Zero Trust security, and a locally hosted LLM.",
        context: "To learn modern infrastructures in real-world conditions without relying on the public cloud, I built a complete homelab on a Lenovo ThinkCentre M90q (i5-10500T, 32GB RAM). This project serves as my sandbox for DevOps, networking, and application security.",
        objective: "Create a secure, high-performance, and scalable self-hosted environment. The system relies on LXC containers and isolated VMs, with zero open ports on the router thanks to Cloudflare Zero Trust and a Tailscale mesh VPN.",
        tags: ["Proxmox VE", "Docker", "Traefik", "Tailscale", "Cloudflare Zero Trust", "CrowdSec", "Linux", "Ollama"],
        features: ["LXC Docker Host with Traefik, n8n, Portainer, Uptime Kuma", "Dedicated AI LXC with Ollama (qwen2.5-coder:7b)", "LXC AdGuard Home for DNS filtering", "Security: Cloudflare Tunnel (zero open ports) and Tailscale Mesh VPN", "Collaborative IDS/IPS via CrowdSec + Bouncer"],
        competencies: ["Linux & Proxmox administration", "Networking & Security (Zero Trust, Mesh VPN)", "Advanced Containerization (Docker, LXC)", "Self-hosting LLM deployment"],
        results: ["Robust and fully operational infrastructure", "In-depth learning of DevOps and network security concepts", "Hosting of numerous open-source services for daily use"]
      },
      {
        title: "HumanForYou - HR Machine Learning",
        category: "School Project",
        image: "/Portfolio_V3/images/humanforyou.png",
        description: "Predictive analysis and Machine Learning to anticipate employee turnover (attrition) with a strong ethical focus.",
        context: "HumanForYou, a pharmaceutical company in India with 4,000 employees, faces a 15% annual turnover rate. Management asked me to identify attrition factors and propose predictive models to retain talent.",
        objective: "Analyze HR data (ages, salaries, travel, evaluations) to create AI models capable of identifying employees likely to leave. The project also included a rigorous ethical analysis based on the European Commission's 7 requirements.",
        tags: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Data Analysis", "Jupyter", "Ethical AI"],
        features: ["Cleaning and preparation of anonymized HR data", "Supervised predictive modeling", "Model evaluation using performance metrics", "Ethical analysis of bias and privacy"],
        competencies: ["Data Analysis (Data Science)", "Creation and optimization of ML models", "Ethical evaluation of AI systems", "Scientific communication and reporting"],
        results: ["Functional predictive model for attrition", "Identification of key departure factors (salary, distance, etc.)", "Documented ethical approach", "Presentation of results to the client"],
        githubUrl: "#",
        deliverables: [
          { label: "View Jupyter Notebook", url: "/Portfolio_V3/files/Grp3_Notebook_HumanForYou.ipynb" }
        ],
      },
      {
        title: "EcoGuardian - Campus IoT System",
        category: "School Project",
        image: "/Portfolio_V3/images/iot_projet.png",
        gallery: [
          "/Portfolio_V3/images/iot_archi_logi.png",
          "/Portfolio_V3/images/iot_archi_physique.png",
          "/Portfolio_V3/images/iot_flow_node-red.png",
          "/Portfolio_V3/images/iot_graph_plante.png"
        ],
        description: "Complete environmental monitoring solution: from secure LoRa sensors (Edge) to Cloud Big Data Dashboard.",
        context: "CESI campus modernization requires a reliable and sustainable monitoring system. EcoGuardian answers this need with a distributed and resilient architecture, far beyond simple prototypes.",
        objective: "Deploy a network of autonomous sensors (ESP32 + LoRa) communicating with a centralized Cloud infrastructure. Focus is on security (End-to-end XTEA encryption + TLS), reliability (local circular buffer during outages), and user experience (Real-time Dashboard).",
        tags: ["Docker", "Node-RED", "InfluxDB", "ESP32", "LoRa", "MQTTS", "CrowdSec", "Traefik", "React"],
        features: ["Encrypted LoRa Transmission (XTEA 128-bit)", "Local Sensor Buffer (Zero Data Loss)", "Stream Processing with Node-RED", "Time-Series Database (InfluxDB)", "SSO Authentication (Authelia)"],
        competencies: ["IoT Architecture & Edge Computing", "Optimized C++ Firmware Development", "Stream Security (Crypto & TLS)", "Containerized Orchestration"],
        results: ["Production system deployed on campus", "Reliable long-range transmission", "Smooth visualization of environmental metrics", "Documented and replicable architecture"],
        githubUrl: "https://github.com/MatheoPinget-dev/IOT_project",
      },
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
};