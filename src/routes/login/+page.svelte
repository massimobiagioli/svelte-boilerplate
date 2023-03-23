<script lang="ts">
	import createAuth from '$lib/shared/supabase/auth';
	import type { PageData } from '../$types';

	export let data: PageData;

	let messageSent = false;
	let showError = false;

	async function handleSubmit(e: SubmitEvent) {
		const formData = new FormData(e.target as HTMLFormElement);
		const auth = createAuth(data.supabase);
		const { error } = await auth.signInWithEmail(formData.get('email') as string, '/');
		if (error) {
			showError = true;
			console.log(error);
			return;
		}
		messageSent = true;
	}
</script>

<div class="w-full">
	<form on:submit|preventDefault={handleSubmit} class="px-8 pt-6 pb-8 mb-4">
		<div class="form-control">
			<label class="input-group">
				<span>Email</span>
				<input
					type="text"
					name="email"
					placeholder="info@site.com"
					class="input input-bordered lg:w-2/3 sm:w-full"
				/>
			</label>
		</div>
		<div class="flex items-center justify-between mt-4">
			<div class="button-group">
				<button type="submit" class="btn btn-primary">Login</button>
			</div>
		</div>
	</form>

	{#if messageSent}
		<div class="toast">
			<div class="alert alert-success">
				<div>
					<span>An email was sent with a magic link. Please check your mailbox.</span>
				</div>
			</div>
		</div>
	{/if}

	{#if showError}
		<div class="toast">
			<div class="m-4 alert alert-error">
				<div>
					<span>Unable to login for the email provided.</span>
				</div>
			</div>
		</div>
	{/if}
</div>
