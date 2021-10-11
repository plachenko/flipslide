<script lang="ts">
	import { onMount } from "svelte";
	import Can2D from './Can2D.svelte';
	import Capture from './Capture.svelte';
	import Cursor from './Cursor.svelte';
	import Menu from './Menu.svelte';
	import Point from './classes/Point';
	import {stroke} from './assets/stroke';
	
	let menu;
	let animMenu;
	let slider;
	let brushSize = 10;
	let opacity = 1;

	let frameIdx = 0;
	let frameSkip = 1;
	let playing = false;
	let recording = false;
	let timeline;

	let layers = [
		null
	];
	let curLayer = 0;

	onMount(()=>{
		animMenu.style.left = window.innerWidth/2 - parseInt(window.getComputedStyle(animMenu).width)/2 + "px";
		recording = layers[curLayer].recording;
		let i = 0;
		
		setInterval(()=>{
			if(i < stroke.length-1){
				layers[curLayer].currentPoint = stroke[i];
				i++;
			} else {
				layers[curLayer].endStroke();
			}
		}, 10);
	});

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

	function handleSave(){
		layers[curLayer].savePNG();
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

	function handleRecord(){
		recording = !recording;
		layers[curLayer].recording = recording;
	}

	function handlePlay(){
		playing = !playing;
		if(playing){
			tick()
		}
	}

	function handleFrameChange(e){
		layers[curLayer].frameIdx = frameIdx;
	}

	function handleSkipChange(e){
		layers[curLayer].frameSkip = e.target.value;
	}

	function handleFrameEvt(){
		if(frameIdx< 100){
			frameIdx++;
		}else{
			frameIdx = 0;
		}
		handleFrameChange();
	}

	function tick(){
		if(playing){

			if(frameIdx< 100){
				frameIdx++;
			}else{
				frameIdx = 0;
			}

			setTimeout(()=>{
				requestAnimationFrame(tick);
			},100);
		}
	}

</script>

<main>

	<div style="z-index: 9999; position: absolute;" bind:this={animMenu}>
			<a on:click={handlePlay} class="btn" href="#">
				{#if !playing}
					play
				{:else}
					stop
				{/if}
			</a>

		<input 
			type="range" 
			bind:this={timeline}
			on:input={handleFrameChange} 
			bind:value={frameIdx} />

		<span>frame: {frameIdx}</span>

		<input 
			type="range" 
			min="1" 
			max="10" 
			on:input={handleSkipChange} 
			bind:value={frameSkip} 
			style="width:40px;" />

		<a on:click={handleRecord} class="btn" href="#">
			{#if !recording}
				record
			{:else}
				recording...
			{/if}
		</a>

	</div>

	<div id="brushSize" class="menu vert">
		<input on:change={handleSize} type="range" /> 
	</div>
	<div id="brushOpacity" class="menu vert">
		<input min="0" max="1" step=".1" on:change={handleOpacity} type="range" /> 
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
		<Can2D on:frameChange={handleFrameEvt} bind:this={layer}  />
	{/each}

	<Menu bind:this={menu} on:handleSave={handleSave} />
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
