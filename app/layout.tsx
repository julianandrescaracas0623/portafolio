import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';

import { LanguageProvider } from '@/components/language-provider';
import { profile, siteConfig } from '@/lib/constants';
import { getAssetUrl } from '@/lib/public-url';

const display = Space_Grotesk({
	subsets: ['latin'],
	weight: ['500', '700'],
	variable: '--font-display',
	display: 'swap',
});

const sans = Inter({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-sans',
	display: 'swap',
});

const mono = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-mono',
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: `${profile.fullName} — Software Engineer`,
	description: profile.bio.es,
	openGraph: {
		title: `${profile.fullName} — Software Engineer`,
		description: profile.bio.es,
		url: siteConfig.url,
		siteName: profile.fullName,
		locale: 'es_CO',
		type: 'website',
	},
	icons: {
		icon: getAssetUrl('/images/favicon.png'),
		shortcut: getAssetUrl('/images/favicon.png'),
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<body className={`${display.variable} ${sans.variable} ${mono.variable}`}>
				<LanguageProvider>{children}</LanguageProvider>
			</body>
		</html>
	);
}
