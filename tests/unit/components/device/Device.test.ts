import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Device from '$components/device/Device.svelte';
import { deviceReadfromRaw } from '$lib/models/device/deviceRead';
import DeviceRawProvider from '../../../helper/deviceRawProvider';

describe('Device.svelte', () => {
	it('should render', () => {
		const device = deviceReadfromRaw(DeviceRawProvider.get());
		const { getByText } = render(Device, { props: { device } });
		expect(getByText('device name')).toBeTruthy();
		expect(getByText('device description')).toBeTruthy();
		expect(getByText('10.10.10.1')).toBeTruthy();
	});
});
