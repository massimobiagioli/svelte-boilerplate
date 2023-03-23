import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Logout from '$components/logout/Logout.svelte';

describe('Logout.svelte', () => {
	it('should render', () => {
		const { getByText } = render(Logout);
		expect(getByText('Confim Logout')).toBeTruthy();
	});
});
