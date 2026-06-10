'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

import { useLanguage } from '@/components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { education } from '@/lib/constants';
import { localized, localizedList } from '@/lib/i18n/utils';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function EducationPage() {
	const { locale, t } = useLanguage();

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto"
				>
					<motion.h1
						variants={fadeIn('down', 0.2)}
						className="text-4xl font-bold mb-6"
					>
						{t.education.title}
					</motion.h1>
					<motion.p
						variants={fadeIn('down', 0.3)}
						className="text-lg text-muted-foreground mb-12"
					>
						{t.education.description}
					</motion.p>

					<div className="space-y-8">
						{education.map((edu, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
								className="relative"
							>
								<Card className="card-gradient">
									<CardContent className="p-6">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
											<div>
												<h2 className="text-2xl font-semibold">
													{localized(edu.degree, locale)}
												</h2>
												<p className="text-primary">
													{localized(edu.field, locale)}
												</p>
											</div>
										</div>

										<div className="space-y-3">
											<div className="flex items-center text-muted-foreground">
												<MapPin className="h-4 w-4 mr-2" />
												{edu.institution}, {localized(edu.location, locale)}
											</div>
											<div className="flex items-center text-muted-foreground">
												<Calendar className="h-4 w-4 mr-2" />
												{localized(edu.startDate, locale)} - {localized(edu.endDate, locale)}
											</div>
										</div>

										<div className="mt-6">
											<h3 className="text-lg font-semibold mb-3">{t.education.achievements}</h3>
											<ul className="space-y-2">
												{localizedList(edu.achievements, locale).map((achievement, i) => (
													<li key={i} className="flex items-start">
														<Award className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
														<span className="text-muted-foreground">{achievement}</span>
													</li>
												))}
											</ul>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
