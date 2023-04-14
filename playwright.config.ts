import type { PlaywrightTestConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const config: PlaywrightTestConfig = {
	use: {
		baseURL: 'http://localhost:4173',
		storageState: 'storage-state.json'
	},
	webServer: {
		command: 'npm run build && npm run preview',
		url: 'http://localhost:4173'
	},
	testDir: 'tests/e2e',
	globalSetup: './tests/helper/global-setup.ts'
};

export default config;
