import type { DeviceRaw } from '$lib/models/device/device';

const defaultDevice = {
	id: 1,
	name: 'device name',
	description: 'device description',
	address: '10.10.10.1',
	owner: 'device owner',
	is_active: false,
	created_at: '2023-03-18 20:19:18.307723+00'
};

const DeviceRawProvider = {
	get(device: Partial<DeviceRaw> = {}): DeviceRaw {
		return {
			...device,
			...defaultDevice
		};
	}
};

export default DeviceRawProvider;
