'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { education, profile } from '@/lib/constants';
import { getAssetUrl } from '@/lib/public-url';
import { localized } from '@/lib/i18n/utils';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	const { locale, t } = useLanguage();

	return (
		<section className="py-12 md:py-16 xl:py-20">
			<div className="container px-4">
				<SectionHeader
					title={t.about.title}
					description={t.about.previewDescription}
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="relative h-[280px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden"
					>
						<Image
							src={getAssetUrl(profile.image)}
							alt={profile.fullName}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex flex-col justify-center"
					>
						<h3 className="text-2xl font-bold mb-4">{t.about.role}</h3>
						<p className="text-muted-foreground mb-6">
							{localized(profile.bio, locale)}
						</p>

						<div className="grid grid-cols-2 gap-4 mb-6">
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">{t.about.education}</h4>
									<p className="text-sm lg:text-base text-muted-foreground">
										{localized(education[0].degree, locale)}
									</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">{t.about.experience}</h4>
									<p className="text-sm lg:text-base text-muted-foreground">
										{profile.stats.experienceYears} {t.about.yearsExperience}
									</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">{t.about.projects}</h4>
									<p className="text-sm lg:text-base text-muted-foreground">
										{profile.stats.projectsCount}
									</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">{t.about.certifications}</h4>
									<p className="text-sm lg:text-base text-muted-foreground">
										{profile.stats.certificationsCount}
									</p>
								</CardContent>
							</Card>
						</div>

						<Button asChild>
							<Link href="/about">
								{t.common.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
