import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import LoginForm from '$components/login/LoginForm.svelte';

describe('LoginForm.svelte', () => {
	it('should render', () => {
		const { getByText } = render(LoginForm);
		expect(getByText('Email')).toBeTruthy();
		expect(getByText('Login')).toBeTruthy();
	});
});
