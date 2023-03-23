<script lang="ts">
	import { goto } from '$app/navigation';
	import createAuth from '$lib/shared/supabase/authse/auth';
	import type { PageData } from '../$types';

	export let data: PageData;

	let showError = false;

	async function handleLogout(e: MouseEvent) {
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
	<div class="flex items-center justify-between mt-4">
		<div class="button-group">
			<button on:click={handleLogout} class="btn btn-primary">Confim Logout</button>
		</div>
	</div>

	{#if showError}
		<div class="toast">
			<div class="alert alert-error">
				<div>
					<span>Unable to login for the email provided.</span>
				</div>
			</div>
		</div>
	{/if}
</div>
