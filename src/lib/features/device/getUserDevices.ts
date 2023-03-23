import handleError from '$lib/shared/error/errorHandler';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../../shared/supabase/database.types';

const GetUserDevices = (supabase: SupabaseClient<Database>) => async (owner: string) => {
	const { data, error } = await supabase.from('device').select().eq('owner', owner);

	handleError(error)

	return data;
};

export default GetUserDevices;
