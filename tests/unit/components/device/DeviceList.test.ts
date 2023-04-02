import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import DeviceList from '$components/device/DeviceList.svelte';
import { deviceReadfromRaw } from '$lib/models/device/deviceRead';
import DeviceRawProvider from '../../../helper/deviceRawProvider';

describe('DeviceList.svelte', () => {
	it('should render with no devices', () => {
		const { getByText } = render(DeviceList, { props: { devices: [] } });
		expect(getByText('No devices found')).toBeTruthy();
	});

	it('should render with one device', () => {
		const devices = [deviceReadfromRaw(DeviceRawProvider.get())];
		const { getByText } = render(DeviceList, { props: { devices } });
		expect(getByText('device name')).toBeTruthy();
		expect(getByText('device description')).toBeTruthy();
		expect(getByText('10.10.10.1')).toBeTruthy();
	});
});
