import type { Session } from '@supabase/supabase-js';

const defaultSession: Session = {
	user: {
		id: '1',
		email: 'john.doe@email.com',
		app_metadata: {},
		user_metadata: {},
		aud: 'authenticated',
		created_at: '2021-01-01T00:00:00.000Z'
	},
	access_token: 'access_token',
	refresh_token: 'refresh_token',
	expires_in: 3600,
	token_type: 'Bearer'
};

const SessionProvider = {
	get(data: Partial<Session> = {}): Session {
		return {
			...defaultSession,
			...data
		};
	}
};

export default SessionProvider;
