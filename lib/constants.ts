import type { LocalizedString } from '@/lib/i18n/types';

export const profile = {
	fullName: 'Julian Andrés Caracas',
	initials: 'JAC',
	roles: {
		es: ['Desarrollador de Software', 'Ingeniero de Sistemas'],
		en: ['Software Developer', 'Systems Engineer'],
	},
	degree: {
		es: 'Desarrollador de Software | Ingeniero de Sistemas',
		en: 'Software Developer | Systems Engineer',
	} satisfies LocalizedString,
	tagline: {
		es: 'Construyo soluciones tecnológicas para resolver problemas, optimizar procesos y generar impacto real.',
		en: 'Building reliable technology solutions through IT support, systems administration, and software development.',
	} satisfies LocalizedString,
	bio: {
		es: 'Me apasiona utilizar la tecnología para transformar necesidades en soluciones que generen impacto. Actualmente estoy desarrollando mi trayectoria profesional mediante proyectos, aprendizaje continuo y nuevos desafíos. Disfruto analizar problemas, comprender procesos y crear herramientas que aporten valor a las personas y organizaciones, ayudándolas a alcanzar sus objetivos de manera más eficiente.',
		en: 'I am passionate about using technology to transform needs into impactful solutions. Currently, I am developing my professional journey through projects, continuous learning, and new challenges. I enjoy analyzing problems, understanding processes, and creating tools that add value to people and organizations, helping them achieve their goals more efficiently.',
	} satisfies LocalizedString,
	journey: {
		es: 'Me motiva aprender constantemente, enfrentar nuevos retos y participar en proyectos que generen un impacto positivo. Creo en la tecnología como una herramienta para optimizar procesos, mejorar experiencias y crear soluciones que respondan a necesidades reales. Mi objetivo es seguir creciendo profesionalmente mientras aporto valor a través de la innovación, la colaboración y la mejora continua.',
		en: 'I am motivated to learn constantly, face new challenges and participate in projects that generate a positive impact. I believe in technology as a tool to optimize processes, improve experiences and create solutions that respond to real needs. My goal is to continue growing professionally while contributing value through innovation, collaboration and continuous improvement.',
	} satisfies LocalizedString,
	location: {
		es: 'Cartago, Valle del Cauca, Colombia',
		en: 'Cartago, Valle del Cauca, Colombia',
	} satisfies LocalizedString,
	phone: '+573043432942',
	email: 'andrescaracas0623@gmail.com',
	image: '/images/FOTO_DEV.png',
	cv: '/cv.pdf',
	stats: {
		experienceYears: '1+',
		certificationsCount: '7',
		projectsCount: '2',
	},
};

export const siteConfig = {
	name: profile.fullName,
	description: profile.bio,
	mainNav: [
		{ key: 'home', href: '/' },
		{ key: 'about', href: '/about' },
		{ key: 'education', href: '/education' },
		{ key: 'skills', href: '/skills' },
		{ key: 'experience', href: '/experience' },
		{ key: 'projects', href: '/projects' },
		{ key: 'certificates', href: '/certificates' },
		{ key: 'contact', href: '/contact' },
	] as const,
	links: {
		github: 'https://github.com/julianandrescaracas0623',
		linkedin: 'https://www.linkedin.com/in/julian-andres-caracas-sanchez-23886b237/',
		whatsapp: 'https://wa.me/573043432942',
		email: 'mailto:andrescaracas0623@gmail.com',
		phone: 'tel:+573043432942',
	},
};

