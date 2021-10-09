<script lang="ts">
	// import { onMount } from "svelte";
	import Can2D from './Can2D.svelte';
	import Capture from './Capture.svelte';
	import Cursor from './Cursor.svelte';
	import Menu from './Menu.svelte';
	
	let menu;
	let slider;
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
	<div id="brushSize">
		<input orient="vertical" id="range" type="range" /> 
		<div class="sliderContainer">
		</div>
	</div>
	
	<!--
	<Capture 
		on:capEvt={handleCapEvt}
		on:mvEvt={handleMoveEvt}
		on:capStart={handleCapStartEvt}
		on:capDone={handleCapDoneEvt}
		/>
	-->
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
	#range{
		background-color:#F00;
		border: 1px solid;
		transform: rotate(90deg);
		}
	#brushSize{
		border-radius: 10px;
		position: absolute;
		background-color: #555;
		height: 400px;
		left: 20px;
		width: 100px;
		/* padding: 10px; */
		box-sizing: border-box;
		top: 10px;
		}
	.sliderContainer{
		border-radius: 10px;
		box-sizing: border-box;
		/* padding: 3px; */
		background-color:#AAA;
		width: 36px;
		height: 100%;
		}
		.slider{
			border-radius: 10px;
			position:absolute;
			border: 2px solid;
			box-sizing: border-box;
			width: 30px;
			height: 30px;
			background-color: #CCC;
			}
		.cap{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0px;
			top: 0px;
			z-index:9999;

		}
</style>
