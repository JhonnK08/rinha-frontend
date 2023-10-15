import { nanoid } from 'nanoid';
import { ReactElement } from 'react';
import ArrayValue from '../components/ArrayValue';
import ObjectValue from '../components/ObjectValue';
import Property from '../components/Property';
import Value from '../components/Value';
import { JsonTypes } from '../types';

interface UseRenderItemResponse {
	renderItem: (item: JsonTypes, property?: string) => ReactElement;
}

export default function useRenderItem(): UseRenderItemResponse {
	function renderItem(item: JsonTypes, property?: string): ReactElement {
		switch (typeof item) {
			case 'boolean':
			case 'string':
			case 'number':
				if (property) {
					return (
						<div
							className='flex items-start justify-start gap-x-1'
							key={`${String(item)}-${nanoid()}`}
						>
							<Property property={property} />{' '}
							<Value value={item} />
						</div>
					);
				} else {
					return (
						<Value
							value={item}
							key={`${String(item)}-${nanoid()}`}
						/>
					);
				}
			case 'object': {
				// Array, object or null
				if (item === null && property) {
					return (
						<div
							className='flex items-start justify-start gap-x-1'
							key={`${String(item)}-${nanoid()}`}
						>
							<Property property={property} />{' '}
							<Value value={item} />
						</div>
					);
				}
				if (Array.isArray(item) && property) {
					return (
						<ArrayValue
							array={item}
							property={property}
							key={`${String(item)}-${nanoid()}`}
						/>
					);
				}
				return (
					<ObjectValue
						object={item as Record<string, unknown>}
						property={property}
						key={`${String(item)}-${nanoid()}`}
					/>
				);
			}
			default:
				throw new Error('Type not recognized or invalid.');
		}
	}

	return {
		renderItem
	};
}
