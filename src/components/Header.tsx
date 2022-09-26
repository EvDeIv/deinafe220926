import { FC } from 'react';
import { IImageSrcProps } from './../types/imageSrcPropsType';

export const Header: FC<IImageSrcProps> = ({ imageSrc }) => {
	return (
		<header
			style={{
				position: 'sticky',
				top: '0',
				backgroundImage: `url("${imageSrc}")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				width: '100%',
			}}
		/>
	);
};
