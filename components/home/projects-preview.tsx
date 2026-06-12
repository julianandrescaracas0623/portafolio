'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { projects } from '@/lib/constants';
import { getAssetUrl } from '@/lib/public-url';
import { localized } from '@/lib/i18n/utils';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export function ProjectsPreview() {
	const { locale, t } = useLanguage();
	const previewProjects = projects.slice(0, 3);

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title={t.projects.featuredTitle}
					description={t.projects.featuredDescription}
				/>

				{previewProjects.length === 0 ? (
					<motion.div
						variants={fadeInScale(0.2)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="mt-10 text-center py-16 rounded-lg border border-dashed"
					>
						<h3 className="text-xl font-semibold mb-2">{t.common.comingSoon}</h3>
						<p className="text-muted-foreground max-w-md mx-auto">
							{t.common.comingSoonDescription}
						</p>
					</motion.div>
				) : (
					<motion.div
						variants={staggerContainer()}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10"
					>
						{previewProjects.map((project, index) => (
							<motion.div
								key={index}
								variants={fadeInScale(index * 0.1)}
								className="flex"
							>
								<Card className="flex flex-col h-full card-gradient">
									<div className="relative h-48 w-full">
										<Image
											src={getAssetUrl(project.image)}
											alt={localized(project.title, locale)}
											fill
											className="object-cover rounded-t-lg"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
									<CardContent className="flex-grow p-4 sm:p-6">
										<h3 className="font-bold text-lg sm:text-xl mb-2">
											{localized(project.title, locale)}
										</h3>
										<p className="text-muted-foreground mb-4">
											{localized(project.description, locale)}
										</p>
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag, tagIndex) => (
												<Badge key={tagIndex} variant="secondary">
													{tag}
												</Badge>
											))}
										</div>
									</CardContent>
									<CardFooter className="flex-col sm:flex-row p-4 sm:p-6 pt-0 gap-2">
										{project.link && (
											<Button size="sm" variant="outline" asChild className="w-full sm:flex-1">
												<Link href={project.link} target="_blank" rel="noreferrer">
													<ExternalLink className="h-4 w-4 mr-2" />
													Demo
												</Link>
											</Button>
										)}
										{project.repo && (
											<Button size="sm" variant="outline" asChild className="w-full sm:flex-1">
												<Link href={project.repo} target="_blank" rel="noreferrer">
													<Github className="h-4 w-4 mr-2" />
													Repo
												</Link>
											</Button>
										)}
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</motion.div>
				)}

				<div className="flex justify-center mt-10">
					<Button asChild>
						<Link href="/projects">
							{t.common.viewAllProjects} <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
