import { FC } from 'react';
import { IImageSrcProps } from '../types/imageSrcPropsType';

export const LeftPanel: FC<IImageSrcProps> = ({ imageSrc }) => {
	return (
		<div
			style={{
				backgroundImage: `url("${imageSrc}")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		></div>
	);
};
