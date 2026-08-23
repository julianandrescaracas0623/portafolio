'use client';

import { motion } from 'framer-motion';

import { CertificateCard } from '@/components/certificates/certificate-card';
import { useLanguage } from '@/components/language-provider';
import { certificates } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function CertificatesPage() {
	const { t } = useLanguage();

	return (
		<div className="py-12 md:py-16 xl:py-20">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">{t.certificates.title}</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							{t.certificates.description}
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{certificates.map((cert, index) => (
							<motion.div
								key={`${cert.title}-${cert.issuer}`}
								variants={fadeIn('up', 0.2 * index)}
							>
								<CertificateCard cert={cert} />
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
