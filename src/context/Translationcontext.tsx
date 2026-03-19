import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'ar';

interface TranslationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within TranslationProvider');
    }
    return context;
};

interface TranslationProviderProps {
    children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
    const [language, setLanguage] = useState<Language>('en');

    const translations = {
        fr: {
            // Navigation
            'nav.home': 'Accueil',
            'nav.systems': 'Systèmes',
            'nav.about': 'À Propos',
            'nav.team': 'Notre Équipe',
            'nav.career': 'Carrière',
            'nav.enroll': 'Inscrivez-vous',
            'nav.enrollNow': 'Inscrivez-vous maintenant',
            'nav.language.fr': 'Français',
            'nav.language.en': 'Anglais',
            'nav.language.ar': 'Arabe',

            // footer
            'footer.about.title': 'À propos de TWINKL',
            'footer.about.description': 'Une école internationale multidisciplinaire et d’apprentissage dédié à l’accompagnement des élèves grâce à un enseignement personnalisé et à plusieurs programmes internationaux.',

            'footer.contact.title': 'Informations de contact',
            'footer.contact.hours.days': 'Lundi – Dimanche',
            'footer.contact.hours.time': '9:00 – 21:00',

            'footer.links.title': 'Liens rapides',
            'footer.links.home': 'Accueil',
            'footer.links.about': 'À propos',
            'footer.links.programs': 'Programmes',
            'footer.links.team': 'Notre équipe',
            'footer.links.career': 'Carrière',
            'footer.links.contact': 'Contact',

            'footer.location.title': 'Notre emplacement',

            'footer.copyright': 'TWINKL Education. Tous droits réservés.',

            // Systems
            'systems.cambridge': 'Cambridge',
            'systems.ib': 'Baccalauréat International',
            'systems.tunisian': 'Système Tunisien',
            'systems.french': 'Système Français',
            'systems.canadian': 'Système Canadien',

            // HomePage - Hero
            'home.hero.title': 'Bienvenue à TWINKL Education !',
            'home.hero.subtitle': 'Nous inspirons les jeunes apprenants à atteindre l\'excellence académique grâce à un enseignement personnalisé et un environnement bienveillant.',
            'home.hero.enrollToday': 'Inscrivez-vous aujourd\'hui',
            'home.hero.learnMore': 'En savoir plus',

            // HomePage - About Section
            'home.about.title': 'À propos de TWINKL Education',
            'home.about.description1': 'TWINKL Education, partie de TWINKL, est une école internationale multidisciplinaire et d\'apprentissage dédié à former des étudiants curieux, confiants et compétents.',
            'home.about.description2': 'Nous fournissons une éducation de haute qualité grâce à un enseignement personnalisé, des programmes innovants et un environnement favorable, préparant chaque apprenant à la réussite académique et à la croissance tout au long de la vie.',
            'home.about.discoverStory': 'Découvrez notre histoire',

            // HomePage - Subjects
            'home.subjects.title': 'Matières que nous enseignons',
            'home.subjects.subtitle': 'Soutien académique complet dans tous les domaines majeurs',
            'home.subjects.sciences': 'Sciences',
            'home.subjects.sciences.desc': 'Biologie, Chimie, Physique, Science Coordonnée/Combinée',
            'home.subjects.math': 'Mathématiques',
            'home.subjects.math.desc': 'Mathématiques (De base et étendu), Mathématiques Avancées, Mathématiques Appliquées',
            'home.subjects.languages': 'Langues',
            'home.subjects.languages.desc': 'Anglais (Lecture, Écriture, Expression orale), Français, Arabe, Autres langues étrangères (optionnel)',
            'home.subjects.humanities': 'Sciences Humaines et Sociales',
            'home.subjects.humanities.desc': 'Histoire, Géographie, Économie, Perspectives Globales, Études Commerciales',
            'home.subjects.arts': 'Arts et Matières Créatives',
            'home.subjects.arts.desc': 'Art & Design, Musique, Théâtre, TIC',

            // HomePage - Programs
            'home.programs.title': 'Nos Programmes Éducatifs',
            'home.programs.subtitle': 'Choisissez parmi des programmes internationalement reconnus adaptés à vos objectifs éducatifs',
            'home.programs.cambridge.title': 'Cambridge International',
            'home.programs.cambridge.desc': 'Éducation internationale de classe mondiale avec des qualifications reconnues mondialement',
            'home.programs.ib.title': 'Baccalauréat International',
            'home.programs.ib.desc': 'Programmes IB complets favorisant la pensée critique et la citoyenneté mondiale',
            'home.programs.french.title': 'Système Français',
            'home.programs.french.desc': 'Excellence dans l\'éducation française suivant le programme national',
            'home.programs.tunisian.title': 'Système Tunisien',
            'home.programs.tunisian.desc': 'Éducation de qualité alignée sur les normes nationales tunisiennes',
            'home.programs.canadian.title': 'Système Canadien',
            'home.programs.canadian.desc': 'Programme canadien innovant favorisant l\'apprentissage par enquête',
            'home.programs.learnMore': 'En savoir plus',

            // HomePage - CTA
            'home.cta.title': 'Prêt à commencer votre parcours d\'apprentissage ?',
            'home.cta.subtitle': 'Rejoignez TWINKL Education aujourd\'hui et découvrez une éducation personnalisée de classe mondiale qui vous permet d\'atteindre vos objectifs académiques.',
            'home.cta.enrollNow': 'Inscrivez-vous maintenant',

            // AboutPage
            'about.hero.title': 'À propos de TWINKL Education',
            'about.hero.subtitle': 'Cultiver l\'excellence grâce à une éducation personnalisée',
            'about.story.title': 'Notre Histoire',
            'about.story.description1': 'TWINKL Education, partie de TWINKL, est une école internationale multidisciplinaire et d\'apprentissage dédiée à former des étudiants curieux, confiants et compétents.',
            'about.story.description2': 'Nous fournissons une éducation de haute qualité grâce à un enseignement personnalisé, des programmes innovants et un environnement favorable, préparant chaque apprenant à la réussite académique et à la croissance tout au long de la vie.',
            'about.values.title': 'Nos Valeurs',
            'about.values.excellence': 'Excellence',
            'about.values.excellence.desc': 'Nous visons les plus hauts standards en matière d\'éducation et de réussite des élèves',
            'about.values.care': 'Bienveillance',
            'about.values.care.desc': 'Nous créons un environnement favorable où chaque élève se sent valorisé',
            'about.values.collaboration': 'Collaboration',
            'about.values.collaboration.desc': 'Nous travaillons ensemble avec les élèves, les parents et les éducateurs pour réussir',
            'about.values.innovation': 'Innovation',
            'about.values.innovation.desc': 'Nous adoptons des méthodes d\'enseignement modernes et la technologie éducative',
            'about.approach.title': 'Notre Approche',
            'about.approach.description1': 'Chez TWINKL Education, nous croyons en une approche holistique de l\'apprentissage qui aborde à la fois l\'excellence académique et le développement personnel. Nos éducateurs expérimentés emploient des méthodes d\'enseignement innovantes adaptées au style d\'apprentissage unique de chaque élève.',
            'about.approach.description2': 'Nous offrons un soutien complet à travers plusieurs programmes internationaux, garantissant que les élèves reçoivent un enseignement authentique aligné sur leur parcours éducatif choisi. Du Cambridge International à l\'IB, en passant par les systèmes français, tunisien et canadien, nous fournissons des conseils experts à chaque étape.',

            // CareerPage
            'career.hero.title': 'Rejoignez Notre Équipe',
            'career.hero.subtitle': 'Façonnez l\'avenir de l\'éducation chez TWINKL',
            'career.why.title': 'Pourquoi Travailler Avec Nous ?',
            'career.why.subtitle': 'Chez TWINKL Education, nous croyons que les grands enseignants méritent un grand soutien. Rejoignez une équipe qui valorise l\'excellence, l\'innovation et le pouvoir de l\'éducation pour transformer des vies.',
            'career.benefits.professional': 'Développement Professionnel',
            'career.benefits.professional.desc': 'Formation continue et opportunités de croissance',
            'career.benefits.environment': 'Environnement Favorable',
            'career.benefits.environment.desc': 'Culture d\'équipe collaborative et ressources',
            'career.benefits.package': 'Package Compétitif',
            'career.benefits.package.desc': 'Salaire et avantages attractifs',
            'career.requirements.title': 'Exigences',
            'career.requirements.1': 'Licence dans le domaine d\'enseignement (Master préféré)',
            'career.requirements.2': 'Certification d\'enseignement ou expérience prouvée',
            'career.requirements.3': 'Solides compétences en communication et gestion de classe',
            'career.requirements.4': 'Compréhension des systèmes éducatifs internationaux',
            'career.process.title': 'Processus de Candidature',
            'career.process.step1': 'Soumettre la Candidature',
            'career.process.step1.desc': 'Envoyez votre CV et lettre de motivation',
            'career.process.step2': 'Entretien',
            'career.process.step2.desc': 'Rencontrez notre équipe éducative',
            'career.process.step3': 'Rejoignez-nous',
            'career.process.step3.desc': 'Commencez votre parcours avec TWINKL',
            'career.process.ready': 'Prêt à faire la différence dans la vie des élèves ?',
            'career.process.apply': 'Postuler Maintenant',
            'career.apply.title': 'Comment Postuler ?',
            'career.apply.instruction': 'Envoyez votre CV et lettre de motivation à :',
            'career.apply.email': 'teducm@gmail.com',

            // EnrollPage
            'enroll.hero.title': 'Inscrivez-vous Aujourd\'hui',
            'enroll.hero.subtitle': 'Commencez votre parcours vers l\'excellence académique',
            'enroll.why.title': 'Pourquoi Choisir TWINKL Education ?',
            'enroll.why.subtitle': 'Rejoignez une communauté d\'apprentissage engagée pour l\'excellence, l\'innovation et l\'éducation personnalisée. Notre bilan de réussite des élèves parle de lui-même.',
            'enroll.benefits.1': 'Enseignants experts avec des qualifications internationales',
            'enroll.benefits.2': 'Plusieurs options de programmes (Cambridge, IB, Français, Tunisien, Canadien)',
            'enroll.benefits.3': 'Petites classes pour une attention personnalisée',
            'enroll.benefits.4': 'Installations modernes et ressources pédagogiques',
            'enroll.benefits.5': 'Bilan prouvé d\'excellence académique',
            'enroll.benefits.6': 'Options d\'horaires flexibles',
            'enroll.benefits.7': 'Rapports de progrès réguliers et communication avec les parents',
            'enroll.benefits.8': 'Préparation et orientation universitaire',
            'enroll.form.title': 'Formulaire d\'Inscription',
            'enroll.application.title': "Demande d'inscription",
            'enroll.application.description': "Veuillez remplir soigneusement le formulaire d'inscription, cocher les cases appropriées et envoyer le fichier complété à TWINKL Education par email.",
            'enroll.application.button': "Formulaire d'inscription",

            // TeamPage
            'team.hero.title': 'Rencontrez Notre Équipe',
            'team.hero.subtitle': 'Éducateurs expérimentés dédiés à la réussite des élèves',
            'team.experts.title': 'Nos Éducateurs Experts',
            'team.experts.subtitle': 'Notre équipe comprend des éducateurs hautement qualifiés avec une vaste expérience dans les programmes internationaux. Chaque membre apporte passion, expertise et engagement à développer le potentiel des élèves.',
            'team.member.readmore': 'En savoir plus',
            'team.standout.title': 'Pourquoi Notre Équipe Se Démarque',
            'team.standout.qualified': 'Experts Qualifiés',
            'team.standout.qualified.desc': 'Diplômes avancés et certifications dans leurs domaines respectifs',
            'team.standout.curriculum': 'Spécialistes des Programmes',
            'team.standout.curriculum.desc': 'Expertise approfondie des programmes internationaux et des systèmes d\'examen',
            'team.standout.global': 'Expérience Mondiale',
            'team.standout.global.desc': 'Expérience d\'enseignement international dans divers contextes éducatifs',
            'team.cyrine.name': 'Dr. Cyrine Belhadj',
            'team.cyrine.role': 'PDG / Fondatrice de TWINKL Education',
            'team.cyrine.specialization': 'Professeur de biochimie',
            'team.cyrine.description': 'Dr. Cyrine Belhadj, Fondatrice & PDG de TWINKL Education, est une ingénieure hautement qualifiée et enseignante universitaire avec plus de 10 ans d’expérience dans l’enseignement et la direction pédagogique. Enseignante certifiée Cambridge spécialisée en sciences, elle s’engage à promouvoir l’excellence académique et le développement global des élèves. Sous sa direction, TWINKL Education offre un environnement d’apprentissage structuré, innovant et centré sur l’étudiant, permettant aux apprenants d’atteindre leur plein potentiel et de réussir dans un contexte académique mondial.',

            'team.soumaya.name': 'Mme Soumaya Oualha',
            'team.soumaya.role': 'Fondatrice de TWINKL',
            'team.soumaya.specialization': 'Professeur de français',
            'team.soumaya.description': 'Mme Soumaya Oualha est la fondatrice et propriétaire de TWINKL et une enseignante de français très expérimentée. Elle est dédiée à l’excellence académique et à la compréhension culturelle, offrant aux étudiants un accompagnement personnalisé et un enseignement efficace des langues. Sous sa direction, TWINKL Education favorise un environnement d’apprentissage innovant et centré sur l’étudiant, permettant aux apprenants de réaliser leur plein potentiel.',

            'team.salim.name': 'M. Salim Brahim',
            'team.salim.role': 'Enseignant',
            'team.salim.specialization': 'Professeur TIC',
            'team.salim.description': 'M. Salim Brahim est un ingénieur logiciel hautement qualifié et enseignant en TIC avec plus de trois ans d’expérience dans le développement et la maintenance d’applications web à l’échelle entreprise. Titulaire d’un diplôme d’ingénieur en informatique de l’ESPRIT obtenu en 2022, il est expert dans la construction de solutions robustes et évolutives, l’intégration de systèmes, les tests automatisés et la garantie de qualité. En tant qu’enseignant TIC qualifié, il dispense efficacement un enseignement technologique et intègre des outils numériques dans l’apprentissage moderne.',

            'team.rim.name': 'Mme Rim Hana',
            'team.rim.role': 'Enseignante',
            'team.rim.specialization': 'Professeur d’anglais',
            'team.rim.description': 'Mme Rim Hana est enseignante d’anglais et traductrice professionnelle spécialisée dans l’enseignement des langues et la communication interculturelle. Elle détient un Master en Traduction et Interprétation de l’Institut Supérieur des Sciences Humaines de Tunis et une Licence en Langue, Littérature et Civilisation anglaises de la Faculté des Sciences Humaines et Sociales de Tunis. Elle a enseigné dans plusieurs établissements internationaux, concevant des cours interactifs centrés sur l’apprenant, alignés sur le programme Cambridge et intégrant des outils numériques et des stratégies pédagogiques modernes.',

            'team.achref.name': 'M. Achref Ben Brahim',
            'team.achref.role': 'Enseignant',
            'team.achref.specialization': 'Professeur de mathématiques',
            'team.achref.description': 'M. Achref est ingénieur et enseignant en informatique avec une expérience internationale. Il enseigne les TIC, les mathématiques et les études commerciales dans le cadre du curriculum britannique. Avec une expérience en inclusion numérique et support technique, il relie l’éducation et la technologie. Passionné par l’autonomisation des jeunes, il favorise un apprentissage créatif et responsable de la technologie, encourageant l’innovation et la pensée critique via un enseignement centré sur l’étudiant.',

            'team.salma.name': 'Mme Salma Ben Khalifa',
            'team.salma.role': 'Enseignante',
            'team.salma.specialization': 'Professeur de commerce',
            'team.salma.description': 'Mme Salma Ben Khelifa possède une solide expérience en développement commercial, communication stratégique et leadership organisationnel. Elle a occupé des postes liés aux affaires à l’échelle nationale et internationale, notamment en développement des partenariats et formation en leadership chez AIESEC et Artiphany. Elle a également travaillé comme responsable des relations publiques chez iWatch et coordinatrice d’événements chez Mdinti. Son expérience professionnelle permet de relier théorie et pratique, inspirant les étudiants à développer créativité, leadership et vision globale des affaires.',
            
            'team.mohamedsaadallah.name': 'M. Mohamed Saadallah',
            'team.mohamedsaadallah.role': 'Enseignant',
            'team.mohamedsaadallah.specialization': 'Professeur de physique',
            'team.mohamedsaadallah.description': 'Ingénieur et enseignant expérimenté, il maîtrise parfaitement les programmes IGCSE et A-Level de Cambridge. En alliant expertise technique et mise en pratique, il simplifie les concepts complexes de physique, permettant ainsi aux élèves d\'obtenir d\'excellents résultats scolaires et d\'acquérir les compétences indispensables en matière de résolution de problèmes pour réussir leur avenir.',

            'team.mohamedhomsi.name': 'M. Muhammad Homsi',
            'team.mohamedhomsi.role': 'Enseignant',
            'team.mohamedhomsi.specialization': 'Professeur de mathématiques',
            'team.mohamedhomsi.description': 'M. Muhammad est un ingénieur en mécanique et un enseignant dévoué qui maîtrise parfaitement les programmes de l\'IGCSE et des A-Levels de Cambridge. En associant sa formation technique en ingénierie à son expertise en mathématiques et en physique, il transforme des formules abstraites complexes en applications intuitives et concrètes. Son approche pédagogique vise à combler le fossé entre l\'excellence théorique et la résolution pratique de problèmes, garantissant ainsi que ses élèves soient non seulement préparés à obtenir d\'excellents résultats aux examens, mais aussi à répondre aux exigences rigoureuses de l\'enseignement supérieur et de leurs futures carrières techniques.',

            // Cambridge Page
            'cambridge.title': 'Cambridge International',
            'cambridge.subtitle': 'Éducation internationale de classe mondiale avec des qualifications reconnues mondialement',
            'cambridge.content.p1': 'Chez TWINKL Education, nous suivons le programme Cambridge International, un programme mondialement reconnu conçu pour développer des apprenants confiants, responsables et indépendants.',
            'cambridge.content.p2': 'Le programme met l\'accent sur la pensée critique, la créativité et la résolution pratique de problèmes, préparant les élèves à la réussite académique et aux opportunités futures dans le monde entier.',
            'cambridge.content.p3': 'Nos programmes Cambridge offrent des parcours d\'apprentissage structurés, du Primaire (Cambridge Primary) au Secondaire (IGCSE) et Avancé (AS & A Levels), assurant un parcours académique sans faille.',
            'cambridge.content.p4': 'Avec des conseils personnalisés et un enseignement de soutien, nous aidons chaque élève à atteindre son plein potentiel tout en favorisant l\'amour de l\'apprentissage.',

            // IB Page
            'ib.title': 'Baccalauréat International',
            'ib.subtitle': 'Programmes IB complets favorisant la pensée critique et la citoyenneté mondiale',
            'ib.content.p1': 'Chez TWINKL Education, nous soutenons fièrement les principes du Baccalauréat International (IB) — un cadre académique de classe mondiale qui inspire les élèves à devenir des apprenants confiants, compatissants et à l\'esprit mondial.',
            'ib.content.p2': 'Le programme IB encourage la pensée critique, la créativité et la conscience internationale, permettant aux élèves d\'explorer des idées, de remettre en question les hypothèses et de s\'engager avec des défis du monde réel. Grâce à une approche basée sur l\'enquête, les apprenants développent les compétences et l\'état d\'esprit nécessaires pour réussir dans l\'enseignement supérieur et au-delà.',

            // French System Page
            'french.title': 'Système Français',
            'french.subtitle': 'Excellence dans l\'éducation française suivant le programme national',
            'french.content.p1': 'Chez TWINKL Education, nous sommes fiers de suivre l\'excellence du système éducatif français, connu pour sa solide base académique, sa pensée critique et son approche d\'apprentissage structurée.',
            'french.content.p2': 'Notre programme met l\'accent sur la rigueur, la discipline et les compétences analytiques, aidant les élèves à développer une compréhension approfondie des sciences, des langues et des sciences humaines.',
            'french.content.p3': 'Grâce à un enseignement personnalisé et un environnement favorable, nous guidons les apprenants pour obtenir des résultats exceptionnels et se préparer en toute confiance aux examens nationaux et internationaux.',

            // Tunisian System Page
            'tunisian.title': 'Système Tunisien',
            'tunisian.subtitle': 'Éducation de qualité alignée sur les normes nationales tunisiennes',
            'tunisian.content.p1': 'Chez TWINKL Education, nous proposons des programmes alignés sur le programme national tunisien, garantissant que les élèves acquièrent une solide base académique tout en développant leur pensée critique et leurs compétences en résolution de problèmes.',
            'tunisian.content.p2': 'Notre approche met l\'accent sur les matières principales telles que les mathématiques, les sciences, les langues et les sciences humaines, préparant les apprenants aux examens nationaux et aux opportunités d\'enseignement supérieur.',
            'tunisian.content.p3': 'Nous combinons un enseignement structuré avec un soutien personnalisé pour aider les élèves à exceller académiquement, à grandir personnellement et à développer les compétences nécessaires pour réussir à l\'avenir.',

            // Canadian System Page
            'canadian.title': 'Système Canadien',
            'canadian.subtitle': 'Programme canadien innovant favorisant l\'apprentissage par enquête',
            'canadian.content.p1': 'Chez TWINKL Education, nous proposons des programmes alignés sur le programme national tunisien, garantissant que les élèves acquièrent une solide base académique tout en développant leur pensée critique et leurs compétences en résolution de problèmes.',
            'canadian.content.p2': 'Notre approche met l\'accent sur les matières principales telles que les mathématiques, les sciences, les langues et les sciences humaines, préparant les apprenants aux examens nationaux et aux opportunités d\'enseignement supérieur.',
            'canadian.content.p3': 'Nous combinons un enseignement structuré avec un soutien personnalisé pour aider les élèves à exceller académiquement, à grandir personnellement et à développer les compétences nécessaires pour réussir à l\'avenir.',
        },
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.systems': 'Systems',
            'nav.about': 'About Us',
            'nav.team': 'Meet Our Team',
            'nav.career': 'Career',
            'nav.enroll': 'Enroll',
            'nav.enrollNow': 'Enroll Now',
            'nav.language.fr': 'French',
            'nav.language.en': 'English',
            'nav.language.ar': 'Arabic',

            // footer
            'footer.about.title': 'About TWINKL',
            'footer.about.description': 'A dedicated tutoring and learning center committed to nurturing students through personalized teaching and various international curricula.',

            'footer.contact.title': 'Contact Info',
            'footer.contact.hours.days': 'Monday – Sunday',
            'footer.contact.hours.time': '9:00 AM – 9:00 PM',

            'footer.links.title': 'Quick Links',
            'footer.links.home': 'Home',
            'footer.links.about': 'About Us',
            'footer.links.programs': 'Programs',
            'footer.links.team': 'Meet Our Team',
            'footer.links.career': 'Career',
            'footer.links.contact': 'Contact',

            'footer.location.title': 'Our Location',

            'footer.copyright': 'TWINKL Education. All rights reserved.',

            // Systems
            'systems.cambridge': 'Cambridge',
            'systems.ib': 'International Baccalaureate',
            'systems.tunisian': 'Tunisian System',
            'systems.french': 'French System',
            'systems.canadian': 'Canadian System',

            // HomePage - Hero
            'home.hero.title': 'Welcome to TWINKL Education!',
            'home.hero.subtitle': 'We inspire young learners to achieve academic excellence through personalized teaching and a nurturing environment.',
            'home.hero.enrollToday': 'Enroll Today',
            'home.hero.learnMore': 'Learn More',

            // HomePage - About Section
            'home.about.title': 'About TWINKL Education',
            'home.about.description1': 'TWINKL Education, part of TWINKL, is a dedicated tutoring and learning center committed to nurturing curious, confident, and capable students.',
            'home.about.description2': 'We provide high-quality education through personalized teaching, innovative programs, and a supportive environment, preparing every learner for academic success and lifelong growth.',
            'home.about.discoverStory': 'Discover Our Story',

            // HomePage - Subjects
            'home.subjects.title': 'Subjects We Teach',
            'home.subjects.subtitle': 'Comprehensive academic support across all major subject areas',
            'home.subjects.sciences': 'Sciences',
            'home.subjects.sciences.desc': 'Biology, Chemistry, Physics, Coordinated/Combined Science',
            'home.subjects.math': 'Mathematics',
            'home.subjects.math.desc': 'Mathematics (Core and Extended), Further Mathematics, Applied Mathematics',
            'home.subjects.languages': 'Languages',
            'home.subjects.languages.desc': 'English (Reading, Writing, Speaking), French, Arabic, Other foreign languages (optional)',
            'home.subjects.humanities': 'Humanities & Social Sciences',
            'home.subjects.humanities.desc': 'History, Geography, Economics, Global Perspectives, Business Studies',
            'home.subjects.arts': 'Arts & Creative Subjects',
            'home.subjects.arts.desc': 'Art & Design, Music, Drama, ICT',

            // HomePage - Programs
            'home.programs.title': 'Our Educational Programs',
            'home.programs.subtitle': 'Choose from internationally recognized curricula tailored to your educational goals',
            'home.programs.cambridge.title': 'Cambridge International',
            'home.programs.cambridge.desc': 'World-class international education with globally recognized qualifications',
            'home.programs.ib.title': 'International Baccalaureate',
            'home.programs.ib.desc': 'Comprehensive IB programs fostering critical thinking and global citizenship',
            'home.programs.french.title': 'French System',
            'home.programs.french.desc': 'Excellence in French education following the national curriculum',
            'home.programs.tunisian.title': 'Tunisian System',
            'home.programs.tunisian.desc': 'Quality education aligned with Tunisian national standards',
            'home.programs.canadian.title': 'Canadian System',
            'home.programs.canadian.desc': 'Innovative Canadian curriculum promoting inquiry-based learning',
            'home.programs.learnMore': 'Learn More',

            // HomePage - CTA
            'home.cta.title': 'Ready to Start Your Learning Journey?',
            'home.cta.subtitle': 'Join TWINKL Education today and experience personalized, world-class education that empowers you to achieve your academic goals.',
            'home.cta.enrollNow': 'Enroll Now',

            // AboutPage
            'about.hero.title': 'About TWINKL Education',
            'about.hero.subtitle': 'Nurturing excellence through personalized education',
            'about.story.title': 'Our Story',
            'about.story.description1': 'TWINKL Education, part of TWINKL, is a dedicated tutoring and learning center committed to nurturing curious, confident, and capable students.',
            'about.story.description2': 'We provide high-quality education through personalized teaching, innovative programs, and a supportive environment, preparing every learner for academic success and lifelong growth.',
            'about.values.title': 'Our Values',
            'about.values.excellence': 'Excellence',
            'about.values.excellence.desc': 'We strive for the highest standards in education and student achievement',
            'about.values.care': 'Care',
            'about.values.care.desc': 'We create a supportive environment where every student feels valued',
            'about.values.collaboration': 'Collaboration',
            'about.values.collaboration.desc': 'We work together with students, parents, and educators for success',
            'about.values.innovation': 'Innovation',
            'about.values.innovation.desc': 'We embrace modern teaching methods and educational technology',
            'about.approach.title': 'Our Approach',
            'about.approach.description1': 'At TWINKL Education, we believe in a holistic approach to learning that addresses both academic excellence and personal development. Our experienced educators employ innovative teaching methods tailored to each student\'s unique learning style.',
            'about.approach.description2': 'We offer comprehensive support across multiple international curricula, ensuring that students receive authentic instruction aligned with their chosen educational pathway. From Cambridge International to IB, French, Tunisian, and Canadian systems, we provide expert guidance every step of the way.',

            // CareerPage
            'career.hero.title': 'Join Our Team',
            'career.hero.subtitle': 'Shape the future of education at TWINKL',
            'career.why.title': 'Why Work With Us?',
            'career.why.subtitle': 'At TWINKL Education, we believe that great teachers deserve great support. Join a team that values excellence, innovation, and the power of education to transform lives.',
            'career.benefits.professional': 'Professional Development',
            'career.benefits.professional.desc': 'Continuous training and growth opportunities',
            'career.benefits.environment': 'Supportive Environment',
            'career.benefits.environment.desc': 'Collaborative team culture and resources',
            'career.benefits.package': 'Competitive Package',
            'career.benefits.package.desc': 'Attractive salary and benefits',
            'career.requirements.title': 'Requirements',
            'career.requirements.1': 'Bachelor\'s degree in the subject area (Master\'s preferred)',
            'career.requirements.2': 'Teaching certification or proven experience',
            'career.requirements.3': 'Strong communication and classroom management skills',
            'career.requirements.4': 'Understanding of international education systems',
            'career.process.title': 'Application Process',
            'career.process.step1': 'Submit Application',
            'career.process.step1.desc': 'Send your CV and cover letter',
            'career.process.step2': 'Interview',
            'career.process.step2.desc': 'Meet with our education team',
            'career.process.step3': 'Join Us',
            'career.process.step3.desc': 'Start your journey with TWINKL',
            'career.process.ready': 'Ready to make a difference in students\' lives?',
            'career.process.apply': 'Apply Now',
            'career.apply.title': 'How to Apply?',
            'career.apply.instruction': 'Send your CV and motivation letter to:',
            'career.apply.email': 'teducm@gmail.com',

            // EnrollPage
            'enroll.hero.title': 'Enroll Today',
            'enroll.hero.subtitle': 'Start your journey to academic excellence',
            'enroll.why.title': 'Why Choose TWINKL Education?',
            'enroll.why.subtitle': 'Join a learning community committed to excellence, innovation, and personalized education. Our proven track record of student success speaks for itself.',
            'enroll.benefits.1': 'Expert teachers with international credentials',
            'enroll.benefits.2': 'Multiple curriculum options (Cambridge, IB, French, Tunisian, Canadian)',
            'enroll.benefits.3': 'Small class sizes for personalized attention',
            'enroll.benefits.4': 'Modern facilities and learning resources',
            'enroll.benefits.5': 'Proven track record of academic excellence',
            'enroll.benefits.6': 'Flexible scheduling options',
            'enroll.benefits.7': 'Regular progress reports and parent communication',
            'enroll.benefits.8': 'University preparation and guidance',
            'enroll.form.title': 'Enrollment Form',
            'enroll.application.title': 'Enrollment Application',
            'enroll.application.description': 'Please fill out the enrollment form carefully, check the appropriate boxes, and submit the completed file to TWINKL Education by email.',
            'enroll.application.button': 'Enrollment Form',

            // TeamPage
            'team.hero.title': 'Meet Our Team',
            'team.hero.subtitle': 'Experienced educators dedicated to student success',
            'team.experts.title': 'Our Expert Educators',
            'team.experts.subtitle': 'Our team comprises highly qualified educators with extensive experience in international curricula. Each member brings passion, expertise, and a commitment to nurturing student potential.',
            'team.member.readmore': 'Read more',
            'team.standout.title': 'Why Our Team Stands Out',
            'team.standout.qualified': 'Qualified Experts',
            'team.standout.qualified.desc': 'Advanced degrees and certifications in their respective fields',
            'team.standout.curriculum': 'Curriculum Specialists',
            'team.standout.curriculum.desc': 'Deep expertise in international curricula and examination systems',
            'team.standout.global': 'Global Experience',
            'team.standout.global.desc': 'International teaching experience across diverse educational contexts',
            'team.cyrine.name': 'Dr. Cyrine Belhadj',
            'team.cyrine.role': 'CEO / Founder of TWINKL Education',
            'team.cyrine.specialization': 'Biochemistry Teacher',
            'team.cyrine.description': 'Dr. Cyrine Belhadj, Founder & CEO of TWINKL Education, is a highly qualified engineer and university educator with over 10 years of experience in teaching and educational leadership. She is a Certified Cambridge Teacher specializing in Science, committed to fostering academic excellence and holistic development in students. Under her guidance, TWINKL Education provides a structured, innovative, and student-centered learning environment, empowering learners to achieve their full potential and succeed in a global academic landscape.',

            'team.soumaya.name': 'Ms. Soumaya Oualha',
            'team.soumaya.role': 'Founder of TWINKL',
            'team.soumaya.specialization': 'French Teacher',
            'team.soumaya.description': 'Ms. Soumaya Oualha is the Founder and Owner of TWINKL and a highly experienced French teacher. She is dedicated to fostering academic excellence and cultural understanding, providing students with personalized guidance and effective language instruction. Under her leadership, TWINKL Education promotes a student-centered, innovative learning environment, empowering learners to achieve their full potential.',

            'team.salim.name': 'Mr. Salim Brahim',
            'team.salim.role': 'Teacher',
            'team.salim.specialization': 'ICT Teacher',
            'team.salim.description': 'Mr. Salim Brahim is a highly qualified Software Engineer and ICT Teacher with over three years of experience in developing and maintaining enterprise-level web applications. He holds a National Engineering Diploma in Computer Engineering from ESPRIT, obtained in 2022. His expertise includes building robust and scalable solutions, system integration, automated testing, and ensuring quality and reliability. As a qualified ICT educator, he effectively delivers technology-based instruction and integrates digital tools into modern learning environments.',

            'team.rim.name': 'Ms. Rim Hana',
            'team.rim.role': 'Teacher',
            'team.rim.specialization': 'English Teacher',
            'team.rim.description': 'Ms. Rim Hana is a professional English teacher and translator with expertise in language instruction and intercultural communication. She holds a Master\'s Degree in Translation and Interpreting from the Higher Institute of Human Sciences of Tunis and a Bachelor\'s Degree in English Language, Literature, and Civilization from the Faculty of Human and Social Sciences of Tunis. She has taught in several international institutions, designing interactive, learner-focused lessons aligned with the Cambridge curriculum, integrating digital tools and modern teaching strategies to enhance students\' language proficiency and confidence.',

            'team.achref.name': 'Mr. Achref Ben Brahim',
            'team.achref.role': 'Teacher',
            'team.achref.specialization': 'Mathematics Teacher',
            'team.achref.description': 'Mr. Achref is an engineer and computer science educator with international experience. He teaches ICT, Mathematics, and Business Studies within the British Curriculum framework. With a background in digital inclusion and technical support, he bridges education and technology. Passionate about empowering youth, he promotes creative and responsible tech learning, fostering innovation and critical thinking through engaging, student-centered teaching.',

            'team.salma.name': 'Ms. Salma Ben Khalifa',
            'team.salma.role': 'Teacher',
            'team.salma.specialization': 'Business Teacher',
            'team.salma.description': 'Ms. Salma Ben Khelifa brings strong experience in business development, strategic communication, and organizational leadership. She has served in business-focused roles at national and international levels, including Business Development positions at AIESEC and Artiphany, managing partnerships, supporting talent development, and leading training programs in leadership and professional skills. She has also worked as Public Relations Manager at iWatch and Events Coordinator at Mdinti, gaining experience in stakeholder management, project coordination, and event strategy. Her professional background allows her to connect business theory with practical application, inspiring students to develop creativity, leadership, and a global business mindset.',

            'team.mohamedsaadallah.name': 'Mr. Mohamed Saadallah',
            'team.mohamedsaadallah.role': 'Teacher',
            'team.mohamedsaadallah.specialization': 'Physics Teacher',
            'team.mohamedsaadallah.description': 'An experienced Engineer and educator with a deep mastery of the Cambridge IGCSE and A-Level curricula. By blending technical expertise with practical application, they simplify complex physics concepts, empowering students to achieve top academic results and develop essential problem-solving skills for future success.',

            'team.mohamedhomsi.name': 'Mr. Muhammad Homsi',
            'team.mohamedhomsi.role': 'Teacher',
            'team.mohamedhomsi.specialization': 'Mathematics Teacher',
            'team.mohamedhomsi.description': 'Mr. Muhammad is a dedicated Mechanical Engineer and educator with a profound mastery of the Cambridge IGCSE and A-Level curricula. By blending his technical engineering background with an expertise in Mathematics and Physics, he transforms complex abstract formulas into intuitive, real-world applications. His teaching approach focuses on bridging the gap between theoretical excellence and practical problem-solving, ensuring his students are not only prepared for top-tier exam results but also for the rigorous demands of higher education and future technical careers.',

            // Cambridge Page
            'cambridge.title': 'Cambridge International',
            'cambridge.subtitle': 'World-class international education with globally recognized qualifications',
            'cambridge.content.p1': 'At TWINKL Education, we follow the Cambridge International curriculum, a globally recognized program designed to develop confident, responsible, and independent learners.',
            'cambridge.content.p2': 'The curriculum emphasizes critical thinking, creativity, and practical problem-solving, preparing students for academic success and future opportunities worldwide.',
            'cambridge.content.p3': 'Our Cambridge programs offer structured learning pathways, from Primary (Cambridge Primary) to Secondary (IGCSE) and Advanced (AS & A Levels), ensuring a seamless academic journey.',
            'cambridge.content.p4': 'With personalized guidance and supportive teaching, we help every student achieve their full potential while fostering a love for learning.',

            // IB Page
            'ib.title': 'International Baccalaureate',
            'ib.subtitle': 'Comprehensive IB programs fostering critical thinking and global citizenship',
            'ib.content.p1': 'At TWINKL Education, we proudly support the principles of the International Baccalaureate (IB) — a world-class academic framework that inspires students to become confident, compassionate, and globally minded learners.',
            'ib.content.p2': 'The IB program encourages critical thinking, creativity, and international awareness, empowering students to explore ideas, question assumptions, and engage with real-world challenges. Through an inquiry-based approach, learners develop the skills and mindset needed to succeed in higher education and beyond.',

            // French System Page
            'french.title': 'French System',
            'french.subtitle': 'Excellence in French education following the national curriculum',
            'french.content.p1': 'At TWINKL Education, we are proud to follow the excellence of the French education system, known for its strong academic foundation, critical thinking, and structured learning approach.',
            'french.content.p2': 'Our curriculum emphasizes rigor, discipline, and analytical skills, helping students develop a deep understanding of sciences, languages, and humanities.',
            'french.content.p3': 'Through personalized teaching and a supportive environment, we guide learners to achieve outstanding results and prepare confidently for national and international examinations.',

            // Tunisian System Page
            'tunisian.title': 'Tunisian System',
            'tunisian.subtitle': 'Quality education aligned with Tunisian national standards',
            'tunisian.content.p1': 'At TWINKL Education, we provide programs aligned with the Tunisian national curriculum, ensuring students gain a strong academic foundation while developing critical thinking and problem-solving skills.',
            'tunisian.content.p2': 'Our approach emphasizes core subjects such as Mathematics, Sciences, Languages, and Humanities, preparing learners for national examinations and higher education opportunities.',
            'tunisian.content.p3': 'We combine structured teaching with personalized support to help students excel academically, grow personally, and build the skills needed for future success.',

            // Canadian System Page
            'canadian.title': 'Canadian System',
            'canadian.subtitle': 'Innovative Canadian curriculum promoting inquiry-based learning',
            'canadian.content.p1': 'At TWINKL Education, we provide programs aligned with the Tunisian national curriculum, ensuring students gain a strong academic foundation while developing critical thinking and problem-solving skills.',
            'canadian.content.p2': 'Our approach emphasizes core subjects such as Mathematics, Sciences, Languages, and Humanities, preparing learners for national examinations and higher education opportunities.',
            'canadian.content.p3': 'We combine structured teaching with personalized support to help students excel academically, grow personally, and build the skills needed for future success.',
        },
        ar: {
            // Navigation
            'nav.home': 'الصفحة الرئيسية',
            'nav.systems': 'الأنظمة',
            'nav.about': 'نبذة عنا',
            'nav.team': 'فريقنا',
            'nav.career': 'الوظائف',
            'nav.enroll': 'التسجيل',
            'nav.enrollNow': 'سجّل الآن',
            'nav.language.fr': 'الفرنسية',
            'nav.language.en': 'الإنجليزية',
            'nav.language.ar': 'العربية',

            // footer
            'footer.about.title': 'نبذة عن TWINKL',
            'footer.about.description': 'مدرسة دولية للتدريس الخصوصي والتعلم، مكرسة لدعم الطلاب من خلال تعليم مخصص وبرامج دولية متنوعة.',

            'footer.contact.title': 'معلومات الاتصال',
            'footer.contact.hours.days': 'الإثنين – الأحد',
            'footer.contact.hours.time': '09:00 صباحًا – 09:00 مساءً',

            'footer.links.title': 'روابط سريعة',
            'footer.links.home': 'الرئيسية',
            'footer.links.about': 'نبذة عنا',
            'footer.links.programs': 'البرامج',
            'footer.links.team': 'فريقنا',
            'footer.links.career': 'الوظائف',
            'footer.links.contact': 'اتصل بنا',

            'footer.location.title': 'موقعنا',
            'footer.copyright': 'TWINKL Education. جميع الحقوق محفوظة.',

            // Systems
            'systems.cambridge': 'كامبريدج',
            'systems.ib': 'البكالوريا الدولية',
            'systems.tunisian': 'النظام التونسي',
            'systems.french': 'النظام الفرنسي',
            'systems.canadian': 'النظام الكندي',

            // HomePage - Hero
            'home.hero.title': 'مرحبًا بكم في TWINKL Education!',
            'home.hero.subtitle': 'نحن نلهم الطلاب الصغار لتحقيق التميز الأكاديمي من خلال تعليم مخصص وبيئة داعمة.',
            'home.hero.enrollToday': 'سجّل اليوم',
            'home.hero.learnMore': 'اعرف المزيد',

            // HomePage - About Section
            'home.about.title': 'نبذة عن TWINKL Education',
            'home.about.description1': 'TWINKL Education، وهي جزء من TWINKL، هي مدرسة دولية للتدريس الخصوصي والتعلم تكرس جهودها لتنشئة طلاب يتمتعون بالفضول والثقة بالنفس والكفاءة.',
            'home.about.description2': 'نحن نقدم تعليمًا عالي الجودة من خلال التدريس المخصص، والبرامج المبتكرة، والبيئة الداعمة، مما يُعد كل متعلم للنجاح الأكاديمي والتطور المستمر طوال الحياة.',
            'home.about.discoverStory': 'اكتشف قصتنا',

            // HomePage - Subjects
            'home.subjects.title': 'المواد التي ندرسها',
            'home.subjects.subtitle': 'دعم أكاديمي شامل في جميع التخصصات الرئيسية',
            'home.subjects.sciences': 'العلوم',
            'home.subjects.sciences.desc': 'الأحياء، الكيمياء، الفيزياء، العلوم المدمجة/المنسقة',
            'home.subjects.math': 'الرياضيات',
            'home.subjects.math.desc': 'الرياضيات (الأساسية والمتقدمة)، الرياضيات المتقدمة، الرياضيات التطبيقية',
            'home.subjects.languages': 'اللغات',
            'home.subjects.languages.desc': 'الإنجليزية (قراءة، كتابة، محادثة)، الفرنسية، العربية، لغات أجنبية أخرى (اختياري)',
            'home.subjects.humanities': 'العلوم الإنسانية والاجتماعية',
            'home.subjects.humanities.desc': 'التاريخ، الجغرافيا، الاقتصاد، الدراسات العالمية، إدارة الأعمال',
            'home.subjects.arts': 'الفنون والمواد الإبداعية',
            'home.subjects.arts.desc': 'الفن والتصميم، الموسيقى، المسرح، تكنولوجيا المعلومات',

            // HomePage - Programs
            'home.programs.title': 'برامجنا التعليمية',
            'home.programs.subtitle': 'اختر من بين مناهج دولية معترف بها عالميًا لتناسب أهدافك التعليمية',
            'home.programs.cambridge.title': 'كامبريدج الدولية',
            'home.programs.cambridge.desc': 'تعليم عالمي بشهادات معترف بها دوليًا',
            'home.programs.ib.title': 'البكالوريا الدولية',
            'home.programs.ib.desc': 'برامج شاملة تعزز التفكير النقدي والمواطنة العالمية',
            'home.programs.french.title': 'النظام الفرنسي',
            'home.programs.french.desc': 'تميز في التعليم الفرنسي وفق المنهج الوطني',
            'home.programs.tunisian.title': 'النظام التونسي',
            'home.programs.tunisian.desc': 'تعليم عالي الجودة وفق المعايير الوطنية التونسية',
            'home.programs.canadian.title': 'النظام الكندي',
            'home.programs.canadian.desc': 'منهج كندي مبتكر يعزز التعلم القائم على البحث',
            'home.programs.learnMore': 'اعرف المزيد',

            // HomePage - CTA
            'home.cta.title': 'هل أنت مستعد لبدء رحلتك التعليمية؟',
            'home.cta.subtitle': 'انضم إلى TWINKL Education اليوم واستفد من تعليم عالمي مخصص يمكنك من تحقيق أهدافك الأكاديمية.',
            'home.cta.enrollNow': 'سجّل الآن',

            // AboutPage
            'about.hero.title': 'حول TWINKL Education',
            'about.hero.subtitle': 'نرعى التميز من خلال تعليم مخصص',
            'about.story.title': 'قصتنا',
            'about.story.description1': 'TWINKL Education هو مركز تعليمي متخصص يهدف إلى تنمية الطلاب الفضوليين والواثقين والقادرين.',
            'about.story.description2': 'نقدم تعليمًا عالي الجودة من خلال تعليم مخصص، برامج مبتكرة، وبيئة داعمة، لإعداد كل طالب للنجاح الأكاديمي والنمو المستمر.',
            'about.values.title': 'قيمنا',
            'about.values.excellence': 'التميز',
            'about.values.excellence.desc': 'نسعى لتحقيق أعلى المعايير التعليمية والإنجازات الطلابية',
            'about.values.care': 'الرعاية',
            'about.values.care.desc': 'نوفر بيئة داعمة يشعر فيها كل طالب بقيمته',
            'about.values.collaboration': 'التعاون',
            'about.values.collaboration.desc': 'نعمل مع الطلاب والأولياء والمعلمين لتحقيق النجاح',
            'about.values.innovation': 'الابتكار',
            'about.values.innovation.desc': 'نعتمد أساليب تدريس حديثة وتقنيات تعليمية متقدمة',
            'about.approach.title': 'منهجنا',
            'about.approach.description1': 'نؤمن في TWINKL Education بالنهج الشامل للتعلم الذي يجمع بين التميز الأكاديمي والتطور الشخصي. يستخدم معلمونا ذوو الخبرة أساليب تدريس مبتكرة تتناسب مع أسلوب كل طالب الفريد.',
            'about.approach.description2': 'نقدم دعمًا كاملًا عبر العديد من المناهج الدولية، لضمان حصول الطلاب على تعليم أصيل ومتوافق مع مسارهم التعليمي المختار. من كامبريدج الدولية إلى البكالوريا الدولية، والنظام الفرنسي، التونسي، والكندي، نقدم الإرشاد المتخصص في كل خطوة.',

            // CareerPage
            'career.hero.title': 'انضم إلى فريقنا',
            'career.hero.subtitle': 'ساهم في مستقبل التعليم في TWINKL',
            'career.why.title': 'لماذا العمل معنا؟',
            'career.why.subtitle': 'في TWINKL Education، نؤمن أن المعلمين المميزين يستحقون دعمًا مميزًا. انضم إلى فريق يقدّر التميز والابتكار وقوة التعليم في تغيير الحياة.',
            'career.benefits.professional': 'التطوير المهني',
            'career.benefits.professional.desc': 'فرص تدريب مستمرة ونمو مهني',
            'career.benefits.environment': 'بيئة داعمة',
            'career.benefits.environment.desc': 'ثقافة عمل تعاونية وموارد داعمة',
            'career.benefits.package': 'حزمة مميزة',
            'career.benefits.package.desc': 'رواتب ومزايا جذابة',
            'career.requirements.title': 'المتطلبات',
            'career.requirements.1': 'درجة البكالوريوس في التخصص (يفضل الماجستير)',
            'career.requirements.2': 'شهادة تدريس أو خبرة مثبتة',
            'career.requirements.3': 'مهارات قوية في التواصل وإدارة الصف',
            'career.requirements.4': 'فهم أنظمة التعليم الدولية',
            'career.process.title': 'عملية التقديم',
            'career.process.step1': 'تقديم الطلب',
            'career.process.step1.desc': 'أرسل سيرتك الذاتية ورسالة التغطية',
            'career.process.step2': 'المقابلة',
            'career.process.step2.desc': 'لقاء فريق التعليم لدينا',
            'career.process.step3': 'انضم إلينا',
            'career.process.step3.desc': 'ابدأ رحلتك مع TWINKL',
            'career.process.ready': 'هل أنت مستعد لإحداث فرق في حياة الطلاب؟',
            'career.process.apply': 'قدّم الآن',
            'career.apply.title': 'كيفية التقديم؟',
            'career.apply.instruction': 'أرسل سيرتك الذاتية ورسالة الدافع إلى:',
            'career.apply.email': 'teducm@gmail.com',

            // EnrollPage
            'enroll.hero.title': 'سجّل اليوم',
            'enroll.hero.subtitle': 'ابدأ رحلتك نحو التميز الأكاديمي',
            'enroll.why.title': 'لماذا تختار TWINKL Education؟',
            'enroll.why.subtitle': 'انضم إلى مجتمع تعليمي ملتزم بالتميز والابتكار والتعليم المخصص. سجل نجاحات الطلاب السابقة تتحدث عن نفسها.',
            'enroll.benefits.1': 'معلمون خبراء يحملون شهادات دولية',
            'enroll.benefits.2': 'خيارات متعددة للمناهج (كامبريدج، البكالوريا الدولية، الفرنسي، التونسي، الكندي)',
            'enroll.benefits.3': 'حصص صغيرة لتعليم مخصص',
            'enroll.benefits.4': 'مرافق حديثة وموارد تعليمية',
            'enroll.benefits.5': 'سجل حافل من التميز الأكاديمي',
            'enroll.benefits.6': 'جداول مرنة',
            'enroll.benefits.7': 'تقارير تقدم منتظمة وتواصل مع أولياء الأمور',
            'enroll.benefits.8': 'إعداد وإرشاد للجامعة',
            'enroll.form.title': 'نموذج التسجيل',
            'enroll.application.title': 'طلب التسجيل',
            'enroll.application.description': 'يرجى تعبئة نموذج التسجيل بعناية، ووضع علامة في المربعات المناسبة، وإرسال الملف المكتمل إلى TWINKL Education عبر البريد الإلكتروني.',
            'enroll.application.button': 'نموذج التسجيل',

            // TeamPage
            'team.hero.title': 'فريقنا',
            'team.hero.subtitle': 'معلمون ذو خبرة ملتزمون بنجاح الطلاب',
            'team.experts.title': 'خبراؤنا',
            'team.experts.subtitle': 'فريقنا يتكون من معلمين مؤهلين تأهيلاً عاليًا يتمتعون بخبرة واسعة في المناهج الدولية. كل عضو يجلب الشغف والخبرة والالتزام بتنمية إمكانات الطلاب.',
            'team.member.readmore': 'اقرأ المزيد',
            'team.standout.title': 'لماذا يبرز فريقنا',
            'team.standout.qualified': 'خبراء مؤهلون',
            'team.standout.qualified.desc': 'شهادات متقدمة وخبرات في مجالاتهم',
            'team.standout.curriculum': 'متخصصون في المناهج',
            'team.standout.curriculum.desc': 'خبرة عميقة في المناهج الدولية وأنظمة الامتحانات',
            'team.standout.global': 'خبرة عالمية',
            'team.standout.global.desc': 'خبرة تعليمية دولية عبر بيئات تعليمية متنوعة',
            'team.cyrine.name': 'د. سيرين بلحاج',
            'team.cyrine.role': 'الرئيسة التنفيذية / مؤسسة TWINKL Education',
            'team.cyrine.specialization': 'أستاذة الكيمياء الحيوية',
            'team.cyrine.description': 'د. سيرين بلحاج، مؤسسة ومديرة TWINKL Education، مهندسة مؤهلة وأستاذة جامعية ذات خبرة تزيد عن 10 سنوات في التدريس والإدارة التعليمية. معلمة معتمدة من كامبريدج متخصصة في العلوم، ملتزمة بتحقيق التميز الأكاديمي والتنمية الشاملة للطلاب. تحت قيادتها، توفر TWINKL Education بيئة تعليمية منظمة ومبتكرة ومركزة على الطالب، تمكّن المتعلمين من تحقيق كامل إمكاناتهم والنجاح في السياق الأكاديمي العالمي.',

            'team.soumaya.name': 'السيدة سمية علاه',
            'team.soumaya.role': 'مؤسسة TWINKL',
            'team.soumaya.specialization': 'أستاذة اللغة الفرنسية',
            'team.soumaya.description': 'السيدة سمية علاه هي مؤسسة ومالكة منظمة TWINKL ومعلمة فرنسية ذات خبرة عالية. هي ملتزمة بتحقيق التميز الأكاديمي والفهم الثقافي، وتوفر للطلاب توجيهًا شخصيًا وتعليمًا فعالًا للغة. تحت قيادتها، تعزز TWINKL Education بيئة تعلم مبتكرة ومركزة على الطالب، تمكن المتعلمين من تحقيق كامل إمكاناتهم.',

            'team.salim.name': 'الأستاذ سليم ابراهيم',
            'team.salim.role': 'معلم',
            'team.salim.specialization': 'أستاذ تكنولوجيا المعلومات',
            'team.salim.description': 'الأستاذ سليم ابراهيم مهندس برمجيات مؤهل وأستاذ تكنولوجيا المعلومات مع أكثر من ثلاث سنوات من الخبرة في تطوير وصيانة تطبيقات ويب على مستوى الشركات. حاصل على دبلوم وطني في هندسة الحاسوب من ESPRIT عام 2022. يشمل خبرته بناء حلول قوية وقابلة للتوسع، تكامل الأنظمة، الاختبارات الآلية، وضمان الجودة. كمعلم تكنولوجيا المعلومات مؤهل، يقوم بتقديم التعليم التقني بفاعلية ودمج الأدوات الرقمية في بيئات التعلم الحديثة.',

            'team.rim.name': 'السيدة ريم هنا',
            'team.rim.role': 'معلمة',
            'team.rim.specialization': 'أستاذة اللغة الإنجليزية',
            'team.rim.description': 'السيدة ريم هنا معلمة ومترجمة محترفة في اللغة الإنجليزية، متخصصة في تعليم اللغات والتواصل بين الثقافات. حصلت على ماجستير في الترجمة والتحرير من المعهد العالي للعلوم الإنسانية بتونس وبكالوريوس في اللغة الإنجليزية وآدابها وحضارتها من كلية العلوم الإنسانية والاجتماعية بتونس. قامت بالتدريس في عدة مؤسسات دولية، وتصمم دروسًا تفاعلية تركز على المتعلم ومتوافقة مع منهج كامبريدج، مع دمج الأدوات الرقمية واستراتيجيات التعليم الحديثة.',

            'team.achref.name': 'الأستاذ أشرف بن ابراهيم',
            'team.achref.role': 'معلم',
            'team.achref.specialization': 'أستاذ الرياضيات',
            'team.achref.description': 'الأستاذ أشرف مهندس ومعلم علوم الحاسوب ذو خبرة دولية. يدرّس تكنولوجيا المعلومات والرياضيات والدراسات التجارية ضمن المنهج البريطاني. بفضل خبرته في الشمول الرقمي والدعم التقني، يجمع بين التعليم والتكنولوجيا. شغوف بتمكين الشباب، يعزز التعلم الإبداعي والمسؤول للتكنولوجيا ويشجع الابتكار والتفكير النقدي من خلال تدريس يركز على الطالب.',

            'team.salma.name': 'السيدة سلمى بن خليفة',
            'team.salma.role': 'معلمة',
            'team.salma.specialization': 'أستاذة الأعمال',
            'team.salma.description': 'السيدة سلمى بن خليفة تمتلك خبرة قوية في تطوير الأعمال والتواصل الاستراتيجي والقيادة التنظيمية. عملت في أدوار مرتبطة بالأعمال على المستويين الوطني والدولي، بما في ذلك تطوير الشراكات والتدريب على القيادة في AIESEC وArtiphany. كما عملت كمديرة علاقات عامة في iWatch ومنسقة فعاليات في Mdinti. خبرتها المهنية تمكنها من ربط النظرية بالتطبيق، ملهمة الطلاب لتطوير الإبداع والقيادة وفهم الأعمال عالميًا.',

            'team.mohamedsaadallah.name': 'الأستاذ محمد سعد الله',
            'team.mohamedsaadallah.role': 'معلم',
            'team.mohamedsaadallah.specialization': 'أستاذ الفيزياء',
            'team.mohamedsaadallah.description': 'مهندس ومعلم ذو خبرة عميقة في مناهج كامبريدج IGCSE وA-Level. من خلال دمج الخبرة التقنية مع التطبيق العملي، يبسط مفاهيم الفيزياء المعقدة، مما يمكّن الطلاب من تحقيق نتائج أكاديمية ممتازة وتطوير مهارات حل المشكلات الأساسية للنجاح المستقبلي.',

            'team.mohamedhomsi.name': 'الأستاذ محمد حمصي',
            'team.mohamedhomsi.role': 'معلم',
            'team.mohamedhomsi.specialization': 'أستاذ الرياضيات',
            'team.mohamedhomsi.description': 'الأستاذ محمد مهندس ميكانيكي ومعلم ذو خبرة عميقة في مناهج كامبريدج IGCSE وA-Level. من خلال دمج خلفيته الهندسية مع خبرته في الرياضيات والفيزياء، يحول الصيغ المعقدة إلى تطبيقات واقعية بديهية. يركز نهجه التدريسي على سد الفجوة بين التميز النظري وحل المشكلات العملي، مما يضمن استعداد طلابه ليس فقط لنتائج الامتحانات الممتازة ولكن أيضًا لمتطلبات التعليم العالي والمهن التقنية المستقبلية.',

            // Cambridge Page
            'cambridge.title': 'كامبريدج الدولية',
            'cambridge.subtitle': 'تعليم عالمي متميز بشهادات معترف بها دوليًا',
            'cambridge.content.p1': 'فيفي TWINKL Education، نطبق منهج كامبريدج الدولي، وهو منهج معترف به عالميًا ومصمم لتنمية قدرات المتعلمين ليصبحوا واثقين ومسؤولين ومستقلين.',
            'cambridge.content.p2': 'يركز البرنامج على التفكير النقدي والإبداع وحل المشكلات بشكل عملي، مما يُعد الطلاب للنجاح الأكاديمي والفرص المستقبلية في جميع أنحاء العالم.',
            'cambridge.content.p3': 'تقدم برامج كامبريدج لدينا مسارات تعليمية منظمة، بدءًا من المرحلة الابتدائية (كامبريدج برايماري) مرورًا بالمرحلة الثانوية (IGCSE) وصولًا إلى المستوى المتقدم (AS و A Levels)، مما يضمن مسارًا أكاديميًا سلسًا.',
            'cambridge.content.p4': 'من خلال تقديم المشورة الشخصية والدعم التعليمي، نساعد كل طالب على تحقيق أقصى إمكاناته مع تعزيز حب التعلم.',

            // IB Page
            'ib.title': 'البكالوريا الدولية',
            'ib.subtitle': 'برامج البكالوريا الدولية (IB) الشاملة التي تعزز التفكير النقدي والمواطنة العالمية',
            'ib.content.p1': 'في TWINKL Education، نفتخر بدعم مبادئ البكالوريا الدولية (IB) — وهو إطار أكاديمي عالمي المستوى يلهم الطلاب ليصبحوا متعلمين واثقين من أنفسهم ومتعاطفين وذوي عقلية عالمية.',
            'ib.content.p2': 'يشجع برنامج البكالوريا الدولية (IB) التفكير النقدي والإبداع والوعي الدولي، مما يتيح للطلاب استكشاف الأفكار والتشكيك في الافتراضات والتفاعل مع تحديات العالم الواقعي. ومن خلال نهج قائم على الاستقصاء، يطور المتعلمون المهارات والعقلية اللازمة للنجاح في التعليم العالي وما بعده.',

            // French System Page
            'french.title': 'النظام الفرنسي',
            'french.subtitle': 'تميز في التعليم الفرنسي وفق المنهج الوطني',
            'french.content.p1': 'في TWINKL Education، نفتخر باتباع نهج التميز الذي يتسم به النظام التعليمي الفرنسي، المعروف بأسسه الأكاديمية المتينة، والتفكير النقدي، ونهج التعلم المنظم.',
            'french.content.p2': 'يركز منهجنا على الصرامة، والانضباط، والمهارات التحليلية، لمساعدة الطلاب على فهم عميق للعلوم واللغات والعلوم الإنسانية.',
            'french.content.p3': 'من خلال التعليم المخصص وبيئة داعمة، نوجه المتعلمين لتحقيق نتائج متميزة والاستعداد بثقة للامتحانات الوطنية والدولية.',

            // Tunisian System Page
            'tunisian.title': 'النظام التونسي',
            'tunisian.subtitle': 'تعليم عالي الجودة وفق المعايير الوطنية التونسية',
            'tunisian.content.p1': 'في TWINKL Education، نقدم برامج متوافقة مع المنهج الوطني التونسي، لضمان اكتساب الطلاب أساس أكاديمي قوي وتطوير مهارات التفكير النقدي وحل المشكلات.',
            'tunisian.content.p2': 'يركز نهجنا على المواد الأساسية مثل الرياضيات، العلوم، اللغات، والعلوم الإنسانية، لإعداد الطلاب للامتحانات الوطنية وفرص التعليم العالي.',
            'tunisian.content.p3': 'نحن نجمع بين التعليم المنظم والدعم المخصص لمساعدة الطلاب على التفوق أكاديميًا والنمو الشخصي وبناء المهارات اللازمة للنجاح في المستقبل.',

            // Canadian System Page
            'canadian.title': 'النظام الكندي',
            'canadian.subtitle': 'منهج كندي مبتكر يعزز التعلم القائم على البحث',
            'canadian.content.p1': 'في TWINKL Education، نقدم برامج مبتكرة تعزز أساسًا أكاديميًا قويًا وتطوير التفكير النقدي وحل المشكلات.',
            'canadian.content.p2': 'يركز نهجنا على المواد الأساسية مثل الرياضيات، العلوم، اللغات، والعلوم الإنسانية، لإعداد الطلاب للامتحانات الوطنية وفرص التعليم العالي.',
            'canadian.content.p3': 'نحن نجمع بين التعليم المنظم والدعم المخصص لمساعدة الطلاب على التفوق أكاديميًا والنمو الشخصي وبناء المهارات اللازمة للنجاح في المستقبل.',
        },
    };

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <TranslationContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </TranslationContext.Provider>
    );
};