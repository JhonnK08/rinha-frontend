import { useState } from 'react';
import FileJsonInput from './components/FileJsonInput';
import JsonViewer from './components/JsonViewer';

function App() {
	const [currentStep, setCurrentStep] = useState<'input' | 'viewer'>('input');
	const [dataJson, setDataJson] = useState<{
		fileName: string;
		data: Record<string, unknown>;
	}>();

	function onGetData(data: Record<string, unknown>, fileName: string): void {
		setDataJson({
			data,
			fileName
		});
		setCurrentStep('viewer');
	}

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
						{dataJson?.data && <JsonViewer data={dataJson.data} />}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
