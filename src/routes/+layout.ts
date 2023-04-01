import type { LayoutLoad } from './$types';
import createClient from '$lib/shared/supabase/client';

export const load: LayoutLoad = async ({ data, depends }) => {
	depends('supabase:auth');

	const supabase = createClient(data.session);

	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { supabase, session };
};
