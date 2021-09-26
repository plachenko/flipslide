<script lang="ts">
	import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

	let capture;
	let bPenDown = false;
    let aPosition = [];

	onMount(()=>{
		capture.addEventListener('pointermove', pmv);
		capture.addEventListener('pointerdown', pdn);
		capture.addEventListener('pointerup', pup);
		capture.addEventListener('contextmenu', (e)=>{
			e.preventDefault();
		});
	});

    const dispatch = createEventDispatcher();

    function pEvt(e){
			aPosition.push({
				x: e.clientX,
				y: e.clientY,
				pressure: e.pressure
			});

			dispatch('pEvt', {
				aPosition
			});
    }

	/* -- Pointer Events -- */
	function pdn(e){
		bPenDown = true;
        pEvt(e);
	}

	function pmv(e){
		if(bPenDown){
            pEvt(e);
		}
	}

	function pup(e){
        // pEvt(e);
        bPenDown = false;
        aPosition = [];
	}
</script>

<div bind:this={capture} id="capture"></div>

<style>
#capture{
    touch-action: none;
    z-index: 9998;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: crosshair;
    }
</style>
