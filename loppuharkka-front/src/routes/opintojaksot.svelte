<script>
    
    import Kurssi from './Kurssi.svelte';

    let kurssiLista = [];

    //Haetaan opintojaksot REST APIsta
    async function haeOpintojaksot() {
        const res = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses');
        const data = await res.json();
        kurssiLista = data;

        if (res.ok) {
            return data;
        } else {
            throw new Error();
        }
    }

    haeOpintojaksot();

</script>


{#each kurssiLista as kurssi}
        <Kurssi {...kurssi} />
{/each}


