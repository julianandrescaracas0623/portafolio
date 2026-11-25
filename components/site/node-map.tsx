'use client';

import Link from 'next/link';

import { useLanguage } from '@/components/language-provider';
import { mapNodes } from '@/lib/constants';
import { localized } from '@/lib/i18n/utils';

/** Posición de cada esquina y centro del nodo, en el lienzo de 440x340. */
const CORNERS = [
	{ style: { left: 8, top: 8 }, cx: 83, cy: 35 },
	{ style: { left: 282, top: 8 }, cx: 357, cy: 35 },
	{ style: { left: 8, top: 276 }, cx: 83, cy: 303 },
	{ style: { left: 282, top: 276 }, cx: 357, cy: 303 },
] as const;

const HUB = { x: 220, y: 170 };

export function NodeMap() {
	const { locale, t } = useLanguage();

	return (
		<div>
			<p className="mono mb-[14px]">{t.map.title}</p>

			<div className="nodemap" role="img" aria-label={t.map.alt}>
				<svg
					aria-hidden="true"
					width={440}
					height={340}
					viewBox="0 0 440 340"
					className="absolute left-0 top-0 h-[340px] w-[440px]"
				>
					<g stroke="var(--ink)" strokeWidth={1} fill="none">
						{mapNodes.map((node) => {
							const corner = CORNERS[node.corner];
							return (
								<path
									key={node.name.es}
									d={`M${HUB.x} ${HUB.y} L${corner.cx} ${corner.cy}`}
								/>
							);
						})}
					</g>
				</svg>

				<div className="nodemap-hub">
					<b className="font-display text-[19px]">JAC</b>
					<span className="mono mt-[2px] text-[10px]">{t.map.hub}</span>
				</div>

				{mapNodes.map((node, index) => {
					const corner = CORNERS[node.corner];
					const content = (
						<>
							<b className="text-[13px] font-medium tracking-[0.02em]">
								{localized(node.name, locale)}
							</b>
							<span className="mt-[3px] block text-ink-mute">
								{localized(node.detail, locale)}
							</span>
						</>
					);

					const className = `nodemap-node nodemap-n${index}`;

					return node.href ? (
						<Link key={node.name.es} href={node.href} className={className} style={corner.style}>
							{content}
						</Link>
					) : (
						<div key={node.name.es} className={className} style={corner.style}>
							{content}
						</div>
					);
				})}
			</div>
		</div>
	);
}
