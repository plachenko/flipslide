<svelte:options accessors />
<script lang="ts">
	import { onMount, createEventDispatcher } from "svelte";
    let ip = 'localhost';

    onMount(() => {
        const ws = new WebSocket('ws://localhost:8082');
    

    });

    function connect(){
        const ws = new WebSocket(`ws://'${ip}':8069`);
        ws.onopen = function(e){
            console.log(e);
            ws.send('msg');
        }

    }

</script>

<div id="networkContainer">
    <input bind:value={ip} type="text" />
    <button>connect</button>
</div>

<style>
    #networkContainer{
        position: absolute;
        bottom: 10px;
        right: 10px;
        z-index: 9999;
    }
</style>
