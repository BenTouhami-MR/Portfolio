// ==================== LOADER ====================
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.classList.add('hide');
    }, 1500);

    // Initialize dynamic counters after page load
    updateDynamicCounters();
});

// ==================== DYNAMIC COUNTERS ====================
function updateDynamicCounters() {
    // Count certifications
    const certifications = document.querySelectorAll('.certificats .certif');
    const certificationsCount = certifications.length;
    document.getElementById('certifications-count').textContent = certificationsCount + '+';

    // Count projects (from both Projects and Professional Experience sections)
    const personalProjects = document.querySelectorAll('#projects .project-card');
    const professionalProjects = document.querySelectorAll('#professional-experience .project-card');
    const totalProjects = personalProjects.length + professionalProjects.length;
    document.getElementById('projects-count').textContent = totalProjects + '+';
}

// ==================== LANGUAGE TOGGLE ====================
let currentLang = 'en';

const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Me',
        'nav-skills': 'Skills',
        'nav-education': 'Education',
        'nav-projects': 'Projects',
        'nav-certificates': 'Certificates',
        'nav-contact': 'Contact',

        // Home Section
        'home-greeting': '👋 Hello, my name is',
        'home-role': 'Data |Engineer',
        'home-subtitle': '🚀 Transforming data into intelligent insights with AI & Big Data',
        'home-download-cv': 'Download CV',
        'home-contact': 'Get in Touch',
        'home-scroll': 'Scroll Down',

        // About Section
        'about-title': 'About |Me',
        'about-desc': 'Enthusiastic Data Engineer, graduated from the National School of Applied Sciences of Al Hoceima, driven by a passion for IT, AI, and data. Eager to learn and contribute to challenging projects, I possess strong skills in data engineering, big data technologies, and data science. Committed to continuous growth, I am excited about the opportunities to apply my knowledge and skills in real-world scenarios.',
        'about-projects': 'Projects Completed',
        'about-certifications': 'Certifications',

        // Skills Section
        'skills-title': 'My |Skills',
        'skills-subtitle': 'Technologies and tools I work with',
        'skills-languages': 'Languages',

        // Education Section
        'education-title': 'Edu|cation',
        'education-subtitle': 'Academic background and qualifications',
        'education-ensah-degree': 'State Engineering Degree in Data Engineering',
        'education-ensah-school': 'National School of Applied Sciences of Al Hoceima',
        'education-ensah-desc': 'Specialized in AI & Big Data Engineering with focus on data pipelines, machine learning, and distributed systems. Gained expertise in big data technologies, cloud computing, and data science.',
        'education-lyon-degree': 'Master in Data Science',
        'education-lyon-school': 'Claude Bernard University Lyon 1',
        'education-lyon-desc': 'Advanced studies in Data Science, focusing on machine learning, deep learning, statistical analysis, and AI applications. Developing expertise in cutting-edge data science methodologies.',

        // Professional Experience Section
        'professional-title': 'Professional |Experiences',
        'professional-subtitle': 'Real-world impact through data engineering',
        'prof-ds-internship-title': 'Data Science and DevOps Internship at Digital Place (February - July 2025)',
        'prof-ds-internship-subtitle': 'Vision Pipeline for Trailer Automation & Tracking',
        'prof-ds-internship-desc': 'Designed and deployed an end-to-end computer vision pipeline for automated trailer detection, segmentation, and tracking. Trained YOLOv11 (97.8% accuracy) for license plate detection, EfficientNet-B2 for Moroccan/European plate classification, and integrated PaddleOCR for text extraction. Applied DINOv2 for visual embeddings enrichment. Integrated models into a FastAPI (backend) and React (frontend) application, containerized with Docker. Orchestrated CI/CD pipeline via Bitbucket Pipelines for automated build and continuous deployment on VPS.',
        'prof-internship-title': 'Data Engineering Internship at Shiftbricks (July - September 2024)',
        'prof-internship-subtitle': 'Scalable Data Ingestion Pipeline for AI Applications',
        'prof-internship-desc': 'During my three-month internship at Shiftbricks, I designed and implemented a scalable data ingestion pipeline. The project involved extracting and transforming unstructured Arabic documents into structured formats using the Medallion Architecture. Automation was achieved using Apache Airflow. I utilized Python, PostgreSQL, and the FARM Stack.',

        // Projects Section
        'projects-title': 'Personal |Projects',
        'projects-subtitle': 'Building solutions with cutting-edge technologies',
        'proj-kappa-title': 'Big Data Real-Time Apartment Analytics with Kappa Architecture',
        'proj-kappa-desc': 'Real-time data pipeline using Kappa Architecture for analyzing apartment listings. Implements streaming data processing with Apache Kafka, Spark, and ClickHouse. Features include real-time visualizations with FastAPI/React, materialized views for optimized queries, and HDFS data lake for storing apartment descriptions. Handles high-velocity data ingestion and provides interactive dashboards for market analysis.',
        'proj-mlops-churn-title': 'MLOps Pipeline for Telecom Customer Churn Prediction',
        'proj-mlops-churn-desc': 'End-to-end MLOps pipeline for customer churn prediction in telecommunications. Implemented real-time model monitoring in production using Evidently, Prometheus, and Grafana. Automated MLOps orchestration (retraining, evaluation, deployment) with MLflow and Airflow from customer data stored in Amazon RDS. Model deployed to production on Amazon S3, containerized with Docker, and deployed on an EC2 instance.',
        'proj-ai-chatbot-title': 'Designing a Big Data Architecture for an AI Trend Chatbot Based on RAG – Azure',
        'proj-ai-chatbot-desc': 'End-to-end automated data pipeline that extracts daily news on AI trends. Leveraged Azure tools to orchestrate, process, and manage data ingestion, ensuring reliable and up-to-date content for the chatbot application.',
        'proj-powerbi-title': 'Interactive Sales Dashboard',
        'proj-powerbi-desc': 'Designed an interactive Power BI dashboard providing comprehensive sales insights. Features dynamic filtering by time, region, and metrics with visualizations for ordered quantities, invoiced sales, and product performance. Enables data-driven decision-making through performance comparison between categories and visual analysis of sales trends by region, client, product, and time period.',
        'proj-patent-title': 'Patent Analysis Project',
        'proj-patent-desc': 'Big data initiative focused on analyzing patent statistics in agriculture. Leveraged PySpark, MongoDB Atlas, PostgreSQL, and Power BI. Collected data from various sources including EPO APIs to aid stakeholders in assessing scientific competencies.',
        'proj-apartment-title': 'Apartment Price Prediction',
        'proj-apartment-desc': 'Real estate price prediction app featuring hybrid regression. Includes web scraping, EDA, and model optimization using StackingRegressor. Deployed as a web application with Flask, HTML, CSS, and JS.',
        'proj-exam-title': 'Exam Planification App',
        'proj-exam-desc': 'Robust application to streamline exam scheduling. Manages exam planning, room assignments, subjects, and courses. Features automated and manual scheduling and optimal room allocation.',
        'proj-filesystem-title': 'File System Design',
        'proj-filesystem-desc': 'Development of a file system in Python, focusing on system design and custom commands. Strengthened Python programming skills and understanding of file system architecture.',
        'proj-grade-title': 'Grade Management App',
        'proj-grade-desc': 'Java application for grade management. Includes management of notes, generation of Excel files for deliberations, and interaction with a MySQL database.',
        'proj-student-title': 'Student Management App',
        'proj-student-desc': 'User-friendly student management application with Tkinter in Python. Seamless integration with MySQL for optimal data management.',
        'btn-more-details': 'More Details',

        // Certificates Section
        'certificates-title': 'Certi|ficates',
        'certificates-subtitle': 'Professional certifications and achievements',

        // Contact Section
        'contact-title': 'Contact |Me',
        'contact-subtitle': 'Let\'s work together on your next project',

        // Footer
        'footer-copyright': '© 2024 - Developed by MR. Ben Touhami | All rights reserved.'
    },
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-about': 'À Propos',
        'nav-skills': 'Compétences',
        'nav-education': 'Formation',
        'nav-projects': 'Projets',
        'nav-certificates': 'Certificats',
        'nav-contact': 'Contact',

        // Home Section
        'home-greeting': '👋 Bonjour, je m\'appelle',
        'home-role': 'Ingénieur de |Données',
        'home-subtitle': '🚀 Transformer les données en insights intelligents avec l\'IA & Big Data',
        'home-download-cv': 'Télécharger CV',
        'home-contact': 'Me Contacter',
        'home-scroll': 'Défiler',

        // About Section
        'about-title': 'À Propos |de Moi',
        'about-desc': 'Ingénieur de données enthousiaste, diplômé de l\'École Nationale des Sciences Appliquées d\'Al Hoceima, animé par une passion pour l\'informatique, l\'IA et les données. Désireux d\'apprendre et de contribuer à des projets stimulants, je possède de solides compétences en ingénierie des données, technologies big data et science des données. Engagé dans une croissance continue, je suis enthousiaste à l\'idée d\'appliquer mes connaissances et compétences dans des scénarios réels.',
        'about-projects': 'Projets Réalisés',
        'about-certifications': 'Certifications',

        // Skills Section
        'skills-title': 'Mes |Compétences',
        'skills-subtitle': 'Technologies et outils que j\'utilise',
        'skills-languages': 'Langues',

        // Education Section
        'education-title': 'For|mation',
        'education-subtitle': 'Parcours académique et qualifications',
        'education-ensah-degree': 'Diplôme d\'Ingénieur d\'État en Ingénierie des Données',
        'education-ensah-school': 'École Nationale des Sciences Appliquées d\'Al Hoceima',
        'education-ensah-desc': 'Spécialisé en Ingénierie IA & Big Data avec un focus sur les pipelines de données, l\'apprentissage automatique et les systèmes distribués. Expertise acquise en technologies big data, cloud computing et science des données.',
        'education-lyon-degree': 'Master en Data Science',
        'education-lyon-school': 'Université Claude Bernard Lyon 1',
        'education-lyon-desc': 'Études avancées en Data Science, axées sur l\'apprentissage automatique, le deep learning, l\'analyse statistique et les applications IA. Développement d\'expertise dans les méthodologies de pointe en science des données.',

        // Professional Experience Section
        'professional-title': 'Expériences |Professionnelles',
        'professional-subtitle': 'Impact concret grâce à l\'ingénierie des données',
        'prof-ds-internship-title': 'Stage en Data Science et DevOps chez Digital Place (Février - Juillet 2025)',
        'prof-ds-internship-subtitle': 'Pipeline Vision pour l\'Automatisation et le Suivi des Semi-Remorques',
        'prof-ds-internship-desc': 'Conçu et déployé un pipeline de vision par ordinateur pour la détection, segmentation et suivi automatisés des semi-remorques. Entraîné YOLOv11 (97,8% de précision) pour la détection de plaques, EfficientNet-B2 pour la classification des plaques marocaines/européennes, et intégré PaddleOCR pour l\'extraction de texte. Appliqué DINOv2 pour l\'enrichissement des embeddings visuels. Intégré les modèles dans une application FastAPI (backend) et React (frontend), conteneurisée avec Docker. Orchestré le pipeline CI/CD via Bitbucket Pipelines pour l\'automatisation du build et du déploiement continu sur VPS.',
        'prof-internship-title': 'Stage en Ingénierie des Données chez Shiftbricks (Juillet - Septembre 2024)',
        'prof-internship-subtitle': 'Pipeline d\'Ingéstion de Données Évolutif pour Applications IA',
        'prof-internship-desc': 'Durant mon stage de trois mois chez Shiftbricks, j\'ai conçu et implémenté un pipeline d\'ingéstion de données évolutif. Le projet impliquait l\'extraction et la transformation de documents arabes non structurés en formats structurés utilisant l\'Architecture Medallion. L\'automatisation a été réalisée avec Apache Airflow. J\'ai utilisé Python, PostgreSQL et le stack FARM.',

        // Projects Section
        'projects-title': 'Projets |Personnels',
        'projects-subtitle': 'Construction de solutions avec des technologies de pointe',
        'proj-kappa-title': 'Analyse Big Data en Temps Réel d\'Appartements avec Architecture Kappa',
        'proj-kappa-desc': 'Pipeline de données en temps réel utilisant l\'Architecture Kappa pour analyser les annonces d\'appartements. Implémente le traitement de données en streaming avec Apache Kafka, Spark et ClickHouse. Comprend des visualisations en temps réel avec FastAPI/React, des vues matérialisées pour des requêtes optimisées, et un lac de données HDFS pour stocker les descriptions d\'appartements. Gère l\'ingestion de données à haute vélocité et fournit des tableaux de bord interactifs pour l\'analyse du marché.',
        'proj-mlops-churn-title': 'Pipeline MLOps pour la Prédiction du Churn Client Télécom',
        'proj-mlops-churn-desc': 'Pipeline MLOps de bout en bout pour la prédiction du churn client dans le secteur des télécommunications. Mise en place d\'un système de monitoring temps réel du modèle en production avec Evidently, Prometheus et Grafana. Automatisation de l\'orchestration MLOps (réentraînement, évaluation, déploiement) avec MLflow et Airflow à partir des données clients stockées dans Amazon RDS. Déploiement du modèle en production sur Amazon S3, conteneurisation avec Docker et déploiement sur une instance EC2.',
        'proj-ai-chatbot-title': 'Conception d\'une Architecture Big Data pour un Chatbot de Tendances IA Basé sur RAG – Azure',
        'proj-ai-chatbot-desc': 'Pipeline de données automatisé de bout en bout qui extrait quotidiennement les actualités sur les tendances IA. Utilisation des outils Azure pour orchestrer, traiter et gérer l\'ingéstion de données, assurant un contenu fiable et à jour pour l\'application de chatbot.',
        'proj-powerbi-title': 'Tableau de Bord Interactif des Ventes',
        'proj-powerbi-desc': 'Conçu un tableau de bord Power BI interactif offrant une vue complète des activités de vente. Propose un filtrage dynamique par période, région et métriques avec des visualisations des quantités commandées, des ventes facturées et des performances produits. Permet une prise de décision basée sur les données grâce à la comparaison des performances entre catégories et l\'analyse visuelle des tendances de vente par région, client, produit et période.',
        'proj-patent-title': 'Projet d\'Analyse de Brevets',
        'proj-patent-desc': 'Initiative big data axée sur l\'analyse des statistiques de brevets dans l\'agriculture. Utilisation de PySpark, MongoDB Atlas, PostgreSQL et Power BI. Collecte de données provenant de diverses sources, y compris les API EPO, pour aider les parties prenantes à évaluer les compétences scientifiques.',
        'proj-apartment-title': 'Prédiction des Prix d\'Appartements',
        'proj-apartment-desc': 'Application de prédiction des prix immobiliers utilisant une régression hybride. Comprend le web scraping, l\'EDA et l\'optimisation du modèle avec StackingRegressor. Déployée comme application web avec Flask, HTML, CSS et JS.',
        'proj-exam-title': 'Application de Planification d\'Examens',
        'proj-exam-desc': 'Application robuste pour rationaliser la planification des examens. Gère la planification des examens, l\'affectation des salles, les matières et les cours. Propose une planification automatique et manuelle et une allocation optimale des salles.',
        'proj-filesystem-title': 'Conception de Système de Fichiers',
        'proj-filesystem-desc': 'Développement d\'un système de fichiers en Python, axé sur la conception de systèmes et les commandes personnalisées. Renforcement des compétences en programmation Python et compréhension de l\'architecture des systèmes de fichiers.',
        'proj-grade-title': 'Application de Gestion de Notes',
        'proj-grade-desc': 'Application Java pour la gestion des notes. Comprend la gestion des notes, la génération de fichiers Excel pour les délibérations et l\'interaction avec une base de données MySQL.',
        'proj-student-title': 'Application de Gestion d\'Étudiants',
        'proj-student-desc': 'Application conviviale de gestion d\'étudiants avec Tkinter en Python. Intégration transparente avec MySQL pour une gestion optimale des données.',
        'btn-more-details': 'Plus de Détails',

        // Certificates Section
        'certificates-title': 'Certi|ficats',
        'certificates-subtitle': 'Certifications professionnelles et réalisations',

        // Contact Section
        'contact-title': 'Me |Contacter',
        'contact-subtitle': 'Travaillons ensemble sur votre prochain projet',

        // Footer
        'footer-copyright': '© 2024 - Développé par MR. Ben Touhami | Tous droits réservés.'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    document.getElementById('lang-text').textContent = currentLang === 'en' ? 'FR' : 'EN';

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            const text = translations[currentLang][key];

            // Check if element is a heading with span (for gradient effect)
            if (element.tagName === 'H1' && element.querySelector('span')) {
                // Use pipe character | as separator for span content
                if (text.includes('|')) {
                    const parts = text.split('|');
                    element.innerHTML = parts[0] + '<span>' + parts[1] + '</span>';
                } else {
                    // Fallback: split on last word
                    const words = text.split(' ');
                    if (words.length > 1) {
                        const lastWord = words.pop();
                        element.innerHTML = words.join(' ') + ' <span>' + lastWord + '</span>';
                    } else {
                        element.innerHTML = '<span>' + text + '</span>';
                    }
                }
            } else if (element.classList.contains('role')) {
                // For role, preserve wonderful-color span for gradient
                if (text.includes('||')) {
                    // Double pipe means wrap the word between pipes
                    const match = text.match(/\|([^|]+)\|/);
                    if (match) {
                        const wordToWrap = match[1];
                        const restOfText = text.replace(/\|[^|]+\|/, '').trim();
                        element.innerHTML = '<span class="wonderful-color">' + wordToWrap + '</span> ' + restOfText;
                    } else {
                        element.textContent = text;
                    }
                } else if (text.includes('|')) {
                    // Single pipe means last word gets the span
                    const parts = text.split('|');
                    element.innerHTML = parts[0] + ' <span class="wonderful-color">' + parts[1] + '</span>';
                } else {
                    // Fallback: split on last word
                    const words = text.split(' ');
                    if (words.length > 1) {
                        const lastWord = words.pop();
                        element.innerHTML = words.join(' ') + ' <span class="wonderful-color">' + lastWord + '</span>';
                    } else {
                        element.innerHTML = '<span class="wonderful-color">' + text + '</span>';
                    }
                }
            } else {
                element.textContent = text;
            }
        }
    });

    // Re-update dynamic counters after translation to ensure they show correct numbers
    updateDynamicCounters();
}

