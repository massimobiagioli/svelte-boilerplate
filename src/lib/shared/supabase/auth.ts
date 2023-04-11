import type { SupabaseClient, AuthError, AuthResponse } from '@supabase/supabase-js';
import type { Database } from './database.types';

export default function createAuth(supabase: SupabaseClient<Database>) {
	return {
		async signInWithEmail(email: string): Promise<AuthResponse> {
			return supabase.auth.signInWithOtp({
				email,
				options: {
					emailRedirectTo: window.location.origin //(process.env.NODE_ENV === 'test' ? 'http://127.0.0.1:4173' : window.location.origin)
				}
			});
		},
		async signOut(): Promise<{ error: AuthError | null }> {
			return supabase.auth.signOut();
		}
	};
}
