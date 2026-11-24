import { About } from '@/components/site/about';
import { Certificates, Education } from '@/components/site/education';
import { Contact } from '@/components/site/contact';
import { Experience } from '@/components/site/experience';
import { Header } from '@/components/site/header';
import { Hero } from '@/components/site/hero';
import { Projects } from '@/components/site/projects';
import { Skills } from '@/components/site/skills';

export default function HomePage() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Skills />
				<Education />
				<Certificates />
				<Contact />
			</main>
		</>
	);
}
