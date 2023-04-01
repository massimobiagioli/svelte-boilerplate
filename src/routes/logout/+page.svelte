<script lang="ts">
	import { goto } from '$app/navigation';
	import AlertError from '$components/alert/AlertError.svelte';
	import Logout from '$components/logout/Logout.svelte';
	import createAuth from '$lib/shared/supabase/auth';
	import type { PageData } from '../$types';

	export let data: PageData;

	let showError = false;

	async function handleLogout() {
		const auth = createAuth(data.supabase);
		const { error } = await auth.signOut();
		if (error) {
			showError = true;
			return;
		}
		goto('/');
	}
</script>

<div class="w-full px-8 pt-6 pb-8 mb-4">
	<Logout onConfirm={handleLogout} />

	{#if showError}
		<AlertError message="Logout error" />
	{/if}
</div>
