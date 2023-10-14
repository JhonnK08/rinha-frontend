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
					<>
						<Property property={property} /> <Value value={item} />
					</>
				);
			case 'object': {
				// Array, object or null
				if (item === null) {
					return <Value value={item} />;
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
