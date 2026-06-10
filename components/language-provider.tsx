'use client';

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from 'react';

import { getTranslation, type Translations } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/types';

type LanguageContextValue = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'portfolio-locale';

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>('es');

	useEffect(() => {
		const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
		if (stored === 'es' || stored === 'en') {
			setLocaleState(stored);
		}
	}, []);

	const setLocale = useCallback((nextLocale: Locale) => {
		setLocaleState(nextLocale);
		localStorage.setItem(STORAGE_KEY, nextLocale);
		document.documentElement.lang = nextLocale;
	}, []);

	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	const value = useMemo(
		() => ({
			locale,
			setLocale,
			t: getTranslation(locale),
		}),
		[locale, setLocale]
	);

	return (
		<LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
}
