<script lang="ts">
    import type { PageData } from './$types';
  
    export let data: PageData;
    $: ({ devices } = data);
</script>

<div>WIP: Devices</div>

{#if devices?.length}
    <ul>
        {#each devices as device}
            <li>{device.name}</li>
        {/each}
    </ul>
{:else}
    <div>No devices found</div>
{/if}