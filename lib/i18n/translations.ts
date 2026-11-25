import type { Locale } from './types';

const translations = {
	es: {
		nav: {
			projects: 'Proyectos',
			experience: 'Experiencia',
			skills: 'Habilidades',
			education: 'Formación',
			contact: 'Contacto',
			language: 'Idioma',
			primary: 'Navegación principal',
			skipToContent: 'Saltar al contenido',
		},
		common: {
			cv: 'CV (PDF)',
			downloadCv: 'Descargar CV',
			viewProjects: 'Ver proyectos',
			viewProject: 'Ver proyecto',
			viewCode: 'Ver código',
			viewLive: 'Ver en vivo',
			viewArchitecture: 'Ver arquitectura',
			viewPdf: 'Ver PDF',
			back: 'Volver al portafolio',
		},
		map: {
			title: 'Mapa de sistemas · lo que construyo',
			hub: 'sistemas',
			alt: 'Mapa de los sistemas en los que trabajo, conectados a un centro',
		},
		about: { title: 'Sobre mí' },
		experience: { title: 'Experiencia', meta: '4 posiciones · 2023 — 2026' },
		projects: { title: 'Proyectos', meta: '2 casos de estudio' },
		skills: { title: 'Habilidades', meta: 'Filtra por área', all: 'Todas', filter: 'Filtrar habilidades' },
		education: { title: 'Formación' },
		certificates: { title: 'Certificados' },
		contact: {
			title: 'Hablemos de tu operación, tu equipo o tu próximo proyecto.',
			subtitle: 'Respondo por correo o WhatsApp. Si prefieres revisar primero, el CV y el código están a un clic.',
		},
		project: {
			crumb: 'Proyectos',
			role: 'Rol',
			status: 'Estado',
			year: 'Año',
			problem: 'El problema',
			goal: 'El objetivo',
			decisions: 'Decisiones técnicas',
			flow: 'Flujo principal',
			stack: 'Stack',
			next: 'Siguiente proyecto',
			close: '¿Quieres hablar de un proyecto parecido?',
			notFound: 'Proyecto no encontrado',
		},
		footer: { rights: 'Cartago, Valle del Cauca, Colombia' },
	},
	en: {
		nav: {
			projects: 'Projects',
			experience: 'Experience',
			skills: 'Skills',
			education: 'Education',
			contact: 'Contact',
			language: 'Language',
			primary: 'Main navigation',
			skipToContent: 'Skip to content',
		},
		common: {
			cv: 'Resume (PDF)',
			downloadCv: 'Download resume',
			viewProjects: 'View projects',
			viewProject: 'View project',
			viewCode: 'View code',
			viewLive: 'Live site',
			viewArchitecture: 'View architecture',
			viewPdf: 'View PDF',
			back: 'Back to portfolio',
		},
		map: {
			title: 'Systems map · what I build',
			hub: 'systems',
			alt: 'Map of the systems I work on, connected to a centre',
		},
		about: { title: 'About me' },
		experience: { title: 'Experience', meta: '4 roles · 2023 — 2026' },
		projects: { title: 'Projects', meta: '2 case studies' },
		skills: { title: 'Skills', meta: 'Filter by area', all: 'All', filter: 'Filter skills' },
		education: { title: 'Education' },
		certificates: { title: 'Certificates' },
		contact: {
			title: 'Let us talk about your operation, your team or your next project.',
			subtitle: 'I reply by email or WhatsApp. If you would rather look first, the resume and the code are one click away.',
		},
		project: {
			crumb: 'Projects',
			role: 'Role',
			status: 'Status',
			year: 'Year',
			problem: 'The problem',
			goal: 'The goal',
			decisions: 'Technical decisions',
			flow: 'Main flow',
			stack: 'Stack',
			next: 'Next project',
			close: 'Want to talk about a similar project?',
			notFound: 'Project not found',
		},
		footer: { rights: 'Cartago, Valle del Cauca, Colombia' },
	},
} as const;

export type Translations = (typeof translations)['es'];

export function getTranslation(locale: Locale): Translations {
	return translations[locale] as Translations;
}

export default translations;
