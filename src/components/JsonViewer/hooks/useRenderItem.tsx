import { ReactElement } from 'react';
import ArrayValue from '../components/ArrayValue';
import ObjectValue from '../components/ObjectValue';
import Property from '../components/Property';
import Value from '../components/Value';
import { JsonTypes } from '../types';

interface UseRenderItemResponse {
	renderItem: (item: JsonTypes, property: string) => ReactElement;
}

export default function useRenderItem(): UseRenderItemResponse {
	function renderItem(item: JsonTypes, property: string): ReactElement {
		switch (typeof item) {
			case 'boolean':
			case 'string':
			case 'number':
				return (
					<div className='flex items-start justify-start gap-x-1'>
						<Property property={property} /> <Value value={item} />
					</div>
				);
			case 'object': {
				// Array, object or null
				if (item === null) {
					return (
						<div className='flex items-start justify-start gap-x-1'>
							<Property property={property} />{' '}
							<Value value={item} />
						</div>
					);
				}
				if (Array.isArray(item) && property) {
					return <ArrayValue array={item} property={property} />;
				}
				if (property) {
					return <ObjectValue object={item} property={property} />;
				}
				throw new Error('Type not recognized or invalid.');
			}
			default:
				throw new Error('Type not recognized or invalid.');
		}
	}

	return {
		renderItem
	};
}
