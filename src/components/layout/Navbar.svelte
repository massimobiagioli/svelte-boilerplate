<script lang="ts">
	import type { Session } from '@supabase/supabase-js';

	export let session: Session | null;
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost normal-case text-xl">Svelte Boilerplate</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/devices">Devices</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		{#if session}
			<small class="mr-2">{session.user.email}</small>
		{/if}
		<div class="dropdown dropdown-end">
			<span tabindex="-1" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src="/avatar.png" alt="avatar" />
				</div>
			</span>
			<ul
				tabindex="-1"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#if !session}
					<li><a href="/login">Login</a></li>
				{:else}
					<li><a href="/logout">Logout</a></li>
				{/if}
			</ul>
		</div>
	</div>
</div>
