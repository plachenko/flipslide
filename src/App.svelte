<script lang="ts">
	// import { onMount } from "svelte";
	import Can2D from './Can2D.svelte';
	import Capture from './Capture.svelte';
	import Cursor from './Cursor.svelte';
	import Menu from './Menu.svelte';
	
	let menu;
	let slider;
	let brushSize = 10;
	let opacity = 1;

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
		layers[curLayer].endStroke();
	}

	// Handle cursor move...
	function handleMoveEvt(e){
	}

	/* TODO Clean. */
	function handleOpacity(e){
		layers[curLayer].opacity = e.target.value;
	}

	function handleSize(e){
		layers[curLayer].iSize = e.target.value/2;
	}

	function handleColor(e){
		layers[curLayer].color = e.target.value;
	}

</script>

<main>
	<div id="brushSize" class="menu vert">
		<input on:change="{handleSize}" type="range" /> 
	</div>
	<div id="brushOpacity" class="menu vert">
		<input min="0" max="1" step=".1" on:change="{handleOpacity}" type="range" /> 
	</div>
	<input on:change="{handleColor}" value="2" type="color" class="menu" id="color">
	
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
	.menu{
		z-index: 9999;
	}

	#color{
		position: absolute;
		bottom: 10px;
	}

	.vert input[type="range"]{
		cursor: pointer;
		width: 200px !important;
		background-color:#333;
		transform: rotate(90deg);
		transform-origin: left top;
		position: absolute;
		left: 25px;
		top: 0px;
		}

	.vert{
		position: absolute;
		height: 200px;
		left: 10px;
		box-sizing: border-box;
		padding: 10px;
	}

	#brushOpacity{
		top: 300px;
	}
	#brushSize{
		width: 10px;
		top: 10px;
		}
	/*
	.sliderContainer{
		border-radius: 10px;
		box-sizing: border-box;
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
		*/
</style>
