'use client';

import { useLanguage } from '@/components/language-provider';
import { profile, siteConfig } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';
import { getAssetUrl } from '@/lib/public-url';

export function Contact() {
	const { locale, t } = useLanguage();

	const links = [
		{ href: siteConfig.links.email, label: profile.email, primary: true },
		{ href: siteConfig.links.whatsapp, label: `WhatsApp ${profile.phoneLabel}` },
		{ href: siteConfig.links.linkedin, label: 'LinkedIn' },
		{ href: siteConfig.links.github, label: 'GitHub' },
		{ href: getAssetUrl(profile.cv), label: t.common.cv, download: true },
	];

	return (
		<section id="contacto" className="bg-ink py-20 text-cream">
			<div className="wrap">
				<h2 className="display max-w-[840px] text-[clamp(2rem,6vw,3.125rem)] leading-[1.05]">
					{t.contact.title}
				</h2>
				<p className="mt-5 max-w-[620px] text-[#d6d2c8]">{t.contact.subtitle}</p>

				<div className="mt-8 flex flex-wrap gap-3">
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							download={link.download}
							target={link.href.startsWith('http') ? '_blank' : undefined}
							rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
							className={`btn ${
								link.primary
									? 'border-cream bg-cream text-ink hover:bg-accent'
									: 'btn-invert'
							}`}
						>
							{link.label}
						</a>
					))}
				</div>

				<p className="mono mt-14 text-[#a8a49a]">
					© {new Date().getFullYear()} {profile.fullName} · {localized(profile.location, locale)}
				</p>
			</div>
		</section>
	);
}
