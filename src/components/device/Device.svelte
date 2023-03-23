<script lang="ts">
	import type DeviceRead from '$lib/models/device/deviceRead';

	export let device: DeviceRead;
</script>

<div class="card w-96 bg-primary shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{device.name}</h2>
		<p>{device.description}</p>
		<p>
			<span>Id: </span>
			<span>{device.id}</span>
		</p>
		<p>
			<span>Address: </span>
			<span>{device.address}</span>
		</p>
		<p>
			<span>Created at: </span>
			<span>{device.created_at}</span>
		</p>
		<p>
			<span>Active?: </span>
			<span>{device.is_active}</span>
		</p>
	</div>
</div>
