'use client';

import Link from 'next/link';

import { useLanguage } from '@/components/language-provider';
import { ArrowRight, Chips, Section, SectionHead } from '@/components/site/primitives';
import { projects } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';

/** Tarjetas compactas: el detalle vive en /projects/<slug>. */
export function Projects() {
	const { locale, t } = useLanguage();

	return (
		<Section id="proyectos">
			<SectionHead title={t.projects.title} meta={t.projects.meta} />

			<div className="grid gap-[26px] md:grid-cols-2">
				{projects.map((project) => (
					<article key={project.slug} className="flex flex-col border border-ink p-[30px]">
						<p className="mono">{localized(project.kicker, locale)}</p>
						<h3 className="display mt-[11px] text-[28px]">{localized(project.name, locale)}</h3>
						<p className="mt-[13px]">{localized(project.card, locale)}</p>

						<div className="mt-5">
							<Chips items={project.cardChips} />
						</div>

						<Link
							href={`/projects/${project.slug}`}
							className="btn btn-solid mt-6 self-start"
						>
							{t.common.viewProject}
							<ArrowRight />
						</Link>
					</article>
				))}
			</div>
		</Section>
	);
}
