<script lang="ts">
import { onMount } from "svelte";
	let canvas;

	onMount(()=>{
		console.log(canvas);
	});
</script>

<main>
	<div id="capture"></div>
	<canvas bind:this={canvas} />
</main>

<style>
	main {
		position: relative;
		width: 100%;
		height: 100%;
		}
		#capture{
			background-color:#F00;
			width: 100%;
			height: 100%;
			position: absolute;
			}
</style>