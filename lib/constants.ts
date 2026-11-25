import type { LocalizedString } from '@/lib/i18n/types';

export const profile = {
	fullName: 'Julián Andrés Caracas',
	initials: 'JAC',
	role: {
		es: 'Desarrollador de Software · Analista de Soporte TI · IA aplicada al desarrollo',
		en: 'Software Developer · IT Support Analyst · AI applied to development',
	} satisfies LocalizedString,
	status: {
		es: 'Cartago, Valle del Cauca · Abierto a oportunidades',
		en: 'Cartago, Valle del Cauca · Open to opportunities',
	} satisfies LocalizedString,
	bio: {
		es: 'Ingeniero de sistemas y tecnólogo en gestión de sistemas de la información. Más de dos años en soporte TI e infraestructura en el sector salud, hoy construyendo aplicaciones empresariales con React, Python y Flask.',
		en: 'Systems engineer and information systems technologist. Over two years in IT support and infrastructure in the healthcare sector, now building enterprise applications with React, Python and Flask.',
	} satisfies LocalizedString,
	summaryLine: {
		es: 'Ingeniero de Sistemas · COTECNOVA — React · TypeScript · Python · Flask · PostgreSQL · SQL Server — Español nativo, inglés A2',
		en: 'Systems Engineer · COTECNOVA — React · TypeScript · Python · Flask · PostgreSQL · SQL Server — Spanish native, English A2',
	} satisfies LocalizedString,
	about: {
		es: [
			'Me interesa entender un proceso antes de tocar el código: quién hace qué, qué dato importa y dónde se pierde el tiempo. Después construyo la herramienta que lo resuelve.',
			'Empecé en soporte técnico, atendiendo equipos y usuarios en una clínica odontológica y después en una empresa de servicios. De ahí pasé a liderar la TI de una IPS, donde además empecé a desarrollar, y hoy construyo aplicaciones empresariales. Ese recorrido de abajo hacia arriba es lo que guía cómo desarrollo: he estado del otro lado del software, así que priorizo lo que la gente va a usar todos los días y documento las decisiones para que el sistema siga siendo mantenible cuando yo no esté delante.',
		],
		en: [
			'I want to understand a process before I touch the code: who does what, which data matters and where time is lost. Then I build the tool that solves it.',
			'I started out in technical support, looking after equipment and users at a dental clinic and later at a services company. From there I moved on to leading IT at a healthcare provider, where I also began developing, and today I build enterprise applications. That bottom-up path shapes how I build software: I have been on the receiving end of it, so I prioritise what people will actually use every day and I document decisions so the system stays maintainable when I am not the one in front of it.',
		],
	},
	location: {
		es: 'Cartago, Valle del Cauca, Colombia',
		en: 'Cartago, Valle del Cauca, Colombia',
	} satisfies LocalizedString,
	phone: '+573043432942',
	phoneLabel: '+57 304 343 2942',
	email: 'andrescaracas0623@gmail.com',
	cv: '/CVs/JULIAN_ANDRES_CARACAS_CV.pdf',
};

export const siteConfig = {
	name: profile.fullName,
	url: 'https://juliancaracas.dev',
	nav: [
		{ key: 'projects', href: '#proyectos' },
		{ key: 'experience', href: '#experiencia' },
		{ key: 'skills', href: '#habilidades' },
		{ key: 'education', href: '#formacion' },
		{ key: 'contact', href: '#contacto' },
	] as const,
	links: {
		github: 'https://github.com/julianandrescaracas0623',
		linkedin: 'https://www.linkedin.com/in/julianandrescaracas/',
		whatsapp: 'https://wa.me/573043432942',
		email: 'mailto:andrescaracas0623@gmail.com',
	},
};

/* ------------------------------------------------------------------ */
/* Mapa de nodos del hero                                              */
/* ------------------------------------------------------------------ */

export type MapNode = {
	name: LocalizedString;
	detail: LocalizedString;
	/** Esquina del mapa: 0 arriba-izq, 1 arriba-der, 2 abajo-izq, 3 abajo-der */
	corner: 0 | 1 | 2 | 3;
	href?: string;
};

