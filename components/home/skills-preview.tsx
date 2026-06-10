'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { skills } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';
import { staggerContainer, fadeIn } from '@/lib/motion';

export function SkillsPreview() {
	const { locale, t } = useLanguage();

	const topTechnicalSkills = skills
		.filter(skill => skill.category === 'technical')
		.sort((a, b) => b.level - a.level)
		.slice(0, 3);

	const topSoftwareSkills = skills
		.filter(skill => skill.category === 'software')
		.sort((a, b) => b.level - a.level)
		.slice(0, 3);

	const topSoftSkills = skills
		.filter(skill => skill.category === 'soft')
		.sort((a, b) => b.level - a.level)
		.slice(0, 3);

	const SkillCard = ({
		title,
		items,
		delay,
	}: {
		title: string;
		items: typeof topTechnicalSkills;
		delay: number;
	}) => (
		<motion.div variants={fadeIn('up', delay)} className="space-y-6">
			<Card>
				<CardContent className="p-6">
					<h3 className="text-xl font-bold mb-4">{title}</h3>
					<div className="space-y-4">
						{items.map((skill, index) => (
							<div key={index}>
								<div className="flex justify-between mb-1">
									<span>{localized(skill.name, locale)}</span>
									<span className="text-muted-foreground">{skill.level}/10</span>
								</div>
								<div className="skill-bar">
									<motion.div
										className="skill-progress"
										initial={{ width: 0 }}
										whileInView={{ width: `${skill.level * 10}%` }}
										viewport={{ once: true }}
										transition={{ duration: 1, delay: index * 0.1 }}
									/>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);

	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title={t.skills.title}
					description={t.skills.description}
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
				>
					<SkillCard title={t.skills.technical} items={topTechnicalSkills} delay={0.1} />
					<SkillCard title={t.skills.software} items={topSoftwareSkills} delay={0.2} />
					<SkillCard title={t.skills.soft} items={topSoftSkills} delay={0.3} />
				</motion.div>

				<div className="flex justify-center mt-10">
					<Button asChild>
						<Link href="/skills">
							{t.nav.skills} <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
