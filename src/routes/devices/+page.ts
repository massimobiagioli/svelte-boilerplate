import { GetUserDevices } from '$lib/features/device';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/');
	}

	const getUserDevices = GetUserDevices(supabase);
	const devices = await getUserDevices({ owner: session.user.id });

	return {
		devices
	};
};
