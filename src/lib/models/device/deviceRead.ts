import type { DeviceRaw } from './device';

type DeviceRead = {
	id: number;
	address: string;
	description: string | null;
	is_active: boolean;
	name: string;
	owner: string | null;
	created_at: string | null;
};

export function deviceReadfromRaw(raw: DeviceRaw): DeviceRead {
	const createdAtAsDate = new Date(raw.created_at ?? '');

	return {
		id: raw.id,
		address: raw.address,
		description: raw.description,
		is_active: raw.is_active,
		name: raw.name,
		created_at: createdAtAsDate.toISOString().slice(0, 19).replace('T', ' '),
		owner: raw.owner
	};
}

export default DeviceRead;
