'use client';

import Link from 'next/link';
import { useState } from 'react';

import { useLanguage } from '@/components/language-provider';
import { LanguageToggle } from '@/components/site/language-toggle';
import { ArrowLeft } from '@/components/site/primitives';
import { profile, siteConfig } from '@/lib/constants';
import { getAssetUrl } from '@/lib/public-url';

function MenuIcon({ open }: { open: boolean }) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" className="h-5 w-5">
			{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
		</svg>
	);
}

/** Cabecera de la portada: logotipo, anclas de sección, idioma y CV. */
export function Header() {
	const { t } = useLanguage();
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-ink bg-cream">
			<div className="wrap flex h-[66px] items-center justify-between gap-3">
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
						className="btn btn-solid hidden min-h-[36px] px-[13px] py-2 text-[14px] md:inline-flex"
					>
						{t.common.cv}
					</a>

					<button
						type="button"
						onClick={() => setOpen((value) => !value)}
						aria-expanded={open}
						aria-controls="menu-movil"
						aria-label={t.nav.primary}
						className="flex min-h-[36px] min-w-[36px] items-center justify-center border border-ink text-ink transition-colors hover:bg-accent lg:hidden"
					>
						<MenuIcon open={open} />
					</button>
				</div>
			</div>

			{open ? (
				<nav id="menu-movil" aria-label={t.nav.primary} className="border-t border-ink lg:hidden">
					<div className="wrap flex flex-col py-2">
						{siteConfig.nav.map((item) => (
							<a
								key={item.key}
								href={item.href}
								onClick={() => setOpen(false)}
								className="mono flex min-h-[44px] items-center border-b border-ink/15 text-ink"
							>
								{t.nav[item.key]}
							</a>
						))}
						<a
							href={getAssetUrl(profile.cv)}
							download
							onClick={() => setOpen(false)}
							className="mono flex min-h-[44px] items-center text-ink md:hidden"
						>
							{t.common.cv}
						</a>
					</div>
				</nav>
			) : null}
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
