import { forwardRef } from 'react';
import { ScrollerProps } from 'react-virtuoso';

const CustomScroller = forwardRef<HTMLDivElement, ScrollerProps>(
	({ style, ...props }, ref) => {
		console.log('props', props);
		return (
			<div
				style={style}
				className='scrollbar-thin scrollbar-thumb-grey scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-full w-full'
				ref={ref}
				{...props}
			/>
		);
	}
);

export default CustomScroller;
