import './App.css';
import { FC, useState } from 'react';
import { Header } from './components/Header';
import images from './assets/images';
import { Footer } from './components/Footer';
import { LeftPanel } from './components/LeftPanel';
import { MainBody } from './components/MainBody';
import { RightPanel } from './components/RightPanel';
import { shuffle } from './helpers/shuggle';

const App: FC = () => {
	const [currentImages, setCurrentImages] = useState<string[]>(images);
	const handleRandom = () => {
		const shuffledArray = shuffle(currentImages);
		setCurrentImages([...shuffledArray]);
	};
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: '1fr 3fr 1fr',
				position: 'relative',
				height: '900px',
				width: '1400px',
				margin: '0 auto',
			}}
		>
			<Header imageSrc={currentImages[0]} />
			<main
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 3fr 1fr',
				}}
			>
				<LeftPanel imageSrc={currentImages[1]} />
				<MainBody imageSrc={currentImages[2]} handleRandom={handleRandom} />
				<RightPanel imageSrc={currentImages[3]} />
			</main>
			<Footer imageSrc={currentImages[4]} />
		</div>
	);
};

export default App;
