import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MainBody } from '../components/MainBody';

describe('Button visibility', () => {
	test('button should be visible', () => {
		render(<MainBody imageSrc="asd" handleRandom={() => {}} />);
		const button = screen.getByText('random');

		expect(button).toBeVisible();
	});
});
