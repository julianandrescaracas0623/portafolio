import type { Metadata } from 'next';

import { ProjectDetail } from '@/components/site/project-detail';
import { getProject, profile, projects } from '@/lib/constants';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	const { slug } = await params;
	const project = getProject(slug);

	if (!project) {
		return { title: profile.fullName };
	}

	return {
		title: `${project.name.es} — ${profile.fullName}`,
		description: project.card.es,
	};
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
	const { slug } = await params;
	return <ProjectDetail slug={slug} />;
}
