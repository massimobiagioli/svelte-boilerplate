import { expect, test } from '@playwright/test';

test.describe('devices', () => {

	test('authenticated', async ({ page }) => {
		await page.goto("/devices");
		
		// Print page content to console
		//console.log(await page.textContent('body'));
		
		await expect(
			page.getByRole('heading', { name: 'Device List' })
		).toBeVisible();
	});
});