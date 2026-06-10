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
		es: 'Construyendo soluciones tecnológicas confiables a través del soporte TI, la administración de sistemas y el desarrollo de software.',
		en: 'Building reliable technology solutions through IT support, systems administration, and software development.',
	} satisfies LocalizedString,
	bio: {
		es: 'Estudiante de Ingeniería de Sistemas y profesional de TI con experiencia en soporte técnico, administración de sistemas, mantenimiento de infraestructura y resolución de problemas. Apasionado por la tecnología, el aprendizaje continuo y la entrega de soluciones eficientes que mejoran la experiencia del usuario y las operaciones del negocio.',
		en: 'Systems Engineering student and IT professional with experience in technical support, systems administration, infrastructure maintenance, and troubleshooting. Passionate about technology, continuous learning, and delivering efficient solutions that improve user experience and business operations.',
	} satisfies LocalizedString,
	journey: {
		es: 'Soy estudiante de Ingeniería de Sistemas en mis semestres finales, con experiencia práctica en soporte TI, administración de sistemas y gestión de infraestructura. A lo largo de mi trayectoria profesional he trabajado directamente con usuarios finales, diagnosticando y resolviendo problemas de hardware y software, manteniendo equipos de cómputo, documentando procesos técnicos y apoyando sistemas críticos para el negocio.\n\nAdemás de mi experiencia en soporte TI, he desarrollado habilidades en desarrollo de software con tecnologías como JavaScript, PHP, MySQL, Git y GitHub. Mi objetivo es seguir creciendo profesionalmente en el sector tecnológico mientras contribuyo a proyectos innovadores que generen valor real para las organizaciones y sus usuarios.',
		en: 'I am a Systems Engineering student currently in my final semesters, with practical experience in IT support, systems administration, and infrastructure management. Throughout my professional journey, I have worked directly with end users, diagnosing and resolving hardware and software issues, maintaining computer equipment, documenting technical processes, and supporting business-critical systems.\n\nIn addition to my IT support background, I have developed skills in software development using technologies such as JavaScript, PHP, MySQL, Git, and GitHub. My goal is to continue growing professionally in the technology sector while contributing to innovative projects that generate real value for organizations and their users.',
	} satisfies LocalizedString,
	location: {
		es: 'Cartago, Valle del Cauca, Colombia',
		en: 'Cartago, Valle del Cauca, Colombia',
	} satisfies LocalizedString,
	phone: '+573043432942',
	email: 'andrescaracas0623@gmail.com',
	image: '/profile.jpg',
	cv: '/cv.pdf',
	stats: {
		experienceYears: '3+',
		certificationsCount: '12',
		projectsCount: '0',
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

export const projects: Project[] = [];

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
	pdf?: string;
	image?: string;
};

// Para cada certificado:
// 1. PDF → public/certificate-files/nombre.pdf
// 2. Captura PNG/JPG del diploma → public/certificate-files/nombre.jpg
// 3. Añadir pdf e image en la entrada
export const certificates: Certificate[] = [
	{ title: 'Networks and Security', issuer: 'SENA' },
	{ title: 'Python', issuer: 'SENA' },
	{
		title: 'Supabase',
		issuer: 'Platzi',
		pdf: '/certificate-files/diploma-supabase.pdf',
		image: '/certificate-files/diploma-supabase.jpg',
	},
	{ title: 'HTML', issuer: 'Platzi' },
	{ title: 'Fundamentos de Python', issuer: 'Platzi' },
	{ title: 'Fundamentos de Arquitectura de Software', issuer: 'Platzi' },
	{ title: 'Fundamentos de Seguridad de la Información', issuer: 'Cotecnova' },
	{ title: 'Fundamentos de Ingeniería de Software', issuer: 'Platzi' },
	{ title: 'Introducción al Desarrollo Backend', issuer: 'Platzi' },
	{ title: 'PHP & MySQL', issuer: 'SENA' },
	{ title: 'Git & GitHub', issuer: 'PLATZI' },
	{ title: 'Scrum Foundation Professional Certificate', issuer: 'CertiProf' },
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
