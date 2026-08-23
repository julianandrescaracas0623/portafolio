import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Source_Sans_3 } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { profile } from '@/lib/constants';
import { getAssetUrl } from '@/lib/public-url';

const outfit = Outfit({
	subsets: ['latin'],
	variable: '--font-display',
	display: 'swap',
});

const sourceSans = Source_Sans_3({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap',
});

export const metadata: Metadata = {
	title: profile.fullName,
	description: profile.bio.es,
	icons: {
		icon: getAssetUrl('/images/favicon.png'),
		shortcut: getAssetUrl('/images/favicon.png'),
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body className={`${outfit.variable} ${sourceSans.variable} font-sans`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
					<LanguageProvider>
						<div className="relative min-h-screen flex flex-col">
							<Navbar />
							<main className="flex-grow pt-16">{children}</main>
							<Footer />
						</div>
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
