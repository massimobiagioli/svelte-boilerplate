import { chromium, type FullConfig } from '@playwright/test';
import { InbucketAPIClient } from 'inbucket-js-client';

const emailAddress = process.env.EMAIL_ADDRESS as string;
const mailboxId = process.env.MAILBOX_ID as string;
const client = new InbucketAPIClient(process.env.INBUCKET_URL as string);

async function globalSetup(config: FullConfig) {
	const browser = await chromium.launch();
	const page = await browser.newPage();

	await page.goto(`${config.webServer?.url}/login`);

	await page.locator('input[name="email"]').type(emailAddress, { delay: 100 });

	await page.locator('button[type="submit"]').click({ delay: 100 });

	await page.waitForSelector(
		`text=An email was sent with a magic link. Please check your mailbox.`
	);

	const inbox = await client.mailbox(mailboxId);

	const email = await client.message(mailboxId, inbox[inbox.length - 1].id);
	const matches = email.body?.html.match(/href="([^"]*)"/);
	const href = (matches?.[1] as string).replace(/&amp;/g, '&');

	await page.goto(href);
	await page.screenshot({ path: 'screenshots/after-magic-link.png' });
	await page.context().storageState({ path: 'storage-state.json' });
	await browser.close();
	await client.prugeMailbox(mailboxId);
}

export default globalSetup;
