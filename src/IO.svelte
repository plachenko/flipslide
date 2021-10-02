<script lang="ts">
	import { onMount } from "svelte";
	
	let lsStrokes = localStorage.getItem('strokes');
	let saveCanvas;
	let saveCtx;

	onMount(()=>{
		// load any local storage data.
		if(lsStrokes){
			loadLocal();
		}
		
		/*
		setInterval(()=>{
			//Auto Save
			saveLocal();
		}, 7000);
		*/
	});

	function loadLocal(){
		strokeArray = JSON.parse(lsStrokes || '[]');
		strokeArray.forEach((stroke) => {
			drawStrokes(stroke);
		});
	}
	
	function savePNG(){
		const can = layers[0].$$.ctx[0];
		const url = can.toDataURL('image/png');
		let fURL;

		fetch(url)
		.then(res => res.blob())
		.then( blob => {
			fURL = URL.createObjectURL(blob);
			window.open(fURL)
		});
	}

	function saveGIF(){
		const workerStr = WorkerGIF.default;
		const blob = new Blob([workerStr], {
			type: 'application/javascript'
		});
	}
	
	function saveLocal(){
		localStorage.setItem('strokes', JSON.stringify(strokeArray));
	}
</script>

<!-- save canvas -->
<canvas bind:this={saveCanvas} />

<style>

</style>
