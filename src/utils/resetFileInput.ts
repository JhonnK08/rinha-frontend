import { ChangeEvent } from 'react';

export function resetFileInput(event: ChangeEvent<HTMLInputElement>): void {
	const auxEvent = event;
	auxEvent.target.value = '';
}
