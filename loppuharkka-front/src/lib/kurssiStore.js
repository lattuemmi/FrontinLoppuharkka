import { writable } from "svelte/store";

function createStore() {
    const apiURL = 'https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses';

    const {subscribe, set, update } = writable([]);

    async function fetchKurssit(){
        try{
            const response = await fetch(apiURL);
            const data = await response.json();
            set(data);
        }catch (error) {
            console.error('Ei onnistunut kurssien haku APIsta', error);
        }
    }

    return {
        subscribe,
        add: (kurssi) => update((kurssit) => [...kurssit, kurssi]),
        fetchKurssit
    };
}

export const listaKursseista = createStore();