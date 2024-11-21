<script>
    import { userUuid } from "../stores/stores.js";
    import { get } from "svelte/store"
    import { onMount } from 'svelte';
    let code = '';
    let largest;

    onMount(async () => {
        const response = await fetch(`/api/latest/${$userUuid}`);

        // if there is error, go to the default assignment 1 page.
        if(response.stats !== 200) {
            window.location.href = `/assignments/1`, true;
            return;
        }

        // redirect to the latest pending/to be done assignemnt.
        const data = await response.json();
        if(data.length > 0 && data[0].max) {
            window.location.href = `/assignments/${data[0].max}`, true;
        }
        else {
            window.location.href = `/assignments/1`, true;
        }
    });
</script>