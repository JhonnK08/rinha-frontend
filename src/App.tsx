import { useMemo, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import FileJsonInput from './components/FileJsonInput';
import CustomScroller from './components/JsonViewer/components/Scroller';
import useRenderItem from './components/JsonViewer/hooks/useRenderItem';
import { isJsonTypes } from './components/JsonViewer/utils';

function App() {
	const [currentStep, setCurrentStep] = useState<'input' | 'viewer'>('input');
	const [dataJson, setDataJson] = useState<{
		fileName: string;
		data: Record<string, unknown>;
	}>();
	const { renderItem } = useRenderItem();

	function onGetData(data: Record<string, unknown>, fileName: string): void {
		setDataJson({
			data,
			fileName
		});
		setCurrentStep('viewer');
	}

	const items = useMemo(
		() => dataJson?.data && Object.entries(dataJson?.data),
		[dataJson?.data]
	);

	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center gap-y-6 text-center'>
			{currentStep === 'input' ? (
				<>
					<h1 className='text-5xl font-bold'>JSON Tree Viewer</h1>
					<p className='text-2xl font-normal'>
						Simple JSON Viewer that runs completely on-client. No
						data exchange
					</p>

					<FileJsonInput onGetData={onGetData} />
				</>
			) : (
				<>
					<div className='flex min-h-full flex-col items-start justify-start gap-y-[0.625rem] py-6'>
						<h1 className='text-left text-[2rem] font-bold'>
							{dataJson?.fileName}
						</h1>
						{items && (
							<Virtuoso
								style={{ height: 'fit', minWidth: '39.875rem' }}
								data={items}
								itemContent={(_, data) => {
									const [key, item] = data;
									console.log('data', data);
									if (isJsonTypes(item)) {
										return renderItem(item, key);
									}
									console.error(key, item);
									throw new Error('Item type not recognized');
								}}
								components={{ Scroller: CustomScroller }}
							/>
						)}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
