<script lang="ts">
	import DeviceList from '$components/device/DeviceList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ devices } = data);
</script>

{#if devices === null}
	<div class="toast">
		<div class="m-4 alert alert-error">
			<div>
				<span>Error loading devices</span>
			</div>
		</div>
	</div>
{:else}
	<DeviceList {devices} />
{/if}
