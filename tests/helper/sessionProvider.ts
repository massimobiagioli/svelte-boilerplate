const defaultSession = {
	user: {
		name: 'John Doe',
		email: 'john.doe@email.com'
	}
};

const SessionProvider = {
	get(username?: string, email?: string) {
		return {
			user: {
				name: username ?? defaultSession.user.name,
				email: email ?? defaultSession.user.email
			}
		};
	}
};

export default SessionProvider;
