<script lang="ts">
	import { onMount } from "svelte";
	
	let canvas;
	let ctx;

	export let strokeArray = [];
	export let iSize = 10;

	let stroke = [];

	let lp = {x: 0, y: 0};

	let color = "#000";

	onMount(()=>{
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		ctx = canvas.getContext('2d');
		ctx.fillStyle = "#FFF";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	});


    export function drawStroke(stroke){
	    lp = stroke[0];
        stroke.forEach(e => {
            draw(e.x, e.y);
        });
    }

	function draw(x = 0, y = 0){
		
		ctx.strokeStyle = color;
		ctx.fillStyle = color;

		x -= iSize/2;
		y -= iSize/2;

		ctx.fillRect(x, y, iSize, iSize);

		/* ctx.beginPath(); */
		/* ctx.moveTo(x - iSize, y - iSize); */
		/* ctx.lineTo(lp.x - iSize, lp.y - iSize); */
		/* ctx.lineTo(lp.x + iSize, lp.y + iSize); */
		/* ctx.lineTo(x + iSize, y + iSize); */
		/* ctx.closePath(); */
		/* ctx.stroke(); */

		/* ctx.fill(); */

		lp = {x: x, y: y};
	}

	function clear(){
		strokeArray = [];
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	function savePNG(){
		const url = canvas.toDataURL('image/png');
		let fURL;
		fetch(url)
		.then(res => res.blob())
		.then( blob => {
			fURL = URL.createObjectURL(blob);
			window.open(fURL)
		});
	}
</script>

<canvas bind:this={canvas} />

<style>
</style>
