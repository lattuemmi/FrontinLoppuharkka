<script>

    import Muistiinpano from "./Muistiinpano.svelte";

    let muistiinpanoLista = [];

    //Haetaan muistiinpanot REST APIsta
    async function haeMuistiinpanot() {
        const res = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes');
        const data = await res.json();
        muistiinpanoLista = data;

        if (res.ok) {
            return data;
        } else {
            throw new Error();
        }
    }

    haeMuistiinpanot();

</script>

{#each muistiinpanoLista as muistiinpano}
        <Muistiinpano {...muistiinpano} />
{/each}