'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Brain, Languages } from 'lucide-react';

import { useLanguage } from '@/components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { skills, type Skill } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';
import { fadeIn } from '@/lib/motion';

function sortByLevel(items: Skill[]) {
	return [...items].sort((a, b) => b.level - a.level);
}

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
	const { locale } = useLanguage();

	return (
		<div>
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
					transition={{ duration: 1, delay: index * 0.05 }}
				/>
			</div>
		</div>
	);
}

function SkillList({ items }: { items: Skill[] }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
			{sortByLevel(items).map((skill, index) => (
				<SkillBar key={localized(skill.name, 'es')} skill={skill} index={index} />
			))}
		</div>
	);
}

function SoftwareTabContent() {
	const { t } = useLanguage();
	const softwareSkills = skills.filter((s) => s.category === 'software');

	const devSkills = softwareSkills.filter((s) => s.group === 'dev');
	const toolSkills = softwareSkills.filter((s) => s.group === 'tools');
	const aiSkills = softwareSkills.filter((s) => s.group === 'ai');

	const groups = [
		{ label: t.skills.groupDev, items: devSkills },
		{ label: t.skills.groupTools, items: toolSkills },
		{ label: t.skills.groupAi, items: aiSkills },
	];

	return (
		<div className="space-y-8">
			{groups.map((group) =>
				group.items.length > 0 ? (
					<div key={group.label}>
						<h3 className="text-lg font-semibold mb-4 text-primary">{group.label}</h3>
						<SkillList items={group.items} />
					</div>
				) : null
			)}
		</div>
	);
}

export function SkillsTabs() {
	const { t } = useLanguage();

	const technicalSkills = skills.filter((s) => s.category === 'technical');
	const softSkills = skills.filter((s) => s.category === 'soft');
	const languageSkills = skills.filter((s) => s.category === 'language');

	return (
		<Tabs defaultValue="technical" className="w-full">
			<TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-1">
				<TabsTrigger value="technical" className="gap-2 py-2">
					<Cpu className="h-4 w-4 shrink-0" />
					<span className="hidden sm:inline">{t.skills.technical}</span>
					<span className="sm:hidden">{t.skills.tabTechnicalShort}</span>
				</TabsTrigger>
				<TabsTrigger value="software" className="gap-2 py-2">
					<Code2 className="h-4 w-4 shrink-0" />
					<span className="hidden sm:inline">{t.skills.software}</span>
					<span className="sm:hidden">{t.skills.tabSoftwareShort}</span>
				</TabsTrigger>
				<TabsTrigger value="soft" className="gap-2 py-2">
					<Brain className="h-4 w-4 shrink-0" />
					<span className="hidden sm:inline">{t.skills.soft}</span>
					<span className="sm:hidden">{t.skills.tabSoftShort}</span>
				</TabsTrigger>
				<TabsTrigger value="languages" className="gap-2 py-2">
					<Languages className="h-4 w-4 shrink-0" />
					<span className="hidden sm:inline">{t.skills.languages}</span>
					<span className="sm:hidden">{t.skills.tabLanguagesShort}</span>
				</TabsTrigger>
			</TabsList>

			<motion.div variants={fadeIn('up', 0.2)} initial="hidden" animate="show">
				<TabsContent value="technical" className="mt-6">
					<Card className="card-gradient">
						<CardContent className="p-6">
							<SkillList items={technicalSkills} />
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="software" className="mt-6">
					<Card className="card-gradient">
						<CardContent className="p-6">
							<SoftwareTabContent />
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="soft" className="mt-6">
					<Card className="card-gradient">
						<CardContent className="p-6">
							<SkillList items={softSkills} />
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="languages" className="mt-6">
					<Card className="card-gradient">
						<CardContent className="p-6">
							<SkillList items={languageSkills} />
						</CardContent>
					</Card>
				</TabsContent>
			</motion.div>
		</Tabs>
	);
}
