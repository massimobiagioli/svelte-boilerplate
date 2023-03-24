import { expect, test } from '@playwright/test';

test('devices', async ({ page }) => {
	await page.goto('/devices');
	await expect(
		page.getByRole('heading', { name: 'This is the Home Page of the Svelte Boilerplate' })
	).toBeVisible();
});
