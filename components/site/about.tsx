'use client';

import { useLanguage } from '@/components/language-provider';
import { LabelledRow, Section } from '@/components/site/primitives';
import { profile } from '@/lib/constants';

export function About() {
	const { locale, t } = useLanguage();
	const paragraphs = profile.about[locale];

	return (
		<Section id="sobre-mi">
			<LabelledRow title={t.about.title}>
				<div className="max-w-[700px]">
					{paragraphs.map((text, index) => (
						<p key={text.slice(0, 24)} className={index === 0 ? 'text-[19px]' : 'mt-4'}>
							{text}
						</p>
					))}
				</div>
			</LabelledRow>
		</Section>
	);
}
