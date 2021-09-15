<script lang="ts">
	import { onMount } from "svelte";
import { claim_text, xlink_attr } from "svelte/internal";
	
	let canvas;
	let ctx;
	let capture;
	let menu;

	let stroke;
	let lp;

	onMount(()=>{
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		ctx = canvas.getContext('2d');
		
		//center logo
		menu.style.left = (window.innerWidth / 2) - (menu.getBoundingClientRect().left/2) + 'px';

		capture.addEventListener('pointermove', pmv);
		capture.addEventListener('pointerdown', pdn);
		capture.addEventListener('pointerup', pup);
		capture.addEventListener('contextmenu', (e)=>{
			e.preventDefault();
		});
	});

	function draw(x = 0, y = 0){
		ctx.fillRect(x, y, 10, 10);

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(lp.x, lp.y);
		ctx.lineTo(lp.x+10, lp.y+10);
		ctx.lineTo(x+10, y+10);
		// ctx.lineTo(lp.x+10, lp.y);
		ctx.closePath();
		ctx.fill();

		lp = {x: x, y: y};
	}

	function pdn(e){
		stroke = {
			x: e.clientX,
			y: e.clientY
		}
		lp = stroke;
	}

	function pmv(e){
		if(stroke){
			draw(e.clientX, e.clientY);
			// console.log(e);
		}
	}

	function pup(e){
		stroke = null;
	}
</script>

<main>
	<div bind:this={capture} id="capture"></div>
	<canvas bind:this={canvas} />
	<div bind:this={menu} id="flipslide-logo">flipslide</div>
</main>

<style>
	main {
		position: relative;
		width: 100%;
		height: 100%;
		}
		#flipslide-logo{
			border: 1px solid;
			padding: 5px 10px;
			position: absolute;
			float: left;
			z-index: 9999;
			font-weight: bold;
			bottom: 5px;
			user-select: none;
			cursor: pointer;
		}
		#canvas{
			background-color:#F00;
		}
		#capture{
			z-index: 9999;
			width: 100%;
			height: 100%;
			position: absolute;
			}
</style>