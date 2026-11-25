'use client';

import { useState } from 'react';

import { useLanguage } from '@/components/language-provider';
import { Chips, Section, SectionHead } from '@/components/site/primitives';
import { skillGroups } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';

const ALL = 'all';

export function Skills() {
	const { locale, t } = useLanguage();
	const [filter, setFilter] = useState<string>(ALL);

	const filters = [
		{ id: ALL, label: t.skills.all },
		...skillGroups.map((group) => ({ id: group.id, label: localized(group.label, locale) })),
	];

	const visible = filter === ALL ? skillGroups : skillGroups.filter((g) => g.id === filter);

	return (
		<Section id="habilidades">
			<SectionHead title={t.skills.title} meta={t.skills.meta} />

			<div role="group" aria-label={t.skills.filter} className="mb-7 flex flex-wrap gap-2">
				{filters.map((item) => {
					const active = filter === item.id;
					return (
						<button
							key={item.id}
							type="button"
							onClick={() => setFilter(item.id)}
							aria-pressed={active}
							className={`min-h-[40px] border border-ink px-[14px] py-[9px] font-mono text-[12px] uppercase tracking-[0.06em] transition-colors ${
								active ? 'bg-ink text-cream' : 'bg-transparent text-ink hover:bg-accent'
							}`}
						>
							{item.label}
						</button>
					);
				})}
			</div>

			<div className="grid gap-[26px]">
				{visible.map((group) => (
					<div key={group.id}>
						<p className="mono mb-[11px]">{localized(group.label, locale)}</p>
						<Chips items={group.items} />
					</div>
				))}
			</div>
		</Section>
	);
}
