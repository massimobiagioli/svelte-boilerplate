import type { SupabaseClient, AuthError, AuthResponse } from '@supabase/supabase-js';
import type { Database } from './database.types';

export default function createAuth(supabase: SupabaseClient<Database>) {
	return {
		async signInWithEmail(email: string): Promise<AuthResponse> {
			return supabase.auth.signInWithOtp({
				email,
				options: {
					emailRedirectTo: window.location.origin
				}
			});
		},
		async signOut(): Promise<{ error: AuthError | null }> {
			return supabase.auth.signOut();
		}
	};
}
