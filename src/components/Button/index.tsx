import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface ButtonProperties {
	children: ReactNode;
	onClick: () => void;
	className?: string;
}

export default function Button({
	children,
	className,
	onClick
}: ButtonProperties): ReactElement {
	return (
		<button
			onClick={onClick}
			type='button'
			className={classNames(
				'bg-button rounded-[0.3125rem] border border-black',
				'text-base font-medium text-black',
				'py-[0.375rem]',
				'focus:outline-none',
				className
			)}
		>
			{children}
		</button>
	);
}
