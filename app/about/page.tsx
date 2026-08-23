'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { profile } from '@/lib/constants';
import { getAssetUrl } from '@/lib/public-url';
import { localized } from '@/lib/i18n/utils';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	const { locale, t } = useLanguage();
	const journeyParagraphs = localized(profile.journey, locale).split('\n\n');

	return (
		<div className="py-12 md:py-16 xl:py-20">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">{t.about.title}</h1>
						<p className="text-lg text-muted-foreground">
							{localized(profile.bio, locale)}
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">{t.about.myJourney}</h2>
							{journeyParagraphs.map((paragraph, index) => (
								<p key={index} className="text-muted-foreground">
									{paragraph}
								</p>
							))}
						</div>
						<Button className="mt-6" asChild>
							<a href={getAssetUrl(profile.cv)} download>
								{t.common.downloadCv} <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[320px] sm:h-[420px] lg:h-[500px]">
						<Image
							src={getAssetUrl(profile.image)}
							alt={profile.fullName}
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">{t.about.education}</h3>
								<p className="text-muted-foreground">
									{t.about.pageEducation}
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">{t.about.experience}</h3>
								<p className="text-muted-foreground">
									{t.about.pageExperience}
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">{t.about.skills}</h3>
								<p className="text-muted-foreground">
									{t.about.pageSkills}
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
