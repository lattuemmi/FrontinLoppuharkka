<script>
    import { kurssit } from '$lib/kurssiStore';


    console.log("kurssit", kurssit);
    
</script>

{#each kurssit as kurssi (kurssi.id)}
    <p>{kurssi.name}</p>
{/each}