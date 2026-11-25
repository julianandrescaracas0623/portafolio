'use client';

import Link from 'next/link';

import { useLanguage } from '@/components/language-provider';
import { LanguageToggle } from '@/components/site/language-toggle';
import { ArrowLeft } from '@/components/site/primitives';
import { profile, siteConfig } from '@/lib/constants';
import { getAssetUrl } from '@/lib/public-url';

/** Cabecera de la portada: logotipo, anclas de sección, idioma y CV. */
export function Header() {
	const { t } = useLanguage();

	return (
		<header className="sticky top-0 z-50 border-b border-ink bg-cream">
			<div className="wrap flex h-[66px] items-center justify-between gap-4">
				<Link href="#inicio" className="flex items-center gap-[11px] no-underline">
					<span className="bg-ink px-[7px] py-1 font-display text-[18px] font-bold text-cream">
						{profile.initials}
					</span>
					<span className="mono hidden text-ink sm:inline">Julián A. Caracas</span>
				</Link>

				<nav aria-label={t.nav.primary} className="hidden gap-6 lg:flex">
					{siteConfig.nav.map((item) => (
						<a key={item.key} href={item.href} className="mono hover:text-ink">
							{t.nav[item.key]}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-[10px]">
					<LanguageToggle />
					<a
						href={getAssetUrl(profile.cv)}
						download
						className="btn btn-solid min-h-[36px] px-[13px] py-2 text-[14px]"
					>
						{t.common.cv}
					</a>
				</div>
			</div>
		</header>
	);
}

/** Cabecera de las páginas de proyecto: volver e idioma. */
export function ProjectHeader() {
	const { t } = useLanguage();

	return (
		<header className="sticky top-0 z-50 border-b border-ink bg-cream">
			<div className="wrap-narrow flex h-[66px] items-center justify-between gap-4">
				<Link href="/" className="mono flex items-center gap-[9px] text-ink">
					<ArrowLeft />
					{t.common.back}
				</Link>
				<LanguageToggle />
			</div>
		</header>
	);
}
