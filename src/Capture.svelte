<script lang="ts">
	import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
	import Point from "./classes/Point";

	let captureEl;
	let md = false;

    const dispatch = createEventDispatcher();

    function pEvt(e: PointerEvent) {
		const point = new Point(e.clientX, e.clientY);

		if(e.pressure){
			if(!md){
				md = true;
				dispatch('capStart');
			}
		
			point.pressure = e.pressure;
			point.dx = e.movementX;
			point.dy = e.movementY;

			dispatch('capEvt', point);
		} else {
			if(md){
				dispatch('capDone');
				md = false;
			}
			dispatch('mvEvt', point);
		}


    }
</script>

<div 
	id="capture"
	bind:this={captureEl}
	on:contextmenu|preventDefault
	on:pointermove={pEvt}
	on:pointerdown={pEvt}
	on:pointerup={pEvt}
	/>
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
