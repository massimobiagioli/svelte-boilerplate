<script lang="ts">
	export let onSubmit: (e: SubmitEvent) => void;
</script>

<form on:submit|preventDefault={onSubmit} class="px-8 pt-6 pb-8 mb-4">
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
