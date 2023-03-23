import { redirect } from '@sveltejs/kit';
import GetUserDevices from "../../lib/features/device/getUserDevices/getUserDevices";
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
    const { supabase, session } = await parent();
    if (!session) {
        throw redirect(303, '/');
    }

    const getUserDevices = GetUserDevices(supabase);
    const devices = await getUserDevices(session.user.id);

    return {
        devices
    };
};