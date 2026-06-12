'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { profile } from '@/lib/constants';
import { getAssetUrl } from '@/lib/public-url';
import { localized } from '@/lib/i18n/utils';
import { fadeIn, staggerContainer } from '@/lib/motion';

export function HeroSection() {
	const [vantaEffect, setVantaEffect] = useState<any>(null);
	const vantaRef = useRef<HTMLDivElement>(null);
	const { locale, t } = useLanguage();
	const roles = profile.roles[locale];

	useEffect(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const isMobile = window.matchMedia('(max-width: 767px)').matches;

		if (vantaEffect || !vantaRef.current || prefersReducedMotion || isMobile) {
			return;
		}

		setVantaEffect(
			NET({
				el: vantaRef.current,
				THREE: THREE,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 0.8,
				scaleMobile: 0.8,
				color: 0xff3f81,
				backgroundColor: 0x23153c,
				points: 10.0,
				maxDistance: 15.0,
				spacing: 20.0,
				showDots: false,
			})
		);

		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<section className="relative overflow-hidden">
			<div
				ref={vantaRef}
				className="absolute inset-0 z-0 hidden opacity-60 md:block"
				aria-hidden="true"
			/>
			<div className="absolute inset-0 z-0 bg-gradient-to-br from-[#23153c] via-background to-background md:hidden" aria-hidden="true" />

			<div className="container relative z-10 px-4 py-16 sm:py-20 md:py-32 flex flex-col items-center justify-center min-h-[75vh] sm:min-h-[85vh] md:min-h-[90vh]">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto text-center"
				>
					<motion.h1
						variants={fadeIn('up', 0.2)}
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient"
					>
						{profile.fullName}
					</motion.h1>

					<motion.div
						variants={fadeIn('up', 0.3)}
						className="mt-6 flex flex-wrap justify-center items-center gap-2 px-2"
					>
						{roles.map((role, index) => (
							<span key={role} className="flex items-center gap-2">
								{index > 0 && (
									<span className="hidden sm:inline text-muted-foreground/60 text-lg">|</span>
								)}
								<span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm font-medium text-primary">
									{role}
								</span>
							</span>
						))}
					</motion.div>

					<motion.p
						variants={fadeIn('up', 0.5)}
						className="mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-2"
					>
						{localized(profile.tagline, locale)}
					</motion.p>

					<motion.div
						variants={fadeIn('up', 0.7)}
						className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-none mx-auto px-4 sm:px-0"
					>
						<Button size="lg" asChild className="w-full sm:w-auto">
							<Link href="/projects">
								{t.common.viewProjects} <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
							<a href={getAssetUrl(profile.cv)} download>
								{t.common.downloadCv} <FileDown className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
		</section>
	);
}
