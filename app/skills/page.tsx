'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/components/language-provider';
import { SkillsTabs } from '@/components/skills/skills-tabs';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function SkillsPage() {
	const { t } = useLanguage();

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div variants={fadeIn('down', 0.2)} className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">{t.skills.title}</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							{t.skills.description}
						</p>
					</motion.div>

					<SkillsTabs />
				</motion.div>
			</div>
		</div>
	);
}
