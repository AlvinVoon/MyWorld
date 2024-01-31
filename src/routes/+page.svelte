<script lang="ts">

  import { goto } from '$app/navigation';
	//variable Init
	let count = 0;
	//function to be called on click
	function incrementCount() {
		//incremtent
		count++
		goto('/waw');
	}
	export let data;
</script>

<ul>
    {#each data.countries as country}
      <li>{country.name}</li>
    {/each}
  </ul>
