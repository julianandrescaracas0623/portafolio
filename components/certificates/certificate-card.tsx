'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Award, ExternalLink, FileDown } from 'lucide-react';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { Certificate } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';
import { getAssetUrl, getDownloadFilename } from '@/lib/public-url';

function getIssuerInitials(issuer: string): string {
	return issuer
		.split(/\s+/)
		.slice(0, 2)
		.map((word) => word[0]?.toUpperCase() ?? '')
		.join('');
}

function CertificatePreview({
	cert,
	alt,
	pdfUrl,
}: {
	cert: Certificate;
	alt: string;
	pdfUrl?: string;
}) {
	const [imageError, setImageError] = useState(false);
	const showImage = cert.image && !imageError;
	const imageUrl = cert.image ? getAssetUrl(cert.image) : undefined;

	const previewContent = showImage ? (
		<Image
			src={imageUrl!}
			alt={alt}
			fill
			className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			onError={() => setImageError(true)}
		/>
	) : (
		<div className="flex h-full w-full flex-col items-center justify-center rounded-t-lg bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 p-6">
			<span className="text-4xl font-bold text-primary/80">
				{getIssuerInitials(cert.issuer)}
			</span>
			<span className="mt-2 text-sm font-medium text-muted-foreground">{cert.issuer}</span>
			<Award className="mt-4 h-10 w-10 text-primary/60" />
		</div>
	);

	if (pdfUrl) {
		return (
			<a
				href={pdfUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="block h-full w-full cursor-pointer"
				aria-label={`${alt} PDF`}
			>
				{previewContent}
			</a>
		);
	}

	return previewContent;
}

export function CertificateCard({ cert }: { cert: Certificate }) {
	const { locale, t } = useLanguage();
	const pdfUrl = cert.pdf ? getAssetUrl(cert.pdf) : undefined;
	const downloadName = cert.pdf ? getDownloadFilename(cert.pdf) : undefined;

	return (
		<Card className="card-gradient group flex h-full flex-col overflow-hidden">
			<div className="relative h-48 w-full overflow-hidden">
				<CertificatePreview cert={cert} alt={cert.title} pdfUrl={pdfUrl} />
			</div>

			<CardContent className="flex-grow p-4 sm:p-6">
				<h2 className="text-xl font-semibold mb-1">{cert.title}</h2>
				<p className="text-primary text-sm font-medium">{cert.issuer}</p>
				{cert.description && (
					<p className="text-sm text-muted-foreground mt-2">
						{localized(cert.description, locale)}
					</p>
				)}
				{cert.date && (
					<p className="text-sm text-muted-foreground mt-2">
						{t.certificates.issued}: {cert.date}
					</p>
				)}
				{!cert.pdf && (
					<p className="text-xs text-muted-foreground/70 mt-2">{t.certificates.noPdf}</p>
				)}
			</CardContent>

			{pdfUrl && downloadName && (
				<CardFooter className="flex-col sm:flex-row p-4 sm:p-6 pt-0 gap-2">
					<Button size="sm" variant="outline" asChild className="w-full sm:flex-1 hover:bg-primary hover:text-primary-foreground">
						<a href={pdfUrl} target="_blank" rel="noopener noreferrer">
							<ExternalLink className="h-4 w-4 mr-2" />
							{t.certificates.view}
						</a>
					</Button>
					<Button size="sm" variant="outline" asChild className="w-full sm:flex-1 hover:bg-primary hover:text-primary-foreground">
						<a href={pdfUrl} download={downloadName}>
							<FileDown className="h-4 w-4 mr-2" />
							{t.certificates.download}
						</a>
					</Button>
				</CardFooter>
			)}
		</Card>
	);
}
