import Link from 'next/link';

export default function NotFound() {
	return (
		<main className="flex min-h-screen items-center">
			<div className="wrap-narrow">
				<p className="mono mb-4">404</p>
				<h1 className="display text-[clamp(2rem,6vw,3rem)]">Página no encontrada</h1>
				<p className="mt-4 max-w-[520px] text-ink-soft">
					El enlace que seguiste no existe o cambió de dirección.
				</p>
				<Link href="/" className="btn btn-solid mt-8">
					Volver al portafolio
				</Link>
			</div>
		</main>
	);
}
