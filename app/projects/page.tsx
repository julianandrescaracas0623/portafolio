'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { projects } from '@/lib/constants';
import { getAssetUrl } from '@/lib/public-url';
import { localized } from '@/lib/i18n/utils';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export default function ProjectsPage() {
	const { locale, t } = useLanguage();

	return (
		<div className="py-12 md:py-16 xl:py-20">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeInScale(0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-3xl sm:text-4xl font-bold mb-4">{t.projects.title}</h1>
						<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
							{t.projects.description}
						</p>
					</motion.div>

					{projects.length === 0 ? (
						<motion.div
							variants={fadeInScale(0.3)}
							className="text-center py-20 rounded-lg border border-dashed max-w-xl mx-auto"
						>
							<h2 className="text-2xl font-semibold mb-3">{t.common.comingSoon}</h2>
							<p className="text-muted-foreground">
								{t.common.comingSoonDescription}
							</p>
						</motion.div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
							{projects.map((project, index) => (
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
						</div>
					)}
				</motion.div>
			</div>
		</div>
	);
}
