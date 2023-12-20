<script>

    export let id;
    export let text;
    export let course;
    export let timestamp;

</script>

<div>
    <p>Muistiinpano ID: {id}</p>
    <p>Muistiinpano: {text}</p>
    <p>Kurssi: {course}</p>
    <p>Aika: {timestamp}</p>
</div>

<style>
    div {
        border: 1px solid black;
    }
</style>