<svelte:options accessors />
<script lang="ts">
	import { onMount } from "svelte";
	
	let canvas;
	let ctx;

	export let strokeArray = [];
	export let iSize = 10;
	export	let color = "#000";

	let stroke = [];
	let fStroke = [];

	let lp;
	let lSize;


	onMount(()=>{
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		ctx = canvas.getContext('2d');
		ctx.fillStyle = "#FFF";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	});


    export function drawStroke(stroke){
				if(stroke){
					fStroke = stroke[0];
					let e = stroke[stroke.length-1]; 
					/* clear(); */
					draw(e.x, e.y, e.dx, e.dy, e.pressure);
					
				}
    }

	function draw(x, y, dx = 0, dy = 0, pressure = 0){
		if(!x){
			x = fStroke.x;
		}

		if(!y){
			y = fStroke.y;
		}

		if(dx && Math.abs(dx) >= Math.abs(dy)){
			iSize = Math.abs(Math.round(dx));
		}else if(dy && Math.abs(dy) >= Math.abs(dx)){
			/* iSize == lSize; */
			iSize = Math.abs(Math.round(dy));
		}else{
			iSize = lSize;
		}

		const size = 3;
		if(!lSize){
			lSize = size;
		}

		iSize = iSize * .6 + (pressure * 10);
		iSize = snap(iSize, size)

		function snap(val, grid){
			const num = grid * Math.round(val/grid);
			const ret = val-num < 2 ? num : lSize; 

			return ret; 
		}
		
		ctx.strokeStyle = "#F00";
		let _x = x;
		let _y = y;

		x -= iSize/2;
		y -= iSize/2;

		x = snap(x, size);
		y = snap(y, size);

		/* console.log(x,y,iSize) */

		if(iSize < lSize){
			ctx.fillStyle = "#F00";
		}else{
			ctx.fillStyle = "#000";
		}
		ctx.fillStyle = color;

		ctx.fillRect(x, y, iSize, iSize);

		lSize = iSize;
		lp = {x: _x, y: _y};
	}

	export function clear(){
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
