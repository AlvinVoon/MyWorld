<script lang="ts">

  import { goto } from '$app/navigation';
  import { Ratings } from '@skeletonlabs/skeleton';
	//variable Init
	let count = 0;
	let value = { current: 4, max: 5 };
	//function to be called on click
	function incrementCount() {
		//incremtent
		count++
		goto('/waw');
	}	
	function iconClick(event: CustomEvent<{index:number}>): void {
	value.current = event.detail.index;
}
	//export let data;
</script>

<div class="card" style="margin-left: 15px; margin-right: 15px; margin-top: 15px">
	<div style="display:flex">
		<header class="card-header" style="width: 70%;">My First BLog</header>
		<header class="card-header">Date: 1<sup>st</sup> February 2024</header>
	</div>

	<div class="card p-4 max-h-[200px] overflow-hidden space-y-4">
		<article>This is my first blog. I am still trying things out. The website is still very much not complete.
			I am editing this blog through VS Code, can you imagine that. 😂 But I guess it's better than not starting 
			at all.
		</article>
	</div>
	<Ratings bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
		<svelte:fragment slot="empty">🌑</svelte:fragment>
		<svelte:fragment slot="half">🌓</svelte:fragment>
		<svelte:fragment slot="full">⭐</svelte:fragment>
	</Ratings>
</div>