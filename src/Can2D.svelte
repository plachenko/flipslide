<svelte:options accessors />
<script lang="ts">
	import { onMount } from "svelte";
	import Point from './classes/Point.js';
	
	let canvas;
	let ctx;

	export let strokeArray = [];
	export let iSize = 10;
	export let color = "#000";

	export let width = 0;
	export let height = 0;

	export let currentPoint = null;

	let frameIdx = 0;
	let frameArray = [];

	let stroke = [];
	let fStroke = [];

	let lp;
	let lSize;

	let bgCol = "#FFF";

	let frames = [];
	let frameLimit = 100;
	let frameNum = 0;

	$: currentPoint && handlePointChange();

	function handlePointChange(){
		stroke.push(currentPoint);
		drawPoint(currentPoint);
		/*
		console.log(currentPoint.dx);
		
		for(let x = 0; x < Math.abs(currentPoint.dx); x++){
			for(let y = 0; y < Math.abs(currentPoint.dy); y++){
				const pt = new Point(currentPoint.x + x*2, currentPoint.y + y);
				drawPoint(pt);
			}
		}
		*/
		// frameNum++;
		// console.log(frameNum);
		// clear();
		// endStroke();
	}

	export function endStroke(){
		frames[frameNum] = [...stroke, frames[frameNum]];
		stroke = [];
	}

	onMount(()=>{
		// set the canvas dimensions
		canvas.width = width || window.innerWidth;
		canvas.height = height || window.innerHeight;
		ctx = canvas.getContext('2d');

		// set canvas background
		ctx.fillStyle = bgCol;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	});


	
	export function drawStroke(stroke){
		if(stroke){
			fStroke = stroke[0];
			let e = stroke[stroke.length-1]; 

			let p1 = new Point(e.x, e.y);
			let pd = new Point(e.dx, e.dy);

			/* clear(); */
			draw(...p1.points, ...pd.points, e.pressure);

			frames[frameNum] = stroke;
			/*
			if(frameNum < frameLimit){
				frameNum++;
			}else{
				clear();
				drawFrame(frameNum);
				frameNum = 0;
			}
			*/

		}
	}

	function drawFrame(frame){

		let p1 = new Point(e.x, e.y);
		let pd = new Point(e.dx, e.dy);

		draw(...p1.points, ...pd.points, e.pressure);
	}

	function drawPoint(point: Point){
		let size = iSize;

		let x = point.x;
			x -= iSize/2;
		let y = point.y;
			y -= iSize/2;
		
		let dx = point.dx;
		let dy = point.dy; 
		
		if(dx && Math.abs(dx) >= Math.abs(dy)){
			iSize = Math.abs(Math.round(dx));
		}else if(dy && Math.abs(dy) >= Math.abs(dx)){
			iSize = Math.abs(Math.round(dy));
		}

		ctx.fillStyle = "#F00";
		ctx.fillRect(x, y, size, size);

		// if(dx && Math.abs(dx) >= Math.abs(dy)){
		// 	iSize = Math.abs(Math.round(dx));
		// }else if(dy && Math.abs(dy) >= Math.abs(dx)){
		// 	/* iSize == lSize; */
		// 	iSize = Math.abs(Math.round(dy));
		// }else{
		// 	iSize = lSize;
		// }

		// if(!lSize){
		// 	lSize = size;
		// }

		// iSize = iSize + (pressure * 5)/2;
		// iSize = snap(iSize, size)


		
		// ctx.strokeStyle = "#F00";
		// let _x = x;
		// let _y = y;

		// x -= iSize/2;
		// y -= iSize/2;

		// x = snap(x, size);
		// y = snap(y, size);

		// /* console.log(x,y,iSize) */

		// if(iSize < lSize){
		// 	ctx.fillStyle = "#F00";
		// }else{
		// 	ctx.fillStyle = "#000";
		// }
		// ctx.fillStyle = color;

		// for(let i =0; i< 100; i++){
		// 	const offset = new Point(i, i)

		// }
		// ctx.fillStyle= "#FFF";

		// lSize = iSize;
		// lp = {x: _x, y: _y};
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
