<script lang="ts">
	import type { Session } from '@supabase/supabase-js';

	export let session: Session | null;
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<span class="text-xl">Svelte Boilerplate</span>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/devices">Devices</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src="/avatar.png" />
				</div>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#if !session}
					<li><a>Login</a></li>
				{:else}
					<li><a href="/user-profile">Profile</a></li>
					<li><a>Logout</a></li>
				{/if}
			</ul>
		</div>
	</div>
</div>
