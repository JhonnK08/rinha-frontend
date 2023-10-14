import { ReactElement } from 'react';
import useRenderItem from './hooks/useRenderItem';
import { isJsonTypes } from './utils';

interface JsonViewerProperties {
	data: Record<string, unknown>;
}

export default function JsonViewer({
	data
}: JsonViewerProperties): ReactElement {
	const { renderItem } = useRenderItem();
	return (
		<div className='min-w-[39.875rem]'>
			{Object.entries(data).map(([key, item]) => {
				if (isJsonTypes(item)) {
					return renderItem(item, key);
				}
				console.error(key, item);
				throw new Error('Item type not recognized');
			})}
		</div>
	);
}
