import type { SupabaseClient, AuthError, AuthResponse } from '@supabase/supabase-js';
import type { Database } from './database.types';

export default function createAuth(supabase: SupabaseClient<Database>) {
	return {
		async signInWithEmail(email: string, emailRedirectTo: string): Promise<AuthResponse> {
			return supabase.auth.signInWithOtp({
				email,
				options: {
					emailRedirectTo
				}
			});
		},
		async signOut(): Promise<{ error: AuthError | null }> {
			return supabase.auth.signOut();
		}
	};
}
