import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Navbar from '$components/layout/Navbar.svelte';
import SessionProvider from '../../../helper/sessionProvider';

describe('Navbar.svelte', () => {
	it('should render without session', () => {
		const { getByText } = render(Navbar, { props: { session: null } });
		expect(getByText('Login')).toBeTruthy();
	});

	it('should render with session', () => {
		const { getByText } = render(Navbar, { props: { session: SessionProvider.get() } });
		expect(getByText('Logout')).toBeTruthy();
		expect(getByText('john.doe@email.com')).toBeTruthy();
	});
});
