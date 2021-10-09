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

		// Handle clear
		layers[curLayer].clear();

		// Handle Color
		layers[curLayer].color = e.detail;

	}

	// Start Capturing stroke.
	function handleCapStartEvt(){
	}

	function handleCapEvt(e){
		layers[curLayer].currentPoint = e.detail;
	}

	// Done Capturing stroke.
	function handleCapDoneEvt(){
		// layers[0].clear();
		layers[0].endStroke();
	}

	// Handle cursor move...
	function handleMoveEvt(e){
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
