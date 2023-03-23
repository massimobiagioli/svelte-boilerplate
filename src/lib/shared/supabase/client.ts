import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import type { Session, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './database.types';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';

export default function createClient(session: Session | null): SupabaseClient<Database> {
	return createSupabaseLoadClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		serverSession: session
	});
}
