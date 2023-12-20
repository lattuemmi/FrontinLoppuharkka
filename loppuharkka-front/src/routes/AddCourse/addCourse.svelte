<script>

    import Kurssilista from"../opintojaksot.svelte"

    let id = '';
    let nimi = '';

</script>

<div>
    <input bind:value={nimi} placeholder="Course Name" />
    <button>Lisää</button>
</div>

<h2>Kurssit</h2>

<Kurssilista />