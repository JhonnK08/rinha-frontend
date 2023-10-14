import { ReactElement } from 'react';

interface PropertyProperties {
	property: string;
	hideColon?: boolean;
}
export default function Property({
	property,
	hideColon
}: PropertyProperties): ReactElement {
	return (
		<span className='text-base font-normal text-teal-400'>
			{property}
			{!hideColon && ':'}
		</span>
	);
}
