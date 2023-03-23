import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import AlertError from '$components/alert/AlertError.svelte';

describe('AlertError.svelte', () => {
	it('should render', () => {
		const { getByText } = render(AlertError, { props: { message: 'test error message' } });
		expect(getByText('test error message')).toBeTruthy();
	});
});
