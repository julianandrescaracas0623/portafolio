const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function getAssetUrl(path: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${basePath}${normalized}`;
}

export function getDownloadFilename(path: string): string {
	return path.split('/').pop() ?? 'certificate.pdf';
}
