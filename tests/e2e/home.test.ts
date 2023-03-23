import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByRole('heading', { name: 'This is the Home Page of the Svelte Boilerplate' })
	).toBeVisible();
});