export const mapNodes: MapNode[] = [
	{
		name: { es: 'AssetControl', en: 'AssetControl' },
		detail: { es: 'Inventario multi-tenant', en: 'Multi-tenant inventory' },
		corner: 0,
		href: '/projects/assetcontrol',
	},
	{
		name: { es: 'Gestión documental', en: 'Document system' },
		detail: { es: 'SaaS de documentos', en: 'Document SaaS' },
		corner: 1,
		href: '/projects/gestion-documental',
	},
	{
		name: { es: 'Infraestructura', en: 'Infrastructure' },
		detail: { es: 'VPS · Docker · CI/CD', en: 'VPS · Docker · CI/CD' },
		corner: 2,
	},
	{
		name: { es: 'IA aplicada', en: 'Applied AI' },
		detail: { es: 'LLM · RAG · agentes', en: 'LLM · RAG · agents' },
		corner: 3,
	},
];

/* ------------------------------------------------------------------ */
/* Experiencia                                                         */
/* ------------------------------------------------------------------ */

export type Experience = {
	dates: LocalizedString;
	sector: LocalizedString;
	role: LocalizedString;
	org: LocalizedString;
	bullets: LocalizedString[];
	tags: string[];
};

export const experiences: Experience[] = [
	{
		dates: { es: 'Ago 2026 — Nov 2026', en: 'Aug 2026 — Nov 2026' },
		sector: { es: 'Banca', en: 'Banking' },
		role: { es: 'Desarrollador de Software Junior', en: 'Junior Software Developer' },
		org: {
			es: 'ILBG S.A.S. · Plataforma IAM · Cliente principal: Banco Itaú',
			en: 'ILBG S.A.S. · IAM platform · Main client: Banco Itaú',
		},
		bullets: [
			{
				es: 'Desarrollé funcionalidades de la plataforma IAM con React, Python y Flask: gestión de usuarios, roles y permisos mediante RBAC.',
				en: 'Developed IAM platform features with React, Python and Flask: user, role and permission management through RBAC.',
			},
			{
				es: 'Construí el módulo Automations de la plataforma, que automatiza tareas manuales de Jira y procesos internos.',
				en: 'Built the platform Automations module, which automates manual Jira tasks and internal processes.',
			},
			{
				es: 'Mejoré la interfaz de varios módulos e incorporé funcionalidades que ampliaron las capacidades de la plataforma.',
				en: 'Improved the UI of several modules and added features that extended the platform capabilities.',
			},
			{
				es: 'Consultas y validaciones de datos en Microsoft SQL Server para funcionalidades de gestión de accesos.',
				en: 'Data queries and validation in Microsoft SQL Server for access management features.',
			},
			{
				es: 'Análisis de requerimientos y elaboración de especificaciones funcionales de módulos y flujos empresariales.',
				en: 'Requirements analysis and functional specifications for modules and business flows.',
			},
			{
				es: '[AÑADIR: alcance — cuántos usuarios o aplicaciones gestiona la plataforma, o qué ahorró el módulo Automations]',
				en: '[ADD: scope — how many users or applications the platform manages, or what the Automations module saved]',
			},
		],
		tags: ['IAM', 'React', 'Python', 'Flask', 'SQL Server', 'RBAC', 'Jira'],
	},
	{
		dates: { es: '2025 — 2026', en: '2025 — 2026' },
		sector: { es: 'Sector salud', en: 'Healthcare' },
		role: { es: 'Líder IT y Apoyo Administrativo', en: 'IT Lead and Administrative Support' },
		org: { es: 'IPS Salud Integral · Cartago', en: 'IPS Salud Integral · Cartago' },
		bullets: [
			{
				es: 'Desarrollé funcionalidades para Clisoft, plataforma clínica SaaS multi-tenant utilizada por varias IPS.',
				en: 'Developed features for Clisoft, a multi-tenant clinical SaaS platform used by several healthcare providers.',
			},
			{
				es: 'Administré cuentas, accesos y permisos; soporte a sistemas, equipos, impresoras y conectividad.',
				en: 'Managed accounts, access and permissions; support for systems, equipment, printers and connectivity.',
			},
			{
				es: 'Mantenimiento de equipos, documentación y seguimiento de incidentes.',
				en: 'Equipment maintenance, documentation and incident tracking.',
			},
			{
				es: 'Capacité a usuarios en herramientas digitales y seguridad de la información.',
				en: 'Trained users on digital tools and information security.',
			},
			{
				es: '[AÑADIR: cuántos usuarios o sedes atendías]',
				en: '[ADD: how many users or sites you supported]',
			},
		],
		tags: ['Clisoft', 'Multi-tenant', 'Gestión de accesos', 'Soporte TI'],
	},
	{
		dates: { es: '2024', en: '2024' },
		sector: { es: 'BPO bilingüe', en: 'Bilingual BPO' },
		role: { es: 'Analista de IT', en: 'IT Analyst' },
		org: {
			es: 'Akorbi S.A.S. · Call center bilingüe · Pereira, Risaralda',
			en: 'Akorbi S.A.S. · Bilingual call center · Pereira, Risaralda',
		},
		bullets: [
			{
				es: 'Atención y seguimiento de incidentes técnicos, diagnóstico de fallas y documentación de soluciones.',
				en: 'Handled and tracked technical incidents, diagnosed faults and documented solutions.',
			},
			{
				es: 'Mantenimiento de infraestructura tecnológica, pruebas de funcionamiento y soporte a usuarios y áreas internas.',
				en: 'Maintained technology infrastructure, ran functional tests and supported users and internal teams.',
			},
			{
				es: '[AÑADIR: cuántos agentes o estaciones de trabajo soportabas, y en qué horarios]',
				en: '[ADD: how many agents or workstations you supported, and on which shifts]',
			},
		],
		tags: ['Microsoft 365', 'Azure', 'Documentación', 'Gestión de incidentes'],
	},
	{
		dates: { es: '2023', en: '2023' },
		sector: { es: 'Salud dental', en: 'Dental care' },
		role: {
			es: 'Asistente de Soporte Técnico / Administrativo',
			en: 'Technical Support / Administrative Assistant',
		},
		org: {
			es: 'Biotecnología Dental · Clínica odontológica · Cartago',
			en: 'Biotecnología Dental · Dental clinic · Cartago',
		},
		bullets: [
			{
				es: 'Soporte técnico para equipos de cómputo: diagnóstico, resolución de problemas y mantenimiento.',
				en: 'Technical support for computer equipment: diagnosis, troubleshooting and maintenance.',
			},
			{
				es: 'Apoyo a procesos administrativos del área.',
				en: 'Support for the area administrative processes.',
			},
			{
				es: 'Esa misma clínica es hoy el primer cliente de AssetControl.',
				en: 'That same clinic is today the first client of AssetControl.',
			},
		],
		tags: ['Windows', 'Soporte hardware', 'Excel'],
	},
];

