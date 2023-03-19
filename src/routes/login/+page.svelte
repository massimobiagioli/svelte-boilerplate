<script lang="ts">
	import createAuth from '$lib/supabase/auth';
	import type { PageData } from '../$types';

	export let data: PageData;

	async function handleSubmit(e: SubmitEvent) {
		const formData = new FormData(e.target as HTMLFormElement);
		const auth = createAuth(data.supabase);
		const { error } = await auth.signInWithEmail(formData.get('email') as string, '/');
		if (error) {
			console.log(error);
		}
	}
</script>

<div class="w-full max-w-xs">
	<form on:submit|preventDefault={handleSubmit} class="px-8 pt-6 pb-8 mb-4">
		<div class="form-control">
			<label class="label">
				<span class="label-text">Email</span>
			</label>
			<label class="input-group">
				<span>Email</span>
				<input type="text" name="email" placeholder="info@site.com" class="input input-bordered" />
			</label>
		</div>
		<div class="flex items-center justify-between mt-4">
			<div class="button-group">
				<button type="submit" class="btn btn-primary">Login</button>
			</div>
		</div>
	</form>
</div>
