'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { profile } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
	const { locale, t } = useLanguage();
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formState);
		alert('Message sent successfully!');
		setFormState({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">{t.contact.title}</h1>
						<p className="text-lg text-muted-foreground">
							{t.contact.description}
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div variants={fadeIn('right', 0.3)}>
							<Card className="card-gradient h-full">
								<CardContent className="p-6">
									<h2 className="text-2xl font-semibold mb-6">{t.contact.info}</h2>
									<div className="space-y-4">
										<div className="flex items-center">
											<Phone className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">{profile.phone}</p>
										</div>
										<div className="flex items-center">
											<Mail className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">{profile.email}</p>
										</div>
										<div className="flex items-center">
											<MapPin className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">
												{localized(profile.location, locale)}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={fadeIn('left', 0.3)}>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<Input
										placeholder={t.contact.namePlaceholder}
										name="name"
										value={formState.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Input
										type="email"
										placeholder={t.contact.emailPlaceholder}
										name="email"
										value={formState.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Input
										placeholder={t.contact.subjectPlaceholder}
										name="subject"
										value={formState.subject}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Textarea
										placeholder={t.contact.messagePlaceholder}
										name="message"
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
				</motion.div>
			</div>
		</div>
	);
}
