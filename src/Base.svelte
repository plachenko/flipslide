<script lang="ts">
	import { onMount } from "svelte";
    onMount(() => {
        console.log('mounted.');
    });

    function handlemove(){
        console.log('moving.');
    }
</script>

<div class="baseComponent" on:click={handlemove}>
    <slot></slot>
</div>

<style>
    .baseComponent{
        width: 200px;
        height: 300px;
        border: 1px solid;
        position: absolute;
        left: 10px;
        z-index: 9999;
        }

</style>
