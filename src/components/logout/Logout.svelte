<script lang="ts">
	export let onConfirm: (e: MouseEvent) => void;
</script>

<div class="flex items-center justify-between mt-4">
	<div class="button-group">
		<button on:click={onConfirm} class="btn btn-primary">Confim Logout</button>
	</div>
</div>
