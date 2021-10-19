<script lang="ts">
    import { onMount } from "svelte";
    import Capture from './Capture.svelte';

    let capture;
    
    onMount(()=>{
        // On Mount function. When the component appears do this immediately.
        setCanvas();
    });
	
    // Start Capturing stroke.
	function handleCapStartEvt(){

	}

	function handleCapEvt(e){

	}

	// Done Capturing stroke.
	function handleCapDoneEvt(){
	}

	// Handle cursor move...
	function handleMoveEvt(e){
	}
</script>

<div>
    <!-- Base component -->
    <Capture 
        on:capEvt={handleCapEvt}
        on:mvEvt={handleMoveEvt}
        on:capStart={handleCapStartEvt}
        on:capDone={handleCapDoneEvt}
        />

    <slot></slot>
</div>

<style>

</style>