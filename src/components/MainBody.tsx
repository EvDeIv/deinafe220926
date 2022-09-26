import { FC, useState } from 'react';
import { IImageSrcProps } from '../types/imageSrcPropsType';

interface IMainBody extends IImageSrcProps {
	handleRandom: () => void;
}

export const MainBody: FC<IMainBody> = ({ imageSrc, handleRandom }) => {
	const [color, setColor] = useState('red');

	const handleClick = () => {
		let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		setColor(randomColor);
		handleRandom();
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundImage: `url("${imageSrc}")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<button onClick={handleClick} style={{ backgroundColor: color }}>
				random
			</button>
		</div>
	);
};
