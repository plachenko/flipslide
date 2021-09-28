<script lang="ts">
	import { onMount } from "svelte";
	import Can2D from './Can2D.svelte';
	import Capture from './Capture.svelte';
	import Cursor from './Cursor.svelte';
	import Menu from './Menu.svelte';
	
	let frameIdx = 0;
	let frameArray = [];

	let layers = [
		null
	];
	let strokeArray = [];

	let lsStrokes = localStorage.getItem('strokes');

	let menu;

	onMount(()=>{
		/* console.log(menu.style); */
		/* menu.style.left = "10px"; */
		
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

	function saveLocal(){
		localStorage.setItem('strokes', JSON.stringify(strokeArray));
	}

	/*
	function saveGIF(){
		const workerStr = WorkerGIF.default;
		const blob = new Blob([workerStr], {
			type: 'application/javascript'
		});
	}
	*/

	function drawStrokes(_strokeArray){
		strokeArray = [...strokeArray, _strokeArray];
		/* layers[0].iSize = 2; */
		layers[0].drawStroke(_strokeArray);
	}

	function handleStrokeEvent(e){
		/* consle.log('drawing..') */
		drawStrokes(e.detail.aPosition);
		// layers[0].draw()
		// console.log(strokes);
	}

	function handleClear(e){
		console.log('clearing')
		layers[0].clear();
	}

	function handleColor(e){
		layers[0].color = e.detail;
	}

	function savePNG(){
		const can = layers[0].$$.ctx[0];
		const url = can.toDataURL('image/png');
		let fURL;
		console.log('saving');
		fetch(url)
		.then(res => res.blob())
		.then( blob => {
			fURL = URL.createObjectURL(blob);
			window.open(fURL)
		});
	}
</script>

<main>
	<Capture on:pEvt={handleStrokeEvent} />
	<!-- <Cursor bind:pos={{x: 0, y:0}} /> -->

	{#each layers as layer}
		<Can2D bind:this={layer}  />
	{/each}

	<Menu 
		on:handleSave={savePNG} 
		on:handleClear={handleClear} 
		on:handleColor={handleColor} 
		bind:this={menu} />
</main>

<style>
	main {
		position: relative;
		width: 100%;
		height: 100%;
		}
</style>
