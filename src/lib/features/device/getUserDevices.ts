import type DeviceRead from '$lib/models/device/deviceRead';
import handleError from '$lib/shared/error/errorHandler';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '$lib/shared/supabase/database.types';
import { deviceReadfromRaw } from '$lib/models/device/deviceRead';

type GetUserDevicesProps = {
	owner: string;
};

const GetUserDevices =
	(supabase: SupabaseClient<Database>) =>
	async ({ owner }: GetUserDevicesProps): Promise<DeviceRead[] | null> => {
		const { data, error } = await supabase.from('device').select().eq('owner', owner);

		if (error) {
			handleError(error);
			return null;
		}

		return data.map(deviceReadfromRaw);
	};

export default GetUserDevices;
