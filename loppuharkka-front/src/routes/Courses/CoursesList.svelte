<script>
    import {kurssit} from '$lib/kurssiStore';
	import Header from '../Header.svelte';
</script>

<Header />

{#each $kurssit as kurssi (kurssi.id)}
    <p>{kurssi.name}</p>
{/each}