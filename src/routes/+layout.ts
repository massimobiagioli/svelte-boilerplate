import type { LayoutLoad } from './$types';
import createClient from '$lib/supabase/client';

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createClient(data.session);

	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { supabase, session };
};