/* ------------------------------------------------------------------ */
/* Proyectos                                                           */
/* ------------------------------------------------------------------ */

export type Decision = {
	n: string;
	title: LocalizedString;
	body: LocalizedString;
};

export type StackGroup = {
	label: LocalizedString;
	items: string[];
};

export type Project = {
	slug: string;
	name: LocalizedString;
	kicker: LocalizedString;
	card: LocalizedString;
	cardChips: string[];
	lead: LocalizedString;
	meta: {
		clientLabel: LocalizedString;
		client: LocalizedString;
		role: LocalizedString;
		status: LocalizedString;
		year: LocalizedString;
	};
	problem: LocalizedString;
	principleTitle: LocalizedString;
	principleBody: LocalizedString;
	goal: LocalizedString;
	criteria: LocalizedString[];
	decisionsNote: LocalizedString;
	decisions: Decision[];
	flow: LocalizedString[];
	flowNote: LocalizedString;
	stack: StackGroup[];
	pending: LocalizedString;
	links: { live?: string; repo?: string };
	hasArchitecture: boolean;
};

export const projects: Project[] = [
	{
		slug: 'assetcontrol',
		name: { es: 'AssetControl', en: 'AssetControl' },
		kicker: {
			es: '01 · Multi-tenant · Flask + React',
			en: '01 · Multi-tenant · Flask + React',
		},
		card: {
			es: 'Inventario de activos para clínicas: conteos por escaneo de código de barras, historial inmutable e informes de valor total. Multi-tenant desde el primer día.',
			en: 'Asset inventory for clinics: barcode-scan counts, an immutable history and total-value reports. Multi-tenant from day one.',
		},
		cardChips: ['React', 'TypeScript', 'Python', 'Flask', 'PostgreSQL'],
		lead: {
			es: 'Sistema para el inventario de activos de clínicas: conteos por escaneo de código de barras, historial inmutable e informes de valor total. Multi-tenant desde el primer día.',
			en: 'Asset inventory system for clinics: barcode-scan counts, an immutable history and total-value reports. Multi-tenant from day one.',
		},
		meta: {
			clientLabel: { es: 'Cliente', en: 'Client' },
			client: { es: 'Biotecnología Dental · Cartago', en: 'Biotecnología Dental · Cartago' },
			role: { es: 'Diseño y desarrollo · proyecto propio', en: 'Design and development · own project' },
			status: { es: 'Fundación técnica en curso', en: 'Technical foundation in progress' },
			year: { es: '2026', en: '2026' },
		},
		problem: {
			es: 'La clínica llevaba el inventario de equipos y mobiliario en un libro de Excel. Cada conteo obligaba a digitar todo a mano, no quedaba historial de quién verificó qué, y el valor total del inventario había que recalcularlo cada vez.',
			en: 'The clinic tracked equipment and furniture in an Excel workbook. Every count meant typing everything by hand, there was no record of who verified what, and the total inventory value had to be recalculated from scratch each time.',
		},
		principleTitle: {
			es: 'Principio de diseño: cero digitación innecesaria',
			en: 'Design principle: zero unnecessary typing',
		},
		principleBody: {
			es: 'Escanear en vez de escribir, elegir en vez de teclear, copiar un activo parecido en vez de empezar de cero.',
			en: 'Scan instead of write, pick instead of type, duplicate a similar asset instead of starting from scratch.',
		},
		goal: {
			es: 'Reemplazar el Excel por una aplicación web que permita contar desde cualquier teléfono, guarde el historial de cada conteo y genere el informe de valor total. Estos son los criterios de éxito del MVP:',
			en: 'Replace the spreadsheet with a web application that allows counting from any phone, stores the history of every count and produces the total-value report. These are the MVP success criteria:',
		},
		criteria: [
			{
				es: 'Completar el conteo de una sala desde el navegador del teléfono, escaneando stickers, con cada verificación guardada al confirmarla.',
				en: 'Complete a room count from a phone browser, scanning stickers, with every verification saved on confirmation.',
			},
			{
				es: 'El informe de valor total coincide con la suma de los activos de la sesión, con cero diferencias.',
				en: 'The total-value report matches the sum of the assets in the session, with zero differences.',
			},
			{
				es: 'Dar de alta un activo nuevo toma menos de 30 segundos y exige escribir, como máximo, el nombre y el precio.',
				en: 'Registering a new asset takes under 30 seconds and requires typing, at most, the name and the price.',
			},
		],
		decisionsNote: {
			es: 'Cada una está registrada como ADR en el repositorio, con su contexto y sus alternativas descartadas.',
			en: 'Each one is recorded as an ADR in the repository, with its context and the alternatives that were ruled out.',
		},
		decisions: [
			{
				n: '01',
				title: { es: 'Multi-tenancy desde el primer día', en: 'Multi-tenancy from day one' },
				body: {
					es: 'Cada fila de negocio lleva tenant_id, y el rol de aplicación de la base corre sin privilegios de superusuario. Añadir aislamiento después habría obligado a reescribir cada consulta.',
					en: 'Every business row carries a tenant_id, and the database application role runs without superuser privileges. Adding isolation later would have meant rewriting every query.',
				},
			},
			{
				n: '02',
				title: {
					es: 'Verificaciones inmutables con copia de precio y categoría',
					en: 'Immutable verifications with a price and category snapshot',
				},
				body: {
					es: 'Cada verificación guarda el precio y la categoría vigentes en ese momento. Así un informe cerrado no cambia aunque después se edite el activo.',
					en: 'Each verification stores the price and category in force at that moment, so a closed report never changes even if the asset is edited afterwards.',
				},
			},
			{
				n: '03',
				title: {
					es: 'Idempotencia con UUID generado en el cliente',
					en: 'Idempotency with a client-generated UUID',
				},
				body: {
					es: 'El cliente genera el identificador de cada verificación. Si la red falla y el contador reintenta, el conteo no se duplica.',
					en: 'The client generates the identifier for each verification. If the network fails and the counter retries, the count is not duplicated.',
				},
			},
			{
				n: '04',
				title: {
					es: 'Concurrencia optimista en la edición de activos',
					en: 'Optimistic concurrency on asset edits',
				},
				body: {
					es: 'row_version con If-Match: si dos administradores editan a la vez, el segundo recibe 412 y recarga en lugar de pisar el cambio del primero.',
					en: 'row_version with If-Match: if two administrators edit at once, the second gets a 412 and reloads instead of overwriting the first change.',
				},
			},
			{
				n: '05',
				title: { es: 'Borrado lógico en todo el sistema', en: 'Logical deletes throughout' },
				body: {
					es: 'Nada se elimina físicamente; se marca como dado de baja con su evento. El historial de un activo nunca pierde eslabones.',
					en: 'Nothing is physically removed; it is marked as written off with its event. An asset history never loses a link.',
				},
			},
			{
				n: '06',
				title: {
					es: 'Reglas de negocio en una capa de dominio aislada',
					en: 'Business rules in an isolated domain layer',
				},
				body: {
					es: 'Sin dependencia de Flask ni de la base. Los totales de un informe son lo más crítico del sistema y se prueban por separado.',
					en: 'No dependency on Flask or the database. Report totals are the most critical part of the system and are tested on their own.',
				},
			},
		],
		flow: [
			{ es: 'Escanear sticker', en: 'Scan sticker' },
			{ es: 'Confirmar ubicación y estado', en: 'Confirm location and condition' },
			{ es: 'Verificación con UUID', en: 'Verification with UUID' },
			{ es: 'Informe congelado al cierre', en: 'Report frozen at close' },
		],
		flowNote: {
			es: 'El contador escanea el código de barras pegado al activo. Si existe, se abre; si no, se ofrece crearlo con ese código copiando un activo parecido. Al cerrar la sesión, las cifras del informe se congelan y ya no se recalculan.',
			en: 'The counter scans the barcode stuck to the asset. If it exists, it opens; if not, the app offers to create it with that code by duplicating a similar asset. When the session closes, the report figures are frozen and never recalculated.',
		},
		stack: [
			{
				label: { es: 'Cliente web', en: 'Web client' },
				items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query'],
			},
			{
				label: { es: 'API y datos', en: 'API and data' },
				items: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Alembic'],
			},
			{
				label: { es: 'Infraestructura', en: 'Infrastructure' },
				items: ['Docker', 'Almacenamiento S3', 'GitHub Actions'],
			},
			{
				label: { es: 'Pruebas', en: 'Testing' },
				items: ['pytest', 'Vitest', 'Playwright'],
			},
		],
		pending: {
			es: '[AÑADIR cuando salga a producción: activos registrados, tiempo de un conteo antes y después, y capturas de la pantalla de conteo en móvil]',
			en: '[ADD once in production: assets registered, time per count before and after, and screenshots of the mobile counting screen]',
		},
		links: { repo: 'https://github.com/julianandrescaracas0623/AssetControl' },
		hasArchitecture: true,
	},
	{
		slug: 'gestion-documental',
		name: { es: 'Sistema de Gestión Documental', en: 'Document Management System' },
		kicker: { es: '02 · SaaS · Next.js + Supabase', en: '02 · SaaS · Next.js + Supabase' },
		card: {
			es: 'Plataforma web para digitalizar y gestionar documentos administrativos, con autenticación, roles, categorías y almacenamiento seguro.',
			en: 'SaaS platform to digitise and manage administrative documents, with authentication, roles, categories and secure storage.',
		},
		cardChips: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'shadcn/ui'],
		lead: {
			es: 'Plataforma web SaaS para digitalizar, organizar y gestionar documentos administrativos, con autenticación, roles, categorías y almacenamiento seguro.',
			en: 'SaaS web platform to digitise, organise and manage administrative documents, with authentication, roles, categories and secure storage.',
		},
		meta: {
			clientLabel: { es: 'Contexto', en: 'Context' },
			client: { es: '[AÑADIR: para quién se construyó]', en: '[ADD: who it was built for]' },
			role: { es: 'Diseño y desarrollo', en: 'Design and development' },
			status: { es: 'Desplegado y en uso', en: 'Deployed and in use' },
			year: { es: '[AÑADIR]', en: '[ADD]' },
		},
		problem: {
			es: '[AÑADIR: ¿cómo se gestionaban los documentos antes? Carpetas físicas, archivos dispersos en computadores distintos, sin control de quién podía ver qué, búsquedas que tomaban minutos u horas. Cuanto más concreto, mejor: un reclutador recuerda el problema, no la lista de tecnologías.]',
			en: '[ADD: how were documents managed before? Physical folders, files scattered across different computers, no control over who could see what, searches that took minutes or hours. The more concrete, the better: a recruiter remembers the problem, not the technology list.]',
		},
		principleTitle: { es: 'Principio de diseño', en: 'Design principle' },
		principleBody: {
			es: '[AÑADIR: la regla que guió las decisiones, como en AssetControl fue cero digitación innecesaria]',
			en: '[ADD: the rule that guided the decisions, the way zero unnecessary typing did for AssetControl]',
		},
		goal: {
			es: '[AÑADIR: qué debía lograr el sistema]. Criterios de éxito propuestos:',
			en: '[ADD: what the system had to achieve]. Proposed success criteria:',
		},
		criteria: [
			{
				es: '[AÑADIR: por ejemplo, encontrar cualquier documento en menos de X segundos]',
				en: '[ADD: for example, find any document in under X seconds]',
			},
			{
				es: '[AÑADIR: por ejemplo, que cada usuario vea solo los documentos de su rol]',
				en: '[ADD: for example, each user sees only the documents for their role]',
			},
			{
				es: '[AÑADIR: por ejemplo, subir y clasificar un documento sin salir de una pantalla]',
				en: '[ADD: for example, upload and classify a document without leaving one screen]',
			},
		],
		decisionsNote: {
			es: 'Completa cada una con el porqué, no solo con el qué: la decisión descartada vale tanto como la elegida.',
			en: 'Fill in the why, not just the what: the option you ruled out matters as much as the one you chose.',
		},
		decisions: [
			{
				n: '01',
				title: {
					es: 'Supabase en lugar de un backend propio',
					en: 'Supabase instead of a custom backend',
				},
				body: {
					es: '[AÑADIR: por qué. ¿Tiempo de desarrollo, autenticación lista, costo, que eras el único desarrollador? ¿Qué alternativa descartaste?]',
					en: '[ADD: why. Development time, authentication out of the box, cost, being the only developer? What alternative did you rule out?]',
				},
			},
			{
				n: '02',
				title: { es: 'Modelo de roles y permisos', en: 'Role and permission model' },
				body: {
					es: '[AÑADIR: qué roles existen, qué puede hacer cada uno y dónde se aplica la restricción, en el cliente o en el servidor]',
					en: '[ADD: which roles exist, what each can do, and where the restriction is enforced, client or server side]',
				},
			},
			{
				n: '03',
				title: { es: 'Organización por categorías', en: 'Category structure' },
				body: {
					es: '[AÑADIR: cómo se clasifican los documentos y por qué esa estructura y no carpetas libres]',
					en: '[ADD: how documents are classified and why that structure rather than free folders]',
				},
			},
			{
				n: '04',
				title: { es: 'Almacenamiento seguro de archivos', en: 'Secure file storage' },
				body: {
					es: '[AÑADIR: bucket privado, cómo se sirve un archivo al navegador, qué impide el acceso directo]',
					en: '[ADD: private bucket, how a file is served to the browser, what prevents direct access]',
				},
			},
		],
		flow: [
			{ es: 'Subir documento', en: 'Upload document' },
			{ es: 'Clasificar por categoría', en: 'Classify by category' },
			{ es: 'Control de acceso por rol', en: 'Role-based access control' },
			{ es: 'Consulta y descarga', en: 'Search and download' },
		],
		flowNote: {
			es: '[AÑADIR: describe el recorrido real de un documento, desde que alguien lo sube hasta que otra persona lo consulta]',
			en: '[ADD: describe the real journey of a document, from someone uploading it to another person retrieving it]',
		},
		stack: [
			{ label: { es: 'Cliente web', en: 'Web client' }, items: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui'] },
			{
				label: { es: 'Datos y autenticación', en: 'Data and authentication' },
				items: ['Supabase', 'PostgreSQL', 'Supabase Auth'],
			},
			{
				label: { es: 'Almacenamiento y despliegue', en: 'Storage and deployment' },
				items: ['Supabase Storage', 'Vercel'],
			},
		],
		pending: {
			es: '[AÑADIR: documentos gestionados, usuarios activos, tiempo de búsqueda antes y después, y capturas de la aplicación. Si es tu proyecto de grado, dilo: un trabajo evaluado y sustentado tiene respaldo académico.]',
			en: '[ADD: documents managed, active users, search time before and after, and screenshots of the application. If this is your degree project, say so: assessed and defended work carries academic backing.]',
		},
		links: {
			live: 'https://sistema-de-gestion-documental.vercel.app/login',
			repo: 'https://github.com/julianandrescaracas0623/sistema-de-gestion-documental',
		},
		hasArchitecture: false,
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
	const index = projects.findIndex((project) => project.slug === slug);
	return projects[(index + 1) % projects.length];
}

/* ------------------------------------------------------------------ */
/* Habilidades                                                         */
/* ------------------------------------------------------------------ */

export type SkillGroup = {
	id: string;
	label: LocalizedString;
	items: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		id: 'dev',
		label: { es: 'Desarrollo de software', en: 'Software development' },
		items: [
			'Python', 'Flask', 'React', 'TypeScript', 'JavaScript', 'Next.js', 'Vite',
			'PHP', 'HTML', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query',
			'pytest', 'Vitest', 'Playwright',
		],
	},
	{
		id: 'data',
		label: { es: 'Bases de datos', en: 'Databases' },
		items: ['SQL', 'Microsoft SQL Server', 'MySQL', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Supabase'],
	},
	{
		id: 'iam',
		label: { es: 'Identidad y acceso', en: 'Identity and access' },
		items: [
			'IAM', 'RBAC', 'Gestión de usuarios, roles y permisos',
			'Arquitectura multi-tenant', 'Seguridad de la información',
		],
	},
	{
		id: 'infra',
		label: { es: 'Infraestructura y despliegue', en: 'Infrastructure and deployment' },
		items: [
			'VPS', 'Coolify', 'Docker', 'Linux', 'Windows',
			'Redes LAN / WAN / VPN', 'GitHub Actions', 'CI/CD', 'Microsoft Azure', 'Microsoft 365',
		],
	},
	{
		id: 'ia',
		label: { es: 'IA aplicada al desarrollo', en: 'AI applied to development' },
		items: [
			'LLM', 'RAG (fundamentos)', 'Agentes de IA', 'Orquestación de agentes',
			'Claude Code', 'Cursor', 'Spec-Driven Development',
		],
	},
	{
		id: 'sys',
		label: { es: 'Sistemas y soporte', en: 'Systems and support' },
		items: [
			'Soporte técnico', 'Administración de sistemas', 'Troubleshooting',
			'Terminal Linux', 'Gestión de incidentes', 'Documentación técnica',
		],
	},
	{
		id: 'work',
		label: { es: 'Herramientas y transversales', en: 'Tools and transferable skills' },
		items: [
			'Git', 'GitHub', 'Jira', 'Notion', 'Trello', 'Google Workspace', 'Scrum', 'VS Code',
			'Trabajo en equipo', 'Comunicación', 'Adaptabilidad', 'Aprendizaje continuo',
			'Español nativo', 'Inglés A2',
		],
	},
];

/* ------------------------------------------------------------------ */
/* Formación y certificados                                            */
/* ------------------------------------------------------------------ */

export type Education = {
	dates: LocalizedString;
	title: LocalizedString;
	detail: LocalizedString;
};

export const institution = 'Corporación de Estudios Tecnológicos del Norte del Valle · COTECNOVA, Cartago';

export const education: Education[] = [
	{
		dates: { es: '2021 — 2026', en: '2021 — 2026' },
		title: { es: 'Ingeniero de Sistemas', en: 'Systems Engineer' },
		detail: {
			es: 'Administración de sistemas, seguridad de la información, arquitectura de software y desarrollo.',
			en: 'Systems administration, information security, software architecture and development.',
		},
	},
	{
		dates: { es: '2024', en: '2024' },
		title: {
			es: 'Tecnólogo en Gestión de Sistemas de la Información',
			en: 'Information Systems Management Technologist',
		},
		detail: {
			es: 'Gestión y administración de sistemas.',
			en: 'Systems management and administration.',
		},
	},
	{
		dates: { es: '2021 — 2023', en: '2021 — 2023' },
		title: {
			es: 'Técnico Profesional en Programación de Aplicaciones Informáticas',
			en: 'Professional Technician in Software Application Programming',
		},
		detail: { es: 'Finalizado.', en: 'Completed.' },
	},
];

export type Certificate = {
	title: LocalizedString;
	issuer: string;
	pdf: string;
};

export const certificates: Certificate[] = [
	{
		title: {
			es: 'Primer Hackathon de Inteligencia Artificial en Cartago',
			en: 'First Artificial Intelligence Hackathon in Cartago',
		},
		issuer: 'Tinku',
		pdf: '/certificate-files/tinku.pdf',
	},
	{
		title: {
			es: 'Scrum Fundamentals Certified (SFPC)',
			en: 'Scrum Fundamentals Certified (SFPC)',
		},
		issuer: 'CertiProf',
		pdf: '/certificate-files/Certificate.pdf',
	},
	{
		title: {
			es: 'Supabase: bases de datos, autenticación y backend',
			en: 'Supabase: databases, authentication and backend',
		},
		issuer: 'Platzi',
		pdf: '/certificate-files/diploma-supabase.pdf',
	},
	{
		title: {
			es: 'Fundamentos de Arquitectura de Software',
			en: 'Software Architecture Fundamentals',
		},
		issuer: 'Platzi',
		pdf: '/certificate-files/diploma-fundamentos-arquitectura-software.pdf',
	},
	{
		title: {
			es: 'Fundamentos de Ingeniería de Software',
			en: 'Software Engineering Fundamentals',
		},
		issuer: 'Platzi',
		pdf: '/certificate-files/diploma-ingenieria.pdf',
	},
	{
		title: {
			es: 'Introducción al Desarrollo Backend',
			en: 'Introduction to Backend Development',
		},
		issuer: 'Platzi',
		pdf: '/certificate-files/diploma-backend.pdf',
	},
	{
		title: {
			es: 'Protección Integral de la Información',
			en: 'Comprehensive Information Protection',
		},
		issuer: 'Cotecnova',
		pdf: '/certificate-files/proteccion_de_informacion.pdf',
	},
];
