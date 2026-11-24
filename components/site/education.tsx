'use client';

import { useLanguage } from '@/components/language-provider';
import { LabelledRow, Section } from '@/components/site/primitives';
import { certificates, education, institution } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';
import { getAssetUrl } from '@/lib/public-url';

export function Education() {
	const { locale, t } = useLanguage();

	return (
		<Section id="formacion">
			<LabelledRow title={t.education.title}>
				<p className="mono mb-[18px]">{institution}</p>
				<ol className="m-0 list-none border-t border-ink p-0">
					{education.map((item) => (
						<li
							key={item.title.es}
							className="grid gap-5 border-b border-ink py-[21px] sm:grid-cols-[150px_1fr]"
						>
							<span className="mono">{localized(item.dates, locale)}</span>
							<div>
								<h3 className="display text-[20px]">{localized(item.title, locale)}</h3>
								<p className="mt-[6px] text-[16px]">{localized(item.detail, locale)}</p>
							</div>
						</li>
					))}
				</ol>
			</LabelledRow>
		</Section>
	);
}

export function Certificates() {
	const { locale, t } = useLanguage();

	return (
		<Section id="certificados">
			<LabelledRow title={t.certificates.title}>
				<ul className="m-0 list-none border-t border-ink p-0">
					{certificates.map((item) => (
						<li
							key={item.pdf}
							className="flex flex-wrap items-center justify-between gap-[18px] border-b border-ink py-4"
						>
							<div>
								<h3 className="display text-[17px]">{localized(item.title, locale)}</h3>
								<p className="mono mt-[5px]">{item.issuer}</p>
							</div>
							<a
								href={getAssetUrl(item.pdf)}
								target="_blank"
								rel="noreferrer"
								className="mono text-accent-ink underline-offset-4 hover:underline"
							>
								{t.common.viewPdf}
							</a>
						</li>
					))}
				</ul>
			</LabelledRow>
		</Section>
	);
}
