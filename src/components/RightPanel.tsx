import { FC } from 'react';
import { IImageSrcProps } from '../types/imageSrcPropsType';

export const RightPanel: FC<IImageSrcProps> = ({ imageSrc }) => {
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
