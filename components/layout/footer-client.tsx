'use client';

import Link from 'next/link';
import { Linkedin, Github, Phone, Mail, MessageSquare } from 'lucide-react';

import { useLanguage } from '@/components/language-provider';
import { profile, siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function FooterClient() {
	const { t } = useLanguage();
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: <Phone className="h-5 w-5" />, href: siteConfig.links.phone, label: 'Phone' },
		{ icon: <Mail className="h-5 w-5" />, href: siteConfig.links.email, label: 'Email' },
		{ icon: <Linkedin className="h-5 w-5" />, href: siteConfig.links.linkedin, label: 'LinkedIn' },
		{ icon: <Github className="h-5 w-5" />, href: siteConfig.links.github, label: 'GitHub' },
		{ icon: <MessageSquare className="h-5 w-5" />, href: siteConfig.links.whatsapp, label: 'WhatsApp' },
	];

	const navColumns: {
		title: string;
		links: { title: string; href: string; download?: boolean }[];
	}[] = [
		{
			title: t.footer.about,
			links: [
				{ title: t.footer.aboutMe, href: '/about' },
				{ title: t.nav.education, href: '/education' },
				{ title: t.nav.skills, href: '/skills' },
			],
		},
		{
			title: t.footer.work,
			links: [
				{ title: t.nav.experience, href: '/experience' },
				{ title: t.nav.projects, href: '/projects' },
				{ title: t.nav.certificates, href: '/certificates' },
			],
		},
		{
			title: t.footer.connect,
			links: [
				{ title: t.nav.contact, href: '/contact' },
				{ title: t.footer.resume, href: profile.cv, download: true },
			],
		},
	];

	return (
		<footer className="bg-card py-12 border-t">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-1">
						<div className="flex flex-wrap gap-3">
							{socialLinks.map((link, index) => (
								<Button key={index} size="icon" variant="outline" asChild>
									<Link href={link.href} aria-label={link.label} target="_blank" rel="noreferrer">
										{link.icon}
									</Link>
								</Button>
							))}
						</div>
					</div>

					<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
						{navColumns.map((column, index) => (
							<div key={index}>
								<h3 className="font-semibold mb-3">{column.title}</h3>
								<ul className="space-y-2">
									{column.links.map((link, linkIndex) => (
										<li key={linkIndex}>
											<Link
												href={link.href}
												className="text-muted-foreground hover:text-primary text-sm transition-colors"
												{...(link.download ? { download: true } : {})}
											>
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col sm:flex-row items-center justify-between text-sm">
					<p className="text-muted-foreground">
						© {currentYear}. {t.footer.rights}
					</p>
				</div>
			</div>
		</footer>
	);
}
