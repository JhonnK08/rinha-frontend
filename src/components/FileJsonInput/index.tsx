import { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { resetFileInput } from '../../utils/resetFileInput';
import Button from '../Button';

interface FileJsonInputProperties {
	onGetData: (data: Record<string, unknown>, fileName: string) => void;
}

export default function FileJsonInput({
	onGetData
}: FileJsonInputProperties): ReactElement {
	const [file, setFile] = useState<File>();
	const [data, setData] = useState<Record<string, unknown>>();
	const [error, setError] = useState<string>();
	const [disabled, setDisabled] = useState(false);

	const inputReference = useRef<HTMLInputElement | null>(null);

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) {
			return;
		}

		if (event.target.files[0]) {
			setDisabled(true);
			setFile(event.target.files[0]);
			const fileReader = new FileReader();
			fileReader.onload = () => {
				try {
					if (
						fileReader.result &&
						event.target.files &&
						typeof fileReader.result === 'string'
					) {
						setData(
							JSON.parse(fileReader.result) as Record<
								string,
								unknown
							>
						);
						resetFileInput(event);
					}

					if (error) {
						setError(undefined);
					}
				} catch (error) {
					console.error(error);
					resetFileInput(event);
					setDisabled(false);

					setError('Invalid file. Please load a valid JSON file.');
				}
			};

			fileReader.readAsText(event.target.files[0]);
		}
	};

	const handleUploadClick = () => {
		inputReference.current?.click();
	};

	useEffect(() => {
		if (file && data) {
			setDisabled(false);
			onGetData(data, file.name);
		}
	}, [file, data, onGetData]);

	return (
		<div className='flex flex-col items-center gap-y-6'>
			<input
				type='file'
				ref={inputReference}
				onChange={handleFileChange}
				className='hidden'
				accept='application/json'
			/>
			<Button
				onClick={handleUploadClick}
				className='w-[6.875rem]'
				disabled={disabled}
			>
				Load JSON
			</Button>
			{error && (
				<span className='text-base font-normal text-alert'>
					{error}
				</span>
			)}
		</div>
	);
}
