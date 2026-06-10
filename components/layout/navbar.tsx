'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, ChevronDown } from 'lucide-react';

import { useLanguage } from '@/components/language-provider';
import { profile, siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function LanguageToggle() {
	const { locale, setLocale } = useLanguage();

	return (
		<div className="flex items-center gap-1 rounded-md border p-1">
			<Button
				size="sm"
				variant={locale === 'es' ? 'default' : 'ghost'}
				className="h-7 px-2 text-xs"
				onClick={() => setLocale('es')}
			>
				ES
			</Button>
			<Button
				size="sm"
				variant={locale === 'en' ? 'default' : 'ghost'}
				className="h-7 px-2 text-xs"
				onClick={() => setLocale('en')}
			>
				EN
			</Button>
		</div>
	);
}

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();
	const { t } = useLanguage();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
				}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="container flex h-16 items-center justify-between py-4">
				<div className="flex items-center gap-6 md:gap-10">
					<Link href="/" className="flex items-center space-x-2">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="font-bold text-2xl text-gradient"
						>
							{profile.initials}
						</motion.div>
					</Link>
					<nav className="hidden md:flex gap-6">
						{siteConfig.mainNav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`nav-link text-sm font-medium transition-colors hover:text-primary ${pathname === item.href ? 'text-primary active' : 'text-muted-foreground'
									}`}
							>
								{t.nav[item.key]}
							</Link>
						))}
					</nav>
				</div>

				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent className="flex flex-col p-6">
							<div className="flex items-center justify-between mb-8">
								<Link href="/" className="flex items-center space-x-2">
									<span className="font-bold text-2xl text-gradient">
										{profile.initials}
									</span>
								</Link>
								<LanguageToggle />
							</div>
							<nav className="flex flex-col gap-4">
								{siteConfig.mainNav.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className={`text-base font-medium transition-colors hover:text-primary ${pathname === item.href ? 'text-primary' : 'text-muted-foreground'
											}`}
									>
										{t.nav[item.key]}
									</Link>
								))}
							</nav>
							<div className="mt-auto pt-4">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="outline" className="w-full justify-between">
											{t.common.socialLinks}
											<ChevronDown className="h-4 w-4 ml-2" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem asChild>
											<Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
												GitHub
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
												LinkedIn
											</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</SheetContent>
					</Sheet>
				</div>

				<div className="hidden md:flex items-center gap-4">
					<LanguageToggle />
					<Link href="/contact">
						<Button>{t.common.contactMe}</Button>
					</Link>
				</div>
			</div>
		</motion.header>
	);
}
