<script lang="ts">
	// import { onMount } from "svelte";
	import Can2D from './Can2D.svelte';
	import Capture from './Capture.svelte';
	import Cursor from './Cursor.svelte';
	import Menu from './Menu.svelte';
	
	let menu;
	let layers = [
		null
	];
	let curLayer = 0;

	// Handle a menu Event.
	function menuEvt(e){
		const evt = e.detail;
		console.log(evt);

		// Handle clear
		layers[curLayer].clear();

		// Handle Color
		layers[curLayer].color = e.detail;

	}

	function handleCapStartEvt(){
		// Start Capturing stroke.
	}

	function handleCapEvt(e){
		layers[curLayer].currentPoint = e.detail;
	}

	function handleCapDoneEvt(){
		// Done Capturing stroke.
		layers[0].endStroke();
	}

	function handleMoveEvt(e){
		// Handle cursor move...
	}

</script>

<main>
	<Capture 
		on:capEvt={handleCapEvt}
		on:mvEvt={handleMoveEvt}
		on:capStart={handleCapStartEvt}
		on:capDone={handleCapDoneEvt}
		/>
	<!-- <Cursor bind:pos={{x: 0, y:0}} /> -->

	{#each layers as layer}
		<Can2D bind:this={layer}  />
	{/each}

	<Menu bind:this={menu} on:menuEvt={menuEvt} />
</main>

<style>
	main {
		position: relative;
		width: 100%;
		height: 100%;
		}
</style>
