import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface ButtonProperties {
	children: ReactNode;
	onClick: () => void;
	disabled?: boolean;
	className?: string;
}

export default function Button({
	children,
	className,
	disabled,
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
				'disabled:cursor-not-allowed  disabled:border-0 disabled:opacity-75',
				className
			)}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
