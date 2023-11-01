import { JsonTypes } from '../types';

export function isJsonTypes(item: unknown): item is JsonTypes {
	return (
		typeof item === 'string' ||
		typeof item === 'boolean' ||
		typeof item === 'number' ||
		typeof item === 'object'
	);
}

export function isObject(item: unknown): item is Record<string, unknown> {
	return typeof item === 'object' && !!item;
}