export type Experience = {
	title: LocalizedString;
	company: string;
	location: LocalizedString;
	startDate: LocalizedString;
	endDate: LocalizedString;
	description: LocalizedString[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: {
			es: 'Analista de Sistemas TI / Administrador de Sistemas',
			en: 'IT Systems Analyst / Systems Administrator',
		},
		company: 'Salud Integral',
		location: {
			es: 'Colombia',
			en: 'Colombia',
		},
		startDate: { es: 'Ene 2025', en: 'Jan 2025' },
		endDate: { es: 'Mar 2026', en: 'Mar 2026' },
		description: [
			{
				es: 'Soporte técnico a usuarios finales (hardware y software)',
				en: 'Technical support for end users (hardware and software)',
			},
			{
				es: 'Diagnóstico y resolución de problemas en equipos e impresoras',
				en: 'Troubleshooting computers and printers',
			},
			{
				es: 'Mantenimiento preventivo y correctivo de infraestructura TI',
				en: 'Preventive and corrective maintenance',
			},
			{
				es: 'Monitoreo básico de sistemas y gestión de incidentes',
				en: 'Basic monitoring of IT systems and incident management',
			},
			{
				es: 'Capacitación a usuarios y documentación de procesos técnicos',
				en: 'User training and technical documentation',
			},
		],
		technologies: ['Windows', 'Troubleshooting', 'excel'],
	},
	{
		title: {
			es: 'Analista de Sistemas TI / Administrador de Sistemas',
			en: 'IT Systems Analyst / Systems Administrator',
		},
		company: 'Akorbi S.A.S',
		location: {
			es: 'Colombia',
			en: 'Colombia',
		},
		startDate: { es: 'Jul 2024', en: 'Jul 2024' },
		endDate: { es: 'Nov 2024', en: 'Nov 2024' },
		description: [
			{
				es: 'Soporte técnico y mantenimiento de infraestructura',
				en: 'Technical support and infrastructure maintenance',
			},
			{
				es: 'Resolución de incidentes y asistencia a usuarios',
				en: 'Incident resolution and user assistance',
			},
			{
				es: 'Documentación técnica de procesos y procedimientos',
				en: 'Technical documentation',
			},
			{
				es: 'Pruebas de sistemas y seguimiento de incidencias',
				en: 'System testing and issue tracking',
			},
		],
		technologies: ['Windows', 'Troubleshooting', 'excel', 'microsoftteams', 'microsoft365', 'microsoftazure', 'microsoftword', 'Documentación'],
	},
	{
		title: {
			es: 'Asistente de Soporte Técnico / Asistente Administrativo',
			en: 'Technical Support Assistant / Administrative Assistant',
		},
		company: 'Biotecnología Dental',
		location: {
			es: 'Colombia',
			en: 'Colombia',
		},
		startDate: { es: 'Ene 2023', en: 'Jan 2023' },
		endDate: { es: 'Dic 2023', en: 'Dec 2023' },
		description: [
			{
				es: 'Soporte técnico para equipos de cómputo',
				en: 'Technical support for computer equipment',
			},
			{
				es: 'Diagnóstico, resolución de problemas y mantenimiento',
				en: 'Troubleshooting and maintenance',
			},
			{
				es: 'Apoyo a procesos administrativos del área',
				en: 'Administrative process support',
			},
		],
		technologies: ['Windows', 'Hardware Support', 'excel'],
	},
];

export type Project = {
	title: LocalizedString;
	description: LocalizedString;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: {
			es: 'Sistema de Gestión Documental',
			en: 'Document Management System',
		},
		description: {
			es: 'Plataforma web Saas (Software as a Service) para digitalizar, organizar y gestionar documentos administrativos, con autenticación, roles, categorías y almacenamiento seguro (Supabase).',
			en: 'Web platform Saas (Software as a Service) to digitize, organize, and manage administrative documents, with authentication, roles, categories, and secure storage (Supabase).',
		},
		image: '/project-images/portada_gestion_documental.png',
		tags: ['Next.js', 'Supabase', 'PostgreSQL + Storage', 'Tailwind CSS', 'shadcn/ui',],
		repo: 'https://julianandrescaracas0623.github.io/sistema-de-gestion-documental/',
		link: 'https://sistema-de-gestion-documental.vercel.app/login',
	},
	{
		title: {
			es: 'Laboratorio Practico CI/CD con GitHub Actions',
			en: 'Practical CI/CD Lab with GitHub Actions',
		},
		description: {
			es: 'Repositorio de aprendizaje para CI/CD con GitHub Actions. No incluye código de aplicación el contenido del laboratorio son los workflows',
			en: 'Learning repository for CI/CD with GitHub Actions. Does not include application code the contents of the lab are the workflows',
		},
		image: '/project-images/cicd-github-actions.svg',
		tags: ['GitHub Actions', 'CI/CD', 'YAML', 'DevOps'],
		repo: 'https://github.com/julianandrescaracas0623/CI_CD_GITHUB_ACTIONS',
		link: 'https://github.com/julianandrescaracas0623/CI_CD_GITHUB_ACTIONS/actions',
	},
];

