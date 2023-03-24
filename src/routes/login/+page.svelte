<script lang="ts">
	import AlertError from '$components/alert/AlertError.svelte';
	import AlertSuccess from '$components/alert/AlertSuccess.svelte';
	import LoginForm from '$components/login/LoginForm.svelte';
	import createAuth from '$lib/shared/supabase/auth';
	import type { PageData } from '../$types';

	export let data: PageData;

	let messageSent = false;
	let showError = false;

	async function handleSubmit(e: SubmitEvent) {
		const formData = new FormData(e.target as HTMLFormElement);
		const auth = createAuth(data.supabase);
		const { error } = await auth.signInWithEmail(formData.get('email') as string);
		if (error) {
			showError = true;
			console.log(error);
			return;
		}
		messageSent = true;
	}
</script>

<div class="w-full">
	<LoginForm onSubmit={handleSubmit} />

	{#if messageSent}
		<AlertSuccess message="An email was sent with a magic link. Please check your mailbox." />
	{/if}

	{#if showError}
		<AlertError message="Unable to login for the email provided." />
	{/if}
</div>
