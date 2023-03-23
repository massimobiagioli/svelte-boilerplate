<script lang="ts">
	import type DeviceRead from '$lib/models/device/deviceRead';
	import Device from './Device.svelte';

	export let devices: DeviceRead[];
</script>

<h1>Device List</h1>

{#if devices?.length}
	<div class="m-4">
		<div class="flex flex-wrap gap-x-4 gap-y-4">
			{#each devices as device}
				<Device {device} />
			{/each}
		</div>
	</div>
{:else}
	<div>No devices found</div>
{/if}
