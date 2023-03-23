import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import AlertSuccess from '$components/alert/AlertSuccess.svelte';

describe('AlertSuccess.svelte', () => {
	it('should render', () => {
		const { getByText } = render(AlertSuccess, { props: { message: 'test message' } });
		expect(getByText('test message')).toBeTruthy();
	});
});
