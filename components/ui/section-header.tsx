import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
	title: string;
	description?: string;
	className?: string;
	centered?: boolean;
	children?: ReactNode;
}

export function SectionHeader({
	title,
	description,
	className,
	centered = false,
	children,
}: SectionHeaderProps) {
	return (
		<div className={cn('space-y-3', centered && 'text-center', className)}>
			<h2 className={cn('section-title', centered && 'section-title-center')}>
				{title}
			</h2>
			{description && (
				<p
					className={cn(
						'text-muted-foreground max-w-2xl lg:max-w-3xl 2xl:max-w-4xl text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-relaxed',
						centered && 'mx-auto'
					)}
				>
					{description}
				</p>
			)}
			{children}
		</div>
	);
}