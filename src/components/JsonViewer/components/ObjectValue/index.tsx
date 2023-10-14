import { ReactElement } from 'react';
import useRenderItem from '../../hooks/useRenderItem';
import { isJsonTypes } from '../../utils';
import Property from '../Property';

interface ObjectValueProperties {
	object: Record<string, unknown>;
	property: string;
}

export default function ObjectValue({
	object,
	property
}: ObjectValueProperties): ReactElement {
	const { renderItem } = useRenderItem();

	return (
		<div className='flex flex-col items-start justify-start text-base font-normal text-black'>
			<div>
				<Property property={property} hideColon />:{' '}
				<span className='font-bold text-peach-200'>{'{'}</span>
			</div>
			<div className='flex flex-col items-start justify-start gap-y-1 border-l border-grey pl-5'>
				{Object.entries(object).map(([key, item]) => {
					if (isJsonTypes(item)) {
						return renderItem(item, key);
					}
					console.error(key, item);
					throw new Error('Item type not recognized');
				})}
			</div>
			<span className='font-bold text-peach-200'>{'}'}</span>
		</div>
	);
}
