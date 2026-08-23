'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeader } from '@/components/ui/section-header';
import { fadeIn } from '@/lib/motion';

export function ContactPreview() {
	const { t } = useLanguage();
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert('Form submitted! This is a demo - no actual email is sent.');
		setFormState({ name: '', email: '', message: '' });
	};

	return (
		<section className="py-12 md:py-16 xl:py-20 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title={t.contact.title}
					description={t.contact.previewDescription}
					centered
				/>

				<motion.div
					variants={fadeIn('up', 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="max-w-md mx-auto mt-10"
				>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<Input
								name="name"
								placeholder={t.contact.namePlaceholder}
								value={formState.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Input
								name="email"
								type="email"
								placeholder={t.contact.emailPlaceholder}
								value={formState.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Textarea
								name="message"
								placeholder={t.contact.messagePlaceholder}
								value={formState.message}
								onChange={handleChange}
								required
								className="min-h-[150px]"
							/>
						</div>
						<Button type="submit" className="w-full">
							{t.common.sendMessage} <Send className="ml-2 h-4 w-4" />
						</Button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}
