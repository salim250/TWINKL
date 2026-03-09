import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

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
    const [language, setLanguage] = useState<Language>('fr');

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

            // footer
            'footer.about.title': 'À propos de TWINKL',
            'footer.about.description': 'Un centre de tutorat et d’apprentissage dédié à l’accompagnement des élèves grâce à un enseignement personnalisé et à plusieurs programmes internationaux.',

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
            'home.about.description1': 'TWINKL Education, partie de TWINKL, est un centre de tutorat et d\'apprentissage dédié à former des étudiants curieux, confiants et compétents.',
            'home.about.description2': 'Nous fournissons une éducation de haute qualité grâce à un enseignement personnalisé, des programmes innovants et un environnement favorable, préparant chaque apprenant à la réussite académique et à la croissance tout au long de la vie.',
            'home.about.discoverStory': 'Découvrez notre histoire',

            // HomePage - Subjects
            'home.subjects.title': 'Matières que nous enseignons',
            'home.subjects.subtitle': 'Soutien académique complet dans tous les domaines majeurs',
            'home.subjects.sciences': 'Sciences',
            'home.subjects.sciences.desc': 'Biologie, Chimie, Physique, Science Coordonnée/Combinée',
            'home.subjects.math': 'Mathématiques',
            'home.subjects.math.desc': 'Mathématiques (Core et Extended), Mathématiques Avancées, Mathématiques Appliquées',
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
            'about.story.description1': 'TWINKL Education, partie de TWINKL, est un centre de tutorat et d\'apprentissage dédié à former des étudiants curieux, confiants et compétents.',
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