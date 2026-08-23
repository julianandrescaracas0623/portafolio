'use client';

import { useEffect, useRef, useState } from 'react';
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
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const MORE_HOVER_CLOSE_MS = 150;

/** Match routes with or without trailing slash (next.config trailingSlash). */
function pathsMatch(pathname: string, href: string) {
	const normalize = (path: string) => {
		if (!path || path === '/') return '/';
		return path.replace(/\/+$/, '') || '/';
	};
	return normalize(pathname) === normalize(href);
}

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
	const [mobileOpen, setMobileOpen] = useState(false);
	const [moreOpen, setMoreOpen] = useState(false);
	const moreCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
	const moreTriggerRef = useRef<HTMLButtonElement>(null);
	const pathname = usePathname();
	const { t } = useLanguage();

	const primaryNav = siteConfig.mainNav.filter((item) =>
		(siteConfig.primaryNavKeys as readonly string[]).includes(item.key)
	);
	const moreNav = siteConfig.mainNav.filter((item) =>
		(siteConfig.moreNavKeys as readonly string[]).includes(item.key)
	);
	const moreActive = moreNav.some((item) => pathsMatch(pathname, item.href));
	const contactActive = pathsMatch(pathname, '/contact');

	const moreTriggerClass = moreActive
		? 'text-primary active'
		: moreOpen
			? 'text-primary'
			: 'text-muted-foreground';

	const clearMoreCloseTimer = () => {
		if (moreCloseTimer.current) {
			clearTimeout(moreCloseTimer.current);
			moreCloseTimer.current = null;
		}
	};

	const openMore = () => {
		clearMoreCloseTimer();
		setMoreOpen(true);
	};

	const scheduleCloseMore = () => {
		clearMoreCloseTimer();
		moreCloseTimer.current = setTimeout(() => {
			setMoreOpen(false);
			moreCloseTimer.current = null;
		}, MORE_HOVER_CLOSE_MS);
	};

	useEffect(() => {
		setMobileOpen(false);
		setMoreOpen(false);
		clearMoreCloseTimer();
		moreTriggerRef.current?.blur();
	}, [pathname]);

	useEffect(() => {
		return () => clearMoreCloseTimer();
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="container flex h-16 items-center justify-between py-4">
				<div className="flex items-center gap-6 md:gap-8">
					<Link href="/" className="flex items-center space-x-2">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="font-display font-bold text-2xl text-gradient"
						>
							{profile.initials}
						</motion.div>
					</Link>
					<nav className="hidden md:flex items-center gap-5 lg:gap-6">
						{primaryNav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`nav-link text-sm font-medium transition-colors hover:text-primary ${
									pathsMatch(pathname, item.href)
										? 'text-primary active'
										: 'text-muted-foreground'
								}`}
							>
								{t.nav[item.key]}
							</Link>
						))}
						<DropdownMenu open={moreOpen} onOpenChange={setMoreOpen} modal={false}>
							<DropdownMenuTrigger asChild>
								<button
									ref={moreTriggerRef}
									type="button"
									onMouseEnter={openMore}
									onMouseLeave={scheduleCloseMore}
									className={`nav-link relative inline-flex items-center gap-1 pb-0.5 text-sm font-medium transition-colors outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 hover:text-primary ${moreTriggerClass}`}
								>
									{t.nav.more}
									<ChevronDown className="h-3.5 w-3.5" />
								</button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								align="start"
								onMouseEnter={openMore}
								onMouseLeave={scheduleCloseMore}
							>
								{moreNav.map((item) => (
									<DropdownMenuItem key={item.href} asChild>
										<Link
											href={item.href}
											onClick={() => moreTriggerRef.current?.blur()}
											className={
												pathsMatch(pathname, item.href) ? 'text-primary' : undefined
											}
										>
											{t.nav[item.key]}
										</Link>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</nav>
				</div>

				<div className="md:hidden">
					<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" aria-label="Abrir menú">
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="flex w-[min(100vw-2rem,20rem)] flex-col p-6"
						>
							<SheetTitle className="sr-only">{t.nav.menu}</SheetTitle>
							<div className="flex items-center justify-between mb-8">
								<Link
									href="/"
									className="flex items-center space-x-2"
									onClick={() => setMobileOpen(false)}
								>
									<span className="font-display font-bold text-2xl text-gradient">
										{profile.initials}
									</span>
								</Link>
								<LanguageToggle />
							</div>
							<nav className="flex flex-col gap-1">
								{siteConfig.mainNav.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setMobileOpen(false)}
										className={`rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-muted hover:text-primary ${
											pathsMatch(pathname, item.href)
												? 'text-primary bg-muted/50'
												: 'text-muted-foreground'
										}`}
									>
										{t.nav[item.key]}
									</Link>
								))}
							</nav>
							<div className="mt-6 flex flex-col gap-3">
								<Link href="/contact" onClick={() => setMobileOpen(false)}>
									<Button className="w-full">{t.common.contactMe}</Button>
								</Link>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="outline" className="w-full justify-between">
											{t.common.socialLinks}
											<ChevronDown className="h-4 w-4 ml-2" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										align="end"
										className="w-[var(--radix-dropdown-menu-trigger-width)]"
									>
										<DropdownMenuItem asChild>
											<Link
												href={siteConfig.links.github}
												target="_blank"
												rel="noreferrer"
											>
												GitHub
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link
												href={siteConfig.links.linkedin}
												target="_blank"
												rel="noreferrer"
											>
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
						<Button
							className={
								contactActive
									? 'border-b-2 border-primary rounded-b-none'
									: undefined
							}
						>
							{t.common.contactMe}
						</Button>
					</Link>
				</div>
			</div>
		</motion.header>
	);
}
