/** @type {import('next').NextConfig} */
const repo = 'portafolio';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
	output: 'export',
	basePath: isGitHubPages ? `/${repo}` : '',
	assetPrefix: isGitHubPages ? `/${repo}/` : '',
	trailingSlash: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	devIndicators: false,
	images: { unoptimized: true },
	env: {
		NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repo}` : '',
	},
	webpack: (config, { isServer }) => {
		// Disable cache for both client and server builds
		config.cache = false;
		return config;
	},
	// Add experimental features to handle client pages properly
	experimental: {
		appDir: true,
		serverActions: true
	}
};

module.exports = nextConfig;
