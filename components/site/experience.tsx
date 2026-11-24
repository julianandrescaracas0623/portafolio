'use client';

import { useLanguage } from '@/components/language-provider';
import { Chips, Section, SectionHead } from '@/components/site/primitives';
import { experiences } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';

export function Experience() {
	const { locale, t } = useLanguage();

	return (
		<Section id="experiencia">
			<SectionHead title={t.experience.title} meta={t.experience.meta} />

			<ol className="timeline list-none p-0">
				{experiences.map((item, index) => {
					const sector = localized(item.sector, locale);
					return (
						<li key={localized(item.org, 'es')} className="timeline-item">
							<span
								aria-hidden="true"
								className={`timeline-dot ${index === 0 ? 'timeline-dot-current' : ''}`}
							/>

							<div className="flex flex-wrap items-baseline gap-3">
								<span className="mono text-ink">{localized(item.dates, locale)}</span>
								{sector ? (
									<span className="mono border border-accent-ink px-2 py-[3px] text-accent-ink">
										{sector}
									</span>
								) : null}
							</div>

							<h3 className="display mt-[9px] text-[22px]">{localized(item.role, locale)}</h3>
							<p className="mono mb-[13px] mt-[7px]">{localized(item.org, locale)}</p>

							<ul className="m-0 list-disc pl-[19px]">
								{item.bullets.map((bullet) => (
									<li key={bullet.es} className="mb-[5px]">
										{localized(bullet, locale)}
									</li>
								))}
							</ul>

							<div className="mt-[14px]">
								<Chips items={item.tags} />
							</div>
						</li>
					);
				})}
			</ol>
		</Section>
	);
}
