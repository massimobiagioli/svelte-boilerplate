import { deviceReadfromRaw } from '$lib/models/device/deviceRead';
import { describe, it, expect } from 'vitest';
import DeviceRawProvider from '../../../../helper/deviceRawProvider';

describe('deviceRead', () => {
	it('create from raw', () => {
		const deviceRead = deviceReadfromRaw(DeviceRawProvider.get());

		expect(deviceRead.id).toEqual(1);
		expect(deviceRead.address).toEqual('10.10.10.1');
		expect(deviceRead.description).toEqual('device description');
		expect(deviceRead.is_active).toEqual(false);
		expect(deviceRead.name).toEqual('device name');
		expect(deviceRead.owner).toEqual('device owner');
		expect(deviceRead.created_at).toEqual('2023-03-18 20:19:18');
	});
});
