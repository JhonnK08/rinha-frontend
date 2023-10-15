import classNames from 'classnames';
import { ReactElement } from 'react';
import useRenderItem from '../../hooks/useRenderItem';
import { JsonTypes } from '../../types';
import { isObject } from '../../utils';
import Property from '../Property';

interface ArrayValueProperties {
	array: Array<JsonTypes>;
	property: string;
}

export default function ArrayValue({
	array,
	property
}: ArrayValueProperties): ReactElement {
	const { renderItem } = useRenderItem();

	return (
		<div className='flex flex-col items-start justify-start text-base font-normal text-black'>
			<div>
				<Property property={property} hideColon />:{' '}
				<span className='font-bold text-peach-200'>[</span>
			</div>
			<div className='border-l border-grey pl-5'>
				{array.map((item, index) => (
					<div
						className={classNames(
							'flex items-start justify-start',
							{
								'flex-col': isObject(item),
								'gap-x-1': !isObject(item)
							}
						)}
						key={`${String(item)}-${String(index)}`}
					>
						<span className='text-grey'>{index}:</span>
						<div className='flex flex-col items-start justify-start gap-y-1'>
							{renderItem(item)}
						</div>
					</div>
				))}
			</div>
			<span className='font-bold text-peach-200'>]</span>
		</div>
	);
}