export type Education = {
	degree: LocalizedString;
	field: LocalizedString;
	institution: string;
	location: LocalizedString;
	startDate: LocalizedString;
	endDate: LocalizedString;
	achievements: LocalizedString[];
};

export const education: Education[] = [
	{
		degree: {
			es: 'Ingeniería de Sistemas',
			en: 'Systems Engineering',
		},
		field: {
			es: 'Estudiante de 10° semestre',
			en: '10th Semester Student',
		},
		institution: 'Corporación de Estudios Tecnológicos del Norte del Valle',
		location: {
			es: 'Cartago, Valle del Cauca, Colombia',
			en: 'Cartago, Valle del Cauca, Colombia',
		},
		startDate: { es: '2025', en: '2025' },
		endDate: { es: 'Presente', en: 'Present' },
		achievements: [
			{
				es: 'administración de sistemas,Seguridad de la información, Arquitectura de software, desarrollo de software',
				en: 'systems administration, information security, software architecture, software development',
			},
		],
	},
	{
		degree: {
			es: 'Tecnología en Gestión de Sistemas',
			en: 'Technology in Systems Management',
		},
		field: {
			es: 'En proceso de certificación',
			en: 'In Certification Process',
		},
		institution: 'Corporación de Estudios Tecnológicos del Norte del Valle',
		location: {
			es: 'Cartago, Valle del Cauca, Colombia',
			en: 'Cartago, Valle del Cauca, Colombia',
		},
		startDate: { es: '2024', en: '2024' },
		endDate: { es: '2024', en: '2024' },
		achievements: [
			{
				es: 'Complemento formativo en gestión y administración de sistemas',
				en: 'Complementary training in systems management and administration',
			},
		],
	},

	{
		degree: {
			es: 'Tecnico Profesional en Programación de Aplicaciones Informaticas',
			en: 'Professional Technician in Programming of Informatic Applications',
		},
		field: {
			es: 'Finalizado',
			en: 'Completed',
		},
		institution: 'Corporación de Estudios Tecnológicos del Norte del Valle',
		location: {
			es: 'Cartago, Valle del Cauca, Colombia',
			en: 'Cartago, Valle del Cauca, Colombia',
		},
		startDate: { es: '2021', en: '2021' },
		endDate: { es: '2023', en: '2023' },
		achievements: [
			{
				es: 'Formación en programación de aplicaciones informáticas',
				en: 'Training in programming of informatic applications',
			},
		],
	},
	
];

export type Certificate = {
	title: string;
	issuer: string;
	date?: string;
	description?: LocalizedString;
	pdf?: string;
	image?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Primer Hackathon de Inteligencia Artificial en Cartago',
		issuer: 'Tinku',
		pdf: '/certificate-files/tinku.pdf',
		image: '/images/tinku.png',
		description: {
			es: 'Creación de soluciones con Inteligencia Artificial para un desafío empresarial real de Techos Rentables.',
			en: 'Creation of solutions with Artificial Intelligence for a real business challenge of Techos Rentables.',
		},
	},
	{
		title: 'Supabase',
		issuer: 'Platzi',
		pdf: '/certificate-files/diploma-supabase.pdf',
		image: '/images/diploma-supabase.jpg',
		description: {
			es: 'Bases de datos, autenticación y Backend con Supabase.',
			en: 'Databases, authentication, and Backend with Supabase.',
		},
	},
	{
		title: 'Fundamentos de Arquitectura de Software',
		issuer: 'Platzi',
		pdf: '/certificate-files/diploma-fundamentos-arquitectura-software.pdf',
		image: '/images/arquitectura.jpg',
	},
	{
		title: 'Protección Integral de la Información',
		issuer: 'Cotecnova',
		pdf: '/certificate-files/proteccion_de_informacion.pdf',
		image: '/images/proteccion_de_informacion.jpeg',
	},
	{
		title: 'Fundamentos de Ingeniería de Software',
		issuer: 'Platzi',
		pdf: '/certificate-files/diploma-ingenieria.pdf',
		image: '/images/ing_de_software.jpg',
	},
	{
		title: 'Introducción al Desarrollo Backend',
		issuer: 'Platzi',
		pdf: '/certificate-files/diploma-backend.pdf',
		image: '/images/desarrolla_backend.jpg',
	},
	{
		title: 'Scrum Foundation Professional Certificate',
		issuer: 'CertiProf',
		pdf: '/certificate-files/Certificate.pdf',
		image: '/images/scrum.jpg',
	},
	
];

