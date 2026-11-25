'use client';

import type { ReactNode } from 'react';

export function ArrowRight({ className = 'h-[15px] w-[15px]' }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" className={className}>
			<path d="M5 12h14M13 6l6 6-6 6" />
		</svg>
	);
}

export function ArrowLeft({ className = 'h-[15px] w-[15px]' }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" className={className}>
			<path d="M19 12H5M11 18l-6-6 6-6" />
		</svg>
	);
}

export function Chevron() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" className="h-4 w-4 text-ink-mute">
			<path d="M9 6l6 6-6 6" />
		</svg>
	);
}

/** Encabezado de sección: título a la izquierda, contenido a la derecha. */
export function SectionHead({ title, meta }: { title: string; meta?: string }) {
	return (
		<div className="mb-7 flex flex-wrap items-baseline justify-between gap-4">
			<h2 className="display text-[clamp(1.75rem,4vw,2.125rem)]">{title}</h2>
			{meta ? <span className="mono">{meta}</span> : null}
		</div>
	);
}

export function Section({
	id,
	children,
	className = '',
	narrow = false,
}: {
	id?: string;
	children: ReactNode;
	className?: string;
	narrow?: boolean;
}) {
	return (
		<section id={id} className={`border-t border-ink py-14 sm:py-16 ${className}`}>
			<div className={narrow ? 'wrap-narrow' : 'wrap'}>{children}</div>
		</section>
	);
}

/** Dos columnas: etiqueta fija a la izquierda, contenido a la derecha. */
export function LabelledRow({ title, children }: { title: string; children: ReactNode }) {
	return (
		<div className="grid gap-7 md:grid-cols-[230px_1fr] md:gap-12">
			<h2 className="display text-[clamp(1.75rem,4vw,2.125rem)]">{title}</h2>
			<div className="min-w-0">{children}</div>
		</div>
	);
}

export function Chips({ items }: { items: string[] }) {
	return (
		<div className="flex flex-wrap gap-[7px]">
			{items.map((item) => (
				<span key={item} className="tag">
					{item}
				</span>
			))}
		</div>
	);
}

export function Flow({ steps }: { steps: string[] }) {
	return (
		<div className="flex flex-wrap items-center gap-[10px]">
			{steps.map((step, index) => (
				<span key={step} className="flex items-center gap-[10px]">
					{index > 0 ? <Chevron /> : null}
					<span className="flow-step">{step}</span>
				</span>
			))}
		</div>
	);
}

export function Callout({ children }: { children: ReactNode }) {
	return (
		<div className="border-l-[3px] border-accent bg-cream-deep px-[17px] py-[15px] text-[15px]">
			{children}
		</div>
	);
}
