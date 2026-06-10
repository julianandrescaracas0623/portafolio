import type { Locale, LocalizedString } from './types';

export function localized(value: LocalizedString, locale: Locale): string {
	return value[locale];
}

export function localizedList(values: LocalizedString[], locale: Locale): string[] {
	return values.map((value) => value[locale]);
}