export type Skill = {
	name: LocalizedString;
	level: number;
	category: 'technical' | 'software' | 'soft' | 'language';
	group?: 'dev' | 'tools' | 'ai';
};

export const skills: Skill[] = [
	{ name: { es: 'Soporte técnico', en: 'Technical Support' }, level: 9, category: 'technical' },
	{ name: { es: 'Administración de sistemas', en: 'Systems Administration' }, level: 8, category: 'technical' },
	{ name: { es: 'Resolución de problemas', en: 'Troubleshooting' }, level: 8, category: 'technical' },
	{ name: { es: 'Redes (TCP/IP, HTTP, HTTPS)', en: 'Networking (TCP/IP, HTTP, HTTPS)' }, level: 5, category: 'technical' },
	{ name: { es: 'CI/CD', en: 'CI/CD' }, level: 7, category: 'technical' },
	{ name: { es: 'Python', en: 'Python' }, level: 6, category: 'software', group: 'dev' },
	{ name: { es: 'PHP', en: 'PHP' }, level: 6, category: 'software', group: 'dev' },
	{ name: { es: 'MySQL', en: 'MySQL' }, level: 7, category: 'software', group: 'dev' },
	{ name: { es: 'HTML', en: 'HTML' }, level: 7, category: 'software', group: 'dev' },
	{ name: { es: 'Git', en: 'Git' }, level: 8, category: 'software', group: 'dev' },
	{ name: { es: 'GitHub', en: 'GitHub' }, level: 8, category: 'software', group: 'dev' },
	{ name: { es: 'Supabase', en: 'Supabase' }, level: 7, category: 'software', group: 'dev' },
	{ name: { es: 'Windows', en: 'Windows' }, level: 9, category: 'software', group: 'tools' },
	{ name: { es: 'Linux', en: 'Linux' }, level: 7, category: 'software', group: 'tools' },
	{ name: { es: 'Terminal Linux', en: 'Linux Terminal' }, level: 8, category: 'software', group: 'tools' },
	{ name: { es: 'VS Code', en: 'VS Code' }, level: 9, category: 'software', group: 'tools' },
	{ name: { es: 'Trello', en: 'Trello' }, level: 5, category: 'software', group: 'tools' },
	{ name: { es: 'Notion', en: 'Notion' }, level: 7, category: 'software', group: 'tools' },
	{ name: { es: 'Cursor', en: 'Cursor' }, level: 7, category: 'software', group: 'ai' },
	{ name: { es: 'Opencode', en: 'Opencode' }, level: 7, category: 'software', group: 'ai' },
	{ name: { es: 'Claude', en: 'Claude' }, level: 7, category: 'software', group: 'ai' },
	{ name: { es: 'Trabajo en equipo', en: 'Teamwork' }, level: 9, category: 'soft' },
	{ name: { es: 'Comunicación', en: 'Communication' }, level: 8, category: 'soft' },
	{ name: { es: 'Adaptabilidad', en: 'Adaptability' }, level: 9, category: 'soft' },
	{ name: { es: 'Aprendizaje continuo', en: 'Continuous Learning' }, level: 10, category: 'soft' },
	{ name: { es: 'Trabajo bajo presión', en: 'Working Under Pressure' }, level: 8, category: 'soft' },
	{ name: { es: 'Español (nativo)', en: 'Spanish (Native)' }, level: 10, category: 'language' },
	{ name: { es: 'Inglés (A2)', en: 'English (A2)' }, level: 4, category: 'language' },
];

export type BlogPost = {
	title: LocalizedString;
	excerpt: LocalizedString;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [];
