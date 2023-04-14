import { expect, test } from '@playwright/test';

test.describe('devices', () => {
	test('show', async ({ page }) => {
		await page.goto('/devices');

		await expect(page.getByRole('heading', { name: 'Device List' })).toBeVisible();
	});
});
