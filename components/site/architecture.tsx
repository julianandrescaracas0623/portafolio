'use client';

import { useLanguage } from '@/components/language-provider';
import type { Locale } from '@/lib/i18n/types';

type Box = {
	left: number;
	top: number;
	width: number;
	height: number;
	title: string;
	detail: Record<Locale, string>;
	accent?: boolean;
};

const BOXES: Box[] = [
	{
		left: 64, top: 168, width: 340, height: 96,
		title: 'Aplicación web (React + TypeScript)',
		detail: { es: 'Inicio, conteo, catálogo e informes', en: 'Home, counting, catalogue and reports' },
	},
	{
		left: 452, top: 168, width: 340, height: 96,
		title: 'Escáner de código de barras',
		detail: { es: 'Cámara del teléfono', en: 'Phone camera' },
	},
	{
		left: 268, top: 376, width: 320, height: 96,
		title: 'API Flask',
		detail: {
			es: 'Reglas de negocio y única fuente de verdad',
			en: 'Business rules and single source of truth',
		},
		accent: true,
	},
	{
		left: 64, top: 568, width: 300, height: 112,
		title: 'PostgreSQL',
		detail: {
			es: 'Entidades e historial, con tenant_id en cada fila',
			en: 'Entities and history, with a tenant_id on every row',
		},
	},
	{
		left: 492, top: 568, width: 300, height: 112,
		title: 'Almacenamiento de fotos',
		detail: {
			es: 'Bucket privado, JPEG sin metadatos',
			en: 'Private bucket, JPEG without metadata',
		},
	},
];

/** Diagrama de arquitectura de AssetControl, a escala fija y con desplazamiento lateral. */
export function Architecture() {
	const { locale } = useLanguage();

	const caption =
		locale === 'en'
			? 'Three pieces: a web client, an API and a database. No queues, no sync services and no local database on the client.'
			: 'Tres piezas: un cliente web, una API y una base de datos. Sin colas, sin servicios de sincronización y sin base local en el cliente.';

	const alt =
		locale === 'en'
			? 'The browser uses a React application that talks to a Flask API over HTTPS, which stores entities in PostgreSQL and photos in object storage.'
			: 'El navegador usa una aplicación React que habla con una API Flask por HTTPS, que guarda entidades en PostgreSQL y fotos en almacenamiento de objetos.';

	return (
		<figure className="m-0">
			<div className="overflow-x-auto border border-ink bg-cream-deep">
				<div className="relative h-[744px] w-[856px]" role="img" aria-label={alt}>
					<svg
						aria-hidden="true"
						width={856}
						height={744}
						viewBox="0 0 856 744"
						className="absolute left-0 top-0"
					>
						<g stroke="var(--ink)" strokeWidth={1.5} fill="none" strokeLinecap="round">
							{/* cliente web ↔ escáner */}
							<path d="M404 216 L452 216" />
							{/* aplicación → API, en tres tramos */}
							<path d="M234 264 L234 320 L428 320 L428 370" />
							{/* API → almacenamiento, uno a muchos */}
							<path d="M428 472 L428 520" />
							<path d="M214 520 L642 520" />
							<path d="M214 520 L214 562" />
							<path d="M642 520 L642 562" />
						</g>
						<g fill="var(--ink)">
							<path d="M424 376 L432 376 L428 370 Z" />
							<path d="M210 568 L218 568 L214 562 Z" />
							<path d="M638 568 L646 568 L642 562 Z" />
						</g>
					</svg>

					{BOXES.map((box) => (
						<div
							key={box.title}
							className={`absolute box-border flex items-center justify-center border border-ink p-[14px] text-center text-[16px] leading-[22px] ${
								box.accent ? 'bg-accent' : 'bg-cream'
							}`}
							style={{ left: box.left, top: box.top, width: box.width, height: box.height }}
						>
							<span>
								<b>{box.title}</b>
								<br />
								{box.detail[locale]}
							</span>
						</div>
					))}

					<div className="absolute left-[279px] top-[292px] w-[104px] text-center font-mono text-[13px] leading-4 text-ink-mute">
						HTTPS + JSON
					</div>
				</div>
			</div>
			<figcaption className="mono mt-3 text-[13px] normal-case tracking-normal">{caption}</figcaption>
		</figure>
	);
}
