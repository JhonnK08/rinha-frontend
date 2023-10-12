import { ReactElement } from 'react';

interface JsonViewerProperties {
	data: Record<string, unknown>;
}

export default function JsonViewer({
	data
}: JsonViewerProperties): ReactElement {
	return <div>{JSON.stringify(data)}</div>;
}