// Add event listener for language toggle
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});

// ==================== NAVIGATION ====================
const menu = document.getElementById("menu");
const actions = document.getElementById("actions");
const aMenuList = document.querySelectorAll('#actions li a');
const navbar = document.querySelector('nav.navbar');

// Handle Menu button
menu.addEventListener("click", () => {
    handleMenu();
});

Array.from(aMenuList).forEach(element => {
    element.addEventListener("click", () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 768) {
            handleMenu();
        }
    });
});

function handleMenu() {
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`nav ul li a[href*="${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ==================== SCROLL REVEAL ANIMATION ====================
// Animation disabled - cards appear immediately
const revealElements = document.querySelectorAll('.reveal');

// Remove all reveal classes to show content immediately
revealElements.forEach(element => {
    element.classList.add('active');
});

/*
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});
*/

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== PARTICLE ANIMATION ====================
const particles = document.querySelectorAll('.particle');

particles.forEach(particle => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    particle.style.left = randomX + '%';
    particle.style.top = randomY + '%';
});

// ==================== TYPING EFFECT (Optional Enhancement) ====================
const roles = ['Data Engineer', 'Data Scientist', 'ML Engineer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleElement = document.querySelector('.role');

function typeEffect() {
    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        roleElement.innerHTML = `Data <span class="wonderful-color">${currentRole.substring(5, charIndex)}</span>`;
        charIndex--;
    } else {
        roleElement.innerHTML = `Data <span class="wonderful-color">${currentRole.substring(5, charIndex)}</span>`;
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 5) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Uncomment to enable typing effect
// setTimeout(typeEffect, 1000);

// ==================== HANDLE PROFILE IMAGE (RESPONSIVE) ====================
const bgImage = document.getElementById("home");

function handleProfilePicture() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1200) {
        bgImage.style.backgroundImage = 'none';
    } else {
        bgImage.style.backgroundImage = 'url(images/bg-image.jpg)';
    }
}

// Debounce resize event
let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleProfilePicture, 200);
});

handleProfilePicture();


// ==================== SCROLL TO TOP BUTTON ====================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-5px) scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = '';
});

// ==================== ANIMATE STATISTICS ====================
const statItems = document.querySelectorAll('.stat-item h3');
let hasAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            statItems.forEach(stat => {
                // Skip animation for dynamic counters (projects and certifications)
                if (stat.id === 'projects-count' || stat.id === 'certifications-count') {
                    return;
                }

                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + '+';
                    }
                }, 30);
            });
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about-me');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Welcome to my portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped by Mohamed Rida Ben Touhami', 'color: #764ba2; font-size: 14px;');
console.log('%cInterested in collaboration? Let\'s connect!', 'color: #ff274b; font-size: 14px;');

// ==================== CAROUSEL FUNCTIONALITY ====================
function changeSlide(button, direction) {
    const container = button.closest('.carousel-container');
    const images = container.querySelectorAll('.carousel-image');
    const dots = container.querySelectorAll('.dot');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + images.length) % images.length;

    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function setSlide(dot, index) {
    const container = dot.closest('.carousel-container');
    const images = container.querySelectorAll('.carousel-image');
    const dots = container.querySelectorAll('.dot');

    images.forEach(img => img.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    images[index].classList.add('active');
    dots[index].classList.add('active');
}

