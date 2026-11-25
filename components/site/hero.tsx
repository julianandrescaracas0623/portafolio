'use client';

import { useLanguage } from '@/components/language-provider';
import { NodeMap } from '@/components/site/node-map';
import { ArrowRight } from '@/components/site/primitives';
import { profile } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';
import { getAssetUrl } from '@/lib/public-url';

export function Hero() {
	const { locale, t } = useLanguage();

	return (
		<section id="inicio" className="py-16 sm:py-[74px]">
			<div className="wrap grid items-start gap-12 lg:grid-cols-[1.1fr_0.85fr]">
				<div>
					<p className="mono mb-5 flex items-center gap-[9px]">
						<span aria-hidden="true" className="inline-block h-[9px] w-[9px] bg-accent" />
						{localized(profile.status, locale)}
					</p>

					<h1 className="display text-[clamp(2.5rem,8vw,4.125rem)] leading-[1.02]">
						{profile.fullName}
					</h1>

					<p className="mt-[18px] max-w-[620px] font-display text-[clamp(1.125rem,3vw,1.375rem)] font-medium leading-[1.3] tracking-[-0.01em]">
						{localized(profile.role, locale)}
					</p>

					<p className="mt-5 max-w-[600px] text-[18px] text-ink-soft">
						{localized(profile.bio, locale)}
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						<a href="#proyectos" className="btn btn-solid">
							{t.common.viewProjects}
							<ArrowRight />
						</a>
						<a href={getAssetUrl(profile.cv)} download className="btn btn-ghost">
							{t.common.downloadCv}
						</a>
						<a
							href="https://github.com/julianandrescaracas0623"
							className="btn btn-ghost"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					</div>
				</div>

				<div>
					<NodeMap />
					<p className="mono mt-[18px] text-[13px] normal-case leading-[1.65] tracking-normal">
						{localized(profile.summaryLine, locale)}
					</p>
				</div>
			</div>
		</section>
	);
}
