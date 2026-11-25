'use client';

import { useLanguage } from '@/components/language-provider';
import type { Locale } from '@/lib/i18n/types';

export function LanguageToggle() {
	const { locale, setLocale, t } = useLanguage();

	const option = (value: Locale, label: string) => {
		const active = locale === value;
		return (
			<button
				key={value}
				type="button"
				onClick={() => setLocale(value)}
				aria-pressed={active}
				className={`min-h-[34px] px-[11px] py-[7px] font-mono text-[12px] tracking-[0.06em] transition-colors ${
					active ? 'bg-ink text-cream' : 'bg-transparent text-ink hover:bg-accent'
				}`}
			>
				{label}
			</button>
		);
	};

	return (
		<div role="group" aria-label={t.nav.language} className="flex border border-ink">
			{option('es', 'ES')}
			{option('en', 'EN')}
		</div>
	);
}
