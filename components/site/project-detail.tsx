'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';

import { useLanguage } from '@/components/language-provider';
import { Architecture } from '@/components/site/architecture';
import { ProjectHeader } from '@/components/site/header';
import {
	ArrowRight,
	Callout,
	Chips,
	Flow,
	Section,
	SectionHead,
} from '@/components/site/primitives';
import { getNextProject, getProject } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';

export function ProjectDetail({ slug }: { slug: string }) {
	const { locale, t } = useLanguage();
	const project = getProject(slug);

	if (!project) {
		notFound();
	}

	const next = getNextProject(slug);

	return (
		<>
			<ProjectHeader />

			<main>
				<section className="py-16">
					<div className="wrap-narrow">
						<p className="mono mb-[18px]">
							{t.project.crumb} / {localized(project.name, locale)}
						</p>
						<h1 className="display text-[clamp(2.25rem,7vw,3.75rem)] leading-[1.02]">
							{localized(project.name, locale)}
						</h1>
						<p className="mt-[22px] max-w-[720px] text-[20px]">
							{localized(project.lead, locale)}
						</p>

						<div className="mt-[30px] flex flex-wrap gap-3">
							{project.links.live ? (
								<a href={project.links.live} target="_blank" rel="noreferrer" className="btn btn-solid">
									{t.common.viewLive}
								</a>
							) : null}
							{project.links.repo ? (
								<a
									href={project.links.repo}
									target="_blank"
									rel="noreferrer"
									className={`btn ${project.links.live ? 'btn-ghost' : 'btn-solid'}`}
								>
									{t.common.viewCode}
								</a>
							) : null}
						</div>

						<dl className="mt-11 grid grid-cols-1 border-l border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
							{[
								{ k: localized(project.meta.clientLabel, locale), v: localized(project.meta.client, locale) },
								{ k: t.project.role, v: localized(project.meta.role, locale) },
								{ k: t.project.status, v: localized(project.meta.status, locale) },
								{ k: t.project.year, v: localized(project.meta.year, locale) },
							].map((field) => (
								<div key={field.k} className="border-b border-r border-ink px-[17px] py-[15px]">
									<dt className="mono mb-[5px]">{field.k}</dt>
									<dd className="m-0 text-[15px]">{field.v}</dd>
								</div>
							))}
						</dl>
					</div>
				</section>

				<Section narrow>
					<div className="grid gap-10 md:grid-cols-2">
						<div>
							<h2 className="display text-[28px]">{t.project.problem}</h2>
							<p className="mt-4">{localized(project.problem, locale)}</p>
							<div className="mt-[22px]">
								<Callout>
									<b>{localized(project.principleTitle, locale)}</b>
									<br />
									{localized(project.principleBody, locale)}
								</Callout>
							</div>
						</div>

						<div>
							<h2 className="display text-[28px]">{t.project.goal}</h2>
							<p className="mt-4">{localized(project.goal, locale)}</p>
							<ul className="mt-4 list-disc pl-[19px]">
								{project.criteria.map((item) => (
									<li key={item.es} className="mb-[7px]">
										{localized(item, locale)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</Section>

				<Section narrow>
					<h2 className="display text-[28px]">{t.project.decisions}</h2>
					<p className="mono mb-6 mt-[10px] text-[14px] normal-case tracking-normal">
						{localized(project.decisionsNote, locale)}
					</p>
					<ol className="m-0 list-none border-t border-ink p-0">
						{project.decisions.map((decision) => (
							<li
								key={decision.n}
								className="grid gap-[18px] border-b border-ink py-5 sm:grid-cols-[48px_1fr]"
							>
								<span className="mono text-accent-ink">{decision.n}</span>
								<div>
									<h3 className="display text-[19px]">{localized(decision.title, locale)}</h3>
									<p className="mt-[7px] text-[16px]">{localized(decision.body, locale)}</p>
								</div>
							</li>
						))}
					</ol>
				</Section>

				<Section narrow>
					<h2 className="display text-[28px]">{t.project.flow}</h2>
					<div className="mt-[22px]">
						<Flow steps={project.flow.map((step) => localized(step, locale))} />
					</div>
					<p className="mt-6 max-w-[760px]">{localized(project.flowNote, locale)}</p>

					{project.hasArchitecture ? (
						<div className="mt-9">
							<Architecture />
						</div>
					) : null}
				</Section>

				<Section narrow>
					<h2 className="display text-[28px]">{t.project.stack}</h2>
					<div className="mt-[22px] grid gap-5">
						{project.stack.map((group) => (
							<div key={group.label.es}>
								<p className="mono mb-[10px]">{localized(group.label, locale)}</p>
								<Chips items={group.items} />
							</div>
						))}
					</div>
					<div className="mt-7">
						<Callout>{localized(project.pending, locale)}</Callout>
					</div>
				</Section>

				<Section narrow>
					<div className="flex flex-wrap items-center justify-between gap-5">
						<div>
							<p className="mono mb-[7px]">{t.project.next}</p>
							<h2 className="display text-[26px]">{localized(next.name, locale)}</h2>
						</div>
						<Link href={`/projects/${next.slug}`} className="btn btn-solid">
							{t.common.viewProject}
							<ArrowRight />
						</Link>
					</div>
				</Section>

				<section className="bg-ink py-14 text-cream">
					<div className="wrap-narrow flex flex-wrap items-center justify-between gap-5">
						<p className="m-0 text-[19px]">{t.project.close}</p>
						<Link href="/#contacto" className="btn border-cream bg-cream text-ink hover:bg-accent">
							{t.nav.contact}
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
