export function getAssetUrl(path: string): string {
	return path.startsWith('/') ? path : `/${path}`;
}

export function getDownloadFilename(path: string): string {
	return path.split('/').pop() ?? 'certificate.pdf';
}
