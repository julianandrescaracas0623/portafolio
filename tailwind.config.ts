import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				display: ['var(--font-display)', 'system-ui', 'sans-serif'],
				sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
				mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
			},
			colors: {
				cream: {
					DEFAULT: 'var(--cream)',
					deep: 'var(--cream-deep)',
				},
				ink: {
					DEFAULT: 'var(--ink)',
					soft: 'var(--ink-soft)',
					mute: 'var(--ink-mute)',
				},
				accent: {
					DEFAULT: 'var(--accent)',
					ink: 'var(--accent-ink)',
				},
			},
			borderRadius: {
				none: '0',
			},
		},
	},
	plugins: [],
};

export default config;
