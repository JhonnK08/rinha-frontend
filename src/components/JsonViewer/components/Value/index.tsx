import { ReactElement } from 'react';

export default function Value({
	value
}: {
	value: string | number | boolean | null;
}): ReactElement {
	return <span className='text-base font-normal'>{value}</span>;
}
