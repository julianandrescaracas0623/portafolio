import type { Locale } from './types';

const translations = {
	es: {
		nav: {
			home: 'Inicio',
			about: 'Sobre mí',
			education: 'Educación',
			skills: 'Habilidades',
			experience: 'Experiencia',
			projects: 'Proyectos',
			certificates: 'Certificados',
			contact: 'Contacto',
		},
		common: {
			contactMe: 'Contáctame',
			downloadCv: 'Descargar CV',
			viewProjects: 'Ver proyectos',
			viewAllProjects: 'Ver todos los proyectos',
			learnMore: 'Saber más',
			sendMessage: 'Enviar mensaje',
			socialLinks: 'Redes sociales',
			loading: 'Cargando...',
			comingSoon: 'Próximamente',
			comingSoonDescription:
				'Estoy preparando mis proyectos para compartirlos aquí. Vuelve pronto.',
		},
		hero: {
			portfolio: 'Portafolio',
			subtitle: 'Un espacio para mostrar mis proyectos, habilidades y logros en tecnología.',
		},
		about: {
			title: 'Sobre mí',
			myJourney: 'Mi trayectoria',
			education: 'Educación',
			experience: 'Experiencia',
			skills: 'Habilidades',
			previewDescription:
				'Profesional de TI apasionado por resolver problemas con soluciones eficientes.',
			role: 'Estudiante de Ingeniería de Sistemas',
			projects: 'Proyectos',
			certifications: 'Certificaciones',
			yearsExperience: 'de experiencia',
			pageEducation:
				'Actualmente cursando Ingeniería de Sistemas con enfoque en soporte TI, administración de sistemas y desarrollo de software.',
			pageExperience:
				'Experiencia práctica en soporte técnico, administración de sistemas e infraestructura TI en distintos sectores.',
			pageSkills:
				'Dominio de herramientas de soporte, administración de sistemas, desarrollo y habilidades blandas para el trabajo en equipo.',
		},
		education: {
			title: 'Educación',
			description: 'Mi formación académica en el área de sistemas y tecnología.',
			achievements: 'Logros',
		},
		experience: {
			title: 'Experiencia profesional',
			description:
				'Mi recorrido en roles de soporte TI, administración de sistemas e infraestructura.',
			responsibilities: 'Responsabilidades clave',
			technologies: 'Tecnologías y herramientas',
		},
		skills: {
			title: 'Habilidades y competencias',
			description:
				'Resumen de mis capacidades técnicas, herramientas de software, habilidades blandas e idiomas.',
			technical: 'Habilidades técnicas',
			software: 'Software',
			soft: 'Habilidades blandas',
			languages: 'Idiomas',
			tabTechnicalShort: 'Técnicas',
			tabSoftwareShort: 'Software',
			tabSoftShort: 'Blandas',
			tabLanguagesShort: 'Idiomas',
			groupDev: 'Desarrollo',
			groupTools: 'Herramientas y plataformas',
			groupAi: 'IA y productividad',
		},
		projects: {
			title: 'Proyectos',
			description:
				'Proyectos de ingeniería y desarrollo donde aplico mis conocimientos técnicos.',
			featuredTitle: 'Proyectos destacados',
			featuredDescription: 'Explora mi trabajo técnico y proyectos de desarrollo.',
		},
		certificates: {
			title: 'Certificados',
			description:
				'Certificaciones profesionales que respaldan mi formación y aprendizaje continuo.',
			issued: 'Emitido',
			verify: 'Verificar',
			view: 'Ver certificado',
			download: 'Descargar',
			noPdf: 'PDF pendiente de adjuntar',
			pdfHint:
				'Guarda el PDF y una captura JPG/PNG en public/certificate-files/ y actualiza lib/constants.ts.',
		},
		contact: {
			title: 'Contáctame',
			description: '¿Tienes una pregunta o quieres trabajar juntos? Escríbeme.',
			info: 'Información de contacto',
			namePlaceholder: 'Tu nombre',
			emailPlaceholder: 'Tu correo',
			subjectPlaceholder: 'Asunto',
			messagePlaceholder: 'Tu mensaje',
			previewDescription:
				'¿Interesado en colaborar o tienes alguna pregunta? ¡Escríbeme!',
		},
		footer: {
			description:
				'Portafolio profesional con habilidades, experiencia y certificaciones en tecnología.',
			about: 'Sobre mi',
			work: 'Trabajo',
			connect: 'Conectar',
			aboutMe: 'Sobre mí',
			resume: 'Currículum',
			rights: 'Todos los derechos reservados.',
		},
	},
	en: {
		nav: {
			home: 'Home',
			about: 'About',
			education: 'Education',
			skills: 'Skills',
			experience: 'Experience',
			projects: 'Projects',
			certificates: 'Certificates',
			contact: 'Contact',
		},
		common: {
			contactMe: 'Contact Me',
			downloadCv: 'Download CV',
			viewProjects: 'View Projects',
			viewAllProjects: 'View All Projects',
			learnMore: 'Learn More',
			sendMessage: 'Send Message',
			socialLinks: 'Social Links',
			loading: 'Loading...',
			comingSoon: 'Coming Soon',
			comingSoonDescription:
				'I am preparing my projects to share here. Check back soon.',
		},
		hero: {
			portfolio: 'Portfolio',
			subtitle: 'A showcase of my projects, skills, and achievements in technology.',
		},
		about: {
			title: 'About Me',
			myJourney: 'My Journey',
			education: 'Education',
			experience: 'Experience',
			skills: 'Skills',
			previewDescription:
				'IT professional passionate about solving problems with efficient solutions.',
			role: 'Systems Engineering Student',
			projects: 'Projects',
			certifications: 'Certifications',
			yearsExperience: 'years of experience',
			pageEducation:
				'Currently pursuing Systems Engineering with a focus on IT support, systems administration, and software development.',
			pageExperience:
				'Hands-on experience in technical support, systems administration, and IT infrastructure across different sectors.',
			pageSkills:
				'Proficiency in support tools, systems administration, development technologies, and teamwork skills.',
		},
		education: {
			title: 'Education',
			description: 'My academic background in systems and technology.',
			achievements: 'Achievements',
		},
		experience: {
			title: 'Professional Experience',
			description:
				'My journey through IT support, systems administration, and infrastructure roles.',
			responsibilities: 'Key Responsibilities',
			technologies: 'Technologies & Tools',
		},
		skills: {
			title: 'Skills & Expertise',
			description:
				'An overview of my technical abilities, software proficiency, soft skills, and languages.',
			technical: 'Technical Skills',
			software: 'Software Proficiency',
			soft: 'Soft Skills',
			languages: 'Languages',
			tabTechnicalShort: 'Technical',
			tabSoftwareShort: 'Software',
			tabSoftShort: 'Soft',
			tabLanguagesShort: 'Languages',
			groupDev: 'Development',
			groupTools: 'Tools & Platforms',
			groupAi: 'AI & Productivity',
		},
		projects: {
			title: 'Projects',
			description:
				'Engineering and development projects demonstrating practical application of my skills.',
			featuredTitle: 'Featured Projects',
			featuredDescription: 'Explore my technical work and development projects.',
		},
		certificates: {
			title: 'Certificates',
			description:
				'Professional certifications that demonstrate my expertise and continuous learning.',
			issued: 'Issued',
			verify: 'Verify',
			view: 'View certificate',
			download: 'Download',
			noPdf: 'PDF not attached yet',
			pdfHint:
				'Save the PDF and a JPG/PNG screenshot in public/certificate-files/ and update lib/constants.ts.',
		},
		contact: {
			title: 'Get in Touch',
			description: 'Have a question or want to work together? Feel free to reach out!',
			info: 'Contact Information',
			namePlaceholder: 'Your Name',
			emailPlaceholder: 'Your Email',
			subjectPlaceholder: 'Subject',
			messagePlaceholder: 'Your Message',
			previewDescription:
				'Interested in working together or have a question? Feel free to reach out!',
		},
		footer: {
			description:
				'Professional portfolio showcasing skills, experience, and certifications in technology.',
			about: 'About',
			work: 'Work',
			connect: 'Connect',
			aboutMe: 'About Me',
			resume: 'Resume',
			rights: 'All rights reserved.',
		},
	},
} as const;

export function getTranslation(locale: Locale) {
	return translations[locale];
}

export type Translations = ReturnType<typeof getTranslation>;
