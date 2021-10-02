<svelte:options accessors />
<script lang="ts">
	import { onMount } from "svelte";
	import Point from './classes/Point.js';
	
	let canvas;
	let ctx;

	export let strokeArray = [];
	export let iSize = 4;
	export let color = "#000";

	export let width = 0;
	export let height = 0;

	export let currentPoint = null;
	let lastPoint;

	let stroke = [];

	let frames = [];
	let frameIdx = 0;
	let frameLimit = 100;

	$: currentPoint && handlePointChange();

	onMount(()=>{
		// set the canvas dimensions
		canvas.width = width || window.innerWidth;
		canvas.height = height || window.innerHeight;
		ctx = canvas.getContext('2d');
	});

	function lerp(v0, v1, t){
		return (1-t)*v0+(t*v1);
	}

	function drawBetween(pt1, pt2){

		let maxDiff = 0;

		let xDiff = pt2.x - pt1.x;
		let yDiff = pt2.y - pt1.y;

		if(Math.abs(xDiff) > Math.abs(yDiff)){
			maxDiff = Math.abs(xDiff);
		}else{
			maxDiff = Math.abs(yDiff);
		}
		
		/* drawPoint(pt1); */

		for(let diff = 0; diff <= maxDiff; diff++){
			let _x = lerp(pt1.x, pt2.x, diff/maxDiff);
			let _y = lerp(pt1.y, pt2.y, diff/maxDiff);

			const pt = new Point(_x, _y);

			pt.pressure = lerp(pt1.pressure, pt2.pressure, diff/maxDiff);
			pt.size = lerp(pt1.size, pt2.size, diff/maxDiff);
			pt.dx = lerp(pt1.dx, pt2.dx, diff/maxDiff);
			pt.dy = lerp(pt1.dy, pt2.dy, diff/maxDiff);

			drawPoint(pt);
		}

		/* drawPoint(pt2); */
	}

	function handlePointChange(){
		/* let pt = currentPoint; */
		let pt = new Point(currentPoint.x+iSize/2, currentPoint.y+iSize/2);
			pt.dy = currentPoint.dy;
			pt.dx = currentPoint.dx;
			pt.size = currentPoint.size;
			pt.pressure = currentPoint.pressure;

		if(!lastPoint){
			lastPoint = pt;
		}

		stroke.push(pt);

		ctx.fillStyle = "#000";
		/* drawPoint(pt); */
		drawBetween(pt, lastPoint);
		lastPoint = pt;
		
		/*
		if(xdiff > ydiff){
			for(let x = 0; x <= xdiff; x++){
				const _x = currentPoint.x - (x * Math.sign(currentPoint.dx));
				const _y = currentPoint.y - currentPoint.dy;

				const pt = new Point(_x, _y);
				drawPoint(pt);
			}
		}else{
			for(let y = 0; y <= ydiff; y++){
				const _y = currentPoint.y + (y * Math.sign(currentPoint.dy));
				const _x = currentPoint.x - y/10;

				const pt = new Point(_x, _y);
				drawPoint(pt);
			}
		}
		*/

		// for(let x = 0; x < Math.abs(currentPoint.dx); x++){
		// 	for(let y = 0; y < Math.abs(currentPoint.dy); y++){
		// 		const _x = currentPoint.x + x * Math.sign(currentPoint.dx) * 10;
		// 		const _y = currentPoint.y + y * Math.sign(currentPoint.dy) * 10;
		// 		// console.log(_x, _y)
		// 		const pt = new Point(_x, _y);
		// 		drawPoint(pt);
		// 	}
		// }
		// frameNum++;
		// console.log(frameNum);
		// clear();
		// endStroke();
	}

	export function endStroke(){
		frames[frameIdx] = [...stroke, frames[frameIdx]];
		lastPoint = null;
		stroke = [];
	}
	
	export function drawStroke(stroke){
		if(stroke){
			fStroke = stroke[0];
			let e = stroke[stroke.length-1]; 

			let p1 = new Point(e.x, e.y);
			let pd = new Point(e.dx, e.dy);

			/* clear(); */
			draw(...p1.points, ...pd.points, e.pressure);

			frames[frameIdx] = stroke;
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

		let dx = point.dx;
		let dy = point.dy; 
		
		if(dx && Math.abs(dx) >= Math.abs(dy)){
			size = Math.abs(Math.round(dx));
		}else if(dy && Math.abs(dy) >= Math.abs(dx)){
			size = Math.abs(Math.round(dy));
		}

		let x = point.x;
			x -= size/2;
		let y = point.y;
			y -= size/2;
		
		/* point.size = (size + dx); */
		point.size = (size + point.pressure)/3;

		ctx.fillRect(x, y, point.size, point.size);
		/*
		ctx.beginPath();
		ctx.arc(x,y,Math.abs(point.size), 0, Math.PI*2);
		ctx.fill();
		ctx.closePath();
		*/
		/*
		ctx.moveTo(x-point.size/2, y-point.Size/2);
		ctx.lineTo(x, y-point.size/2);
		ctx.lineTo(x, y+point.size/2);
		*/
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
