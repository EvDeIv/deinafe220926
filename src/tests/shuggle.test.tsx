import '@testing-library/jest-dom';

import { shuffle } from '../helpers/shuffle';

describe('Shuffle array', () => {
	test('should change randomly indexes of items into array', () => {
		const array = ['1', '2', '3', '4'];

		expect(shuffle(array)).toContain(array[0]);
		expect(shuffle(array)).toContain(array[1]);
		expect(shuffle(array)).toContain(array[2]);
		expect(shuffle(array)).toContain(array[3]);
		expect(shuffle(array)).toEqual(array);
		expect(shuffle(array).length).toEqual(array.length);
	});
});
