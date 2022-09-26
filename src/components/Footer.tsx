import { FC } from 'react';
import { IImageSrcProps } from './../types/imageSrcPropsType';

export const Footer: FC<IImageSrcProps> = ({ imageSrc }) => {
	return (
		<footer
			style={{
				position: 'sticky',
				bottom: '0',
				backgroundImage: `url("${imageSrc}")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				width: '100%',
			}}
		/>
	);
};
